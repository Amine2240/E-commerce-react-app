import "./productdetails.css";
import { useState } from "react";
import Addedprod from "./addedprod";
import Buycart from "./buycart";
import Buyproduct from "./buyproduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft ,faStar } from '@fortawesome/free-solid-svg-icons'
faStar.prefix = 'fas'

// eslint-disable-next-line react/prop-types
const Productdetails = ({
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  image2,
  // eslint-disable-next-line react/prop-types
  image3,
  // eslint-disable-next-line react/prop-types
  image4,
  // eslint-disable-next-line react/prop-types
  comeback,
  // eslint-disable-next-line react/prop-types
  title,
}) => {
  const [num, setnum] = useState(1);
  const [tmp, settmp] = useState(1);
  const [addexist, setaddexist] = useState(false);
  const [iscart, setiscart] = useState(false);
  const [producttable, setproducttable] = useState([]);


  const addproduct = () => {
    const newcomponent = {
      id:
        producttable.length === 0
          ? 1
          : producttable[producttable.length - 1].id + 1,
      component: (
        <Buyproduct
          img={image}
          title={title}
          price={price}
          numero={num}
        />
      ),
      price : price,
    };
      
    const newtable = [...producttable, newcomponent];
    
    setproducttable(newtable);
  };

  return (
    <div>
      <div
        style={{
          filter: iscart == true ? "blur(3px)" : "blur(0px)",
        }}
      >
        {addexist == true && <Addedprod />}
        <div className="bigcontainer">
          <FontAwesomeIcon icon={faCircleLeft}
            className=" text-3xl text-red-500 cursor-pointer absolute top-28"
            onClick={comeback}
          />
          <div className=" flex  items-start detail gap-7">
            <div className="">
              <div className=" w-72 h-72 bg-gray-400 rounded-lg shadow-lg mb-2 hover:bg-red-500 transition-all">
                <img
                  src={
                    tmp == 1
                      ? image
                      : tmp == 2
                      ? image2
                      : tmp == 3
                      ? image3
                      : image4
                  }
                  alt=""
                  className="w-full"
                />
              </div>
              <div className=" flex gap-2 ml-1 w-fit">
                <div
                  className=" w-16 h-16 bg-gray-400 rounded-lg shadow-lg hover:bg-red-500 transition-all"
                  onMouseOver={() => {
                    settmp(2);
                  }}
                >
                  <img src={image2} alt="" className="w-full" />
                </div>
                <div
                  className=" w-16 h-16 bg-gray-400 rounded-lg shadow-lg hover:bg-red-500 transition-all"
                  onMouseOver={() => {
                    settmp(3);
                  }}
                >
                  <img src={image3} alt="" className="w-full" />
                </div>
                <div
                  className=" w-16 h-16 bg-gray-400 rounded-lg shadow-lg hover:bg-red-500 transition-all "
                  onMouseOver={() => {
                    settmp(1);
                  }}
                >
                  <img src={image} alt="" className="w-full" />
                </div>
                <div
                  className=" w-16 h-16 bg-gray-400 rounded-lg shadow-lg hover:bg-red-500 transition-all "
                  onMouseOver={() => {
                    settmp(4);
                  }}
                >
                  <img src={image4} alt="" className="w-full" />
                </div>
              </div>
            </div>

            <div className="  writing flex flex-col items-start place-content-around  ">
              <h1 className=" text-3xl font-bold"> {title} </h1>
              <p className=" flex">
                {" "}
                <FontAwesomeIcon icon={faStar} className=" text-red-500" />{" "}
                <FontAwesomeIcon icon={faStar} className=" text-red-500" />{" "}
                <FontAwesomeIcon icon={faStar} className=" text-red-500" />{" "}
                <FontAwesomeIcon icon={faStar} className=" text-red-500" />
                <FontAwesomeIcon icon={faStar} className=" text-gray-200 " />
                <span>(20)</span>
              </p>
              <h1 className=" font-bold text-xl">Details:</h1>
              <p className=" text-start text-gray-500  text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                deleniti odit labore eius cumque autem commodi ad, aperiam sequi
                beatae repudiandae veniam hic exercitationem quas tempore nisi
                eaque, dolorem harum? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Earum, impedit sapiente sunt quos mollitia
                deleniti incidunt nemo natus tempore rerum veritatis, dolorum
                necessitatibus officia ipsam magni commodi in minima amet unde.
                Alias, molestias ratione nesciunt, eaque rem veritatis optio
              </p>
              <h2 className=" text-red-600 font-bold text-xl"> ${price} </h2>
              <div className=" flex">
                <h2 className=" font-medium"> Quantity : </h2>
                <div className=" flex border-gray-300 w-28 place-content-between ml-5 border-2">
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
                    {num < 1 ? "1" : num}{" "}
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

              <div className=" flex h-12 w-1/2  place-content-around p-2">
                <button
                  className=" border-2 border-gray-200 h-12 w-48 text-red-500 font-semibold rounded-md"
                  onClick={() => {
                    setaddexist(true);
                  }}
                >
                  Add to card
                </button>
                <button
                  className=" h-12 w-48 bg-red-500 text-white font-semibold rounded-md"
                  onClick={() => {
                    setiscart(true);
                    addproduct();
                  }}
                >
                  {" "}
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {iscart && (
        <Buycart
        
          producttable={producttable}
          fonction={() => {
            setiscart(false);
          }}
        />
      )}
    </div>
  );
};

export default Productdetails;
