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

  const renderStatics = () => {
    if (total === 0){
      return <p>No feedback given</p>
    }
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine  text='Good' tag={good}/>
            <StatisticLine  text='Neutral' tag={neutral}/>
            <StatisticLine  text='Bad' tag={bad}/>
            <StatisticLine  text='Total' tag={total}/>
            <StatisticLine  text='Average' tag={average}/>
            <StatisticLine  text='Positive' tag={positive + "%"}/>
          </tbody>
        </table>
          
        
      </div>
    )
  }
  return (
    <div>
      <Header feedback={strings.feedback}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Subtitle subtitle={strings.subtitle}/>
      {renderStatics()}
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

const StatisticLine  = ({text, tag}) =>(
  
  <tr>
    <td>{text}</td>  
    <td>{tag}</td>
  </tr>

)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



export default App