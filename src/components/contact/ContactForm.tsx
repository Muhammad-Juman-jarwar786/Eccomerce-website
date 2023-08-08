// import { useFormik } from "formik";

const ContactForm = () => {
  // const formik = useFormik()

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-10 lg:mt-20 border-2 border-slate-600 mx-5 md:gap-5">
      <div className="text-center tracking-wider col-span-7">
        <div className="mt-4 lg:text-left lg:mx-4 lg:text-lg">
          LEAVE A MESSAGE
        </div>
        <h1 className="text-2xl font-bold mt-4 lg:text-left lg:mx-4 lg:text-3xl">
          We love to hear from you
        </h1>
        <form className="mx-2 lg:mx-4 mt-4 lg:mt-6 grid grid-cols-1 items-center gap-2 lg:gap-5">
          <input
            className="border-2 border-gray-300 p-2 lg:p-3 rounded-md outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border-2 border-gray-300 p-2 lg:p-3 rounded-md outline-none"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="border-2 border-gray-300 p-2 lg:p-3 rounded-md outline-none"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border-2 border-gray-300 p-2 lg:p-3 rounded-md outline-none"
            name=""
            id=""
            rows={4}
            placeholder="Your Message"
          />
          <button className="bg-emerald-600 mt-4 lg:mt-6 lg:w-32 p-2 lg:p-3 rounded-md text-white text-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-10 md:mt-0 text-center tracking-wider col-span-5 ">
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center lg:grid lg:grid-cols-2 lg:text-left lg:justify-items-start">
          <div className="lg:relative lg:items-center lg:justify-items-center">
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full  "
              src="src/assets/people/1.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              John Doe
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center lg:grid lg:grid-cols-2 lg:text-left">
          <div>
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
              src="src/assets/people/2.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              William Smith
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 grid-cols-1 grid justify-items-center lg:grid lg:grid-cols-2 lg:text-left">
          <div>
            <img
              className="md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
              src="src/assets/people/3.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold md:text-lg lg:text-xl">
              Emma Stone
            </h1>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Senior Marketing Manager
            </p>
            <p className="text-left text-gray-500 md:text-xs lg:text-sm">
              Phone: 0123 000 77 88
            </p>
            <p className="text-left text-gray-500 mb-10 md:text-xs lg:text-sm">
              Email: contact@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
