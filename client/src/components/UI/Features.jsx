import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const Features = () => {
  return (
    <div className="px-24 py-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
   
   <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary opacity-75 sm:text-4xl md:mx-auto">
    Why use cheretaGate?
   </h2>
   <p className="text-base text-body-color md:text-lg">
 CheretaGate aims to level the playing field so that businesses of any size can have easy and affordable access to various contracting opportunities.
   </p>
 </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        <Card
          title="Coverage"
          subtitle="We have comprehensive and reliable database of tender opportunities updated on a daily basis from all sectors around the country."
          href="#"
          Icon={FiCreditCard}
        />
        <Card title="Cost Effective" 
        subtitle="subscription fees include access to unlimited searching, downloading available documents or tender alerts at no hidden cost."
 href="#" Icon={FiCreditCard} />
        <Card title="Customer Support" 
        subtitle="You can contact our customer care team via email, phone call or on our social media platforms to get assistance on tender/project, existing membership or any other queries/error faced by you."
 href="#" Icon={FiCreditCard} />
        <Card
          title="Customized Services"
          subtitle=" We customize email, SMS and Telegram alerts for our customers based on preferred categories and services to ensure that members only receive relevant information for their business."
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-8 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Features;