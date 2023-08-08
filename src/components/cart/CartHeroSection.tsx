import HeroBanner from '../banner/HeroBanner';

const CartHeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/about/banner.png')",
  };

  return (
    <>
      <HeroBanner
        height="lg:h-[24rem]"
        banner={bannerStyle}
        title="#cart"
        description="Add your coupon code and SAVE upto 70%!"
      />
    </>
  );
};

export default CartHeroSection;
