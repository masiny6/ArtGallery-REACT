import React from "react"
import "./styles.scss"
import stylesPhoto1 from "../../assets/images/styles-photo-1.jpg"
import stylesPhoto2 from "../../assets/images/styles-photo-2.jpg"
import stylesPhoto3 from "../../assets/images/styles-photo-3.jpg"
import stylesPhoto4 from "../../assets/images/styles-photo-4.jpg"
import stylesPhoto5 from "../../assets/images/styles-photo-5.jpg"
import stylesPhoto6 from "../../assets/images/styles-photo-6.jpg"




export const Styles = () => {
    return(
        <div className="styles-section">
            <div className="section-header">
                <h2 className="section-title">Обзор стилей</h2>
                <div className="swiper-button">
                    <div className="swiper-button__prev"></div>
                    <div className="swiper-button__next"></div>
                </div>
            </div>
            <div className="centering">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="styles-list-one">
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto1})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Современное НЮ</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новое изобразительное
                                            искусство</span>
                                    </div>
                                </div>
                            </div>
                            <div className="styles-list-two">
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto2})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Уорхолом</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новый Поп Арт</span>
                                    </div>
                                </div>
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto3})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Гансом
                                            Хофманном</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новый абстрактный
                                            экспрессионизм</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="styles-list-two">
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto4})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Уорхолом</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новый Поп Арт</span>
                                    </div>
                                </div>
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto5})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Гансом
                                            Хофманном</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новый абстрактный</span>
                                    </div>
                                </div>
                            </div>
                            <div className="styles-list-one">
                                <div className="styles-list" style = {{backgroundImage: `url(${stylesPhoto6})`}}>
                                    <div className="styles-list__elem">
                                        <span className="styles-text__elem styles-text__elem_up">Современное НЮ</span>
                                        <span className="styles-text__elem styles-text__elem_down">Новое изобразительное
                                            искусство</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    )
}