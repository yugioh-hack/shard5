module.exports = {
  plugins: [
    require("postcss-simple-vars")({
      silent: true
    }),
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-for"),
    require("postcss-extend"),
    require("autoprefixer")({
      browsers: ["last 2 versions"]
    })
  ]
};