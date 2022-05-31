import React, { Component } from "react";
import InfoBar from "./InfoBar";
import AddReqCourseDisplay from "./AddReqCourseDisplay";
import DistCourseDisplay from "./DistCourseDisplay";
import AcaFoundCourseDisplay from "./AcaFoundCourseDisplay";

export default class FilterableCourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      credits: 0,
      AcaFoundCourses : [
        {id: 1, description: "First Year Experience",semester:'' , prefix:'FYE', number: '  ', grade: '  '},
        {id: 2, description: "English Composition I",semester:'' , prefix:'WRT', number: '120', grade: '  '},
        {id: 3, description: "Engligh Composition II",semester:'' , prefix:'WRT', number: '200', grade: '  '},
        {id: 4, description: "Mathematics",semester:'' , prefix:'MAT', number: '151', grade: '  '},
        {id: 5, description: "Interdisciplinary",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 6, description: "Diverse Communities",semester:'' , prefix:'', number: '  ', grade: '  '}
      ],
      DistReqCourses : [
        {id: 1, description: "Science I",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 2, description: "Science II",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 3, description: "Behavior & Social Science I",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 4, description: "Behavior & Social Science II",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 5, description: "Humanity I",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 6, description: "Humanity II",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 7, description: "Art",semester:'' , prefix:'', number: '  ', grade: '  '}
      ],
      AddReqCourses : [
        {id: 1, description: "Writing Emphasis 1",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 2, description: "Writing Emphasis 2",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 3, description: "Writing Emphasis 3",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 4, description: "Speaking Emphasis 1",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 5, description: "Speaking Emphasis 2",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 6, description: "Speaking Emphasis 3",semester:'' , prefix:'', number: '  ', grade: '  '}
      ]
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
  }


  handleNameChange(studentName) {
    this.setState({
      name: studentName
    });
  }
  
  handleCreditChange(trCredit) {
    this.setState({
      credits: trCredit
    })
  }

  saveData = (collection, item) => {
    console.log("*** Collection: " + collection);
    console.log("*** Item:" + item);
      if (item.id === "") {
          item.id = this.idCounter++;
          this.setState(state => state[collection] 
              = state[collection].concat(item));
      } else {
          this.setState(state => state[collection] 
              = state[collection].map(stored => 
                    stored.id === item.id ? item: stored))
                    
      } 
  }

  deleteData = (collection, item) => {
    this.setState(state => state[collection] 
        = state[collection].filter(stored => stored.id !== item.id));
}


  render() {
    console.log("--- FilterableCourseTable ---");
    return (
      <div>
        <InfoBar
          name={this.state.name}
          credit={this.state.credits}
          onNameChange={this.handleNameChange}
          onCreditChange={this.handleCreditChange}
        />
        <AcaFoundCourseDisplay  
          name={this.state.name}
          credit={this.state.credits}
          courses={ this.state.AcaFoundCourses }
          saveCallback={ d => this.saveData("AcaFoundCourses", d) }
          deleteCallback={ d => this.deleteData("AcaFoundCourses", d) } 
        />
        <DistCourseDisplay  
          name={this.state.name}
          credit={this.state.credits}
          courses={ this.state.DistReqCourses }
          saveCallback={ d => this.saveData("DistReqCourses", d) }
          deleteCallback={ d => this.deleteData("DistReqCourses", d) } 
        />
        <AddReqCourseDisplay  
          name={this.state.name}
          credit={this.state.credits}
          courses={ this.state.AddReqCourses }
          saveCallback={ d => this.saveData("AddReqCourses", d) }
          deleteCallback={ d => this.deleteData("AddReqCourses", d) } 
        />
      </div>
    );
  }
}