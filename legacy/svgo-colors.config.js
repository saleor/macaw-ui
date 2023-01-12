module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
  ],
};
