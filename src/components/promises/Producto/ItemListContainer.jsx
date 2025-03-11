import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../../helpers/pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import './Styles.css'


const ItemListContainer = () => {

  const [producto, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos 1");
  const title = useParams().title;


  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res);
        setTitulo(title);
      });

  }, [title]);

  return (
    <>
      <h1 classname='titulo'>ItemListContainer</h1>
      <div className='containerFlex_Fb'>
        <ItemList producto={producto} titulo={titulo} />
      </div>
    </>
  )
}

export default ItemListContainer