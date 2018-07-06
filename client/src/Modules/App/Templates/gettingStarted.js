import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const GettingStarted = (props) => {
  // console.log(props)
  return (
    <Fragment>
      <div>test getting started</div>
      <Link to="/location">Get Started</Link>
    </Fragment>
  )
};
export default GettingStarted