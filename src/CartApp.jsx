import React, { useEffect, useReducer, useState } from "react";
import { getProducts } from "./services/productService";
import CardProduct from "./components/CardProduct";
import TableProduct from "./components/TableProduct";
import { itemsReducer } from "./reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateProductCart,
} from "./reducer/itemsAction";

const initialProducts = sessionStorage.getItem("cart")
  ? JSON.parse(sessionStorage.getItem("cart"))
  : [];

const CartApp = () => {
  const [products, setProducts] = useState([]);
  //const [cartItem, setCartItem] = useState(initialProducts);

  const [cartItem, dispatch] = useReducer(itemsReducer, initialProducts);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const handleAddProductCart = (product) => {
    const exist = cartItem.find((item) => item.product.id === product.id);
    if (exist) {
      dispatch({
        type: UpdateProductCart,
        payload: product,
      });
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handleDeleteProductCart = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <div className="row">
          {products.map((product) => (
            <CardProduct
              handleAddProductCart={handleAddProductCart}
              id={product.id}
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <div className="my-4 w-50">
          {cartItem.length ? (
            <TableProduct
              cartItem={cartItem}
              handleDeleteProductCart={handleDeleteProductCart}
            />
          ) : (
            <h3>No hay productos en el carrito!</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default CartApp;
