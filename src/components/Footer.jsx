const Footer = () => {
  return (
    <div
      className="card text-center bg-dark"
      data-bs-theme="dark"
      style={{
        borderRadius: 0,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};

export default Footer;
