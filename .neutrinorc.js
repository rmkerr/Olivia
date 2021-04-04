const web = require('@neutrinojs/web');
const copy = require('@neutrinojs/copy');

module.exports = {
  options: {
    root: __dirname,
    mains: {
      index: {
        // outputs index.html from src/index.*
        entry: 'index',
        title: 'Site Homepage',
      },
      admin: {
        // outputs admin.html from src/admin.*
        entry: 'admin',
        title: 'Admin Demo',
      },
    },
  },
  use: [
    web({
      html: {
        title: 'Olivia Portfolio'
      }
    }),
    copy({
      patterns: [{ from: "data", to: "data" },],
      pluginId: 'copy',
    }),
  ],
};
