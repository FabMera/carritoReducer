import React, { useEffect, useState } from "react";

const TableProduct = ({ cartItem, handleDeleteProductCart }) => {
  const [total, setTotal] = useState(0);
  //funcion para calcular el total de la compra con reduce
  const calculoTotal = () => {
    const total = cartItem.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
    setTotal(total);
  };
  useEffect(() => {
    calculoTotal();
  }, [cartItem]);

  return (
    <>
      <h3>Carro de Compras</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cartItem.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <button
                  onClick={() => handleDeleteProductCart(item.product.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-end fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TableProduct;
