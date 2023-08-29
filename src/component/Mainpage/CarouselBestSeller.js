
import Slider from "react-slick";

function CarouselBestSeller(){

    // function SamplePrevArrow(props) {
    //     const { className, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         onClick={onClick}
    //       >❮</div> 
    //     );
    // }
      
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          ><svg style={{
                zIndex: 1,
                position: 'absolute',
                bottom: '-45%',
                left: '-60px',
                transform: 'translateY(-50%)',
                // padding: '10px'
            }} xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45" fill="none">
          <path d="M1 2L24.5611 20.9412C25.5569 21.7418 25.5569 23.2582 24.5611 24.0588L1 43" stroke="white" stroke-width="3"/>
        </svg></div> 
        );
    }

    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    return(
      <div className="bl_container">
        <h1 className="bl_slide_title">Our Best Seller</h1>
        <Slider {...settings} className="slider-multi" >
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/349227038_1836161470102594_5650869863153805497_n 1.png" alt="" />
            <h3>Euphoria Crop Blouse</h3>
            <h4>Rp. 125.000</h4>
          </div>
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/350520368_1293582501553282_1706240161763761566_n 1.png" alt="" />  
            <h3>Venus Halter Dress</h3>
            <h4>Rp. 180.000</h4>
          </div>
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/352158854_3608341479451255_1472828259758897531_n 1.png" alt="" />
            <h3>Snap Pure Blouse</h3>
            <h4>Rp. 129.000</h4>
          </div> 
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/354184225_234170616063635_8207167133769842801_n 1.png" alt="" />
            <h3>West Bootscut Denim</h3>
            <h4>Rp. 229.000</h4>
          </div> 
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/355278786_1944515739251375_2601576688677791938_n 1.png" alt="" />
            <h3>Ribbon Check Long</h3>
            <h4>Rp. 175.000</h4>
          </div> 
          <div className="bl_slide bl_slide_bestsl">
            <img src="assets/images/trending_image/356039326_816908229869602_5989506973685575536_n 1.png" alt="" />
            <h3>Shouldcut Knit</h3>
            <h4>Rp. 149.000</h4>
          </div> 
        </Slider>
      </div>
    );
    
}

export default CarouselBestSeller;