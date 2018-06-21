import React, { Component } from "react";
// import Loading from '../../../utils/loading'
import {templateComponents} from './export'

 export default class TemplateLoad  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {type} = this.props
    templateComponents
    .filter(res=>type.toUpperCase()=== res.name.toUpperCase())
    .map(res=> this.setState({component: res.component}))
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }