import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import { motion } from "framer-motion"
import { titleVariants } from "../constants/variants"
const Footer = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className="section paddingY flexCenter flex-col"
    >
      <div className="mb-8 flex w-full flex-col max-md:items-center max-md:justify-center md:flex-row">
        <div className="flexCol mr-10  flex-[1] gap-4">
          <img
            src={logo}
            alt="logo"
            className="h-[62px] w-[265px] object-contain"
          />
          <p className="paragraph max-w-[350px] opacity-80">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[2] flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              className="font-poppins text-[18px] font-medium leading-[27px] text-white"
              key={footerLink.title}
            >
              <h4 className="capitalize">{footerLink.title}</h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer text-[16px] leading-[24px] text-dimWhite opacity-60 transition-all hover:opacity-100"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4">
        <p className="font-poppins text-[18px] font-normal leading-[27px] text-white">
          Copyright © 2024 TuanNguyen. All Rights Reserved.{" "}
        </p>
        <div className="flexCenter gap-4">
          {socialMedia.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              className="transition-all duration-300 hover:scale-125"
            >
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="h-[21px] w-[21px] cursor-pointer object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Footer
