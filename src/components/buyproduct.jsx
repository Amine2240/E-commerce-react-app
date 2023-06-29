
import "./buycart.css";

// eslint-disable-next-line react/prop-types
const Buyproduct = ({ img, title, price }) => {

// eslint-disable-next-line no-const-assign

  return (
    <>
      <div>
        <div className=" flex  produit ">
          <div className=" w-52 bg-gray-400 rounded-lg ">
            <img src={img} alt="" className=" w-full" />
          </div>

          <div className="  w-full  flex flex-col place-content-between items-start">
            <div className=" flex place-content-between w-96">
              <h1 className=" ml-5 text-3xl font-bold text-blue-950 capitalize">
                {title}{" "}
              </h1>
              <h2 className=" text-2xl font-bold text-blue-950"> ${price} </h2>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyproduct;
