import HeroBanner from '../banner/HeroBanner';

const BlogHeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/banner/b19.jpg')",
  };

  return (
    <HeroBanner
      height="lg:h-[30rem]"
      banner={bannerStyle}
      title="#readmore"
      description="Read all case studies about our products!"
    />
  );
};

export default BlogHeroSection;
