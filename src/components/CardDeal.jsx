import { card } from "../assets"
import Button from "./Button"
import { motion } from "framer-motion"
import {
  descVariants,
  leftVariants,
  tagVariants,
  titleVariants,
} from "../constants/variants"
const CardDeal = () => {
  return (
    <section className="section">
      <div className="sectionInfo">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="heading2"
        >
          Find a better customer <br className="hidden sm:block" /> in few easy
          steps.
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={descVariants}
          className="paragraph max-w-[500px] opacity-80"
        >
          We always make our customer happy by proving as may choices as
          possible.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="flexCenter"
        >
          <Button styles="mt-10" content="Get Started" />
        </motion.div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={leftVariants}
        className="sectionImg"
      >
        <img src={card} alt="Card" className="h-[100%] w-[100%]" />
      </motion.div>
    </section>
  )
}

export default CardDeal
