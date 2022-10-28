import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { setMessage } from "../store/formSlice"

const SecStep = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data) => {
    dispatch(setMessage(data.message))
    navigate("/form/result")
  }

  return (
    <div className="SecStep">
      <form className='mui-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Пройдите опрос</h1>
        <div className='mui-textfield mui-textfield--float-label'>
          <input required {...register("message",{
            required: true
          })} />
          <label>Любой текст</label>
        </div>
        <button
          type='submit'
          disabled={!isValid}
          className='mui-btn mui-btn--primary'
        >
          Дальше
        </button>
      </form>
    </div>
  )
}

export default SecStep 
