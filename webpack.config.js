const VueLoaderPlugin = require("vue-loader/lib/plugin"),
  copyWebpackPlugin = require("copy-webpack-plugin"),
  miniCssExtractPlugin = require("mini-css-extract-plugin"),
  cleanPlugin = require("clean-webpack-plugin"),
  htmlWebpackPlugin = require("html-webpack-plugin"),
  devServer = require("webpack-dev-server"),
  webpack = require("webpack");
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    filename: "./js/[name]-[hash:8].js", //[chunkhash:8]生产打包时使用
    path: __dirname + "/dist",
    publicPath: "http://localhost:8888/" //服务器根地址
  },
  plugins: [
    new cleanPlugin(
      "dist/{js,css}/*.*", //匹配要删除的文件，多个时可为数组
      {
        root: __dirname
      }
    ),
    new htmlWebpackPlugin({
      template: "./src/index.html", //指定模板html
      chunks: ["index"], //引入的文件
      //excludeChunks:["demo"],//不引入的
      inject: "body", //引入位置
      filename: "index.html",
      title: "首页"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new miniCssExtractPlugin({
      filename: "css/[name]-[hash:8].css"
    }),
    new copyWebpackPlugin([
      {
        from: __dirname + "/src/assets",
        to: "./assets/" //dist
      }
    ]),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    inline: true,
    overlay: {
      errors: true
    },
    port: 8888,
    hot: true //启用热更新，局部更新，不刷新全部网页，需要webpack.HotModeleReplacementPlugin
  },
  module: {
    rules: [
      /* {
        //webpack4以上不用babel，已全面支持ES6
        test: /\.js$/,
        user: [
          {
            loader: "babel-loader",
            option: {
              presets: ["env"]//推荐使用.babelrc配置文件
            }
          }
        ]
      },*/
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader, //分离css
          "css-loader", //打包css到index.js
          "sass-loader", //编译sass
          "postcss-loader" //前缀
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024, //小于8kb的图片转base64
              name: "[name].[ext]", //转到dist目录后的文件名和后缀于src下相同
              outputPath: "img/"
            }
          }
        ]
      }
      // {
      //   test: /\.(htm|html)$/i,
      //   loader: "html-withimg-loader"
      // }
    ]
  }
};
