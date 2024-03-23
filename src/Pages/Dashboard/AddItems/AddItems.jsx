import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(image_hosting_api);
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    // image upload to imagbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data", // do not forget this
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      // menu send to database

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Add Item",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="add an items"
        subheading=" what's new ?"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              required
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>

            <select
              defaultValue="default"
              {...register("category")}
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Selection a category{" "}
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label>
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder=" Enter your Price"
                required
                {...register("price")}
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        <div>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
        </div>
        <div className="form-control w-full my-6">
          <input
            {...register("image")}
            type="file"
            required
            className="file-input file-input-bordered w-full "
          />
        </div>
        <button className=" btn btn-active btn-accent text-white text-xl">
          Add Item <FaUtensils className=" ml-4"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
