import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CartComp from '../../components/CartComp'
import { getProductById } from "../api/hello";
import Image from "next/image";

function Detail() {
  const [dataById, setDataById] = useState([]);
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    getProductById(title).then((res) => setDataById(res.data.product));
  }, [title]);

  return (
    <>
      <Layout>
        {dataById ? (
          <div className="container mt-28 min-h-screen grid grid-cols-3 justify-items-center">
            <div >
              <Image src={dataById.image} width={400} height={400} className="border rounded-lg" alt="image-detail"/>
            </div>

            <div>
            <p className="text-lg font-semibold">{dataById.title}</p>
            </div>

            <div>
              <CartComp  dataById={dataById}/>
            </div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </Layout>
    </>
  );
}

export default Detail;
