function Visa() {
  return (
    <section className="visa" id="visa">
      <div className="container">
        <div className="visa__inner">
          <div className="visa__text-wrap">
            <h2 className="title-h2 visa__title">
              Simplified procedure for getting a resident visa
            </h2>
            <p className="title-h3 visa__text">
              Purchasing real estate in Dubai gives you the right to get a
              resident visa for you and your family easily without duration
              limits. This provides the following opportunities:
            </p>
          </div>
          <div className="visa__inner-cols">
            <div className="visa__list-wrap">
              <ul className="list visa__list">
                <li className="list__item">Getting an Emirates ID</li>
                <li className="list__item">
                  Opportunity to get a local driving license for personal
                  transport
                </li>
                <li className="list__item">
                  Opportunity to get a medical insurance
                </li>
                <li className="list__item">
                  Local schools’ education for your children
                </li>
                <li className="list__item">
                  Opportunity to set an account in local bank and take a loan
                </li>
              </ul>
              {/*                <a class="visa__link-more" href="#">Learn more</a>*/}
            </div>
            <div className="visa__img-wrap" data-animate="">
              <img
                src="img/visa-3-1.jpg"
                width={498}
                height={311}
                alt="Resident visa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visa;