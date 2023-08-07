const SingleProduct = () => {
  return (
    <div className="pt-36 bg-slate-50 md:flex">
      <div className="ml-3 mr-3 lg:mr-10 lg:w-[180vw]">
        <div className="w-full ">
          <img className="" src="src/assets/products/f1.jpg" alt="" />
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <img src="src/assets/products/f1.jpg" alt="" />
          </div>
          <div>
            <img src="src/assets/products/f2.jpg" alt="" />
          </div>
          <div>
            <img src="src/assets/products/f3.jpg" alt="" />
          </div>
          <div>
            <img src="src/assets/products/f4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="font-bold tracking-wider text-center lg:text-left mt-10">
        <div className="text-slate-500 text-md lg:text-xl ">Home/T-Shirt</div>
        <div className="text-black text-2xl mt-2 lg:text-4xl">
          Men's Fashion T Shirts
        </div>
        <div className="text-slate-700 text-lg mt-2 lg:text-2xl">$139.00</div>
        <select
          className="text-slate-700 text-lg border-2 outline-none border-slate-400 mt-2 p-1 bg-transparent lg:p-2 lg:text-xl lg:mt-5"
          name="Select-size"
          id=""
        >
          <option value="size">Select size</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">XL</option>
          <option value="2xl">2XL</option>
        </select>
        <div className="mt-2 lg:mt-5">
          <input
            className="w-14 lg:w-20 lg:text-xl h-full p-2 lg:p-3 border-2 text-lg border-slate-400 text-center outline-none"
            type="number"
          />
          <button className="p-2 lg:p-3 h-full text-white bg-emerald-600 text-lg lg:text-xl text-center">
            Add To Cart
          </button>
        </div>
        <div className="text-black text-2xl mt-4 lg:text-3xl">
          Product Details
        </div>
        <p className="mt-2 text-sm text-justify ml-6 mr-6 lg:mr-16 lg:ml-1 text-slate-500 font-semibold mb-40">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          libero blanditiis temporibus aut corrupti magni ullam voluptatem quod
          atque pariatur, sunt, eaque sed suscipit tempore voluptatibus
          obcaecati laborum? Asperiores, ipsam?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita velit fugiat amet, voluptate
          sint et ducimus iusto natus quisquam dolores iste, magnam
          necessitatibus eaque nam voluptatem praesentium obcaecati temporibus
          eos?
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
