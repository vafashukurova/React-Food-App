import { useState } from "react";
import { data } from "../data/data.js";

export default function FoodItems() {
  const [food, setFood] = useState(data);

  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1240px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-3xl lg:text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between mt-9">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap mb-4 mt-2">
            <button
              onClick={() => setFood(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex  max-w-[390px] w-full mt-2">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map(({ image, name, price, id }) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            key={id}
          >
            <img
              src={image}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-3 py-4">
              <p className="font-bold">{name}</p>
              <p>
                <span className="bg-orange-600 rounded-full text-white p-1">
                  {price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
