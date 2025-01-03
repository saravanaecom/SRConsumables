import React from 'react';
import { Container, Typography, Box, Divider, List, ListItem } from '@mui/material';
import { ServerURL } from '../server/serverUrl';

export default function PrivacyPolicy() {
    return (
        <>
            <Container  maxWidth="xl" sx={{px: { xs: 0, md: 3 }}}>
                <Box elevation={3} sx={{ padding: 4, pt: 1, marginTop: 1 }} align="left">
                    <Typography variant="h4" fontSize={22} fontWeight={600} gutterBottom align="left">
                        Privacy Policy
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                        Last Updated on January 01, 2024
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
        we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products.
      </Typography>
 

      <Divider sx={{ margin: '20px 0' }} />


                    <Typography variant="h6" fontSize={18} fontWeight={600}>Information We Collect</Typography>
                    <Typography variant="body1" paragraph>
                    <Typography variant="body1" paragraph>We may collect and process the following types of information:
                    </Typography>  
                    Personal Information**: When you create an account, make a purchase, or contact us, we may collect your name, email address, phone number, shipping and billing address, and payment details.<br /> 
                    Non-Personal Information**: Information about your device, IP address, browser type, and browsing behavior.<br />
                    Cookies and Tracking Information**: Details about your interactions with our website, such as pages viewed and links clicked.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h6" fontSize={18} fontWeight={600}>How We Use Your Information?</Typography>
                    <Typography variant="body1" paragraph>
                    Process your orders and transactions.<br />
                    Communicate with you regarding your purchases and provide customer support.<br />
                    Improve our website’s functionality and user experience.<br />
                    Send promotional emails and marketing materials p2musicshop@gmail.com.<br />
                    Comply with legal obligations and safeguard against fraud.<br />
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h6" fontSize={18} fontWeight={600}>Sharing of Information</Typography>
                    <Typography variant="body1" paragraph>
                    Service Providers**: Third parties like payment gateways, delivery companies, and IT services to fulfill your orders and maintain our website.<br />
                    Legal Authorities**: When required by law to comply with legal processes or protect our rights.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h6" fontSize={18} fontWeight={600}>Cookies Policy</Typography>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>Cookies are small data files that help us improve your browsing experience. We use cookies to:</Typography>
                         
                    Recognize you on future visits.<br />
                    Track website performance and analytics.<br />
                    Provide tailored product recommendations.<br />
                    You can disable cookies in your browser settings, but this may limit certain features of the website.
                    </Typography>
                    <Divider sx={{ margin: '20px 0' }} />



                    <Typography variant="h6" fontSize={18} fontWeight={600}>Data Security</Typography>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>

                         
                    We implement robust security measures to protect your data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure but this may limit certain features of the website.
                    </Typography>
                    <Divider sx={{ margin: '20px 0' }} />


                    <Typography variant="h6" fontSize={18} fontWeight={600}>Your Rights</Typography>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>As a user, you have the right to:</Typography>
                         
                    Access and review your personal data.<br />
                    Correct or update your personal details.<br />
                    Request the deletion of your information (subject to legal obligations).<br />
                    Opt-out of marketing communications.
                    </Typography>
                    <Divider sx={{ margin: '20px 0' }} />

                    <Typography variant="h6" fontSize={18} fontWeight={600}>Third-Party Links</Typography>
                    <Typography variant="body1" paragraph fontSize={16} m={0}>

                         
                    Our website may contain links to external websites. We are not responsible for their privacy practices or content.
                    </Typography>
                    <Divider sx={{ margin: '20px 0' }} />
                    {/* <List>
                        <ListItem>Provide our products, which includes updating, securing, and troubleshooting, as well as providing support.</ListItem>
                        <ListItem>It also includes sharing data when it is required to provide the service or carry out the transactions you request.</ListItem>
                        <ListItem>Improve and develop our products.</ListItem>
                        <ListItem>Personalise our products and make recommendations.</ListItem>
                        <ListItem>Advertise and market to you, which includes sending promotional communications, targeting advertising, and presenting you with relevant offers.</ListItem>
                    </List> */}

                    {/* <Divider sx={{ margin: '20px 0' }} /> */}

                    <Typography variant="h6" fontSize={18} fontWeight={600}>Changes to This Privacy Policy</Typography>
                    <Typography variant="body1" paragraph>
                    We may update this policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically.
                    </Typography>

                    <Divider sx={{ margin: '20px 0' }} />

        
                    <Typography variant="h6" fontSize={18} fontWeight={600}>Contact Us-</Typography>
                    <Typography variant="body1" paragraph>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
 <Typography variant="body1" fontWeight={600}>
  Email:  p2musicshop@gmail.com
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