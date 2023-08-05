const HeroSection = () => {
  const bannerStyle = {
    backgroundImage: "url('src/assets/banner/b1.jpg')",
  };

  return (
    <div className="pt-24">
      <div
        className="w-full h-64 object-fill text-white items-center justify-center flex flex-col font-bold"
        style={bannerStyle}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl">#stayhome</div>
        <div className="text-lg text-slate-400 mt-1 md:text-xl lg:text-2xl md:mt-2 lg:mt-4">
          Save more with coupons & up to 70% off!
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
