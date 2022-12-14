
const {VueLoaderPlugin} =require("vue-loader");

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require("path");
const join = (...args) => path.join(process.cwd(), ...args);

const vueModuleSassLoader=({sassOptions={},cssOptions={importLoaders:2,sourceMap:false}})=>[
  {loader:"vue-style-loader",options:{sourceMap:false,shadowMode:false}},
  {loader:"css-loader",options:cssOptions},
  {loader:"postcss-loader"},
  {loader:"sass-loader"}
]

const vueModuleCssLoader=({cssOptions={importLoaders:2,sourceMap:false}})=>[
  {loader:"vue-style-loader",options:{sourceMap:false,shadowMode:false}},
  {loader:"css-loader",options:cssOptions},
  {loader:"postcss-loader"},
]



const babelConfig={

}

const sassOptions={};

module.exports=({env,declare})=>{

  const tsLoaderConfig={
    transpileOnly: true,
    happyPackMode: false,
    appendTsxSuffixTo: [
      '\\.vue$'
    ]
  };

  return {
    mode: "production",
    entry:{
      index: !declare?join("src/index.ts"): join("src/index-type.ts")
    },
    experiments: {
      // outputModule: true
    },
    optimization: {
      minimize: false
    },
    target: 'web',
    output:{
      clean: true,
      "path": join("lib"),
      library:{
        type:"umd",
      },
      // environment: {
      //   module: true
      // },
      filename: '[name].js'
    },

    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
      alias: {
        "@": join("src"),
      },
    },
    // externalsType: "module",
    externals: {
      'vue':'vue',
      'vue-property-decorator':'vue-property-decorator',
      'vue-class-component': 'vue-class-component',
      "@ztwx/utils":"@ztwx/utils",
      "@voyo/core":"@voyo/core",
      "rxjs":"rxjs",
      "rxjs/operators":"rxjs/operators"
    },
    module: {
      rules: [
        {
          test: /\.svg/,
          type: 'asset/resource'
        },
        {
          test:/\.js$/,
          exclude: /node_modules/,
          use:[
            {loader: "babel-loader",options: babelConfig}
          ]
        },
        //ts
        {
          test: /\.ts$/,
          use: [
            {loader: "babel-loader", options: babelConfig},
            {loader: "ts-loader",options:tsLoaderConfig}
          ]
        },
        //tsc
        {
          test: /\.tsx$/,
          use: [
            {loader: "babel-loader", options: babelConfig},
            {loader: "ts-loader",options: tsLoaderConfig}
          ]
        },
        // vue
        {
          test: /.vue$/,
          use:[
            {loader:"vue-loader"}
          ]
        },
        // scss
        {
          test: /\.scss$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: vueModuleSassLoader({sassOptions,cssOptions:{
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }})
            },
            {
              resourceQuery: /\?vue/,
              use: vueModuleSassLoader({sassOptions})
            },
            {
              use: vueModuleSassLoader({sassOptions})
            }
          ]
        },
        // css
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: vueModuleSassLoader({cssOptions:{
                  importLoaders:2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }})
            },
            {
              resourceQuery: /\?vue/,
              use: vueModuleCssLoader({})
            },
            {
              use: vueModuleCssLoader({})
            }
          ]
        }
      ],

    },
    plugins: [
      new VueLoaderPlugin(),
      new ForkTsCheckerWebpackPlugin()
    ]
  }
}
