import React from "react";
import {
  RiFacebookCircleFill,
  RiChat3Line,
  RiPhoneLine,
  RiMap2Line,
  RiTwitterXFill,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Aside = () => {
  const contactInfo = [
    {
      id: 0,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
      icon: RiChat3Line,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: RiMap2Line,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: RiPhoneLine,
    },
  ];

  return (
    <div className="flex min-h-full flex-col justify-between">
      {/* Contact Information */}
      <section>
        {contactInfo.map((info) => {
          return (
            <div className="mb-7" key={info.id}>
              {<info.icon size={25} />}
              <h3 className="text-lg font-bold">{info.title}</h3>
              <p className="mb-1 text-slate-700">{info.description}</p>
              <p>{info.action}</p>
            </div>
          );
        })}
      </section>

      {/* Social */}
      <section className="flex gap-1 text-violet-700">
        <RiFacebookCircleFill size={30} />
        <RiTwitterXFill size={30} />
        <RiLinkedinBoxLine size={30} />
      </section>
    </div>
  );
};

export default Aside;
