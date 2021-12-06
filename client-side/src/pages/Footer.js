import { GoLocation } from "react-icons/go";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFax } from "react-icons/fa";
import "../css/footer.css";

function Footer() {
  return (
    <>
      <footer class="page-footer font-small unique-color-dark">
        <container id="footerCon">
          <div class="container text-center text-md-left mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-5.5 mx-auto mb-3 footerVision">
                <h6 class="text-uppercase font-weight-bold">Our Vision</h6>
                <hr
                  class="deep-purple accent-2 mb-5 mt-0  mx-auto"
                  style={{ width: 80 }}
                ></hr>
                <p className="VisionP">
                  In our opinion, working efficiently and quickly are the
                  winning combination! With proper customer management you can
                  control your business.
                  <br></br>
                  <span style={{ fontWeight: "bold" }}>
                    Because your success is our success!
                  </span>{" "}
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase font-weight-bold">Categories</h6>
                <hr
                  class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                ></hr>
                <p>
                  <a href="/Home">Home</a>
                </p>
                <p>
                  <a href="/about">About Us</a>
                </p>
                <p>
                  <a href="/contact">Contact Us</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                ></hr>
                <p>
                  <i class="fas fa-home mr-3"></i>
                  <GoLocation></GoLocation> Location: Tel Aviv, Rotshild 15, IL
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  <HiOutlineMail></HiOutlineMail> Email: CM@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i>
                  <HiOutlinePhone></HiOutlinePhone> Office: 03-8846279
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i>
                  <FaFax></FaFax> FAX: 03-8857845
                </p>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2021 Copyright: Tom Peer.
          </div>
        </container>
      </footer>
    </>
  );
}
export default Footer;
