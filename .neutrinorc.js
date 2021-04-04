const web = require('@neutrinojs/web');
const copy = require('@neutrinojs/copy');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    web({
      html: {
        title: 'Portfolio'
      }
    }),
    copy({
      patterns: [{ from: "data", to: "data" },],
      pluginId: 'copy',
    }),
  ],
};
