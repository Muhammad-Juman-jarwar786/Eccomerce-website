import FeaturedProductsCard from '../featuredProducts/FeaturedProductsCard';

const NewArrival = () => {
  return (
    <>
      <div className="items-center justify-center text-center mt-20">
        <div className="text-4xl font-bold text-black tracking-widest">
          New Arrivals
        </div>
        <div className="text-md text-slate-400 mt-4">
          Summer Collection New Modern Design
        </div>
      </div>
      <div className="mt-10 flex flex-col w-full sm:flex-wrap sm:flex-row">
        <FeaturedProductsCard
          img="src/assets/products/n1.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n2.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n3.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n4.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n5.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n6.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n7.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
        <FeaturedProductsCard
          img="src/assets/products/n8.jpg"
          alt="product image"
          category="adidas"
          title="Cartoon Astronaut T-Shirt"
          price="78"
        />
      </div>
    </>
  );
};

export default NewArrival;
