import Button from "./Button"
import { features } from "../constants"
import { motion } from "framer-motion"
import { leftVariants, rightVariants } from "../constants/variants"
const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    initial="offscreen"
    whileInView={"onscreen"}
    variants={leftVariants}
    className={`flex rounded-xl p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card group`}
  >
    <div className="flexCenter h-[65px] w-[65px] rounded-full bg-dimBlue">
      <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <h4 className="text-gradient mb-1 font-poppins text-[18px] font-semibold leading-[23.4px] tracking-wide">
        {title}
      </h4>
      <p className="paragraph opacity-70 transition-all group-hover:opacity-100">
        {content}
      </p>
    </div>
  </motion.div>
)
const Business = () => {
  return (
    <section id="features" className="section">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={rightVariants}
        className="sectionInfo"
      >
        <h2 className="heading2">
          Why you should,
          <br className="hidden sm:block" /> Go To Yoga
        </h2>
        <p className="paragraph mt-5 lg:max-w-[500px]">
          Engaging in yoga offers a holistic approach to wellness, encompassing
          both physical and metal benefits. Through a series of poses,
          stretches, and muscles strength. Its meditative aspects encourage
          mindfulness, reducing stress and anxiety while promoting a sense of
          inner peace.
        </p>
        <Button styles={"mt-10"} content={"Booking Open"} />
      </motion.div>
      <div className="sectionImg flex-col">
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  )
}

export default Business
