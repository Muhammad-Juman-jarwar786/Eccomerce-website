import FeaturedProductsCard from "../featuredProducts/FeaturedProductsCard";

const Data = [
  {
    id: 1,
    img: "src/assets/products/f1.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 2,
    img: "src/assets/products/f2.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 3,
    img: "src/assets/products/f3.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 4,
    img: "src/assets/products/f4.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 5,
    img: "src/assets/products/f5.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 6,
    img: "src/assets/products/f6.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 7,
    img: "src/assets/products/f7.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 8,
    img: "src/assets/products/f8.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 9,
    img: "src/assets/products/n1.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 10,
    img: "src/assets/products/n2.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 11,
    img: "src/assets/products/n3.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 12,
    img: "src/assets/products/n4.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 13,
    img: "src/assets/products/n5.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 14,
    img: "src/assets/products/n6.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 15,
    img: "src/assets/products/n7.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
  {
    id: 16,
    img: "src/assets/products/n8.jpg",
    alt: "product image",
    category: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: "78",
  },
];

const ProductSection = () => {
  return (
    <div className="ml-10 mr-10 mb-20">
      <div className=" mt-10 flex flex-col w-full sm:flex-wrap sm:flex-row">
        {Data.map((item) => (
          <FeaturedProductsCard
            key={item.id}
            link="/singleproduct"
            img={item.img}
            alt={item.alt}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex h-full justify-center items-center font-bold text-2xl gap-1 mt-20 text-white">
        <div className="cursor-pointer w-10 h-10 bg-emerald-700 text-center rounded-md shadow-md">
          1
        </div>
        <div className="cursor-pointer w-10 h-10 bg-emerald-700 text-center rounded-md shadow-md">
          2
        </div>
        <div className="cursor-pointer w-14 h-10 bg-emerald-700 items-center rounded-md shadow-md flex justify-center">
          <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
