import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import NoticiaTarjeta from "./components/NoticiaTarjeta";
import Footer from "./components/footer";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("top");
  const [paises, setPaises] = useState("ar");

  useEffect(() => {
    consultarApi();
  }, [categoria, paises]);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26815e3379be8009c57f199f4a5743ab2d2bb&category=${categoria}&country=${paises}&language=es`
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
      <h1 className="container text-center text-danger">News of the world</h1>
      <div className="d-flex justify-content-center">
        {" "}
        <section>
          <Form.Select
            className="container"
            aria-label="Default select example"
            onChange={selector}
          >
            <option>Open this select menu</option>
            <option value="top">top</option>
            <option value="entertainment">entertainment</option>
            <option value="world">world</option>
          </Form.Select>
        </section>
        <section>
          <Form.Select
            className="container"
            aria-label="Default select example"
            onChange={pais}
          >
            <option>News Country</option>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
            <option value="us">United states of america</option>
          </Form.Select>
        </section>
      </div>
      <section>
        {noticias.map((noticia) => (
          <NoticiaTarjeta noticia={noticia} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
