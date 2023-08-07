import FeatureCard from './FeatureCard';
import { FeaturesData } from '../../data/FeaturesData';

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      {FeaturesData.map((feature) => (
        <FeatureCard
          key={feature.id}
          img={feature.img}
          title={feature.title}
          bgcolor={feature.bgcolor}
          txtcolor={feature.txtcolor}
          alt={feature.alt}
        />
      ))}
      {/* <FeatureCard
        img="src/assets/features/f1.png"
        title="Free Shipping"
        bgcolor="bg-yellow-200"
        txtcolor="text-emerald-600"
        alt="FreeShipping"
      />
      <FeatureCard
        img="src/assets/features/f2.png"
        title="Online Order"
        bgcolor="bg-green-200"
        txtcolor="text-emerald-600"
        alt="OnlineOrder"
      />
      <FeatureCard
        img="src/assets/features/f3.png"
        title="Save Money"
        bgcolor="bg-blue-200"
        txtcolor="text-emerald-600"
        alt="SaveMoney"
      />
      <FeatureCard
        img="src/assets/features/f4.png"
        title="Promotions"
        bgcolor="bg-indigo-200"
        txtcolor="text-emerald-600"
        alt="Promotions"
      />
      <FeatureCard
        img="src/assets/features/f5.png"
        title="Happy Sell"
        bgcolor="bg-pink-200"
        txtcolor="text-emerald-600"
        alt="HappySell"
      />
      <FeatureCard
        img="src/assets/features/f6.png"
        title="24/7 support"
        bgcolor="bg-orange-200"
        txtcolor="text-emerald-600"
        alt="24/7 support"
      /> */}
    </div>
  );
};

export default Features;
