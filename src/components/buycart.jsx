import "./buycart.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Buycart({ fonction, producttable }) {
  const [producttabletmp, setproducttabletmp] = useState(producttable);
  const [num, setnum] = useState(1);

  const deleteelement = (id) => {
    // eslint-disable-next-line react/prop-types
    const newtable = producttabletmp.filter((element) => {
      if (element.id == id) {
        return false;
      } else {
        return true;
      }
    });

    setproducttabletmp(newtable);
  };

  const getTotalPrice = () => {
    //efficient way to get the sum of prices // credit to chatGPT//
    const totalPrice = producttabletmp.reduce((count, product) => {
      return count + product.price *num;
    }, 0);
    return totalPrice;
  };
  return (
    <>
      <div className="  absolute top-0 cart flex flex-col gap-14 z-10">
        <div className=" flex  h-16 items-center w-1/2 ml-4 gap-7 ">
          <label htmlFor="check">
            <FontAwesomeIcon
              icon={faCircleLeft}
              className=" text-2xl cursor-pointer quite"
              onClick={fonction}
            />
          </label>
          <input type="checkbox" id="check" className=" hidden" />
          <p className=" text-lg">Your Cart</p>
          <p className=" text-red-500"> ({producttabletmp.length} items)</p>
        </div>

        {
          // eslint-disable-next-line react/prop-types
          producttabletmp.map((product) => {
            return (
              <>
                <div className=" relative ">
                  {" "}
                  {product.component}
                  <div className=" flex absolute bottom-1 left-36 top-24">
                  <div className=" flex place-content-between w-96">
                    <div className=" flex border-gray-300 w-32 h-10 place-content-between ml-6 border-2 mb-4">
                      <button
                        className=" border-r-2 border-gray-300 w-1/3 text-2xl text-center "
                        onClick={() => {
                          setnum((prev) => prev - 1);
                        }}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <p className="  border-gray-300 w-1/3 text-center text-xl">
                        {" "}
                        {num > 0 ? num : "1"}{" "}
                      </p>
                      <button
                        className=" border-l-2 border-gray-300 w-1/3 text-2xl text-center "
                        onClick={() => {
                          setnum((prev) => prev + 1);
                        }}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className=" text-red-500 delete cursor-pointer"
                    onClick={() => {
                      deleteelement(product.id);
                    }}
                  />
                  </div>
                </div>
              </>
            );
          })
        }

        <div className=" flex flex-col items-center h-20 place-content-around ">
          <div className=" flex place-content-between w-full px-10">
            <p className=" font-bold capitalize text-xl">subtotal : </p>
            <p className=" font-bold capitalize text-2xl">
              $ {getTotalPrice() <0 ? '0' : getTotalPrice()}
            </p>
          </div>
          <Link to='/success'>
          <button className=" text-white bg-red-500 rounded-xl w-96  p-3 mt-5 capitalize">
            pay with stripe
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
