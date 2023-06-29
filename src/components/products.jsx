import Product from "./product";
import Productdetails from "./productdetails";
import Description from "./description";
import image1 from "../assets/speaker1.webp";
import image2 from "../assets/speaker2.webp";
import image3 from "../assets/speaker3.webp";
import image4 from "../assets/speaker4.webp";
import image5 from "../assets/earphones_a_1.webp";
import image6 from "../assets/earphones_a_2.webp";
import image7 from "../assets/earphones_a_3.webp";
import image8 from "../assets/earphones_b_1.webp";
import image9 from "../assets/earphones_b_2.webp";
import image10 from "../assets/earphones_b_3.webp";
import image11 from "../assets/earphones_b_4.webp";
import image12 from "../assets/earphones_c_1.webp";
import image13 from "../assets/earphones_c_2.webp";
import image14 from "../assets/earphones_c_3.webp";
import image15 from "../assets/earphones_c_4.webp";
import image16 from "../assets/watch_1.webp";
import image17 from "../assets/watch_2.webp";
import image18 from "../assets/watch_3.webp";
import image19 from "../assets/watch_4.webp";
import image20 from "../assets/headphones_a_1.webp";
import image21 from "../assets/headphones_a_2.webp";
import image22 from "../assets/headphones_a_3.webp";
import image23 from "../assets/headphones_a_4.webp";
import image24 from "../assets/headphones_b_1.webp";
import image25 from "../assets/headphones_b_2.webp";
import image26 from "../assets/headphones_b_3.webp";
import image27 from "../assets/headphones_b_4.webp";
import image28 from "../assets/headphones_c_1.webp";
import image29 from "../assets/headphones_c_2.webp";
import image30 from "../assets/headphones_c_3.webp";
import image31 from "../assets/headphones_c_4.webp";

import "./products.css";
import { useState } from "react";

const Products = () => {
  const products = [
    {
      id: 0,
      img: {
        img1: image1,
        img2: image2,
        img3: image3,
        img4: image4,
      },
      title: "speaker ",
      price: 56,
    },
    {
      id: 1,
      img: {
        img1: image5,
        img2: image6,
        img3: image7,
        img4: image8,
      },
      title: "earphones a  ",
      price: 66,
    },
    {
      id: 2,
      img: {
        img1: image8,
        img2: image9,
        img3: image10,
        img4: image11,
      },
      title: "earphones b",
      price: 416,
    },
    {
      id: 3,
      img: {
        img1: image12,
        img2: image13,
        img3: image14,
        img4: image15,
      },
      title: "earphones c ",
      price: 78,
    },
    {
      id: 4,
      img: {
        img1: image16,
        img2: image17,
        img3: image18,
        img4: image19,
      },
      title: "watch ",
      price: 96,
    },
    {
      id: 5,
      img: {
        img1: image20,
        img2: image21,
        img3: image22,
        img4: image23,
      },
      title: "headphones a ",
      price: 988,
    },
    {
      id: 6,
      img: {
        img1: image24,
        img2: image25,
        img3: image26,
        img4: image27,
      },
      title: "headphones b ",
      price: 2115,
    },
    {
      id: 7,
      img: {
        img1: image28,
        img2: image29,
        img3: image30,
        img4: image31,
      },
      title: "headphones c ",
      price: 738,
    },
  ];
  const [trouv, settrouv] = useState(1);
  const [exist, setexist] = useState(false);
  return (
    <>
      {exist == false && (
        <>
          <Description />
          <h1 className=" font-bold text-blue-950 capitalize text-5xl m-10 mb-2 text-center">
            best seller product
          </h1>
          <p className=" text-gray-600 mb-10 text-center">
            speaker : there are many variations passengers
          </p>
          <div className="container">
            {products.map((product) => {
              return (
                <>
                  <Product
                    key={product.id}
                    image={product.img.img1}
                    title={product.title}
                    price={product.price}
                    fonction={() => {
                      settrouv(product.id);
                      setexist(true);
                    }}
                  />
                </>
              );
            })}
          </div>
        </>
      )}

      {exist == true && (
        <>
          <Productdetails
            // save the id of the clicked product
            image={products[trouv].img.img1}
            image2={products[trouv].img.img2}
            image3={products[trouv].img.img3}
            image4={products[trouv].img.img4}
            price={products[trouv].price}
            title={products[trouv].title}
            // button to come back
            comeback={() => {
              setexist(false);
            }}
          />
          {/* horizental animation */}
          <div>
            <p className=" text-center font-bold capitalize text-4xl mb-5 text-blue-950">you may also like</p>
          <div className="container-horizental">
            {products.map((product) => {
              return (
                <>
                  <Product
                    key={product.id}
                    image={product.img.img1}
                    title={product.title}
                    price={product.price}
                    fonction={() => {
                      settrouv(product.id);
                      setexist(true);
                    }}
                  />
                </>
              );
            })}
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
