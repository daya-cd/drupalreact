module.exports=
    {
        siteMetadata:
            {
              title: 'Drupal Blog with gatsby'
            },
        plugins:
            [
                'gatsby-plugin-sass',
                    {
                            resolve:'gatsby-source-filesystem',
                            options:
                                {
                                        name:'files',
                                        path:`${__dirname}/src/markdown`,
                                }

                    },
                'gatsby-transformer-remark'
            ]
    }
