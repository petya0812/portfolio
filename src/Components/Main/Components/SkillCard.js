import { motion } from "framer-motion"

const SkillCard = ({ progress, name, custom }) => {
  return (
    <div className='skill-card'>
      <div className='skill-title'>
        <span>{`${progress}%`}</span> {name}
      </div>
      <div
        className='progress'
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 1px 1px #aaa",
        }}
      >
        <motion.div
          initial={{
            x:-150,
            opacity: 0,
          }}
          whileInView={{
            x:0,
            opacity: 1,
            transition: { duration: custom * 0.25 },
          }}
          viewport={{ once: true }}
          className='progress-bar'
          role='progressbar'
          style={{ width: `${progress}%`, backgroundColor: "#f9ba0c" }}
          aria-valuenow={`${progress}`}
          aria-valuemin='0'
          aria-valuemax='100'
        ></motion.div>
      </div>
    </div>
  )
}
export default SkillCard
