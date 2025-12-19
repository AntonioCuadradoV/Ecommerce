import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../CSS/ContainerDetailItem.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import Error from "./Error";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch(() => setInvalid(true))
      .finally(() => setLoading(false));
  }, [id]);

 if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {" "}Cargando...
      </Button>
    </div>
  );
}


  if (invalid) {
    return <Error />;
  }

  return (
    <div className="ContainerDetailItem">
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
