import React,{Fragment} from 'react'
import {SectionCard} from "../../../Components/Cards";
import Avatar from "../../../Components/Avatar";
import {Layout} from '../../../Components/Grid'
import {Headlines} from "../../../Components/Text";
import {sort_by} from '../../../utils/constMethod'
import LazyLoad from 'react-lazyload';


 const Biography = ({data}) => {
  const {title, subtitle, paragraph, image, background} = data
  return (
    <SectionCard
      className=""
      primary="primary"
      src={background.path}>
      <Layout container lg xl direction="row-reverse" alignItems="center">
      <LazyLoad height={200} offset={100}>
        <Avatar src={image.field[0].path} srcx2={image.field[0].pathx2}/>  
        </LazyLoad> 
      <Layout items>
        <Headlines>
          <h1>{title.text}</h1>
          <h3>
            {subtitle.text}</h3>
          {paragraph
            .field
            .sort(sort_by('DESC', 'order'))
            .map((block, n) => {
              return (
                <Fragment key={n}>
                  <p>{block.paragraph}</p>
                </Fragment>
              )
            })}
        </Headlines>
      </Layout>
      </Layout>
    </SectionCard>
  )
};
export default Biography