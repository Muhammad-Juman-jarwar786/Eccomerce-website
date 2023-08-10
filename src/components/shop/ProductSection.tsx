import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
import { ProductsData } from '../../data/ProductsData';
import { Button3, Button4 } from '../buttons/Buttons';

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
        <Button3 text="1" />
        <Button3 text="2" />
        <Button4 />
      </div>
    </div>
  );
};

export default ProductSection;
