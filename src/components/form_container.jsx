import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RoversForm from './rovers_form.jsx'

class FormContainer extends Component {

  submit = values => {
      // print the form values to the console
      console.log(values)
  }

  render() {
    return <RoversForm onSubmit={this.submit} />
  }

};

export default FormContainer;
