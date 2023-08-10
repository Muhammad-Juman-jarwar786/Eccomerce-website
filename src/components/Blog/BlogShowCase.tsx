import BlogShowCaseCard from './BlogShowCaseCard';
import { BlogData } from '../../data/BlogData';
import { Button3, Button4 } from '../buttons/Buttons';

const BlogShowCase = () => {
  return (
    <>
      <div>
        {BlogData.slice(0, 6).map((item) => (
          <BlogShowCaseCard
            key={item.id}
            number={item.number}
            img={item.img}
            alt={item.alt}
            title={item.title}
            description={item.description}
            button={item.button}
            imgAnimation={item.imgAnimation}
            txtAnimation={item.txtAnimation}
          />
        ))}
      </div>
      <div className="mb-20 flex h-full justify-center items-center font-bold text-2xl lg:text-3xl gap-1 mt-20 text-white">
        <Button3 text="1" />
        <Button3 text="2" />
        <Button4 />
      </div>
    </>
  );
};

export default BlogShowCase;
