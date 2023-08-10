import b2 from '../../assets/banner/b2.jpg';
import { Button2 } from '../buttons/Buttons';

const Banner = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: `url(${b2})`,
  };

  return (
    <div
      style={bannerStyles}
      className="mt-[60px] mb-10 items-center flex h-[250px] object-contain justify-center bg-cover bg-center"
    >
      <div className="items-center text-center text-white font-bold">
        <div className="text-xl md:text-2xl mb-3">Repair Services</div>
        <div className="text-2xl md:text-3xl">
          Up to
          <span className="text-red-600"> 70% Off </span>— All T-Shirts &
          Accessories
        </div>
        <div className="">
          <Button2 text="Explore More" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
