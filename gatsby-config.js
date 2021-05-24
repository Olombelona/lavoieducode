/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// https://medium.com/codait/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `La Voie du code`,
    description: `Tout ce qui est nécéssaire pour suivre la Voie du code`,
    author: `Dinh Doan Van Bien / Stanislas Marçais`,
  },

  plugins: [
    // DATABASE
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: 'Stan',
        collection: 'GenerativeArtists',
        server: {
          address: 'cluster0-shard-00-01.nu5bx.mongodb.net',
          port: 27017,
        },
        auth: {
          user: 'stan',
          password: 'stan',
        },
        extraParams: {
          replicaSet: 'Cluster0-shard-0',
          ssl: true,
          authSource: 'admin',
          retryWrites: true,
        },
      },
    },

    // IMAGE
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp // don't work on OSX
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    // FILE SYSTEME
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artistes`,
        path: `${__dirname}/media/artistes`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    //
  ],
};
