import React from "react";
import "./Channel.css";

const Channel = () => {
  return (
    <div id="Main_Channel_Box">
      <p className="Channel_Heading">Our Youtube Channels</p>
      <div id="Channel_Box">
        <div id="Channel1">
          <a href="https://www.youtube.com/trickit">
            <div class="Channel1_logo">TRiCK iT</div>
          </a>
          <div id="Channel1_info">
            <p>315,000+ Learners</p>
            <p>2.5 crore+ views</p>
          </div>
        </div>

        <div id="Channel2">
          <a href="https://www.youtube.com/channel/UCm-E4DMO8EKeuTdP71PNl6w">
            <div class="Channel2_logo">WoW Geo</div>
          </a>
          <div id="Channel2_info">
            <p>300+ Learners</p>
            <p>3500+ views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
