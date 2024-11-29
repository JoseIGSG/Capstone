self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/QRscanner": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/QRscanner.js"
    ],
    "/ReviewImage": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/ReviewImage.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/entrega-exitosa": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/entrega-exitosa.js"
    ],
    "/envio-confirmacion": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/envio-confirmacion.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];