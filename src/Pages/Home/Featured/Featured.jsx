import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10 ">
      <section>
        <SectionTitle
          subheading="check it out"
          heading="Featured Items"
        ></SectionTitle>
        <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-50 pb-20 pt-12 px-28">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p> Aug 20 , 2024</p>
            <p className="uppercase"> Where can i get some </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
              aspernatur suscipit similique, blanditiis debitis, consequatur
              aliquam ullam pariatur quia voluptatibus sit doloribus eos quam
              vitae ratione reprehenderit nesciunt ipsa at illum.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-orang-400">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
