import { useContext, useState } from "react";
import  ItemCount  from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({item}) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

   
    return (
      <div className="container">
          <div className="producto-detalle">
              <img src={item.img} alt={item.titulo}/>
              <div>
              <h3 className="titulo">{item.titulo}</h3>
              <p className="descripcion">{item.descripcion}</p>
              <p className="categoria">Año: {item.año}</p>
              <p className= "precio">Precio: $ {item.precio}</p>
              <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar}  
              handleAgregar={() => { agregarAlCarrito(item, cantidad) }}/>
           </div>
      </div>
   </div>
    )
  }
  
  export default ItemDetail