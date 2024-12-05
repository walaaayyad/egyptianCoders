import './channel.css';
import SearchBar from './searchBar';
import Data from './data';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function YouTubeChannels() {
  const [channels, setChannels] = useState([]); // List of channels
  const [error, setError] = useState(null);
  const [searchVid, setSearchVid] = useState('');
  const [loading, setLoading] = useState(true); // Track loading state
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Track if there are more channels to load

   // YouTube API key and Channel IDs
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelIds = Data.join(',');

  const itemsPerPage = 6; // Number of channels to display per page

  // Fetch channels based on the currentPage and itemsPerPage
  const fetchChannels = async () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${apiKey.replace(/^['"]|['"]$/g, '')}`;
    try {
      setLoading(true); // Set loading state to true when fetching starts
      const response = await axios.get(apiUrl);
      const allChannels = response.data.items; // Get all channels data

      // Determine the range of channels to show based on the currentPage
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      const newChannels = allChannels.slice(start, end); // Get the current page's channels

      setChannels((prevChannels) => [...prevChannels, ...newChannels]); // Append new channels to the existing list
      setHasMore(newChannels.length === itemsPerPage); // Set 'hasMore' to true if more channels exist
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError(err); // Set error if fetching fails
      setLoading(false);
    }
  };

  // Fetch channels when the component mounts or when currentPage changes
  useEffect(() => {
    fetchChannels();
  }, [currentPage]);

  if (loading && currentPage === 1) {
    return <div className='loading-msg'>Loading...</div>;
  }

  if (error) {
    return <div className='loading-msg'>Error loading channels: {error.message}</div>;
  }

  // Handle Search Input
  const handleSearchInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchVid(lowerCase);
  };

  // Filter channels based on user search input
  const filterSearchInput = channels.filter((channel) => {
    return channel.snippet.title.toLowerCase().includes(searchVid);
  });

  // Clear the search input
  const clearSearchBar = () => {
    setSearchVid('');
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
  setLoading(true);
  setTimeout(() => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment the currentPage after delay
    setLoading(false);
  }, 1000); // Delay to simulate slow scrolling
};

  return (
    <div className='channels container'>
      <SearchBar  
        searchVid={searchVid}
        handleSearchInput={handleSearchInput}
        clearSearchBar={clearSearchBar}
      />

      <div className='channels-content flex'>
        <InfiniteScroll
          dataLength={channels.length} // Set the number of items loaded
          next={handleLoadMore} // Function to load more items
          hasMore={hasMore} // Whether there are more items to load
          loader={<div className='loading-msg'>Loading...</div>} // Loader component while loading
          endMessage={<div className='loading-msg'>No more results to load</div>} // Message when no more results
        >
        {filterSearchInput.length > 0 ? (
          filterSearchInput.map((channel, idx) => (
            <div className="channel flex" key={`${channel.id},${idx}`}>
              <img 
                className="img" 
                src={channel.snippet.thumbnails.default.url} 
                alt={channel.snippet.title} 
              />
              <h2 className="title">{channel.snippet.title}</h2>
              <p>{channel.snippet.description.length > 1 ? 
                channel.snippet.description : "لا يوجد وصف للقناة"}</p>
              <a 
                className="btn flex" 
                href={`https://www.youtube.com/channel/${channel.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow the link">
                <span className="icon-youtube-play"></span>
                View Channel 
              </a>
            </div>
          ))
        ) : (
          <p>No Result</p>
        )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default YouTubeChannels;
