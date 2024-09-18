import "./Header.css";

const HeaderComponent = () => {
  return (
    <section className="header">
      <div className="header-logo">
        <img src="assets/images/logo-light.svg" alt="Logo da empresa workit" />
        <p>Apply for access</p>
      </div>

      <div className="header-acess">
        <h1>Data tailored to your needs.</h1>
        <button className="btn">Learn more</button>
      </div>

      <div className="header-img">
        <img
          src="assets/images/image-hero.webp"
          alt="Logo do celular da empresa"
        />
      </div>
    </section>
  );
};
export default HeaderComponent;
