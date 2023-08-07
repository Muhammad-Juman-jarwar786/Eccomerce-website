import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutSection from '../components/about/AboutSection';
import AboutVideo from '../components/about/AboutVideo';
import Features from '../components/features/Features';
import NewsLetter from '../components/newsLetter/NewsLetter';

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutSection />
      <AboutVideo />
      <Features />
      <br />
      <NewsLetter />
    </>
  );
};

export default About;
