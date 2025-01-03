import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { ServerURL } from '../server/serverUrl';

export default function RefundAndCancellation() {
    return (
        <>
            <Container  maxWidth="xl" sx={{px: { xs: 0, md: 3 }}}>
                <Box elevation={3} sx={{ padding: 4, pt: 1, marginTop: 1 }} align="left">
                    <Typography variant="h4" fontSize={22} fontWeight={600} gutterBottom align="left">
                        Refund & Return Policy
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    Last Updated on December 12, 2024
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h4" fontWeight={700} gutterBottom>
        Welcome to <span style={{ color: "#1976d2" }}>P2 Music Shop</span>!
      </Typography>
      <Typography variant="body1" fontSize={18} lineHeight={1.6}>
        By accessing or using our website at{" "}
        <a href="https://www.p2musicshop.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: "none" }}>
          www.p2musicshop.com
        </a>
        we strive to ensure your satisfaction with our products. However, if you need to cancel an order or request a refund, please review our policy below:
      </Typography>

    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h6" fontSize={18} fontWeight={600}> Order Cancellation</Typography>
                    <Typography variant="body1" paragraph>
                    **Before Shipping**: You can cancel your order before it is shipped by contacting us at **support@p2musicshop.com** or calling **+919787787796**. A full refund will be processed to your original payment method.<br /> 
                    **After Shipping**: Orders cannot be canceled once they have been shipped. You may initiate a return once the product is delivered.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />         

                        <Typography variant="h6" fontSize={18} fontWeight={600}>Return Eligibility</Typography>
                    <Typography variant="body1" paragraph>
                    The item must be unused, in its original packaging, and in the same condition as when you received it.<br /> 
                    Proof of purchase (order confirmation or invoice) must be provided.<br />
                    Returns must be initiated within  3 days  of receiving the item.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />       

                        <Typography variant="h6" fontSize={18} fontWeight={600}>Refund Process</Typography>
                    <Typography variant="body1" paragraph>
                    Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.<br /> 
                    Approved refunds will be processed within 7-10 business days to your original payment method.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} /> 

                        <Typography variant="h6" fontSize={18} fontWeight={600}>Non-Returnable Items</Typography>
                    <Typography variant="body1" paragraph>
                    <Typography variant="body1" paragraph> The following items are not eligible for returns: </Typography>
                    Digital or downloadable products.<br /> 
                    Items marked as "Final Sale.<br /> 
                    Products damaged due to improper handling or use.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} /> 

                        <Typography variant="h6" fontSize={18} fontWeight={600}> Refund Process</Typography>
                    <Typography variant="body1" paragraph>
                    Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.<br /> 
                    Approved refunds will be processed within 7-10 business days to your original payment method.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} /> 

                        <Typography variant="h6" fontSize={18} fontWeight={600}>Shipping Costs</Typography>
                    <Typography variant="body1" paragraph>
                    If the return is due to a defective or incorrect product, we will cover the return shipping cost.<br /> 
                    For other returns, the customer is responsible for return shipping fees.

                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} /> 

                        <Typography variant="h6" fontSize={18} fontWeight={600}> Damaged or Defective Items</Typography>
                    <Typography variant="body1" paragraph>
                    <Typography variant="body1" paragraph>If you receive a damaged or defective item:</Typography>
                    Contact us within  3 days of receiving the item at p2musicshop@gmail.com.com or **+919787787796** with photos or videos of the damage.<br /> 
                    We will arrange for a replacement or refund after verification.

                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} /> 

                        <Typography variant="h6" fontSize={18} fontWeight={600}>Exchange Policy</Typography>
                    <Typography variant="body1" paragraph>
                    We currently do not offer direct exchanges. If you wish to exchange an item, please return it for a refund and place a new order.<br /> 
                 
                    </Typography>
    
    
                    <Divider sx={{ margin: '20px 0' }} /> 

                    <Typography variant="h6" fontSize={18} fontWeight={600}>In case of any complaints call us at :-</Typography>
                    <Typography variant="body1" paragraph>
        
 <Typography variant="body1" fontWeight={600}>
  Email: p2musicshop@gmail.com
</Typography>


<Typography variant="body1" fontWeight={600}>
  Phone: +919787787796
</Typography>


{/* <Typography variant="body1" fontWeight={600}>
  Address: 13, Ponmeni Narayanan Street, Pethaniapuram 2, Aarapalayam, SS Colony, Madurai-625016
</Typography> */}
                    </Typography>
                </Box>
            </Container>
        </>
    )
};