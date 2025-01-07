import React, { useEffect, useState } from "react";
import { lazy } from "react";
import "./temp.scss";
export default function Temp() {
  const [dataShow, setDataShow] = useState(false);
  const [data, setData] = useState([]); // State to hold the fetched data

//   This will run when the component is first rendered
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          setData(data);
          setDataShow(true);
        }) // Save the data to state
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  // // Empty dependency array makes it run only once on mount
  console.log(data);
  console.log(data.products);
  let products = data.products;

  return (
    <div className="container">
      <div>
        {dataShow ? (
          products.map((el, i) => {
            return (
              <div key={i}>
                <p>{el.id}</p>
                <img
                loading="lazy"
                  style={{ width: "100px", height: "100px" }}
                  src={el.images}
                />
                <p>okay</p>
              </div>
            );
          })
        ) : (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}
