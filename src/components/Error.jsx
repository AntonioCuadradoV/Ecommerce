import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Error = () => {
  return (
    <div  style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta a la que intentaste acceder no existe.</p>
      <Link to="/">
        <Button variant="danger">Volver al inicio</Button>
      </Link>
    </div>
  );
};
export default Error;
