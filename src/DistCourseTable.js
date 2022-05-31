import React, { Component } from "react";
import DistCourseRow from "./DistCourseRow";
//import { writingCourses } from "./FilterableCourseTable";


export  class DistCourseTable extends Component {
  
  render() {
    const name = this.props.name;
    const credit = this.props.credit;
    
    const courses = this.props.courses;
    
    

    const rows = [];
    console.log("--- CourseTable ---");
    console.log ("Name:" + name);
    console.log ("Credit:" + credit);
    courses.forEach((c) => {
      console.log("Received a course: " + c.id + " "+ c.prefix + " "+ c.number);

      
      
      if (c.id === 1) {
        console.log("--course 1 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 2) {
        console.log("--course 2 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 3) {
        console.log("--course 3 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 4) {
        console.log("--course 4 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 5) {
        console.log("--course 5 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 6) {
        console.log("--course 6 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 7) {
        console.log("--course 7 " + c.course);
        rows.push(
          <DistCourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
    });
   
    console.log(`{name}`);
    return (
      <div>
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
              Distributive Requirement
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}