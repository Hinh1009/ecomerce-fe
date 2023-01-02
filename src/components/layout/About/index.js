import React from "react";
import "./styles.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import profilePng from "../../../images/Profile.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/dinhinhwg.98/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={profilePng}
              alt="Founder"
            />
            <Typography>Hinhwg :v</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @dinhinhwag.98. All thing you
              need is available on Youtube.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Social Network</Typography>
            <a href="https://github.com/Hinh1009" target="blank">
              <GithubIcon className="githubSvgIcon" />
            </a>

            <a href="https://instagram.com/dinhinhwg.98/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a href="https://www.facebook.com/the.coak.9/" target="blank">
              <FacebookIcon className="fbSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
