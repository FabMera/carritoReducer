import React from "react";

const CardProduct = ({
  id,
  name,
  description,
  price,
  handleAddProductCart,
}) => {
  const addProduct = (product) => {
    handleAddProductCart(product);
    console.log(product);
  };
  return (
    <>
      {" "}
      <div className="col-6 col-md-4 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <button
              className="btn btn-primary"
              onClick={() => addProduct({ id, name, description, price })}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
