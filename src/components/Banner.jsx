export default function Banner() {
  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
          <h1 className="text-2xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-2xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
}
