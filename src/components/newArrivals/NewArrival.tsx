import FeaturedProductsCard from '../featuredProducts/FeaturedProductsCard';
import { ProductsData } from '../../data/ProductsData';

const NewArrival = () => {
  const productsToShow = 8;

  return (
    <>
      <div className="ml-10 mr-10">
        <div className="items-center justify-center text-center mt-20">
          <div className="text-4xl font-bold text-black tracking-widest">
            New Arrivals
          </div>
          <div className="text-md text-slate-400 mt-4">
            Summer Collection New Modern Design
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
          {ProductsData.slice(ProductsData.length - productsToShow).map(
            (products) => (
              <FeaturedProductsCard
                key={products.id}
                img={products.img}
                alt={products.alt}
                category={products.category}
                title={products.title}
                price={products.price}
              />
            )
          )}
          {/* <FeaturedProductsCard
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
          /> */}
        </div>
      </div>
    </>
  );
};

export default NewArrival;
