import SubHeader from "../subHeader/subHeader";
import "./skills.css";

import Carousel from "react-bootstrap/Carousel";
import Research from "./research";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import boot from "../../assets/skills/boot.png";
import react from "../../assets/skills/react.png";

import mysql from "../../assets/skills/mysql.png";
import oracle from "../../assets/skills/oracle.png";
import plsql from "../../assets/skills/plsql.png";
import firebase from "../../assets/skills/firebase.png";

import python from "../../assets/skills/python.png";
import r from "../../assets/skills/r.png";
import excel from "../../assets/skills/excel.png";
import powerbi from "../../assets/skills/powerbi.png";
import tableau from "../../assets/skills/tableau.png";

import flutter from "../../assets/skills/flutter.png";
import next from "../../assets/skills/next.png";
import swift from "../../assets/skills/swift.png";
import reactnat from "../../assets/skills/react-nat.png";

export default function Skills() {
  const webDetails = [
    { skill: "HTML", icon: html },
    { skill: "CSS", icon: css },
    { skill: "JS", icon: js },
    { skill: "Bootstrap", icon: boot },
    { skill: "ReactJS", icon: react },
  ];

  const mlDetails = [
    { skill: "Python", icon: python },
    { skill: "R", icon: r },
    { skill: "MS Excel", icon: excel },
    { skill: "Power BI", icon: powerbi },
    { skill: "Tableau", icon: tableau },
  ];

  const dbDetails = [
    { skill: "MySQL", icon: mysql },
    { skill: "Oracle", icon: oracle },
    { skill: " PL/SQL", icon: plsql },
    { skill: "Firebase", icon: firebase },
  ];

  const mobDetails = [
    { skill: "Flutter", icon: flutter },
    { skill: "Swift", icon: swift },
    { skill: "NextJS", icon: next },
    { skill: "React Native", icon: reactnat },
  ];

  const separatorSlide = [<div className="vr vr-skill"></div>];

  const listSills = (items) => {
    return items.map((param) => (
      <div className="card-skill">
        <img className="img-slide" src={param.icon} alt={param.skill} />
        <h6 className="hidden">{param.skill}</h6>
      </div>
    ));
  };

  const CarouselItem = (param) => [
    <div className="text-center car-items me-auto ms-auto">
      <div className="d-flex justify-content-center">{param.item}</div>
      <span>{separatorSlide}</span>
    </div>,
  ];

  return (
    <>
      <div className="container home" id="Skills">
        <div>
          <SubHeader title={"Skills"} subheading={"What I'm Made Of"} />
        </div>
        <br />
        <Carousel>
          <Carousel.Item>
            <CarouselItem item={listSills(webDetails)} />
            <Carousel.Caption>
              <h5 className="cl-caption">Web Development</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CarouselItem item={listSills(mlDetails)} />
            <Carousel.Caption>
              <h5 className="cl-caption">Machine Learning</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CarouselItem item={listSills(dbDetails)} />
            <Carousel.Caption>
              <h5 className="cl-caption">Database Management</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CarouselItem item={listSills(mobDetails)} />
            <Carousel.Caption>
              <h5 className="cl-caption">Mobile App Development</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Research />
      </div>
    </>
  );
}
