import React from "react";
import ReactDOM from "react-dom";
import './Header.css';
import search from '../../photos/search.png';
import flag from '../../photos/flag.png';
import tg from '../../photos/tg.png';
import images from '../../photos/image.png';

function Header(){
    return(
        <div className="header">
            <div className="above">
                <div className="left-side">
                    <div className="logo">NAMANGANLIKLAR24</div>
                    <p><span>$</span> 10137.2 <span>P</span>138.26 <span>E</span>10988.72</p>
                </div>
                <div className="right-side">
                    <div className="search"><img src={search}/></div>
                    <div className="lang">
                    <img src={flag}/>    
                    РУ</div>
                    <div className="join">
                        <img src={tg}/>
                        Подписатся</div>
                </div>
            </div>
            <div className="menu">
                <div className="menu-wrapper">
                    <ul>
                        <li>Узбекистана</li>
                        <li>Мир</li>
                        <li>Экономика</li>
                        <li><span>Политика</span></li>
                        <li> Общество</li>
                        <li> Технологии </li>
                        <li>Спорт </li>
                        <li>Культура </li>
                        <li>Происшествия  </li>
                        <li>Туризм </li>
                        
                    </ul>
                </div>
            </div>
            <div className="header-img">
                <img src={images}/>
            </div>
        </div>
    )
}
export default Header;
