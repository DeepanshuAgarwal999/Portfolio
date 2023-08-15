import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div  variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
           className="flex-1  flex justify-start items-center ">
            <div>
              <div>
                <h4 className="text-2xl uppercase text-accent font-medium mb-2 tracking-wide">
                  Get in touch
                </h4>
                <h2 className="text-5xl lg:text-8xl leading-none mb-12">
                  Let's work <br /> together
                </h2>
              </div>
            </div>
            </motion.div>
            <form 
             className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
              <input
                type="text"
                className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
                placeholder="Your email"
              />
              <input
                type="text"
                className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all"
                placeholder="Your email"
              />
              <textarea  className="bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12" placeholder="your message" 
            ></textarea>
            <motion.button variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
             className="btn btn-lg">send message</motion.button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
