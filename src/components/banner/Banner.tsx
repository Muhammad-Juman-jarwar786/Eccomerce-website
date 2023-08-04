const Banner = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: "url('src/assets/banner/b2.jpg')",
    objectFit: 'contain',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={bannerStyles}>
      <div className="items-center text-center text-white font-bold">
        <div className="text-xl md:text-2xl mb-3">Repair Services</div>
        <div className="text-2xl md:text-3xl">
          Up to
          <span className="text-red-600"> 70% Off </span>— All T-Shirts &
          Accessories
        </div>
        <div className="">
          <button className="text-black bg-white p-2 rounded-md mt-3 text-lg md:text-xl">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
