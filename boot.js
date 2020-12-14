/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3669:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filter = void 0;
const filter = (ctx, arg) => {
    const { filter } = ctx.state.keoda;
    if (filter && filter.type === arg.type && filter.key === arg.key) {
        delete ctx.state.keoda.filter;
    }
    else {
        ctx.state.keoda.filter = arg;
    }
};
exports.filter = filter;


/***/ }),

/***/ 8131:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hideFloat = exports.float = void 0;
const float = (ctx, arg) => {
    const { float } = ctx.state.keoda;
    if (float && float.id === arg.id && !float.hidden) {
        // ignore
    }
    else {
        ctx.state.keoda.float = arg;
    }
};
exports.float = float;
const hideFloat = (ctx, arg) => {
    const { float } = ctx.state.keoda;
    if (!float || float.hidden || arg.id !== float.id) {
        return;
    }
    float.hidden = true;
};
exports.hideFloat = hideFloat;


/***/ }),

/***/ 5584:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3669), exports);
__exportStar(__webpack_require__(8131), exports);
__exportStar(__webpack_require__(4634), exports);


/***/ }),

/***/ 4634:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.select = void 0;
const select = (ctx, arg) => {
    ctx.state.keoda.selected = arg.name;
};
exports.select = select;


/***/ }),

/***/ 8903:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useOvermind = exports.styled = void 0;
const overmind_react_1 = __webpack_require__(5115);
const styled_components_1 = __importDefault(__webpack_require__(9163));
exports.styled = styled_components_1.default;
exports.useOvermind = overmind_react_1.createHook();


/***/ }),

/***/ 7177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderApp = void 0;
const overmind_1 = __webpack_require__(2325);
const overmind_react_1 = __webpack_require__(5115);
const React = __importStar(__webpack_require__(7294));
const ReactDOM = __importStar(__webpack_require__(3935));
const actions = __importStar(__webpack_require__(5584));
const components_1 = __webpack_require__(5548);
const db_json_1 = __webpack_require__(5790);
__webpack_require__(1307);
const config = {
    onInitialize(ctx) {
        window.addEventListener('hashchange', function (e) {
            const name = window.location.hash.replace('#', '');
            ctx.actions.keoda.select({ name });
        });
    },
    state: {
        keoda: {
            entries: db_json_1.entries,
            phrases: db_json_1.phrases,
            lexicon: Object.keys(db_json_1.entries).sort(),
        },
    },
    actions: {
        keoda: actions,
    },
};
function renderApp() {
    try {
        ReactDOM.render(React.createElement(overmind_react_1.Provider, { value: new overmind_1.Overmind(config, { devtools: false }) },
            React.createElement(components_1.App, null)), document.querySelector('#root'));
    }
    catch (err) {
        console.error(err);
        const root = document.querySelector('#root .loader');
        if (root) {
            root.innerHTML = `Could not load app`;
        }
    }
}
exports.renderApp = renderApp;
renderApp();


/***/ }),

/***/ 8333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const app_1 = __webpack_require__(8903);
const React = __importStar(__webpack_require__(7294));
const Entry_1 = __webpack_require__(1951);
const Float_1 = __webpack_require__(6370);
const Wrapper = app_1.styled.div `
  /* styles here */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const App = ({ className }) => {
    const ctx = app_1.useOvermind();
    const { lexicon } = ctx.state.keoda;
    return (React.createElement(React.Fragment, null,
        React.createElement(Float_1.Float, null),
        React.createElement(Wrapper, { className: className }, lexicon.map(name => (React.createElement(Entry_1.Entry, { key: name, id: name }))))));
};
exports.App = App;


/***/ }),

/***/ 1951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Entry = exports.ID = void 0;
const app_1 = __webpack_require__(8903);
const classnames_1 = __importDefault(__webpack_require__(4184));
const React = __importStar(__webpack_require__(7294));
const List_1 = __webpack_require__(8931);
const types_1 = __webpack_require__(3673);
const Markdown_1 = __webpack_require__(5526);
const Wrapper = app_1.styled.div `
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  border: 1px solid #444;
  background: #aba89c;
  margin: 14px;
  border-radius: 5px;
  align-items: start;
  width: 450px;
  align-self: top;
  box-shadow: 0 0 10px #0000001f;
  &.card {
    min-width: 600px;
    flex-grow: 1;
  }
  &.selected:not(.popup) > .Name {
    background: #e4d593;
  }
  &.popup {
    box-shadow: 8px 8px 20px #00000070;
    margin: 0;
    top: 30px;
    left: -25px;
    z-index: 3;
  }
`;
const ArrowUp = app_1.styled.div `
  width: 15px;
  height: 15px;
  border: 1px solid rgb(68, 68, 68);
  border-width: 1px 1px 0 0;
  background: rgb(214, 211, 198);
  transform: rotate(-45deg);
  top: -9px;
  left: 15px;
  position: absolute;
`;
const Name = app_1.styled.div `
  transition: background-color 0.8s;
  padding: 12px 0 0 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-weight: bold;
  background: #d6d3c6;
  align-self: stretch;
  width: 7rem;
  flex-shrink: 0;
  flex-grow: 0;
  color: #333;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  & span {
    align-self: top;
  }
`;
const Definitions = app_1.styled.div `
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-self: stretch;
  border-left: 1px solid #7b7b7b;
`;
const Definition = app_1.styled.div `
  display: flex;
  flex-direction: row;
  padding: 5px;
  &.desc {
    border-top: 1px solid #888;
    line-height: 1.3rem;
    font-style: italic;
    color: #555;
    display: block;
    h1 {
      font-size: 1.6rem;
      font-style: normal;
      color: #444;
      margin-top: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      font-style: normal;
      color: inherit;
      margin-top: 2rem;
    }
    code {
      color: #222;
      font-style: normal;
      font-size: 90%;
      font-family: 'Fira Code', Courier, monospace;
      background: #bfbcb1;
      padding: 3px 5px;
      display: inline-block;
      border-radius: 2px;
    }
    em {
      font-weight: bold;
    }
  }
`;
const DefType = app_1.styled.div `
  cursor: pointer;
  padding: 5px 20px 5px 0;
  font-weight: bold;
  width: 4rem;
  flex-shrink: 0;
  color: red;
  &.selected {
    border-left: 4px solid #8a847a;
    position: relative;
    left: -4px;
  }
  &.etym {
    color: #222;
  }
  &.noun {
    color: #28467d;
  }
  &.verb {
    color: #883ea7;
  }
  &.adj {
    color: #149a32;
  }
  &.conj {
    color: #b7ec34;
  }
  &.prefix {
    color: #444;
  }
  &.suffix {
    color: #444;
  }
  &.prep {
    color: #944;
  }
  &.pron {
    color: #494;
  }
  &.tens {
    color: #499;
  }
  &.lang {
    color: #444;
  }
  &.posit {
    color: pink;
  }
  &.deriv {
    color: #666;
  }
  &.see {
    color: #666;
  }
  text-align: right;
`;
const DefText = app_1.styled.div `
  padding: 5px;
  color: #333;
  font-style: italic;
`;
exports.ID = app_1.styled.a `
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`;
const Entry = ({ className, id, popup }) => {
    const ctx = app_1.useOvermind();
    const { filter } = ctx.state.keoda;
    const entry = ctx.state.keoda.entries[id];
    if (!entry) {
        // Should never happen
        return null;
    }
    let highKey;
    if (filter) {
        const { type, key } = filter;
        if (type === 'type') {
            if (!entry[key]) {
                return null;
            }
            highKey = key;
        }
        else {
            if (!entry.fulltext.includes(key)) {
                return null;
            }
        }
    }
    return (React.createElement(Wrapper, { className: classnames_1.default(entry.type, className, {
            popup,
            selected: id === ctx.state.keoda.selected,
        }) },
        popup ? React.createElement(ArrowUp, null) : React.createElement(exports.ID, { id: id }),
        React.createElement(Name, { className: "Name" },
            React.createElement("span", null, entry.name)),
        React.createElement(Definitions, null,
            types_1.DEF_KEYS.map(key => entry[key] ? (React.createElement(Definition, { key: key },
                React.createElement(DefType, { className: classnames_1.default(key, { selected: key === highKey }), onClick: () => ctx.actions.keoda.filter({ type: 'type', key }) }, key),
                key === 'etym' || key === 'see' || key === 'deriv' ? (React.createElement(List_1.List, { className: key, entries: entry[key] })) : (React.createElement(DefText, null, entry[key])))) : null),
            entry.desc && (React.createElement(Definition, { className: "desc" },
                React.createElement(Markdown_1.Markdown, { text: entry.desc }))))));
};
exports.Entry = Entry;


/***/ }),

/***/ 6370:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Float = void 0;
const app_1 = __webpack_require__(8903);
const classnames_1 = __importDefault(__webpack_require__(4184));
const React = __importStar(__webpack_require__(7294));
const Entry_1 = __webpack_require__(1951);
const INIT = {
    hidden: true,
    id: '',
    position: {
        top: 0,
        left: 0,
    },
};
const Wrapper = app_1.styled.div `
  pointer-events: none;
  position: fixed;
  opacity: 1;
  z-index: 99;
  &:not(.hidden) {
    visibility: visible;
    transition: top 0.2s ease-in, left 0.2s ease-in, opacity 0.2s ease-in,
      visibility 0.2s ease-in;
  }
  &.hidden {
    visibility: hidden;
    transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
    opacity: 0;
  }
`;
const Float = ({ className }) => {
    const ctx = app_1.useOvermind();
    const [isHidden, setHidden] = React.useState(true);
    const { float } = ctx.state.keoda;
    const { id, position, hidden } = float || INIT;
    if (!hidden && isHidden) {
        // This is to avoid initial slide while float appears
        setTimeout(() => {
            setHidden(false);
        });
    }
    else if (hidden && !isHidden) {
        setHidden(true);
    }
    return (React.createElement(Wrapper, { className: classnames_1.default(className, { hidden: isHidden }), style: position },
        React.createElement(Entry_1.Entry, { id: id, popup: true })));
};
exports.Float = Float;


/***/ }),

/***/ 721:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Link = void 0;
const classnames_1 = __importDefault(__webpack_require__(4184));
const React = __importStar(__webpack_require__(7294));
const app_1 = __webpack_require__(8903);
const Phrase_1 = __webpack_require__(9310);
// TODO: Merge with Anchor
const Wrapper = app_1.styled.span `
  cursor: pointer;
  color: #546161;
  font-style: normal;
  align-self: start;
  &.ref {
    color: #2c383c;
    font-weight: bold;
  }
  &:not(.ref) {
    border-bottom: 1px solid #397d7d;
  }
`;
const Anchor = app_1.styled.a `
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #397d7d;
  }
`;
const Link = ({ className, id, fromMd }) => {
    const ctx = app_1.useOvermind();
    const [type] = id.split('-');
    if (type === 'phrase') {
        return React.createElement(Phrase_1.Phrase, { id: id });
    }
    const entry = ctx.state.keoda.entries[id];
    if (!entry) {
        return null;
    }
    const ref = entry.alt || id;
    let timer;
    return (React.createElement(Wrapper, { className: classnames_1.default('Link', className, { ref: fromMd }), onMouseEnter: e => {
            const r = e.currentTarget.getBoundingClientRect();
            if (!ctx.state.keoda.float || ctx.state.keoda.float.hidden) {
                timer = setTimeout(() => {
                    ctx.actions.keoda.float({
                        id: ref,
                        position: { top: r.top + r.height, left: r.left + r.width / 2 },
                    });
                }, 500);
            }
            else {
                ctx.actions.keoda.float({
                    id: ref,
                    position: { top: r.top + r.height, left: r.left + r.width / 2 },
                });
            }
        }, onMouseLeave: e => {
            if (timer) {
                clearTimeout(timer);
                timer = undefined;
            }
            setTimeout(() => {
                ctx.actions.keoda.hideFloat({ id: ref });
            }, 500);
        } },
        React.createElement(Anchor, { href: `#${ref}` }, entry.name)));
};
exports.Link = Link;


/***/ }),

/***/ 8931:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.List = exports.GlossAndLink = exports.ListWrapper = void 0;
const React = __importStar(__webpack_require__(7294));
const classnames_1 = __importDefault(__webpack_require__(4184));
const app_1 = __webpack_require__(8903);
const Link_1 = __webpack_require__(721);
exports.ListWrapper = app_1.styled.div `
  flex-wrap: wrap;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
  &.etym a {
    color: #222;
    font-weight: bold;
  }
  &.phrase {
    display: inline-block;
    margin: 0;
  }
  &.phrase.glo {
    display: flex;
    flex-direction: row;
    background: #d0cdc2;
    border-radius: 4px;
    border: 1px solid #333;
    padding: 5px;
  }
  & .Link:not(:last-child) {
    margin-right: 8px;
  }
`;
const Glo = app_1.styled.div `
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin: 8px 15px;
`;
const Gloss = app_1.styled.div `
  font-style: normal;
`;
const GlossAndLink = props => {
    const ctx = app_1.useOvermind();
    const entry = ctx.state.keoda.entries[props.id];
    if (!entry) {
        return null;
    }
    return (React.createElement(Glo, null,
        React.createElement(Link_1.Link, Object.assign({}, props)),
        React.createElement(Gloss, null, entry.glo)));
};
exports.GlossAndLink = GlossAndLink;
const List = ({ className, entries, phrase, glo, }) => {
    return (React.createElement(exports.ListWrapper, { className: classnames_1.default(className, { phrase, glo }) }, entries.map(key => glo ? (React.createElement(exports.GlossAndLink, { id: key, fromMd: phrase })) : (React.createElement(Link_1.Link, { id: key, fromMd: phrase })))));
};
exports.List = List;


/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Markdown = void 0;
const React = __importStar(__webpack_require__(7294));
const react_markdown_1 = __importDefault(__webpack_require__(724));
const app_1 = __webpack_require__(8903);
const Link_1 = __webpack_require__(721);
const renderers = {
    link: ({ href }) => React.createElement(Link_1.Link, { id: href, fromMd: true }),
};
const Markdown = ({ className, text }) => {
    const ctx = app_1.useOvermind();
    // {text}
    return React.createElement(react_markdown_1.default, { renderers: renderers }, text);
};
exports.Markdown = Markdown;


/***/ }),

/***/ 9310:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Phrase = void 0;
const React = __importStar(__webpack_require__(7294));
const app_1 = __webpack_require__(8903);
const List_1 = __webpack_require__(8931);
const Wrapper = app_1.styled.div `
  position: relative;
  display: inline-flex;
  color: #222;
  &:hover .Trad {
    opacity: 0;
    visibility: hidden;
  }
`;
const Trad = app_1.styled.div `
  transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0.5s;
  position: absolute;
  opacity: 1;
  visibility: visible;
  top: -32px;
  left: 23px;
  z-index: 2;
  color: #333;
  background: #d0cdc2;
  white-space: nowrap;
  padding: 8px 16px 3px;
  border-radius: 4px 4px 0px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #333 #333 #d0cdc2;
  border-image: initial;
  font-style: normal;
`;
const Info = app_1.styled.div `
  cursor: pointer;
  font-style: normal;
  transform: translate(0, -1px);
  opacity: 0.5;
  font-size: 64%;
  filter: grayscale(80%);
  transition: filter 0.3s;
  &:hover {
    opacity: 0.7;
    filter: grayscale(0%);
  }
  &.glo {
    opacity: 1;
    filter: grayscale(0%);
  }
`;
const GWrap = app_1.styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
const Phrase = ({ className, id }) => {
    const ctx = app_1.useOvermind();
    const [glo, setGlo] = React.useState(false);
    const { entries } = ctx.state.keoda;
    const phrase = ctx.state.keoda.phrases[id];
    return (React.createElement(Wrapper, { className: className },
        React.createElement(Info, { onClick: () => setGlo(!glo), className: glo ? 'glo' : '' }, "\u2139\uFE0F"),
        glo ? (React.createElement(GWrap, null,
            React.createElement(Trad, { className: "Trad" }, phrase.phrase),
            React.createElement(List_1.List, { phrase: true, entries: phrase.see, glo: glo }))) : (React.createElement(List_1.List, { phrase: true, entries: phrase.see, glo: glo }))));
};
exports.Phrase = Phrase;


/***/ }),

/***/ 5548:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8333), exports);
__exportStar(__webpack_require__(1951), exports);
__exportStar(__webpack_require__(6370), exports);
__exportStar(__webpack_require__(721), exports);
__exportStar(__webpack_require__(8931), exports);
__exportStar(__webpack_require__(9310), exports);


/***/ }),

/***/ 3673:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEF_KEYS = exports.FULLTEXT_KEYS = void 0;
exports.FULLTEXT_KEYS = [
    'conj',
    'noun',
    'verb',
    'adj',
    'prefix',
    'suffix',
    'prep',
    'pron',
    'tens',
    'lang',
    'posit',
    'adv',
    'person',
];
exports.DEF_KEYS = [
    'etym',
    ...exports.FULLTEXT_KEYS,
    'deriv',
    'see',
];


/***/ }),

