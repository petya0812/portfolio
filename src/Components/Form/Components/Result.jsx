import React from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"

const Result = () => {
  const data = useSelector((store) => store.form)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/form")
  }

  return (
    <div className='Result'>
      <h1> Проверьте ваши данные</h1>
      <div className='panel'>
        <h3>Имя</h3>
        <h3>{data.name}</h3>
      </div>
      <div className='panel'>
        <h3>Фамилия</h3>
        <h3>{data.lastname}</h3>
      </div>
      <div className='panel'>
        <h3>Ваш текст</h3>
        <h3>{data.message}</h3>
      </div>

      <div className='buttons'>
        <button
          type='button'
          className='mui-btn mui-btn--primary'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Отправить
        </button>
        <NavLink to='/form/first' className='mui-btn mui-btn--danger'>
          Пройти ещё раз
        </NavLink>
      </div>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3 className='modal-title' id='exampleModalLabel'>
                Эмуляция отправки формы
              </h3>
            </div>
            <div className='modal-body'>
              Ваши данные не будут никуда отправленны.
            </div>
            <div className='modal-footer'>
              <button
                onClick={() => handleClick()}
                type='button'
                className='mui-btn mui-btn--primary'
                data-dismiss='modal'
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
