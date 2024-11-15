import './channel.css';
import React, { useEffect, useState } from 'react';

function YouTubeChannels() {
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);

  // Use the environment variable for API key
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const data = [
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
    'UCdHbeembdjHbbCY5a3ZqXZw',
    'UCPpguAKsCona6eJBjWT-2Cw',
    'UC2Gl0VkJjuMZh2jUkW6GI7Q',
    'UCiOouGMUwmtrH94zYUnlOMQ',
    'UCNMvR21W292doQIU326HQTQ',
    'UCywDxXiDYW3fDsxN1CtFvEw',
    'UC4Hz-ntDHefICIBkutpadBA',
    'UCtk1PX6rwD1A4yBsfXTVCcw',
    'UC0bLYqDH3v-4LgqqzJp9e2Q',
    'UCh-Wyi7aWSkvGujc-5FKc4w',
    'UC-TeQlDX3eBHHXvzCb7DH9g',
    'UCo0qWmxZdc1FhAL5emRNzcA',
    'UChCMIwQrelEqLZT7Lt1L5Og',
    'UCGn0UnpR7wbIzSXaKARH2dA',
    'UCqzsLuqrvc-tQQ28fV5SZNQ',
    'UCtOyb8800Av9Q-7i-l2mYyA',
    'UCZiV7heCuc_307kI9Ze_7Mw',
    'UCV_YCp6YEC74RbgLn3ninag',
    'UCuJlicMvOtLYLK8pe2d2jbQ',
    'UCN6CFzqrkiEfC93rjywpAhQ',
    'UCEwfTBslCkubj_TlTBLNyNA',
    'UCoqTiDGxa7C7CSDDq8K7_7A',
    'UCUGC4ks3qfq5fLN8ElzuKhA',
    'UCNpJQYA7qh3PyAgMUrA4oxw'
  ]
  const channelIds = data.join(','); 

  console.log(data.length);

  useEffect(() => {
    const fetchChannels = async () => {
      const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${apiKey.replace(/^['"]|['"]$/g, '')}`;
      try {
        // Using fetch instead of axios
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        setChannels(data.items);
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

  return (
    <div className='channels container'>
      {channels.map(channel => (
        <div className="channel flex" key={channel.id}>
          <img className='img' src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
          <h2 className='title'>{channel.snippet.title}</h2>
          <p>{channel.snippet.description.length > 1 ? channel.snippet.description : "لا يوجد وصف للقناة"}</p>
          <a className='btn flex' href={`https://www.youtube.com/channel/${channel.id}`} target="_blank" rel="noopener noreferrer">
            View Channel
          </a>
        </div>
      ))}
    </div>
  );
}

export default YouTubeChannels;
