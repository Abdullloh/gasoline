const CracoLessPlugin = require("craco-less");
const { default: COLORS } = require("./src/constants/colors");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": COLORS.main,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
