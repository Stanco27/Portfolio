import { Button, Stack } from 'react-bootstrap';
import './choice-container.css'

const ChoiceContainer = () => {

  const handleClick = (choice: string) => {
    if(choice === "Terminal") {
      window.location.href = "/Stanco.github.io/Terminal";
    } else if (choice === "Mini") {
      window.location.href = "/Stanco.github.io/Mini";
    } else {
      window.location.href = "/Stanco.github.io/Normal"
    }
  }

  return (
    <>
    <div className="choice-container">
      <Stack className='choice-text'>
      <h3 className='choice-text'>How Would You Like to View My Portfolio?</h3>
      <div className='choice-div'>
        <Button className='choice-button' onClick={() => handleClick("Mini")}>Mini Game</Button>
        <Button className='choice-button' onClick={() => handleClick("Terminal")}>Terminal Mode</Button>
        <Button className='choice-button' onClick={() => handleClick("Normal")}>Normal</Button>
      </div>
      </Stack>
    </div>
    </>
  )
}

export default ChoiceContainer;