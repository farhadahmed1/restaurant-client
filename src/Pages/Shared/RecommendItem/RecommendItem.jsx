const RecommendItem = ({ item }) => {
  //console.log(item);
  const { name, recipe, image, category, price } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-2 rounded-md text-xl">
          $ {price}
        </p>
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
