import CartHeroSection from '../components/cart/CartHeroSection';
import CartProductsSection from '../components/cart/CartProductsSection';
import CartTotalSection from '../components/cart/CartTotalSection';

const Cart = () => {
  return (
    <>
      <CartHeroSection />
      <CartProductsSection />
      <CartTotalSection />
    </>
  );
};

export default Cart;
