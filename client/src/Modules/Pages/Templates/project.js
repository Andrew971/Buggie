import React,{Fragment} from 'react'
import {SectionCard} from "../../../Components/Cards";
import {Layout} from '../../../Components/Grid'
import {Title} from "../../../Components/Text";
import Image from '../../../Components/Image'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'
import {StyleLink} from "../../../Components/Button";

const Project = ({data}) => {
  let {project,title} = data
  return (
    <SectionCard
      primary>
      <Title>{title.text}</Title>
      <Layout container md lg xl direction="row" alignItems="center" justify="space-around">

     
        {project
      .field
      .sort(sort_by('DESC', 'order'))
      .map((project,n) => (
          <Fragment key={n}>
            <Layout items>
            <LazyLoad height={200} offset={100}>
            <Image size={30} src={project.img} alt="Card cap"/>
            </LazyLoad>
            </Layout>
            <Layout items xs md text="center">
              <h2 className="card-title">{project.name}</h2>
              <h6 className="card-text">{project.sub}</h6>
              <p>{project.description}</p>
              {project.link.url && (
                <StyleLink
                  onClick={() => {
                  window.open(project.link.url, "_blank");
                }}
                  primary="primary">
                  {project.link.text}
                </StyleLink>
         )}
      
            </Layout>
          </Fragment>
        ))}
</Layout>
    </SectionCard>
)};
export default Project