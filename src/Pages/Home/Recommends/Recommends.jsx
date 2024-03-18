import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const Recommends = () => {
  const [menu] = useMenu();
  const recommend = menu.filter((item) => item.price <= 10);
  // const [recommend, setRecommend] = useState([]);

  // useEffect(() => {
  //   fetch(`menu.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const chefItems = data.filter((item) => item.price <= 10);
  //       setRecommend(chefItems);
  //     });
  // }, []);

  //console.log(recommend);
  return (
    <section>
      <SectionTitle
        heading="Chef Recommends"
        subheading="Should try"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-10 my-2 mx-3">
        {recommend.slice(0, 3).map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
