import React from "react";
import './Main.css';
import Frame from '../../photos/Frame.png'
import odno from '../../photos/odno.png'
import facebook from '../../photos/facebook.png'
import twitter from '../../photos/twitter.png'
import appleStore from '../../photos/appleStore.png'
import googlePlay from '../../photos/googlePlay.png'
import tgsky from '../../photos/tg-sky.png';

function Main(){
    return(
        <div className="MainPage">
            <div className="left-side">
                <div className="text">Напишите нам</div>
                <form className="form">
                    <input type="text" value="Имя"/>
                    <input type="email" value="Электронная почта"/>
                    <input type="text" value="Номер телефона"/>
                    <input type="text" value="Тема"/>
                    {/* <textarea placeholder="Текст" value='Текст' rows="4" cols="50"/> */}
                    <textarea id="w3review" name="w3review" rows="15" cols="75">Текст
</textarea>
                    
                    <div className="filechoosen">
                        <label for="files" class="btn">Прикрепить файл <img src={Frame}/></label>
                        <input id="files" style={{visibility: 'hidden'}} type="file"/>
                    </div>
                    <div className="kod">
                        <input type="text" value="Код"/>
                        <label>4 k 7 Z a</label>
                    </div>
                    <div className="submit">Отправить</div>
                   
                </form>
            </div>
            <div className="right-side">
                <div className="title">NAMANGANLIKLAR24</div>
                <div className="Mail">            
                    <div className="email">Электронная почта</div>
                    <div>info@namanganliklar24.uz</div>
                </div>
                <div className="social">            
                    <div className="social-title">Социальные сети</div>
                    <div className="social-icon">
                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={odno}/>
                    </div>
                </div>
                <div className="tg">            
                    <div className="tg-chanel">Телеграм канал</div>
                    <div><div className="main-tg">
                        <img src={tgsky}/>
                        Подписатся</div></div>
                </div>
                <div className="app">            
                    <div className="app-title">Мобильная приложение</div>
                    <div className="app-icon">
                        <img style={{marginRight: 10}} src={appleStore}/>
                        <img src={googlePlay}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;