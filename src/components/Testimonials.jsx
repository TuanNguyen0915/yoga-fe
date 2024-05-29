import { feedbacks } from "../constants"
import FeedbackCard from "./FeedbackCard"
import { motion } from "framer-motion"
import { leftVariants, rightVariants } from "../constants/variants"
const Testimonials = () => {
  return (
    <section className="paddingY flexCenter relative flex-col" id="clients">
      <div className="blue-gradient absolute -right-1/2 bottom-0 z-0 h-[60%] w-[60%] rounded-full" />
      <div className="pink-gradient absolute -left-1/2 top-10 z-0 h-[30%] w-[60%] rounded-full" />

      <div className="flexBetween relative z-10 mb-6 w-full flex-col sm:mb-16 md:flex-row">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={rightVariants}
          className="heading2"
        >
          What People are <br className="hidden sm:block" /> saying successful
          stories
        </motion.h2>
      </div>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={leftVariants}
        className="mt-6 w-full md:mt-0"
      >
        <p className="paragraph opacity-80">
          Everything you need to accept classes and grow your health anywhere on
          the sessions.
        </p>
      </motion.div>
      <div className="feedback-container relative z-10 flex w-full flex-wrap justify-center sm:justify-start">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
