import "./Form.scss"

import { NavLink, useNavigate, Route, Routes } from "react-router-dom"

import Start from "./Components/Start"
import FirstStep from "./Components/Step1"
import SecStep from "./Components/Step2"
import Result from "./Components/Result"
import { useSelector } from "react-redux"
import container from "../../hoc/container"

const Form = () => {
  const navigate = useNavigate()

  const formData = useSelector((store) => store.form)

  return (
    <div className='Form'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/first' element={<FirstStep />} />
        {formData.name ? <Route path='sec' element={<SecStep />} /> : null}
        {formData.message ? <Route path='result' element={<Result />} /> : null}
        <Route
          path='/*'
          element={
            <>
              <h2>Данный адресс недоступен</h2>
              <NavLink to='/form'>Перейти к опросу</NavLink>
            </>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default container(Form)
