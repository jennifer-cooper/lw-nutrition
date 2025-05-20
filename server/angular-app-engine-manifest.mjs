
export default {
  basePath: 'https://jennifer-cooper.github.io/lw-nutrition',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
