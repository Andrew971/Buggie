import React, {PureComponent, Fragment} from 'react';
import styled, {css} from "styled-components"

const StyledTextField = css `
background:black;
border:0;
color: rgba(0, 0, 0, 0.87);
display: inline-flex;
font-size: 1rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
line-height: 1.1875em;
margin: 0;
padding: 0.5rem ;
min-width: 0;
flex-grow: 1;
box-sizing: content-box;
background: none;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
transition: border-bottom-color 200ms ease-in 0ms;
width: 100%;

::placeholder{
opacity:0;
}

&:focus::-webkit-input-placeholder {
   opacity:1;
 }

&:focus	{
  outline:none;

}
`
const Container = styled.div `
*::before, *::after {
  box-sizing: border-box;
}
width:100%;
display: flex;
padding: 0;
position: relative;
min-width: 0;
flex-direction: column;
align-items:center;


::before {
    left: 0;
    color: transparent;
    right: 0;
    bottom: 0;
    content: "testest";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
}

::after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
    pointer-events: none;
    border-bottom: 2px solid #1976d2;

}

input:focus ~ label, input:valid ~ label,textarea:focus ~ label,
textarea:valid ~ label, select:valid ~ label{
    transform: translate(-0.5rem, -0.8rem) scale(0.75);
    color:#5264AE;

}

&:focus-within::after{
    transform: scaleX(1);
    color:#5264AE;
}
`;

const Label = styled.label `
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.1875em;
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0.5rem, 0rem) scale(1);
  transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1);
  opacity:0.5;
  pointer-events:none;

`;

const Input = styled.input `
${StyledTextField}


`;
const Textarea = styled.textarea `
${StyledTextField}
overflow: auto;
white-space: pre-wrap;

`;

const SVG = styled.svg `
  fill: currentColor;
  width: 1em;
  height: 1em;
  font-size: 24px;
  user-select: none;
  display:inline-block;
  flex-shrink: 0;
  color: inherit;
  pointer-events: none;
  position: absolute;
  right:0;
  bottom:5px;
`;

const Select = styled.select `
${StyledTextField}
flex-grow: 1;
box-sizing: content-box;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;
text-rendering: auto;

 border:0;
 &:focus	{
  outline:none;
}


`;



const InputField = ({type, label, id, name, placeholder,autoComplete}) => (<Fragment>
  <Input id={id} type={type} name={name} placeholder={placeholder} required="required" autoComplete={autoComplete}/>
  <Label id={id} className="test">{label}</Label>
</Fragment>);

const TextAreaField = ({
  type,
  label,
  id,
  name,
  placeholder,
  rows,
  autoComplete
}) => (<Fragment>
  <Textarea id={id} type={type} name={name} placeholder={placeholder} rows={rows} required="required" autoComplete={autoComplete}/>
    <Label id={id} className="test">{label}</Label>
  </Fragment>);

const SelectField = ({
  label,
  id,
  name,
  placeholder,
  children,
  value,
  onChange,
  defaultValue
}) => (<Fragment>
  <Select id={id} name={name} onChange={onChange} required defaultValue={defaultValue}>
  {children}
  </Select>
  <Label id={id}>{label}</Label>
  <SVG>
    <path d="M7 10l5 5 5-5z"></path>
  </SVG>
</Fragment>);

class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      SelectValue:""
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({SelectValue:e.target.value})
  }


  render() {
    const {
      type,
      label,
      id,
      name,
      placeholder,
      multiline,
      rows,
      select,
      children,
      onChange,
      autoComplete,
      defaultValue
    } = this.props;
    const { SelectValue }= this.state;

    return (<Container id={id} value={SelectValue}>
      {type && <InputField type={type} label={label} id={id} name={name} placeholder={placeholder} autoComplete={autoComplete}/>}
      
      {multiline && <TextAreaField type={type} label={label} id={id} name={name} placeholder={placeholder} rows={rows} autoComplete={autoComplete}/>}

      {select && <SelectField type={type} label={label} id={id} name={name} placeholder={placeholder} rows={rows} children={children} onChange={onChange} value={SelectValue} defaultValue={defaultValue} />}

    </Container>)
  }
}



export default TextField;
