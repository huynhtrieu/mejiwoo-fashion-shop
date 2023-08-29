import { Link } from "react-router-dom";

function Footer(){

    return(
      <div>
        <footer>
          <div className="bl_container">
            <div className="bl_footer">
              <ul className="footer_logo">
                <li><Link to='/'><h2>MEJIWOO</h2></Link></li>
                <li><h3>미지우</h3></li>
              </ul>
              <div className="footer_aboutUS">
                <h3 className="footer_title">About Us</h3>
                <ul className="footer_list">
                  <li><h3>News</h3></li>
                  <li><h3>Official Store</h3></li>
                  <li><h3>Company</h3></li>
                  <li><h3>Careers</h3></li>
                </ul>
              </div>
              <div className="footer_helps">
                <h3 className="footer_title">Get Help</h3>
                <ul className="footer_list">
                  <li><h3>FAQ</h3></li>
                  <li><h3>Shipping</h3></li>
                  <li><h3>Payment</h3></li>
                  <li><h3>Returns</h3></li>
                  <li><h3>Contact Us</h3></li>
                </ul>
              </div>
              <div className="footer_follow">
                <h3 className="footer_title">Follow Us</h3>
                <ul className="footer_list">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_509_229)">
                        <path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47711 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9498 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z" fill="#1877F2" />
                        <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12422C11.5625 7.33328 11.9499 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.95439 19.9595 9.4768 20.0001 10 20C10.5232 20.0002 11.0456 19.9595 11.5625 19.8785V12.8906H13.8926Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_509_229">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_509_37)">
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_radial_509_37)" />
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint1_radial_509_37)" />
                        <path d="M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z" fill="white" />
                      </g>
                      <defs>
                        <radialGradient id="paint0_radial_509_37" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)">
                          <stop stopColor="#FFDD55" />
                          <stop offset="0.1" stopColor="#FFDD55" />
                          <stop offset="0.5" stopColor="#FF543E" />
                          <stop offset={1} stopColor="#C837AB" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_509_37" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)">
                          <stop stopColor="#3771C8" />
                          <stop offset="0.128" stopColor="#3771C8" />
                          <stop offset={1} stopColor="#6600FF" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clip0_509_37">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path d="M17.9525 5.92014C17.9647 6.09655 17.9647 6.2728 17.9647 6.45077C17.9647 11.8726 13.837 18.1258 6.28969 18.1258V18.1226C4.06001 18.1258 1.87655 17.4871 0 16.283C0.324219 16.322 0.65 16.3416 0.976562 16.3423C2.82455 16.3438 4.61938 15.724 6.07266 14.5825C5.2164 14.5663 4.3866 14.283 3.69929 13.7721C3.01197 13.2611 2.50149 12.5482 2.23922 11.733C2.85438 11.8517 3.48812 11.8272 4.09188 11.6622C2.1775 11.2755 0.800313 9.59358 0.800313 7.6403V7.58827C1.37099 7.90619 2.00969 8.08233 2.66266 8.10186C0.859375 6.89686 0.303906 4.49827 1.39266 2.62311C2.4228 3.89072 3.70806 4.92745 5.16497 5.66597C6.62188 6.40449 8.21785 6.82829 9.84922 6.90983C9.68661 6.20964 9.71068 5.47903 9.91901 4.79105C10.1274 4.10308 10.5127 3.48186 11.0364 2.98952C12.6891 1.43593 15.2883 1.51561 16.8417 3.16749C17.7607 2.98604 18.6419 2.64912 19.4475 2.17124C19.1412 3.12135 18.5002 3.92786 17.6437 4.44077C18.4571 4.34487 19.2515 4.12706 20 3.79468C19.4493 4.6193 18.756 5.33907 17.9525 5.92014Z" fill="#1D9BF0" />
                    </svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 21 15" fill="none">
                      <g clipPath="url(#clip0_509_242)">
                        <path d="M20.5362 2.33958C20.4158 1.88738 20.1808 1.47512 19.8547 1.14386C19.5287 0.812593 19.1228 0.573884 18.6777 0.4515C17.0481 0 10.4894 0 10.4894 0C10.4894 0 3.9303 0.0136666 2.30066 0.465167C1.85552 0.587558 1.44971 0.82628 1.12363 1.15756C0.79756 1.48884 0.562604 1.90111 0.442164 2.35333C-0.0507616 5.29483 -0.241976 9.777 0.455699 12.6008C0.576152 13.053 0.811113 13.4653 1.13719 13.7966C1.46326 14.1278 1.86907 14.3665 2.3142 14.4889C3.94383 14.9404 10.5027 14.9404 10.5027 14.9404C10.5027 14.9404 17.0615 14.9404 18.6911 14.4889C19.1362 14.3665 19.5421 14.1278 19.8681 13.7966C20.1942 13.4653 20.4292 13.053 20.5497 12.6008C21.0696 9.65517 21.2298 5.17575 20.5362 2.33958Z" fill="#FF0000" />
                        <path d="M8.40172 10.6716L13.8427 7.47005L8.40172 4.26855V10.6716Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_509_242">
                          <rect width={21} height={15} fill="white" />
                        </clipPath>
                      </defs>
                    </svg></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_list_policy">
            <ul>
              <li><h3>Guide</h3></li>
              <li><h3>Terms &amp; Conditions</h3></li>
              <li><h3>Privacy Policy</h3></li>
            </ul>
          </div>
        </footer>
        <div className="footer_license">
          <h3><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path d="M11.88 9.14C13.16 9.2 13.49 10.29 13.51 10.8H15.3C15.22 8.82 13.81 7.61 11.85 7.61C9.64 7.61 8 9 8 12.14C8 14.08 8.93 16.38 11.84 16.38C14.06 16.38 15.25 14.73 15.28 13.43H13.49C13.46 14.02 13.04 14.81 11.86 14.87C10.55 14.83 10 13.81 10 12.14C10 9.25 11.28 9.16 11.88 9.14ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
            </svg>2023 MEJIWOO. All Rights Reserved</h3>
        </div>
      </div>
    )
}

export default Footer;