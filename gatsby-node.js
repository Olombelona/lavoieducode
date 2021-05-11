// https://github.com/processing/p5.js/issues/3926
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            // use: loaders.null(),
            use: 'null-loader',
          },
        ],
      },
    });
  }
};
