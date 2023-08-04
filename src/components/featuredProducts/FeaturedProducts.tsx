import FeaturedProductsCard from './FeaturedProductsCard';

const FeaturedProducts = () => {
  return (
    <>
      <div className="items-center justify-center text-center mt-20">
        <div className="text-4xl font-bold text-black tracking-widest">
          Featured Products
        </div>
        <div className="text-md text-slate-400 mt-4">
          Summer Collection New Modern Design
        </div>
      </div>
      <div className="mt-10 flex flex-col w-full sm:flex-wrap sm:flex-row">
        <FeaturedProductsCard />
        <FeaturedProductsCard />
        <FeaturedProductsCard />
        <FeaturedProductsCard />
      </div>
    </>
  );
};

export default FeaturedProducts;
