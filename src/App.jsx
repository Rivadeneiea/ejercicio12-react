import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import NoticiaTrjeta from "./components/NoticiaTrjeta";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("top");
  const [paises, setPaises] = useState("united states of america");

  useEffect(() => {
    consultarApi();
  }, [categoria, paises]);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26815e3379be8009c57f199f4a5743ab2d2bb&category=${categoria}`
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      console.log(dato);
    } catch (error) {}
  };

  const selector = (e) => {
    setCategoria(e.target.value);
  };
  const pais = (e) => {
    setPaises(e.target.value);
  };

  return (
    <>
      <h1>Noticias</h1>
      <section>
        <Form.Select aria-label="Default select example" onChange={selector}>
          <option>Open this select menu</option>
          <option value="top">top</option>
          <option value="entertainment">entertainment</option>
          <option value="world">world</option>
        </Form.Select>
      </section>
      <section>
        <Form.Select aria-label="Default select example" onChange={pais}>
          <option>Noticia paises</option>
          <option value="united states of america">
            united states of america
          </option>
          <option value="india">india</option>
        </Form.Select>
      </section>
      <section>
        {noticias.map((noticia) => (
          <NoticiaTrjeta noticia={noticia} />
        ))}
      </section>
      <section>
        {paises.map((pais) => (
          <NoticiaTrjeta propsPais={pais} />
        ))}
      </section>
    </>
  );
}

export default App;
