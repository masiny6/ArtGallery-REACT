import React from "react"
import "./popupPasswordRecovery.scss"

export const PopupPasswordRecovery = () => {
    return(
        <div className="popup-recovery js-popup-recovery js-popup-close-general">
            <div className="popup-recovery__centering">
                <span className="popup-recovery__close js-popup-general-close"></span>
                <div className="popup-header">
                    <span className="popup-header__title">Восстановить пароль</span>
                </div>
                <form className="form-recovery js-form-recovery" action="">
                    <fieldset className="fieldset-email">
                        <legend className="label-email">Введите свой e-mail</legend>
                        <input className="input-email" type="email" name="email" placeholder="E-mail" required/>
                    </fieldset>
                    <div className="button__inner">
                        <button className="button-recovery" type="submit">Восстановить пароль</button>
                    </div>
                </form>
                <div className="forgotten-password">
                    <span className="forgotten-password__text">Вспомнили пароль?</span>
                    <span className="forgotten-password__button js-forgotten-password__button">Авторизоваться</span>
                </div>
            </div>
        </div>
    )
}