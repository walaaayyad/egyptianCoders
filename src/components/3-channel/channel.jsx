import './channel.css';
import SearchBar from './searchBar'
import Data from './data'
import React, { useEffect, useState } from 'react';

function YouTubeChannels() {
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);
  const [searchVid, setSearchVid] = useState('')

  // Use the environment variable for API key
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelIds = Data.join(',');
   

  console.log(Data.length);

  useEffect(() => {
    const fetchChannels = async () => {
      const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${apiKey.replace(/^['"]|['"]$/g, '')}`;
      try {
        // Using fetch instead of axios
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const Data = await response.json();
        setChannels(Data.items);
      } catch (err) {
        setError(err);
      }
    };

    fetchChannels();
  }, [channelIds, import.meta.env.VITE_YOUTUBE_API_KEY]);

  if (error) {
    return <div>Error loading channels: {error.message}</div>;
  }

  if (!channels) {
    return <div>Loading...</div>;
  }

  /* Handle Search Bar User Input  */
  const handleSearchInput = (e)=> {
    let lowerCase = e.target.value.toLowerCase();
    setSearchVid(lowerCase)
    console.log(searchVid);
  }
  /* Filter Videos Based On User Search */
  const filterSearchInput = channels.filter(channel => {
    return channel.snippet.title.toLowerCase().includes(searchVid);
  })
  /* Clear the searchBar user input */
  const clearSearchBar = ()=> {
    setSearchVid('');
  }


  return (
    <div className='channels container'>
      <SearchBar  
        searchVid = {searchVid}
        handleSearchInput= {handleSearchInput}
        clearSearchBar = {clearSearchBar}
      />

      <div className='channels-content flex'>
        {filterSearchInput.length > 0 ? (
          filterSearchInput.map(channel => (
        <div className="channel flex" key={channel.id}>
          <img className='img' src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
          <h2 className='title'>{channel.snippet.title}</h2>
          <p>{channel.snippet.description.length > 1 ? channel.snippet.description : "لا يوجد وصف للقناة"}</p>
          <a className='btn flex' href={`https://www.youtube.com/channel/${channel.id}`} target="_blank" rel="noopener noreferrer">
            <span className='icon-youtube-play'></span>
            View Channel 
          </a>
        </div>
      ))
        ): (
        <p>No Result</p>
        )}

      </div>
    </div>
  );
}

export default YouTubeChannels;
