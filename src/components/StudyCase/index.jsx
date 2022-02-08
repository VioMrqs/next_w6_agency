// import { useState } from "react";
// import { FaHeart, FaPlusCircle } from "react-icons/fa";
// import Button from "../Button";

const StudyCase = (props) => {
  const {studycase} = props;

  return (
    <div className="card">
      <h3>{studycase.title}</h3>
      <p>{studycase.description}</p>
    </div>
  );
};

export default StudyCase;
