import React from "react";
import { RiSparklingFill } from "react-icons/ri";
import Intro from "./Intro";
import { useState, useRef } from "react";
import configs from "../utils/configs";

const Form = () => {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [selectedServices, setSelectedServices] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedServices);
  };

  // @desc This function is invoked by clicking on checkbox
  // @desc logs the value
  const handleCheckbox = (value, checked) => {
    setSelectedServices((prevState) => {
      const updatedServices = checked
        ? [...prevState, value]
        : prevState.filter((service) => service !== value);
      return updatedServices;
    });
  };

  return (
    <>
      {/* Intro */}
      <Intro />

      <form className="flex flex-col gap-1" action={configs.submitUrl}>
        {/* Inputs */}
        <input
          type="text"
          name={configs.fullname}
          id="fullname"
          placeholder="Your name"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="email"
          name={configs.email}
          id="email"
          placeholder="you@company.com"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name={configs.message}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="my-5 text-gray-800">How can we help?</p>
        {/* Checkbox */}
        <div className="mb-10 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  name={configs.services}
                  value={service}
                  className="size-5"
                  onClick={(e) => handleCheckbox(service, e.target.checked)}
                />{" "}
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
