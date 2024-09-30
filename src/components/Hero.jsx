import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

/**
 * The Hero component is responsible for rendering the hero section
 * of the webpage. It shows a profile picture of Ravi Kumar and a
 * brief introduction about him.
 *
 * The component is made up of two parts: the profile picture on the
 * left and the introduction on the right. The introduction contains
 * a header with Ravi's name, a tagline, a brief description, and a
 * link to download his resume.
 *
 * The component uses Tailwind CSS to style itself. The styles are
 * defined in the tailwind.config.js file.
 *
 * @returns {JSX.Element} The Hero component.
 */

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={650}
              src={profilePic}
              alt="Ravi"
              className="border 
                    border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start
                mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Ravi Kumar
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300
                        to-stone-600 bg-clip-text text-3xl tracking-tight
                        text-transparent"
            >
              Full Stack Web Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed
                        tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
