import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./popupAuthorization.scss"




export const PopupAuthorization = () => {

    const {state, popupHideHandler, popupShowHandler} = useContext(RateContext)

    const popupHide = ["popup-authorization", "js-popup-authorization", "js-popup-close-general"]

    if(state.showPopup && state.valuePopup === "authorization") {
        popupHide.splice(2,1)
    }

    
    return(
        <div className={popupHide.join(" ")}>
            <div className="popup-authorization__centering">
                <span className="popup-authorization__close js-popup-general-close" onClick={popupHideHandler}></span>
                <div className="popup-header">
                    <span className="popup-header__title">Авторизация</span>
                    <div className="no-account">
                        <span className="no-account__text">Ещё нет аккаунта?</span>
                        <span className="no-account__registr js-no-account__registr" onClick={() => popupShowHandler("registr")}>Зарегистрироваться</span>
                    </div>
                </div>
                <div className="network-and-form">
                    <div className="social-network">
                        <span className="social-network__title">С помощью социальных сетей</span>
                        <ul className="social-network__list">
                            <li className="social-network__elem social-network__vk">
                                <svg className="svg-general svg-vk" viewBox="0 0 511.962 511.962">
                                <path d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
                                c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
                                c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
                                c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
                                c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
                                c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
                                c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
                                c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
                                c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
                                s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
                                C488.583,400.807,524.359,398.599,507.399,370.471z" />
                            </svg>
                            <a className="social-network__link" href="#">VKontakte</a></li>
                            <li className="social-network__elem social-network__fb">
                                <svg className="svg-general svg-fb" viewBox="0 0 52 96">
                                    <path
                                        d="M50.09 0.02L37.62 0C23.62 0 14.57 9.28 14.57 23.66L14.57 34.56L2.04 34.56C0.95 34.56 0.08 35.44 0.08 36.52L0.08 52.33C0.08 53.41 0.95 54.29 2.04 54.29L14.57 54.29L14.57 94.16C14.57 95.25 15.45 96.12 16.53 96.12L32.88 96.12C33.96 96.12 34.84 95.24 34.84 94.16L34.84 54.29L49.5 54.29C50.58 54.29 51.46 53.41 51.46 52.33L51.46 36.52C51.46 36 51.25 35.51 50.89 35.14C50.52 34.77 50.02 34.56 49.5 34.56L34.84 34.56L34.84 25.32C34.84 20.87 35.9 18.62 41.69 18.62L50.09 18.61C51.17 18.61 52.05 17.74 52.05 16.65L52.05 1.98C52.05 0.9 51.17 0.02 50.09 0.02Z" />
                                </svg>
                                <a className="social-network__link" href="#">Facebook</a></li>
                            <li className="social-network__elem social-network__ok">
                                <svg className="svg-general svg-ok" viewBox="0 0 95.481 95.481">
                                    <path d="M43.041,67.254c-7.402-0.772-14.076-2.595-19.79-7.064c-0.709-0.556-1.441-1.092-2.088-1.713
                            c-2.501-2.402-2.753-5.153-0.774-7.988c1.693-2.426,4.535-3.075,7.489-1.682c0.572,0.27,1.117,0.607,1.639,0.969
                            c10.649,7.317,25.278,7.519,35.967,0.329c1.059-0.812,2.191-1.474,3.503-1.812c2.551-0.655,4.93,0.282,6.299,2.514
                            c1.564,2.549,1.544,5.037-0.383,7.016c-2.956,3.034-6.511,5.229-10.461,6.761c-3.735,1.448-7.826,2.177-11.875,2.661
                            c0.611,0.665,0.899,0.992,1.281,1.376c5.498,5.524,11.02,11.025,16.5,16.566c1.867,1.888,2.257,4.229,1.229,6.425
                            c-1.124,2.4-3.64,3.979-6.107,3.81c-1.563-0.108-2.782-0.886-3.865-1.977c-4.149-4.175-8.376-8.273-12.441-12.527
                            c-1.183-1.237-1.752-1.003-2.796,0.071c-4.174,4.297-8.416,8.528-12.683,12.735c-1.916,1.889-4.196,2.229-6.418,1.15
                            c-2.362-1.145-3.865-3.556-3.749-5.979c0.08-1.639,0.886-2.891,2.011-4.014c5.441-5.433,10.867-10.88,16.295-16.322
                            C42.183,68.197,42.518,67.813,43.041,67.254z" />
                                    <path d="M47.55,48.329c-13.205-0.045-24.033-10.992-23.956-24.218C23.67,10.739,34.505-0.037,47.84,0
                            c13.362,0.036,24.087,10.967,24.02,24.478C71.792,37.677,60.889,48.375,47.55,48.329z M59.551,24.143
                            c-0.023-6.567-5.253-11.795-11.807-11.801c-6.609-0.007-11.886,5.316-11.835,11.943c0.049,6.542,5.324,11.733,11.896,11.709
                            C54.357,35.971,59.573,30.709,59.551,24.143z" />
                                </svg>
                                <a className="social-network__link" href="#">Odnoklassniki</a></li>
                            <li className="social-network__elem social-network__google">
                                <svg className="svg-general svg-google" viewBox="0 0 50 50">
                                    <path d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z"/>
                                    </svg>
                                <a className="social-network__link" href="#">Google +</a></li>
                        </ul>
                    </div>
                    <div className="section-form">
                        <form className="form-authorization js-form-authorization" action="#">
                            <fieldset className="fieldset-email">
                                <legend className="label-email">E-mail</legend>
                                <input className="input-email" type="email" name="email" required/>
                            </fieldset>
                            <fieldset className="fieldset-password">
                                <legend className="label-password">Пароль</legend>
                                <input className="input-password" type="password" name="password" required/>
                            </fieldset>
                            <div className="button__inner">
                                <button className="button-authorization">Авторизоваться</button>
                            </div>
                            
                        </form>
                        <div className="forgotten-password">
                            <span className="forgotten-password__text js-forgotten-password__text">Забыли пароль?</span>
                            <span className="forgotten-password__button js-forgotten-password__button" onClick={() => popupShowHandler("recovery")}>Восстановить пароль</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}