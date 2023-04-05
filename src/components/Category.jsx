import { categories } from "../data/data.js";

export default function Category() {
  return (
    <div className="max-w-[1240px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-3xl lg:text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-7">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="flex justify-between items-center bg-gray-100 rounded-lg p-4"
          >
            <p className="font-bold sm:text-xl">{name}</p>
            <img className="w-20" src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
