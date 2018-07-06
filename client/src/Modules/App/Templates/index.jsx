import React, { PureComponent } from "react";
// import Loading from '../../../utils/loading'
import {templateComponents} from './export'
 export default class TemplateLoad  extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {

      this.fetchComponent()
    }

    fetchComponent =()=>{
      const {type} = this.props
      templateComponents
      .filter(res=>type.toUpperCase()=== res.name.toUpperCase())
      .map(res=> this.setState({component: res.component}))
    }
    componentDidUpdate = (prevProps)=>{
      return prevProps.type !== this.props.type?this.fetchComponent():false;
    }
    
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }