import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import NoticiaTrjeta from "./components/NoticiaTrjeta";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("top");

  useEffect(() => {
    consultarApi();
  }, []);

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

  return (
    <>
      <section>
        <Form.Select aria-label="Default select example" onChange={selector}>
          <option>Open this select menu</option>
          <option value="top">top</option>
          <option value="entertainment">entertainment</option>
          <option value="world">world</option>
        </Form.Select>
      </section>
      <section>
        {} <NoticiaTrjeta />
      </section>
    </>
  );
}

export default App;
