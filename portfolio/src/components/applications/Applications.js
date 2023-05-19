import React from "react";
import "./Applications.css";
import {
  RiTodoLine,
  RiInstagramLine,
  RiQuestionnaireLine,
} from "react-icons/ri";
import VideoComponent from "./Video";
import HoverImage from "./Video";
import { Link } from "react-router-dom";
function Applications() {
  const appCard = [
    {
      id: 1,
      title: "Todo App",
      icon: (
        <a href="https://lukalicheli.github.io/todo-app-react/">
          <RiTodoLine style={{ color: "#2B7A78" }} size={65}></RiTodoLine>
        </a>
      ),
      description:
        "A simple todo app. A task manager where you can add, remove, and update todos.",
    },
    {
      id: 1,
      title: "Instagram Clone",
      icon: (
        <Link to="/ig-clone">
          <RiInstagramLine
            style={{ color: "#2B7A78" }}
            size={65}
          ></RiInstagramLine>
        </Link>
      ),
      description:
        "An Instagram clone. Some of the details of the app had to be altered to bypass security threat.",
    },
    {
      id: 1,
      title: "Radium Code",
      icon: <RiQuestionnaireLine size={65}></RiQuestionnaireLine>,
      description: "In progress...",
    },
  ];

  return (
    <div className="applications-container">
      {" "}
      <div className="applications-header">
        <h3 className="applications-header title">Applications</h3>
        <p className="applications-header description">
          Whether it's creating an exact replica from wireframes or another
          application to making simple daily apps, I have various projects
          displaying my front end capabilities{" "}
        </p>
      </div>
      <div className="applications-card-wrapper">
        {appCard.map((obj, index) => (
          <div className="applications-card" key={index}>
            <div className="applications-icon">{obj.icon}</div>
            <h3 className="applications-title">{obj.title}</h3>
            <p className="applications-description">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
