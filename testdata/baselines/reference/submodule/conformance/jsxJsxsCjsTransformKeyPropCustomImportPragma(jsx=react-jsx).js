//// [tests/cases/conformance/jsx/jsxs/jsxJsxsCjsTransformKeyPropCustomImportPragma.tsx] ////

//// [preact.tsx]
/// <reference path="/.lib/react16.d.ts" />
/* @jsxImportSource preact */
const props = { answer: 42 }
const a = <div key="foo" {...props}>text</div>;
const b = <div {...props} key="bar">text</div>;

export {};

//// [react.tsx]
/// <reference path="/.lib/react16.d.ts" />
/* @jsxImportSource react */
import "./preact";
const props2 = { answer: 42 }
const a2 = <div key="foo" {...props2}>text</div>;
const b2 = <div {...props2} key="bar">text</div>;

export {};


//// [preact.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="react16.d.ts" />
/* @jsxImportSource preact */
const props = { answer: 42 };
const a = <div key="foo" {...props}>text</div>;
const b = <div {...props} key="bar">text</div>;
//// [react.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="react16.d.ts" />
/* @jsxImportSource react */
require("./preact");
const props2 = { answer: 42 };
const a2 = <div key="foo" {...props2}>text</div>;
const b2 = <div {...props2} key="bar">text</div>;
