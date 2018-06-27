# React Webpack Starter  
Basic Starter kit for React 16 & Webpack 4.  
  
## Features  
* Hot Module Replacement  
* Bootstrap  
* Fontawesome  
* React Router  
* React Redux
* Sass / Less Loader
  
## Quick Start  
  
```bash  
# Clone project into your local
git clone https://github.com/suayipekmekci/React-starter.git

# Install dependencies  
npm install  
  
# Serve on localhost:8080  
npm start  
  
# Build for production  
npm run build  
```

## How To Config index.html

In your webpack.common.js : 

```javascript
{...}
 new HtmlWebpackPlugin({  
  inject: true,  
  title: 'React-Webpack', //your website title  
  favicon: 'src/common/images/favicon.ico',  //your favicon
  meta: {  //your meta tags
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',  
	  description: 'React 16 + Webpack 4 + Fontawesome + Bootstrap + Hotreolad'  
  },  
  minify: true, // minify your index.html {true,false} 
  })  
],
{...}
```
> You can check more arguments on [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) 