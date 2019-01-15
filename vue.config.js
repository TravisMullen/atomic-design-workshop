// const meta = require('./src/assets/metadata.json')

module.exports = {
  //  pwa: {
  //   name: meta.title, // Default: "name" field in package.json
  //   themeColor: '#2173a6',
  //   msTileColor: '#000000',
  //   // appleMobileWebAppCapable: 'yes',
  //   // appleMobileWebAppStatusBarStyle: 'black',

  //   // configure the workbox plugin
  //   // workboxPluginMode: 'InjectManifest',
  //   // workboxOptions: {
  //   //   // swSrc is required in InjectManifest mode.
  //   //   swSrc: 'dev/sw.js',
  //   //   // ...other Workbox options...
  //   // }
  // },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // example: data: `@import "@/variables.scss";`
        data: `@import "@/styles/global.scss";`
      }
    }
  }
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg')

  //   // clear all existing loaders.
  //   // if you don't do this, the loader below will be appended to
  //   // existing loaders of the rule.
  //   svgRule.uses.clear()

  //   // add replacement loader(s)
  //   svgRule
  //     .use('vue-svg-loader')
  //       .loader('vue-svg-loader')
  //       .options({
  //         svgo: {
  //           plugins: [
  //             {removeViewBox: false},
  //             {removeDimensions: true},
  //             {removeDoctype: true},
  //             {removeComments: true}
  //           ]
  //         }
  //       })
  // }
}
