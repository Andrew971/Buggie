import React from "react";
import {SectionCard} from "../../../Components/Cards";
import {Title} from "../../../Components/Text";
import {Grid} from '../../../Components/Grid'
import {ImgageDiv} from '../../../Components/Image'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'

const Focus = ({data}) => {
  const {image,title} = data
return (
<SectionCard>
  <Title primary>{title.text}</Title>
  <Grid container md lg xl direction="row" justify="space-around" autoFit>
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((focus,n) =>
      <Grid items key={n}>
      <LazyLoad height={200} offset={100}>
      <ImgageDiv src={focus.path_1} alt="Card cap" />
      </LazyLoad>
      <h2>{focus.name}</h2>
  </Grid>
    )
  }
  </Grid>  
</SectionCard>
)};

export default Focus