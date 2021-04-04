import embed from 'vega-embed';

var yourVlSpec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values: [
      {a: 'Z', b: 28},
    ]
  },
  mark: 'bar',
  encoding: {
    x: {field: 'a', type: 'ordinal'},
    y: {field: 'b', type: 'quantitative'}
  }
};
embed('#root', yourVlSpec);

// This is needed for Hot Module Replacement.  Ignore it.
if (module.hot) {
  module.hot.accept();
}
