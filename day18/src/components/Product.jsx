import { useEffect, useState } from "react";
import '../App.css'
const Product = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch('https://fakestoreapi.com/products/1');
        const jsonData = await res.json();
        setData(jsonData);
      }catch(error){
        console.log(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
