import { useState } from 'react'

const App = () => {

  let average = 0
  let positive = 0
  
  const strings = {
    feedback: "give feedback",
    subtitle: "statics"
  } 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () =>{
    setGood(good + 1)
  }
    
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
  }

  const handleBadClick = () =>{
    setBad(bad + 1)
  }

  const total = good + neutral + bad

  if (total !== 0) {
    average = (good * 1 + neutral * 0 + bad * -1) / total
    positive = (good / total) * 100
  }

  return (
    <div>
      <Header feedback={strings.feedback}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Subtitle subtitle={strings.subtitle}/>
      <Statics text='Good' tag={good}/>
      <Statics text='Neutral' tag={neutral}/>
      <Statics text='Bad' tag={bad}/>
      <Total text='Total' total={total}/>
      <Average text='Average' average={average}/>
      <Positive text='Positive' positive={positive + "%"}/>

    </div>
  )
}

const Header = ({feedback}) => (
  <div>
    <h1>{feedback}</h1>
  </div>
)

const Subtitle = ({subtitle}) =>(
  <div>
    <h2>{subtitle}</h2>
  </div>
)

const Statics = ({text, tag}) =>(
  <div>
    <p>{text} = {tag}</p>
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Total = ({total, text}) => (
  <div>
    <p>{text} = {total}</p>
  </div>
)

const Average = ({average, text}) => (
  <div>
    <p>{text} = {average}</p>
  </div>
)

const Positive = ({text, positive}) => (
  <div>
    <p>{text} = {positive}</p>
  </div>
)

export default App