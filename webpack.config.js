const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
 
module.exports = { 
  // Входной файл 
  entry: ['./src/js/index.js'], 
 
  // Выходной файл 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: './js/bundle.js', 
    publicPath: '' 
  }, 
 
  // Source maps для удобства отладки 
  devtool: "source-map", 
 
  module: { 
    rules: [ 
      // Транспилируем js с babel 
      { 
        test: /.js$/, 
        include: path.resolve(__dirname, 'src/js'), 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/preset-env'], 
          } 
        } 
      }, 
 
      // Компилируем SCSS в CSS 
      { 
        test: /\.(scss|css)$/, 
        use: [ 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader', 
          'sass-loader' 
        ], 
      }, 
 
      // Подключаем шрифты из css 
      { 
        test: /\.(eot|ttf|woff|woff2)$/, 
        use: [ 
          { 
            loader: 'file-loader', 
            options: { 
              name: './fonts/[name].[ext]', 
              outputPath: 'fonts', 
            }, 
          }, 
        ], 
      }, 
 
      // Подключаем картинки и иконки 
      { 
        test: /\.(svg|png|jpg|jpeg|webp)$/, 
        use: [ 
          { 
            loader: 'file-loader', 
            options: { 
              name: './img/[name].[ext]', 
              outputPath: 'img', 
            }, 
          }, 
        ], 
      } 
    ], 
  }, 
 
  plugins: [ 
    // Подключаем файл html, стили и скрипты встроятся автоматически 
    new HtmlWebpackPlugin({ 
      title: 'Webpack 4 Starter', 
      template: './src/index.html', 
      inject: true, 
      minify: { 
        removeComments: true, 
        collapseWhitespace: false, 
      }, 
      scriptLoading: 'defer', 
    }), 
 
    // Кладем стили в отдельный файл 
    new MiniCssExtractPlugin({ 
      filename: 'style.css', 
    }), 
 
    // Копируем картинки 
    new CopyWebpackPlugin({ 
      patterns: [ 
        { from: './src/img', to: 'img', noErrorOnMissing: true }, 
        { from: './src/img/icons', to: 'img/icons', noErrorOnMissing: true } 
      ] 
    }) 
  ] 
};
