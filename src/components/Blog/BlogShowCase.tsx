import BlogShowCaseCard from "./BlogShowCaseCard";
import { BlogData } from "../../data/BlogData";
import { Button } from "../buttons/Buttons";

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
        <Button className="btn lg:w-16 lg:h-16 w-10 h-10 bg-emerald-600 flex justify-center items-center rounded-md">
          1
        </Button>
        <Button className="btn lg:w-16 lg:h-16 w-10 h-10 bg-emerald-600 flex justify-center items-center rounded-md">
          2
        </Button>

        <Button className="btnSignUp lg:w-20 lg:h-16 w-14 h-10 bg-emerald-600 items-center rounded-md  flex justify-center">
          <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
        </Button>
      </div>
    </>
  );
};

export default BlogShowCase;
