import { useEffect, useState } from "react";
import { useUserContext } from "./Context";

function Card() {
  const {
    prodects,
    prodectQuantity,
    setProdectQuantity,
    prodectAmount,
    setProdectAmount,
  } = useUserContext();
  let sum = 0;
  return (
    <>
      {prodects.map((prodect, i) => {
        const priceDiscount = (
          prodect.price -
          prodect.price * (prodect.discountPercentage / 100)
        ).toFixed(2);

        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubtotal] = useState(
          (priceDiscount * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubtotal((priceDiscount * quantity).toFixed(2));
        }, [quantity]);

        useEffect(() => {
          sum = sum + +subTotal;
          setProdectAmount(sum);
        }, []);

        const handleSubQuantity = (quantity, priceDiscount) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setProdectQuantity(prodectQuantity - 1);
            sum = prodectAmount - +priceDiscount;
            setProdectAmount(sum);
          }
        };

        const handleAddQuantity = (quantity, i, priceDiscount) => {
          if (prodects[i].stock > quantity) {
            setQuantity(quantity + 1);
            setProdectQuantity(prodectQuantity + 1);
            sum = prodectAmount + +priceDiscount;
            setProdectAmount(sum);
          }
        };

        const price = prodect.price;
        const disprice = ((price * prodect.discountPercentage) / 100).toFixed(2);
        
        return (
          <div className="card mb-3" 
          key={i}>
            <div className="row g-0">
              <div className="col-sm-12 col-md-3  ">
                <img
                  src={prodect.thumbnail}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: 200, height: 180 }}
                />
              </div>
              <div className=" col-lg-7">
                <div className="card-body">
                  <h5 className="card-title">{prodect.title}</h5>
                  <p className="card-text">
                    <b>Description :</b> {prodect.description}
                    
                  </p>
                  <p className="card-text d-flex justify-content-between">
                    <span>
                      <b>Discount :</b> {prodect.discountPercentage}%
                    </span>
                    <span>
                      <b>Brand : </b>
                      {prodect.brand}
                    </span>
                  </p>
                  <p className="card-text d-flex justify-content-between">
                    <span>
                      <b>Rating : </b>
                      {prodect.rating}
                    </span>
                    <span>
                      <b>In Stock : </b>
                      {prodect.stock}
                    </span>
                  </p>
                  <p className="card-text"><b>Price : $ {price}</b></p>
                </div>
              </div>
              <div className="col-lg-2 mb-4 btnStyle">
                <div className="">
                  <button
                    className="btn "
                    onClick={() => handleSubQuantity(quantity, priceDiscount)}
                  >
                    -
                  </button>
                  <span>
                    <b>{quantity}</b>
                  </span>
                  <button
                    className="btn "
                    onClick={() =>
                      handleAddQuantity(quantity, i, priceDiscount)
                    }
                  >
                    +
                  </button>
                  
                </div>
                  
              </div>
              <hr />
              <div className="row">
                <div className="card-title col">Original Price (1 item) :</div>
                <div className="card-title col text-end">${price}</div>
              </div>
              <div className="row">
                <div className="card-title col">Discount Price :</div>
                <div className="card-title col text-end">${disprice}</div>
              </div>
              <div className="row">
                <div className="card-title col">
                  Final Price (Price - Discount) :
                </div>
                <div className="card-title col text-end">${priceDiscount}</div>
              </div>
              <div className="row">
                <div className="card-title col">
                  <b> Sub Total Price (Price * Quantity) :</b>
                </div>
                <div className="card-title col text-end">
                  <b>${subTotal}</b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
