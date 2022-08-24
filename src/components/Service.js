import './Service.css'

const Service = ({ Cardicon, Cardheading, Cardtext }) => {
  return (
    <div className="service-card">
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="#67C3F3" />
          <stop offset={1} stopColor="#5A98F2" />
        </linearGradient>
      </svg>
      <div className="service-card-icon-container">
        <Cardicon sx={{ fontSize: 90, fill: "url(#linearColors)" }} />
      </div>
      <div>
        <h1>{Cardheading}</h1>
        <p>{Cardtext}</p>
      </div>
    </div>
  );
};

export default Service;
