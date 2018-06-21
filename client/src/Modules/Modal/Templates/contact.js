import React, {Fragment} from "react";
import { 
ModalWrapper,
ModalContent,
ModalClose,
ModalHeader,
ModalFooter,
ModalButton,
ModalError} from '../../../Components/Modal'
import {sort_by} from '../../../Utils/constants/constMethod'
import {TextField} from '../../../Components/inputForm'
import {Layout, Grid} from '../../../Components/Grid'

const ContactForm = ({dispatch, modalSAtatus, data}) => {
  const {title, input,errorMessage} = data
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalClose
          onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times;</ModalClose>

        <ModalHeader>
          <h5>{title.text}</h5>
        </ModalHeader>
        <form ref={self => this.contactForm = self}>
          <Grid container md lg xl grid={2}>
            {input
              .field
              .sort(sort_by('DESC', 'order'))
              .map(
              (field, n) =><Fragment key = {
                n
              } > {
                field.fieldType === 'single' && <Grid
                    Grid
                    items
                    span={n === (input.field.length - 1) || (n === (input.field.length - 2) && (n % 2 === 0))
                    ? 2
                    : 1}
                    md
                    lg
                    xl>
                    <TextField
                      type={field.inputType}
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.id}
                      autoComplete={field.autoComplete}
                      rows={field.rows}
                      multiline={(field.fieldType === "multiline")
                      ? true
                      : false}/>
                  </Grid>
              }
              {
                field.fieldType === 'multiline' && <Grid
                    Grid
                    items
                    span={n === (input.field.length - 1)
                    ? 2
                    : 1}
                    md
                    lg
                    xl>
                    <TextField
                      type={field.inputType}
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.id}
                      autoComplete={field.autoComplete}
                      rows={field.rows}
                      multiline/>
                  </Grid>
              }
              {
                field.fieldType === 'select' && <Grid
                    Grid
                    items
                    span={n === (input.field.length - 1)
                    ? 2
                    : 1}
                    md
                    lg
                    xl>
                    <TextField
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.id}
                      autoComplete={field.autoComplete}
                      select
                      defaultValue="">
                      <option disabled></option>
                      {field
                        .option
                        .map((option, n) => <option value={option.value} key={n}>{option.text}</option>)
}
                    </TextField>
                  </Grid>
              } </Fragment>)}

            {modalSAtatus === false && <Grid items md lg xl span={2}>
              <ModalError>
                {errorMessage}
              </ModalError>
            </Grid>
}
          </Grid>

        </form>

        <ModalFooter>
          <Layout container md lg xl direction="row">
            <Layout items>
              <ModalButton
                onClick={() => {
                dispatch({type: "MODAL_HIDE", payload: false})
              }}>&times; Close</ModalButton>
            </Layout>
            <Layout items>
              <ModalButton
                onClick={() => {
                let info = {}
                 const test = Object.values(this.contactForm)
                  .filter(input => input.value !== undefined)
                  .map(async (input) => {
                    Object.defineProperty(info, input.name, {
                      value: input.value,
                      writable: false
                    });
                    info.subject = title.text
                    return info;
                  })
                  Promise.all(test).then(()=>{
                    dispatch({
                    type: 'SEND_CONTACT_INFO',
                    payload: info
                  })                  
                  })
              }}
                primary="primary">Send</ModalButton>
            </Layout>
          </Layout>
        </ModalFooter>
      </ModalContent>

    </ModalWrapper>
  )
};

export default ContactForm