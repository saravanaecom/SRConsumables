import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ImagePathRoutes } from '../../routes/ImagePathRoutes';
import { ServerURL } from '../../server/serverUrl';

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(product.Price);

  const handleIncrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      if (newQuantity > 1) {
        setTotalPrice(prevPrice => prevPrice + product.Price);
      }
      return newQuantity;
    });
  };
  
  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        setTotalPrice(prevPrice => prevPrice - product.Price);
      }
      return prevQuantity > 0 ? prevQuantity - 1 : 0;
    });
  };

  return (
    <Card 
      id={product.Productid} 
      sx={{ 
        width: { xs: 180, sm: 240, md: 280 }, 
        height: { xs: 340, sm: 400, md: 320 },
        margin: '10px auto', 
        textAlign: "left", 
        border: '1px solid #e8e8e8',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
        }        
      }}
    >
      <Box sx={{ position: 'relative', height: { xs: '50%', sm: '55%', md: '30%' } }}>
        <CardMedia
          component="img"
          image={ImagePathRoutes.ProductImagePath + product.Img0}
          alt={product.Productid}
          className="card-media" 
          sx={{
            transition: 'all 0.3s ease-in-out', 
            transform: 'scale(1)',
            width: '100%',
            height: '100%', 
            padding: { xs: '10px', sm: '12px', md: '5px' },
            objectFit: 'contain', 
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            backgroundColor: '#fff2e2',
            color: '#d26e4b',
            padding: '2px 5px',
            borderRadius: '3px',
            border: '1px solid #90784159',
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
          }}
        >
          <Typography component={"span"} 
          sx={{
            display: 'inline-block',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}></Typography>
          {Math.round(product.Offer)}% OFF
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            color: product.isFavorite ? '#3BB77E' : '#FFF',
          }}
        >
          {product.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon size="small" sx={{color: "#ee4372", fontSize: '18px'}} />}
        </Box>
      </Box>
      <CardContent sx={{ 
        height: { xs: '50%', sm: '45%', md: '40%' }, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        padding: '16px',
        backgroundColor: '#ffffff'
      }}>
        <Box sx={{ flex: '1 0 auto' }}>
          <Typography 
            variant="body2" 
            component={"p"}
            sx={{
              fontSize: '13px',
              fontWeight: '600',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              lineHeight: '1.4',
              fontFamily: 'inherit',
              minHeight: '36px',
              color: '#253D4E',
              marginBottom: '8px', 
            }}
          >
            {product.Description}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontFamily: 'inherit' }}
          >
            {product.quantity}
          </Typography>       
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Typography 
            variant="body2" 
            sx={{
              color: '#253D4E', 
              fontSize: '14px', 
              lineHeight: '24px',
              fontFamily: 'inherit',
            }}
          >
            {product.MultiplePriceEnable === 0 ? product.UnitType : 
            <>Multiple price</>
            }
          </Typography>          
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <Typography 
            variant="body2" 
            sx={{
              color: '#3BB77E', 
              fontSize: '16px', 
              lineHeight: '24px',
              fontFamily: 'inherit',
              fontWeight: '600',
            }}
          >
            {totalPrice.toLocaleString('en-IN', { style: 'currency', currency: ServerURL.CURRENCY, minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
          {product.MRP && (
            <Typography 
              variant="body2" 
              sx={{ 
                textDecoration: 'line-through', 
                fontSize: '13px',
                fontWeight: 400,
                color: '#7E7E7E',
                fontFamily: 'inherit',
                marginLeft: '8px',
              }}
            >
              {product.MRP.toLocaleString('en-IN', { style: 'currency', currency: ServerURL.CURRENCY, minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          )}           
        </Box>
        <Button 
        variant="outlined"
          sx={{ 
            width: "100%",
            display: quantity !== 0 ? 'flex' : 'none', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: '12px',             
            border: '1px solid #3BB77E', 
            fontFamily: 'inherit',
            borderRadius: '8px',
            padding: { xs: '8px 0px', sm: '8px 0px', md: '8px 0px' },
            backgroundColor: '#f6fffa',
            '&:hover':{
              background: '#edfff5',
              border: '1px solid #3BB77E',
              color: '#3BB77E'
            } 
          }}
        >
          <Typography 
            variant="body2" 
            onClick={handleDecrement} 
            disabled={quantity === 0}
            sx={{    
              width: '25%',          
              color: '#3BB77E', 
              fontFamily: 'inherit',
              fontWeight: '600',
              fontSize: '18px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
          >
            -
          </Typography>
          <Typography 
            variant="body2"
            sx={{ 
              width: '50%',     
              color: '#3BB77E',
              fontFamily: 'inherit',
            }}
          >
            {quantity}
          </Typography>
          <Typography 
            variant="body2" 
            onClick={handleIncrement} 
            sx={{ 
              width: '25%',     
              color: '#3BB77E',
              fontFamily: 'inherit',
            }}
          >
            +
          </Typography>
        </Button>
        {product.InStock !== 0 ?
        <Button
        variant="outlined"
        sx={{ 
          display: quantity !== 0 ? 'none' : 'block', 
          marginTop: '10px', 
          width: '100%', 
          textTransform: 'none', 
          fontFamily: 'inherit',  
          border: '1px solid #3BB77E', 
          backgroundColor: '#3bb77e1c',
          color: '#3BB77E',
          '&:hover':{
            background: 'none',
            border: '1px solid #3BB77E',
            color: '#3BB77E'
          } 
        }}
        id={product.Id}
        onClick={handleIncrement} 
      >
        Add to Cart
      </Button>
        : 
        <Button
        variant="outlined"
        sx={{ 
          marginTop: '10px', 
          width: '100%', 
          textTransform: 'none', 
          fontFamily: 'inherit',  
          border: '1px solid #dc3545', 
          backgroundColor: '#dc3545',
          color: '#FFF',          
        }}
        id={product.Id}
      >
        Out of Stock
      </Button>
        }
        
      </CardContent>
    </Card>
  );
};

export default CartProductCard;
