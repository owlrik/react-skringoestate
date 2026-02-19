function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="page-footer__inner">
          <ul className="socials --fixed">
            <li className="socials__item">
              <a
                className="socials__link"
                href="https://wa.me/971523248042"
                title="Whatsapp"
                target="_blank"
                rel='noreferrer'
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
                target="_blank"
                rel='noreferrer'
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
            <li className="socials__item">
              <a className="socials__link" href="tel:+971523248042" title="Call us">
                <span className="sr-only">Phone</span>
                <svg width={23} height={23} aria-hidden="true">
                  <use xlinkHref="img/sprite.svg#phone" />
                </svg>
              </a>
            </li>
          </ul>
          <button className="scroll-up btn-icon" type="button">
            {/*        <svg width="82" height="9" aria-hidden="true">*/}
            {/*          <use xlink:href="img/sprite.svg#arrow"></use>*/}
            {/*        </svg>*/}
          </button>
          <div className="copyright">
            <p className="copyright__text page-footer__text">
              ©&nbsp;SKRINGO REAL ESTATE L/n 1012796 RERA 29105
            </p>
          </div>
          <a className="page-footer__link page-footer__text" href="#">
            Processing of personal data
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
