import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

import menuImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Boss Restaurant || Menu</title>
      </Helmet>

      <Cover img={menuImg}></Cover>
    </div>
  );
};

export default Menu;
