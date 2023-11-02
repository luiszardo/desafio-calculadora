import { useState } from "react";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
}
`;

const Div = styled.div`
  /* border: solid black; */
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-direction: column;

  h1 {
    color: orange;
    text-align: center;
  }

  .Calculadora {
    border: solid blue;
    width: 30vw;
    height: 50vh;
    background-image: url("https://img-cdn.hltv.org/gallerypicture/eNFRc95--El3YT3fdEaXib.png?ixlib=java-2.1.0&w=1200&s=b368b07d32f397c599025770fe16bdc3");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
  }
  .Display {
    position: relative;
    left: 110px;
    top: 15px;
  }
  .Valores {
    /* border:solid red; */
    display: flex;
    justify-content: center;
    position: relative;
    top: 50px;
  }

  input {
    border: solid black;
    border-radius: 20px;
    height: 30px;
    /* background-color: ; */
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    text-align: center;
  }
  .Botoes {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }
  button {
    border: solid 2px;
    height: 7vh;
    width: 5vw;
    border-radius: 15px;
    font-size: 20px;
    background-color: blue;
  }
`;


function Calculadora() {
    const [primeiroValor, setPrimeiroValor] = useState();
    const [segundoValor, setSegundoValor] = useState();
    const [resultado, setResultado] = useState();
  
    const CapturarValor = (item) => {
      setPrimeiroValor(Number(item.target.value));
    };
    const CapturarSegundoValor = (item) => {
      setSegundoValor(Number(item.target.value));
    };
    const Somar = () => {
      setResultado(primeiroValor + segundoValor);
    };
    const Subtracao = () => {
      setResultado(primeiroValor - segundoValor);
    };
    const Multiplicacao = () => {
      setResultado(primeiroValor * segundoValor);
    };
    const Divisao = () => {
      setResultado(primeiroValor / segundoValor);
    };
    const Limpar = () => {
      setResultado("");
    };
  
    return (
      <Div>
        <GlobalStyle />
        <h1>Luis Henrique Zardo</h1>
        <section className="Calculadora">
          <section className="Display">
            <input value={resultado} />
          </section>
          <section className="Valores">
            <input
              type="number"
              onChange={CapturarValor}
              placeholder="Primeiro Valor"
            />
            <input
              type="number"
              onChange={CapturarSegundoValor}
              placeholder="Segundo Valor"
            />
          </section>
          <section className="Botoes">
            <button onClick={Somar}>+</button>
            <button onClick={Subtracao}>-</button>
            <button onClick={Multiplicacao}>*</button>
            <button onClick={Divisao}>/</button>
            <button onClick={Limpar}>Limpar</button>
          </section>
        </section>
        </Div>
        )
}

export default Calculadora