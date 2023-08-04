const HeroSection = () => {
  return (
    <div className="bg-slate-200 flex flex-col-reverse md:flex-row w-full drop-shadow-xl">
      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-32 mt-8 md:mt-32">
        <h3 className="text-slate-800 text-xl md:text-2xl mb-4 tracking-widest">
          Trade-In-Offer
        </h3>
        <h1 className="text-4xl md:text-5xl tracking-widest font-extrabold text-slate-950 mb-6">
          Super value deals <br />
          <span className="text-emerald-600">On all products</span>
        </h1>
        <p className="text-slate-500 tracking-widest">
          Save More With coupons & up to 70% Off!
        </p>
        <div className="mt-8">
          <button className="relative w-60 h-12 rounded-md bg-transparent">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              src="src/assets/button-background.png"
              alt=""
            />
            <span className="relative z-10 text-emerald-600 tracking-widest font-bold">
              Shop Now
            </span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          className="w-full h-[90vh] object-contain ml-[-5vw] md:ml-0"
          src="src/assets/herosection.png"
          alt="Model"
        />
      </div>
    </div>
  );
};

export default HeroSection;
