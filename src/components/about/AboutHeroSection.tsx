import HeroBanner from '../banner/HeroBanner';

const AboutHeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/about/banner.png')",
  };
  return (
    <>
      <HeroBanner
        height="lg:h-[30rem]"
        banner={bannerStyle}
        title="#KnowUs"
        description="We Are an Online Ecommerce Website!"
      />
    </>
  );
};

export default AboutHeroSection;
