import Banner from '../components/banner/Banner';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts';
import Features from '../components/features/Features';
import HeroSection from '../components/heroSection/HeroSection';

const Home = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-50 w-full h-auto"
      >
        <HeroSection />
        <Features />
        <FeaturedProducts />
        <Banner />
      </div>
    </>
  );
};

export default Home;
