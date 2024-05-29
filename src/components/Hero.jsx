import { discount, women } from "../assets"
import GetStarted from "./GetStarted"
import { motion } from "framer-motion"
import { leftVariants, rightVariants, titleVariants } from "../constants/variants"
const Hero = () => {
  return (
    <section id="home" className={`paddingY flex flex-col md:flex-row`}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={rightVariants}
        className="flex w-full flex-1 flex-col px-6 sm:px-16 xl:px-0"
      >
        <div className="bg-discount-gradient mb-2 flex items-center gap-2 rounded-lg px-4 py-[6px]">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className="paragraph">
            <span className="text-white">25%</span> Discount for{" "}
            <span className="text-white">Explore</span> the Fitness
          </p>
        </div>
        <div className="flexBetween w-full">
          <h1 className="ss:text-[72px] ss:leading-[100px] flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white">
            Effective <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Yoga</span>
          </h1>
          <div className="ss:flex mr-0 hidden md:translate-x-[100px]">
            <GetStarted />
          </div>
        </div>
        <h1 className="ss:text-[68px] ss:leading-[100px] w-full font-poppins text-[52px] font-semibold leading-[75px] text-white">
          Shape your Body.
        </h1>
        <p className="paragraph mt-5 max-w-[500px]">
          Engaging in yoga offers a holistic approach to wellness, encompassing
          both physical and metal benefits. Through a series of poses,
          stretches, and muscles strength.
        </p>
      </motion.div>
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={leftVariants}
      className="flexCenter relative my-10 flex-1 md:my-0">
        <img
          src={women}
          alt="Yoga women"
          className="relative z-10 h-full w-full"
        />
        {/* BLUR BACKGROUND */}
        <div className="pink-gradient absolute top-0 h-[35%] w-[40%]" />
        <div className="white-gradient absolute bottom-40 h-[80%] w-[80%] rounded-full" />
        <div className="blue-gradient absolute bottom-20 right-20 h-[50%] w-[50%]" />
      </motion.div>
      <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className="flexCenter ss:hidden w-full">
        <GetStarted />
      </motion.div>
    </section>
  )
}

export default Hero
