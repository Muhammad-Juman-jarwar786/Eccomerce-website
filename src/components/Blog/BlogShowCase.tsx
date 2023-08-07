import BlogShowCaseCard from './BlogShowCaseCard';
import { BlogData } from '../../data/BlogData';

const BlogShowCase = () => {
  return (
    <>
      {BlogData.slice(0, 6).map((item) => (
        <BlogShowCaseCard
          key={item.id}
          number={item.number}
          img={item.img}
          alt={item.alt}
          title={item.title}
          description={item.description}
          button={item.button}
        />
      ))}
      <div className="mb-20 flex h-full justify-center items-center font-bold text-2xl lg:text-3xl gap-1 mt-20 text-white">
        <div className="lg:w-16 lg:h-16 cursor-pointer w-10 h-10 bg-emerald-700 text-center flex justify-center items-center rounded-md shadow-md">
          1
        </div>
        <div className="lg:w-16 lg:h-16 cursor-pointer w-10 h-10 bg-emerald-700 text-center flex justify-center items-center rounded-md shadow-md">
          2
        </div>
        <div className="lg:w-20 lg:h-16 cursor-pointer w-14 h-10 bg-emerald-700 items-center rounded-md shadow-md flex justify-center">
          <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
        </div>
      </div>
    </>
  );
};

export default BlogShowCase;