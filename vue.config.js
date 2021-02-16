module.exports  =  {
    configureWebpack: {
        resolve: {
            alias: {
                'assetes': '@assetes',
                'common': '@common',
                'components': '@components',
                'views': '@views',
                'network': '@network'
            }
        }
    },
    lintOnSave: false
}