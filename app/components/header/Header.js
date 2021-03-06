import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
import "../headerWhite/headerWhite.scss"
import { RateContext } from '../../context/RateContext'




export const Header = () => {

  const {state, popupShowHandler, toggleHeaderHandler} = useContext(RateContext)

  //Открыти и закрытие language
  const languageHide = ["languages-list", "languages-list-js"]

  if(state.showHeader && state.valueHeader === "language") {
      languageHide.splice(1,1)
  } else if(state.showHeader == false && state.valueHeader === "language") {
    state.valueHeader = ""
  }

  //Открыти и закрытие search
  const searchHide = ["search-centering", "search-centering-js"]
  const searchInput = document.querySelector(".search-form__input")

  if(state.showHeader && state.valueHeader === "search") {
      searchHide.splice(1,1)
      setTimeout(function() {
        searchInput.focus()
      }, 1)
  } else if(state.showHeader == false && state.valueHeader === "search") {
    state.valueHeader = ""
    setTimeout(function() {
      searchInput.blur()
    }, 1)
    searchInput.value = ""
  }
  //Открыти и закрытие "ещё"
  const moreHide = ["still-centering", "still-js"]
  const moreInput = document.querySelector(".still")

  if(state.showHeader && state.valueHeader === "more") {
      moreHide.splice(1,1)
      moreInput.classList.add("still-background-js")
  } else if(state.showHeader == false && state.valueHeader === "more") {
    state.valueHeader = ""
    moreInput.classList.remove("still-background-js")
  }

    return(
        <header className="main-header">
          <div className="centering main-header__centering">
            <div className="menu-and-logo">
              <input id="burger-menu" className="burger-menu" type="checkbox"/><label className="menu-phone" htmlFor="burger-menu"></label>
              <div className="logo">
                <a className="logo-link" href="#">
                  <p className="main-logo"><span className="main-logo__elem">Art</span>Gallery</p>
                </a>
                <a className="logo-link" href="#">
                  <p className="main-logo-mobile"><span className="main-logo__elem">A</span>G</p>
                </a>
              </div>
            </div>
            <nav className="main-navigation main-navigation-js">
              <ul className="navigation">
                <li className="navigation__elem"><NavLink className="navigation__link" to="/catalog">Каталог</NavLink></li>
                <li className="navigation__elem"><a className="navigation__link" href="#">Художники</a></li>
                <li className="navigation__elem"><a className="navigation__link" href="#">Блог</a></li>
                <li className="navigation__elem"><a className="navigation__link still" href="#" onPointerEnter={() => toggleHeaderHandler("more")} onPointerLeave={() => toggleHeaderHandler("more")}>Ещё</a></li>
              </ul>
              <div className={moreHide.join(" ")} onPointerLeave={() => toggleHeaderHandler("more")}>
                <ul className="still-list">
                  <li className="still-list__elem"><a className="still-list__link" href="#">О проекте</a></li>
                  <li className="still-list__elem"><a className="still-list__link" href="#">Доставка</a></li>
                  <li className="still-list__elem"><a className="still-list__link" href="#">Политика конфиденциальности</a></li>
                  <li className="still-list__elem hidden-desktop hidden-tablet"><a className="still-list__link" href="#">Английская
                      версия</a></li>
                </ul>
                <p className="copyright-mobile hidden-desktop hidden-tablet">© Artgallery, 2018</p>
              </div>
            </nav>
            <div className="account-and-etc">
              <div className="personal-account">
                <span className="personal-account__photo" onClick={() => popupShowHandler("authorization")}></span>
                <span className="personal-account__name">Александрелло</span>
                <div className="drop-menu-account drop-menu-account-js">
                  <div className="centering-lists">
                    <ul className="first-section centering-lists__item">
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мой
                          профиль</a></li>
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мои
                          заказы</a></li>
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link"
                          href="#">Сообщения</a></li>
                    </ul>
                    <ul className="second-section centering-lists__item">
                      <li className="second-section__elem centering-lists__general"><a className="centering-lists__link"
                          href="#">Настройки профиля</a></li>
                      <li className="second-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мои
                          работы</a></li>
                    </ul>
                    <ul className="third-section centering-lists__item">
                      <li className="third-section__elem centering-lists__general exit">
                        <a className="centering-lists__link exit__link" href="#"><span>Выйти</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="list-etc">
                <li className="list-etc__elem"><a className="list-etc__link favourites" href="#">
                    <svg className="svg-heart" viewBox="0 0 5 5">
                      <path id="Layer" className="shp0"
                        d="M3.45 0C4.22 0.01 4.84 0.62 4.84 1.39C4.84 1.76 4.7 2.11 4.43 2.38L2.57 4.23C2.48 4.32 2.34 4.32 2.25 4.23L0.41 2.38C-0.14 1.83 -0.14 0.95 0.41 0.4C0.97 -0.16 1.89 -0.13 2.42 0.44C2.68 0.16 3.05 0 3.45 0ZM3.45 -0.01L3.44 -0.01C3.44 -0.01 3.45 -0.01 3.45 -0.01ZM4.1 2.07C4.28 1.89 4.38 1.65 4.38 1.4C4.38 0.88 3.96 0.46 3.44 0.46C3.09 0.46 2.78 0.64 2.62 0.94C2.54 1.1 2.31 1.1 2.22 0.94C1.91 0.38 1.16 0.3 0.73 0.73C0.36 1.1 0.36 1.69 0.73 2.06L2.42 3.75L4.12 2.06L4.1 2.07Z" />
                    </svg>
                    <span className="counter-favourites counter">66</span>
                  </a></li>
                <li className="list-etc__elem"><a className="list-etc__link basket" href="#">
                    <svg className="svg-basket" viewBox="0 0 3 4">
                      <path id="Layer" className="shp0"
                        d="M1.46 0C1.46 0 1.46 0 1.45 0C1.45 0 1.45 0 1.45 0L1.46 0ZM1.45 0C1.85 0 2.18 0.33 2.18 0.73L2.91 0.73L2.91 3.64L0 3.64L0 0.73L0.73 0.73C0.73 0.33 1.06 0 1.45 0ZM1.45 0.36C1.25 0.36 1.09 0.52 1.09 0.72L1.82 0.72C1.82 0.52 1.66 0.36 1.46 0.36L1.45 0.36ZM0.37 1.09L0.37 3.27L2.55 3.27L2.55 1.09L0.37 1.09Z" />
                    </svg>
                    <span className="counter-basket counter">67</span>
                  </a></li>
                <li className="list-etc__elem"><a className="list-etc__link search" href="#">
                    <svg className="svg-search" viewBox="0 0 4 4" onClick={() => toggleHeaderHandler("search")}>
                      <path id="Layer" className="shp0" d="M2.32 2.6L3.32 3.6L3.6 3.32L2.6 2.32L2.32 2.6Z" />
                      <path id="Layer" className="shp0"
                        d="M3.09 1.54C3.09 1.94 2.94 2.33 2.64 2.63C2.34 2.93 1.94 3.08 1.55 3.08C1.15 3.08 0.76 2.93 0.46 2.63C0.16 2.33 0.01 1.93 0.01 1.54C0.01 1.14 0.16 0.75 0.46 0.45C0.76 0.15 1.16 0 1.55 0C1.95 0 2.34 0.15 2.64 0.45C2.94 0.75 3.09 1.15 3.09 1.54ZM2.7 1.54C2.7 1.25 2.59 0.95 2.36 0.73C2.13 0.5 1.84 0.39 1.55 0.39C1.26 0.39 0.96 0.5 0.74 0.73C0.52 0.95 0.4 1.25 0.4 1.54C0.4 1.83 0.51 2.13 0.74 2.35C0.96 2.57 1.26 2.69 1.55 2.69C1.84 2.69 2.14 2.58 2.36 2.35C2.59 2.13 2.7 1.83 2.7 1.54Z" />
                    </svg>
                  </a></li>
              </ul>
              <div className={searchHide.join(" ")}>
                <form className="search-form" action="#">
                  <input className="search-form__input search-form__input-js" type="text" placeholder="Поиск..."/>
                  <button className="search-form__button" type="submit"></button>
                  <button className="search-form__button-clear" type="reset"></button>
                </form>
              </div>
              <div className="languages">
                <span className="languages__ru" onClick={() => toggleHeaderHandler("language")}>RU</span>
                <ul className={languageHide.join(" ")}>
                  <li className="languages-elem"><a className="languages__en" href="#">EN</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    )
}