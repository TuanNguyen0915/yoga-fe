import { clients } from "../constants"
import { motion } from "framer-motion"
import { titleVariants } from "../constants/variants"
const Clients = () => {
  return (
    <section className="section flexCenter my-4">
      <div className="flexCenter w-full flex-wrap gap-10">
        {clients.map((client) => (
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            key={client.id}
            className="flexCenter min-w-[120px] sm:min-w-[190px]"
          >
            <img
              src={client.logo}
              alt="logo"
              className="w-[100px] object-contain sm:w-[190px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Clients
