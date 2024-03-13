const RecommendItem = ({ item }) => {
  console.log(item);
  const { name, recipe, image, category, price } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 text-orange-500">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
