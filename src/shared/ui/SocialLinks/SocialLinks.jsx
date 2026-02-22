function SocialLinks() {
  return (
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
  );
}

export default SocialLinks;
