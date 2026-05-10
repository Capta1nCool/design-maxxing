export const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="badge">
        Real-time data API for founders and agents
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className="hero-text">Magically simplify accounting and taxes</h1>
      <p className="hero-desc">
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up
        in 10 mins. Back to building by 9:47am.
      </p>
      <div className="hero-actions">
        <button className="trial-btn">Get started</button>
        <button className="pricing-btn">
          Pricing{" "}
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity=".5"
              strokeWidth="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
