import './channel.css';
import SearchBar from './searchBar';
import Data from './data';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function YouTubeChannels() {
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);
  const [searchVid, setSearchVid] = useState('');
  const [loading, setLoading] = useState(true); // Track loading state

  // Use the environment variable for API key
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelIds = Data.join(',');

  // Check if channelIds and apiKey are stable
  useEffect(() => {
    const fetchChannels = async () => {
      const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${apiKey.replace(/^['"]|['"]$/g, '')}`;
      
      try {
        setLoading(true); // Set loading state to true when fetching starts
        const response = await axios.get(apiUrl);
        setChannels(response.data.items); // Set channels data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchChannels();
  }, [channelIds, apiKey]); // Only run once if `channelIds` or `apiKey` doesn't change

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading channels: {error.message}</div>;
  }

  /* Handle Search Bar User Input  */
  const handleSearchInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchVid(lowerCase);
  };

  /* Filter Videos Based On User Search */
  const filterSearchInput = channels.filter((channel) => {
    return channel.snippet.title.toLowerCase().includes(searchVid);
  });

  /* Clear the searchBar user input */
  const clearSearchBar = () => {
    setSearchVid('');
  };

  return (
    <div className='channels container'>
      <SearchBar  
        searchVid={searchVid}
        handleSearchInput={handleSearchInput}
        clearSearchBar={clearSearchBar}
      />

      <div className='channels-content flex'>
        {filterSearchInput.length > 0 ? (
          filterSearchInput.map((channel) => (
            <div className="channel flex" key={channel.id}>
              <img 
                className='img' 
                src={channel.snippet.thumbnails.default.url} 
                alt={channel.snippet.title} 
              />
              <h2 className='title'>{channel.snippet.title}</h2>
              <p>{channel.snippet.description.length > 1 ? 
                channel.snippet.description : "لا يوجد وصف للقناة"}</p>
              <a 
                className='btn flex' 
                href={`https://www.youtube.com/channel/${channel.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow the link">
                <span className='icon-youtube-play'></span>
                View Channel 
              </a>
            </div>
          ))
        ) : (
          <p>No Result</p>
        )}
      </div>
    </div>
  );
}

export default YouTubeChannels;
