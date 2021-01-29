import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
export default {
  siteMetadata: {
    title: `Slicks slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton',
    twitter: '@slickslices',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xaexwfq3',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
