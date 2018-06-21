import React from "react";
import { 
ModalWrapper,
ModalContent,
ModalConfirm,
ModalButton
} from '../../../Components/Modal'
import {Layout} from '../../../Components/Grid'
import {sort_by} from '../../../Utils/constants/constMethod'

 const Confirmation = ({dispatch , data}) =>{
   const  { title, paragraph, } = data
   console.log(data)
   return (<ModalWrapper>

<ModalContent>
  <ModalConfirm>
{title.text}
{paragraph
.field
.sort(sort_by('DESC','order'))
.map((paragraph,n)=>
<p key={n}>{paragraph.text}</p>
)
   }
  </ModalConfirm>
  <Layout container>
    <Layout items justify="center">
    <ModalButton onClick={() => {
        dispatch({type: "MODAL_HIDE", payload: false})
      }}>&times; Close</ModalButton>
      </Layout>
  </Layout>
</ModalContent>

</ModalWrapper>)};

export default Confirmation;