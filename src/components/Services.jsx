import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

//services data
const servicedata =[
  {
    name: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas adipisci rem animi facilis quas quam commodi vel aut, esse placeat ullam corporis tenetur veritatis.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas adipisci rem animi facilis quas quam",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  anam commodi vel aut, esse placeat ullam corporis tenetur veritatis.",
    link: "Learn more",
  },
  {
    name: "Producr Branding",
    description:
      "Lorem, ipsum dolor sit amet consectetur elit. Nihil voluptas adipisci rem animi facilis quas quam commodi vel aut, esse placeat ullam corporis tenetur veritatis lorem dsads dg.",
    link: "Learn more",
  },
];



const Services = () => {
  return (
    <section className="select sm:mt-0 mt-20" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
           className="flex-1 lg:bg-services bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am front-end Developer and passionate to create and design
              unique things.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} 
          className="flex-1">
            <div>
              {servicedata.map((service, i) => {
                return (
                <div  
                className="border-b border-white/20 h-[146px] mb-[38px] flex " key={i}>
                  <div  className="max-w-[476px] ">
                    <h2 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{service.name}</h2>
                    <p className="font-secondary leading-tight ">{service.description}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center"><BsArrowUpRight/></a>
                    <a href="#" className="text-gradient text-sm">{service.link}</a>
                  </div>
                </div>
                  );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
