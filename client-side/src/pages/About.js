import team from "../img/team.jpg";
import "../css/about.css";

function About() {
  return (
    <>
      <div id="aboutContainer">
        <h1>About us</h1>
        <p id="aboutBody">
          We started our way in 2010 when all the companies manage their clients
          with documents and sent them directly to the folder.<br></br> then we
          realized that we have a huge opportunity in our hands that can change
          the world...<br></br>
          after a year of development and hard work we discovered to the world
          CM - Clients Managemant.<br></br>A system that specializes in manage
          clients by smart cards and can show you information about them.
          <br></br>
          <br></br>
          <div>
            <img src={team} alt="our team" id="aboutImg"></img>
          </div>
          <br></br>
          After registration as business you will able open cards to your
          clients that includes:
          <div id="aboutOl">
            <ol>
              <li>Business Name.</li>
              <li>Business Description.</li>
              <li>Business Addres.</li>
              <li>Business Phone Number.</li>
              <li>Business Image.</li>
            </ol>
          </div>
          <br></br>
          <p id="joinAbout">So... will youn join us?</p>
        </p>
      </div>
    </>
  );
}

export default About;
