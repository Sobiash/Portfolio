import React from "react";
import RainBowText from "./RainBowText";
import "../styles/About.scss";
import SocialLinks from "./SocialLinks";
import "../styles/SocialLinks.scss";
import img from "../assets/sobia.shahbaz.jpg";

const about = () => {
  const about = ["A", "B", "O", "U", "T"];
  return (
    <div className="about">
      <div className="center">
        {" "}
        <RainBowText text={about} className="text-center" />
      </div>

      <div className="bio">
        <div className="bio__pic">
          <img src={img} alt="Sobia Shahbaz" />
        </div>
        <div className="bio__desc">
          <p>
            <b>
              Master student of SouthEastern University of Norway in Msc
              Management Program.
            </b>{" "}
            Master thesis project in digital marketing, credentials are
            reinforced by experience gained during internship with Blockchain
            Hotels's digital marketing team.
            <b>
              <br />
              Consistently commended by professors and internship supervisors
            </b>{" "}
            for grasp of multiple technologies and attention to detail. <br />{" "}
            <b>Known as a self-starter, team player and multitasker</b> --strive
            to consistently exceed expectations.
          </p>
          <p>Technology Summary</p>
          <p>
            <b>Programming Languages Skills: </b> JavaScript, React Js; CSS3,
            Sass; HTML5; BootStrap; WordPress; Git, GitHub;
            <br />
            <b>Other Skills: </b> Responsive Design, Mobile First UX, ES6, ES7,
            Babel.js, NPM, Webpack, Gulp.js
            <br />
            <b>Systems: </b> Mac OS X, Windows Server 2016
            <br />
            <b>Digital Marketing Knowledge: </b> SEO, Google Ads, FaceBook Ads,
            Twitter Ads, Instagram Ads, Youtube, Blog, Research;
          </p>
          <p>Internship</p>
          <p>
            <b>Blockchain Hotels, Warsaw, Poland</b> <br />
            Digital Marketing Intern, 2018
            <br /> Accomplishments: Handled Company website tasks (primarily
            doing SEO best practices to optimize Web site for search engine
            rankings), working with wordpress(Job Post Creation, Blogs Creation
            tasks), working an average of 30 hours per week while maintaining a
            3.2 GPA. <br />
            Handled Twitter Account completely, partially worked with FaceBook
            page, YouTube channel, Customer service duties
            <br />
            Research for different productivity levels of the company.
          </p>
          <p>
            <b>Scepter, Chorzów, Poland</b> <br />
            Web Designing Intern, 2018
            <br /> Accomplishments: Hands on experience on 3 different projects
            in web development while learning new technologies.
            <br />
            Learned about HTML, BootStrap, CSS3, Sass, JavaScript.
            <br />
            Handled FaceBook page for different clients of the company.
          </p>
          <p>Volunteer Work</p>
          <p>
            Have been board member of International Student Union of Norway as
            PR officer for one year while studying at SouthEastern University of
            Norway. <br />
            Handled many student and board related communication tasks in that
            position.
          </p>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default about;
