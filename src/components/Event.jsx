

const Event = ({id,teamName,teamLogo,price,date,soldOut}) => {
    return (<ul>
     
      <li>{teamName}</li>
      <li>{teamLogo}</li>
      <li>{price}</li>
      <li>{date}</li>
      <li>{id}</li>
  
    </ul>)
  }



export default Event;