import React from 'react'
import {SectionCard} from "../../../Components/Cards";
import {Grid} from '../../../Components/Grid'
import {Title} from "../../../Components/Text";
import IconLoad from '../../../Components/SvgIcon'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'

const Services = ({data}) => {
  const {image,title} = data
  return (
    <SectionCard>
      <Title primary>{title.text}</Title>
      <Grid container md lg xl direction="row" justify="space-between" autoFit>
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((services, n) =>
          <Grid items key={n}>
              <Grid items>
              <LazyLoad height={200} offset={100}>
                  <IconLoad  icon={services.icon||'hamburger'}/>
                      </LazyLoad>
                      </Grid>
                      <Grid items >
                    <h2>{services.name}</h2>
                    <p>{services.text}</p>
                  </Grid>
                  </Grid>

          )}
          </Grid>
    </SectionCard>
  )
};
export default Services