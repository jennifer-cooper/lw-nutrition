
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jennifer-cooper.github.io/lw-nutrition/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/libs/features/privacy-policy/src/lib/privacy-policy.routes.ts": [
    {
      "path": "chunk-3OPS4KTY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ZAHNFXOA.js",
      "dynamicImport": true
    }
  ],
  "src/libs/features/home/src/lib/pages/home.page.ts": [
    {
      "path": "chunk-M3VW7TSU.js",
      "dynamicImport": false
    }
  ],
  "src/libs/features/home/src/lib/home.routes.ts": [
    {
      "path": "chunk-2SPUFUUI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-M3VW7TSU.js",
      "dynamicImport": true
    }
  ],
  "src/libs/features/contact/src/lib/pages/contact.page.ts": [
    {
      "path": "chunk-X6G4M35M.js",
      "dynamicImport": false
    }
  ],
  "src/libs/features/contact/src/lib/contact.routes.ts": [
    {
      "path": "chunk-NQV2OVDI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-X6G4M35M.js",
      "dynamicImport": true
    }
  ],
  "src/libs/features/faq/src/lib/pages/faq.page.ts": [
    {
      "path": "chunk-K4S235FK.js",
      "dynamicImport": false
    }
  ],
  "src/libs/features/faq/src/lib/faq.routes.ts": [
    {
      "path": "chunk-UMCUMGPE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-K4S235FK.js",
      "dynamicImport": true
    }
  ],
  "src/libs/features/privacy-policy/src/lib/pages/privacy-policy.page.ts": [
    {
      "path": "chunk-ZAHNFXOA.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 7770, hash: 'a4413961ec35657a3e0cc37c4f0c3558b3b3595da168014fb324829832168c46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4119, hash: '2885a082b211130d84a172da2fde39e168050aef4e04e30e078fb4343012f906', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YHKECKRS.css': {size: 15612, hash: 'F1EihNZjD1M', text: () => import('./assets-chunks/styles-YHKECKRS_css.mjs').then(m => m.default)}
  },
};
