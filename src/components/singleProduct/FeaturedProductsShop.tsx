import FeaturedProductsCard from '../featuredProducts/FeaturedProductsCard';
import { ProductsData } from '../../data/ProductsData';

const FeaturedProductsShop = () => {
  const productsToShow: number = 4;

  return (
    <>
      <div className="ml-10 mr-10 mb-20">
        <div className="md:ml-10 md:mr-10 items-center justify-center text-center mt-20">
          <div className="text-4xl font-bold text-black tracking-widest">
            Featured Products
          </div>
          <div className="text-md text-slate-400 mt-4">
            Summer Collection New Modern Design
          </div>
        </div>
        <div className="mt-10 flex flex-col mx-auto sm:flex-wrap sm:flex-row">
          {ProductsData.slice(0, productsToShow).map((product) => (
            <FeaturedProductsCard
              key={product.id}
              img={product.img}
              alt={product.alt}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsShop;
