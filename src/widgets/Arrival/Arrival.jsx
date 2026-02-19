function Arrival() {
  return (
    <section
      className="arrival"
      style={{ backgroundImage: 'url("img/arrival-1.png")' }}
    >
      <div className="container">
        <div className="arrival__inner">
          <h2 className="title-h2 arrival__title">We are ready to pay for you</h2>
          <p className="title-h3 arrival__subtitle">
            Airplane tickets, hotel accommodation and drivers
          </p>
          <div className="arrival__bottom">
            <p className="arrival__descr">
              Our representative will meet you at the airport. During the
              screenings and choosing an investment object, you will live in a
              comfortable hotel and drive with a personal driver at our expense
            </p>
            <div className="arrival__btn-wrap">
              <a className="btn" href="#" data-modal="pick">
                Pick up object
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrival;