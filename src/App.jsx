import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BannerCards from "./components/BannerCards";
import FoodItems from "./components/FoodItems";
import Category from "./components/Category";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BannerCards />
      <FoodItems />
      <Category />
      <Footer />
    </div>
  );
}
