import KategoriPilihan from "./KategoriPilihan";
import TopUpDanTagihan from "./TopUpDanTagihan";


import figureIcon from '../asset/kategori/figure.jpg'
import harddiskIcon from '../asset/kategori/harddisk.jpg'
import makananIcon from '../asset/kategori/makanan-kering.jpg'
import shoesIcon from '../asset/kategori/shoes.jpg'
import tasIcon from '../asset/kategori/tas.jpg'
import toplesIcon from '../asset/kategori/toples.jpg'

const Gabungan = (props) => {
  
 const {category} = props
  
  const categoryData = [
    {id: 0, categoryTitle: "figure" ,image: figureIcon},
    {id: 1, categoryTitle: "harddisk" ,image: harddiskIcon},
    {id: 2, categoryTitle: "makanan" ,image: makananIcon},
    {id: 3, categoryTitle: "shoes" ,image: shoesIcon},
    {id: 4, categoryTitle: "tas" ,image: tasIcon},
    {id: 5, categoryTitle: "toplese" ,image: toplesIcon},

  ]

  const topUpCategory = [
    { id: 0, title: "pulsa" },
    { id: 1, title: "paket data" },
    { id: 2, title: "flight" },
    { id: 3, title: "listrik" },
    { id: 4, title: "bpjs" },
    { id: 5, title: "roaming" },
  ];
  return (
    <>
      <div className=" container my-4">
        <div className="  grid grid-cols-2 shadow-lg rounded-lg h-60 m-auto">
          <div className="pl-4 pt-4 text-gray-800 text-xl font-semibold">
            <h2>Kategori Pilihan</h2>
            <KategoriPilihan category={category} />
            
          </div>
          <div className="pl-4  pt-4  text-gray-800 text-xl font-semibold">
          <h2>TopUp & Bills</h2>
            <TopUpDanTagihan topUpCategory={topUpCategory}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gabungan;
