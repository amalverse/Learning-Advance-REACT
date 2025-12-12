import React from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.courseId} Courses Page</h1>
    </div>
  );
};

export default Courses;
