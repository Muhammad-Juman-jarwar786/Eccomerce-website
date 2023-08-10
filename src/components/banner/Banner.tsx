import '../../animation/Button.css';
import b2 from '../../assets/banner/b2.jpg';

const Banner = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: `url(${b2})`,
    objectFit: 'contain',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60px',
    marginBottom: '40px',
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
          <button className="btn p-2 shadow-md bg-red-600 rounded-md mt-3 text-lg md:text-xl hover:scale-110 transition-all duration-700 active:scale-90 ">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
