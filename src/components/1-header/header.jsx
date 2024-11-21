import { useEffect, useState } from 'react'
import './header.css'
import NavListData from './navListData'

function header() {
  const [showList, setShowList] = useState(false)
  const channelsList = NavListData;
  console.log('channelsList',channelsList.length)

  return (
    <div className='navBar'>
      <img className='logo' src="./images/logo2.png" alt="" />
      <button className={showList? 'icon-close' : 'icon-star'} onClick={()=> setShowList(!showList)}></button>
      <div className={showList ? 'quick-list' : 'quick-list close'}>
        {/* <div className='listCloseBtn'><span className='icon-close' onClick={()=> setShowList(false)}></span>
        </div> */}
        {channelsList.map(item => {
        return (
          <a 
            key={item.id} 
            href={`https://www.youtube.com/channel/${item.link}`} 
            target="_blank">
              <span className='icon-star-o'></span>
              <img src={`./channel-Img/${item.img}`} alt="channel image" />
            {item.title}
          </a>
        )  
        })}
        
      </div>
    </div>
  )
}

export default header