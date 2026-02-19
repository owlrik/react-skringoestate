function Objects() {
  return (
    <section className="objects" id="objects">
      <div className="container">
        <div className="objects__inner">
          <h2 className="title-h2 objects__title">Time to choose</h2>
          <div className="tabs objects__tabs">
            {/* Вкладки категорий */}
            <div className="slider tabs-slider">
              <div className="swiper">
                <div className="swiper-wrapper tabs__list">
                  <div className="swiper-slide tabs__item">
                    <a
                      className="title-h3 tabs__link --is-active"
                      href="#apartments"
                    >
                      Apartments
                    </a>
                  </div>
                  <div className="swiper-slide tabs__item">
                    <a className="title-h3 tabs__link" href="#penthouses">
                      Penthouses
                    </a>
                  </div>
                  <div className="swiper-slide tabs__item">
                    <a className="title-h3 tabs__link" href="#townhouses">
                      Townhouses
                    </a>
                  </div>
                  <div className="swiper-slide tabs__item">
                    <a className="title-h3 tabs__link" href="#villas">
                      Villas
                    </a>
                  </div>
                  <span className="tabs__indicator"/>
                </div>
              </div>
            </div>
            {/* Содержимое вкладок */}
            <div className="tabs__content objects__content">
              <div className="tabs__content-item --is-active" id="apartments">
                <div className="slider objects-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={1}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={2}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={3}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={4}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={5}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="apartments"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={6}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="slider__nav objects-slider__nav">
                      <div className="slider-controls">
                        <div className="slider-controls__pagination"/>
                        <div className="slider-controls__navigation">
                          <div className="slider-controls__btn --prev"/>
                          <div className="slider-controls__btn --next"/>
                        </div>
                      </div>
                      <div className="objects-slider__link-wrap">
                        <a className="btn --accent objects-slider__link" href="#">
                          All objects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs__content-item" id="penthouses">
                <div className="slider objects-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="penthouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={1}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="penthouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={2}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="penthouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={3}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="penthouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={4}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="penthouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={5}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="slider__nav objects-slider__nav">
                      <div className="slider-controls">
                        <div className="slider-controls__pagination"/>
                        <div className="slider-controls__navigation">
                          <div className="slider-controls__btn --prev"/>
                          <div className="slider-controls__btn --next"/>
                        </div>
                      </div>
                      <div className="objects-slider__link-wrap">
                        <a className="btn --accent objects-slider__link" href="#">
                          All objects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs__content-item" id="townhouses">
                <div className="slider objects-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="townhouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={1}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="townhouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={2}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="townhouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={3}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="townhouses"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={4}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="slider__nav objects-slider__nav">
                      <div className="slider-controls">
                        <div className="slider-controls__pagination"/>
                        <div className="slider-controls__navigation">
                          <div className="slider-controls__btn --prev"/>
                          <div className="slider-controls__btn --next"/>
                        </div>
                      </div>
                      <div className="objects-slider__link-wrap">
                        <a className="btn --accent objects-slider__link" href="#">
                          All objects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs__content-item" id="villas">
                <div className="slider objects-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="villas"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={1}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="villas"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={2}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article
                          className="card-object"
                          data-category="villas"
                          data-name="Ellington Beach House at Palm Jumeirah"
                          data-price="$1 226 000"
                          data-index={3}
                        >
                          <div className="card-object__img-wrap">
                            <a className="card-object__img-link" href="#">
                              <img
                                src="img/object-1.jpg"
                                width={472}
                                height={300}
                                alt="Real estate object"
                              />
                            </a>
                          </div>
                          <div className="card-object__body">
                            <p className="card-object__price">
                              from <span>$1 226 000</span>
                            </p>
                            <h3 className="title-h3 card-object__name">
                              <a href="#">
                                Ellington Beach House at Palm Jumeirah
                              </a>
                            </h3>
                            <div className="card-object__info">
                              <div className="card-object__info-item --bedrooms">
                                <svg width={40} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#bed"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>3</span>
                                </p>
                              </div>
                              <div className="card-object__info-item --area">
                                <svg width={30} height={30} aria-hidden="true">
                                  <use xlinkHref="img/sprite.svg#area"/>
                                </svg>
                                <p className="card-object__info-text">
                                  from
                                  <br/> <span>1215 sqft / 122 m2</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-object__btn-wrap">
                              <a className="btn" href="#" data-modal="request">
                                Request
                              </a>
                              <a
                                className="btn --flat"
                                href="#"
                                data-modal="objects"
                              >
                                Quick view
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="slider__nav objects-slider__nav">
                      <div className="slider-controls">
                        <div className="slider-controls__pagination"/>
                        <div className="slider-controls__navigation">
                          <div className="slider-controls__btn --prev"/>
                          <div className="slider-controls__btn --next"/>
                        </div>
                      </div>
                      <div className="objects-slider__link-wrap">
                        <a className="btn objects-slider__link" href="#">
                          All objects
                        </a>
                      </div>
                    </div>
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

export default Objects;
