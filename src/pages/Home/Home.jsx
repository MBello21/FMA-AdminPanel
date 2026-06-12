import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">React 19 + React Router v7</h1>
        <p className="home-subtitle">
          Boilerplate Frontend listo para producción
        </p>
        <div className="home-badges">
          <span className="badge">React 19</span>
          <span className="badge">Vite 6</span>
          <span className="badge">React Router v7</span>
          <span className="badge">JavaScript</span>
        </div>
        <button className="home-btn">Empezar</button>
      </div>
    </div>
  );
};
export default Home