import CartProduct from './CartProduct';

const CartProductsSection = () => {
  return (
    <div className="mt-10">
      <table className="justify-center grid-cols-1 grid gap-5">
        <thead className="">
          {/* <hr className="w-[88vw] mx-auto" /> */}
          <tr className=" text-bold text-sm lg:text-lg grid grid-cols-6">
            <th className="border-b-2 border-t-2 p-3">IMAGE</th>
            <th className="border-b-2 border-t-2 p-3">PRODUCT</th>
            <th className="border-b-2 border-t-2 p-3">PRICE</th>
            <th className="border-b-2 border-t-2 p-3">QUANTITY</th>
            <th className="border-b-2 border-t-2 p-3">SUBTOTAL</th>
            <th className="border-b-2 border-t-2 p-3">REMOVE</th>
          </tr>
          {/* <hr className="w-[88vw] mx-auto" /> */}
        </thead>
        <tbody className="mt-2 mx-2">
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </tbody>
      </table>
    </div>
  );
};

export default CartProductsSection;
