import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import { Provider } from "react-redux"
import store from './Components/Form/store/store'

import Navbar from "./Components/Navbar/Navbar"
import Main from "./Components/Main/Main"
import TicTacToe from "./Components/TicTacToe/TicTacToe"
import Convertor from "./Components/Convertor/Convertor"
import Timer from "./Components/Timer/Timer"
import Counter from "./Components/Counter/Counter"
import Todo from "./Components/Todo/Todo"
import Form from "./Components/Form/Form"
import NotFound from "./Components/NotFound/NotFound"

function App() {
  useEffect(() => {
    const links = [
      ...document.getElementsByClassName("nav-link"),
      ...document.getElementsByClassName("navbar-brand"),
    ]
    links.map((link) => {
      link.addEventListener("click", () => {
        if (
          Array(
            ...document.getElementById("navbarNavAltMarkup").classList
          ).includes("show")
        ) {
          document.getElementsByClassName("navbar-toggler")[0].click()
        }
      })
    })
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/counter' element={<Counter />} />
          <Route exact path='/timer' element={<Timer />} />
          <Route exact path='/convertor' element={<Convertor />} />
          <Route exact path='/tic-tac-toe' element={<TicTacToe />} />
          <Route exact path='/todo' element={<Todo />} />
          <Route
            exact
            path='/form/*'
            element={
              <Provider store={store}>
                <Form />
              </Provider>
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
