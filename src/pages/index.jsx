// src/pages/index.jsx
import { Container, IconButton } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Banner from "../components/banner/banner";
import BannerSlider from "../components/slider/BannerSlider";
import ImageCategorySlider from "../components/slider/ImageCategorySlider";
import OfferFastMovingProduct from "../components/slider/offerFastMovingProduct";
import ProductByIndexPage from '../components/slider/productByIndexPage';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollSection = ({ children, direction = "up" }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const translateX = useTransform(scrollYProgress, [0, 0.4], 
        direction === "left" ? [-200, 0] : 
        direction === "right" ? [200, 0] : [0, 0]
    );
    const translateY = useTransform(scrollYProgress, [0, 0.4], 
        direction === "up" ? [200, 0] : 
        direction === "down" ? [-200, 0] : [0, 0]
    );

    return (
        <motion.div
            ref={sectionRef}
            style={{
                opacity,
                scale,
                x: translateX,
                y: translateY,
                perspective: "1000px",
                marginBottom: "80px",
            }}
            transition={{
                duration: 1.2,
                ease: [0.22, 0.61, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        window.scrollTo({ top: 0, behavior: "smooth" });

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    overflow: "hidden",
                    perspective: "1000px",
                    padding: "20px 16px",
                }}
            >
                {/* Hero Section */}
                <ScrollSection direction="up">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Banner />
                    </motion.div>
                </ScrollSection>

                {/* Offer Products */}
                <ScrollSection direction="left">
                    <OfferFastMovingProduct />
                </ScrollSection>

                {/* First Product Index */}
            
                    <ProductByIndexPage />
          

                {/* Banner Slider */}
               
                    <BannerSlider />
            
                {/* Category Slider */}
          
                    <ImageCategorySlider />
           

                {/* Second Product Index */}
                {/* <ScrollSection direction="left">
                    <ProductByIndexPage />
                </ScrollSection> */}

                {/* Scroll to Top Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: 1000,
                    }}
                >
                    <IconButton
                        onClick={scrollToTop}
                        sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "primary.dark",
                                transform: "scale(1.1)",
                            },
                            width: 50,
                            height: 50,
                            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(to right, #4CAF50, #2196F3)",
                        transformOrigin: "0%",
                        scaleX,
                        zIndex: 1000,
                    }}
                />
            </Container>
        </>
    );
}
