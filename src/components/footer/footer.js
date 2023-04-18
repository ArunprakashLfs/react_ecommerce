import './footer.scss'
const Footer =()=>{
    return(
        <div className='footer'>
           <div className='content'>
           <div >
                <h3>About us</h3>
                <span>Nithin Traders</span>
                <br/>
                <span>Tiruppur-641603</span>
                <br/>
                <strong>9988998899</strong>
            </div>
            <div>
                <h3>Contact Us</h3>
                <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>

            </div>
            <div>
                <h3>Our Acheivements</h3>
            </div>
           </div>
           <div>
            <p>All rights reserved © 2023 </p>
           </div>
        </div>

    )
}
export default Footer;