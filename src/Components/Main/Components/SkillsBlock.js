import SkillCard from "./SkillCard"

const SkillsBlock = () => {
  return (
    <div>
      <div className='block skills-block container'>
        <div className='left-column'>
          <h2>УМЕНИЯ И НАВЫКИ</h2>
          <p>Всегда улучшаются</p>
        </div> 
        <div className='right-column'>
          <SkillCard custom={1} progress={90} name='REACT' />
          <SkillCard custom={2} progress={80} name='SCSS' />
          <SkillCard custom={3} progress={75} name='GIT' />
          <SkillCard custom={4} progress={95} name='JS' />
          <SkillCard custom={5} progress={95} name='SOFT-SKILLS' />
          <SkillCard custom={6} progress={75} name='PYTHON' />
        </div>
      </div>
    </div>
  )
}
export default SkillsBlock
