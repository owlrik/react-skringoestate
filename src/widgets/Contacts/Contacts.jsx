function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts-info contacts__map-info">
            <div className="contacts-info__item contacts-info__logo-wrap">
              <picture>
                <source type="image/webp" srcSet="img/logo-contacts.webp" />
                <img
                  src="img/logo-contacts.png"
                  width={455}
                  height={169}
                  alt="Logo"
                />
              </picture>
            </div>
            <p className="contacts-info__item">One by Omniyat, 401</p>
            <a className="contacts-info__item" href="tel:+971523248042">
              +971 52 324 8042
            </a>
            <a
              className="contacts-info__item"
              href="mailto:info@skringoestate.com"
            >
              info@skringoestate.com
            </a>
            <ul className="socials contacts-info__item">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://wa.me/971523248042"
                  title="Whatsapp"
                >
                  <span className="sr-only">Whatsapp</span>
                  <svg
                    className="socials__icon"
                    width={40}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#whatsapp" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={40}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#whatsapp-fill" />
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
                  <svg
                    className="socials__icon"
                    width={47}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#telegram" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={47}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#telegram-fill" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="https://www.instagram.com/skringo_real_estate/"
                  title="Instagram"
                  target="_blank"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="socials__icon"
                    width={40}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#instagram" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={40}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#instagram-fill" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="tel:+971523248042"
                  title="Call us"
                >
                  <span className="sr-only">Phone</span>
                  <svg
                    className="socials__icon"
                    width={38}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#phone" />
                  </svg>
                  <svg
                    className="socials__icon --fill"
                    width={38}
                    height={40}
                    aria-hidden="true"
                  >
                    <use xlinkHref="img/sprite.svg#phone-fill" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts__map-wrap">
            <div
              className="contacts__map"
              id="map"
              style={{ backgroundImage: 'url("img/map-1.png")' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4464239672666!2d55.262101900000005!3d25.1881633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6919c0139845%3A0x72c48ab3281ce6a8!2sOne%20by%20OMNIYAT!5e0!3m2!1sen!2sru!4v1667216823466!5m2!1sen!2sru"
                width={1520}
                height={735}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;