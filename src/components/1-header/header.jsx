import { useEffect, useState } from 'react'
import './header.css'
import NavListData from './navListData'
import hero from '../2-hero/hero';

function header() {
  const [showList, setShowList] = useState(false);
  const storedFavStar = JSON.parse(localStorage.getItem('favStar'));
  const [favStar, setFavStar] = useState(()=> storedFavStar ? storedFavStar : []);
  const [filtering, setFiltering] = useState(false);
  const [theme, setTheme] = useState('dark');
  const channelsList = NavListData;
  console.log('fav star',favStar)

/************************** Dark & Light Mood ****************************/
/* Handle Theme Btn */
useEffect(()=> {
 if(theme === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light')
 } else if (theme === 'dark') {
    document.body.classList.remove('light');
    document.body.classList.add('dark')
 }
},[theme]);

const handleTheme = ()=> {
  setTheme(theme === "dark" ? "light" : "dark")
  console.log(theme);
}


    


/************************** Favorit Stars Items Menu ****************************/
/* Handle Open & Close Favorite Menu */
const handleFavMenu = ()=> {
  setShowList(!showList);
  console.log(showList)
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
      <div className="navBtns flex">
        <button className={showList ? 'icon-close' : 'icon-star'} onClick={handleFavMenu}></button>
        <button className={theme === 'light' ? 'icon-moon-o':'icon-sun'}  onClick={handleTheme}></button>
      </div>
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