const CartTotalSection = () => {
  return (
    <div className="mb-5 lg:mb-10 overflow-hidden mt-10 lg:mt-20 grid grid-cols-1 justify-items-center lg:justify-items-start mx-auto lg:grid-cols-12">
      <div className="lg:w-80 lg:ml-5 col-span-4">
        <h1 className="font-bold text-xl text-center lg:text-2xl">
          Apply Coupon
        </h1>
        <div className=" mt-3 lg:mt-6 lg:grid lg:grid-cols-1 justify-items-center">
          <input
            className="outline-none border-2 border-gray-300 rounded-l-md p-1 w-40 text-lg lg:text-xl lg:w-56 lg:p-2 lg:rounded-md"
            placeholder="XYZ123"
            type="text"
          />
          <button className="text-lg font-bold text-white p-1 border-2 border-emerald-600 bg-emerald-600 rounded-r-md lg:text-xl lg:p-2 lg:w-28 lg:rounded-md lg:mt-2">
            Apply
          </button>
        </div>
      </div>
      <div className="w-[85vw] lg:w-[60vw] col-span-8">
        <div className="border-2 mt-10 lg:mt-0 w-max-fit">
          <div>
            <div className="font-bold text-xl p-2 lg:text-2xl lg:p-3">
              Cart Totals
            </div>
          </div>
          <div className="border-2 h-auto w-[80%] mx-auto mt-3 lg:mt-4 text-gray-600 font-bold">
            <div className="grid grid-cols-2">
              <div className="text-lg border-b-2 p-1 lg:text-xl lg:p-2">
                Cart Subtotal
              </div>
              <div className="text-lg border-b-2 border-l-2 p-1 lg:text-xl lg:p-2">
                $100
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-lg border-b-2 p-1 lg:text-xl lg:p-2">
                Shipping
              </div>
              <div className="text-lg border-b-2 border-l-2 p-1 lg:text-xl lg:p-2">
                Free
              </div>
            </div>
            <div className="grid grid-cols-2 text-black">
              <div className="text-lg p-1 lg:text-xl lg:p-2">Total</div>
              <div className="text-lg border-l-2 p-1 lg:text-xl lg:p-2">
                $100
              </div>
            </div>
          </div>
          <div className="p-2 lg:p-3 mt-3 lg:mt-5">
            <button className="bg-emerald-600 p-2 rounded-lg text-white font-bold lg:p-3 lg:text-lg">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotalSection;