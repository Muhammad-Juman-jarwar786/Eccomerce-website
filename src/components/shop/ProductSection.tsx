import FeaturedProductsCard from '../productCard/FeaturedProductsCard';

import { ProductsData } from '../../data/ProductsData';

const ProductSection = () => {
  return (
    <div className="ml-10 mr-10 mb-20">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
        {ProductsData.map((item) => (
          <FeaturedProductsCard
            key={item.id}
            link="/singleproduct"
            img={item.img}
            alt={item.alt}
            category={item.category}
            title={item.title}
            price={item.price}
            animation={item.animation}
          />
        ))}
      </div>
      <div className="flex h-full justify-center items-center font-bold text-2xl lg:text-3xl gap-1 mt-20 text-white">
        <div className="lg:w-16 lg:h-16 cursor-pointer w-10 h-10 bg-emerald-700 text-center flex justify-center items-center rounded-md shadow-md">
          1
        </div>
        <div className="lg:w-16 lg:h-16 cursor-pointer w-10 h-10 bg-emerald-700 text-center flex justify-center items-center rounded-md shadow-md">
          2
        </div>
        <div className="lg:w-20 lg:h-16 cursor-pointer w-14 h-10 bg-emerald-700 items-center rounded-md shadow-md flex justify-center">
          <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
