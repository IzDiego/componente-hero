interface HeroInterface {
  titulo: String;
  subtitulo: String;
  contenido: String;
  textoboton: String;
  linkboton: String;
}

function Hero(hero: HeroInterface) {
  console.log(Object.values(hero)[4]);
  return (
    <section id="ropa">
      <div className="container">
        <div className="info">
          <h1>{Object.values(hero)[0]}</h1>
          <h2>{Object.values(hero)[1]}</h2>
          <p>{Object.values(hero)[2]}</p>
          <button>
            <a href={Object.values(hero)[4]}>{Object.values(hero)[3]}</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
