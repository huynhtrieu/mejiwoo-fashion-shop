
import Footer from "./Layout/Footer";
import Background from "./Mainpage/Background";
import BackgroundSaleOff from "./Mainpage/BackgroundSaleOff";
import CarouselBestSeller from "./Mainpage/CarouselBestSeller";
import CarouselReview from "./Mainpage/CarouselReview";
import OurProducts from "./Mainpage/OurProducts";
import Season from "./Mainpage/Season";
import SignUp from "./Menber/SignUp";


function MainPage(){
    return(
        <>
            <Background/>
            <Season/>
            <CarouselBestSeller/>
            <BackgroundSaleOff/>
            <OurProducts/>
            <CarouselReview/>
            <SignUp/>
        </>
    )
}

export default MainPage;