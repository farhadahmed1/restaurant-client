import RecommendItem from "../../Shared/RecommendItem/RecommendItem";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 my-2 mx-3">
      {items.map((item) => (
        <RecommendItem key={item._id} item={item}></RecommendItem>
      ))}
    </div>
  );
};

export default OrderTab;
