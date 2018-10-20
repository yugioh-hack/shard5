module.exports = ctx => ({
  plugins: {
    "postcss-import": {},
    "autoprefixer": {
      "browsers": "last 2 versions",
    }//,
    //"csswring":{}
  }
})
