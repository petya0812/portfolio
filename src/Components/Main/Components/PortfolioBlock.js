import PortfolioCard from "./PortfolioCard"

const projects = [
  {
    external: true,
    title: "Интернет магазин",
    text: "Магазин товаров с корзиной и страницами товров",
    to: "https:\\\\shop-28520.web.app",
  },
  {
    external: false,
    title: "Форма-опросник",
    text: "Прохождение многостраничных форм",
    to: "/form",
  },
  {
    external: false,
    title: "Конвертор",
    text: "Перевод денег на основе актуального курса по выбранным валютам",
    to: "/convertor",
  },
  {
    external: false,
    title: "X-O",
    text: "Сыграть в крестики нолики на счёт в индивидуальной сессии",
    to: "/tic-tac-toe",
  },
  {
    external: false,
    title: "Задачник",
    text: "Добавить и удалить задачи, отметить выполненные",
    to: "/todo",
  },
  {
    external: false,
    title: "Таймер",
    text: "Встраиваемый виджет таймер. Может подойти для разнообразных задач",
    to: "/timer",
  },
  {
    external: false,
    title: "Счётчик",
    text: "Виджет счётчик. Может использоваться в интернет-магазинах",
    to: "/counter",
  },
]

const PortfolioBlock = () => {
  return (
    <div className='block portfolio-block container'>
      <div className='left-column'>
        <h2>ПОРТФОЛИО</h2>
        <p>Всегда пополняется</p>
      </div>

      <div className='right-column '>
        {projects.map((project, i) => (
          <PortfolioCard
            external={project.external}
            title={project.title}
            text={project.text}
            to={project.to}
            custom={i}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioBlock
