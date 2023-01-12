import Card from "./Card";
import tisue from "../asset/tisue.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
const TraktikPengguna = (props) => {

  const {product} = props
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrNext
        className="bg-white absolute bottom-[50%] right-0  rounded-full cursor-pointer"
        onClick={onClick}
        style={{ color: "white" }}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrPrevious
        className="bg-white absolute z-10  bottom-[50%]  rounded-full cursor-pointer "
        onClick={onClick}
        style={{ color: "white" }}
      />
    );
  };
  const settings = {
    dots: false,
    className: "center",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
 
  return (
    <div className="container ">
      <div className="flex">
        <p className="text-gray-800 text-xl font-semibold">TraktikPengguna</p>
        <p>Berakhir Dalam</p>
        <p>06</p>
        :
        <p>40</p>
        :
        <p>20</p>

        <p>See More</p>
      </div>
      <div className="bg-[url('../asset/bg-card.png')] bg-no-repeat bg-left-bottom  bg-auto my-12 rounded-lg">
        
      <Slider {...settings} className="ml-72">
      {product.map((item) => {
            return <Card item={item} />;
          })}
      </Slider>
       
      </div>
    </div>
  );
};

export default TraktikPengguna;