/***/ 5790:
/***/ ((module) => {

module.exports = JSON.parse("{\"entries\":{\"word-a\":{\"name\":\"a\",\"id\":\"word-a\",\"type\":\"word\",\"prep\":\"à (elle, lui)\",\"conj\":\"iel (3s)\",\"fulltext\":\"a ahada oho iel (3s) à (elle, lui)\",\"glo\":\"à (elle, lui)\",\"deriv\":[\"word-ahada\",\"word-oho\"]},\"word-ahada\":{\"name\":\"ahada\",\"id\":\"word-ahada\",\"type\":\"word\",\"noun\":\"elle/lui poétique\",\"etym\":[\"word-a\",\"word-yada\"],\"fulltext\":\"ahada word-a word-yada elle/lui poétique\",\"glo\":\"elle/lui poétique\"},\"word-ahe\":{\"name\":\"ahe\",\"id\":\"word-ahe\",\"type\":\"word\",\"glo\":\"3SG.être\",\"see\":[\"word-a\",\"word-e\"],\"fulltext\":\"ahe a e\"},\"word-yada\":{\"name\":\"yada\",\"id\":\"word-yada\",\"type\":\"word\",\"noun\":\"corps rêvé, poétique (corps de nuit)\",\"desc\":\"si le corps visible, c'est [oda](word-oda), le corps profond, intime, poétique, identitaire, \\\"subconscient\\\" comme dirait Julia Serano, c'est [yada](word-yada).\",\"etym\":[\"word-ya\",\"word-oda\"],\"fulltext\":\"yada word-ya word-oda si le corps visible, c'est [oda](word-oda), le corps profond, intime, poétique, identitaire, \\\"subconscient\\\" comme dirait Julia Serano, c'est [yada](word-yada). ahada piha iha oha shaha shiha shoha corps rêvé, poétique (corps de nuit)\",\"glo\":\"corps rêvé, poétique (corps de nuit)\",\"deriv\":[\"word-ahada\",\"word-piha\",\"word-iha\",\"word-oha\",\"word-shaha\",\"word-shiha\",\"word-shoha\"]},\"word-piha\":{\"name\":\"piha\",\"id\":\"word-piha\",\"type\":\"word\",\"noun\":\"moi poétique (mythique, profond)\",\"etym\":[\"word-pi\",\"word-yada\"],\"fulltext\":\"piha word-pi word-yada moi poétique (mythique, profond)\",\"glo\":\"moi poétique (mythique, profond)\"},\"word-yadaguitoda\":{\"name\":\"yadaguitoda\",\"id\":\"word-yadaguitoda\",\"type\":\"word\",\"noun\":\"corps poétique féminin né dans un corps masculin (femme trans)\",\"fulltext\":\"yadaguitoda corps poétique féminin né dans un corps masculin (femme trans)\",\"glo\":\"corps poétique féminin né dans un corps masculin (femme trans)\"},\"word-yaguito\":{\"name\":\"yaguito\",\"id\":\"word-yaguito\",\"type\":\"word\",\"noun\":\"version courte pour femme trans (femme née dans un corps homme)\",\"fulltext\":\"yaguito version courte pour femme trans (femme née dans un corps homme)\",\"glo\":\"version courte pour femme trans (femme née dans un corps homme)\"},\"word-tadaguiyoda\":{\"name\":\"tadaguiyoda\",\"id\":\"word-tadaguiyoda\",\"type\":\"word\",\"noun\":\"corps poétique masculin né dans un corps féminin (homme trans)\",\"fulltext\":\"tadaguiyoda corps poétique masculin né dans un corps féminin (homme trans)\",\"glo\":\"corps poétique masculin né dans un corps féminin (homme trans)\"},\"word-taguiyo\":{\"name\":\"taguiyo\",\"id\":\"word-taguiyo\",\"type\":\"word\",\"noun\":\"version courte pour homme trans (homme né dans un corps femme)\",\"fulltext\":\"taguiyo version courte pour homme trans (homme né dans un corps femme)\",\"glo\":\"version courte pour homme trans (homme né dans un corps femme)\"},\"word-adu\":{\"name\":\"adu\",\"id\":\"word-adu\",\"type\":\"word\",\"noun\":\"proche, ami\",\"fulltext\":\"adu proche, ami\",\"glo\":\"proche, ami\"},\"word-doda\":{\"name\":\"doda\",\"id\":\"word-doda\",\"type\":\"word\",\"noun\":\"petit.e frère/soeur\",\"etym\":[\"word-du\",\"word-oda\"],\"fulltext\":\"doda word-du word-oda dudapan petit.e frère/soeur\",\"glo\":\"petit.e frère/soeur\",\"deriv\":[\"word-dudapan\"]},\"word-aga\":{\"name\":\"aga\",\"id\":\"word-aga\",\"type\":\"word\",\"noun\":\"musique\",\"fulltext\":\"aga agana agade ago musique\",\"glo\":\"musique\",\"deriv\":[\"word-agana\",\"word-agade\",\"word-ago\"]},\"word-agana\":{\"name\":\"agana\",\"id\":\"word-agana\",\"type\":\"word\",\"noun\":\"son (la chose musique incarnée)\",\"etym\":[\"word-aga\",\"word-na\"],\"fulltext\":\"agana word-aga word-na agauki son (la chose musique incarnée)\",\"glo\":\"son (la chose musique incarnée)\",\"deriv\":[\"word-agauki\"]},\"word-agade\":{\"name\":\"agade\",\"id\":\"word-agade\",\"type\":\"word\",\"noun\":\"écho (deux sons)\",\"etym\":[\"word-aga\",\"word-de\"],\"fulltext\":\"agade word-aga word-de écho (deux sons)\",\"glo\":\"écho (deux sons)\"},\"word-agauki\":{\"name\":\"agauki\",\"id\":\"word-agauki\",\"type\":\"word\",\"verb\":\"résonner (le son long)\",\"etym\":[\"word-agana\",\"word-uki\"],\"fulltext\":\"agauki word-agana word-uki agaukida résonner (le son long)\",\"glo\":\"résonner (le son long)\",\"deriv\":[\"word-agaukida\"]},\"word-agaukida\":{\"name\":\"agaukida\",\"id\":\"word-agaukida\",\"type\":\"word\",\"noun\":\"temple (le lieu qui résonne)\",\"glo\":\"temple\",\"etym\":[\"word-agauki\",\"word-da\"],\"fulltext\":\"agaukida word-agauki word-da temple (le lieu qui résonne)\"},\"word-ago\":{\"name\":\"ago\",\"id\":\"word-ago\",\"type\":\"word\",\"noun\":\"rythme\",\"etym\":[\"word-aga\",\"word-o\"],\"desc\":\"Musique frappée.\",\"fulltext\":\"ago word-aga word-o Musique frappée. rythme\",\"glo\":\"rythme\"},\"word-agu\":{\"name\":\"agu\",\"id\":\"word-agu\",\"type\":\"word\",\"noun\":\"oreille\",\"verb\":\"écouter\",\"fulltext\":\"agu agupeu oreille écouter\",\"glo\":\"oreille\",\"deriv\":[\"word-agupeu\"]},\"word-aj\":{\"name\":\"aj\",\"id\":\"word-aj\",\"type\":\"word\",\"noun\":\"feu\",\"verb\":\"brûler\",\"fulltext\":\"aj ajapi laj taj yaj feu brûler\",\"glo\":\"feu\",\"deriv\":[\"word-ajapi\",\"word-laj\",\"word-taj\",\"word-yaj\"]},\"word-ajapi\":{\"name\":\"ajapi\",\"id\":\"word-ajapi\",\"type\":\"word\",\"noun\":\"calcination de soi, transformation totale\",\"etym\":[\"word-aj\",\"word-pi\"],\"fulltext\":\"ajapi word-aj word-pi calcination de soi, transformation totale\",\"glo\":\"calcination de soi, transformation totale\"},\"word-al\":{\"name\":\"al\",\"id\":\"word-al\",\"type\":\"word\",\"noun\":\"ciel\",\"prefix\":\"en haut, vers le ciel ou la tête\",\"fulltext\":\"al alayin ciel en haut, vers le ciel ou la tête\",\"glo\":\"ciel\",\"deriv\":[\"word-alayin\"]},\"word-alayin\":{\"name\":\"alayin\",\"id\":\"word-alayin\",\"type\":\"word\",\"noun\":\"haut du vagin\",\"etym\":[\"word-du\",\"word-al\",\"word-yin\"],\"fulltext\":\"alayin word-du word-al word-yin dualayin haut du vagin\",\"glo\":\"haut du vagin\",\"deriv\":[\"word-dualayin\"]},\"word-dualayin\":{\"name\":\"dualayin\",\"id\":\"word-dualayin\",\"type\":\"word\",\"noun\":\"point G\",\"etym\":[\"word-du\",\"word-alayin\"],\"fulltext\":\"dualayin word-du word-alayin dalayin point G\",\"glo\":\"point G\",\"deriv\":[\"word-dalayin\"]},\"word-dalayin\":{\"name\":\"dalayin\",\"id\":\"word-dalayin\",\"type\":\"word\",\"noun\":\"point G (version courte)\",\"etym\":[\"word-dualayin\"],\"fulltext\":\"dalayin word-dualayin point G (version courte)\",\"glo\":\"point G (version courte)\"},\"word-ana\":{\"name\":\"ana\",\"id\":\"word-ana\",\"type\":\"word\",\"noun\":\"arbre\",\"adj\":\"féminin\",\"fulltext\":\"ana anawi duna nona arbre féminin\",\"glo\":\"arbre\",\"deriv\":[\"word-anawi\",\"word-duna\",\"word-nona\"]},\"word-anawi\":{\"name\":\"anawi\",\"id\":\"word-anawi\",\"type\":\"word\",\"noun\":\"meduse\",\"etym\":[\"word-ana\",\"word-awi\"],\"fulltext\":\"anawi word-ana word-awi meduse\",\"glo\":\"meduse\"},\"word-anoda\":{\"name\":\"anoda\",\"id\":\"word-anoda\",\"type\":\"word\",\"noun\":\"femme\",\"fulltext\":\"anoda femme\",\"glo\":\"femme\"},\"word-anoto\":{\"name\":\"anoto\",\"id\":\"word-anoto\",\"type\":\"word\",\"noun\":\"femme-homme\",\"fulltext\":\"anoto femme-homme\",\"glo\":\"femme-homme\"},\"word-aniwi\":{\"name\":\"aniwi\",\"id\":\"word-aniwi\",\"type\":\"word\",\"noun\":\"femme-enby\",\"fulltext\":\"aniwi femme-enby\",\"glo\":\"femme-enby\"},\"word-au\":{\"name\":\"au\",\"id\":\"word-au\",\"type\":\"word\",\"noun\":\"coeur\",\"verb\":\"aimer/recevoir\",\"fulltext\":\"au aupa augu aupi coeur aimer/recevoir\",\"glo\":\"coeur\",\"deriv\":[\"word-aupa\",\"word-augu\",\"word-aupi\"]},\"word-auhu\":{\"name\":\"auhu\",\"id\":\"word-auhu\",\"type\":\"word\",\"noun\":\"tomber amoureux.se, attraction du cœur\",\"fulltext\":\"auhu tomber amoureux.se, attraction du cœur\",\"glo\":\"tomber amoureux.se, attraction du cœur\"},\"word-aupa\":{\"name\":\"aupa\",\"id\":\"word-aupa\",\"type\":\"word\",\"noun\":\"gratitude (aimer tout)\",\"etym\":[\"word-au\",\"word-pa\"],\"fulltext\":\"aupa word-au word-pa gratitude (aimer tout)\",\"glo\":\"gratitude (aimer tout)\"},\"word-awi\":{\"name\":\"awi\",\"id\":\"word-awi\",\"type\":\"word\",\"noun\":\"poisson\",\"verb\":\"briller\",\"adj\":\"belle/beau\",\"fulltext\":\"awi anawi mawi awiu gawi kawi munawi poisson briller belle/beau\",\"glo\":\"poisson\",\"deriv\":[\"word-anawi\",\"word-mawi\",\"word-awiu\",\"word-gawi\",\"word-kawi\",\"word-munawi\"]},\"word-mawi\":{\"name\":\"mawi\",\"id\":\"word-mawi\",\"type\":\"word\",\"noun\":\"dauphin\",\"etym\":[\"word-moon\",\"word-awi\"],\"fulltext\":\"mawi word-moon word-awi dauphin\",\"glo\":\"dauphin\"},\"word-awiu\":{\"name\":\"awiu\",\"id\":\"word-awiu\",\"type\":\"word\",\"noun\":\"nager\",\"etym\":[\"word-awi\",\"word-u\"],\"fulltext\":\"awiu word-awi word-u nager\",\"glo\":\"nager\"},\"word-baj\":{\"name\":\"baj\",\"id\":\"word-baj\",\"type\":\"word\",\"noun\":\"membre inférieur\",\"fulltext\":\"baj membre inférieur\",\"glo\":\"membre inférieur\"},\"word-djobaj\":{\"name\":\"djobaj\",\"id\":\"word-djobaj\",\"type\":\"word\",\"noun\":\"cuisse\",\"desc\":\"De [djo](word-djo) et [baj](word-baj)\",\"fulltext\":\"djobaj De [djo](word-djo) et [baj](word-baj) cuisse\",\"glo\":\"cuisse\"},\"word-habaj\":{\"name\":\"habaj\",\"id\":\"word-habaj\",\"type\":\"word\",\"noun\":\"jambe\",\"fulltext\":\"habaj jambe\",\"glo\":\"jambe\"},\"word-kebaj\":{\"name\":\"kebaj\",\"id\":\"word-kebaj\",\"type\":\"word\",\"noun\":\"testicules\",\"desc\":\"Caché [ke](word-ke) entre les jambes [baj](word-baj).\",\"fulltext\":\"kebaj Caché [ke](word-ke) entre les jambes [baj](word-baj). testicules\",\"glo\":\"testicules\"},\"word-beo\":{\"name\":\"beo\",\"id\":\"word-beo\",\"type\":\"word\",\"verb\":\"secouer\",\"adj\":\"secoué\",\"fulltext\":\"beo secouer secoué\",\"glo\":\"secouer\"},\"word-bo\":{\"name\":\"bo\",\"id\":\"word-bo\",\"type\":\"word\",\"noun\":\"ventre\",\"fulltext\":\"bo robo obo ventre\",\"glo\":\"ventre\",\"deriv\":[\"word-robo\",\"word-obo\"]},\"word-robo\":{\"name\":\"robo\",\"id\":\"word-robo\",\"type\":\"word\",\"noun\":\"nombril (centre du ventre)\",\"etym\":[\"word-ro\",\"word-bo\"],\"fulltext\":\"robo word-ro word-bo nombril (centre du ventre)\",\"glo\":\"nombril (centre du ventre)\"},\"word-bu\":{\"name\":\"bu\",\"id\":\"word-bu\",\"type\":\"word\",\"noun\":\"chose qui grossit (corps érectile)\",\"fulltext\":\"bu chose qui grossit (corps érectile)\",\"glo\":\"chose qui grossit (corps érectile)\"},\"word-buyon\":{\"name\":\"buyon\",\"id\":\"word-buyon\",\"type\":\"word\",\"noun\":\"corps érectile du clitoris\",\"fulltext\":\"buyon corps érectile du clitoris\",\"glo\":\"corps érectile du clitoris\"},\"word-butaj\":{\"name\":\"butaj\",\"id\":\"word-butaj\",\"type\":\"word\",\"noun\":\"corps érectile du pénis\",\"fulltext\":\"butaj corps érectile du pénis\",\"glo\":\"corps érectile du pénis\"},\"word-lire\":{\"name\":\"lire\",\"id\":\"word-lire\",\"type\":\"word\",\"tens\":\"futur éventuel, improbable mais pas impossible\",\"fulltext\":\"lire futur éventuel, improbable mais pas impossible\",\"glo\":\"futur éventuel, improbable mais pas impossible\"},\"word-liro\":{\"name\":\"liro\",\"id\":\"word-liro\",\"type\":\"word\",\"tens\":\"futur lointain\",\"fulltext\":\"liro futur lointain\",\"glo\":\"futur lointain\"},\"word-liru\":{\"name\":\"liru\",\"id\":\"word-liru\",\"type\":\"word\",\"tens\":\"futur proche\",\"fulltext\":\"liru futur proche\",\"glo\":\"futur proche\"},\"word-lira\":{\"name\":\"lira\",\"id\":\"word-lira\",\"type\":\"word\",\"tens\":\"demain\",\"fulltext\":\"lira lirana demain\",\"glo\":\"demain\",\"deriv\":[\"word-lirana\"]},\"word-liri\":{\"name\":\"liri\",\"id\":\"word-liri\",\"type\":\"word\",\"tens\":\"ce soir, ce matin qui vient, la journée qui arrive\",\"fulltext\":\"liri ce soir, ce matin qui vient, la journée qui arrive\",\"glo\":\"ce soir, ce matin qui vient, la journée qui arrive\"},\"word-lemi\":{\"name\":\"lemi\",\"id\":\"word-lemi\",\"type\":\"word\",\"tens\":\"hier soir, ce matin, aujourd'hui\",\"fulltext\":\"lemi hier soir, ce matin, aujourd'hui\",\"glo\":\"hier soir, ce matin, aujourd'hui\"},\"word-lema\":{\"name\":\"lema\",\"id\":\"word-lema\",\"type\":\"word\",\"tens\":\"hier\",\"fulltext\":\"lema hier\",\"glo\":\"hier\"},\"word-lemu\":{\"name\":\"lemu\",\"id\":\"word-lemu\",\"type\":\"word\",\"tens\":\"passé proche\",\"fulltext\":\"lemu passé proche\",\"glo\":\"passé proche\"},\"word-lemo\":{\"name\":\"lemo\",\"id\":\"word-lemo\",\"type\":\"word\",\"tens\":\"passé lointain\",\"fulltext\":\"lemo passé lointain\",\"glo\":\"passé lointain\"},\"word-leme\":{\"name\":\"leme\",\"id\":\"word-leme\",\"type\":\"word\",\"tens\":\"passé éventuel, improbable mais pas impossible\",\"fulltext\":\"leme passé éventuel, improbable mais pas impossible\",\"glo\":\"passé éventuel, improbable mais pas impossible\"},\"card-counting\":{\"name\":\"counting\",\"id\":\"card-counting\",\"type\":\"card\",\"lang\":\"les nombres et comment compter\",\"see\":[\"card-nepal\"],\"desc\":\"\\nVoici les nombres de 1 to 10:\\n\\n* [pi](word-pi) (1)\\n* [de](word-de) (2)\\n* [pe](word-pe) (3)\\n* [ka](word-ka) (4)\\n* [lil](word-lil) (5)\\n* [shi](word-shi) (6)\\n* [fe](word-fe) (7)\\n* [je](word-je) (8)\\n* [da](word-da) (9)\\n* [dji](word-dji) (10)\\n\\nEt il y a aussi [ipi](word-ipi) (x10), [ipa](word-ipa) (x100) et [ipu](word-ipu) (x1000).\\n\\n## Quelques exemples:\\n\\n* 11 (1 x 10 + 1): [1](phrase-1) ou simplement [2](phrase-2)\\n* 24 (2 x 10 + 4): [3](phrase-3)\\n* 359 (3 x 100 + 5 x 10 + 9): [4](phrase-4)\\n* 2019 (2 x 1000 + 10 + 9): [5](phrase-5)\\n* 105'000: [6](phrase-6)\\n\\nOn peut transformer [7](phrase-7) dans sa version raccourcie [8](phrase-8) ou [9](phrase-9)\\n\\n## Les grands nombres\\n\\n* *million* (1000^2): [10](phrase-10)\\n* *milliard* (1000^3): [11](phrase-11)\\n* *mille millards* (1000^4): [12](phrase-12)\\n\\nOn peut aussi dire [13](phrase-13) pour 10^4, etc.\\n\\n## Petits nombres\\n\\n* *dixième* (10^-1): [14](phrase-14)\\n* *centième* (10^-2): [15](phrase-15)\\n* *millième* (10^-3): [16](phrase-16)\\n\",\"fulltext\":\"counting \\nVoici les nombres de 1 to 10:\\n\\n* [pi](word-pi) (1)\\n* [de](word-de) (2)\\n* [pe](word-pe) (3)\\n* [ka](word-ka) (4)\\n* [lil](word-lil) (5)\\n* [shi](word-shi) (6)\\n* [fe](word-fe) (7)\\n* [je](word-je) (8)\\n* [da](word-da) (9)\\n* [dji](word-dji) (10)\\n\\nEt il y a aussi [ipi](word-ipi) (x10), [ipa](word-ipa) (x100) et [ipu](word-ipu) (x1000).\\n\\n## Quelques exemples:\\n\\n* 11 (1 x 10 + 1): [1](phrase-1) ou simplement [2](phrase-2)\\n* 24 (2 x 10 + 4): [3](phrase-3)\\n* 359 (3 x 100 + 5 x 10 + 9): [4](phrase-4)\\n* 2019 (2 x 1000 + 10 + 9): [5](phrase-5)\\n* 105'000: [6](phrase-6)\\n\\nOn peut transformer [7](phrase-7) dans sa version raccourcie [8](phrase-8) ou [9](phrase-9)\\n\\n## Les grands nombres\\n\\n* *million* (1000^2): [10](phrase-10)\\n* *milliard* (1000^3): [11](phrase-11)\\n* *mille millards* (1000^4): [12](phrase-12)\\n\\nOn peut aussi dire [13](phrase-13) pour 10^4, etc.\\n\\n## Petits nombres\\n\\n* *dixième* (10^-1): [14](phrase-14)\\n* *centième* (10^-2): [15](phrase-15)\\n* *millième* (10^-3): [16](phrase-16)\\n nepal les nombres et comment compter\",\"glo\":\"les nombres et comment compter\"},\"word-da\":{\"name\":\"da\",\"id\":\"word-da\",\"type\":\"word\",\"noun\":\"lieu, 9\",\"suffix\":\"lieu\",\"fulltext\":\"da agaukida dahem dahir goa lama lamoa lieu, 9 lieu\",\"glo\":\"lieu, 9\",\"deriv\":[\"word-agaukida\",\"word-dahem\",\"word-dahir\",\"word-goa\",\"word-lama\",\"word-lamoa\"]},\"word-dapa\":{\"name\":\"dapa\",\"id\":\"word-dapa\",\"type\":\"word\",\"noun\":\"joie, émotion complexe\",\"fulltext\":\"dapa joie, émotion complexe\",\"glo\":\"joie, émotion complexe\"},\"word-guda\":{\"name\":\"guda\",\"id\":\"word-guda\",\"type\":\"word\",\"noun\":\"le lieu de l'expérience\",\"fulltext\":\"guda le lieu de l'expérience\",\"glo\":\"le lieu de l'expérience\"},\"word-de\":{\"name\":\"de\",\"id\":\"word-de\",\"type\":\"word\",\"noun\":\"2\",\"pron\":\"nous deux\",\"posit\":\"sur le dos (2) jambes écartées\",\"conj\":\"nous deux (5p)\",\"fulltext\":\"de agade nous deux (5p) 2 nous deux sur le dos (2) jambes écartées\",\"glo\":\"2\",\"deriv\":[\"word-agade\"]},\"word-deda\":{\"name\":\"deda\",\"id\":\"word-deda\",\"type\":\"word\",\"pron\":\"nous deux\",\"fulltext\":\"deda nous deux\",\"glo\":\"nous deux\"},\"word-hamade\":{\"name\":\"hamade\",\"id\":\"word-hamade\",\"type\":\"word\",\"noun\":\"index (2ème doigt)\",\"posit\":\"sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)\",\"fulltext\":\"hamade index (2ème doigt) sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)\",\"glo\":\"index (2ème doigt)\"},\"word-nede\":{\"name\":\"nede\",\"id\":\"word-nede\",\"type\":\"word\",\"noun\":\"vie sans temps (stress, pas de mémoire)\",\"fulltext\":\"nede vie sans temps (stress, pas de mémoire)\",\"glo\":\"vie sans temps (stress, pas de mémoire)\"},\"word-dej\":{\"name\":\"dej\",\"id\":\"word-dej\",\"type\":\"word\",\"noun\":\"vers\",\"fulltext\":\"dej vers\",\"glo\":\"vers\"},\"word-dahem\":{\"name\":\"dahem\",\"id\":\"word-dahem\",\"type\":\"word\",\"prep\":\"quand (passé)\",\"etym\":[\"word-da\",\"word-em\"],\"desc\":\"Le lieu [da](word-da) vécu [em](word-em)\",\"fulltext\":\"dahem word-da word-em Le lieu [da](word-da) vécu [em](word-em) quand (passé)\",\"glo\":\"quand (passé)\"},\"word-di\":{\"name\":\"di\",\"id\":\"word-di\",\"type\":\"word\",\"prefix\":\"qui (transforme verbe en adj)\",\"fulltext\":\"di diguwu yadifa qui (transforme verbe en adj)\",\"glo\":\"qui (transforme verbe en adj)\",\"deriv\":[\"word-diguwu\",\"word-yadifa\"]},\"word-diguwu\":{\"name\":\"diguwu\",\"id\":\"word-diguwu\",\"type\":\"word\",\"noun\":\"généreu.se.x\",\"etym\":[\"word-di\",\"word-guwu\"],\"fulltext\":\"diguwu word-di word-guwu généreu.se.x\",\"glo\":\"généreu.se.x\"},\"word-dil\":{\"name\":\"dil\",\"id\":\"word-dil\",\"type\":\"word\",\"noun\":\"ongle, griffe\",\"fulltext\":\"dil pedil ongle, griffe\",\"glo\":\"ongle, griffe\",\"deriv\":[\"word-pedil\"]},\"word-pedil\":{\"name\":\"pedil\",\"id\":\"word-pedil\",\"type\":\"word\",\"noun\":\"fourche\",\"etym\":[\"word-pe\",\"word-dil\"],\"fulltext\":\"pedil word-pe word-dil lipedil fourche\",\"glo\":\"fourche\",\"deriv\":[\"word-lipedil\"]},\"word-lipedil\":{\"name\":\"lipedil\",\"id\":\"word-lipedil\",\"type\":\"word\",\"noun\":\"fourchette\",\"etym\":[\"word-lil\",\"word-pedil\"],\"fulltext\":\"lipedil word-lil word-pedil fourchette\",\"glo\":\"fourchette\"},\"word-dahir\":{\"name\":\"dahir\",\"id\":\"word-dahir\",\"type\":\"word\",\"prep\":\"quand (future)\",\"etym\":[\"word-da\",\"word-lir\"],\"fulltext\":\"dahir word-da word-lir quand (future)\",\"glo\":\"quand (future)\"},\"word-dja\":{\"name\":\"dja\",\"id\":\"word-dja\",\"type\":\"word\",\"noun\":\"possible\",\"fulltext\":\"dja edja possible\",\"glo\":\"possible\",\"deriv\":[\"word-edja\"]},\"word-dji\":{\"name\":\"dji\",\"id\":\"word-dji\",\"type\":\"word\",\"noun\":\"10 (mémoire)\",\"desc\":\"Pour les dizaines, on utilise dji au lieu de [pi](word-pi) [ipi](word-ipi) (mais on peut aussi dire [pi](word-pi) [ipi](word-ipi))\",\"etym\":[\"word-pi\",\"word-ipi\"],\"fulltext\":\"dji word-pi word-ipi Pour les dizaines, on utilise dji au lieu de [pi](word-pi) [ipi](word-ipi) (mais on peut aussi dire [pi](word-pi) [ipi](word-ipi)) 10 (mémoire)\",\"glo\":\"10 (mémoire)\"},\"word-djipa\":{\"name\":\"djipa\",\"id\":\"word-djipa\",\"type\":\"word\",\"noun\":\"souvenir (être dieu.e)\",\"fulltext\":\"djipa souvenir (être dieu.e)\",\"glo\":\"souvenir (être dieu.e)\"},\"word-djil\":{\"name\":\"djil\",\"id\":\"word-djil\",\"type\":\"word\",\"noun\":\"cheveux\",\"posit\":\"debout, le corps penché en avant, les cheveux offerts, prêts à être pris.\",\"fulltext\":\"djil djoda cheveux debout, le corps penché en avant, les cheveux offerts, prêts à être pris.\",\"glo\":\"cheveux\",\"deriv\":[\"word-djoda\"]},\"word-djoda\":{\"name\":\"djoda\",\"id\":\"word-djoda\",\"type\":\"word\",\"noun\":\"ours\",\"etym\":[\"word-djil\",\"word-oda\"],\"fulltext\":\"djoda word-djil word-oda ours\",\"glo\":\"ours\"},\"word-nedjil\":{\"name\":\"nedjil\",\"id\":\"word-nedjil\",\"type\":\"word\",\"noun\":\"sans poils\",\"verb\":\"raser\",\"fulltext\":\"nedjil sans poils raser\",\"glo\":\"sans poils\"},\"word-djo\":{\"name\":\"djo\",\"id\":\"word-djo\",\"type\":\"word\",\"adj\":\"partie proximal\",\"desc\":\"Au centre [dej](word-dej) [ojo](word-ojo)\",\"fulltext\":\"djo Au centre [dej](word-dej) [ojo](word-ojo) djoma djonopi obo partie proximal\",\"glo\":\"partie proximal\",\"deriv\":[\"word-djoma\",\"word-djonopi\",\"word-obo\"]},\"word-hadjo\":{\"name\":\"hadjo\",\"id\":\"word-hadjo\",\"type\":\"word\",\"verb\":\"prendre vers soi\",\"fulltext\":\"hadjo prendre vers soi\",\"glo\":\"prendre vers soi\"},\"word-djoha\":{\"name\":\"djoha\",\"id\":\"word-djoha\",\"type\":\"word\",\"verb\":\"rejeter (loin de soi)\",\"fulltext\":\"djoha rejeter (loin de soi)\",\"glo\":\"rejeter (loin de soi)\"},\"word-muhadjo\":{\"name\":\"muhadjo\",\"id\":\"word-muhadjo\",\"type\":\"word\",\"verb\":\"cueillir\",\"fulltext\":\"muhadjo cueillir\",\"glo\":\"cueillir\"},\"word-dom\":{\"name\":\"dom\",\"id\":\"word-dom\",\"type\":\"word\",\"adj\":\"très fort\",\"desc\":\"\\nImplique un contact très profond, intime, fort, non pas par la force physique\\nmais par l’intensité de la circulation des sensations, du “donner” et\\n“recevoir”.\\n\\nPar exemple, la phrase suivante:\\n\\n[object Object]\\n\\nN’implique pas automatiquement la copulation méchanique et bestiale (même si\\ncette dernière est possible), mais plutôt la recherche d’une très grande\\nprofondeur et intensité qui pourrait aussi se traduire par beaucoup de\\nlenteur ou de câlins ou de contrastes, etc.\\n\",\"fulltext\":\"dom \\nImplique un contact très profond, intime, fort, non pas par la force physique\\nmais par l’intensité de la circulation des sensations, du “donner” et\\n“recevoir”.\\n\\nPar exemple, la phrase suivante:\\n\\n[object Object]\\n\\nN’implique pas automatiquement la copulation méchanique et bestiale (même si\\ncette dernière est possible), mais plutôt la recherche d’une très grande\\nprofondeur et intensité qui pourrait aussi se traduire par beaucoup de\\nlenteur ou de câlins ou de contrastes, etc.\\n très fort\",\"glo\":\"très fort\"},\"word-don\":{\"name\":\"don\",\"id\":\"word-don\",\"type\":\"word\",\"adv\":\"où\",\"glo\":\"où.ADV\",\"fulltext\":\"don où\"},\"word-du\":{\"name\":\"du\",\"id\":\"word-du\",\"type\":\"word\",\"prefix\":\"devant\",\"desc\":\"Inspiré de sud (on regarde le sud).\",\"fulltext\":\"du Inspiré de sud (on regarde le sud). doda alayin dualayin duto duna duwi duyin duha devant\",\"glo\":\"devant\",\"deriv\":[\"word-doda\",\"word-alayin\",\"word-dualayin\",\"word-duto\",\"word-duna\",\"word-duwi\",\"word-duyin\",\"word-duha\"]},\"word-duto\":{\"name\":\"duto\",\"id\":\"word-duto\",\"type\":\"word\",\"noun\":\"petit frère/vent\",\"etym\":[\"word-du\",\"word-oto\"],\"fulltext\":\"duto word-du word-oto petit frère/vent\",\"glo\":\"petit frère/vent\"},\"word-duna\":{\"name\":\"duna\",\"id\":\"word-duna\",\"type\":\"word\",\"noun\":\"petite soeur/arbre\",\"etym\":[\"word-du\",\"word-ana\"],\"fulltext\":\"duna word-du word-ana petite soeur/arbre\",\"glo\":\"petite soeur/arbre\"},\"word-duwi\":{\"name\":\"duwi\",\"id\":\"word-duwi\",\"type\":\"word\",\"noun\":\"petit.e enby/oiseau\",\"etym\":[\"word-du\",\"word-iwi\"],\"fulltext\":\"duwi word-du word-iwi petit.e enby/oiseau\",\"glo\":\"petit.e enby/oiseau\"},\"word-duyin\":{\"name\":\"duyin\",\"id\":\"word-duyin\",\"type\":\"word\",\"noun\":\"avant du vagin\",\"etym\":[\"word-du\",\"word-yin\"],\"fulltext\":\"duyin word-du word-yin avant du vagin\",\"glo\":\"avant du vagin\"},\"word-dur\":{\"name\":\"dur\",\"id\":\"word-dur\",\"type\":\"word\",\"noun\":\"nuque\",\"verb\":\"obéir\",\"adj\":\"obéissant.e\",\"fulltext\":\"dur nuque obéir obéissant.e\",\"glo\":\"nuque\"},\"word-e\":{\"name\":\"e\",\"id\":\"word-e\",\"type\":\"word\",\"verb\":\"deviens, soit, être\",\"fulltext\":\"e edja eyu deviens, soit, être\",\"glo\":\"deviens, soit, être\",\"deriv\":[\"word-edja\",\"word-eyu\"]},\"word-edja\":{\"name\":\"edja\",\"id\":\"word-edja\",\"type\":\"word\",\"prep\":\"interrogation (ou affirmative)\",\"etym\":[\"word-e\",\"word-dja\"],\"fulltext\":\"edja word-e word-dja interrogation (ou affirmative)\",\"glo\":\"interrogation (ou affirmative)\"},\"word-nedja\":{\"name\":\"nedja\",\"id\":\"word-nedja\",\"type\":\"word\",\"prep\":\"pas possible (ou affirmative)\",\"fulltext\":\"nedja pas possible (ou affirmative)\",\"glo\":\"pas possible (ou affirmative)\"},\"word-egi\":{\"name\":\"egi\",\"id\":\"word-egi\",\"type\":\"word\",\"adj\":\"froid\",\"fulltext\":\"egi egina tajegi yonegi froid\",\"glo\":\"froid\",\"deriv\":[\"word-egina\",\"word-tajegi\",\"word-yonegi\"]},\"word-egina\":{\"name\":\"egina\",\"id\":\"word-egina\",\"type\":\"word\",\"noun\":\"endive, janvier\",\"etym\":[\"word-egi\",\"word-ina\"],\"fulltext\":\"egina word-egi word-ina endive, janvier\",\"glo\":\"endive, janvier\"},\"word-eku\":{\"name\":\"eku\",\"id\":\"word-eku\",\"type\":\"word\",\"prep\":\"que\",\"fulltext\":\"eku que\",\"glo\":\"que\"},\"word-el\":{\"name\":\"el\",\"id\":\"word-el\",\"type\":\"word\",\"adj\":\"droit\",\"fulltext\":\"el namel droit\",\"glo\":\"droit\",\"deriv\":[\"word-namel\"]},\"word-em\":{\"name\":\"em\",\"id\":\"word-em\",\"type\":\"word\",\"noun\":\"le vécu\",\"verb\":\"vivre\",\"fulltext\":\"em dahem nem lem le vécu vivre\",\"glo\":\"le vécu\",\"deriv\":[\"word-dahem\",\"word-nem\",\"word-lem\"]},\"word-nem\":{\"name\":\"nem\",\"id\":\"word-nem\",\"type\":\"word\",\"verb\":\"mourir, ne pas vivre\",\"etym\":[\"word-ne\",\"word-em\"],\"fulltext\":\"nem word-ne word-em mourir, ne pas vivre\",\"glo\":\"mourir, ne pas vivre\"},\"word-dim\":{\"name\":\"dim\",\"id\":\"word-dim\",\"type\":\"word\",\"noun\":\"couleur cerise\",\"fulltext\":\"dim couleur cerise\",\"glo\":\"couleur cerise\"},\"word-erina\":{\"name\":\"erina\",\"id\":\"word-erina\",\"type\":\"word\",\"noun\":\"cerise (fruit), juin\",\"fulltext\":\"erina cerise (fruit), juin\",\"glo\":\"cerise (fruit), juin\"},\"word-muneri\":{\"name\":\"muneri\",\"id\":\"word-muneri\",\"type\":\"word\",\"noun\":\"téton (cerise du sein)\",\"fulltext\":\"muneri téton (cerise du sein)\",\"glo\":\"téton (cerise du sein)\"},\"word-tajeri\":{\"name\":\"tajeri\",\"id\":\"word-tajeri\",\"type\":\"word\",\"noun\":\"gland (cerise du pénis)\",\"fulltext\":\"tajeri gland (cerise du pénis)\",\"glo\":\"gland (cerise du pénis)\"},\"word-yoneri\":{\"name\":\"yoneri\",\"id\":\"word-yoneri\",\"type\":\"word\",\"noun\":\"clitoris (cerise de la vulve)\",\"fulltext\":\"yoneri clitoris (cerise de la vulve)\",\"glo\":\"clitoris (cerise de la vulve)\"},\"word-es\":{\"name\":\"es\",\"id\":\"word-es\",\"type\":\"word\",\"noun\":\"se (être soi, se regarder, se confondre)\",\"fulltext\":\"es se (être soi, se regarder, se confondre)\",\"glo\":\"se (être soi, se regarder, se confondre)\"},\"word-eshu\":{\"name\":\"eshu\",\"id\":\"word-eshu\",\"type\":\"word\",\"adj\":\"perdu\",\"fulltext\":\"eshu perdu\",\"glo\":\"perdu\"},\"word-eshubeo\":{\"name\":\"eshubeo\",\"id\":\"word-eshubeo\",\"type\":\"word\",\"noun\":\"monstre\",\"fulltext\":\"eshubeo monstre\",\"glo\":\"monstre\"},\"word-fa\":{\"name\":\"fa\",\"id\":\"word-fa\",\"type\":\"word\",\"noun\":\"yeux\",\"verb\":\"regarder\",\"desc\":\"Lorsqu’on utilise les yeux comme \\\"récépteurs\\\" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme ([i](word-i), [u](word-u) ou [o](word-o)). Par exemple [object Object] versus [object Object].\",\"fulltext\":\"fa Lorsqu’on utilise les yeux comme \\\"récépteurs\\\" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme ([i](word-i), [u](word-u) ou [o](word-o)). Par exemple [object Object] versus [object Object]. gufa fatio yafa yadifa yeux regarder\",\"glo\":\"yeux\",\"deriv\":[\"word-gufa\",\"word-fatio\",\"word-yafa\",\"word-yadifa\"]},\"word-gufa\":{\"name\":\"gufa\",\"id\":\"word-gufa\",\"type\":\"word\",\"noun\":\"pupille (vie de l'oeil)\",\"etym\":[\"word-gu\",\"word-fa\"],\"fulltext\":\"gufa word-gu word-fa pupille (vie de l'oeil)\",\"glo\":\"pupille (vie de l'oeil)\"},\"word-falo\":{\"name\":\"falo\",\"id\":\"word-falo\",\"type\":\"word\",\"noun\":\"yeux humides, tristesse\",\"verb\":\"être triste\",\"fulltext\":\"falo yeux humides, tristesse être triste\",\"glo\":\"yeux humides, tristesse\"},\"word-faj\":{\"name\":\"faj\",\"id\":\"word-faj\",\"type\":\"word\",\"noun\":\"prépuce, protection\",\"desc\":\"version courte de [feyaj](word-feyaj)\",\"etym\":[\"word-fe\",\"word-yaj\"],\"fulltext\":\"faj word-fe word-yaj version courte de [feyaj](word-feyaj) prépuce, protection\",\"glo\":\"prépuce, protection\"},\"word-feyaj\":{\"name\":\"feyaj\",\"id\":\"word-feyaj\",\"type\":\"word\",\"noun\":\"prépuce\",\"desc\":\"version longue de [faj](word-faj)\",\"etym\":[\"word-fe\",\"word-yaj\"],\"fulltext\":\"feyaj word-fe word-yaj version longue de [faj](word-faj) prépuce\",\"glo\":\"prépuce\"},\"word-nefaj\":{\"name\":\"nefaj\",\"id\":\"word-nefaj\",\"type\":\"word\",\"verb\":\"découvrir le gland, retrousser la peau du prépuce\",\"fulltext\":\"nefaj découvrir le gland, retrousser la peau du prépuce\",\"glo\":\"découvrir le gland, retrousser la peau du prépuce\"},\"word-fe\":{\"name\":\"fe\",\"id\":\"word-fe\",\"type\":\"word\",\"noun\":\"7 (sur)\",\"prefix\":\"sur\",\"verb\":\"être sur\",\"fulltext\":\"fe faj feyaj 7 (sur) être sur sur\",\"glo\":\"7 (sur)\",\"deriv\":[\"word-faj\",\"word-feyaj\"]},\"word-fena\":{\"name\":\"fena\",\"id\":\"word-fena\",\"type\":\"word\",\"noun\":\"choux (couches), février\",\"fulltext\":\"fena choux (couches), février\",\"glo\":\"choux (couches), février\"},\"word-feo\":{\"name\":\"feo\",\"id\":\"word-feo\",\"type\":\"word\",\"adv\":\"sur moi\",\"fulltext\":\"feo sur moi\",\"glo\":\"sur moi\"},\"word-feoda\":{\"name\":\"feoda\",\"id\":\"word-feoda\",\"type\":\"word\",\"noun\":\"habits\",\"desc\":\"Littéralement \\\"sur le corps\\\".\",\"fulltext\":\"feoda Littéralement \\\"sur le corps\\\". habits\",\"glo\":\"habits\"},\"word-nefe\":{\"name\":\"nefe\",\"id\":\"word-nefe\",\"type\":\"word\",\"noun\":\"nu\",\"adj\":\"découvert\",\"verb\":\"déshabiller, découvrir\",\"fulltext\":\"nefe nu déshabiller, découvrir découvert\",\"glo\":\"nu\"},\"word-fepa\":{\"name\":\"fepa\",\"id\":\"word-fepa\",\"type\":\"word\",\"noun\":\"fierté\",\"fulltext\":\"fepa fierté\",\"glo\":\"fierté\"},\"word-fen\":{\"name\":\"fen\",\"id\":\"word-fen\",\"type\":\"word\",\"noun\":\"genoux\",\"posit\":\"à genoux\",\"verb\":\"marcher\",\"fulltext\":\"fen genoux marcher à genoux\",\"glo\":\"genoux\"},\"word-afen\":{\"name\":\"afen\",\"id\":\"word-afen\",\"type\":\"word\",\"glo\":\"marcher.3SG\",\"alt\":\"word-fen\",\"see\":[\"word-a\",\"word-fen\"],\"fulltext\":\"afen a fen\"},\"word-fi\":{\"name\":\"fi\",\"id\":\"word-fi\",\"type\":\"word\",\"noun\":\"fil, relier\",\"fulltext\":\"fi fil, relier\",\"glo\":\"fil, relier\"},\"word-fishasha\":{\"name\":\"fishasha\",\"id\":\"word-fishasha\",\"type\":\"word\",\"verb\":\"coudre (le fil qui danse)\",\"fulltext\":\"fishasha coudre (le fil qui danse)\",\"glo\":\"coudre (le fil qui danse)\"},\"word-gufishasha\":{\"name\":\"gufishasha\",\"id\":\"word-gufishasha\",\"type\":\"word\",\"verb\":\"coudre la vie, relier les choses hors du temps causal\",\"fulltext\":\"gufishasha coudre la vie, relier les choses hors du temps causal\",\"glo\":\"coudre la vie, relier les choses hors du temps causal\"},\"word-gufi\":{\"name\":\"gufi\",\"id\":\"word-gufi\",\"type\":\"word\",\"noun\":\"fil de vie\",\"fulltext\":\"gufi fil de vie\",\"glo\":\"fil de vie\"},\"word-fio\":{\"name\":\"fio\",\"id\":\"word-fio\",\"type\":\"word\",\"noun\":\"aubergine (couleur)\",\"fulltext\":\"fio fiona aubergine (couleur)\",\"glo\":\"aubergine (couleur)\",\"deriv\":[\"word-fiona\"]},\"word-fiona\":{\"name\":\"fiona\",\"id\":\"word-fiona\",\"type\":\"word\",\"noun\":\"aubergine (légume)\",\"etym\":[\"word-fio\",\"word-na\"],\"fulltext\":\"fiona word-fio word-na aubergine (légume)\",\"glo\":\"aubergine (légume)\"},\"word-fo\":{\"name\":\"fo\",\"id\":\"word-fo\",\"type\":\"word\",\"verb\":\"fouetter\",\"fulltext\":\"fo fouetter\",\"glo\":\"fouetter\"},\"word-ga\":{\"name\":\"ga\",\"id\":\"word-ga\",\"type\":\"word\",\"noun\":\"esprit\",\"desc\":\"Dans le sens de l'esprit des choses, l'esprit de la nature, etc.\",\"fulltext\":\"ga Dans le sens de l'esprit des choses, l'esprit de la nature, etc. gana gao kuga esprit\",\"glo\":\"esprit\",\"deriv\":[\"word-gana\",\"word-gao\",\"word-kuga\"]},\"word-gana\":{\"name\":\"gana\",\"id\":\"word-gana\",\"type\":\"word\",\"noun\":\"la terre\",\"etym\":[\"word-ga\",\"word-na\"],\"fulltext\":\"gana word-ga word-na la terre\",\"glo\":\"la terre\"},\"word-gai\":{\"name\":\"gai\",\"id\":\"word-gai\",\"type\":\"word\",\"noun\":\"conscience, pluie\",\"desc\":\"esprit caressé / qui caresse (la pluie sur la terre)\",\"fulltext\":\"gai esprit caressé / qui caresse (la pluie sur la terre) gugai conscience, pluie\",\"glo\":\"conscience, pluie\",\"deriv\":[\"word-gugai\"]},\"word-kegai\":{\"name\":\"kegai\",\"id\":\"word-kegai\",\"type\":\"word\",\"noun\":\"dieu\",\"desc\":\"caché dans l'esprit caressé\",\"fulltext\":\"kegai caché dans l'esprit caressé dieu\",\"glo\":\"dieu\"},\"word-gau\":{\"name\":\"gau\",\"id\":\"word-gau\",\"type\":\"word\",\"noun\":\"attention (esprit tiré)\",\"etym\":[\"word-gau\",\"word-u\"],\"fulltext\":\"gau word-gau word-u gau ligau attention (esprit tiré)\",\"glo\":\"attention (esprit tiré)\",\"deriv\":[\"word-gau\",\"word-ligau\"]},\"word-gao\":{\"name\":\"gao\",\"id\":\"word-gao\",\"type\":\"word\",\"noun\":\"attention (esprit projeté)\",\"etym\":[\"word-ga\",\"word-o\"],\"fulltext\":\"gao word-ga word-o attention (esprit projeté)\",\"glo\":\"attention (esprit projeté)\"},\"word-kuga\":{\"name\":\"kuga\",\"id\":\"word-kuga\",\"type\":\"word\",\"noun\":\"la pensée causale, l'esprit de victime\",\"etym\":[\"word-ku\",\"word-ga\"],\"fulltext\":\"kuga word-ku word-ga la pensée causale, l'esprit de victime\",\"glo\":\"la pensée causale, l'esprit de victime\"},\"word-nega\":{\"name\":\"nega\",\"id\":\"word-nega\",\"type\":\"word\",\"glo\":\"fou.ADV\",\"see\":[\"word-nega\"],\"fulltext\":\"nega nega\"},\"word-gi\":{\"name\":\"gi\",\"id\":\"word-gi\",\"type\":\"word\",\"noun\":\"doux (expérience caressée)\",\"suffix\":\"doux\",\"etym\":[\"word-gu\",\"word-i\"],\"fulltext\":\"gi word-gu word-i gilapa yagi yaonagi yogi yohonagi doux (expérience caressée) doux\",\"glo\":\"doux (expérience caressée)\",\"deriv\":[\"word-gilapa\",\"word-yagi\",\"word-yaonagi\",\"word-yogi\",\"word-yohonagi\"]},\"word-gil\":{\"name\":\"gil\",\"id\":\"word-gil\",\"type\":\"word\",\"noun\":\"tigre\",\"fulltext\":\"gil gilil tigre\",\"glo\":\"tigre\",\"deriv\":[\"word-gilil\"]},\"word-gilil\":{\"name\":\"gilil\",\"id\":\"word-gilil\",\"type\":\"word\",\"noun\":\"chat (petit tigre)\",\"etym\":[\"word-gil\",\"word-lil\"],\"fulltext\":\"gilil word-gil word-lil chat (petit tigre)\",\"glo\":\"chat (petit tigre)\"},\"word-go\":{\"name\":\"go\",\"id\":\"word-go\",\"type\":\"word\",\"noun\":\"intense (expérience fouettée)\",\"etym\":[\"word-gu\",\"word-o\"],\"fulltext\":\"go word-gu word-o intense (expérience fouettée)\",\"glo\":\"intense (expérience fouettée)\"},\"word-gol\":{\"name\":\"gol\",\"id\":\"word-gol\",\"type\":\"word\",\"adj\":\"grand\",\"fulltext\":\"gol goa gawi goda shegul grand\",\"glo\":\"grand\",\"deriv\":[\"word-goa\",\"word-gawi\",\"word-goda\",\"word-shegul\"]},\"word-goa\":{\"name\":\"goa\",\"id\":\"word-goa\",\"type\":\"word\",\"suffix\":\"big place\",\"etym\":[\"word-gol\",\"word-da\"],\"fulltext\":\"goa word-gol word-da lamagoa big place\",\"glo\":\"big place\",\"deriv\":[\"word-lamagoa\"]},\"word-gola\":{\"name\":\"gola\",\"id\":\"word-gola\",\"type\":\"word\",\"noun\":\"grande chose (courge)\",\"fulltext\":\"gola grande chose (courge)\",\"glo\":\"grande chose (courge)\"},\"word-gawi\":{\"name\":\"gawi\",\"id\":\"word-gawi\",\"type\":\"word\",\"noun\":\"baleine\",\"etym\":[\"word-gol\",\"word-awi\"],\"fulltext\":\"gawi word-gol word-awi baleine\",\"glo\":\"baleine\"},\"word-goda\":{\"name\":\"goda\",\"id\":\"word-goda\",\"type\":\"word\",\"noun\":\"éléphant\",\"etym\":[\"word-gol\",\"word-oda\"],\"fulltext\":\"goda word-gol word-oda éléphant\",\"glo\":\"éléphant\"},\"word-gu\":{\"name\":\"gu\",\"id\":\"word-gu\",\"type\":\"word\",\"adj\":\"obscurité, gestation, profondeur\",\"prefix\":\"profondeur\",\"desc\":\"On peut voir [gu](word-gu) comme le mouvement de l'esprit [ga](word-ga) (esprit) [u](word-u) (tiré)\",\"fulltext\":\"gu On peut voir [gu](word-gu) comme le mouvement de l'esprit [ga](word-ga) (esprit) [u](word-u) (tiré) gufa gi go gulir gulem guo gui guwu guru gugai augu gupa gupi sigu obscurité, gestation, profondeur profondeur\",\"glo\":\"obscurité, gestation, profondeur\",\"deriv\":[\"word-gufa\",\"word-gi\",\"word-go\",\"word-gulir\",\"word-gulem\",\"word-guo\",\"word-gui\",\"word-guwu\",\"word-guru\",\"word-gugai\",\"word-augu\",\"word-gupa\",\"word-gupi\",\"word-sigu\"]},\"word-gulir\":{\"name\":\"gulir\",\"id\":\"word-gulir\",\"type\":\"word\",\"noun\":\"souhaiter (gu du future)\",\"etym\":[\"word-gu\",\"word-lir\"],\"fulltext\":\"gulir word-gu word-lir souhaiter (gu du future)\",\"glo\":\"souhaiter (gu du future)\"},\"word-gulem\":{\"name\":\"gulem\",\"id\":\"word-gulem\",\"type\":\"word\",\"noun\":\"se souvenir (gu du passé)\",\"etym\":[\"word-gu\",\"word-lem\"],\"fulltext\":\"gulem word-gu word-lem se souvenir (gu du passé)\",\"glo\":\"se souvenir (gu du passé)\"},\"word-guna\":{\"name\":\"guna\",\"id\":\"word-guna\",\"type\":\"word\",\"noun\":\"vie\",\"fulltext\":\"guna vie\",\"glo\":\"vie\"},\"word-guo\":{\"name\":\"guo\",\"id\":\"word-guo\",\"type\":\"word\",\"verb\":\"mourir\",\"etym\":[\"word-gu\",\"word-o\"],\"fulltext\":\"guo word-gu word-o mourir\",\"glo\":\"mourir\"},\"word-gui\":{\"name\":\"gui\",\"id\":\"word-gui\",\"type\":\"word\",\"verb\":\"naître\",\"etym\":[\"word-gu\",\"word-i\"],\"fulltext\":\"gui word-gu word-i iwigui naître\",\"glo\":\"naître\",\"deriv\":[\"word-iwigui\"]},\"word-guwu\":{\"name\":\"guwu\",\"id\":\"word-guwu\",\"type\":\"word\",\"verb\":\"donner\",\"etym\":[\"word-gu\",\"word-wu\"],\"fulltext\":\"guwu word-gu word-wu diguwu guwuna donner\",\"glo\":\"donner\",\"deriv\":[\"word-diguwu\",\"word-guwuna\"]},\"word-guwuna\":{\"name\":\"guwuna\",\"id\":\"word-guwuna\",\"type\":\"word\",\"noun\":\"don\",\"etym\":[\"word-guwu\",\"word-na\"],\"fulltext\":\"guwuna word-guwu word-na don\",\"glo\":\"don\"},\"word-guru\":{\"name\":\"guru\",\"id\":\"word-guru\",\"type\":\"word\",\"noun\":\"réalisation des profondeurs\",\"etym\":[\"word-gu\",\"word-ru\"],\"fulltext\":\"guru word-gu word-ru réalisation des profondeurs\",\"glo\":\"réalisation des profondeurs\"},\"word-gugai\":{\"name\":\"gugai\",\"id\":\"word-gugai\",\"type\":\"word\",\"noun\":\"fertilité\",\"adj\":\"fertile\",\"etym\":[\"word-gu\",\"word-gai\"],\"fulltext\":\"gugai word-gu word-gai fertilité fertile\",\"glo\":\"fertilité\"},\"word-augu\":{\"name\":\"augu\",\"id\":\"word-augu\",\"type\":\"word\",\"adj\":\"confiance\",\"etym\":[\"word-au\",\"word-gu\"],\"fulltext\":\"augu word-au word-gu confiance\",\"glo\":\"confiance\"},\"word-negu\":{\"name\":\"negu\",\"id\":\"word-negu\",\"type\":\"word\",\"noun\":\"l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\",\"desc\":\"C'est l'inverse de la confiance: [augu](word-augu)\",\"fulltext\":\"negu C'est l'inverse de la confiance: [augu](word-augu) l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\",\"glo\":\"l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\"},\"word-guyuina\":{\"name\":\"guyuina\",\"id\":\"word-guyuina\",\"type\":\"word\",\"noun\":\"pomme (le fruit de la vie)\",\"fulltext\":\"guyuina pomme (le fruit de la vie)\",\"glo\":\"pomme (le fruit de la vie)\"},\"word-gupa\":{\"name\":\"gupa\",\"id\":\"word-gupa\",\"type\":\"word\",\"noun\":\"nature (tout le sombre/profondeur)\",\"glo\":\"nature\",\"etym\":[\"word-gu\",\"word-pa\"],\"fulltext\":\"gupa word-gu word-pa nature (tout le sombre/profondeur)\"},\"word-ha\":{\"name\":\"ha\",\"id\":\"word-ha\",\"type\":\"word\",\"noun\":\"tête\",\"adj\":\"loin\",\"prefix\":\"partie supérieure ou distale\",\"fulltext\":\"ha duha hawe hase noha hama tête loin partie supérieure ou distale\",\"glo\":\"tête\",\"deriv\":[\"word-duha\",\"word-hawe\",\"word-hase\",\"word-noha\",\"word-hama\"]},\"word-duha\":{\"name\":\"duha\",\"id\":\"word-duha\",\"type\":\"word\",\"noun\":\"visage\",\"etym\":[\"word-du\",\"word-ha\"],\"fulltext\":\"duha word-du word-ha visage\",\"glo\":\"visage\"},\"word-hawe\":{\"name\":\"hawe\",\"id\":\"word-hawe\",\"type\":\"word\",\"noun\":\"joue droite\",\"etym\":[\"word-ha\",\"word-we\"],\"fulltext\":\"hawe word-ha word-we joue droite\",\"glo\":\"joue droite\"},\"word-hase\":{\"name\":\"hase\",\"id\":\"word-hase\",\"type\":\"word\",\"noun\":\"joue gauche\",\"etym\":[\"word-ha\",\"word-se\"],\"fulltext\":\"hase word-ha word-se joue gauche\",\"glo\":\"joue gauche\"},\"word-noha\":{\"name\":\"noha\",\"id\":\"word-noha\",\"type\":\"word\",\"noun\":\"occiput (dos de la tête)\",\"etym\":[\"word-no\",\"word-ha\"],\"fulltext\":\"noha word-no word-ha occiput (dos de la tête)\",\"glo\":\"occiput (dos de la tête)\"},\"word-hal\":{\"name\":\"hal\",\"id\":\"word-hal\",\"type\":\"word\",\"adj\":\"vers le ciel, immense\",\"fulltext\":\"hal vers le ciel, immense\",\"glo\":\"vers le ciel, immense\"},\"word-mahal\":{\"name\":\"mahal\",\"id\":\"word-mahal\",\"type\":\"word\",\"noun\":\"main immense, action divine\",\"adj\":\"miraculeuse.x\",\"fulltext\":\"mahal main immense, action divine miraculeuse.x\",\"glo\":\"main immense, action divine\"},\"word-hao\":{\"name\":\"hao\",\"id\":\"word-hao\",\"type\":\"word\",\"noun\":\"buste\",\"desc\":\"De [ha](word-ha) (moitié supérieure) et [oda](word-oda) (corps).\",\"fulltext\":\"hao De [ha](word-ha) (moitié supérieure) et [oda](word-oda) (corps). buste\",\"glo\":\"buste\"},\"word-hem\":{\"name\":\"hem\",\"id\":\"word-hem\",\"type\":\"word\",\"adj\":\"offert\",\"suffix\":\"offert\",\"desc\":\"Compliment important qui signifie \\\"je vois que tu m'offres ceci\\\". Par example [object Object] ou [object Object].\",\"fulltext\":\"hem Compliment important qui signifie \\\"je vois que tu m'offres ceci\\\". Par example [object Object] ou [object Object]. offert offert\",\"glo\":\"offert\"},\"word-him\":{\"name\":\"him\",\"id\":\"word-him\",\"type\":\"word\",\"verb\":\"grandir\",\"fulltext\":\"him mahim grandir\",\"glo\":\"grandir\",\"deriv\":[\"word-mahim\"]},\"word-yuhim\":{\"name\":\"yuhim\",\"id\":\"word-yuhim\",\"type\":\"word\",\"noun\":\"naître\",\"fulltext\":\"yuhim naître\",\"glo\":\"naître\"},\"word-mahim\":{\"name\":\"mahim\",\"id\":\"word-mahim\",\"type\":\"word\",\"noun\":\"construire (les mains qui font grandir)\",\"etym\":[\"word-ma\",\"word-him\"],\"fulltext\":\"mahim word-ma word-him construire (les mains qui font grandir)\",\"glo\":\"construire (les mains qui font grandir)\"},\"word-i\":{\"name\":\"i\",\"id\":\"word-i\",\"type\":\"word\",\"noun\":\"caresser\",\"prefix\":\"à toi\",\"conj\":\"tu (2s)\",\"desc\":\"Il y a une exception pour le suffixe ajouté à [ma](word-ma) (main): dans ce cas, on ne dit pas 'mai' mais directement [mi](word-mi).\",\"fulltext\":\"i Il y a une exception pour le suffixe ajouté à [ma](word-ma) (main): dans ce cas, on ne dit pas 'mai' mais directement [mi](word-mi). gi gui iha ida shei tu (2s) caresser à toi\",\"glo\":\"caresser\",\"deriv\":[\"word-gi\",\"word-gui\",\"word-iha\",\"word-ida\",\"word-shei\"]},\"word-iha\":{\"name\":\"iha\",\"id\":\"word-iha\",\"type\":\"word\",\"noun\":\"toi poétique\",\"etym\":[\"word-i\",\"word-yada\"],\"fulltext\":\"iha word-i word-yada toi poétique\",\"glo\":\"toi poétique\"},\"word-ida\":{\"name\":\"ida\",\"id\":\"word-ida\",\"type\":\"word\",\"noun\":\"toi\",\"etym\":[\"word-i\",\"word-oda\"],\"fulltext\":\"ida word-i word-oda toi\",\"glo\":\"toi\"},\"word-ibu\":{\"name\":\"ibu\",\"id\":\"word-ibu\",\"type\":\"word\",\"prep\":\"pour\",\"fulltext\":\"ibu pour\",\"glo\":\"pour\"},\"word-iki\":{\"name\":\"iki\",\"id\":\"word-iki\",\"type\":\"word\",\"adj\":\"court\",\"suffix\":\"court\",\"see\":[\"word-uki\",\"card-counting\"],\"fulltext\":\"iki uki counting court court\",\"glo\":\"court\"},\"word-im\":{\"name\":\"im\",\"id\":\"word-im\",\"type\":\"word\",\"noun\":\"fermé\",\"fulltext\":\"im fermé\",\"glo\":\"fermé\"},\"word-in\":{\"name\":\"in\",\"id\":\"word-in\",\"type\":\"word\",\"adj\":\"chaud\",\"fulltext\":\"in odin tajin yajin yonin yuina chaud\",\"glo\":\"chaud\",\"deriv\":[\"word-odin\",\"word-tajin\",\"word-yajin\",\"word-yonin\",\"word-yuina\"]},\"word-odin\":{\"name\":\"odin\",\"id\":\"word-odin\",\"type\":\"word\",\"noun\":\"lion.ne\",\"etym\":[\"word-oda\",\"word-in\"],\"fulltext\":\"odin word-oda word-in lion.ne\",\"glo\":\"lion.ne\"},\"word-ina\":{\"name\":\"ina\",\"id\":\"word-ina\",\"type\":\"word\",\"noun\":\"plante\",\"fulltext\":\"ina egina plante\",\"glo\":\"plante\",\"deriv\":[\"word-egina\"]},\"word-ipa\":{\"name\":\"ipa\",\"id\":\"word-ipa\",\"type\":\"word\",\"noun\":\"100\",\"fulltext\":\"ipa 100\",\"glo\":\"100\"},\"word-ipi\":{\"name\":\"ipi\",\"id\":\"word-ipi\",\"type\":\"word\",\"noun\":\"10\",\"fulltext\":\"ipi dji 10\",\"glo\":\"10\",\"deriv\":[\"word-dji\"]},\"word-ipipa\":{\"name\":\"ipipa\",\"id\":\"word-ipipa\",\"type\":\"word\",\"noun\":\"souvenir (être dieu.e)\",\"fulltext\":\"ipipa souvenir (être dieu.e)\",\"glo\":\"souvenir (être dieu.e)\"},\"word-ipu\":{\"name\":\"ipu\",\"id\":\"word-ipu\",\"type\":\"word\",\"noun\":\"1000\",\"fulltext\":\"ipu 1000\",\"glo\":\"1000\"},\"word-ir\":{\"name\":\"ir\",\"id\":\"word-ir\",\"type\":\"word\",\"adj\":\"sous\",\"fulltext\":\"ir sous\",\"glo\":\"sous\"},\"word-iwi\":{\"name\":\"iwi\",\"id\":\"word-iwi\",\"type\":\"word\",\"noun\":\"oiseau, enby\",\"fulltext\":\"iwi duwi iwiu iwigui miwi nowi iwa oiseau, enby\",\"glo\":\"oiseau, enby\",\"deriv\":[\"word-duwi\",\"word-iwiu\",\"word-iwigui\",\"word-miwi\",\"word-nowi\",\"word-iwa\"]},\"word-iwiu\":{\"name\":\"iwiu\",\"id\":\"word-iwiu\",\"type\":\"word\",\"noun\":\"voler\",\"etym\":[\"word-iwi\",\"word-u\"],\"fulltext\":\"iwiu word-iwi word-u voler\",\"glo\":\"voler\"},\"word-iwigui\":{\"name\":\"iwigui\",\"id\":\"word-iwigui\",\"type\":\"word\",\"noun\":\"oiseau qui naît (phénix)\",\"etym\":[\"word-iwi\",\"word-gui\"],\"fulltext\":\"iwigui word-iwi word-gui oiseau qui naît (phénix)\",\"glo\":\"oiseau qui naît (phénix)\"},\"word-iwioda\":{\"name\":\"iwioda\",\"id\":\"word-iwioda\",\"type\":\"word\",\"noun\":\"enby\",\"fulltext\":\"iwioda enby\",\"glo\":\"enby\"},\"word-je\":{\"name\":\"je\",\"id\":\"word-je\",\"type\":\"word\",\"noun\":\"8 (proche, émotion)\",\"fulltext\":\"je 8 (proche, émotion)\",\"glo\":\"8 (proche, émotion)\"},\"word-jepa\":{\"name\":\"jepa\",\"id\":\"word-jepa\",\"type\":\"word\",\"noun\":\"lien, appartenance\",\"fulltext\":\"jepa lien, appartenance\",\"glo\":\"lien, appartenance\"},\"word-jo\":{\"name\":\"jo\",\"id\":\"word-jo\",\"type\":\"word\",\"noun\":\"éponge\",\"fulltext\":\"jo joyon éponge\",\"glo\":\"éponge\",\"deriv\":[\"word-joyon\"]},\"word-joyon\":{\"name\":\"joyon\",\"id\":\"word-joyon\",\"type\":\"word\",\"noun\":\"corps spongieux du clitoris\",\"etym\":[\"word-jo\",\"word-yon\"],\"fulltext\":\"joyon word-jo word-yon corps spongieux du clitoris\",\"glo\":\"corps spongieux du clitoris\"},\"word-jotaj\":{\"name\":\"jotaj\",\"id\":\"word-jotaj\",\"type\":\"word\",\"noun\":\"corps spongieux du pénis\",\"fulltext\":\"jotaj corps spongieux du pénis\",\"glo\":\"corps spongieux du pénis\"},\"word-jom\":{\"name\":\"jom\",\"id\":\"word-jom\",\"type\":\"word\",\"noun\":\"group, famille\",\"fulltext\":\"jom group, famille\",\"glo\":\"group, famille\"},\"word-jana\":{\"name\":\"jana\",\"id\":\"word-jana\",\"type\":\"word\",\"noun\":\"forêt\",\"fulltext\":\"jana forêt\",\"glo\":\"forêt\"},\"word-ka\":{\"name\":\"ka\",\"id\":\"word-ka\",\"type\":\"word\",\"noun\":\"4 (singularité, qui ne peut pas être pensé)\",\"pron\":\"tous\",\"suffix\":\"tous\",\"posit\":\"à quatre pattes\",\"conj\":\"tou.te.s, universel (7p)\",\"fulltext\":\"ka kada neka karu koda kanam tou.te.s, universel (7p) 4 (singularité, qui ne peut pas être pensé) tous tous à quatre pattes\",\"glo\":\"4 (singularité, qui ne peut pas être pensé)\",\"deriv\":[\"word-kada\",\"word-neka\",\"word-karu\",\"word-koda\",\"word-kanam\"]},\"word-kada\":{\"name\":\"kada\",\"id\":\"word-kada\",\"type\":\"word\",\"noun\":\"tou.te.s\",\"etym\":[\"word-ka\",\"word-oda\"],\"fulltext\":\"kada word-ka word-oda tou.te.s\",\"glo\":\"tou.te.s\"},\"word-ika\":{\"name\":\"ika\",\"id\":\"word-ika\",\"type\":\"word\",\"pron\":\"à toi, nous toutes et tous\",\"fulltext\":\"ika à toi, nous toutes et tous\",\"glo\":\"à toi, nous toutes et tous\"},\"word-hamaka\":{\"name\":\"hamaka\",\"id\":\"word-hamaka\",\"type\":\"word\",\"noun\":\"annulaire (4ème doigt)\",\"posit\":\"à quatre pattes (indiquée par un signe de main: pouce contre annulaire)\",\"fulltext\":\"hamaka annulaire (4ème doigt) à quatre pattes (indiquée par un signe de main: pouce contre annulaire)\",\"glo\":\"annulaire (4ème doigt)\"},\"word-neka\":{\"name\":\"neka\",\"id\":\"word-neka\",\"type\":\"word\",\"noun\":\"honte\",\"etym\":[\"word-ne\",\"word-ka\"],\"fulltext\":\"neka word-ne word-ka honte\",\"glo\":\"honte\"},\"word-karu\":{\"name\":\"karu\",\"id\":\"word-karu\",\"type\":\"word\",\"verb\":\"choisir (la réalisation du singulier en soi)\",\"etym\":[\"word-ka\",\"word-ru\"],\"fulltext\":\"karu word-ka word-ru choisir (la réalisation du singulier en soi)\",\"glo\":\"choisir (la réalisation du singulier en soi)\"},\"word-koda\":{\"name\":\"koda\",\"id\":\"word-koda\",\"type\":\"word\",\"noun\":\"cow\",\"etym\":[\"word-ka\",\"word-oda\"],\"fulltext\":\"koda word-ka word-oda cow\",\"glo\":\"cow\"},\"word-ke\":{\"name\":\"ke\",\"id\":\"word-ke\",\"type\":\"word\",\"adj\":\"caché\",\"prefix\":\"caché\",\"fulltext\":\"ke kela caché caché\",\"glo\":\"caché\",\"deriv\":[\"word-kela\"]},\"word-kei\":{\"name\":\"kei\",\"id\":\"word-kei\",\"type\":\"word\",\"conj\":\"tu honorifique (2h)\",\"fulltext\":\"kei keda tu honorifique (2h)\",\"glo\":\"tu honorifique (2h)\",\"deriv\":[\"word-keda\"]},\"word-keda\":{\"name\":\"keda\",\"id\":\"word-keda\",\"type\":\"word\",\"pron\":\"tu honorifique\",\"etym\":[\"word-kei\",\"word-oda\"],\"fulltext\":\"keda word-kei word-oda tu honorifique\",\"glo\":\"tu honorifique\"},\"word-ko\":{\"name\":\"ko\",\"id\":\"word-ko\",\"type\":\"word\",\"prep\":\"avec\",\"fulltext\":\"ko avec\",\"glo\":\"avec\"},\"word-ku\":{\"name\":\"ku\",\"id\":\"word-ku\",\"type\":\"word\",\"noun\":\"corde\",\"verb\":\"attacher\",\"fulltext\":\"ku kuga kupa kulei kuoda corde attacher\",\"glo\":\"corde\",\"deriv\":[\"word-kuga\",\"word-kupa\",\"word-kulei\",\"word-kuoda\"]},\"word-kupa\":{\"name\":\"kupa\",\"id\":\"word-kupa\",\"type\":\"word\",\"desc\":\"Tout attacher, relation marchande au monde, \\\"faire pour\\\", opposé de [gupi](word-gupi) ou [aupa](word-aupa).\",\"etym\":[\"word-ku\",\"word-pa\"],\"fulltext\":\"kupa word-ku word-pa Tout attacher, relation marchande au monde, \\\"faire pour\\\", opposé de [gupi](word-gupi) ou [aupa](word-aupa). nekupa\",\"deriv\":[\"word-nekupa\"]},\"word-nekupa\":{\"name\":\"nekupa\",\"id\":\"word-nekupa\",\"type\":\"word\",\"noun\":\"lâcher prise, ne pas attacher tout\",\"etym\":[\"word-ne\",\"word-kupa\"],\"fulltext\":\"nekupa word-ne word-kupa lâcher prise, ne pas attacher tout\",\"glo\":\"lâcher prise, ne pas attacher tout\"},\"word-kulei\":{\"name\":\"kulei\",\"id\":\"word-kulei\",\"type\":\"word\",\"verb\":\"manipuler\",\"desc\":\"Attacher le temps, manipuler, relation marchande au temps (si alors).\",\"etym\":[\"word-ku\",\"word-lei\"],\"fulltext\":\"kulei word-ku word-lei Attacher le temps, manipuler, relation marchande au temps (si alors). manipuler\",\"glo\":\"manipuler\"},\"word-kuoda\":{\"name\":\"kuoda\",\"id\":\"word-kuoda\",\"type\":\"word\",\"noun\":\"victime-bourreau-sauveu.se.r\",\"desc\":\"Corps attaché.\",\"etym\":[\"word-ku\",\"word-oda\"],\"fulltext\":\"kuoda word-ku word-oda Corps attaché. victime-bourreau-sauveu.se.r\",\"glo\":\"victime-bourreau-sauveu.se.r\"},\"word-la\":{\"name\":\"la\",\"id\":\"word-la\",\"type\":\"word\",\"noun\":\"lèvres\",\"verb\":\"embrasser\",\"fulltext\":\"la kela lapa lana laj ulul lèvres embrasser\",\"glo\":\"lèvres\",\"deriv\":[\"word-kela\",\"word-lapa\",\"word-lana\",\"word-laj\",\"word-ulul\"]},\"word-kela\":{\"name\":\"kela\",\"id\":\"word-kela\",\"type\":\"word\",\"noun\":\"dent\",\"etym\":[\"word-ke\",\"word-la\"],\"fulltext\":\"kela word-ke word-la kelasa kelo kawi dent\",\"glo\":\"dent\",\"deriv\":[\"word-kelasa\",\"word-kelo\",\"word-kawi\"]},\"word-kelasa\":{\"name\":\"kelasa\",\"id\":\"word-kelasa\",\"type\":\"word\",\"noun\":\"couteau\",\"etym\":[\"word-kela\",\"word-sa\"],\"fulltext\":\"kelasa word-kela word-sa couteau\",\"glo\":\"couteau\"},\"word-lapa\":{\"name\":\"lapa\",\"id\":\"word-lapa\",\"type\":\"word\",\"verb\":\"parler (les lèvres partout)\",\"etym\":[\"word-la\",\"word-pa\"],\"fulltext\":\"lapa word-la word-pa lapalapa lapir gilapa parler (les lèvres partout)\",\"glo\":\"parler (les lèvres partout)\",\"deriv\":[\"word-lapalapa\",\"word-lapir\",\"word-gilapa\"]},\"word-shalapa\":{\"name\":\"shalapa\",\"id\":\"word-shalapa\",\"type\":\"word\",\"glo\":\"3PL.parler\",\"see\":[\"word-sha\",\"word-lapa\"],\"fulltext\":\"shalapa sha lapa\"},\"word-lapalapa\":{\"name\":\"lapalapa\",\"id\":\"word-lapalapa\",\"type\":\"word\",\"noun\":\"canard\",\"etym\":[\"word-lapa\",\"word-lapa\"],\"fulltext\":\"lapalapa word-lapa word-lapa canard\",\"glo\":\"canard\"},\"word-kelo\":{\"name\":\"kelo\",\"id\":\"word-kelo\",\"type\":\"word\",\"noun\":\"crocodile\",\"etym\":[\"word-kela\",\"word-oda\"],\"fulltext\":\"kelo word-kela word-oda crocodile\",\"glo\":\"crocodile\"},\"word-kawi\":{\"name\":\"kawi\",\"id\":\"word-kawi\",\"type\":\"word\",\"noun\":\"requin\",\"etym\":[\"word-kela\",\"word-awi\"],\"fulltext\":\"kawi word-kela word-awi requin\",\"glo\":\"requin\"},\"word-lapir\":{\"name\":\"lapir\",\"id\":\"word-lapir\",\"type\":\"word\",\"noun\":\"annoncer\",\"etym\":[\"word-lapa\",\"word-elir\"],\"fulltext\":\"lapir word-lapa word-elir annoncer\",\"glo\":\"annoncer\"},\"word-gilapa\":{\"name\":\"gilapa\",\"id\":\"word-gilapa\",\"type\":\"word\",\"noun\":\"chuchotter (la douceur parle)\",\"etym\":[\"word-gi\",\"word-lapa\"],\"fulltext\":\"gilapa word-gi word-lapa chuchotter (la douceur parle)\",\"glo\":\"chuchotter (la douceur parle)\"},\"word-lana\":{\"name\":\"lana\",\"id\":\"word-lana\",\"type\":\"word\",\"noun\":\"parole, langage, chose des lèvres\",\"etym\":[\"word-la\",\"word-na\"],\"fulltext\":\"lana word-la word-na parole, langage, chose des lèvres\",\"glo\":\"parole, langage, chose des lèvres\"},\"word-lae\":{\"name\":\"lae\",\"id\":\"word-lae\",\"type\":\"word\",\"pron\":\"elle/il/elle.s/ils/eux\",\"fulltext\":\"lae elle/il/elle.s/ils/eux\",\"glo\":\"elle/il/elle.s/ils/eux\"},\"word-laj\":{\"name\":\"laj\",\"id\":\"word-laj\",\"type\":\"word\",\"noun\":\"sourire\",\"verb\":\"sourire\",\"etym\":[\"word-la\",\"word-aj\"],\"fulltext\":\"laj word-la word-aj sourire sourire\",\"glo\":\"sourire\"},\"word-lam\":{\"name\":\"lam\",\"id\":\"word-lam\",\"type\":\"word\",\"verb\":\"laver\",\"noun\":\"eau\",\"fulltext\":\"lam lama lamoa malam melam lamon otalamon eau laver\",\"glo\":\"laver\",\"deriv\":[\"word-lama\",\"word-lamoa\",\"word-malam\",\"word-melam\",\"word-lamon\",\"word-otalamon\"]},\"word-falam\":{\"name\":\"falam\",\"id\":\"word-falam\",\"type\":\"word\",\"noun\":\"larmes profondes\",\"verb\":\"pleurs qui lavent\",\"fulltext\":\"falam larmes profondes pleurs qui lavent\",\"glo\":\"larmes profondes\"},\"word-lama\":{\"name\":\"lama\",\"id\":\"word-lama\",\"type\":\"word\",\"noun\":\"mer\",\"etym\":[\"word-lam\",\"word-da\"],\"fulltext\":\"lama word-lam word-da lamagoa sheulama mer\",\"glo\":\"mer\",\"deriv\":[\"word-lamagoa\",\"word-sheulama\"]},\"word-lamagoa\":{\"name\":\"lamagoa\",\"id\":\"word-lamagoa\",\"type\":\"word\",\"noun\":\"océan\",\"etym\":[\"word-lama\",\"word-goa\"],\"fulltext\":\"lamagoa word-lama word-goa océan\",\"glo\":\"océan\"},\"word-lami\":{\"name\":\"lami\",\"id\":\"word-lami\",\"type\":\"word\",\"noun\":\"vague\",\"fulltext\":\"lami lamioda vague\",\"glo\":\"vague\",\"deriv\":[\"word-lamioda\"]},\"word-lamioda\":{\"name\":\"lamioda\",\"id\":\"word-lamioda\",\"type\":\"word\",\"noun\":\"serpent\",\"etym\":[\"word-lami\",\"word-oda\"],\"fulltext\":\"lamioda word-lami word-oda serpent\",\"glo\":\"serpent\"},\"word-lamoa\":{\"name\":\"lamoa\",\"id\":\"word-lamoa\",\"type\":\"word\",\"noun\":\"source (lieu)\",\"etym\":[\"word-lam\",\"word-on\",\"word-da\"],\"fulltext\":\"lamoa word-lam word-on word-da source (lieu)\",\"glo\":\"source (lieu)\"},\"word-lamu\":{\"name\":\"lamu\",\"id\":\"word-lamu\",\"type\":\"word\",\"verb\":\"boire\",\"fulltext\":\"lamu boire\",\"glo\":\"boire\"},\"word-lau\":{\"name\":\"lau\",\"id\":\"word-lau\",\"type\":\"word\",\"noun\":\"toujours\",\"desc\":\"(le temps aime [lei](word-lei) [au](word-au))\",\"fulltext\":\"lau (le temps aime [lei](word-lei) [au](word-au)) toujours\",\"glo\":\"toujours\"},\"word-le\":{\"name\":\"le\",\"id\":\"word-le\",\"type\":\"word\",\"suffix\":\"annonce d' un nom\",\"desc\":\"L'enchassée avec le nom se termine par [oda](word-oda).\",\"fulltext\":\"le L'enchassée avec le nom se termine par [oda](word-oda). annonce d' un nom\",\"glo\":\"annonce d' un nom\"},\"word-ile\":{\"name\":\"ile\",\"id\":\"word-ile\",\"type\":\"word\",\"prep\":\"toi qui te nomme\",\"fulltext\":\"ile toi qui te nomme\",\"glo\":\"toi qui te nomme\"},\"word-lei\":{\"name\":\"lei\",\"id\":\"word-lei\",\"type\":\"word\",\"noun\":\"le temps\",\"prep\":\"alors\",\"conj\":\"toujours\",\"desc\":\"Donne [lem](word-lem) et [lir](word-lir).\",\"fulltext\":\"lei Donne [lem](word-lem) et [lir](word-lir). kulei toujours le temps alors\",\"glo\":\"le temps\",\"deriv\":[\"word-kulei\"]},\"word-gulei\":{\"name\":\"gulei\",\"id\":\"word-gulei\",\"type\":\"word\",\"noun\":\"le temps de l'expérience\",\"fulltext\":\"gulei le temps de l'expérience\",\"glo\":\"le temps de l'expérience\"},\"word-elei\":{\"name\":\"elei\",\"id\":\"word-elei\",\"type\":\"word\",\"prep\":\"toujours (pas usité, on utilise lau)\",\"fulltext\":\"elei toujours (pas usité, on utilise lau)\",\"glo\":\"toujours (pas usité, on utilise lau)\"},\"word-ulei\":{\"name\":\"ulei\",\"id\":\"word-ulei\",\"type\":\"word\",\"prep\":\"jusqu'à ce que (tirer le temps)\",\"desc\":\"De [ul](word-ul) et [lei](word-lei) [eku](word-eku)\",\"fulltext\":\"ulei De [ul](word-ul) et [lei](word-lei) [eku](word-eku) jusqu'à ce que (tirer le temps)\",\"glo\":\"jusqu'à ce que (tirer le temps)\"},\"word-leiuki\":{\"name\":\"leiuki\",\"id\":\"word-leiuki\",\"type\":\"word\",\"noun\":\"patience\",\"adj\":\"patient.e\",\"desc\":\"De [lei](word-lei) et [uki](word-uki) (temps long).\",\"fulltext\":\"leiuki De [lei](word-lei) et [uki](word-uki) (temps long). patience patient.e\",\"glo\":\"patience\"},\"word-neleiuki\":{\"name\":\"neleiuki\",\"id\":\"word-neleiuki\",\"type\":\"word\",\"noun\":\"impatience\",\"adj\":\"impatient.e\",\"fulltext\":\"neleiuki impatience impatient.e\",\"glo\":\"impatience\"},\"word-lem\":{\"name\":\"lem\",\"id\":\"word-lem\",\"type\":\"word\",\"suffix\":\"passé\",\"verb\":\"vivait\",\"etym\":[\"word-em\"],\"fulltext\":\"lem word-em gulem vivait passé\",\"glo\":\"passé\",\"deriv\":[\"word-gulem\"]},\"word-lemir\":{\"name\":\"lemir\",\"id\":\"word-lemir\",\"type\":\"word\",\"suffix\":\"toujours\",\"desc\":\"De [lem](word-lem) et [lir](word-lir).\",\"fulltext\":\"lemir De [lem](word-lem) et [lir](word-lir). toujours\",\"glo\":\"toujours\"},\"word-elem\":{\"name\":\"elem\",\"id\":\"word-elem\",\"type\":\"word\",\"noun\":\"le passé existe (dans le passé)\",\"fulltext\":\"elem le passé existe (dans le passé)\",\"glo\":\"le passé existe (dans le passé)\"},\"word-elemir\":{\"name\":\"elemir\",\"id\":\"word-elemir\",\"type\":\"word\",\"noun\":\"de toute éternité\",\"fulltext\":\"elemir de toute éternité\",\"glo\":\"de toute éternité\"},\"word-li\":{\"name\":\"li\",\"id\":\"word-li\",\"type\":\"word\",\"noun\":\"bouche\",\"verb\":\"sucer\",\"fulltext\":\"li lipa ligau liu bouche sucer\",\"glo\":\"bouche\",\"deriv\":[\"word-lipa\",\"word-ligau\",\"word-liu\"]},\"word-lipa\":{\"name\":\"lipa\",\"id\":\"word-lipa\",\"type\":\"word\",\"noun\":\"chanter\",\"etym\":[\"word-li\",\"word-pa\"],\"fulltext\":\"lipa word-li word-pa lipawi chanter\",\"glo\":\"chanter\",\"deriv\":[\"word-lipawi\"]},\"word-lipawi\":{\"name\":\"lipawi\",\"id\":\"word-lipawi\",\"type\":\"word\",\"noun\":\"loup (qui chante la lune)\",\"etym\":[\"word-lipa\",\"word-munawi\"],\"fulltext\":\"lipawi word-lipa word-munawi loup (qui chante la lune)\",\"glo\":\"loup (qui chante la lune)\"},\"word-keli\":{\"name\":\"keli\",\"id\":\"word-keli\",\"type\":\"word\",\"noun\":\"langue\",\"verb\":\"lécher\",\"desc\":\"De [ke](word-ke) (caché) et [li](word-li) (bouche): caché dans la bouche.\",\"fulltext\":\"keli De [ke](word-ke) (caché) et [li](word-li) (bouche): caché dans la bouche. langue lécher\",\"glo\":\"langue\"},\"word-ligau\":{\"name\":\"ligau\",\"id\":\"word-ligau\",\"type\":\"word\",\"noun\":\"goûter (attention dans la bouche)\",\"etym\":[\"word-li\",\"word-gau\"],\"fulltext\":\"ligau word-li word-gau goûter (attention dans la bouche)\",\"glo\":\"goûter (attention dans la bouche)\"},\"word-lil\":{\"name\":\"lil\",\"id\":\"word-lil\",\"type\":\"word\",\"adj\":\"petit.e\",\"noun\":\"5\",\"suffix\":\"petit.e\",\"see\":[\"card-counting\"],\"fulltext\":\"lil lipedil gilil limasa lilimasa palajil piulil lisoa counting 5 petit.e petit.e\",\"glo\":\"petit.e\",\"deriv\":[\"word-lipedil\",\"word-gilil\",\"word-limasa\",\"word-lilimasa\",\"word-palajil\",\"word-piulil\",\"word-lisoa\"]},\"word-hamalil\":{\"name\":\"hamalil\",\"id\":\"word-hamalil\",\"type\":\"word\",\"noun\":\"auriculaire (petit doigt, 5ème doigt)\",\"fulltext\":\"hamalil auriculaire (petit doigt, 5ème doigt)\",\"glo\":\"auriculaire (petit doigt, 5ème doigt)\"},\"word-lilaj\":{\"name\":\"lilaj\",\"id\":\"word-lilaj\",\"type\":\"word\",\"noun\":\"étincelle\",\"posit\":\"sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)\",\"desc\":\"De [lil](word-lil) petit et [aj](word-aj) feu.\",\"fulltext\":\"lilaj De [lil](word-lil) petit et [aj](word-aj) feu. étincelle sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)\",\"glo\":\"étincelle\"},\"word-nelil\":{\"name\":\"nelil\",\"id\":\"word-nelil\",\"type\":\"word\",\"noun\":\"confusion\",\"verb\":\"confondre\",\"fulltext\":\"nelil confusion confondre\",\"glo\":\"confusion\"},\"word-lir\":{\"name\":\"lir\",\"id\":\"word-lir\",\"type\":\"word\",\"noun\":\"future\",\"fulltext\":\"lir dahir gulir future\",\"glo\":\"future\",\"deriv\":[\"word-dahir\",\"word-gulir\"]},\"word-lirana\":{\"name\":\"lirana\",\"id\":\"word-lirana\",\"type\":\"word\",\"noun\":\"promesse\",\"etym\":[\"word-lira\",\"word-na\"],\"fulltext\":\"lirana word-lira word-na promesse\",\"glo\":\"promesse\"},\"word-ilir\":{\"name\":\"ilir\",\"id\":\"word-ilir\",\"type\":\"word\",\"noun\":\"future toi (tu vas...)\",\"fulltext\":\"ilir future toi (tu vas...)\",\"glo\":\"future toi (tu vas...)\"},\"word-elir\":{\"name\":\"elir\",\"id\":\"word-elir\",\"type\":\"word\",\"noun\":\"le future exist (dans le future)\",\"fulltext\":\"elir lapir le future exist (dans le future)\",\"glo\":\"le future exist (dans le future)\",\"deriv\":[\"word-lapir\"]},\"word-liu\":{\"name\":\"liu\",\"id\":\"word-liu\",\"type\":\"word\",\"verb\":\"manger\",\"etym\":[\"word-li\",\"word-u\"],\"fulltext\":\"liu word-li word-u manger\",\"glo\":\"manger\"},\"word-lo\":{\"name\":\"lo\",\"id\":\"word-lo\",\"type\":\"word\",\"noun\":\"soumis.e, humide, qui reçoit\",\"fulltext\":\"lo loda loru soumis.e, humide, qui reçoit\",\"glo\":\"soumis.e, humide, qui reçoit\",\"deriv\":[\"word-loda\",\"word-loru\"]},\"word-loda\":{\"name\":\"loda\",\"id\":\"word-loda\",\"type\":\"word\",\"noun\":\"personne soumis.e\",\"etym\":[\"word-lo\",\"word-oda\"],\"fulltext\":\"loda word-lo word-oda personne soumis.e\",\"glo\":\"personne soumis.e\"},\"word-loru\":{\"name\":\"loru\",\"id\":\"word-loru\",\"type\":\"word\",\"noun\":\"devenir petit.e (se soumettre)\",\"adj\":\"humilité\",\"etym\":[\"word-lo\",\"word-ru\"],\"fulltext\":\"loru word-lo word-ru devenir petit.e (se soumettre) humilité\",\"glo\":\"devenir petit.e (se soumettre)\"},\"word-silo\":{\"name\":\"silo\",\"id\":\"word-silo\",\"type\":\"word\",\"adj\":\"doucement\",\"desc\":\"De [si](word-si) et [lo](word-lo) (comme soumis.e).\",\"fulltext\":\"silo De [si](word-si) et [lo](word-lo) (comme soumis.e). doucement\",\"glo\":\"doucement\"},\"word-ma\":{\"name\":\"ma\",\"id\":\"word-ma\",\"type\":\"word\",\"noun\":\"main\",\"verb\":\"prendre dans la main, tenir\",\"desc\":\"\\nVoir aussi les exceptions liées au suffixes.\\n\\n* [i](word-i) (masser, caresser)\\n* [o](word-o) (frapper, faire mal)\\n* [u](word-u) (tirer, pincer)\\n\\nExemple: [17](phrase-17).\\n\\nOn peut aussi utiliser la négation [nema](word-nema) (lâcher).\\n\",\"fulltext\":\"ma \\nVoir aussi les exceptions liées au suffixes.\\n\\n* [i](word-i) (masser, caresser)\\n* [o](word-o) (frapper, faire mal)\\n* [u](word-u) (tirer, pincer)\\n\\nExemple: [17](phrase-17).\\n\\nOn peut aussi utiliser la négation [nema](word-nema) (lâcher).\\n mahim hama djoma nema mu malam masa main prendre dans la main, tenir\",\"glo\":\"main\",\"deriv\":[\"word-mahim\",\"word-hama\",\"word-djoma\",\"word-nema\",\"word-mu\",\"word-malam\",\"word-masa\"]},\"word-hama\":{\"name\":\"hama\",\"id\":\"word-hama\",\"type\":\"word\",\"noun\":\"doigt\",\"etym\":[\"word-ha\",\"word-ma\"],\"fulltext\":\"hama word-ha word-ma doigt\",\"glo\":\"doigt\"},\"word-djoma\":{\"name\":\"djoma\",\"id\":\"word-djoma\",\"type\":\"word\",\"noun\":\"poignet\",\"etym\":[\"word-djo\",\"word-ma\"],\"fulltext\":\"djoma word-djo word-ma poignet\",\"glo\":\"poignet\"},\"word-nema\":{\"name\":\"nema\",\"id\":\"word-nema\",\"type\":\"word\",\"noun\":\"sans main\",\"verb\":\"lâcher\",\"etym\":[\"word-ne\",\"word-ma\"],\"fulltext\":\"nema word-ne word-ma sans main lâcher\",\"glo\":\"sans main\"},\"word-mu\":{\"name\":\"mu\",\"id\":\"word-mu\",\"type\":\"word\",\"verb\":\"tirer, pincer avec la main\",\"etym\":[\"word-ma\",\"word-u\"],\"fulltext\":\"mu word-ma word-u tirer, pincer avec la main\",\"glo\":\"tirer, pincer avec la main\"},\"word-malam\":{\"name\":\"malam\",\"id\":\"word-malam\",\"type\":\"word\",\"noun\":\"maman (la main de l'eau)\",\"etym\":[\"word-ma\",\"word-lam\"],\"fulltext\":\"malam word-ma word-lam maman (la main de l'eau)\",\"glo\":\"maman (la main de l'eau)\"},\"word-miwi\":{\"name\":\"miwi\",\"id\":\"word-miwi\",\"type\":\"word\",\"noun\":\"papillon\",\"etym\":[\"word-mi\",\"word-iwi\"],\"fulltext\":\"miwi word-mi word-iwi papillon\",\"glo\":\"papillon\"},\"word-masa\":{\"name\":\"masa\",\"id\":\"word-masa\",\"type\":\"word\",\"noun\":\"pèle\",\"etym\":[\"word-ma\",\"word-sa\"],\"fulltext\":\"masa word-ma word-sa limasa pèle\",\"glo\":\"pèle\",\"deriv\":[\"word-limasa\"]},\"word-limasa\":{\"name\":\"limasa\",\"id\":\"word-limasa\",\"type\":\"word\",\"noun\":\"cuillère\",\"etym\":[\"word-lil\",\"word-masa\"],\"fulltext\":\"limasa word-lil word-masa lilimasa cuillère\",\"glo\":\"cuillère\",\"deriv\":[\"word-lilimasa\"]},\"word-lilimasa\":{\"name\":\"lilimasa\",\"id\":\"word-lilimasa\",\"type\":\"word\",\"noun\":\"petite cuillère\",\"etym\":[\"word-lil\",\"word-limasa\"],\"fulltext\":\"lilimasa word-lil word-limasa petite cuillère\",\"glo\":\"petite cuillère\"},\"word-me\":{\"name\":\"me\",\"id\":\"word-me\",\"type\":\"word\",\"verb\":\"être en mouvement\",\"prefix\":\"bouger dans\",\"fulltext\":\"me meshe melam être en mouvement bouger dans\",\"glo\":\"être en mouvement\",\"deriv\":[\"word-meshe\",\"word-melam\"]},\"word-meshe\":{\"name\":\"meshe\",\"id\":\"word-meshe\",\"type\":\"word\",\"verb\":\"voler\",\"etym\":[\"word-me\",\"word-she\"],\"fulltext\":\"meshe word-me word-she voler\",\"glo\":\"voler\"},\"word-melam\":{\"name\":\"melam\",\"id\":\"word-melam\",\"type\":\"word\",\"verb\":\"nager\",\"etym\":[\"word-me\",\"word-lam\"],\"fulltext\":\"melam word-me word-lam nager\",\"glo\":\"nager\"},\"word-lom\":{\"name\":\"lom\",\"id\":\"word-lom\",\"type\":\"word\",\"noun\":\"de (fait de)\",\"fulltext\":\"lom de (fait de)\",\"glo\":\"de (fait de)\"},\"word-meu\":{\"name\":\"meu\",\"id\":\"word-meu\",\"type\":\"word\",\"prep\":\"sinon\",\"fulltext\":\"meu sinon\",\"glo\":\"sinon\"},\"word-mi\":{\"name\":\"mi\",\"id\":\"word-mi\",\"type\":\"word\",\"verb\":\"masser\",\"desc\":\"De [ma](word-ma) (main) avec le suffixe [i](word-i) (masser).\",\"fulltext\":\"mi De [ma](word-ma) (main) avec le suffixe [i](word-i) (masser). miwi masser\",\"glo\":\"masser\",\"deriv\":[\"word-miwi\"]},\"word-mo\":{\"name\":\"mo\",\"id\":\"word-mo\",\"type\":\"word\",\"verb\":\"frapper, faire mal (avec la main)\",\"fulltext\":\"mo frapper, faire mal (avec la main)\",\"glo\":\"frapper, faire mal (avec la main)\"},\"word-moon\":{\"name\":\"moon\",\"id\":\"word-moon\",\"type\":\"word\",\"noun\":\"seins\",\"posit\":\"à genoux, buste au sol\",\"fulltext\":\"moon mawi munawi muna seins à genoux, buste au sol\",\"glo\":\"seins\",\"deriv\":[\"word-mawi\",\"word-munawi\",\"word-muna\"]},\"word-munwe\":{\"name\":\"munwe\",\"id\":\"word-munwe\",\"type\":\"word\",\"noun\":\"sein droite\",\"desc\":\"De [mu](word-mu) et [we](word-we).\",\"fulltext\":\"munwe De [mu](word-mu) et [we](word-we). sein droite\",\"glo\":\"sein droite\"},\"word-hamun\":{\"name\":\"hamun\",\"id\":\"word-hamun\",\"type\":\"word\",\"noun\":\"téton\",\"fulltext\":\"hamun hamunon téton\",\"glo\":\"téton\",\"deriv\":[\"word-hamunon\"]},\"word-munawi\":{\"name\":\"munawi\",\"id\":\"word-munawi\",\"type\":\"word\",\"noun\":\"lune\",\"etym\":[\"word-moon\",\"word-awi\"],\"fulltext\":\"munawi word-moon word-awi lipawi lune\",\"glo\":\"lune\",\"deriv\":[\"word-lipawi\"]},\"word-muna\":{\"name\":\"muna\",\"id\":\"word-muna\",\"type\":\"word\",\"noun\":\"biberon\",\"etym\":[\"word-moon\",\"word-na\"],\"fulltext\":\"muna word-moon word-na biberon\",\"glo\":\"biberon\"},\"word-na\":{\"name\":\"na\",\"id\":\"word-na\",\"type\":\"word\",\"suffix\":\"incarné (chose)\",\"fulltext\":\"na agana fiona gana guwuna lana lirana muna piuna shana tiona yuina incarné (chose)\",\"glo\":\"incarné (chose)\",\"deriv\":[\"word-agana\",\"word-fiona\",\"word-gana\",\"word-guwuna\",\"word-lana\",\"word-lirana\",\"word-muna\",\"word-piuna\",\"word-shana\",\"word-tiona\",\"word-yuina\"]},\"word-naj\":{\"name\":\"naj\",\"id\":\"word-naj\",\"type\":\"word\",\"noun\":\"frisson, nuage\",\"verb\":\"frissonner\",\"fulltext\":\"naj frisson, nuage frissonner\",\"glo\":\"frisson, nuage\"},\"word-najlo\":{\"name\":\"najlo\",\"id\":\"word-najlo\",\"type\":\"word\",\"noun\":\"orgasme,pluie\",\"fulltext\":\"najlo orgasme,pluie\",\"glo\":\"orgasme,pluie\"},\"word-najapa\":{\"name\":\"najapa\",\"id\":\"word-najapa\",\"type\":\"word\",\"noun\":\"brouillard\",\"desc\":\"De [naj](word-naj) (nuage) et [pa](word-pa) (partout).\",\"fulltext\":\"najapa De [naj](word-naj) (nuage) et [pa](word-pa) (partout). brouillard\",\"glo\":\"brouillard\"},\"word-nam\":{\"name\":\"nam\",\"id\":\"word-nam\",\"type\":\"word\",\"noun\":\"bois\",\"fulltext\":\"nam kanam namel bois\",\"glo\":\"bois\",\"deriv\":[\"word-kanam\",\"word-namel\"]},\"word-kanam\":{\"name\":\"kanam\",\"id\":\"word-kanam\",\"type\":\"word\",\"noun\":\"chaise\",\"etym\":[\"word-ka\",\"word-nam\"],\"fulltext\":\"kanam word-ka word-nam chaise\",\"glo\":\"chaise\"},\"word-namel\":{\"name\":\"namel\",\"id\":\"word-namel\",\"type\":\"word\",\"noun\":\"bâton (bois droit)\",\"glo\":\"bâton\",\"etym\":[\"word-nam\",\"word-el\"],\"fulltext\":\"namel word-nam word-el bâton (bois droit)\"},\"word-ne\":{\"name\":\"ne\",\"id\":\"word-ne\",\"type\":\"word\",\"prefix\":\"négation, monde des mots, transe commune\",\"fulltext\":\"ne nem neka nekupa nema negupi nesu négation, monde des mots, transe commune\",\"glo\":\"négation, monde des mots, transe commune\",\"deriv\":[\"word-nem\",\"word-neka\",\"word-nekupa\",\"word-nema\",\"word-negupi\",\"word-nesu\"]},\"word-neoda\":{\"name\":\"neoda\",\"id\":\"word-neoda\",\"type\":\"word\",\"noun\":\"cadavre, sans corps, personne (no body)\",\"fulltext\":\"neoda cadavre, sans corps, personne (no body)\",\"glo\":\"cadavre, sans corps, personne (no body)\"},\"word-nepa\":{\"name\":\"nepa\",\"id\":\"word-nepa\",\"type\":\"word\",\"noun\":\"abysse, néant\",\"fulltext\":\"nepa abysse, néant\",\"glo\":\"abysse, néant\"},\"word-nelo\":{\"name\":\"nelo\",\"id\":\"word-nelo\",\"type\":\"word\",\"verb\":\"lutter\",\"desc\":\"De [ne](word-ne) et [lo](word-lo), ne pas se soumettre.\",\"fulltext\":\"nelo De [ne](word-ne) et [lo](word-lo), ne pas se soumettre. lutter\",\"glo\":\"lutter\"},\"word-no\":{\"name\":\"no\",\"id\":\"word-no\",\"type\":\"word\",\"prefix\":\"derrière\",\"desc\":\"Inspiré de nord (on regarde le sud)\",\"fulltext\":\"no Inspiré de nord (on regarde le sud) noha noda nona nowi nopi noyin derrière\",\"glo\":\"derrière\",\"deriv\":[\"word-noha\",\"word-noda\",\"word-nona\",\"word-nowi\",\"word-nopi\",\"word-noyin\"]},\"word-noda\":{\"name\":\"noda\",\"id\":\"word-noda\",\"type\":\"word\",\"noun\":\"grand.e soeur/frère\",\"etym\":[\"word-no\",\"word-oda\"],\"fulltext\":\"noda word-no word-oda grand.e soeur/frère\",\"glo\":\"grand.e soeur/frère\"},\"word-noto\":{\"name\":\"noto\",\"id\":\"word-noto\",\"type\":\"word\",\"noun\":\"grand frère/vent\",\"fulltext\":\"noto grand frère/vent\",\"glo\":\"grand frère/vent\"},\"word-nona\":{\"name\":\"nona\",\"id\":\"word-nona\",\"type\":\"word\",\"noun\":\"grande soeur/arbre\",\"etym\":[\"word-no\",\"word-ana\"],\"fulltext\":\"nona word-no word-ana grande soeur/arbre\",\"glo\":\"grande soeur/arbre\"},\"word-nowi\":{\"name\":\"nowi\",\"id\":\"word-nowi\",\"type\":\"word\",\"noun\":\"grand.e frère/soeur enby/oiseau\",\"etym\":[\"word-no\",\"word-iwi\"],\"fulltext\":\"nowi word-no word-iwi grand.e frère/soeur enby/oiseau\",\"glo\":\"grand.e frère/soeur enby/oiseau\"},\"word-nopi\":{\"name\":\"nopi\",\"id\":\"word-nopi\",\"type\":\"word\",\"noun\":\"dos\",\"posit\":\"allongé sur le dos\",\"etym\":[\"word-no\",\"word-pi\"],\"fulltext\":\"nopi word-no word-pi djonopi dos allongé sur le dos\",\"glo\":\"dos\",\"deriv\":[\"word-djonopi\"]},\"word-djonopi\":{\"name\":\"djonopi\",\"id\":\"word-djonopi\",\"type\":\"word\",\"noun\":\"bas du dos\",\"etym\":[\"word-djo\",\"word-nopi\"],\"fulltext\":\"djonopi word-djo word-nopi bas du dos\",\"glo\":\"bas du dos\"},\"word-noyin\":{\"name\":\"noyin\",\"id\":\"word-noyin\",\"type\":\"word\",\"noun\":\"fond du vagin (col de l'utérus)\",\"etym\":[\"word-no\",\"word-yin\"],\"fulltext\":\"noyin word-no word-yin fond du vagin (col de l'utérus)\",\"glo\":\"fond du vagin (col de l'utérus)\"},\"word-noa\":{\"name\":\"noa\",\"id\":\"word-noa\",\"type\":\"word\",\"noun\":\"peau\",\"fulltext\":\"noa peau\",\"glo\":\"peau\"},\"word-noam\":{\"name\":\"noam\",\"id\":\"word-noam\",\"type\":\"word\",\"verb\":\"toucher\",\"fulltext\":\"noam toucher\",\"glo\":\"toucher\"},\"word-nu\":{\"name\":\"nu\",\"id\":\"word-nu\",\"type\":\"word\",\"verb\":\"broder (le truc solitaire, concentré.e)\",\"fulltext\":\"nu pinu broder (le truc solitaire, concentré.e)\",\"glo\":\"broder (le truc solitaire, concentré.e)\",\"deriv\":[\"word-pinu\"]},\"word-sinu\":{\"name\":\"sinu\",\"id\":\"word-sinu\",\"type\":\"word\",\"adj\":\"délicatement\",\"desc\":\"De [si](word-si) et [nu](word-nu) (...).\",\"fulltext\":\"sinu De [si](word-si) et [nu](word-nu) (...). délicatement\",\"glo\":\"délicatement\"},\"word-nur\":{\"name\":\"nur\",\"id\":\"word-nur\",\"type\":\"word\",\"adv\":\"seulement\",\"fulltext\":\"nur seulement\",\"glo\":\"seulement\"},\"word-o\":{\"name\":\"o\",\"id\":\"word-o\",\"type\":\"word\",\"noun\":\"on\",\"suffix\":\"frapper, faire mal\",\"prefix\":\"en bas ?? me ??\",\"conj\":\"on (1sp)\",\"desc\":\"Le \\\"on\\\" est important: on est pas séparés. Ça indique à la fois \\\"moi et les autres\\\" (même imaginés) et \\\"toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc\\\". Quand on dit [o](word-o), on implique tout ça. Si \\\"on\\\" te fait l'amour, c'est un monde entier qui vient à ta rencontre.\",\"fulltext\":\"o Le \\\"on\\\" est important: on est pas séparés. Ça indique à la fois \\\"moi et les autres\\\" (même imaginés) et \\\"toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc\\\". Quand on dit [o](word-o), on implique tout ça. Si \\\"on\\\" te fait l'amour, c'est un monde entier qui vient à ta rencontre. ago gao go guo oha odo on (1sp) on en bas ?? me ?? frapper, faire mal\",\"glo\":\"on\",\"deriv\":[\"word-ago\",\"word-gao\",\"word-go\",\"word-guo\",\"word-oha\",\"word-odo\"]},\"word-hafo\":{\"name\":\"hafo\",\"id\":\"word-hafo\",\"type\":\"word\",\"verb\":\"tomber (tête fouettée)\",\"fulltext\":\"hafo tomber (tête fouettée)\",\"glo\":\"tomber (tête fouettée)\"},\"word-obo\":{\"name\":\"obo\",\"id\":\"word-obo\",\"type\":\"word\",\"noun\":\"pubis (bas du ventre)\",\"desc\":\"version familière de [djobo](word-djobo)\",\"etym\":[\"word-djo\",\"word-bo\"],\"fulltext\":\"obo word-djo word-bo version familière de [djobo](word-djobo) pubis (bas du ventre)\",\"glo\":\"pubis (bas du ventre)\"},\"word-habo\":{\"name\":\"habo\",\"id\":\"word-habo\",\"type\":\"word\",\"noun\":\"plexus\",\"fulltext\":\"habo plexus\",\"glo\":\"plexus\"},\"word-djobo\":{\"name\":\"djobo\",\"id\":\"word-djobo\",\"type\":\"word\",\"noun\":\"pubis\",\"desc\":\"version longue de [obo](word-obo)\",\"fulltext\":\"djobo version longue de [obo](word-obo) pubis\",\"glo\":\"pubis\"},\"word-yoda\":{\"name\":\"yoda\",\"id\":\"word-yoda\",\"type\":\"word\",\"noun\":\"corps avec une vulve\",\"fulltext\":\"yoda corps avec une vulve\",\"glo\":\"corps avec une vulve\"},\"word-oda\":{\"name\":\"oda\",\"id\":\"word-oda\",\"type\":\"word\",\"noun\":\"corps, lieu vivant (\\\"on\\\")\",\"adj\":\"vivant\",\"suffix\":\"animal comme, qui a\",\"desc\":\"De là vient [keoda](word-keoda) (**la langue cachée du corps**).\",\"fulltext\":\"oda De là vient [keoda](word-keoda) (**la langue cachée du corps**). yada doda djoda goda ida odin kada koda keda kuoda kelo lamioda loda noda yosa oho odo odu otoda peda pida shada shida shoda uloda yida corps, lieu vivant (\\\"on\\\") vivant animal comme, qui a\",\"glo\":\"corps, lieu vivant (\\\"on\\\")\",\"deriv\":[\"word-yada\",\"word-doda\",\"word-djoda\",\"word-goda\",\"word-ida\",\"word-odin\",\"word-kada\",\"word-koda\",\"word-keda\",\"word-kuoda\",\"word-kelo\",\"word-lamioda\",\"word-loda\",\"word-noda\",\"word-yosa\",\"word-oho\",\"word-odo\",\"word-odu\",\"word-otoda\",\"word-peda\",\"word-pida\",\"word-shada\",\"word-shida\",\"word-shoda\",\"word-uloda\",\"word-yida\"]},\"word-oha\":{\"name\":\"oha\",\"id\":\"word-oha\",\"type\":\"word\",\"pron\":\"soi poétique (nous indéf)\",\"etym\":[\"word-o\",\"word-yada\"],\"fulltext\":\"oha word-o word-yada soi poétique (nous indéf)\",\"glo\":\"soi poétique (nous indéf)\"},\"word-keoda\":{\"name\":\"keoda\",\"id\":\"word-keoda\",\"type\":\"word\",\"noun\":\"lieu de vie cachée, langue cachée du corps\",\"fulltext\":\"keoda lieu de vie cachée, langue cachée du corps\",\"glo\":\"lieu de vie cachée, langue cachée du corps\"},\"word-yosa\":{\"name\":\"yosa\",\"id\":\"word-yosa\",\"type\":\"word\",\"noun\":\"humain\",\"etym\":[\"word-yo\",\"word-oda\"],\"fulltext\":\"yosa word-yo word-oda humain\",\"glo\":\"humain\"},\"word-oho\":{\"name\":\"oho\",\"id\":\"word-oho\",\"type\":\"word\",\"noun\":\"iel\",\"etym\":[\"word-a\",\"word-oda\"],\"fulltext\":\"oho word-a word-oda iel\",\"glo\":\"iel\"},\"word-odo\":{\"name\":\"odo\",\"id\":\"word-odo\",\"type\":\"word\",\"noun\":\"partir\",\"etym\":[\"word-oda\",\"word-o\"],\"fulltext\":\"odo word-oda word-o partir\",\"glo\":\"partir\"},\"word-odu\":{\"name\":\"odu\",\"id\":\"word-odu\",\"type\":\"word\",\"noun\":\"rejoindre, venir, se tirer le corps vers\",\"etym\":[\"word-oda\",\"word-u\"],\"fulltext\":\"odu word-oda word-u rejoindre, venir, se tirer le corps vers\",\"glo\":\"rejoindre, venir, se tirer le corps vers\"},\"word-ojo\":{\"name\":\"ojo\",\"id\":\"word-ojo\",\"type\":\"word\",\"adj\":\"centre\",\"fulltext\":\"ojo centre\",\"glo\":\"centre\"},\"word-om\":{\"name\":\"om\",\"id\":\"word-om\",\"type\":\"word\",\"noun\":\"transcendance\",\"adj\":\"ouvert\",\"prefix\":\"transcender\",\"suffix\":\"temple, lieu sacré\",\"fulltext\":\"om transcendance ouvert transcender temple, lieu sacré\",\"glo\":\"transcendance\"},\"word-on\":{\"name\":\"on\",\"id\":\"word-on\",\"type\":\"word\",\"noun\":\"source\",\"verb\":\"faire naître (apparaître)\",\"fulltext\":\"on lamoa lamon yaon yohon hamunon onsho source faire naître (apparaître)\",\"glo\":\"source\",\"deriv\":[\"word-lamoa\",\"word-lamon\",\"word-yaon\",\"word-yohon\",\"word-hamunon\",\"word-onsho\"]},\"word-lamon\":{\"name\":\"lamon\",\"id\":\"word-lamon\",\"type\":\"word\",\"noun\":\"urètre (source de l'eau)\",\"etym\":[\"word-lam\",\"word-on\"],\"fulltext\":\"lamon word-lam word-on urètre (source de l'eau)\",\"glo\":\"urètre (source de l'eau)\"},\"word-yaon\":{\"name\":\"yaon\",\"id\":\"word-yaon\",\"type\":\"word\",\"noun\":\"lever de la nuit (coucher de soleil)\",\"etym\":[\"word-ya\",\"word-on\"],\"fulltext\":\"yaon word-ya word-on yaonagi lever de la nuit (coucher de soleil)\",\"glo\":\"lever de la nuit (coucher de soleil)\",\"deriv\":[\"word-yaonagi\"]},\"word-yohon\":{\"name\":\"yohon\",\"id\":\"word-yohon\",\"type\":\"word\",\"noun\":\"lever du jour\",\"etym\":[\"word-yo\",\"word-on\"],\"fulltext\":\"yohon word-yo word-on yohonagi lever du jour\",\"glo\":\"lever du jour\",\"deriv\":[\"word-yohonagi\"]},\"word-ora\":{\"name\":\"ora\",\"id\":\"word-ora\",\"type\":\"word\",\"noun\":\"excitation, envie\",\"desc\":\"Utiliser pour les phrase interrogatives.\",\"fulltext\":\"ora Utiliser pour les phrase interrogatives. excitation, envie\",\"glo\":\"excitation, envie\"},\"word-ota\":{\"name\":\"ota\",\"id\":\"word-ota\",\"type\":\"word\",\"noun\":\"source, ouverture\",\"fulltext\":\"ota otalamon kepalota source, ouverture\",\"glo\":\"source, ouverture\",\"deriv\":[\"word-otalamon\",\"word-kepalota\"]},\"word-otalamon\":{\"name\":\"otalamon\",\"id\":\"word-otalamon\",\"type\":\"word\",\"noun\":\"cercle de l'urètre\",\"desc\":\"zone autour de l'urètre (chez la femme)\",\"etym\":[\"word-lam\",\"word-ota\"],\"fulltext\":\"otalamon word-lam word-ota zone autour de l'urètre (chez la femme) cercle de l'urètre\",\"glo\":\"cercle de l'urètre\"},\"word-hamunon\":{\"name\":\"hamunon\",\"id\":\"word-hamunon\",\"type\":\"word\",\"noun\":\"auréole autour du mamelon\",\"etym\":[\"word-hamun\",\"word-on\"],\"fulltext\":\"hamunon word-hamun word-on auréole autour du mamelon\",\"glo\":\"auréole autour du mamelon\"},\"word-kepalota\":{\"name\":\"kepalota\",\"id\":\"word-kepalota\",\"type\":\"word\",\"noun\":\"zone autour de l'anus\",\"etym\":[\"word-kepal\",\"word-ota\"],\"fulltext\":\"kepalota word-kepal word-ota zone autour de l'anus\",\"glo\":\"zone autour de l'anus\"},\"word-oto\":{\"name\":\"oto\",\"id\":\"word-oto\",\"type\":\"word\",\"noun\":\"vent\",\"adj\":\"masculin\",\"fulltext\":\"oto duto otoda vent masculin\",\"glo\":\"vent\",\"deriv\":[\"word-duto\",\"word-otoda\"]},\"word-otoda\":{\"name\":\"otoda\",\"id\":\"word-otoda\",\"type\":\"word\",\"noun\":\"homme\",\"etym\":[\"word-oto\",\"word-oda\"],\"fulltext\":\"otoda word-oto word-oda homme\",\"glo\":\"homme\"},\"word-otana\":{\"name\":\"otana\",\"id\":\"word-otana\",\"type\":\"word\",\"noun\":\"homme-femme\",\"fulltext\":\"otana homme-femme\",\"glo\":\"homme-femme\"},\"word-otiwi\":{\"name\":\"otiwi\",\"id\":\"word-otiwi\",\"type\":\"word\",\"noun\":\"homme-enby\",\"fulltext\":\"otiwi homme-enby\",\"glo\":\"homme-enby\"},\"word-pa\":{\"name\":\"pa\",\"id\":\"word-pa\",\"type\":\"word\",\"noun\":\"tout, le mystère\",\"fulltext\":\"pa aupa gupa kupa lapa lipa papi pipa tout, le mystère\",\"glo\":\"tout, le mystère\",\"deriv\":[\"word-aupa\",\"word-gupa\",\"word-kupa\",\"word-lapa\",\"word-lipa\",\"word-papi\",\"word-pipa\"]},\"word-pali\":{\"name\":\"pali\",\"id\":\"word-pali\",\"type\":\"word\",\"noun\":\"enchanter (chanter de dedans)\",\"fulltext\":\"pali enchanter (chanter de dedans)\",\"glo\":\"enchanter (chanter de dedans)\"},\"word-pahau\":{\"name\":\"pahau\",\"id\":\"word-pahau\",\"type\":\"word\",\"verb\":\"pardonner (tout recevoir)\",\"desc\":\"[aupa](word-aupa) et [pahau](word-pahau) sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner [pahau](word-pahau) c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent [aupa](word-aupa). La confiance, c'est recevoir le temps entier [augu](word-augu) (passé, présent, avenir), accepter le processus de vie.\",\"fulltext\":\"pahau [aupa](word-aupa) et [pahau](word-pahau) sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner [pahau](word-pahau) c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent [aupa](word-aupa). La confiance, c'est recevoir le temps entier [augu](word-augu) (passé, présent, avenir), accepter le processus de vie. pardonner (tout recevoir)\",\"glo\":\"pardonner (tout recevoir)\"},\"word-paoda\":{\"name\":\"paoda\",\"id\":\"word-paoda\",\"type\":\"word\",\"pron\":\"tou.te.s\",\"fulltext\":\"paoda tou.te.s\",\"glo\":\"tou.te.s\"},\"word-pal\":{\"name\":\"pal\",\"id\":\"word-pal\",\"type\":\"word\",\"noun\":\"fesses\",\"fulltext\":\"pal fesses\",\"glo\":\"fesses\"},\"word-palaj\":{\"name\":\"palaj\",\"id\":\"word-palaj\",\"type\":\"word\",\"noun\":\"soleil (fesses de feu)\",\"fulltext\":\"palaj palajil soleil (fesses de feu)\",\"glo\":\"soleil (fesses de feu)\",\"deriv\":[\"word-palajil\"]},\"word-palajil\":{\"name\":\"palajil\",\"id\":\"word-palajil\",\"type\":\"word\",\"noun\":\"abricot, juillet\",\"etym\":[\"word-palaj\",\"word-lil\"],\"fulltext\":\"palajil word-palaj word-lil abricot, juillet\",\"glo\":\"abricot, juillet\"},\"word-kepal\":{\"name\":\"kepal\",\"id\":\"word-kepal\",\"type\":\"word\",\"noun\":\"anus\",\"desc\":\"De [ke](word-ke) (caché) et [pal](word-pal) (fesses).\",\"fulltext\":\"kepal De [ke](word-ke) (caché) et [pal](word-pal) (fesses). kepalota anus\",\"glo\":\"anus\",\"deriv\":[\"word-kepalota\"]},\"word-hapal\":{\"name\":\"hapal\",\"id\":\"word-hapal\",\"type\":\"word\",\"noun\":\"haut des fesses\",\"fulltext\":\"hapal haut des fesses\",\"glo\":\"haut des fesses\"},\"word-pan\":{\"name\":\"pan\",\"id\":\"word-pan\",\"type\":\"word\",\"noun\":\"rouge\",\"fulltext\":\"pan dudapan rouge\",\"glo\":\"rouge\",\"deriv\":[\"word-dudapan\"]},\"word-dudapan\":{\"name\":\"dudapan\",\"id\":\"word-dudapan\",\"type\":\"word\",\"noun\":\"renard\",\"etym\":[\"word-doda\",\"word-pan\"],\"fulltext\":\"dudapan word-doda word-pan renard\",\"glo\":\"renard\"},\"word-pe\":{\"name\":\"pe\",\"id\":\"word-pe\",\"type\":\"word\",\"noun\":\"3\",\"suffix\":\"quelques un.e.s\",\"conj\":\"quelques un.e.s (6p)\",\"posit\":\"deux jambes et un anus (levrette) = mun\",\"fulltext\":\"pe pedil peda quelques un.e.s (6p) 3 quelques un.e.s deux jambes et un anus (levrette) = mun\",\"glo\":\"3\",\"deriv\":[\"word-pedil\",\"word-peda\"]},\"word-peda\":{\"name\":\"peda\",\"id\":\"word-peda\",\"type\":\"word\",\"pron\":\"quelques\",\"etym\":[\"word-pe\",\"word-oda\"],\"fulltext\":\"peda word-pe word-oda quelques\",\"glo\":\"quelques\"},\"word-hamape\":{\"name\":\"hamape\",\"id\":\"word-hamape\",\"type\":\"word\",\"noun\":\"majeur (3ème doigt)\",\"posit\":\"levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)\",\"fulltext\":\"hamape majeur (3ème doigt) levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)\",\"glo\":\"majeur (3ème doigt)\"},\"word-nepe\":{\"name\":\"nepe\",\"id\":\"word-nepe\",\"type\":\"word\",\"noun\":\"isolement (oubli de \\\"pa\\\")\",\"fulltext\":\"nepe isolement (oubli de \\\"pa\\\")\",\"glo\":\"isolement (oubli de \\\"pa\\\")\"},\"word-peu\":{\"name\":\"peu\",\"id\":\"word-peu\",\"type\":\"word\",\"noun\":\"peur\",\"fulltext\":\"peu agupeu peur\",\"glo\":\"peur\",\"deriv\":[\"word-agupeu\"]},\"word-agupeu\":{\"name\":\"agupeu\",\"id\":\"word-agupeu\",\"type\":\"word\",\"noun\":\"courage\",\"etym\":[\"word-agu\",\"word-peu\"],\"desc\":\"Écouter la peur\",\"fulltext\":\"agupeu word-agu word-peu Écouter la peur courage\",\"glo\":\"courage\"},\"word-pi\":{\"name\":\"pi\",\"id\":\"word-pi\",\"type\":\"word\",\"adv\":\"ici, origine\",\"noun\":\"1\",\"posit\":\"debout\",\"conj\":\"je (1s)\",\"desc\":\"Opposé de [pa](word-pa).\",\"fulltext\":\"pi Opposé de [pa](word-pa). piha ajapi dji nopi pida papi pipa pinu aupi gupi je (1s) 1 debout ici, origine\",\"glo\":\"ici, origine\",\"deriv\":[\"word-piha\",\"word-ajapi\",\"word-dji\",\"word-nopi\",\"word-pida\",\"word-papi\",\"word-pipa\",\"word-pinu\",\"word-aupi\",\"word-gupi\"]},\"word-pida\":{\"name\":\"pida\",\"id\":\"word-pida\",\"type\":\"word\",\"noun\":\"moi\",\"etym\":[\"word-pi\",\"word-oda\"],\"fulltext\":\"pida word-pi word-oda moi\",\"glo\":\"moi\"},\"word-papi\":{\"name\":\"papi\",\"id\":\"word-papi\",\"type\":\"word\",\"noun\":\"sagesse (tout écho en soi)\",\"etym\":[\"word-pa\",\"word-pi\"],\"fulltext\":\"papi word-pa word-pi sagesse (tout écho en soi)\",\"glo\":\"sagesse (tout écho en soi)\"},\"word-pipa\":{\"name\":\"pipa\",\"id\":\"word-pipa\",\"type\":\"word\",\"noun\":\"innocence (soi partout)\",\"etym\":[\"word-pi\",\"word-pa\"],\"fulltext\":\"pipa word-pi word-pa innocence (soi partout)\",\"glo\":\"innocence (soi partout)\"},\"word-pinu\":{\"name\":\"pinu\",\"id\":\"word-pinu\",\"type\":\"word\",\"noun\":\"seul (le soi brodé, je brode)\",\"etym\":[\"word-pi\",\"word-nu\"],\"fulltext\":\"pinu word-pi word-nu seul (le soi brodé, je brode)\",\"glo\":\"seul (le soi brodé, je brode)\"},\"word-aupi\":{\"name\":\"aupi\",\"id\":\"word-aupi\",\"type\":\"word\",\"noun\":\"S'aimer soi-même, ici.\",\"etym\":[\"word-au\",\"word-pi\"],\"fulltext\":\"aupi word-au word-pi S'aimer soi-même, ici.\",\"glo\":\"S'aimer soi-même, ici.\"},\"word-gupi\":{\"name\":\"gupi\",\"id\":\"word-gupi\",\"type\":\"word\",\"noun\":\"intégrer le mouvement, ressentir, se laisser transformer\",\"etym\":[\"word-gu\",\"word-pi\"],\"fulltext\":\"gupi word-gu word-pi negupi intégrer le mouvement, ressentir, se laisser transformer\",\"glo\":\"intégrer le mouvement, ressentir, se laisser transformer\",\"deriv\":[\"word-negupi\"]},\"word-negupi\":{\"name\":\"negupi\",\"id\":\"word-negupi\",\"type\":\"word\",\"noun\":\"lutter contre l'expérience\",\"etym\":[\"word-ne\",\"word-gupi\"],\"fulltext\":\"negupi word-ne word-gupi lutter contre l'expérience\",\"glo\":\"lutter contre l'expérience\"},\"word-nepi\":{\"name\":\"nepi\",\"id\":\"word-nepi\",\"type\":\"word\",\"noun\":\"division\",\"fulltext\":\"nepi division\",\"glo\":\"division\"},\"word-djopi\":{\"name\":\"djopi\",\"id\":\"word-djopi\",\"type\":\"word\",\"noun\":\"soi proximal (soi profond, souvent le passé)\",\"fulltext\":\"djopi soi proximal (soi profond, souvent le passé)\",\"glo\":\"soi proximal (soi profond, souvent le passé)\"},\"word-hapi\":{\"name\":\"hapi\",\"id\":\"word-hapi\",\"type\":\"word\",\"noun\":\"soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\",\"fulltext\":\"hapi soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\",\"glo\":\"soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\"},\"word-pio\":{\"name\":\"pio\",\"id\":\"word-pio\",\"type\":\"word\",\"noun\":\"périnée, origine\",\"fulltext\":\"pio périnée, origine\",\"glo\":\"périnée, origine\"},\"word-piu\":{\"name\":\"piu\",\"id\":\"word-piu\",\"type\":\"word\",\"noun\":\"vert\",\"fulltext\":\"piu piuna piulil vert\",\"glo\":\"vert\",\"deriv\":[\"word-piuna\",\"word-piulil\"]},\"word-piuna\":{\"name\":\"piuna\",\"id\":\"word-piuna\",\"type\":\"word\",\"noun\":\"épinards (mai)\",\"etym\":[\"word-piu\",\"word-na\"],\"fulltext\":\"piuna word-piu word-na épinards (mai)\",\"glo\":\"épinards (mai)\"},\"word-piulil\":{\"name\":\"piulil\",\"id\":\"word-piulil\",\"type\":\"word\",\"noun\":\"petits pois\",\"etym\":[\"word-piu\",\"word-lil\"],\"fulltext\":\"piulil word-piu word-lil petits pois\",\"glo\":\"petits pois\"},\"word-piutaj\":{\"name\":\"piutaj\",\"id\":\"word-piutaj\",\"type\":\"word\",\"noun\":\"poireaux (mars)\",\"fulltext\":\"piutaj poireaux (mars)\",\"glo\":\"poireaux (mars)\"},\"card-corresp\":{\"name\":\"corresp\",\"id\":\"card-corresp\",\"type\":\"card\",\"lang\":\"Correspondances, Baudelaire (1821-1867)\",\"desc\":\"\\n[18](phrase-18)  \\n[19](phrase-19)  \\n[20](phrase-20)  \\n[21](phrase-21)  \\n[22](phrase-22)  \\n\",\"fulltext\":\"corresp \\n[18](phrase-18)  \\n[19](phrase-19)  \\n[20](phrase-20)  \\n[21](phrase-21)  \\n[22](phrase-22)  \\n Correspondances, Baudelaire (1821-1867)\",\"glo\":\"Correspondances, Baudelaire (1821-1867)\"},\"word-pon\":{\"name\":\"pon\",\"id\":\"word-pon\",\"type\":\"word\",\"noun\":\"orange (couleur)\",\"fulltext\":\"pon orange (couleur)\",\"glo\":\"orange (couleur)\"},\"word-pona\":{\"name\":\"pona\",\"id\":\"word-pona\",\"type\":\"word\",\"noun\":\"orange (fruit), novembre\",\"fulltext\":\"pona orange (fruit), novembre\",\"glo\":\"orange (fruit), novembre\"},\"word-ponalil\":{\"name\":\"ponalil\",\"id\":\"word-ponalil\",\"type\":\"word\",\"noun\":\"mandarine (fruit), décembre\",\"fulltext\":\"ponalil mandarine (fruit), décembre\",\"glo\":\"mandarine (fruit), décembre\"},\"word-pu\":{\"name\":\"pu\",\"id\":\"word-pu\",\"type\":\"word\",\"noun\":\"couleur tomate\",\"fulltext\":\"pu putam couleur tomate\",\"glo\":\"couleur tomate\",\"deriv\":[\"word-putam\"]},\"word-putam\":{\"name\":\"putam\",\"id\":\"word-putam\",\"type\":\"word\",\"noun\":\"tomate (fruit), août\",\"etym\":[\"word-pu\",\"word-tam\"],\"fulltext\":\"putam word-pu word-tam tomate (fruit), août\",\"glo\":\"tomate (fruit), août\"},\"word-ram\":{\"name\":\"ram\",\"id\":\"word-ram\",\"type\":\"word\",\"noun\":\"épaule\",\"fulltext\":\"ram épaule\",\"glo\":\"épaule\"},\"word-ri\":{\"name\":\"ri\",\"id\":\"word-ri\",\"type\":\"word\",\"prefix\":\"périphérique\",\"fulltext\":\"ri riyon périphérique\",\"glo\":\"périphérique\",\"deriv\":[\"word-riyon\"]},\"word-ria\":{\"name\":\"ria\",\"id\":\"word-ria\",\"type\":\"word\",\"noun\":\"dehors\",\"fulltext\":\"ria dehors\",\"glo\":\"dehors\"},\"word-ro\":{\"name\":\"ro\",\"id\":\"word-ro\",\"type\":\"word\",\"prefix\":\"proche du centre\",\"fulltext\":\"ro robo royon proche du centre\",\"glo\":\"proche du centre\",\"deriv\":[\"word-robo\",\"word-royon\"]},\"word-robaj\":{\"name\":\"robaj\",\"id\":\"word-robaj\",\"type\":\"word\",\"noun\":\"intérieur des cuisses\",\"desc\":\"On devrait dire rodjobaj mais on dit robaj. L'intérieur des mollets se dit rohabaj.\",\"fulltext\":\"robaj On devrait dire rodjobaj mais on dit robaj. L'intérieur des mollets se dit rohabaj. intérieur des cuisses\",\"glo\":\"intérieur des cuisses\"},\"word-roa\":{\"name\":\"roa\",\"id\":\"word-roa\",\"type\":\"word\",\"prep\":\"dans\",\"fulltext\":\"roa dans\",\"glo\":\"dans\"},\"word-toroa\":{\"name\":\"toroa\",\"id\":\"word-toroa\",\"type\":\"word\",\"prep\":\"dans mon\",\"fulltext\":\"toroa dans mon\",\"glo\":\"dans mon\"},\"word-tiroa\":{\"name\":\"tiroa\",\"id\":\"word-tiroa\",\"type\":\"word\",\"prep\":\"dans ton\",\"fulltext\":\"tiroa dans ton\",\"glo\":\"dans ton\"},\"word-taroa\":{\"name\":\"taroa\",\"id\":\"word-taroa\",\"type\":\"word\",\"prep\":\"dans son\",\"fulltext\":\"taroa dans son\",\"glo\":\"dans son\"},\"word-ru\":{\"name\":\"ru\",\"id\":\"word-ru\",\"type\":\"word\",\"noun\":\"émergence, réalisation\",\"suffix\":\"devenir\",\"fulltext\":\"ru guru karu loru émergence, réalisation devenir\",\"glo\":\"émergence, réalisation\",\"deriv\":[\"word-guru\",\"word-karu\",\"word-loru\"]},\"word-rum\":{\"name\":\"rum\",\"id\":\"word-rum\",\"type\":\"word\",\"noun\":\"bras\",\"fulltext\":\"rum bras\",\"glo\":\"bras\"},\"word-harum\":{\"name\":\"harum\",\"id\":\"word-harum\",\"type\":\"word\",\"noun\":\"avant-bras\",\"fulltext\":\"harum avant-bras\",\"glo\":\"avant-bras\"},\"word-djorum\":{\"name\":\"djorum\",\"id\":\"word-djorum\",\"type\":\"word\",\"noun\":\"haut du bras\",\"fulltext\":\"djorum haut du bras\",\"glo\":\"haut du bras\"},\"word-rumi\":{\"name\":\"rumi\",\"id\":\"word-rumi\",\"type\":\"word\",\"verb\":\"prendre dans les bras\",\"fulltext\":\"rumi prendre dans les bras\",\"glo\":\"prendre dans les bras\"},\"word-leirumi\":{\"name\":\"leirumi\",\"id\":\"word-leirumi\",\"type\":\"word\",\"verb\":\"Embrasser le temps = vivre\",\"fulltext\":\"leirumi Embrasser le temps = vivre\",\"glo\":\"Embrasser le temps = vivre\"},\"word-sa\":{\"name\":\"sa\",\"id\":\"word-sa\",\"type\":\"word\",\"noun\":\"outil\",\"fulltext\":\"sa kelasa masa outil\",\"glo\":\"outil\",\"deriv\":[\"word-kelasa\",\"word-masa\"]},\"word-sam\":{\"name\":\"sam\",\"id\":\"word-sam\",\"type\":\"word\",\"noun\":\"pied\",\"posit\":\"debout\",\"fulltext\":\"sam pied debout\",\"glo\":\"pied\"},\"word-fesam\":{\"name\":\"fesam\",\"id\":\"word-fesam\",\"type\":\"word\",\"noun\":\"chaussettes\",\"fulltext\":\"fesam chaussettes\",\"glo\":\"chaussettes\"},\"word-hasam\":{\"name\":\"hasam\",\"id\":\"word-hasam\",\"type\":\"word\",\"noun\":\"orteil\",\"fulltext\":\"hasam orteil\",\"glo\":\"orteil\"},\"word-djosam\":{\"name\":\"djosam\",\"id\":\"word-djosam\",\"type\":\"word\",\"noun\":\"cheville\",\"fulltext\":\"djosam cheville\",\"glo\":\"cheville\"},\"card-nepal\":{\"name\":\"nepal\",\"id\":\"card-nepal\",\"type\":\"card\",\"noun\":\"échelle du néant\",\"lang\":\"Certains états de conscience sont liés aux nombres\",\"see\":[\"word-nepa\",\"card-counting\"],\"desc\":\"\\n# Échelle du néant\\n\\n## Les états heureux\\n\\n* 10 [djipa](word-djipa) (souvenir)\\n* 9 [dapa](word-dapa) (joie)\\n* 8 [jepa](word-jepa) (appartenance)\\n* 7 [fepa](word-fepa) (fierté)\\n* 6 [shipa](word-shipa) (croyance)\\n\\n## Et à partir d'ici ça commence à plus aller très bien..\\n\\n* 5 [nelil](word-nelil) (confusion)\\n* 4 [neka](word-neka) (honte)\\n* 3 [nepe](word-nepe) (oubli)\\n* 2 [nede](word-nede) (stress)\\n\\n## Et ici, c'est l'enfer\\n\\n* 1 [nepi](word-nepi) (division)\\n\",\"fulltext\":\"nepal \\n# Échelle du néant\\n\\n## Les états heureux\\n\\n* 10 [djipa](word-djipa) (souvenir)\\n* 9 [dapa](word-dapa) (joie)\\n* 8 [jepa](word-jepa) (appartenance)\\n* 7 [fepa](word-fepa) (fierté)\\n* 6 [shipa](word-shipa) (croyance)\\n\\n## Et à partir d'ici ça commence à plus aller très bien..\\n\\n* 5 [nelil](word-nelil) (confusion)\\n* 4 [neka](word-neka) (honte)\\n* 3 [nepe](word-nepe) (oubli)\\n* 2 [nede](word-nede) (stress)\\n\\n## Et ici, c'est l'enfer\\n\\n* 1 [nepi](word-nepi) (division)\\n nepa counting échelle du néant Certains états de conscience sont liés aux nombres\",\"glo\":\"échelle du néant\"},\"word-se\":{\"name\":\"se\",\"id\":\"word-se\",\"type\":\"word\",\"suffix\":\"gauche\",\"desc\":\"Inspiré de est (on regarde le sud).\",\"fulltext\":\"se Inspiré de est (on regarde le sud). hase gauche\",\"glo\":\"gauche\",\"deriv\":[\"word-hase\"]},\"word-sen\":{\"name\":\"sen\",\"id\":\"word-sen\",\"type\":\"word\",\"noun\":\"ici, ce lieu\",\"fulltext\":\"sen ici, ce lieu\",\"glo\":\"ici, ce lieu\"},\"word-sha\":{\"name\":\"sha\",\"id\":\"word-sha\",\"type\":\"word\",\"noun\":\"hanche\",\"conj\":\"iels (3p)\",\"fulltext\":\"sha shada shaha shasha shana iels (3p) hanche\",\"glo\":\"hanche\",\"deriv\":[\"word-shada\",\"word-shaha\",\"word-shasha\",\"word-shana\"]},\"word-shada\":{\"name\":\"shada\",\"id\":\"word-shada\",\"type\":\"word\",\"noun\":\"elles/eux\",\"etym\":[\"word-sha\",\"word-oda\"],\"fulltext\":\"shada word-sha word-oda elles/eux\",\"glo\":\"elles/eux\"},\"word-shaha\":{\"name\":\"shaha\",\"id\":\"word-shaha\",\"type\":\"word\",\"noun\":\"elles/eux poétique\",\"etym\":[\"word-sha\",\"word-yada\"],\"fulltext\":\"shaha word-sha word-yada elles/eux poétique\",\"glo\":\"elles/eux poétique\"},\"word-shasha\":{\"name\":\"shasha\",\"id\":\"word-shasha\",\"type\":\"word\",\"verb\":\"dancer\",\"etym\":[\"word-sha\",\"word-sha\"],\"fulltext\":\"shasha word-sha word-sha dancer\",\"glo\":\"dancer\"},\"word-shana\":{\"name\":\"shana\",\"id\":\"word-shana\",\"type\":\"word\",\"noun\":\"la danse\",\"etym\":[\"word-sha\",\"word-na\"],\"fulltext\":\"shana word-sha word-na la danse\",\"glo\":\"la danse\"},\"word-she\":{\"name\":\"she\",\"id\":\"word-she\",\"type\":\"word\",\"noun\":\"l'air\",\"fulltext\":\"she meshe shei sheu l'air\",\"glo\":\"l'air\",\"deriv\":[\"word-meshe\",\"word-shei\",\"word-sheu\"]},\"word-shei\":{\"name\":\"shei\",\"id\":\"word-shei\",\"type\":\"word\",\"verb\":\"souffler (air qui caresse)\",\"etym\":[\"word-she\",\"word-i\"],\"fulltext\":\"shei word-she word-i souffler (air qui caresse)\",\"glo\":\"souffler (air qui caresse)\"},\"word-sheu\":{\"name\":\"sheu\",\"id\":\"word-sheu\",\"type\":\"word\",\"noun\":\"nez\",\"verb\":\"respirer\",\"etym\":[\"word-she\",\"word-u\"],\"desc\":\"De [she](word-she) et [u](word-u)\",\"fulltext\":\"sheu word-she word-u De [she](word-she) et [u](word-u) sheulama shegul nez respirer\",\"glo\":\"nez\",\"deriv\":[\"word-sheulama\",\"word-shegul\"]},\"word-sheulama\":{\"name\":\"sheulama\",\"id\":\"word-sheulama\",\"type\":\"word\",\"verb\":\"plongée sous marine\",\"etym\":[\"word-sheu\",\"word-lama\"],\"fulltext\":\"sheulama word-sheu word-lama plongée sous marine\",\"glo\":\"plongée sous marine\"},\"word-shegul\":{\"name\":\"shegul\",\"id\":\"word-shegul\",\"type\":\"word\",\"noun\":\"cochon\",\"etym\":[\"word-sheu\",\"word-gol\"],\"fulltext\":\"shegul word-sheu word-gol cochon\",\"glo\":\"cochon\"},\"word-shi\":{\"name\":\"shi\",\"id\":\"word-shi\",\"type\":\"word\",\"conj\":\"vous (2p)\",\"noun\":\"6\",\"fulltext\":\"shi shida shiha vous (2p) 6\",\"glo\":\"vous (2p)\",\"deriv\":[\"word-shida\",\"word-shiha\"]},\"word-shida\":{\"name\":\"shida\",\"id\":\"word-shida\",\"type\":\"word\",\"noun\":\"vous\",\"etym\":[\"word-shi\",\"word-oda\"],\"fulltext\":\"shida word-shi word-oda vous\",\"glo\":\"vous\"},\"word-shiha\":{\"name\":\"shiha\",\"id\":\"word-shiha\",\"type\":\"word\",\"noun\":\"vous poétique\",\"etym\":[\"word-shi\",\"word-yada\"],\"fulltext\":\"shiha word-shi word-yada vous poétique\",\"glo\":\"vous poétique\"},\"word-shipa\":{\"name\":\"shipa\",\"id\":\"word-shipa\",\"type\":\"word\",\"noun\":\"croire\",\"fulltext\":\"shipa croire\",\"glo\":\"croire\"},\"word-sho\":{\"name\":\"sho\",\"id\":\"word-sho\",\"type\":\"word\",\"noun\":\"salive\",\"verb\":\"saliver\",\"conj\":\"nous tous présent.e.s (1p)\",\"fulltext\":\"sho shoda shoha onsho nous tous présent.e.s (1p) salive saliver\",\"glo\":\"salive\",\"deriv\":[\"word-shoda\",\"word-shoha\",\"word-onsho\"]},\"word-shoda\":{\"name\":\"shoda\",\"id\":\"word-shoda\",\"type\":\"word\",\"noun\":\"nous\",\"etym\":[\"word-sho\",\"word-oda\"],\"fulltext\":\"shoda word-sho word-oda nous\",\"glo\":\"nous\"},\"word-shoha\":{\"name\":\"shoha\",\"id\":\"word-shoha\",\"type\":\"word\",\"noun\":\"nous poétique\",\"etym\":[\"word-sho\",\"word-yada\"],\"fulltext\":\"shoha word-sho word-yada nous poétique\",\"glo\":\"nous poétique\"},\"word-onsho\":{\"name\":\"onsho\",\"id\":\"word-onsho\",\"type\":\"word\",\"noun\":\"sucre, récompense\",\"etym\":[\"word-on\",\"word-sho\"],\"fulltext\":\"onsho word-on word-sho sucre, récompense\",\"glo\":\"sucre, récompense\"},\"word-shu\":{\"name\":\"shu\",\"id\":\"word-shu\",\"type\":\"word\",\"prep\":\"et\",\"fulltext\":\"shu et\",\"glo\":\"et\"},\"word-si\":{\"name\":\"si\",\"id\":\"word-si\",\"type\":\"word\",\"suffix\":\"comme\",\"desc\":\"Annonce d'une manière qui se terminera par [esi](word-esi) (sauf si c'est qu'on mot).\",\"fulltext\":\"si Annonce d'une manière qui se terminera par [esi](word-esi) (sauf si c'est qu'on mot). sigu comme\",\"glo\":\"comme\",\"deriv\":[\"word-sigu\"]},\"word-sigu\":{\"name\":\"sigu\",\"id\":\"word-sigu\",\"type\":\"word\",\"noun\":\"sombre (comme le mystère)\",\"etym\":[\"word-si\",\"word-gu\"],\"fulltext\":\"sigu word-si word-gu sombre (comme le mystère)\",\"glo\":\"sombre (comme le mystère)\"},\"word-esi\":{\"name\":\"esi\",\"id\":\"word-esi\",\"type\":\"word\",\"suffix\":\"ainsi, pour, de sorte que\",\"fulltext\":\"esi ainsi, pour, de sorte que\",\"glo\":\"ainsi, pour, de sorte que\"},\"word-soa\":{\"name\":\"soa\",\"id\":\"word-soa\",\"type\":\"word\",\"noun\":\"la terre, le sol\",\"suffix\":\"au sol\",\"prefix\":\"proche du sol, des pieds\",\"fulltext\":\"soa lisoa la terre, le sol proche du sol, des pieds au sol\",\"glo\":\"la terre, le sol\",\"deriv\":[\"word-lisoa\"]},\"word-lisoa\":{\"name\":\"lisoa\",\"id\":\"word-lisoa\",\"type\":\"word\",\"noun\":\"table (petit sol)\",\"etym\":[\"word-lil\",\"word-soa\"],\"fulltext\":\"lisoa word-lil word-soa table (petit sol)\",\"glo\":\"table (petit sol)\"},\"word-su\":{\"name\":\"su\",\"id\":\"word-su\",\"type\":\"word\",\"verb\":\"avoir\",\"fulltext\":\"su nesu avoir\",\"glo\":\"avoir\",\"deriv\":[\"word-nesu\"]},\"word-nesu\":{\"name\":\"nesu\",\"id\":\"word-nesu\",\"type\":\"word\",\"verb\":\"manquer\",\"etym\":[\"word-ne\",\"word-su\"],\"fulltext\":\"nesu word-ne word-su manquer\",\"glo\":\"manquer\"},\"word-ta\":{\"name\":\"ta\",\"id\":\"word-ta\",\"type\":\"word\",\"noun\":\"son/ses\",\"fulltext\":\"ta son/ses\",\"glo\":\"son/ses\"},\"word-taj\":{\"name\":\"taj\",\"id\":\"word-taj\",\"type\":\"word\",\"noun\":\"pénis\",\"verb\":\"pénétrer avec le pénis\",\"etym\":[\"word-te\",\"word-aj\"],\"fulltext\":\"taj word-te word-aj tajin tajegi pénis pénétrer avec le pénis\",\"glo\":\"pénis\",\"deriv\":[\"word-tajin\",\"word-tajegi\"]},\"word-tajin\":{\"name\":\"tajin\",\"id\":\"word-tajin\",\"type\":\"word\",\"noun\":\"pénis chaud, en érection\",\"etym\":[\"word-taj\",\"word-in\"],\"fulltext\":\"tajin word-taj word-in pénis chaud, en érection\",\"glo\":\"pénis chaud, en érection\"},\"word-tajegi\":{\"name\":\"tajegi\",\"id\":\"word-tajegi\",\"type\":\"word\",\"noun\":\"pénis froid, au repos\",\"etym\":[\"word-taj\",\"word-egi\"],\"fulltext\":\"tajegi word-taj word-egi pénis froid, au repos\",\"glo\":\"pénis froid, au repos\"},\"word-toda\":{\"name\":\"toda\",\"id\":\"word-toda\",\"type\":\"word\",\"noun\":\"personne avec un pénis\",\"fulltext\":\"toda personne avec un pénis\",\"glo\":\"personne avec un pénis\"},\"word-tajo\":{\"name\":\"tajo\",\"id\":\"word-tajo\",\"type\":\"word\",\"noun\":\"frapper du pénis\",\"desc\":\"Basé sur [taj](word-taj) (pénis) et [o](word-o) (frapper).\",\"fulltext\":\"tajo Basé sur [taj](word-taj) (pénis) et [o](word-o) (frapper). frapper du pénis\",\"glo\":\"frapper du pénis\"},\"word-hataj\":{\"name\":\"hataj\",\"id\":\"word-hataj\",\"type\":\"word\",\"noun\":\"gland\",\"desc\":\"De [ha](word-ha) (tête, partie supérieure) et [taj](word-taj) (pénis).\",\"fulltext\":\"hataj De [ha](word-ha) (tête, partie supérieure) et [taj](word-taj) (pénis). gland\",\"glo\":\"gland\"},\"word-tam\":{\"name\":\"tam\",\"id\":\"word-tam\",\"type\":\"word\",\"noun\":\"boule (testicule)\",\"fulltext\":\"tam putam boule (testicule)\",\"glo\":\"boule (testicule)\",\"deriv\":[\"word-putam\"]},\"word-te\":{\"name\":\"te\",\"id\":\"word-te\",\"type\":\"word\",\"verb\":\"donner\",\"fulltext\":\"te taj donner\",\"glo\":\"donner\",\"deriv\":[\"word-taj\"]},\"word-ten\":{\"name\":\"ten\",\"id\":\"word-ten\",\"type\":\"word\",\"pron\":\"les\",\"desc\":\"optionel, utilisé pour souligner le sujet\",\"fulltext\":\"ten optionel, utilisé pour souligner le sujet les\",\"glo\":\"les\"},\"word-ti\":{\"name\":\"ti\",\"id\":\"word-ti\",\"type\":\"word\",\"noun\":\"ton/tes\",\"prefix\":\"ton/tes\",\"suffix\":\"ton/tes\",\"fulltext\":\"ti ton/tes ton/tes ton/tes\",\"glo\":\"ton/tes\"},\"word-tio\":{\"name\":\"tio\",\"id\":\"word-tio\",\"type\":\"word\",\"noun\":\"genitals\",\"verb\":\"faire l'amour\",\"fulltext\":\"tio fatio tiona genitals faire l'amour\",\"glo\":\"genitals\",\"deriv\":[\"word-fatio\",\"word-tiona\"]},\"word-fatio\":{\"name\":\"fatio\",\"id\":\"word-fatio\",\"type\":\"word\",\"noun\":\"iris (fleur de l'oeil\",\"etym\":[\"word-fa\",\"word-tio\"],\"fulltext\":\"fatio word-fa word-tio iris (fleur de l'oeil\",\"glo\":\"iris (fleur de l'oeil\"},\"word-tiona\":{\"name\":\"tiona\",\"id\":\"word-tiona\",\"type\":\"word\",\"noun\":\"flower (genital thing)\",\"etym\":[\"word-tio\",\"word-na\"],\"fulltext\":\"tiona word-tio word-na flower (genital thing)\",\"glo\":\"flower (genital thing)\"},\"word-to\":{\"name\":\"to\",\"id\":\"word-to\",\"type\":\"word\",\"noun\":\"mon (notre)/nos\",\"suffix\":\"mon/nos\",\"fulltext\":\"to mon (notre)/nos mon/nos\",\"glo\":\"mon (notre)/nos\"},\"word-tosho\":{\"name\":\"tosho\",\"id\":\"word-tosho\",\"type\":\"word\",\"noun\":\"notre\",\"suffix\":\"notre\",\"fulltext\":\"tosho notre notre\",\"glo\":\"notre\"},\"word-toshi\":{\"name\":\"toshi\",\"id\":\"word-toshi\",\"type\":\"word\",\"noun\":\"votre\",\"suffix\":\"votre\",\"fulltext\":\"toshi votre votre\",\"glo\":\"votre\"},\"word-tosha\":{\"name\":\"tosha\",\"id\":\"word-tosha\",\"type\":\"word\",\"noun\":\"leur\",\"suffix\":\"leur\",\"fulltext\":\"tosha leur leur\",\"glo\":\"leur\"},\"word-topi\":{\"name\":\"topi\",\"id\":\"word-topi\",\"type\":\"word\",\"noun\":\"mon à moi\",\"suffix\":\"mon à moi\",\"fulltext\":\"topi mon à moi mon à moi\",\"glo\":\"mon à moi\"},\"word-tu\":{\"name\":\"tu\",\"id\":\"word-tu\",\"type\":\"word\",\"noun\":\"lae\",\"glo\":\"lae.DET\",\"desc\":\"optionel, utilisé pour souligner le sujet\",\"fulltext\":\"tu optionel, utilisé pour souligner le sujet lae\"},\"word-u\":{\"name\":\"u\",\"id\":\"word-u\",\"type\":\"word\",\"suffix\":\"tirer\",\"fulltext\":\"u awiu gau iwiu liu mu odu sheu tirer\",\"glo\":\"tirer\",\"deriv\":[\"word-awiu\",\"word-gau\",\"word-iwiu\",\"word-liu\",\"word-mu\",\"word-odu\",\"word-sheu\"]},\"word-couler\":{\"name\":\"couler\",\"id\":\"word-couler\",\"type\":\"word\",\"noun\":\"uba\",\"fulltext\":\"couler uba\",\"glo\":\"uba\"},\"word-uki\":{\"name\":\"uki\",\"id\":\"word-uki\",\"type\":\"word\",\"adj\":\"long\",\"suffix\":\"long\",\"see\":[\"word-iki\"],\"fulltext\":\"uki agauki iki long long\",\"glo\":\"long\",\"deriv\":[\"word-agauki\"]},\"word-ul\":{\"name\":\"ul\",\"id\":\"word-ul\",\"type\":\"word\",\"prefix\":\"jusque\",\"desc\":\"Tirer jusqu'à une forme d'événement, de rupture, de changement.\",\"fulltext\":\"ul Tirer jusqu'à une forme d'événement, de rupture, de changement. jusque\",\"glo\":\"jusque\"},\"word-ulu\":{\"name\":\"ulu\",\"id\":\"word-ulu\",\"type\":\"word\",\"noun\":\"amuser, faire rire (tirer sur la corde)\",\"fulltext\":\"ulu uloda ulul amuser, faire rire (tirer sur la corde)\",\"glo\":\"amuser, faire rire (tirer sur la corde)\",\"deriv\":[\"word-uloda\",\"word-ulul\"]},\"word-uloda\":{\"name\":\"uloda\",\"id\":\"word-uloda\",\"type\":\"word\",\"noun\":\"clown\",\"etym\":[\"word-ulu\",\"word-oda\"],\"fulltext\":\"uloda word-ulu word-oda clown\",\"glo\":\"clown\"},\"word-ulul\":{\"name\":\"ulul\",\"id\":\"word-ulul\",\"type\":\"word\",\"noun\":\"asperge, avril\",\"etym\":[\"word-ulu\",\"word-la\"],\"fulltext\":\"ulul word-ulu word-la asperge, avril\",\"glo\":\"asperge, avril\"},\"word-uma\":{\"name\":\"uma\",\"id\":\"word-uma\",\"type\":\"word\",\"prep\":\"ou\",\"fulltext\":\"uma ou\",\"glo\":\"ou\"},\"word-uya\":{\"name\":\"uya\",\"id\":\"word-uya\",\"type\":\"word\",\"noun\":\"de/depuis\",\"suffix\":\"depuis (placé après: ha-uya = de loin)\",\"fulltext\":\"uya de/depuis depuis (placé après: ha-uya = de loin)\",\"glo\":\"de/depuis\"},\"word-we\":{\"name\":\"we\",\"id\":\"word-we\",\"type\":\"word\",\"suffix\":\"droite\",\"desc\":\"Inspiré de ouest (on regarde le sud).\",\"fulltext\":\"we Inspiré de ouest (on regarde le sud). hawe droite\",\"glo\":\"droite\",\"deriv\":[\"word-hawe\"]},\"word-wen\":{\"name\":\"wen\",\"id\":\"word-wen\",\"type\":\"word\",\"noun\":\"coude\",\"fulltext\":\"wen coude\",\"glo\":\"coude\"},\"word-wi\":{\"name\":\"wi\",\"id\":\"word-wi\",\"type\":\"word\",\"noun\":\"pruneau (couleur)\",\"fulltext\":\"wi wiyon pruneau (couleur)\",\"glo\":\"pruneau (couleur)\",\"deriv\":[\"word-wiyon\"]},\"word-wiyon\":{\"name\":\"wiyon\",\"id\":\"word-wiyon\",\"type\":\"word\",\"noun\":\"pruneau (fruit)\",\"etym\":[\"word-wi\",\"word-yon\"],\"fulltext\":\"wiyon word-wi word-yon pruneau (fruit)\",\"glo\":\"pruneau (fruit)\"},\"word-wu\":{\"name\":\"wu\",\"id\":\"word-wu\",\"type\":\"word\",\"suffix\":\"de (possédé par)\",\"fulltext\":\"wu guwu de (possédé par)\",\"glo\":\"de (possédé par)\",\"deriv\":[\"word-guwu\"]},\"word-diwu\":{\"name\":\"diwu\",\"id\":\"word-diwu\",\"type\":\"word\",\"prep\":\"qui possède\",\"fulltext\":\"diwu qui possède\",\"glo\":\"qui possède\"},\"word-fawulama\":{\"name\":\"fawulama\",\"id\":\"word-fawulama\",\"type\":\"word\",\"noun\":\"poisson (yeux de la mer)\",\"desc\":\"Voir aussi [awi](word-awi)\",\"fulltext\":\"fawulama Voir aussi [awi](word-awi) poisson (yeux de la mer)\",\"glo\":\"poisson (yeux de la mer)\"},\"word-ya\":{\"name\":\"ya\",\"id\":\"word-ya\",\"type\":\"word\",\"noun\":\"nuit\",\"fulltext\":\"ya yada yaon yagi iwa yafa yadifa nuit\",\"glo\":\"nuit\",\"deriv\":[\"word-yada\",\"word-yaon\",\"word-yagi\",\"word-iwa\",\"word-yafa\",\"word-yadifa\"]},\"word-yagi\":{\"name\":\"yagi\",\"id\":\"word-yagi\",\"type\":\"word\",\"noun\":\"Bonne (douce) nuit\",\"etym\":[\"word-ya\",\"word-gi\"],\"fulltext\":\"yagi word-ya word-gi Bonne (douce) nuit\",\"glo\":\"Bonne (douce) nuit\"},\"word-yaonagi\":{\"name\":\"yaonagi\",\"id\":\"word-yaonagi\",\"type\":\"word\",\"noun\":\"Bonsoir (bon lever de nuit)\",\"etym\":[\"word-yaon\",\"word-gi\"],\"fulltext\":\"yaonagi word-yaon word-gi Bonsoir (bon lever de nuit)\",\"glo\":\"Bonsoir (bon lever de nuit)\"},\"word-iwa\":{\"name\":\"iwa\",\"id\":\"word-iwa\",\"type\":\"word\",\"noun\":\"hibou\",\"etym\":[\"word-iwi\",\"word-ya\"],\"fulltext\":\"iwa word-iwi word-ya hibou\",\"glo\":\"hibou\"},\"word-yafa\":{\"name\":\"yafa\",\"id\":\"word-yafa\",\"type\":\"word\",\"verb\":\"rêver (la nuit voit)\",\"etym\":[\"word-ya\",\"word-fa\"],\"fulltext\":\"yafa word-ya word-fa rêver (la nuit voit)\",\"glo\":\"rêver (la nuit voit)\"},\"word-yadifa\":{\"name\":\"yadifa\",\"id\":\"word-yadifa\",\"type\":\"word\",\"noun\":\"rêve (la nuit qui voit)\",\"etym\":[\"word-ya\",\"word-di\",\"word-fa\"],\"fulltext\":\"yadifa word-ya word-di word-fa rêve (la nuit qui voit)\",\"glo\":\"rêve (la nuit qui voit)\"},\"word-yaj\":{\"name\":\"yaj\",\"id\":\"word-yaj\",\"type\":\"word\",\"noun\":\"clitoris, gland (joie en feu)\",\"etym\":[\"word-yu\",\"word-aj\"],\"fulltext\":\"yaj word-yu word-aj faj feyaj yajin clitoris, gland (joie en feu)\",\"glo\":\"clitoris, gland (joie en feu)\",\"deriv\":[\"word-faj\",\"word-feyaj\",\"word-yajin\"]},\"word-yajin\":{\"name\":\"yajin\",\"id\":\"word-yajin\",\"type\":\"word\",\"noun\":\"gland froid, au repos\",\"etym\":[\"word-yaj\",\"word-in\"],\"fulltext\":\"yajin word-yaj word-in gland froid, au repos\",\"glo\":\"gland froid, au repos\"},\"word-yi\":{\"name\":\"yi\",\"id\":\"word-yi\",\"type\":\"word\",\"adj\":\"minuscule\",\"conj\":\"tu dépravé.e (2x)\",\"fulltext\":\"yi yida tu dépravé.e (2x) minuscule\",\"glo\":\"minuscule\",\"deriv\":[\"word-yida\"]},\"word-yida\":{\"name\":\"yida\",\"id\":\"word-yida\",\"type\":\"word\",\"pron\":\"tu dépravé\",\"etym\":[\"word-yi\",\"word-oda\"],\"fulltext\":\"yida word-yi word-oda tu dépravé\",\"glo\":\"tu dépravé\"},\"word-yin\":{\"name\":\"yin\",\"id\":\"word-yin\",\"type\":\"word\",\"noun\":\"vagin\",\"desc\":\"De [yu](word-yu) et [in](word-in)\",\"fulltext\":\"yin De [yu](word-yu) et [in](word-in) alayin duyin noyin vagin\",\"glo\":\"vagin\",\"deriv\":[\"word-alayin\",\"word-duyin\",\"word-noyin\"]},\"word-yo\":{\"name\":\"yo\",\"id\":\"word-yo\",\"type\":\"word\",\"noun\":\"jour\",\"fulltext\":\"yo yosa yohon yogi jour\",\"glo\":\"jour\",\"deriv\":[\"word-yosa\",\"word-yohon\",\"word-yogi\"]},\"word-yogi\":{\"name\":\"yogi\",\"id\":\"word-yogi\",\"type\":\"word\",\"noun\":\"Douce journée (salutation)\",\"etym\":[\"word-yo\",\"word-gi\"],\"fulltext\":\"yogi word-yo word-gi Douce journée (salutation)\",\"glo\":\"Douce journée (salutation)\"},\"word-yohonagi\":{\"name\":\"yohonagi\",\"id\":\"word-yohonagi\",\"type\":\"word\",\"noun\":\"Bon lever de jour\",\"etym\":[\"word-yohon\",\"word-gi\"],\"fulltext\":\"yohonagi word-yohon word-gi Bon lever de jour\",\"glo\":\"Bon lever de jour\"},\"word-yon\":{\"name\":\"yon\",\"id\":\"word-yon\",\"type\":\"word\",\"noun\":\"vulve\",\"desc\":\"De [yu](word-yu) et [on](word-on) (joie-apparaître = donner la joie = accoucher)\",\"fulltext\":\"yon De [yu](word-yu) et [on](word-on) (joie-apparaître = donner la joie = accoucher) joyon wiyon riyon royon yonin yonegi vulve\",\"glo\":\"vulve\",\"deriv\":[\"word-joyon\",\"word-wiyon\",\"word-riyon\",\"word-royon\",\"word-yonin\",\"word-yonegi\"]},\"word-riyon\":{\"name\":\"riyon\",\"id\":\"word-riyon\",\"type\":\"word\",\"noun\":\"lèvres périphériques\",\"etym\":[\"word-ri\",\"word-yon\"],\"fulltext\":\"riyon word-ri word-yon lèvres périphériques\",\"glo\":\"lèvres périphériques\"},\"word-royon\":{\"name\":\"royon\",\"id\":\"word-royon\",\"type\":\"word\",\"noun\":\"lèvres centrales\",\"etym\":[\"word-ro\",\"word-yon\"],\"fulltext\":\"royon word-ro word-yon lèvres centrales\",\"glo\":\"lèvres centrales\"},\"word-yonin\":{\"name\":\"yonin\",\"id\":\"word-yonin\",\"type\":\"word\",\"noun\":\"vulve chaude, en érection\",\"etym\":[\"word-yon\",\"word-in\"],\"fulltext\":\"yonin word-yon word-in vulve chaude, en érection\",\"glo\":\"vulve chaude, en érection\"},\"word-yonegi\":{\"name\":\"yonegi\",\"id\":\"word-yonegi\",\"type\":\"word\",\"noun\":\"vulve froide, au repos\",\"etym\":[\"word-yon\",\"word-egi\"],\"fulltext\":\"yonegi word-yon word-egi vulve froide, au repos\",\"glo\":\"vulve froide, au repos\"},\"word-keyon\":{\"name\":\"keyon\",\"id\":\"word-keyon\",\"type\":\"word\",\"noun\":\"clitoris\",\"fulltext\":\"keyon clitoris\",\"glo\":\"clitoris\"},\"word-feyon\":{\"name\":\"feyon\",\"id\":\"word-feyon\",\"type\":\"word\",\"noun\":\"culotte\",\"fulltext\":\"feyon culotte\",\"glo\":\"culotte\"},\"word-yu\":{\"name\":\"yu\",\"id\":\"word-yu\",\"type\":\"word\",\"noun\":\"joie\",\"adj\":\"joyeux\",\"fulltext\":\"yu yaj eyu yuina joie joyeux\",\"glo\":\"joie\",\"deriv\":[\"word-yaj\",\"word-eyu\",\"word-yuina\"]},\"word-eyu\":{\"name\":\"eyu\",\"id\":\"word-eyu\",\"type\":\"word\",\"prep\":\"si\",\"desc\":\"Être joyeux = être tellement = si xxx\",\"etym\":[\"word-e\",\"word-yu\"],\"fulltext\":\"eyu word-e word-yu Être joyeux = être tellement = si xxx si\",\"glo\":\"si\"},\"word-yuina\":{\"name\":\"yuina\",\"id\":\"word-yuina\",\"type\":\"word\",\"noun\":\"fruit\",\"etym\":[\"word-yu\",\"word-in\",\"word-na\"],\"fulltext\":\"yuina word-yu word-in word-na fruit\",\"glo\":\"fruit\"},\"word-zu\":{\"name\":\"zu\",\"id\":\"word-zu\",\"type\":\"word\",\"verb\":\"aimer\",\"desc\":\"Évolution de [au](word-au) en [zu](word-zu) surtout si la conj requiert un 'h' de liaison.\",\"fulltext\":\"zu Évolution de [au](word-au) en [zu](word-zu) surtout si la conj requiert un 'h' de liaison. aimer\",\"glo\":\"aimer\"}},\"phrases\":{\"phrase-1\":{\"name\":\"1\",\"id\":\"phrase-1\",\"type\":\"phrase\",\"phrase\":\"11\",\"see\":[\"word-pi\",\"word-ipi\",\"word-pi\"],\"fulltext\":\"1 pi ipi pi\"},\"phrase-2\":{\"name\":\"2\",\"id\":\"phrase-2\",\"type\":\"phrase\",\"phrase\":\"11\",\"see\":[\"word-ipi\",\"word-pi\"],\"fulltext\":\"2 ipi pi\"},\"phrase-3\":{\"name\":\"3\",\"id\":\"phrase-3\",\"type\":\"phrase\",\"phrase\":\"24\",\"see\":[\"word-de\",\"word-ipi\",\"word-ka\"],\"fulltext\":\"3 de ipi ka\"},\"phrase-4\":{\"name\":\"4\",\"id\":\"phrase-4\",\"type\":\"phrase\",\"phrase\":\"359\",\"see\":[\"word-pe\",\"word-ipa\",\"word-lil\",\"word-ipi\",\"word-da\"],\"fulltext\":\"4 pe ipa lil ipi da\"},\"phrase-5\":{\"name\":\"5\",\"id\":\"phrase-5\",\"type\":\"phrase\",\"phrase\":\"2019\",\"see\":[\"word-de\",\"word-ipu\",\"word-dji\",\"word-da\"],\"fulltext\":\"5 de ipu dji da\"},\"phrase-6\":{\"name\":\"6\",\"id\":\"phrase-6\",\"type\":\"phrase\",\"phrase\":\"105'000\",\"see\":[\"word-ipa\",\"word-lil\",\"word-ipu\"],\"fulltext\":\"6 ipa lil ipu\"},\"phrase-7\":{\"name\":\"7\",\"id\":\"phrase-7\",\"type\":\"phrase\",\"phrase\":\"14\",\"see\":[\"word-pi\",\"word-ipi\",\"word-ka\"],\"fulltext\":\"7 pi ipi ka\"},\"phrase-8\":{\"name\":\"8\",\"id\":\"phrase-8\",\"type\":\"phrase\",\"phrase\":\"14\",\"see\":[\"word-ipi\",\"word-ka\"],\"fulltext\":\"8 ipi ka\"},\"phrase-9\":{\"name\":\"9\",\"id\":\"phrase-9\",\"type\":\"phrase\",\"phrase\":\"14\",\"see\":[\"word-dji\",\"word-ka\"],\"fulltext\":\"9 dji ka\"},\"phrase-10\":{\"name\":\"10\",\"id\":\"phrase-10\",\"type\":\"phrase\",\"phrase\":\"million\",\"see\":[\"word-ipu\",\"word-de\",\"word-uki\"],\"fulltext\":\"10 ipu de uki\"},\"phrase-11\":{\"name\":\"11\",\"id\":\"phrase-11\",\"type\":\"phrase\",\"phrase\":\"milliard\",\"see\":[\"word-ipu\",\"word-pe\",\"word-uki\"],\"fulltext\":\"11 ipu pe uki\"},\"phrase-12\":{\"name\":\"12\",\"id\":\"phrase-12\",\"type\":\"phrase\",\"phrase\":\"mille milliards\",\"see\":[\"word-ipu\",\"word-ka\",\"word-uki\"],\"fulltext\":\"12 ipu ka uki\"},\"phrase-13\":{\"name\":\"13\",\"id\":\"phrase-13\",\"type\":\"phrase\",\"phrase\":\"10^4\",\"see\":[\"word-ipa\",\"word-ka\",\"word-uki\"],\"fulltext\":\"13 ipa ka uki\"},\"phrase-14\":{\"name\":\"14\",\"id\":\"phrase-14\",\"type\":\"phrase\",\"phrase\":\"0.1\",\"see\":[\"word-ipi\",\"word-iki\"],\"fulltext\":\"14 ipi iki\"},\"phrase-15\":{\"name\":\"15\",\"id\":\"phrase-15\",\"type\":\"phrase\",\"phrase\":\"0.01\",\"see\":[\"word-ipi\",\"word-de\",\"word-iki\"],\"fulltext\":\"15 ipi de iki\"},\"phrase-16\":{\"name\":\"16\",\"id\":\"phrase-16\",\"type\":\"phrase\",\"phrase\":\"0.001\",\"see\":[\"word-ipi\",\"word-pe\",\"word-iki\"],\"fulltext\":\"16 ipi pe iki\"},\"phrase-17\":{\"name\":\"17\",\"id\":\"phrase-17\",\"type\":\"phrase\",\"phrase\":\"Masse mon dos !\",\"see\":[\"word-mi\",\"word-nopi\"],\"fulltext\":\"17 mi nopi\"},\"phrase-18\":{\"name\":\"18\",\"id\":\"phrase-18\",\"type\":\"phrase\",\"phrase\":\"La Nature et un temple où de vivants piliers\",\"see\":[\"word-tu\",\"word-gupa\",\"word-ahe\",\"word-agaukida\",\"word-don\",\"word-namel\",\"word-oda\"],\"fulltext\":\"18 tu gupa ahe agaukida don namel oda\"},\"phrase-19\":{\"name\":\"19\",\"id\":\"phrase-19\",\"type\":\"phrase\",\"phrase\":\"Laissent parfois sortir de confuses paroles;\",\"see\":[\"word-shalapa\",\"word-nega\"],\"fulltext\":\"19 shalapa nega\"},\"phrase-20\":{\"name\":\"20\",\"id\":\"phrase-20\",\"type\":\"phrase\",\"phrase\":\"L'homme y passe à travers des forêts de symboles\",\"see\":[\"word-tu\",\"word-yosa\",\"word-afen\",\"word-roa\",\"word-jana\",\"word-lom\",\"word-lana\"],\"fulltext\":\"20 tu yosa afen roa jana lom lana\"},\"phrase-21\":{\"name\":\"21\",\"id\":\"phrase-21\",\"type\":\"phrase\",\"phrase\":\"Qui l'observent avec des regards familiers.\",\"see\":[\"word-di\",\"word-ko\",\"word-gi\",\"word-sha\",\"word-fa\",\"word-lae\"],\"fulltext\":\"21 di ko gi sha fa lae\"},\"phrase-22\":{\"name\":\"22\",\"id\":\"phrase-22\",\"type\":\"phrase\",\"phrase\":\"Comme de longs échos qui de loin se confondent...\",\"see\":[\"word-si\",\"word-agade\",\"word-uki\",\"word-di\",\"word-ha\",\"word-uya\",\"word-es\",\"word-sha\",\"word-nelil\"],\"fulltext\":\"22 si agade uki di ha uya es sha nelil\"}}}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			117: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[7177,54]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkkeoda"] = this["webpackChunkkeoda"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;