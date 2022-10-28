import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const PortfolioCard = ({ external, title, text, to, custom }) => {
  return (
    <motion.div
      className='portfolio-item'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: { delay: custom * 0.1 },
      }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>

      {external ? (
        <a href={to} target='blank' className='mui-btn mui-btn--primary'>
          Перейти
        </a>
      ) : (
        <NavLink to={to} className='mui-btn mui-btn--primary'>
          Перейти
        </NavLink>
      )}
    </motion.div>
  )
}

export default PortfolioCard
