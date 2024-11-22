import { useEffect, useState } from 'react'
import './header.css'
import NavListData from './navListData'

function header() {
  const [showList, setShowList] = useState(false);
  const storedFavStar = JSON.parse(localStorage.getItem('favStar'));
  const [favStar, setFavStar] = useState(()=> storedFavStar ? storedFavStar : []);
  const channelsList = NavListData;
  console.log('fav star',favStar)

/* Handle Favorite Stars */
const toggleFavStar = (item)=> {
  setFavStar(prev => {
    const newFav = {...prev};
    newFav[item.id] ? delete  newFav[item.id] : newFav[item.id] = item;
    return newFav;
  });
}
/* Save Favorite items in LocalStorage */
useEffect(()=> {
  localStorage.setItem('favStar', JSON.stringify(favStar))
},[favStar])

  return (
    <div className='navBar'>
      <img className='logo' src="./images/logo2.png" alt="" />
      <button className={showList? 'icon-close' : 'icon-star'} onClick={()=> setShowList(!showList)}></button>
      <div className={showList ? 'quick-list' : 'quick-list close'}>
        {/* <div className='listCloseBtn'><span className='icon-close' onClick={()=> setShowList(false)}></span>
        </div> */}
        <span className='icon-filter'></span>
        {channelsList.map(item => {
        return (
          <div  className='list-item'
                key={item.id}>
            <span 
              className={favStar[item.id] ? 'icon-star' : 'icon-star-o'}
              onClick={()=> toggleFavStar(item)}>
            </span>
            <a className='flex' 
              href={`https://www.youtube.com/channel/${item.link}`} 
              target="_blank">
                
                <img src={`./channel-Img/${item.img}`} alt="channel image" />
              {item.title}
            </a>
          </div>
          
        )  
        })}
        
      </div>
    </div>
  )
}

export default header