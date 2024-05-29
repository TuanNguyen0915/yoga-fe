import { quotes } from "../assets"
import { motion } from "framer-motion"
import { descVariants, tagVariants, titleVariants } from "../constants/variants"
const FeedbackCard = ({ content, name, title, image }) => {
  return (
    <div className="feedback-card my-5 mr-0 flex max-w-[400px] flex-col justify-between rounded-xl px-10 py-12 transition-all duration-300 sm:mr-5 md:mr-10">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        <img src={quotes} className="h-[28px] w-[42px]" alt="quotes" />
      </motion.div>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={descVariants}
        className="my-10 font-poppins text-[18px] font-normal italic leading-[32px] text-white"
      >
        {content}
      </motion.p>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className="flex items-center gap-4"
      >
        <img
          src={image}
          alt="avatar"
          className="h-[48px] w-[48px] rounded-full"
        />
        <div className="font-poppins text-[20px] font-semibold leading-[32px] text-white">
          <h4>{name}</h4>
          <p className="font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default FeedbackCard
