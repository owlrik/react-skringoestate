function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__inner">
          <div className="gallery__title-wrap">
            <h2 className="title-h2 gallery__title">Gallery</h2>
          </div>
          <div className="slider gallery-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a className="gallery__img-link" href="#">
                    <img
                      src="img/gallery-3.jpg"
                      width={935}
                      height={701}
                      alt="Real estate object photo"
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="gallery__img-link" href="#">
                    <img
                      src="img/gallery-4.jpg"
                      width={935}
                      height={701}
                      alt="Real estate object photo"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-slider__nav">
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

export default Gallery;