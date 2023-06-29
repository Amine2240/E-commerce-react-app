// eslint-disable-next-line react/prop-types
export default function Product({ image, fonction, title, price }) {
  return (
    <>
      <div className=" flex flex-col  w-fit items-start" onClick={fonction}>
        <div className=" mb-3 h-52 w-52 bg-gray-200 rounded-xl shadow-lg hover:scale-110 duration-100 hover:gap-2 hover:cursor-pointer ">
          <img src={image} alt="" className=" w-full " />
        </div>
        <p> {title} </p>
        <p className=" font-bold">${price}</p>
      </div>
    </>
  );
}
