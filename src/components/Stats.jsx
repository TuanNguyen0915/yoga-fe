import { stats } from "../constants"
import {motion} from 'framer-motion'
import {titleVariants} from '../constants/variants'
const Stats = () => {
  return (
    <section className="flexCenter flex-wrap sm:mb-20 w-full gap-10">
      {stats.map((stat) => (
        <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
          key={stat.id}
          className="flexCenter flex-1 gap-4"
        >
          <h4 className=" xs:tet-[48px] xs:leading-[54px] font-poppins text-[40px] font-bold leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-semibold xs:text-[21px] xs:leading-[27px] text-gradient font-poppins text-[16px] uppercase leading-[22px]">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </section>
  )
}

export default Stats
