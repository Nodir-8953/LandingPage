import React from "react";
import './Footer.css';
import tgblue from '../../photos/tg-blue.png';

function Footer(){
    return (
        <div className="Footer">
            <div className="Footer-top">
                <div className="Footer-title">NAMANGANLIKLAR24</div>
                <div className="Footer-text">
                    <div>Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</div>
                    <div className="join-tg">
                        <img src={tgblue}/>
                        Подписатся</div></div>
                
            </div>
            <div className="Footer-line">

            </div>
            <div className="Footer-bottom">
                <div className="Footer-about">
                    <span>О сайте</span><br/><br/> 
                    Воспроизводство, копирование, тиражирование,<br/> распространение и иное использование<br/>  информации с сайта «NAMANGANLIKLAR24.UZ» <br/> возможно только с предварительного письменного <br/> разрешения редакции.
                </div>
                <div className="Footer-info">
                    <div>Информация о сайте </div>
                    <p>Напишите нам </p>
                    <p>Реклама</p>
                    <p> Прислать новость</p>
                </div>
                <div className="Footer-docs">
                    <div>Использование материалов</div>
                    <p>Темы дня</p> 
                    <p>Наша команда</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;