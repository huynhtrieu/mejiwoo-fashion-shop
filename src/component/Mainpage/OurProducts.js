import { useEffect } from "react";

function OurProducts(){

  function TabsContent(){
    let tabs = document.querySelectorAll(".tabs h3");
    let tabContents = document.querySelectorAll(".tab-content div");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });
            
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            
            tabContents[index].classList.add("active");
            tabs[index].classList.add("active");
        });
    })
  }

  useEffect(() => {
    TabsContent();
  }, []);

  return (

    <div className="bl_outProducts">
      <h1>Our Products</h1>
      <div className="wrapper">
        <div className="tabs bl_outProducts_menu  bl_container">
          <h3 className="active">Top</h3>
          <h3>Bottom</h3>
          <h3>Dress</h3>
          <h3>Set</h3>
          <h3>Knit</h3>
          <h3>Outer</h3>
        </div>
        <div className="tab-content">
          <div className="active">
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
          <div>
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
          <div>
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
          <div>
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
          <div>
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
          <div>
            <ul className="bl_outProducts_content bl_container">
              <li>
                <img src="assets/images/our_products/Frame 19.png" alt="" />
                <h3>Eve Punching Floral</h3>
                <h4>Rp. 229.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 4.png" alt="" />
                <h3>Eto V Neck Yellow</h3>
                <h4>Rp. 129.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 17.png" alt="" />
                <h3>Macaroon Dry Half</h3>
                <h4>Rp. 139.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 20.png" alt="" />
                <h3>Floral Waffle Tee</h3>
                <h4>Rp. 119.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 21.png" alt="" />
                <h3>Snap Pure Blouse</h3>
                <h4>Rp. 225.000</h4>
              </li>
              <li>
                <img src="assets/images/our_products/Frame 18.png" alt="" />
                <h3>Shouldcut Knit</h3>
                <h4>Rp. 130.000</h4>
              </li>
              <button className="bl_outProducts_btn">SEE MORE<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth={2} />
                </svg></button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;