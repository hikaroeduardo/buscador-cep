import { useState } from "react";
import api from "./services/Api/api"

function App() {

  const [input, setInput] = useState('');
  const [cepData, setCepData] = useState("");

  async function search() {
    const responseData = await api.get(`${input}/json`);

    setCepData(responseData.data);

    setInput("");
  }

  return (
    <div className="container">

      <div className="content">

        <main>

          <h1>Buscador de CEP</h1>

          <input type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          />
          <button onClick={search}>Buscar CEP</button>

        </main> {/* main */}

        <section>
          <h2>Informações da localidade</h2>

          {cepData && (

          <div className="info">
            <h3>Cep: {cepData.cep}</h3>
            <p>Logradouro: {cepData.logradouro}</p>
            <p>Complemento: {cepData.complemento}</p>
            <p>Bairro: {cepData.bairro}</p>
            <p>{`${cepData.localidade} - ${cepData.uf}`}</p>
          </div>

          )}

        </section> {/* section */}

      </div> {/* content */}

    </div> 
    // container
  );
}

export default App;