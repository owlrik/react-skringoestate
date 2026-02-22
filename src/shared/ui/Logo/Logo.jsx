function Logo() {
  return (
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
  );
}

export default Logo;
