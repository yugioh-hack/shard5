module.exports = ctx => ({
  plugins: {
    "stylelint": ctx.env === 'development' ? {}: false,
    "postcss-import": ctx.env === 'development' ? {
      plugins: [
        require("stylelint")({
          //ignoreFiles: 'css/src/*.css' // 上のstylelintと重複するため無視
        })
      ]
    }:{},
    "css-declaration-sorter":{order: 'alphabetically'},
    "autoprefixer": {
      "browsers": "last 2 versions",
    }//,
    //"csswring":{}
  }
})
