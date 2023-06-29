import "./description.css";
import logo1 from "../assets/headphones_a_1.webp";

const Description = () => {
  return (
    <>
      <div className=" w-full flex place-content-center  ">
        <div className=" bg-gray-300  description mt-7 rounded-2xl p-8 shadow-lg flex flex-col place-content-between">
          <div className="  h-3/4 div1 flex flex-col place-content-center ">
            <p className="beat">Beats Solo</p>
            <h1 className=" text-5xl font-semibold">Wireless</h1>
            <h1 className="  font-bold text-white head">headphones</h1>
          </div>
          <div className="absolute img">
            <img src={logo1} alt="" className=" w-full h-full" />
          </div>
          <div className="  flex place-content-between  items-start container2 ">
            <button className=" ml-10 mt-1 border-0  px-5 py-3 rounded-3xl text-white bg-red-500">
              shop wireless headphone
            </button>
            <div className="  div2 w-1/3 mr-10">
              <h3 className=" text-end font-semibold">description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                at officia deleniti minus nisi atque repellat assumenda
                voluptatibus. Amet illum, in quas voluptas iste ut ipsam aliquam
                nemo sequi fuga doloremque voluptatem nam quae repudiandae
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
