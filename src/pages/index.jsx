import BannerSlider from "../components/slider/BannerSlider";
import ImageCategorySlider from "../components/slider/ImageCategorySlider";
import OfferFastMovingProduct from "../components/slider/offerFastMovingProduct";
import ProductByIndexPage from '../components/slider/productByIndexPage';
import TopOfferShow from '../components/TopOfferShow'
import { Container } from '@mui/material';

export default function HomePage() {
    return (
        <>
            <Container maxWidth="xl">
                <BannerSlider /> 
                <TopOfferShow/>   
                <OfferFastMovingProduct/>            
                <ImageCategorySlider />
                <ProductByIndexPage/>
            </Container>
        </>
    )
};
