import HeroBanner from '../banner/HeroBanner';

const HeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/banner/b1.jpg')",
  };

  return (
    <HeroBanner
      height="h-80"
      banner={bannerStyle}
      title="#stayhome"
      description="Save more with coupons & up to 70% off!"
    />
  );
};

export default HeroSection;
