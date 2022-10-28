import { motion } from "framer-motion"

const ScopeCard = ({ id, title, text, custom }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: { delay: custom * 0.1 },
      }}
      viewport={{ once: true }}
      className='scope-card'
    >
      <div className='card-id'>
        <span>{id}</span>
      </div>
      <div className='card-info'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-id'>{text}</p>
      </div>
    </motion.div>
  )
}

export default ScopeCard
