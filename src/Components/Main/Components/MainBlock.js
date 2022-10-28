import avatar from "../../../img/avatar.jpg"

const MainBlock = () => {
  return (
    <div className='main-block block container'>
      <div className='left-column'>
        <div className='photo'>
          <img src={avatar} />
        </div>
      </div>
      <div className='right-column main-right-column'>
        <div className='info'>
          <h1 className='name'>
            peter <br /> <span>GEORGIEV</span>
          </h1>
          <p className='job'>Web developer & Front-end developer</p>
        </div>
        <div className='hr' />
        <div className='contacts'>
          <div className='contact-item'>
            <h4 className='item-title'>Локация</h4>
            <p className='item-text'>Санкт-Петербург</p>
          </div>
          <div className='contact-item'>
            <h4 className='item-title'>Телефон</h4>
            <p className='item-text'>8 (996) 766-53-05</p>
          </div>
          <div className='contact-item'>
            <h4 className='item-title'>Сайт</h4>
            <a href='/' className='item-text'>
              mysite.com
            </a>
          </div>
          <div className='contact-item'>
            <h4 className='item-title'>Почта</h4>
            <p className='item-text'>petergeorgiev@yandex.ru</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlock
