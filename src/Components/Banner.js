import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <div id="Banner">
        {/* <div id="Banner_text">
          <h1 id="Banner_Heading">
            Welcome <span id="folks">Folks!</span>
          </h1>
          <p id="Banner_para">
            My name is Sandeep. I am a Software Engineer by profession and
            passionate about teaching and I have got two channels for that:
          </p>
        </div> */}
        {/* <div id="Banner_text">
          <h1>
            <span>I am a</span>
            <div class="message">
              <div class="word1">software engineer</div>
              <div class="word2">YouTuber</div>
              <div class="word3">Teacher</div>
            </div>
          </h1>
        </div> */}


        <section class="wrapper">

          <h2 class="sentence">I am a
            <div class="slidingVertical">
              <span>software engineer.</span>
              <span>YouTuber.</span>
              <span>Teacher.</span>
            </div>
          </h2>

        </section>




        <div id="Banner_image">
          <img
            className="Banner_image_style"
            src={require("./../images/person-with-globe.png")}
            alt="my_iamge"
          />
        </div>
      </div>
    </>
  );
}
