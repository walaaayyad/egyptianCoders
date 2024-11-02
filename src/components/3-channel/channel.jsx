import './channel.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function YouTubeChannels() {
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = process.env.VITE_YOUTUBE_API_KEY;

  const channelIds = [
    'UCveX_0uBOHVHbpV838OGXVA',
    'UCSNkfKl4cU-55Nm-ovsvOHQ',
    'UCvqYqoAu_Yp2v3hOBhi6qiQ',
    'UCGP8LgaWO1lLfFQUQ2BA7rA',
    'UC5PbBz_roYczmUR6gg_OAxw',
    'UCq_xgufsy1KrGsmJq7mFH-g',
    'UCWX_0VvMxl0_XosvYOZ7O0g',
    'UCbQh1yxBPVhyjB-G_blFFEQ',
    'UCFnqbM05-W4VpmzZj36-Kog',
    'UC4Y8dVfo_-aydzENDmE7wTw',
    'UC5COvx1Z8fnfvVkafqL_UZg',
    'UCy_3UvdcT8Ljbz6Md-6b32w',
    'UCs8PwUcH93uchrEZkB8ltNw',
    'UCw42KxUjtJ68yRXIHi6Fe-w',
    'UCuwTHYdMavwEPsZ6OAkXfig',
    'UC3UWam15SOjWxg_zCy0tXmw',
    'UCnGblT_CyMwswTIH9QmJ3YQ',
    'UCpnMFON8FKbCCHp8GTEYWHw',
    'UCJu5uNExWKx1Vrv6Ah5SHfA',
    'UCdHbeembdjHbbCY5a3ZqXZw'
  ].join(','); 

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
          params: {
            part: 'snippet,contentDetails',
            id: channelIds,
            key: apiKey,
          },
        });
        setChannels(response.data.items);
      } catch (err) {
        setError(err);
      }
    };

    fetchChannels();
  }, [channelIds, apiKey]);
if (error) {
    return <div>Error loading channel: {error.message}</div>;
  }

  if (!channels) {
    return <div>Loading...</div>;
  }

  return (
    <div className='channels container'>
        {channels.map(channel => (
          <div className="channel flex" key={channel.id}>
            <img className='img' src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
            <h2 className='title'>{channel.snippet.title}</h2>
            <p>{channel.snippet.description.length > 1 ? channel.snippet.description : "لا يوجد وصف للقناة" }</p>
            {/* <p> تم إنشاء القناة سنة :{channel.snippet.publishedAt.substring(0, 4)} </p> */}
            <a className='btn flex' href={`https://www.youtube.com/channel/${channel.id}`} target="_blank" rel="noopener noreferrer">
              View Channel
            </a>
          </div>
        ))}
    </div>
  );
};


export default YouTubeChannels