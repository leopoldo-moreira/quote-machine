import './App.css';
import Quotes from './components/Quotes';
import { useState, useEffect } from 'react' 

function App() {

  const [quote, setQuote] = useState()
  const [newQuote, setNewQuote] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [mainColor, setMainColor] = useState(0)
  const cor = Math.floor(Math.random() * 5)

  useEffect(()=>{  

    setOpacity(0)
    fetch("https://api.api-ninjas.com/v1/quotes?category=success",{
    method: "GET",
    headers: {'X-Api-Key': 'iB1kGEe7Wg31uDHCkug0tg==PDUfnYxVEtuIRweq'}
  }).then((resp) => resp.json())
  .then((data) => {    
    setQuote(data)
  })
  .catch((err) => console.log(err))
  .finally(() => {
    // Define a opacidade de volta para 1 após a resposta da API e um atraso de 1 segundo
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  });

  return () => clearTimeout();
  }, [newQuote]);

  useEffect(()=>{
    fetch(`https://www.colr.org/json/tag/homeworkpenta?query&timestamp=${new Date().getTime()}`)
    .then((resp) => resp.json())
    .then((data) => {
      setMainColor(data.schemes[0].colors[cor])      
    })
    .catch((err) => console.log(err))
    // eslint-disable-next-line
  }, [newQuote]) 

  if (mainColor){
    document.body.style.backgroundColor = "#" + mainColor;
  }   

    const changeQuote = () => {setNewQuote(newQuote + 1)} 

    //29 letras por linha  

  return (
    <div className="App">      
      
     <Quotes
      color={mainColor ? "#" + mainColor : '#472E32'}
      text={quote ? quote[0].quote : 'carregando...' }
      author={quote ? quote[0].author : 'carregando...' }
      funcNewQuote={changeQuote}
      changeOpacity={opacity}          
     />
     
     <p className='author'>by Leopoldo Moreira</p>
    </div>
  );
}

export default App;
