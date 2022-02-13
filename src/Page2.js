import React, { useState } from "react";

export default function Page2() {
  const [ccpop, setccpop] = useState(false);

  return (
    <div className="page2">
      <div className="p2head">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
            Courses (0)
          </div>
          <button onClick={() => setccpop(!ccpop)}>+ Create Course</button>
        </div>
        <span style={{ color: "blueviolet" }}> Learn More </span>about setting
        up courses here
      </div>

      <div className="srchbox">
        <button>Add Filters</button>
        <input type="text" placeholder="Search by Course Title"></input>
      </div>
      <div className="p2card">
        <img src="https://lobopopart.com.br/wp-content/uploads/2020/06/Arte-Abstrata.jpg"></img>
        <div className="cardhead">Create new Course</div>
        <div className="carddesc">Enrolled learners +</div>
        <div className="p2svgbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-wrench"
            viewBox="0 0 16 16"
          >
            <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-box2"
            viewBox="0 0 16 16"
          >
            <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
          </svg>
        </div>
      </div>
      {ccpop && (
        <div className="ccpopbox">
          <div className="ccpopinner">
            <div className="ccinnerhead">
              <div>Create Course</div>
              <button onClick={() => setccpop(!ccpop)}>X</button>
            </div>
            <div className="ccinnerbody">
              <lable>Title</lable>
              <input type="text" placeholder="Title"></input>
              <lable>Instructor</lable>
              <input type="text" placeholder="Instructor"></input>
              <button>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
