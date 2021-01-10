import React from "react"
import "./popupSuccess.scss"
import tickSuccess from "../../assets/images/tick-success.png"

export const PopupSuccess = () => {
    return(
        <div className="popup-success js-popup-success js-popup-close-general">
            <div className="popup-success__centering">
                <span className="popup-success__close js-popup-general-close"></span>
                <div className="popup-header">
                    <span className="popup-header__title">Успех!</span>
                </div>
                <p className="popup-success__text">Мы отправили на ваш e-mail инструкцию по сбросу пароля</p>
                <img className="popup-success__img" src={tickSuccess} alt=""/>
            </div>
        </div>
    )
}