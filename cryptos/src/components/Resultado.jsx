import styled from "@emotion/styled";

const Res = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 22px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  return (
    <Res>
      <Imagen
        src={`https://cryptocompare.com/${resultado.IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El precio es :<span>{resultado.PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día :<span>{resultado.HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día :<span>{resultado.LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas :<span>{resultado.CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualiczación :<span>{resultado.LASTUPDATE}</span>
        </Texto>
      </div>
    </Res>
  );
};

export default Resultado;
