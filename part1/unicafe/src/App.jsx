import { useState } from 'react'

const App = () => {
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

  return (
    <div>
      <Header feedback={strings.feedback}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Subtitle subtitle={strings.subtitle}/>
      <Statics text='good' tag={good}/>
      <Statics text='neutral' tag={neutral}/>
      <Statics text='bad' tag={bad}/>
      
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

export default App