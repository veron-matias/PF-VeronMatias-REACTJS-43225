import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./CardProduct.css";
const CardProduct =({props})=> {
return (    
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="100%"
                image={props.img}
                alt="joystick"
            />
                <CardContent>
                <div className="ColorCarta">
                    <Typography gutterBottom variant="h5" component="div">
                    USD {props.price}     
                    </Typography>
                </div>      
                    <Typography variant="body2" color="text.secondary">
                    <strong>{props.name}</strong>
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    
);
}

export default CardProduct;