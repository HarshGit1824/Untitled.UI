import React from "react";
import { RiSparklingFill } from "react-icons/ri";
import Intro from "./Intro";

const Form = () => {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      {/* Intro */}
      <Intro />

      
      <form className="flex flex-col gap-1">
        {/* Inputs */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />

        <p className="my-5 text-gray-800">How can we help?</p>
        {/* Checkbox */}
        <div className="mb-10 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input type="checkbox" name="" id="" className="size-5" />{" "}
                {service}
              </label>
            );
          })}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get Started{" "}
          <RiSparklingFill
            className="text-violet-600 hover:text-blue-700"
            size={25}
          />{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
