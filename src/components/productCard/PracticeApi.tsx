// import React, { useState, useEffect } from 'react';
// import FeaturedProductsCard from './FeaturedProductsCard';

// const PracticeApi = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((json) => setAllProducts(json))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []); // The empty dependency array ensures this runs only once on component mount

//   return (
//     <div>
//       {allProducts.map((item: any) => (
//         <FeaturedProductsCard
//           key={item.id}
//           link=""
//           img={item.image} // Use 'image' instead of 'img'
//           alt={item.title}
//           category={item.category}
//           title={item.title}
//           price={item.price}
//           animation=""
//         />
//       ))}
//     </div>
//   );
// };

// export default PracticeApi;

// // id
// // title":
// // "price":
// // "description":
// // "category":
// // "image"
