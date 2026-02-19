function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__content">
            <p className="title-h1 intro__call-to-action">
              Invest in your future with no % installment!
            </p>
            <p className="title-h3 intro__slogan">
              Real estate in Dubai is a smart investment
            </p>
            <div className="intro__btn-wrap">
              <a className="btn --invert" href="#" data-modal="contacts">
                Contact your manager
              </a>
              <a className="btn --invert" href="#">
                Get brochure
              </a>
            </div>
          </div>
          <span className="intro__let-scroll" />
        </div>
      </div>
    </section>
  );
}

export default Intro;