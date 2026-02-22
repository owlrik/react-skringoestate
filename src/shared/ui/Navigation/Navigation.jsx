import { Container } from '@/shared/ui/Container';
import { Logo } from '@/shared/ui/Logo/Logo';

function Navigation() {
  return (
    <div className="page-header__bottom">
      <Container>
        <div className="page-header__bottom-inner">
          <div className="page-header__logo-wrap">
            <Logo />
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
                  <Logo />
                  {/*<a className="logo main-nav__link" href="/">*/}
                  {/*  <img*/}
                  {/*    className="logo__img"*/}
                  {/*    srcSet="img/logo-white@2x.png 2x"*/}
                  {/*    src="img/logo-white.png"*/}
                  {/*    width={247}*/}
                  {/*    height={120}*/}
                  {/*    alt="Logo"*/}
                  {/*  />*/}
                  {/*  <img*/}
                  {/*    className="logo__img --invert"*/}
                  {/*    srcSet="img/logo-black@2x.png 2x"*/}
                  {/*    src="img/logo-black.png"*/}
                  {/*    width={207}*/}
                  {/*    height={100}*/}
                  {/*    alt="Logo"*/}
                  {/*  />*/}
                  {/*</a>*/}
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

          {/*<div className="page-header__socials-wrap">*/}
          {/*  <button*/}
          {/*    className="btn-icon page-header__socials-btn"*/}
          {/*    type="button"*/}
          {/*    title="Back to top"*/}
          {/*  >*/}
          {/*    <svg width={16} height={16} aria-hidden="true">*/}
          {/*      <use xlinkHref="img/sprite.svg#phone" />*/}
          {/*    </svg>*/}
          {/*  </button>*/}
          {/*  <ul className="socials">*/}
          {/*    <li className="socials__item">*/}
          {/*      <a*/}
          {/*        className="socials__link"*/}
          {/*        href="tel:+971523248042"*/}
          {/*        title="Call us"*/}
          {/*      >*/}
          {/*        <span className="sr-only">Phone</span>*/}
          {/*        <svg width={23} height={23} aria-hidden="true">*/}
          {/*          <use xlinkHref="img/sprite.svg#phone" />*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="socials__item">*/}
          {/*      <a*/}
          {/*        className="socials__link"*/}
          {/*        href="https://wa.me/971523248042"*/}
          {/*        title="Whatsapp"*/}
          {/*      >*/}
          {/*        <span className="sr-only">Whatsapp</span>*/}
          {/*        <svg width={23} height={23} aria-hidden="true">*/}
          {/*          <use xlinkHref="img/sprite.svg#whatsapp" />*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="socials__item">*/}
          {/*      <a*/}
          {/*        className="socials__link"*/}
          {/*        href="https://t.me/@Olivka_321"*/}
          {/*        title="Telegram"*/}
          {/*      >*/}
          {/*        <span className="sr-only">Telegram</span>*/}
          {/*        <svg width={21} height={18} aria-hidden="true">*/}
          {/*          <use xlinkHref="img/sprite.svg#telegram" />*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="socials__item">*/}
          {/*      <a*/}
          {/*        className="socials__link"*/}
          {/*        href="https://www.instagram.com/skringo_real_estate/"*/}
          {/*        title="Instagram"*/}
          {/*        target="_blank"*/}
          {/*        rel='noreferrer'*/}
          {/*      >*/}
          {/*        <span className="sr-only">Instagram</span>*/}
          {/*        <svg width={19} height={19} aria-hidden="true">*/}
          {/*          <use xlinkHref="img/sprite.svg#instagram" />*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  );
}

export default Navigation;
