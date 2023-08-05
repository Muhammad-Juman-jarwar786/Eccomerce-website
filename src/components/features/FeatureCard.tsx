const FeatureCard = (props: any) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 h-[40vh]">
      <div className="bg-white shadow-xl rounded-md h-full flex flex-col items-center justify-center">
        <img src={props.img} alt={props.alt} className="h-32" />
        <div
          className={`${props.bgcolor} font-semibold rounded-md text-xl text-center ${props.txtcolor} p-2 mt-4`}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
