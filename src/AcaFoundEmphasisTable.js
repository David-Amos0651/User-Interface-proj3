import React, { Component } from "react";
//import CourseCategoryRow from "./CourseCategoryRow";
import AcaFoundCourseRow from "./DistCourseRow";


export default class AcaFoundEmphasisTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const tookOnly = this.props.tookOnly;

    const rows = [];
    let lastCategory = null;

    this.props.courses.forEach((product) => {
      if (course.name.indexOf(filterText) === -1) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <CourseCategoryRow
            category={course.category}
            key={course.category} />
        );
      }
      rows.push(
        <AcaFoundCourseRow
          product={course}
          key={course.name}
        />
      );
      lastCategory = course.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}