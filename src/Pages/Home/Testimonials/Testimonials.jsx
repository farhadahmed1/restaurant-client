import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/reviews")
      // fetch(`http://localhost:4000/reviews`)
      //   .then((res) => res.json())
      .then((res) => {
        setReviews(res.data);
      });
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        heading="Testimonials"
        subheading="What Our Clients Say"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center m-16">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-12 mr-12 ">
                  <h3 className="text-orange-500 text-xl ">{review.name}</h3>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="text-gray-800 text-sm mt-4">{review.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
