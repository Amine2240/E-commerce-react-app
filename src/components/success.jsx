import "./success.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className=" h-96 flex items-end place-content-center ">
        <div className=" flex flex-col bg-gray-300 items-center p-6 rounded-xl shadow-xl px-24">
          <FontAwesomeIcon
            icon={faCartShopping}
            className=" text-green-500 text-4xl"
          />
          <p className=" text-4xl font-bold text-blue-950 pt-4 pb-5">
            thank you for your purchase
          </p>
          <p className=" text-sm text-gray-900 mb-5">
            {" "}
            website backend will be taken care of in the near futur{" "}
          </p>
          <p className=" font-medium">
            if you have any questions, contact me with{" "}
            <span className=" text-red-500"> kadoumamine@gmail.com </span>{" "}
          </p>
          <Link to="/">
            <button className=" text-white bg-red-500 rounded-xl w-96  p-3 mt-5 capitalize">
              continue shopping
            </button>{" "}
          </Link>
        </div>
      </div>

      <p className=" text-center font-medium mt-24">
        Credit to{" "}
        <span className=" text-red-500 font-bold capitalize ">
          {" "}
          <a
            href="https://www.youtube.com/@javascriptmastery"
            target="_blank"
            rel="noreferrer"
          >
            @javaScript Mastery{" "}
          </a>
        </span>{" "}
        for the design.
      </p>
    </>
  );
}
