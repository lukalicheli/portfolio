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
      {appCard.map((obj) => (
        <div className="applications-card" key={obj.id}>
          <div className="applications-icon">{obj.icon}</div>
          <h3 className="applications-title">{obj.title}</h3>
          <p className="applications-description">{obj.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Applications;
