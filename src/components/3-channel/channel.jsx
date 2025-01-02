import './channel.css';
import SearchBar from './searchBar';
import InitialChannels from './initData' //Initial channels to avoid exceeded data [Youtube API returns 50 channels per request]
import Data from './data'; // The channels IDs for YouTube API fetch
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

function YouTubeChannels() {
  const [channels, setChannels] = useState(InitialChannels); // List of channels
  const [error, setError] = useState(null);
  const [searchVid, setSearchVid] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  //----------------------------------------------------------------------
  // YouTube API key and Channel IDs
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelIds = Data.join(',');

  const fetchDataCalled = useRef(false); // Prevent duplicate API calls
  //----------------------------------------------------------------------
  // Fetch channels based on the currentPage and itemsPerPage
  const fetchChannels = async () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${apiKey.replace(/^['"]|['"]$/g, '')}`;
    try {
      const response = await axios.get(apiUrl);
      setChannels((prevChannels) => [
        ...prevChannels, // Keep the previously added channels
        ...response.data.items, // Append the fetched channels
      ]);
    } catch (err) {
      setError(err); // Set error if fetching fails
    }
  };
  //----------------------------------------------------------------------
  // Fetch channels when the component mounts or when currentPage changes 
  useEffect(() => {
    // Only fetch data if it has not been fetched before
    if (!fetchDataCalled.current) {
      fetchChannels(); // Fetch the remaining channels
      fetchDataCalled.current = true; // Mark as fetched
    }
  }, []); // Empty dependency array ensures it only runs once on mount
  //----------------------------------------------------------------------
  // Handle Search Input 
  const handleSearchInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchVid(lowerCase);
  };
  //----------------------------------------------------------------------
  // Filter channels based on user search input 
  const filterSearchInput = channels.filter((channel) => {
    return channel.snippet.title.toLowerCase().includes(searchVid);
  });
  //----------------------------------------------------------------------
  // Clear the search input
  const clearSearchBar = () => {
    setSearchVid('');
  };
  //----------------------------------------------------------------------
  // Handle Load More Button 
  const itemsPerPage = 12;
  const currentChannels = filterSearchInput.slice(0, currentPage * itemsPerPage);
  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };


  console.log('data', channels.length);

  return (
    <div className="channels container">
      <SearchBar
        searchVid={searchVid}
        handleSearchInput={handleSearchInput}
        clearSearchBar={clearSearchBar}
      />
      <div className="channels-content flex">
        {currentChannels.length > 0 ? (
          currentChannels.map((channel, index) => (
            <div className="channel flex" key={`${channel.id}-${index}`}>
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
                aria-label="Follow the link"
              >
                <span className="icon-youtube-play"></span>
                View Channel
              </a>
            </div>
          ))
        ) : (
          <p>No Result</p>
        )}
        <div className='container'>
          {currentChannels.length !== channels.length ?
          <button 
            className='loadMore_btn btn'
            onClick={handleLoadMore}
          >
            View More Channels
          </button>
          :
          <button 
            className='hidden'
          >
          </button>
        }
        </div>
        {error && <div className="wifi"><span className="icon-wifi-off"></span></div>}
      </div>
    </div>
  );
}

export default YouTubeChannels;
