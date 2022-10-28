import React from 'react'

import { Block } from './Block'

import './Convertor.scss'

import container from '../../hoc/container'

function Convertor() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB')
  const [toCurrency, setToCurrency] = React.useState('USD')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(1)
  const [rates, setRates] = React.useState({})

  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then(response => response.json())
      .then(json => {
        setRates(json.rates)
        setFromPrice(parseFloat(json.rates['RUB']).toFixed(2))
      })
      .catch(err => {
        console.warn(err)
        alert('Произошла ошибка')
      })
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setToPrice(parseFloat(result).toFixed(2))
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    const price = value / rates[toCurrency]
    const result = price * rates[fromCurrency]
    setFromPrice(parseFloat(result).toFixed(2))
    setToPrice(value)
  }

  React.useEffect(() => {
    onChangeFromPrice(fromPrice)
  },[toCurrency])

  React.useEffect(() => {
    onChangeToPrice(toPrice)
  },[fromCurrency])

  return (
    <div className="Convertor">

      <h1>КОНВЕРТОР ПИФАГОРА</h1>

      <Block 
        value={fromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeValue = {onChangeFromPrice}
      />

      <Block 
        value={toPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency}
        onChangeValue = {onChangeToPrice}
      />
      
      <p align="center" style={{marginTop:"20px"}}>*информация примерная и несёт образовательный характер</p>

    </div>
  );
}

export default container(Convertor, 'center')
