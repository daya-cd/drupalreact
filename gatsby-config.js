module.exports =
    {
        siteMetadata:
        {
            title: 'Drupal Blog with gatsby'
        },
        plugins:
            [
                'gatsby-plugin-sass',
                {
                    resolve: 'gatsby-source-filesystem',
                    options:
                    {
                        name: 'files',
                        path: `${__dirname}/src/markdown`
                    }

                },

                'gatsby-transformer-remark',
                {
                    resolve: `gatsby-transformer-remark`,
                    options: {
                        //"excerpt_separator": `<!-- end -->`
                    }
                },
                'gatsby-source-drupal',
                {
                    resolve: 'gatsby-source-drupal',
                    options: {
                        baseUrl: `http://178.128.171.49/`,
                        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
                      }
                }
            ]
    }
