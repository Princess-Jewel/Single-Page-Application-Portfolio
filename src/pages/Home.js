import React from 'react';
import Layout from '../layout';
import TypedReactDemo from './TypedReactDemo';
import Img from '../images/vector.jpg';
import Img1 from '../images/bootstrap.svg';
import Img2 from '../images/css3.svg';
import Img3 from '../images/figma.svg';
import Img4 from '../images/react.svg';
import Img5 from '../images/wordpress.svg';
import Img6 from '../images/js.svg';
import Img7 from '../images/phone.svg';
import Img8 from '../images/location.svg';
import Img9 from '../images/email.svg';
import Img10 from '../images/linkedin.svg';
import Img11 from '../images/twitter.svg';
import Img12 from '../images/github.svg';
import Img13 from '../images/image1.PNG';
import Img14 from '../images/image2.PNG';
import Img15 from '../images/image9.PNG';
import Img16 from '../images/image4.PNG';
import Img17 from '../images/image5.PNG';
import Img18 from '../images/image6.PNG';
import Img19 from '../images/image7.PNG';
import Img20 from '../images/image8.PNG';
import Img21 from '../images/image.PNG';
import Img22 from '../images/vector2.jpg';



const Home = () =>
  <Layout>

    <section class="container home">
      <div class="row align-items-center min-vh-100 min-vw-100">
        <div class="col-md-6 text-center text-md-left">
          <TypedReactDemo
            strings={[
              'Princess Jewel Jel-Edema',
              'A Front-End Developer',
              'Open To Work Anywhere!',
              

            ]}
          />
          <p>I am an independent self-starter team player who is organized, detail oriented and able to work in a dynamic environment.
          I have hands-on experience working with React.js. I also have experience converting Figma and Adobe XD design mockups to HTML and CSS.
          I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.
           I am a fast learner who is able to thrive individually and also as part of a team.
          </p>
        </div>
        <div class="col-md-6">
          <img src={Img} alt="pic" class="img-fluid image" />
        </div>
      </div>
    </section>

    <section class="container skills">
      <div> <h1>Skills</h1></div>
      <div class=" col-md-12 box-container">
        <div class="box">
          <img src={Img4} alt="pic" class="image_1" />
          <h5>React JS</h5>
        </div>

        <div class="box">
          <img src={Img6} alt="pic" class="image_1" />
          <h5>Javascript</h5>
        </div>

        <div class="box">
          <img src={Img1} alt="pic" class="image_1" />
          <h5>Bootstrap 4</h5>
        </div>

        <div class="box">
          <img src={Img2} alt="pic" class="image_1" />
          <h5>CSS 3</h5>
        </div>

        <div class="box">
          <img src={Img3} alt="pic" class="image_1" />
          <h5>Figma</h5>
        </div>

        <div class="box">
          <img src={Img5} alt="pic" class="image_1" />
          <h5>WordPress</h5>
        </div>
      </div>
    </section>



    <section class="container experience mt-5">
      <div><h1>Work Experiences</h1></div>
      <div class="row justify-content-around  mb-5">
        <div class="col-md-4">
          <div class="box_1">
            <div class="year">09.2020 - present</div>
            <h3>CitiTravelers</h3>
            <p>Created database schemas with MySQL and assisted with Frontend development where needed. </p>
            <p> Integrated Paystack's API to the site to handle payment so users can subscribe and pay for certain features.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box_1">
            <div class="year">08.2020 - present</div>
            <h3>Heuos</h3>
            <p>Wrote RESTful APIs to be consumed by the Frontend team.</p>
            <p> Integrated SOAP APIs of top Financial Institutions.</p>
            <p> Wrote Unit Tests.</p>
            <p> Worked on refactoring legacy codes to make. them more efficient, clean and readable</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box_1">
            <div class="year">04.2020 - 08.2020</div>
            <h3>Dynamix Tech Solutions</h3>
            <p>Assisted with maintenance of clients' websites.</p>
            <p> Mastered the usage of CMS like WordPress.</p>
            <p> Contributed to development of clients' websites.</p>
            <p>Part of a team that developed clients' websites with React framework.</p>
            <p>Trained new Interns in HTML, CSS, the usage and application of Javascript, and overlooked their progress. </p>

          </div>
        </div>

      </div>
    </section>

    <section class="container projects">
      <div><h1>Projects</h1></div>
      <div class="row">
        <div class="col-md-4 projects_1">
          <img src={Img13} alt="pic" class="image_5 img-fluid" />
          <h4>ORDER-AM</h4>
          <p>An Online Food Store</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://orderam.ng/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
           <img src={Img14} alt="pic" class="image_5 img-fluid" />
          <h4>SPEEDYAUTOS</h4>
          <p>An Automobiles Website</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://speedyautos.ng/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img15} alt="pic" class="image_5 img-fluid" />
          <h4>CITITRAVELERS</h4>
          <p>A Traveling/ Visa Consultant Agency</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://www.cititravelers.com/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <a href="http://isarungano.co.zw/"> <img src={Img16} alt="pic" class="image_5 img-fluid" /></a>
          <h4>ISARUNGANO</h4>
          <p>A Zimbabwean Online StoryTeller</p>
          <div class="button_class d-flex justify-content-center">
          <a href="http://isarungano.co.zw/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
         <img src={Img17} alt="pic" class="image_5 img-fluid" />
          <h4>A SIGNIN PAGE </h4>
          <p>A Signin Page linked to GOOGLESHEETS to save inputted Data</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://asigninpage.netlify.app/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>

        </div>

        <div class="col-md-4 projects_1">
         <img src={Img18} alt="pic" class="image_5 img-fluid" />
          <h4>EKO MARKET SHOP</h4>
          <p>An E-Commerce Store </p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://ekomarketshop.com/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img19} alt="pic" class="image_5 img-fluid" />
          <h4>MY GITHUB REPOSITORY CLONE</h4>
          <p>I used GITHUB GRAPHQL API to fetch Data</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://my-github-clone.netlify.app/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img20} alt="pic" class="image_5 img-fluid" />
          <h4>A REACT WEATHER APP</h4>
          <p> Get all the information that you’ll need about your weather and forecast.</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://my-own-weather-app.netlify.app/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
         <img src={Img21} alt="pic" class="image_5 img-fluid" />
          <h4>HEUOS</h4>
          <p>A Software Development Company</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://heuos.co.zw/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

      </div>
    </section>

    <section class="container contact">
      <div><h1>Contact Me</h1></div>
      <div class="row align-items-center">

      <div class="col-md-6">
        <img src={Img22} alt="pic" class="img-fluid vector_3" />
        </div>

        <div class="col-md-4 info">

          <div class="info-box">
            <h4> <img src={Img9} alt="pic" class="image_2" /><span>PrincessJewel80@gmail.com</span></h4>
          </div>

          <div class="info-box">
            <h4><img src={Img7} alt="pic" class="image_2" /><span>+2349061312216</span></h4>
            <h4><img src={Img7} alt="pic" class="image_2" /><span>+2347083368633</span></h4>
          </div>

          <div class="info-box">
            <h4> <img src={Img8} alt="pic" class="image_2" /><span>Lagos-Nigeria </span> </h4>
          </div>

          <div class="socials">
            <ul>
              <li><a href="https://linkedin.com/in/princess-jewel-jel-edema"> <img src={Img10} alt="pic" class="image_3" /></a></li>
              <li><a href="https://twitter.com/thatebonychic/"> <img src={Img11} alt="pic" class="image_3" /></a></li>
              <li><a href="https://github.com/Princess-Jewel/"> <img src={Img12} alt="pic" class="image_3" /></a></li>
            </ul>
          </div>

        </div>

        <div class="col-md-2">
        <section></section>
        </div>

        <div class="col-md-6">
        <img src={Img22} alt="pic" class="img-fluid vector_2" />
        </div>
      </div>
    </section>


  </Layout>
  ;

export default Home;