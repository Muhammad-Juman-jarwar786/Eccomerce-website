import HeroBanner from '../banner/HeroBanner';

const ContactHeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/about/banner.png')",
  };
  return (
    <>
      <HeroBanner
        height="lg:h-[30rem]"
        banner={bannerStyle}
        title="#let's_talk"
        description="LEAVE A MESSAGE, We love to hear from you!"
      />
    </>
  );
};

export default ContactHeroSection;
