import { useEffect,useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Promo from "../components/Promo";
import Gabungan from "../components/Gabungan";
import TraktikPengguna from "../components/TraktikPengguna";
import CategorySticky from "../components/CategorySticky";
import AllItem from "../components/AllItem";

import { getProducts ,getAllCategory} from "./api/hello";
export default function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  useEffect(()=>{
    getProducts().then((res)=>setProducts(res.data.product))
    getAllCategory().then((res)=>setCategory(res.data))
  } ,[])

  
  return (
    <>
      <Head>
        <title>tokopedia.com</title>
      </Head>
      <Layout>
        <div className="container mt-28">
          <Promo />
        </div>

        <Gabungan category={category} />

        <TraktikPengguna product={products} />
        <CategorySticky/>
        <AllItem data={products}/>
      </Layout>
    </>
  );
}
