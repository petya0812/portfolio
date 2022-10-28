import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setName, setLastname } from "../store/formSlice"

const FirstStep = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data) => {
    dispatch(setName(data.name))
    dispatch(setLastname(data.lastname))
    navigate('/form/sec')
  }

  return (
    <div className="FirstStep">
      <form className='mui-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Пройтидте опрос</h1>
        <div className='mui-textfield mui-textfield--float-label'>
          <input
            required
            {...register("name", {
              required: true,
            })}
          />
          <label>Имя</label>

        </div>
        <div className='mui-textfield mui-textfield--float-label'>
          <input
            required
            {...register("lastname", {
              required: true,
            })}
          />
          <label>Фамилия</label>

        </div>
        <button
          type='submit'
          className='mui-btn mui-btn--primary'
          disabled={!isValid}
        >
          Далее
        </button>
      </form>
    </div>
  )
} 

export default FirstStep