import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import RecommendItem from "../../Shared/RecommendItem/RecommendItem";

const Recommends = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const chefItems = data.filter((item) => item.price <= 10);
        setRecommend(chefItems);
      });
  }, []);

  //console.log(recommend);
  return (
    <section>
      <SectionTitle
        heading="Chef Recommends"
        subheading="Should try"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-6 my-2 mx-3">
        {recommend.slice(0, 3).map((item) => (
          <RecommendItem key={item._id} item={item}></RecommendItem>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
