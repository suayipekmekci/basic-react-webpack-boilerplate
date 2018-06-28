# React Webpack Starter Basic Starter 
boilerplate for React 16 & Webpack 4.    
  
## Features 
* Hot Module Replacement    
* Bootstrap    
* Fontawesome    
* React Router    
* React Redux  
* Sass / Less Loader  
  
## Quick Start 
  
```bash
#Clone project into your local  
git clone https://github.com/suayipekmekci/basic-react-webpack-boilerplate.git    
#Install dependencies 
npm install   
#Serve on localhost:8080 
npm start    
#Build for production
npm run build
 ```  
  
## How To Config index.html  
  
In your webpack.common.js :  
  
```javascript  
{...}  
 new HtmlWebpackPlugin({ inject: true,    
 title: 'React-Webpack', //your website title    
 favicon: 'src/common/images/favicon.ico',  //your favicon  
  meta: {  //your meta tags  
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',    
 description: 'React 16 + Webpack 4 + Fontawesome + Bootstrap + Hotreolad'    
  },    
 minify: true, // minify your index.html {true,false}  
 }) ],  
{...}  
```  
> You can check more arguments on [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

## Chunk & Compression

### Compression
Compressed versions of assets to serve them with Content-Encoding by [`compression-webpack-plugin`](https://github.com/webpack-contrib/compression-webpack-plugin)

in webpack.prod.js :
```javascript
{...}
new CompressionPlugin({  
    asset: "[path].gz[query]",  
  algorithm: "gzip",  
  test: /\.js$|\.css$|\.html$/,  
  threshold: 10240, //Only assets bigger than this size are processed. In bytes.  
  minRatio: 0.8  
})
{...}
```

### Chunk (Code Splitting)
Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time... [MORE DETAILS](https://webpack.js.org/guides/code-splitting/)

in webpack.prod.js :
```javascript
{...}
output: {  
  path: path.resolve(__dirname, 'dist'),  
  filename: '[name].[hash].js',  
  chunkFilename: '[name].[hash].js',  // output Filename
},
optimization: {  
  runtimeChunk: false,  
  splitChunks: {  
    cacheGroups: {  
      commons: {  
        test: /[\\/]node_modules[\\/]/,  
	    name: 'vendors',  
	    chunks: 'all',  
        },  
    },  
  }  
},
{...}
```
