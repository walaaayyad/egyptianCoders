import { useState } from 'react'
import './header.css'

function header() {
  const [showList, setShowList] = useState(false)
  const channelsList = [
    {id:1, img:'mohamedElDesouki.jpg', title: ' محمد الدسوقي Mohamed El Desouki', link: 'UCWX_0VvMxl0_XosvYOZ7O0g'},
    {id:2, img:'elzero.jpg', title: 'Elzero Web School', link: 'UCSNkfKl4cU-55Nm-ovsvOHQ'},
    {id:3, img:'codezilla.jpg', title: 'Codezilla', link: 'UCveX_0uBOHVHbpV838OGXVA'},
    {id:4, img:'uniqueCoderz.jpg', title: 'Unique Coderz Academy',link: 'UCq_xgufsy1KrGsmJq7mFH-g'},
    {id:5, img:'yehiaTech.jpg', title: 'يحيى تك Yehia Tech', link: 'UCGP8LgaWO1lLfFQUQ2BA7rA'},
    {id:6, img:'fathy&abusrea.jpg', title: 'فتحي و أبوسريع Fathy & Abusrea', link: 'UCJu5uNExWKx1Vrv6Ah5SHfA'},
    {id:7, img:'octuCode.jpg', title: 'OctuCodeOctuCode', link: 'UCvqYqoAu_Yp2v3hOBhi6qiQ'},
    {id:8, img:'aliSleem.jpg', title: 'Ali Sleem | علي سليم', link: 'UCw42KxUjtJ68yRXIHi6Fe-w'},
    {id:9, img:'aliShahin.jpg', title: 'Ali Shahin', link: 'UC4Y8dVfo_-aydzENDmE7wTw'},
    {id:10, img:'bebsata.jpg', title: 'اتعلم ببساطة', link: 'UC5COvx1Z8fnfvVkafqL_UZg'},
    {id:11, img:'yallaCode.jpg', title: 'Yallacode', link: 'UCuwTHYdMavwEPsZ6OAkXfig'},
    {id:12, img:'webSchool.jpg', title: 'محمد يحيى', link: 'UC2Gl0VkJjuMZh2jUkW6GI7Q'},
    {id:13, img:'syntax.jpg', title: 'Syntax', link: 'UCNMvR21W292doQIU326HQTQ'},
    {id:14, img:'simpleArab.jpg', title: 'Simple Arab Code', link: 'UCdHbeembdjHbbCY5a3ZqXZw'},
    {id:15, img:'shadow.jpg', title: 'Shadow Coding', link: 'UC4Hz-ntDHefICIBkutpadBA'},
    {id:16, img:'smoothBytes.jpg', title: 'SmoothBytes (Ahmed Magdy)', link: 'UCiOouGMUwmtrH94zYUnlOMQ'},
    {id:17, img:'readaTech.jpg', title: 'Reda Tech رضا تك', link: 'UCy_3UvdcT8Ljbz6Md-6b32w'},
    {id:18, img:'mohamedShoShan.jpg', title: 'محمد شوشان', link: 'UCtOyb8800Av9Q-7i-l2mYyA'},
    {id:19, img:'mohamedElkashef.jpg', title: 'Mohamed Elkashef', link: 'UCFnqbM05-W4VpmzZj36-Kog'},
    {id:20, img:'noorBoi.jpg', title: 'NoorBoi Tech', link: 'UCNpJQYA7qh3PyAgMUrA4oxw'},
    {id:21, img:'minaBoules.jpg', title: 'Mina Boules Fouad', link: 'UCywDxXiDYW3fDsxN1CtFvEw'},
    {id:22, img:'megaCode.jpg', title: 'Mega Code', link: 'UCEwfTBslCkubj_TlTBLNyNA'},
    {id:23, img:'mazen.jpg', title: 'Mazen Canada 🇨🇦', link: 'UC0bLYqDH3v-4LgqqzJp9e2Q'},
    {id:24, img:'math.jpg', title: 'تراب الماث', link: 'UCuJlicMvOtLYLK8pe2d2jbQ'},
    {id:25, img:'korsat.jpg', title: 'كورسات في البرمجة - Korsat X Parmaga', link: 'UCtk1PX6rwD1A4yBsfXTVCcw'},
    {id:26, img:'hassouna.jpg', title: 'Hassouna Academy', link: 'UC5PbBz_roYczmUR6gg_OAxw'},
    {id:27, img:'hardCode.jpg', title: 'محمود سامي Hard-Code l', link: 'UCN6CFzqrkiEfC93rjywpAhQ'},
    {id:28, img:'ghareeb.jpg', title: 'غريب الشيخ || Ghareeb Elshaikh', link: 'UCnGblT_CyMwswTIH9QmJ3YQ'},
    {id:29, img:'fatma.jpg', title: 'Fatma Magdy', link: 'UCoqTiDGxa7C7CSDDq8K7_7A'},
    {id:30, img:'elGammal.jpg', title: 'AbdurRahman ElGammal', link: 'UCZiV7heCuc_307kI9Ze_7Mw'},
    {id:31, img:'codeZone.jpg', title: 'codeZone', link: 'UChCMIwQrelEqLZT7Lt1L5Og'},
    {id:32, img:'devGeeks.jpg', title: 'DevGeeks Academy', link: 'UCPpguAKsCona6eJBjWT-2Cw'},
    {id:33, img:'drCode.jpg', title: 'DrCode;', link: 'UCV_YCp6YEC74RbgLn3ninag'},
    {id:34, img:'codersCamp.jpg', title: 'Coders Camp - Rasha Abdeen', link: 'UCpnMFON8FKbCCHp8GTEYWHw'},
    {id:35, img:'beProgramer.jpg', title: 'كن مبرمجا', link: 'UC-TeQlDX3eBHHXvzCb7DH9g'},
    {id:36, img:'abdelrahmanGamal.jpg', title: 'Abdelrahman Gamal', link: 'UCbQh1yxBPVhyjB-G_blFFEQ'},
    {id:37, img:'ayaNasser.jpg', title: 'Dr. Aya Nasser - د. آية ناصر', link: 'UCqzsLuqrvc-tQQ28fV5SZNQ'},
    {id:38, img:'codingMirror.jpg', title: 'CodingMirror', link: 'UCUGC4ks3qfq5fLN8ElzuKhA'},
    {id:39, img:'code.jpg', title: 'Code', link: 'UC3UWam15SOjWxg_zCy0tXmw'},  
    {id:40, img:'ahmedElemam.jpg', title: 'Ahmed Elemam', link: 'UCYmPRHG8l6LMihiIV6xPhag'},  
    {id:41, img:'codeWithD.jpg', title: 'Code With D', link: 'UCo0qWmxZdc1FhAL5emRNzcA'},
    {id:42, img:'softwareTube.jpg', title: 'SoftwareTube', link: 'UC2mU-JkQ3kkkc8S6d29UlPA'},
    {id:43, img:'dataSolution.jpg', title: 'Data Solutions', link: 'UC1YeuVGPjFX-gKD5aK-Wfug'},
    {id:44, img:'courses4arab.jpg', title: 'Courses 4 Arab || اتعلم فى ساعة', link: 'UCs8PwUcH93uchrEZkB8ltNw'},
    {id:45, img:'putcodes.jpg', title: 'putcodes', link: 'UC3_wZsZVPqBH04GTwqZHmkQ'},
    {id:46, img:'amrMohamed.jpg', title: 'Amr Mohamed', link: 'UCrKr6aiLvFxj1csAUfekiuw'},
    {id:47, img:'ahmedMohamady.jpg', title: 'ahmed mohamady', link: 'UCh-Wyi7aWSkvGujc-5FKc4w'},
    {id:48, img:'arabDev.jpg', title: 'Arab Developers', link: 'UCGn0UnpR7wbIzSXaKARH2dA'},
    {id:49, img:'mohamedEbrahim.jpg', title: 'Mohamed Ebrahim Saad', link: 'UCGbrg29FWhK503HN0KsPkjA'}
  ]
  console.log('channelsList',channelsList.length)
  return (
    <div className='navBar'>
      <img className='logo' src="./images/logo2.png" alt="" />
      <button className='listOpenBtn icon-star' onClick={()=> setShowList(true)}></button>
      <div className={showList ? 'quick-list' : 'quick-list close'}>
        <div className='listCloseBtn'><span className='icon-close' onClick={()=> setShowList(false)}></span></div>
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