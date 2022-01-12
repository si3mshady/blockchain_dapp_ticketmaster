import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'

const Event = ({id,teamName,teamLogo, price,date,soldOut}) => {
    return (
        <div style={{margin: "10px", height: "100%", boxShadow: "10px 5px 5px gray"}}>
     
        <Card  sx={{ height:350, width: "200px" }}>
                <CardMedia
                    
                    component="img"                 
                    image={teamLogo}
                    alt="teamLogo"
                />
                <CardContent style={{lineHeight: '20Hpx'}}>
                    <Typography style={{display: "block", fontFamily: 'Permanent Marker'}} gutterBottom variant="p" component="div">
                    {teamName}
                    </Typography>

                    <Typography variant="p" color="text.secondary">
                    {date}
                    </Typography>

                    <Typography variant="p"  style={{display: "block", fontFamily: 'Permanent Marker'}}  color="text.secondary">
                    ${price}
                    </Typography>     

                    <Typography variant="p"  style={{display: "block", fontFamily: 'Permanent Marker'}}  color="text.secondary">
                    ${id}
                    </Typography>     

                    
                    

                </CardContent>
                <CardActions>
                    <Button style={{display: "block", fontFamily: 'Permanent Marker'}} variant="outlined"  size="small">BUY</Button>        
                </CardActions>
   
    </Card>

    </div>    )
  }


export default Event;


// TODO need to create a function that will receive props for button and send off Smart contract 