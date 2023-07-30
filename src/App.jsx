import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";

function App() {
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
      <h1>hola mundo</h1>
    </>
  );
}

export default App;
