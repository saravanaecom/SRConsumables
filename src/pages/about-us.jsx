import React from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system"; // import styled

// Use the `styled` component for custom styling
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

export default function AboutUs() {
  return (
    <Container maxWidth="xl" sx={{ padding: "32px 16px" }}>
      <Box sx={{ textAlign: 'center', marginBottom: '32px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: '3rem',
            background: 'linear-gradient(to right, #3b82f6, #9333ea)',
            color: 'transparent',
            backgroundClip: 'text',
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
              transform: 'scale(1.05)',
            },
          }}
        >
          About Us
        </Typography>
        <StyledBox>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              color: '#374151',
              textAlign: 'center',
              lineHeight: '1.75',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Welcome to <strong style={{ color: '#3b82f6' }}>P2 Music Shop</strong>, your ultimate destination for high-quality musical instruments. We bring the joy of music to every home and heart. Whether you're a beginner exploring the world of melodies or a seasoned artist perfecting your craft, P2 Music Shop is here to support your musical journey.
          </Typography>
        </StyledBox>
      </Box>

      {/* Mission Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)', padding: '64px 0' }}>
        <StyledBox sx={{ maxWidth: '700px' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              color: 'transparent',
              background: 'linear-gradient(to right, #9333ea, #f472b6)',
              backgroundClip: 'text',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              color: '#374151',
              lineHeight: '1.75',
              textAlign: 'center',
            }}
          >
            At <strong style={{ color: '#9333ea' }}>P2 Music Shop</strong>, our mission is to make music accessible by providing exceptional instruments, expert advice, and outstanding service. Music inspires, connects, and transforms lives, and we are dedicated to nurturing this universal art form.
          </Typography>
        </StyledBox>
      </Box>

      {/* What We Offer Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '48px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '16px' }}>
          What We Offer
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '32px' }}>
          Explore our offerings tailored for every musician’s journey.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Wide Range of Instruments",
              description: "From classical Indian instruments like veena and mridangam to modern guitars and keyboards, we offer a diverse selection to suit every musician's needs."
            },
            {
              title: "Accessories and Essentials",
              description: "Strings, tuners, cases, stands – you name it, we have it! Our accessories are carefully selected to complement and enhance your musical experience."
            },
            {
              title: "Expert Recommendations",
              description: "Our team of experienced musicians is here to guide you in selecting the perfect instrument or accessory for your skill level and preferences."
            },
            {
              title: "Custom Orders",
              description: "Looking for something unique? We accept custom orders for specialized instruments to ensure you get exactly what you need."
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledBox sx={{
                padding: '24px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                }
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    color: '#1f2937',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1rem',
                    color: '#4b5563',
                    lineHeight: '1.5',
                  }}
                >
                  {item.description}
                </Typography>
              </StyledBox>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', background: 'linear-gradient(to right, #3b82f6, #9333ea)', padding: '48px 16px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff', fontSize: '2.5rem', marginBottom: '24px' }}>
          Ready to Start Your Musical Journey?
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: '50px', padding: '12px 32px', fontSize: '1.25rem' }}>
          Shop Now
        </Button>
      </Box>
    </Container>
  );
}
