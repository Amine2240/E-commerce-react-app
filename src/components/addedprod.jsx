import './addedprod.css'
import { FaDonate } from "react-icons/fa";
const Addedprod = () => {
  return (
    <div className=' mt-2'>
      <button className=" border-2 w-44 py-2 rounded-2xl flex place-content-around add shadow-md"><FaDonate className=" text-green-600 text-sm"/> <p> product added to cart </p></button>
    </div>
  );
}

export default Addedprod;
