function About() {
  return (
    <section
      className="about-us"
      style={{ backgroundImage: 'url("img/about-1.jpg")' }}
    >
      <div className="container">
        <div className="about-us__inner">
          <header className="about-us__header">
            <h2 className="title-h2 about-us__title">About us</h2>
            <div className="about-us__descr">
              <p>
                We provide real estate matching services in Dubai. We provide
                expert information about the real estate market in Dubai, high
                level of service, focusing on client needs.
              </p>
              <p>
                We care what kind of car you drive to view, what kind of emotions
                you experience while searching and buying, and how well the
                information about the property is presented to you.
              </p>
              <p>
                We do not just bring you closer to buying a property, but also
                help you with further renting for profit.
              </p>
            </div>
          </header>
          <p className="about-us__title-decor">About us</p>
          <div className="about-us__features">
            <p className="title-h3 about-us__features-title">
              The reasons to choose Skringo Real Estate
            </p>
            <ul className="list about-us__list">
              <li className="list__item">
                Assistance in preparation and verification of documents for the
                transaction
              </li>
              <li className="list__item">
                Support at every stage of the transaction
              </li>
              <li className="list__item">Quality service</li>
              <li className="list__item">
                Information about profitable objects for purchase and investment
                for further sale or lease
              </li>
            </ul>
          </div>
          <div className="stats about-us__stats">
            <div className="stats__item">
              <p className="stats__number">
                <span>8</span>+
              </p>
              <p className="stats__caption">years of experience</p>
            </div>
            <div className="stats__item">
              <p className="stats__number">
                <span>3</span>+
              </p>
              <p className="stats__caption">languages</p>
            </div>
            <div className="stats__item">
              <p className="stats__number">
                <span>20</span>+
              </p>
              <p className="stats__caption">number of employees</p>
            </div>
            <div className="stats__item">
              <p className="stats__number">
                <span>500</span>+
              </p>
              <p className="stats__caption">offers in the database</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
