function Cryptocurrency() {
  return (
    <section className="cryptocurrency" id="crypto">
      <div className="container">
        <div className="cryptocurrency__inner">
          <header className="cryptocurrency__header">
            <h2 className="title-h2 cryptocurrency__title">
              Buy property in Dubai with cryptocurrency
            </h2>
            <ul className="cryptocurrency__list">
              <li className="cryptocurrency__item">
                <img
                  src="img/crypto-tether.svg"
                  width={58}
                  height={66}
                  alt="Tether"
                />
              </li>
              <li className="cryptocurrency__item">
                <img
                  src="img/crypto-ethereum.svg"
                  width={56}
                  height={64}
                  alt="Ethereum"
                />
              </li>
              <li className="cryptocurrency__item">
                <img
                  src="img/crypto-bitcoin.svg"
                  width={56}
                  height={64}
                  alt="Bitcoin"
                />
              </li>
            </ul>
            <p className="title-h3 cryptocurrency__subtitle">
              Without income tax
            </p>
            <div className="cryptocurrency__btn-wrap">
              <a className="btn cryptocurrency__btn" href="#" data-modal="crypto">
                Buy property with crypto
              </a>
            </div>
          </header>
          <div className="cryptocurrency__inner-cols">
            <div className="cryptocurrency__text-wrap">
              <div className="js-accordion accordion cryptocurrency__accordion">
                <div className="js-accordion-item accordion__item --is-active">
                  <button
                    className="js-accordion-trigger accordion__item-trigger"
                    type="button"
                  >
                <span className="title-h3 accordion__item-title">
                  Nowadays buying real estate with cryptocurrency is a regular
                  thing. World famous reliable developed provide an
                  opportunity like that:
                </span>
                    <svg width={24} height={24} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#chevron" />
                    </svg>
                  </button>
                  <div className="js-accordion-content accordion__item-descr">
                    <ul className="list">
                      <li className="list__item">Fam Properties</li>
                      <li className="list__item">EMAAR</li>
                      <li className="list__item">Select Group</li>
                      <li className="list__item">Damac</li>
                      <li className="list__item">Meraas</li>
                    </ul>
                  </div>
                </div>
                <div className="js-accordion-item accordion__item">
                  <button
                    className="js-accordion-trigger accordion__item-trigger"
                    type="button"
                  >
                <span className="title-h3 accordion__item-title">
                  Mutual settlements when drawing up sales contracts are made
                  in local currency - dirhams
                </span>
                    <svg width={24} height={24} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#chevron" />
                    </svg>
                  </button>
                  <div className="js-accordion-content accordion__item-descr">
                    <p>
                      We are ready to help you with assistance in accompanying an
                      entire transaction, in particular, with the conversion and
                      deposit of funds for the selected property item
                    </p>
                    <ul className="list">
                      <li className="list__item">
                        transaction commission is up to 3%
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="js-accordion-item accordion__item">
                  <button
                    className="js-accordion-trigger accordion__item-trigger"
                    type="button"
                  >
                <span className="title-h3 accordion__item-title">
                  You make a contract directly with the developer and
                  conversion is made through the crypto exchange service
                </span>
                    <svg width={24} height={24} aria-hidden="true">
                      <use xlinkHref="img/sprite.svg#chevron" />
                    </svg>
                  </button>
                  <div className="js-accordion-content accordion__item-descr">
                    <ul className="list">
                      <li className="list__item">
                        Provides a decent safety level
                      </li>
                      <li className="list__item">The clarity of transaction</li>
                      <li className="list__item">No extra fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="cryptocurrency__img-wrap">
              <img
                src="img/crypto-1.png"
                width={982}
                height={640}
                alt="Cryptocurrencies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cryptocurrency;