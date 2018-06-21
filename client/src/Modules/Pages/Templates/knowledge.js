import React from "react";
import {SectionCard} from "../../../Components/Cards";
import {Title} from "../../../Components/Text";
import {Grid} from '../../../Components/Grid'
import Image from '../../../Components/Image'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'

const Knowledge = ({data}) => {
  const {image,title} = data
return (
<SectionCard primary>
  <Title>{title.text}</Title>
  <Grid container direction="row">
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((other,n) =>
      <Grid items key={n} >
      <LazyLoad height={200} offset={100}>
      <Image src={other.path_1} alt="Card cap" size={0}/>
      </LazyLoad>
      <h4>{other.name}</h4>
      </Grid>
    )
  }
  </Grid>
</SectionCard>
)};

export default Knowledge