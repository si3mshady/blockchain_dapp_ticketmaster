import {useState, useEffect, useContext} from 'react'
import './App.css';
import Event from './components/Event'
import starterData from './MasterTicketMasterData.json'
import Box from '@mui/material/Box';
import { ChainContext}  from './context/Context'


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
    <Box sx={{ width: '100%',
        display: 'flex',
        flexWrap: 'wrap',     
        justifyContent:'space-around'}}> 
       {      
        events.map(event => (<Event key={event.id}
        teamName={event.name}
        price={event.priceRanges[0].min}  
        teamLogo={event.images[0].url}    
        date={event.dates.start.localDate}
        id = {event.id}
        info = {event.info}
        soldOut={false}         

        />))
 
     }            
      
     </Box>
  );
}

export default App;
