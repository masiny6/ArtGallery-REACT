import React from "react"
import "./footer.scss"
import logoFooter from "../../assets/images/logo-footer.png"
import paymentsSystems from "../../assets/images/payments-systems.png"

export const Footer = () => {
    return(
        <footer className="main-footer">
            <div className="painting-footer_up">
                <div className="centering">
                    <div className="main-footer__up">
                        <div className="about-us hidden-tablet">
                            <h6 className="about-us__title general-title">Об ArtGallery</h6>
                            <ul className="about-us__list general-list">
                                <li className="about-us__elem general-elem"><a className="general-link" href="#">О проекте</a></li>
                                <li className="about-us__elem general-elem"><a className="general-link" href="#">Блог</a></li>
                                <li className="about-us__elem general-elem"><a className="general-link" href="#">Авторы</a></li>
                            </ul>
                        </div>
                        <div className="buyers hidden-tablet">
                            <h6 className="buyers__title general-title">Покупателям</h6>
                            <ul className="buyers__list general-list">
                                <li className="buyers__elem general-elem"><a className="general-link" href="#">Доставка</a></li>
                                <li className="buyers__elem general-elem"><a className="general-link" href="#">Оплата</a></li>
                                <li className="buyers__elem general-elem"><a className="general-link" href="#">Возврат</a></li>
                            </ul>
                        </div>
                        <div className="catalog hidden-tablet">
                            <h6 className="catalog__title general-title">Каталог</h6>
                            <ul className="catalog__list general-list">
                                <li className="catalog__elem general-elem"><a className="general-link" href="#">Картины</a></li>
                                <li className="catalog__elem general-elem"><a className="general-link" href="#">Коллажи</a></li>
                                <li className="catalog__elem general-elem"><a className="general-link" href="#">Иллюстрации</a></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h6 className="contact__title general-title">Контакты</h6>
                            <ul className="contact__list">
                                <li className="contact__elem"><a className="contact__tel" href="tel:+799912312344">+ 7 (999)
                                        123-123-44</a>
                                </li>
                                <li className="contact__elem">
                                    <svg className="svg-mail" viewBox="0 0 6 5">
                                        <path id="Layer" fillRule="evenodd" className="shp0" d="M5.91 4.53L0 4.53L0 0L5.91 0L5.91 4.53ZM5.33 3.94L5.33 0.58L0.59 0.58L0.59 3.94L5.33 3.94Z" />
                                        <path id="Layer" fillRule="evenodd" className="shp0" d="M5.78 0.54L3.11 2.57C3 2.65 2.85 2.65 2.74 2.56L0.11 0.52C-0.02 0.42 -0.04 0.24 0.06 0.11C0.12 0.04 0.2 0 0.29 0L5.62 0C5.78 0 5.91 0.13 5.91 0.29C5.91 0.39 5.86 0.48 5.78 0.53L5.78 0.54ZM2.93 1.98L4.75 0.59L1.14 0.59L2.93 1.98Z" />
                                </svg>
                                    <a className="contact__mail" href="mail-to:info@domainname.ru">info@domainname.ru</a></li>
                                <li className="contact__elem">
                                    <svg className="svg-map" viewBox="0 0 372 512">
                                        <path id="Layer" fillRule="evenodd" className="shp0" d="M371.43 185.43C371.43 312.31 205.49 498.59 198.42 506.46C191.8 513.84 180.21 513.85 173.58 506.46C166.51 498.59 0.57 312.31 0.57 185.43C0.57 83.18 83.75 0 186 0C288.24 0 371.42 83.18 371.43 185.43ZM338.03 185.43C338.03 101.59 269.83 33.39 186 33.39C102.17 33.39 33.96 101.59 33.96 185.43C33.96 272.51 130.15 403.39 186 469.73C241.86 403.37 338.03 272.51 338.03 185.43Z" />
                                        <path id="Layer" fillRule="evenodd" className="shp0" d="M279.29 185.43C279.29 236.87 237.44 278.72 186 278.72C134.56 278.72 92.71 236.87 92.71 185.43C92.71 133.98 134.56 92.13 186 92.13C237.44 92.13 279.29 133.98 279.29 185.43ZM245.9 185.43C245.9 152.4 219.03 125.53 186 125.53C152.97 125.53 126.1 152.4 126.1 185.43C126.1 218.46 152.97 245.33 186 245.33C219.03 245.33 245.9 218.46 245.9 185.43Z" />
                                    </svg>
                                    <address className="contact__address">г. Москва,<br/> Преснесенская наб., 12</address>
                                </li>
                            </ul>
                        </div>
                        <div className="social-and-payer">
                            <div className="social-network">
                                <h6 className="social-network__title general-title">Мы в социальных сетях:</h6>
                                <ul className="social-network__list">
                                    <li className="social-icon__elem"><a className="social-icon__vk social-icon__link" href="#">
                                            <svg className="svg-vk" viewBox="0 0 511.962 511.962">
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
                                        </a></li>
                                    <li className="social-icon__elem"><a className="social-icon__facebook social-icon__link" href="#">
                                            <svg className="svg-facebook" viewBox="0 0 52 96">
                                                <path
                                                    d="M50.09 0.02L37.62 0C23.62 0 14.57 9.28 14.57 23.66L14.57 34.56L2.04 34.56C0.95 34.56 0.08 35.44 0.08 36.52L0.08 52.33C0.08 53.41 0.95 54.29 2.04 54.29L14.57 54.29L14.57 94.16C14.57 95.25 15.45 96.12 16.53 96.12L32.88 96.12C33.96 96.12 34.84 95.24 34.84 94.16L34.84 54.29L49.5 54.29C50.58 54.29 51.46 53.41 51.46 52.33L51.46 36.52C51.46 36 51.25 35.51 50.89 35.14C50.52 34.77 50.02 34.56 49.5 34.56L34.84 34.56L34.84 25.32C34.84 20.87 35.9 18.62 41.69 18.62L50.09 18.61C51.17 18.61 52.05 17.74 52.05 16.65L52.05 1.98C52.05 0.9 51.17 0.02 50.09 0.02Z" />
                                            </svg>
                                        </a></li>
                                    <li className="social-icon__elem"><a className="social-icon__ok social-icon__link" href="#">
                                            <svg className="svg-ok" viewBox="0 0 95.481 95.481">
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
                                        </a></li>
                                    <li className="social-icon__elem"><a className="social-icon__insta social-icon__link" href="#">
                                            <svg className="svg-insta" viewBox="0 0 20 20">
                                                <path
                                                    d="M15.38 5.38C14.96 5.38 14.62 5.04 14.62 4.61L14.62 3.08C14.62 2.65 14.96 2.31 15.38 2.31L16.92 2.31C17.35 2.31 17.69 2.65 17.69 3.08L17.69 4.61C17.69 5.04 17.35 5.38 16.92 5.38L15.38 5.38ZM10 7.07C9.44 7.07 8.93 7.23 8.48 7.5C8.62 7.46 8.76 7.43 8.92 7.43C9.74 7.43 10.4 8.09 10.4 8.92C10.4 9.74 9.74 10.4 8.92 10.4C8.09 10.4 7.43 9.74 7.43 8.92C7.43 8.76 7.46 8.62 7.5 8.48C7.23 8.92 7.07 9.44 7.07 10C7.07 11.62 8.38 12.93 10 12.93C11.62 12.93 12.93 11.62 12.93 10C12.93 8.38 11.62 7.07 10 7.07ZM10 5.38C12.55 5.38 14.62 7.45 14.62 10C14.62 12.55 12.55 14.61 10 14.61C7.45 14.61 5.38 12.55 5.38 10C5.38 7.45 7.45 5.38 10 5.38M10 3.84C6.61 3.84 3.85 6.61 3.85 10C3.85 13.39 6.61 16.15 10 16.15C13.39 16.15 16.15 13.39 16.15 10C16.15 6.61 13.39 3.84 10 3.84ZM16.25 0L3.75 0C1.68 0 0 1.68 0 3.75L0 16.25C0 18.32 1.68 20 3.75 20L16.25 20C18.32 20 20 18.32 20 16.25L20 3.75C20 1.68 18.32 0 16.25 0ZM18.46 6.92L13.43 6.92C14.17 7.74 14.62 8.81 14.62 10C14.62 12.55 12.55 14.61 10 14.61C7.45 14.61 5.38 12.55 5.38 10C5.38 8.81 5.83 7.74 6.57 6.92L1.54 6.92L1.54 3.75C1.54 2.53 2.53 1.54 3.75 1.54L16.25 1.54C17.47 1.54 18.46 2.53 18.46 3.75L18.46 6.92Z" />
                                            </svg>
                                        </a></li>
                                </ul>
                            </div>
                            <div className="payment-system">
                                <h6 className="payment-system__title general-title">Платёжные системы</h6>
                                <img className="payment-system__photo" src={paymentsSystems} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="painting-footer_down">
                <div className="centering">
                    <div className="main-footer__down">
                        <ul className="document-list">
                            <li className="document-elem"><a className="document-elem__link" href="#">Политика конфендициальности</a></li>
                            <li className="document-elem"><a className="document-elem__link" href="#">Условия и положения</a></li>
                        </ul>
                        <p className="copyright">© Artgallery, 2018</p>
                        <div className="author">
                            <img className="author__photo hidden-mobile" src={logoFooter} alt=""/>
                            <p className="author__text hidden-mobile">Разработка сайта</p>
                            <p className="author__text-mobile hidden-desktop hidden-tablet">Cайт создан <a className="author__text-mobile-link" href="#">Hawking Brothers</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}