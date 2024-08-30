import React from 'react'
import Bannerpng from '../../assets/fruits-splash.png'
import { motion } from 'framer-motion';
import { Fadeup } from '../animation/animation';


const Banners = () => {
  return (
    <section className="bg-secondar/15">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: false }}
            src={Bannerpng}
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={Fadeup(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={Fadeup(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
              veritatis cumque sunt, quas magni blanditiis similique nesciunt
              deleniti nihil quod eius fugiat ad doloribus magnam reiciendis
              laudantium doloremque ea.
            </motion.p>
            <motion.p
              variants={Fadeup(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quae illo ullam omnis facere at.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={Fadeup(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners
