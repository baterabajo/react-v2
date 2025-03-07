import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from "./components/Menu/Navbar";
import Inicio from "./components/promises/Inicio";
import Contacto from "./components/promises/Producto/Contacto";

function App() {


  return (
    <div className="App">
      {/* <ContextoProvider> */}
        {/* Ctrl + K + U   CTRL + K + C */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Contacto" element={<Contacto />} />
            {/* <Route path="/ItemListContainer/:title" element={<ItemListContainer />} />
            <Route path="/ItemListContainerFirebase" element={<ItemListContainerFb />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Item_Fb/:id" element={<ItemDetailContainerFb />} />
            <Route path="/pokemon" element={<Pokemon />} />
         
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Xxx" element={<Xxx />} /> */}
          </Routes>
        </BrowserRouter>
      {/* </ContextoProvider> */}

    </div>
  );
}

export default App
