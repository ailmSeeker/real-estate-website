import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardSection = () => {
  return (
    <div>
    <div className="">
      <h2>properties</h2>
    </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.prop24.com/wkrhlrtai4yz5d3pilwxxtdcye/Crop237x198"
          title="bungalow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            three bedroom bungalow
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located at Karen Miotoni in a gated community estate is this spacious bungalow. 
            -sitting on 1/2 acre land -Easy...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </div>
  );
};

export default CardSection;
