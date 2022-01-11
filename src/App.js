import {useState, useEffect} from 'react'
import './App.css';
import Event from './components/Event'
import starterData from './MasterTicketMasterData.json'

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    //clean starter data of undefined element which causes issues     
  const result = starterData._embedded.events.filter((event) => {
    return event.priceRanges !== undefined     
  })  
      setEvents(result)

  }, [])
 
  return (
    <div className='App'> 
     {
        events.map(event => (<Event teamName={event.name}
           price={event.priceRanges[0].min}  
          teamLogo={event.images[0].url}    
          date={event.dates.start.localDate}
          id = {event.id}
          soldOut={false}         
          />  ))
     }        
     </div>
  );
}

export default App;
