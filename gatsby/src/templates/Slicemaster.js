import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default function SingleSlicemaster({ data }) {
  return (
    <div className="center">
      <SEO
        title={`${data.slicemaster.name}`}
        image={data.slicemaster.image.asset.src}
      />
      <Img fluid={data.slicemaster.image.asset.fluid} />
      <h2>
        <span className="mark">{data.slicemaster.name}</span>
      </h2>
      <p>{data.slicemaster.description}</p>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
