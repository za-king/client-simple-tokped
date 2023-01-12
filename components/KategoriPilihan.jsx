import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
const KategoriPilihan = (props) => {
  const { category } = props;
  console.log(category)
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
    <>
      <Slider {...settings}>
        {category.map((item) => {
          return (
            <div>
              <Image
                src={item.category_image}
                width={100}
                height={100}
                className="border rounded-lg"
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default KategoriPilihan;
