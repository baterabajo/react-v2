import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../../context/ContextApp'
import { Link } from 'react-router-dom';
import './Styles.css'


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, cantidadEnElCarrito } = useContext(ContextApp);



    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handlerExistCarrito = () => {
        console.log("cantidadEnElCarrito: " + cantidadEnElCarrito());
    }


    return (
        <>
            <h1>Carrito</h1>
            <div className='carritoFlex' >
                <item><h3>Cantidad :{cantidadEnElCarrito()}</h3></item>
                <ExistCarrito carrito={carrito} cantidad={cantidadEnElCarrito} />
            </div>
            <div>
                {
                    <>
                        <h2>Precio Total: $ {precioTotal()}</h2>
                        <button class="button button4" onClick={handleVaciar}>Vaciar Carrito</button>
                        <button class="button button4" onClick={handlerExistCarrito}>Pruebas</button>
                        <Link class="button button4" to='/Checkout'>Finalizar compra</Link>
                    </>


                }
            </div>
        </>
    )
}


export default Carrito



export const ExistCarrito = ({ carrito, cantidad }) => {

   // console.log(cantidad())
        return (
            <>
                {
                    carrito?.map((prod) => (
                        cantidad() > 0 &&
                        <div >
                            <br />
                            <h1 key={prod.id}>{prod.title}</h1>
                            <p>Precio unitario $ {prod.price}</p>
                            <p>Precio total $ {prod.price * prod.cantidad}</p>
                            <p>Cantidad {prod.cantidad}</p>
                            <br />
                        </div>
                    ))
                }
            </>

        )
    }






