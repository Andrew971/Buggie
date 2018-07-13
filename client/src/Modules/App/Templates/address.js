import React,{Fragment} from 'react'
import Validation from '../../../Components/Validation'


 const Address = (props) => {
// console.log(props)
  return (
    <Fragment>
      <Validation/>
<button onClick={()=>props.stepHandler(+1)}>step1</button>
</Fragment>
  )
};
export default Address