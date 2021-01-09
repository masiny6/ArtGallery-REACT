import React from "react"
import "./beginner.scss"
import expertPhoto from "../../assets/images/expert-photo.jpg"
import backgroundVideo from "../../assets/images/background-video.jpg"

export const Beginner = () => {
    return(
        <div className="beginner-section">
            <div className="section-header">
                <h2 className="section-title">Не знаете с чего начать?</h2>
            </div>
            <div className="centering">
                <div className="beginner-video beginner-video-js">
                    <img className="beginner-video__preview" src={backgroundVideo} alt=""/>
                    <p className="beginner-video__text">Видеобзор нашего ресурса возможности для пользователя</p>
                </div>
                <div className="beginner-expert">
                    <a className="beginner-expert__link" href="#"><img className="beginner-expert__photo" src={expertPhoto} alt=""/></a>
                    <a className="beginner-expert__link title-underline" href="#"><h3 className="beginner-expert__title">Выбор экспертов </h3></a>
                    <a className="beginner-expert__link" href="#"><p className="beginner-expert__text">Обзор нашего экспетра Элеоноры Рубинштейн-Загорской</p></a>
                </div>
            </div>
            <div className="beginner-popup beginner-popup-js">
                <div className="beginner-popup__inner">
                    <a className="beginner-popup__exit" href="#"></a>
                    <iframe className="beginner-popup__video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}