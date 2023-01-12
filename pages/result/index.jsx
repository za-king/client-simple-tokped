import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

import { getSearchProducts } from "../api/hello";
import Card from "../../components/Card";
function Result() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { search } = router.query;
  useEffect(() => {
    getSearchProducts(search).then((res) => setProducts(res.data.product));
  }, [search]);

  console.log(products);
  return (
    <>
      <Layout>
        <div className="container mt-28 min-h-screen">
          {products.length === 0 ? <div className="text-center"> product "{search}" not found</div> : <div className="grid grid-cols-4">
            {products.map((item) => {
              return <Card item={item} />;
            })}
          </div>}
        </div>
      </Layout>
    </>
  );
}

export default Result;
