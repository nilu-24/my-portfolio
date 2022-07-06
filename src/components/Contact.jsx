
export default function Contact(){

    return(<div id="contact" className="contact">

    <div className="contact-card">
    <h1 style={{fontSize:"35px"}}>Reach Out To Me! <i class="fa-solid fa-paper-plane"></i></h1>

    <h3 style={{color:"brown",fontSize:"25px"}}>Let's keep in touch and I'd love to hear about your ideas.</h3>

    <a style={{fontSize:"18px"}} className="contact-email" target="_blank" href="mailto:fardin.abdullah@mail.mcgill.ca"><i class="fa-solid fa-envelope"></i>Email Me</a>
    <p className="uni" style={{fontSize:"18px"}}><i style={{color:"red"}} class="fa-solid fa-building-columns"></i> McGill University</p>
    <p style={{fontSize:"18px"}} className="uni"> <i style={{color:"green"}} class="fa-solid fa-location-dot"></i> Montréal, Quebec, Canada</p>
    


    <div class="contact-links">


    <button class="contact-social"><a target="_blank" href="https://github.com/nilu-24"><i style={{color:"#333"}} class="brand fa-brands fa-github"></i></a></button>
    <button class="contact-social"><a target="_blank" href="https://www.linkedin.com/in/fardin-abdullah-0448561b1/"><i style={{color:"#0072b1"}} class="brand fa-brands fa-linkedin"></i></a></button>
    <button class="contact-social"><a target="_blank" href="https://www.facebook.com/profile.php?id=100007986435816"><i style={{color: "#4267B2"}} class="brand fa-brands fa-facebook"></i></a></button>
    <button class="contact-social"><a target="_blank" href="https://www.instagram.com/fardin_nilavro/?hl=en"><i class="brand fa-brands fa-instagram"></i></a></button>
    </div>

    </div>

    </div>);



}