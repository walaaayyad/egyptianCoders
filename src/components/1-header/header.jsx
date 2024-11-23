import { useEffect, useState } from 'react'
import './header.css'
import NavListData from './navListData'

function header() {
  const [showList, setShowList] = useState(false);
  const storedFavStar = JSON.parse(localStorage.getItem('favStar'));
  const [favStar, setFavStar] = useState(()=> storedFavStar ? storedFavStar : []);
  const [filtering, setFiltering] = useState(false);
  const channelsList = NavListData;
  console.log('fav star',favStar)

/* Handle Open & Close Favorite Menu */
const handleFavMenu = ()=> {
  setShowList(!showList);
}
if(showList) {
  document.body.classList.add('hide');
}
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

/* Handle filter button */
const handleFilterItems = ()=> {
  setFiltering(prev => !prev);
}
const filteredItems = channelsList.filter(item => favStar[item.id]);
  return (
    <div className='navBar'>
      <img className='logo' src="./images/logo2.png" alt="" />
      <button className={showList? 'icon-close' : 'icon-star'} onClick={handleFavMenu}></button>
      <div className={showList ? 'quick-list' : 'quick-list close'}>

        {/* Filter button */}
        <span className={filtering ? 'icon-list' : 'icon-filter'} onClick={handleFilterItems}></span>

        {/* Display filtered items or all items based on filtering state */}
        {(filtering ? filteredItems : channelsList).map(item => {
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