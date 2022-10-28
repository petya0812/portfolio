import "./Main.scss"

import MainBlock from "./Components/MainBlock"
import IntroBlock from "./Components/IntroBlock"
import PortfolioBlock from "./Components/PortfolioBlock"
import ScopeBlock from "./Components/ScopeBlock"
import SkillsBlock from "./Components/SkillsBlock"

const Main = () => {
  return (
    <div className='Main'>
      <div className='Main-container'>
        <MainBlock />

        <div style={{ backgroundColor: "#fcfcfc" }}>
          <PortfolioBlock />
        </div>

        <ScopeBlock />

        <div style={{ backgroundColor: "#fcfcfc" }}>
          <SkillsBlock />
        </div>

        <IntroBlock />
      </div>
    </div>
  )
}

export default Main
