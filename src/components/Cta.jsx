import Button from "./Button"
import { motion } from "framer-motion"
import { descVariants } from "../constants/variants"
const Cta = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView={"onscreen"}
      variants={descVariants}
      className="section flexCenter marginY padding bg-black-gradient-2 box-shadow flex-col rounded-xl sm:flex-row"
    >
      <div className="flexCol flex-1 gap-5">
        <h2 className="heading2">Prepare Yourself & Let&#39;s Explore</h2>
        <p className="paragraph max-w-[500px] opacity-80">
          The beauty of the world, we have many special offer specially for you.
        </p>
      </div>
      <div className="flexCenter ">
        <Button
          styles={"ml-0 mt-10 sm:ml-10 sm:mt-0"}
          content={"Booking Open"}
        />
      </div>
    </motion.section>
  )
}

export default Cta
