"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/captura",{

/***/ "./src/pages/captura.js":
/*!******************************!*\
  !*** ./src/pages/captura.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Captura)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Captura() {\n    _s();\n    const [isCameraOn, setIsCameraOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Captura.useEffect\": ()=>{\n            async function setupCamera() {\n                try {\n                    const stream = await navigator.mediaDevices.getUserMedia({\n                        video: {\n                            facingMode: \"environment\"\n                        }\n                    });\n                    if (videoRef.current) {\n                        videoRef.current.srcObject = stream;\n                    }\n                } catch (error) {\n                    console.error('Error al acceder a la cámara:', error);\n                }\n            }\n            if (isCameraOn) {\n                setupCamera();\n            }\n            return ({\n                \"Captura.useEffect\": ()=>{\n                    if (videoRef.current && videoRef.current.srcObject) {\n                        const tracks = videoRef.current.srcObject.getTracks();\n                        tracks.forEach({\n                            \"Captura.useEffect\": (track)=>track.stop()\n                        }[\"Captura.useEffect\"]);\n                    }\n                }\n            })[\"Captura.useEffect\"];\n        }\n    }[\"Captura.useEffect\"], [\n        isCameraOn\n    ]);\n    const handleError = (message)=>{\n        router.push({\n            pathname: '/ups',\n            query: {\n                message: encodeURIComponent(message)\n            }\n        });\n    };\n    const captureImage = async ()=>{\n        if (!videoRef.current) return;\n        const canvas = document.createElement('canvas');\n        canvas.width = videoRef.current.videoWidth;\n        canvas.height = videoRef.current.videoHeight;\n        const context = canvas.getContext('2d');\n        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);\n        canvas.toBlob(async (blob)=>{\n            if (!blob) return;\n            try {\n                // Paso 1: Enviar la imagen a Google Vision AI\n                const formData_ImageProcessing = new FormData();\n                formData_ImageProcessing.append('image', blob, 'photo.jpg');\n                const url_ImageProcessing = 'http://34.46.252.163/api/process-image/';\n                const response_ImageProcessing = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url_ImageProcessing, formData_ImageProcessing);\n                const texto_google = response_ImageProcessing.data.text;\n                console.log('Respuesta de Google Vision AI:', texto_google);\n                // Paso 2: Enviar el texto procesado a OpenAI GPT\n                const url_TextAnalysis = 'http://35.193.164.187/api/analyze-text/';\n                const response_TextAnalysis = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url_TextAnalysis, {\n                    text: texto_google\n                });\n                const codigo_depto = response_TextAnalysis.data.openai_depto;\n                console.log('Respuesta de OpenAI:', codigo_depto);\n                // Paso 3: Consultar los datos del residente\n                const url_ManagementService = 'http://34.29.123.189/api/residente/';\n                const response_ManagementService = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url_ManagementService, {\n                    params: {\n                        codigo_departamento: codigo_depto\n                    }\n                });\n                const nombre_residente = response_ManagementService.data.nombre_completo;\n                console.log('Respuesta de Management:', response_ManagementService.data);\n                // Paso 4: Enviar la notificación\n                const url_Notification = 'http://146.148.75.57/api/notifications/send/';\n                const formData_Notification = new FormData();\n                formData_Notification.append('codigo_departamento', codigo_depto);\n                formData_Notification.append('image', blob, 'photo.jpg');\n                const response_Notification = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url_Notification, formData_Notification, {\n                    headers: {\n                        'Content-Type': 'multipart/form-data'\n                    }\n                });\n                console.log('Respuesta de Notificaciones:', response_Notification.data);\n                const mensaje_Notificacion = \"Se ha notificado a \".concat(nombre_residente, \", residente del departamento \").concat(codigo_depto, \".\");\n                alert(mensaje_Notificacion);\n                router.push('/envio-confirmacion');\n            } catch (error) {\n                console.error('Error en el flujo:', error);\n                handleError('Error en la comunicación con el backend. Intente nuevamente.');\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Captura una Etiqueta\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            isCameraOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        ref: videoRef,\n                        autoPlay: true,\n                        playsInline: true,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().video)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n                        lineNumber: 110,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: captureImage,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().captureButton),\n                        children: \"Capturar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n                        lineNumber: 111,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsCameraOn(true),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                children: \"Iniciar C\\xe1mara\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n                lineNumber: 116,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().backButton),\n                onClick: ()=>router.push('/'),\n                children: \"← Volver\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\captura.js\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_s(Captura, \"gWGTJKpfI8clruLwS43jJJeJmSI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Captura;\nvar _c;\n$RefreshReg$(_c, \"Captura\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XFxFc2NyaXRvcmlvXFxEVU9DIFJBTU9TXFxDQVBTVE9ORVxcUmVwb3NpdG9yaW9zXFxmZS1hcHBjb25zZXJqZVxcRnJvbnQgTm9kZSBKU1xcc3JjXFxwYWdlc1xcY2FwdHVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcHR1cmEoKSB7XHJcbiAgICBjb25zdCBbaXNDYW1lcmFPbiwgc2V0SXNDYW1lcmFPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBDYW1lcmEoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB7IGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGFjY2VkZXIgYSBsYSBjw6FtYXJhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2FtZXJhT24pIHtcclxuICAgICAgICAgICAgc2V0dXBDYW1lcmEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50ICYmIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFja3MgPSB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdC5nZXRUcmFja3MoKTtcclxuICAgICAgICAgICAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW2lzQ2FtZXJhT25dKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy91cHMnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBtZXNzYWdlOiBlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSkgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZUltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdmlkZW9SZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb1JlZi5jdXJyZW50LnZpZGVvV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZGVvUmVmLmN1cnJlbnQudmlkZW9IZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvUmVmLmN1cnJlbnQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFibG9iKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFzbyAxOiBFbnZpYXIgbGEgaW1hZ2VuIGEgR29vZ2xlIFZpc2lvbiBBSVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGFfSW1hZ2VQcm9jZXNzaW5nID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV9JbWFnZVByb2Nlc3NpbmcuYXBwZW5kKCdpbWFnZScsIGJsb2IsICdwaG90by5qcGcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxfSW1hZ2VQcm9jZXNzaW5nID0gJ2h0dHA6Ly8zNC40Ni4yNTIuMTYzL2FwaS9wcm9jZXNzLWltYWdlLyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZV9JbWFnZVByb2Nlc3NpbmcgPSBhd2FpdCBheGlvcy5wb3N0KHVybF9JbWFnZVByb2Nlc3NpbmcsIGZvcm1EYXRhX0ltYWdlUHJvY2Vzc2luZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0b19nb29nbGUgPSByZXNwb25zZV9JbWFnZVByb2Nlc3NpbmcuZGF0YS50ZXh0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3B1ZXN0YSBkZSBHb29nbGUgVmlzaW9uIEFJOicsIHRleHRvX2dvb2dsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGFzbyAyOiBFbnZpYXIgZWwgdGV4dG8gcHJvY2VzYWRvIGEgT3BlbkFJIEdQVFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsX1RleHRBbmFseXNpcyA9ICdodHRwOi8vMzUuMTkzLjE2NC4xODcvYXBpL2FuYWx5emUtdGV4dC8nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VfVGV4dEFuYWx5c2lzID0gYXdhaXQgYXhpb3MucG9zdCh1cmxfVGV4dEFuYWx5c2lzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dG9fZ29vZ2xlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kaWdvX2RlcHRvID0gcmVzcG9uc2VfVGV4dEFuYWx5c2lzLmRhdGEub3BlbmFpX2RlcHRvO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3B1ZXN0YSBkZSBPcGVuQUk6JywgY29kaWdvX2RlcHRvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQYXNvIDM6IENvbnN1bHRhciBsb3MgZGF0b3MgZGVsIHJlc2lkZW50ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsX01hbmFnZW1lbnRTZXJ2aWNlID0gJ2h0dHA6Ly8zNC4yOS4xMjMuMTg5L2FwaS9yZXNpZGVudGUvJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlX01hbmFnZW1lbnRTZXJ2aWNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybF9NYW5hZ2VtZW50U2VydmljZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb2RpZ29fZGVwYXJ0YW1lbnRvOiBjb2RpZ29fZGVwdG8gfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vbWJyZV9yZXNpZGVudGUgPSByZXNwb25zZV9NYW5hZ2VtZW50U2VydmljZS5kYXRhLm5vbWJyZV9jb21wbGV0bztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwdWVzdGEgZGUgTWFuYWdlbWVudDonLCByZXNwb25zZV9NYW5hZ2VtZW50U2VydmljZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQYXNvIDQ6IEVudmlhciBsYSBub3RpZmljYWNpw7NuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxfTm90aWZpY2F0aW9uID0gJ2h0dHA6Ly8xNDYuMTQ4Ljc1LjU3L2FwaS9ub3RpZmljYXRpb25zL3NlbmQvJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhX05vdGlmaWNhdGlvbiA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGFfTm90aWZpY2F0aW9uLmFwcGVuZCgnY29kaWdvX2RlcGFydGFtZW50bycsIGNvZGlnb19kZXB0byk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV9Ob3RpZmljYXRpb24uYXBwZW5kKCdpbWFnZScsIGJsb2IsICdwaG90by5qcGcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZV9Ob3RpZmljYXRpb24gPSBhd2FpdCBheGlvcy5wb3N0KHVybF9Ob3RpZmljYXRpb24sIGZvcm1EYXRhX05vdGlmaWNhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3B1ZXN0YSBkZSBOb3RpZmljYWNpb25lczonLCByZXNwb25zZV9Ob3RpZmljYXRpb24uZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVuc2FqZV9Ob3RpZmljYWNpb24gPSBgU2UgaGEgbm90aWZpY2FkbyBhICR7bm9tYnJlX3Jlc2lkZW50ZX0sIHJlc2lkZW50ZSBkZWwgZGVwYXJ0YW1lbnRvICR7Y29kaWdvX2RlcHRvfS5gO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQobWVuc2FqZV9Ob3RpZmljYWNpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZW52aW8tY29uZmlybWFjaW9uJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbiBlbCBmbHVqbzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcignRXJyb3IgZW4gbGEgY29tdW5pY2FjacOzbiBjb24gZWwgYmFja2VuZC4gSW50ZW50ZSBudWV2YW1lbnRlLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDE+Q2FwdHVyYSB1bmEgRXRpcXVldGE8L2gxPlxyXG4gICAgICAgICAgICB7aXNDYW1lcmFPbiA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IHBsYXlzSW5saW5lIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvfT48L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZUltYWdlfSBjbGFzc05hbWU9e3N0eWxlcy5jYXB0dXJlQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdHVyYXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0NhbWVyYU9uKHRydWUpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEluaWNpYXIgQ8OhbWFyYVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICAgICAgICDihpAgVm9sdmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInN0eWxlcyIsIkNhcHR1cmEiLCJpc0NhbWVyYU9uIiwic2V0SXNDYW1lcmFPbiIsInZpZGVvUmVmIiwicm91dGVyIiwic2V0dXBDYW1lcmEiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImZhY2luZ01vZGUiLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsImhhbmRsZUVycm9yIiwibWVzc2FnZSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY2FwdHVyZUltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvQmxvYiIsImJsb2IiLCJmb3JtRGF0YV9JbWFnZVByb2Nlc3NpbmciLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybF9JbWFnZVByb2Nlc3NpbmciLCJyZXNwb25zZV9JbWFnZVByb2Nlc3NpbmciLCJwb3N0IiwidGV4dG9fZ29vZ2xlIiwiZGF0YSIsInRleHQiLCJsb2ciLCJ1cmxfVGV4dEFuYWx5c2lzIiwicmVzcG9uc2VfVGV4dEFuYWx5c2lzIiwiY29kaWdvX2RlcHRvIiwib3BlbmFpX2RlcHRvIiwidXJsX01hbmFnZW1lbnRTZXJ2aWNlIiwicmVzcG9uc2VfTWFuYWdlbWVudFNlcnZpY2UiLCJnZXQiLCJwYXJhbXMiLCJjb2RpZ29fZGVwYXJ0YW1lbnRvIiwibm9tYnJlX3Jlc2lkZW50ZSIsIm5vbWJyZV9jb21wbGV0byIsInVybF9Ob3RpZmljYXRpb24iLCJmb3JtRGF0YV9Ob3RpZmljYXRpb24iLCJyZXNwb25zZV9Ob3RpZmljYXRpb24iLCJoZWFkZXJzIiwibWVuc2FqZV9Ob3RpZmljYWNpb24iLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwicmVmIiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYXB0dXJlQnV0dG9uIiwiYmFja0J1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/captura.js\n"));

/***/ })

});