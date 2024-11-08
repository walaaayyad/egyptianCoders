import "./hero.css";
import Lottie from 'lottie-react';
import heroImg from '../../animation/heroImg.json'

function hero() {
  return (
    <div className='hero flex'>
      <div className="container">
        <div className="heroTitle">
        <h1>دليل لمطوري البرمجيات المصريين  <br/>على يوتيوب</h1>
        <p> كود بالمصري،  هو وجهتك لتجد أفضل قنوات يوتيوب لمطوري البرمجيات في مصر.<br/> استمتع بدروس وشروحات تساهم في تطوير مهاراتك واكتساب المعرفة في عالم البرمجة والتكنولوجيا.</p>
      </div>
      <div className="heroImg">
        <Lottie animationData={heroImg}/>
      </div>
      </div>
      <div className="btns">
        <button className="hero-btn">قنوات تعليمية عربية</button>
        <button className="hero-btn">قنوات تعليمية أجنبية</button>
      </div>
    </div>
  )
}

export default hero
