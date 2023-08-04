import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

const CardSection = ({ id, title, price, description, handleClick, image }) => {
  return (
    <div>
      <div className="flex my-4">
        {/* <h2>properties</h2> */}
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="bungalow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className='justify-between'>
          <Button variant='contained' color='primary' size="small" onClick={() => handleClick(id)}>Buy Now</Button>
          <div size="small">{price}</div>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardSection;
