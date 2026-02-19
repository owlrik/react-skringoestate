function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__inner">
          <div className="slider benefits-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <article className="card-benefits">
                    <div className="card-benefits__img-wrap">
                      <img
                        src="img/benefit-1.jpg"
                        width={735}
                        height={578}
                        alt="Cover"
                      />
                    </div>
                    <div className="card-benefits__text-wrap">
                      <h2 className="title-h2 card-benefits__title">
                        Dubai real estate as an investment
                      </h2>
                      <p className="card-benefits__text">
                        No plans for living and having business in Dubai? Buying a
                        property here is a very attractive investment: only for
                        the last year the market has grown by 24%. The growing
                        tendency is still expected for the next 5 years. Here are
                        the several reasons to do rental business in Dubai:
                      </p>
                      <ul className="list card-benefits__list">
                        <li className="list__item">
                          Rent profitability is from 10 to 16% annually
                        </li>
                        <li className="list__item">
                          No need to pay income tax from rent
                        </li>
                        <li className="list__item">
                          Rent contract is commonly made for the year
                        </li>
                        <li className="list__item">
                          Real estate market is ordered and regulated by the
                          government. Owners and tenants are protected on the
                          legal basis
                        </li>
                      </ul>
                      <div className="card-benefits__btn-wrap">
                        <a
                          className="btn --accent card-benefits__btn"
                          href="#"
                          data-modal="contacts"
                        >
                          Contact your manager
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="card-benefits">
                    <div className="card-benefits__img-wrap">
                      <img
                        src="img/benefit-2.jpg"
                        width={734}
                        height={529}
                        alt="Cover"
                      />
                    </div>
                    <div className="card-benefits__text-wrap">
                      <h2 className="title-h2 card-benefits__title">
                        Advantages of buying real estate in Dubai:
                      </h2>
                      <ul className="list card-benefits__list">
                        <li className="list__item">Minimum down payment</li>
                        <li className="list__item">
                          Opportunity to get residence for you and your family
                        </li>
                        <li className="list__item">
                          0% of installment overpayment
                        </li>
                        <li className="list__item">
                          Maximum period of installment - 10 years
                        </li>
                        <li className="list__item">
                          All objects are initially sold with an excellent repairs
                          and quality furnishing
                        </li>
                        <li className="list__item">
                          Rich infrastructure around all objects
                        </li>
                      </ul>
                      <div className="card-benefits__btn-wrap">
                        <a
                          className="btn --accent card-benefits__btn"
                          href="#"
                          data-modal="contacts"
                        >
                          Contact your manager
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="benefits-slider__nav">
                <div className="slider-controls">
                  <div className="slider-controls__pagination" />
                  <div className="slider-controls__navigation">
                    <div className="slider-controls__btn --prev" />
                    <div className="slider-controls__btn --next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;