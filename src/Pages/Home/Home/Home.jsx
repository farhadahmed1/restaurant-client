import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Boss Restaurant || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
