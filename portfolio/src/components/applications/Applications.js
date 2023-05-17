import React from "react";
import "./Applications.css";
import {
  RiTodoLine,
  RiInstagramLine,
  RiQuestionnaireLine,
} from "react-icons/ri";

function Applications() {
  const appCard = [
    {
      id: 1,
      title: "Todo App",
      icon: <RiTodoLine size={65}></RiTodoLine>,
      description:
        "A simple todo app. A task manager where you can add, remove, and update todos.",
    },
    {
      id: 1,
      title: "Instagram Clone",
      icon: <RiInstagramLine size={65}></RiInstagramLine>,
      description:
        "An Instagram clone. Some of the details of the app had to be altered to bypass security threat.",
    },
    {
      id: 1,
      title: "Sample",
      icon: <RiQuestionnaireLine size={65}></RiQuestionnaireLine>,
      description: "Sample description",
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
