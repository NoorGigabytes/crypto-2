import React, { useState } from "react";
import { useParams } from "react-router-dom";
import nftList from "../static/json/nfts.json";
import { Formik, Field, Form } from "formik";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import SaleSlider from "./includes/SaleSlider";

export default function NFTDetail() {
  const { id } = useParams();
  const nft = nftList.find((nft) => nft.id == id.replace(":", ""));
  const [liked, setLiked] = useState(false);

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const handleDecreaseQuantity = (quantity, setFieldValue) => {
    if (quantity > 0) {
      setFieldValue("quantity", quantity - 1);
    }
  };

  const handleIncreaseQuantity = (quantity, setFieldValue) => {
    setFieldValue("quantity", quantity + 1);
  };

  return (
    <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        <img src={nft.img} alt={nft.title} />
        <div className="">
          <h4 className="font-headings lg:text-4xl text-2xl">{nft.title}</h4>
          <Formik
            initialValues={{ dimensions: "", type: "", quantity: 0 }}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-4 lg:mt-14 mt-8">
                <div>
                  <label
                    htmlFor="dimensions"
                    className="block mb-1 font-medium text-gray-300"
                  >
                    Dimensions
                  </label>
                  <Field
                    as="select"
                    id="dimensions"
                    name="dimensions"
                    className="block lg:w-1/3 sm:w-1/2 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
                  >
                    <option value="">Select dimensions</option>
                    <option value="small">20x20cm</option>
                    <option value="medium">20x30cm</option>
                    <option value="large">40x40cm</option>
                  </Field>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block mb-1 font-medium text-gray-300"
                  >
                    Type
                  </label>
                  <Field
                    as="select"
                    id="type"
                    name="type"
                    className="block lg:w-1/3 sm:w-1/2 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
                  >
                    <option value="">Select type</option>
                    <option value="type1">2D</option>
                    <option value="type2">3D</option>
                  </Field>
                </div>

                <label
                  htmlFor="quantity"
                  className="block mb-1 font-medium text-gray-300"
                >
                  Quantity
                </label>
                <div className="flex items-center sm:gap-5 gap-2">
                  <div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() =>
                          handleDecreaseQuantity(values.quantity, setFieldValue)
                        }
                        className="p-2 rounded-full bg-white focus:outline-none focus:ring focus:ring-primary"
                      >
                        <FiChevronLeft className="w-4 h-4 text-primary" />
                      </button>
                      <Field
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="block w-24 sm:mx-2 mx-0 px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleIncreaseQuantity(values.quantity, setFieldValue)
                        }
                        className="p-2 rounded-full bg-white focus:outline-none focus:ring focus:ring-primary"
                      >
                        <FiChevronRight className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="block px-4 py-2 text-white bg-primary rounded-md focus:outline-none focus:ring focus:ring-primary"
                  >
                    Submit
                  </button>
                  <div
                    className="p-2 rounded-full bg-white w-fit top-2 right-2"
                    onClick={() => {
                      setLiked((prev) => !prev);
                    }}
                  >
                    {liked ? <FaHeart color="red" /> : <FaRegHeart color="black" />}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-8">
            <p className="text-[#a1abb9] mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quo, at consequatur nesciunt commodi quae, consequuntur quisquam unde laborum corrupti quam cupiditate, labore excepturi esse rem quia aliquid ullam laboriosam!</p>
            <p className="text-[#a1abb9]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quo, at consequatur nesciunt commodi quae, consequuntur quisquam unde laborum corrupti quam cupiditate, labore excepturi esse rem quia aliquid ullam laboriosam!</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h5 className="text-center font-headings text-xl mb-5">Methods</h5>
        <hr className=""/>
        <p className="text-[#a1abb9] my-5">Sit amet consectetur adipisicing elit. Natus quo, at consequatur nesciunt commodi quae, consequuntur quisquam unde laborum corrupti quam cupiditate, labore excepturi esse rem quia aliquid ullam laboriosam!</p>
        <p className="text-[#a1abb9] mb-5">Dolor sit amet consectetur adipisicing elit. Natus quo, at consequatur nesciunt commodi quae, consequuntur quisquam unde laborum corrupti quam cupiditate, labore excepturi esse rem quia aliquid ullam laboriosam!</p>
      </div>
      <SaleSlider />
    </section>
  );
}
