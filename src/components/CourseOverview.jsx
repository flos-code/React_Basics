import React from "react";
import { Course } from "./Course";

export class CourseOverview extends React.Component {
  render() {
    return (
      <div>
        <h1>Meine Kurse</h1>
        <Course title="Test Kurs" author="Hans Test"></Course>
        <Course title="Essen fasse" author="Hans Wurst"></Course>
        <Course></Course>
        <Course title={123} author="nicht Hans"></Course>
      </div>
    );
  }
}

CourseOverview.displayName = "Kursübersicht";
