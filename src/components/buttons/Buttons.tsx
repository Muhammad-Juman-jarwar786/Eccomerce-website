import './Button.css';

export const Button = (props: any) => {
  return (
    <>
      <button
        className={`${props.classname} hover:scale-110 transition-all duration-700 active:scale-90 ${props.txtcolor} ${props?.border} ${props?.grouphoverbg} ${props?.grouphoverborder} ${props?.borderclr} ${props?.p} ${props?.mt} ${props?.mdmt} ${props.txtsize} ${props?.txtmdsize} shadow-md`}
      >
        {props.text}
      </button>
    </>
  );
};

export const Button2 = (props: any) => {
  return (
    <>
      <button className="btn p-2 shadow-md bg-red-600 rounded-md mt-3 text-lg md:text-xl hover:scale-110 transition-all duration-700 active:scale-90 ">
        {props.text}
      </button>
    </>
  );
};

export const Button3 = (props: any) => {
  return (
    <>
      <button className="btn hover:scale-110 transition-all duration-700 active:scale-90 lg:w-16 lg:h-16 cursor-pointer w-10 h-10 bg-emerald-600 text-center flex justify-center items-center rounded-md shadow-md">
        {props.text}
      </button>
    </>
  );
};

export const Button4 = () => {
  return (
    <>
      <button className="btnSignUp hover:scale-110 transition-all duration-700 active:scale-90 lg:w-20 lg:h-16 cursor-pointer w-14 h-10 bg-emerald-600 items-center rounded-md shadow-md flex justify-center">
        <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
      </button>
    </>
  );
};

export const Button5 = () => {
  return (
    <>
      <button className="btn hover:scale-110 transition-all  duration-700 active:scale-90 shadow-md text-lg font-bold text-white p-1 border-2 border-emerald-600 bg-emerald-600 rounded-r-md lg:text-xl lg:p-2 lg:w-28 lg:rounded-md lg:mt-2">
        Apply
      </button>
    </>
  );
};

export const Button6 = () => {
  return (
    <>
      <button className="btnCheckOut hover:scale-110 transition-all duration-700 active:scale-90 shadow-md bg-emerald-600 p-2 rounded-lg text-white font-bold lg:p-3 lg:text-lg">
        Proceed to checkout
      </button>
    </>
  );
};

export const Button7 = () => {
  return (
    <>
      <button
        type="submit"
        className="btn hover:scale-110 transition-all duration-700 active:scale-90 shadow-md bg-emerald-600 mt-4 lg:mt-6 lg:w-32 p-2 lg:p-3 rounded-md text-white text-lg"
      >
        Submit
      </button>
    </>
  );
};

export const Button8 = () => {
  return (
    <>
      <button className="btnSignUp hover:scale-110 transition-all duration-700 shadow-md active:scale-90 bg-emerald-600 w-28 md:w-36 lg:w-40 px-4 p-3 text-white rounded-r-md text-md md:text-lg lg:text-xl">
        Sign Up
      </button>
    </>
  );
};

export const Button9 = () => {
  return (
    <>
      <button className="btn hover:scale-110 transition-all duration-700 shadow-md active:scale-90 p-2 lg:p-3 h-full text-white bg-emerald-600 text-lg lg:text-xl text-center">
        Add To Cart
      </button>
    </>
  );
};
