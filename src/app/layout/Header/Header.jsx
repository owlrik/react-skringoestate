function Header() {
  return (
    <header className="page-header">
      <div className="page-header__top">
        <div className="container">
          <div className="page-header__top-inner">
            <a className="page-header__link" href="tel:+971523248042">
              +971 52 324 8042
            </a>
            <a className="page-header__link" href="mailto:info@skringoestate.com">
              info@skringoestate.com
            </a>
            <ul className="socials">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://www.instagram.com/skringo_real_estate/"
                  title="Instagram"
                  target="_blank"
                  rel='noreferrer'
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="socials__icon"
                    width={19}
                    height={19}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#instagram" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#instagram-fill" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://t.me/@Olivka_321"
                  title="Telegram"
                  target="_blank"
                  rel='noreferrer'
                >
                  <span className="sr-only">Telegram</span>
                  <svg
                    className="socials__icon"
                    width={21}
                    height={18}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#telegram" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={28}
                    height={24}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#telegram-fill" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://wa.me/971523248042"
                  title="Whatsapp"
                  target="_blank"
                  rel='noreferrer'
                >
                  <span className="sr-only">Whatsapp</span>
                  <svg
                    className="socials__icon"
                    width={23}
                    height={23}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#whatsapp" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#whatsapp-fill" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://www.youtube.com/channel/UCidncC-Moyra2AZYt3yfhTQ"
                  title="Youtube"
                  target="_blank"
                  rel='noreferrer'
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    className="socials__icon"
                    width={32}
                    height={23}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#youtube" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={32}
                    height={24}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#youtube-fill" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-header__bottom">
        <div className="container">
          <div className="page-header__bottom-inner">
            <div className="page-header__logo-wrap">
              <a className="logo page-header__logo" href="/">
                <img
                  className="logo__img"
                  src="img/logo-white.png"
                  width={247}
                  height={120}
                  alt="Skringo company logo"
                />
                <img
                  className="logo__img --invert"
                  src="img/logo-black.png"
                  width={247}
                  height={120}
                  alt="Skringo company logo"
                />
              </a>
            </div>
            <div className="page-header__menu-wrap">
              <nav className="main-nav">
                <ul className="main-nav__list">
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#objects">
                      Objects
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#reasons">
                      Why Dubai
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#visa">
                      Visa
                    </a>
                  </li>
                  <li className="main-nav__item --logo">
                    <a className="logo main-nav__link" href="/">
                      <img
                        className="logo__img"
                        srcSet="img/logo-white@2x.png 2x"
                        src="img/logo-white.png"
                        width={247}
                        height={120}
                        alt="Logo"
                      />
                      <img
                        className="logo__img --invert"
                        srcSet="img/logo-black@2x.png 2x"
                        src="img/logo-black.png"
                        width={207}
                        height={100}
                        alt="Logo"
                      />
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#crypto">
                      Pay with crypto
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="page-header__toggle" type="button" aria-label="Menu display switch">
              <span />
            </button>
            <div className="page-header__socials-wrap">
              <button
                className="btn-icon page-header__socials-btn"
                type="button"
                title="Back to top"
              >
                <svg width={16} height={16} aria-hidden="true">
                  <use xlinkHref="img/sprite.svg#phone" />
                </svg>
              </button>
              <ul className="socials">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="tel:+971523248042"
                    title="Call us"
                  >
                    <span className="sr-only">Phone</span>
                    <svg width={23} height={23} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#phone" />
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://wa.me/971523248042"
                    title="Whatsapp"
                  >
                    <span className="sr-only">Whatsapp</span>
                    <svg width={23} height={23} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#whatsapp" />
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://t.me/@Olivka_321"
                    title="Telegram"
                  >
                    <span className="sr-only">Telegram</span>
                    <svg width={21} height={18} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#telegram" />
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/skringo_real_estate/"
                    title="Instagram"
                    target="_blank"
                    rel='noreferrer'
                  >
                    <span className="sr-only">Instagram</span>
                    <svg width={19} height={19} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#instagram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
