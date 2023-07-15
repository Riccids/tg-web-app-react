
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../src/components/hooks/userTelegram'




function App() {
  const {onToogleButton, tg} = useTelegram();


  useEffect( () => {
     tg.ready();
  }, [])

  const onClose = () =>{
    tg.close();   
 }  
  return (
    <div className="App">
      work
      <button onClick={onToogleButton}> toogle </button>
    </div>
  );
}

export default App;
