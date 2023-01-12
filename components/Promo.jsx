import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../asset/slide1.jpg";
import slide2 from "../asset/slide2.jpg";

import { GrNext, GrPrevious } from "react-icons/gr";
const Promo = () => {
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrNext
        className="bg-white absolute bottom-[50%] right-0  rounded-full cursor-pointer"
        onClick={onClick}
        style={{ color: "white", fontSize: "1.5em" }}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrPrevious
        className="bg-white absolute z-10  bottom-[50%]  rounded-full cursor-pointer "
        onClick={onClick}
        style={{ color: "white", fontSize: "1.5em" }}
        
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const promoData = [
    { id: 0, image: slide1 },
    { id: 1, image: slide2 },
  ];
  return (
    <>
      <div className="">
        <Slider {...settings}>
          {promoData.map((item) => {
            return <Image src={item.image} className="rounded-lg" />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Promo;
