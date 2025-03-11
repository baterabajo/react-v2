import React from 'react'
import Item_Fb from "./Item_Fb";
import './Styles.css'

function ItemList_Fb({ producto }) {
    return (
        <>
        <h1 classname='titulo'>ItemListFb</h1>
          {
            producto.length > 0 &&
            producto.map((prod) => {
              return (
                <div>
                <Item_Fb producto={prod} key={prod.id} />
                </div>
              );
            })
          }
        </>
    
    
      );
}

export default ItemList_Fb