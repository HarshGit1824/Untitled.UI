import { useForm } from "react-hook-form";
import React from "react";
import { RiSparklingFill } from "react-icons/ri";
import Intro from "./Intro";
import configs from "../utils/configs";
import spamDetect from "../utils/spamDetect";

const Form = () => {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data) => {
    const spamCheck = await spamDetect(data.message);
    if (spamCheck.isProfanity) {
      console.log("Shi se fill karo");
    } else {
      const formData = new FormData();
      formData.append(configs.fullname, data.fullname);
      formData.append(configs.email, data.email);
      formData.append(configs.message, data.message);
      formData.append(configs.services, data.services);

      fetch(configs.submitUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }).then(() => {
        console.log("Form submit hogya!");
      });
    }
  };

  return (
    <>
      {/* Intro */}
      <Intro />

      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* Inputs */}
        <input
          type="text"
          {...register("fullname", {
            required: "Please enter your fullname",
            minLength: {
              value: 5,
              message: "Fullname should contain at least 5 characters",
            },
          })}
          id="fullname"
          placeholder="Your name"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />

        {errors.fullname && (
          <p className="text-red-600">{errors.fullname.message}</p>
        )}

        <input
          type="email"
          {...register("email", {
            required: "Please enter your email!",
            pattern: {
              value:
                /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim,
              message: "Only gmail is allowed.",
            },
          })}
          id="email"
          placeholder="you@company.com"
          className="rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />

        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <input
          type="text"
          {...register("message", {
            required: "Please enter a message!",
            minLength: {
              value: 5,
              message: "Make it a bit more descriptive",
            },
          })}
          id="message"
          placeholder="Tell us a bit about your project...!"
          className="h-24 rounded-sm border-b border-stone-700 p-2 placeholder-gray-700 md:bg-violet-400"
        />
        {errors.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}

        <p className="my-5 text-gray-800">How can we help?</p>
        {/* Checkbox */}
        <div className="mb-10 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  value={service}
                  {...register("services", {
                    required: "Enter atleast one!",
                  })}
                  className="size-5"
                />
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
