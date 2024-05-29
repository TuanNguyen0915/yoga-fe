import { useRef } from "react"
import { apple, bill, google } from "../assets"
import { motion, useScroll, useTransform } from "framer-motion"
import { descVariants, tagVariants, titleVariants } from "../constants/variants"
const Billing = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <section className="sectionReverse" id="product">
      <motion.div ref={ref} style={{ scale }} className="sectionImgReverse">
        <img
          src={bill}
          alt="billing"
          className="relative z-20 h-[100%] w-[100%]"
        />
        {/* GRADIENT */}
        <div className="white-gradient absolute -left-1/2 top-0 z-10 h-[50%] w-[50%] rounded-full" />
        <div className="pink-gradient absolute -left-1/2 bottom-0 z-0 h-[50%] w-[50%] rounded-full"></div>
      </motion.div>
      <div className="sectionInfo relative">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="heading2"
        >
          How Yoga can <br className="hidden sm:block" /> change your life?
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={descVariants}
          className="paragraph max-w-[500px] opacity-80"
        >
          As you pour the first glass of your favorite Chianti or Chardonnay and
          settle into an intimate Friday evening.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mt-6 flex flex-wrap gap-10 sm:mt-10"
        >
          <img
            src={apple}
            alt="apple"
            className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google"
            className="h-[43px] w-[144px] cursor-pointer object-contain"
          />
          <div className="white-gradient absolute right-0 top-0 z-10 h-[50%] w-[50%] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Billing
