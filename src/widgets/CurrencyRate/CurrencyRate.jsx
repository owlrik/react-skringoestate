function CurrencyRate() {
  return (
    <section className="currency-rate">
      <div className="container">
        <div className="currency-rate__inner">
          <div className="currency-rate__text-wrap">
            <p className="title-h3 currency-rate__text">
              The exchange rate of the national dirhams AED to the US dollars has
              been stable for the last 10 years
            </p>
            <ul className="list currency-rate__list">
              <li className="list__item">
                Respectively, UAE is free from inflation risks and possible
                increases in price of essential commodities.
              </li>
              <li className="list__item">
                Extremely pleasant business climate and absence of income taxes
                opens up wide opportunities for the establishment of your
                business.
              </li>
            </ul>
          </div>
          {/* Обновляемый график курса USD/AED */}
          <div className="currency-rate__chart">
            {/* TradingView Widget BEGIN */}
            <div className="tradingview-widget-container">
              <div id="tradingview_627b4" />
              <div className="tradingview-widget-copyright">
                <a
                  href="https://www.tradingview.com/symbols/USDAED/?exchange=SAXO"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="blue-text">USDAED Chart</span>
                </a>{' '}
                by TradingView
              </div>
            </div>
            {/* TradingView Widget END */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrencyRate;