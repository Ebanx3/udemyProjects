import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const consultarCotizacion = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptomoneda}&tsyms=${monedas.moneda}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.DISPLAY[monedas.criptomoneda][monedas.moneda]);
      };
      consultarCotizacion();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} />
      <div>
        <Heading className="App">COTIZA CRIPTOMONEDAS AL INSTANTE</Heading>
        <Formulario setMonedas={setMonedas} />
      </div>
    </Contenedor>
  );
}

export default App;