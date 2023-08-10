import '../../animation/Button.css';

const BannerShowCase = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: "url('src/assets/banner/b17.jpg')",
  };
  const bannerStyles2: React.CSSProperties = {
    backgroundImage: "url('src/assets/banner/b10.jpg')",
  };

  return (
    <div className="md:mx-10 lg:mx-20 mt-20 md:mb-0 mb-20 md:flex gap-10 ">
      <div
        className="group mb-10 h-56 md:h-96 w-full md:w-1/2 flex justify-between text-left items-center bg-cover gap-5 md:bg-cover md:bg-center"
        style={bannerStyles}
      >
        <div className="ml-4 md:ml-6 lg:ml-10 font-bold tracking-widest">
          <div className="text-lg text-slate-200 md:text-2xl mb-3 md:mb-6">
            crazzy deals
          </div>
          <div className="text-2xl font-extrabold text-slate-50 md:text-3xl">
            buy 1 get 1 free
          </div>
          <div className="text-sm mt-2 md:mt-4 text-slate-100">
            The best Classic dress is on sale
          </div>
          <div className="mt-2">
            <button className="btn hover:scale-110 transition-all duration-700 active:scale-90 text-white border-2 group-hover:bg-emerald-600 group-hover:border-none border-slate-100 p-2 mt-3 md:mt-6 text-md md:text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div
        className="group h-56 md:h-96 w-full md:w-1/2 flex justify-between text-left items-center bg-cover md:bg-cover md:bg-center gap-5"
        style={bannerStyles2}
      >
        <div className=" ml-4 md:ml-6 lg:ml-10 font-bold tracking-widest">
          <div className="text-xl text-slate-200 md:text-2xl mb-3 md:mb-6">
            spring/summer
          </div>
          <div className="text-3xl font-extrabold text-slate-50 md:text-3xl">
            Upcoming Season
          </div>
          <div className="text-md mt-2 md:mt-4 text-slate-100">
            The best Classis dress is on sale
          </div>
          <div className="mt-2">
            <button className="btn hover:scale-110 transition-all duration-700 active:scale-90 text-white border-2 group-hover:bg-emerald-600 group-hover:border-none border-slate-100 p-2 mt-3 md:mt-6 text-md md:text-xl">
              Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerShowCase;
