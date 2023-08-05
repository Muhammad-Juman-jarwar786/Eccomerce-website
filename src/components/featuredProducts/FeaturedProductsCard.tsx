import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedProductsCard = (props: any) => {
  return (
    <>
      <div className="bg-white w-full flex flex-col  border-2 rounded-3xl mt-9 p-3 sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg justify-">
        <div className="w-full h-auto">
          <img className="rounded-3xl" src={props.img} alt={props.alt} />
        </div>
        <div>
          <p className="text-slate-400 text-xl sm:text-lg">{props.category}</p>
          <h1 className="text-teal-700 font-medium  text-2xl sm:text-xl">
            {props.title}
          </h1>
          <div>
            <div className="text-md sm:text-sm">
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffa200" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffa200" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffa200" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffa200" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffa200" }} />
            </div>
            <div className="flex justify-between text-2xl sm:text-xl">
              <div className="text-teal-700 font-medium mt-2">
                ${props.price}
              </div>
              <div className="bg-slate-300 w-12 h-12 p-3 text-center items-center justify-center  relative rounded-full bg-opacity-40 cursor-pointer">
                <FontAwesomeIcon
                  className="text-teal-700 w-7 h-7 sm:w-6 sm:h-6 m-auto"
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
