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
        <FeaturedProductsCard
          img="src/assets/products/f1.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f2.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f3.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f4.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f5.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f6.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f7.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/f8.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
      </div>
    </>
  );
};

export default FeaturedProducts;
