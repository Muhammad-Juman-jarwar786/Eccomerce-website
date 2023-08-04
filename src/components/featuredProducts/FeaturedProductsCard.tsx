import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturedProductsCard = () => {
  return (
    <>
      <div className="bg-white w-full flex flex-col  border-2 rounded-2xl mt-9 p-3 sm:w-1/2 shadow-lg">
        <div className="w-full h-auto">
          <img className="rounded-lg" src="src/assets/products/f1.jpg" alt="" />
        </div>
        <div>
          <p className="text-slate-400 text-xl">addidas</p>
          <h1 className="text-teal-700 font-medium  text-2xl">
            Cartoon Astronaut T-Shirts
          </h1>
          <div>
            <div className="text-md">
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
            </div>
            <div className="flex justify-between text-2xl">
              <div className="text-teal-700 font-medium mt-2">$78</div>
              <div className="bg-slate-300 w-12 h-12 p-3 text-center items-center justify-center  relative rounded-full bg-opacity-40 cursor-pointer">
                <FontAwesomeIcon
                  className="text-teal-700 w-7 h-7 m-auto"
                  icon={faCartShopping}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsCard;
