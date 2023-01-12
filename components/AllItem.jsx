import Card from "./Card";
import tisue from "../asset/tisue.jpg";

const AllItem = (props) => {
  const {data} = props
  console.log(data)
    const traktirData = [
        {
          id: 0,
          title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
          price: 7000,
          promo: "CashBack",
          location: "Jakarta Pusat",
          rating: 4.9,
          sold: 100,
          image: tisue
        },
        {
          id: 1,
          title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
          price: 7000,
          promo: "CashBack",
          location: "Jakarta Pusat",
          rating: 4.9,
          sold: 100,
          image: tisue
        },
        {
          id: 2,
          title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
          price: 7000,
          promo: "CashBack",
          location: "Jakarta Pusat",
          rating: 4.9,
          sold: 100,
          image: tisue
        },
        {
          id: 3,
          title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
          price: 7000,
          promo: "CashBack",
          location: "Jakarta Pusat",
          rating: 4.9,
          sold: 100,
          image: tisue
        },
        {
          id: 4,
          title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
          price: 7000,
          promo: "CashBack",
          location: "Jakarta Pusat",
          rating: 4.9,
          sold: 100,
          image: tisue
        },
        {
            id: 5,
            title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
            price: 7000,
            promo: "CashBack",
            location: "Jakarta Pusat",
            rating: 4.9,
            sold: 100,
            image: tisue
          },
          {
            id: 6,
            title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
            price: 7000,
            promo: "CashBack",
            location: "Jakarta Pusat",
            rating: 4.9,
            sold: 100,
            image: tisue
          },
          {
            id: 7,
            title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
            price: 7000,
            promo: "CashBack",
            location: "Jakarta Pusat",
            rating: 4.9,
            sold: 100,
            image: tisue
          },
          {
            id: 8,
            title: "Masker KF94 MOUSON 4ply convex mask impor isi 10pc",
            price: 7000,
            promo: "CashBack",
            location: "Jakarta Pusat",
            rating: 4.9,
            sold: 100,
            image: tisue
          },
      ];
      return (
        <div className="container ">
          
            <div className="grid grid-cols-5">
             {data.map((item) =>{return( <Card item={item} />)})}
              
            </div>
         
        </div>
      );
    };

export default AllItem