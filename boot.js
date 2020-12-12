/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 669:
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

/***/ 584:
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
__exportStar(__webpack_require__(669), exports);
__exportStar(__webpack_require__(634), exports);


/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.select = void 0;
const select = (ctx, arg) => {
    ctx.state.keoda.selected = arg.name;
};
exports.select = select;


/***/ }),

/***/ 903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useOvermind = exports.styled = void 0;
const overmind_react_1 = __webpack_require__(115);
const styled_components_1 = __webpack_require__(163);
exports.styled = styled_components_1.default;
exports.useOvermind = overmind_react_1.createHook();


/***/ }),

/***/ 177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
__webpack_require__(307);
const overmind_1 = __webpack_require__(325);
const overmind_react_1 = __webpack_require__(115);
const React = __webpack_require__(294);
const ReactDOM = __webpack_require__(935);
const actions = __webpack_require__(584);
const components_1 = __webpack_require__(548);
const words = __webpack_require__(790);
const config = {
    onInitialize(ctx) {
        window.addEventListener('hashchange', function (e) {
            const name = window.location.hash.replace('#', '');
            ctx.actions.keoda.select({ name });
        });
    },
    state: {
        keoda: {
            words,
            lexicon: Object.keys(words).sort(),
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
__webpack_unused_export__ = renderApp;
renderApp();


/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const app_1 = __webpack_require__(903);
const React = __webpack_require__(294);
const Word_1 = __webpack_require__(491);
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
    return (React.createElement(Wrapper, { className: className }, lexicon.map(name => (React.createElement(Word_1.Word, { key: name, name: name })))));
};
exports.App = App;


/***/ }),

/***/ 721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Link = void 0;
const app_1 = __webpack_require__(903);
const React = __webpack_require__(294);
const Word_1 = __webpack_require__(491);
const Wrapper = app_1.styled.div `
  cursor: pointer;
  border-bottom: 1px solid #397d7d;
  margin-right: 8px;
  & .Ref > .popup {
    display: none;
  }
  &:hover .Ref > .popup {
    display: flex;
  }
`;
const Anchor = app_1.styled.a `
  color: inherit;
  text-decoration: none;
  color: #546161;
  &:hover {
    color: #397d7d;
  }
`;
const Ref = app_1.styled.div `
  position: absolute;
  left: 0;
  bottom: 0;
`;
const Link = ({ className, name, popup }) => {
    app_1.useOvermind();
    return (React.createElement(Wrapper, { className: className },
        React.createElement(Anchor, { href: `#${name}` }, name),
        !popup && (React.createElement(Ref, { className: "Ref" },
            React.createElement(Word_1.Word, { name: name, popup: true })))));
};
exports.Link = Link;


/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.List = void 0;
const React = __webpack_require__(294);
const app_1 = __webpack_require__(903);
const Link_1 = __webpack_require__(721);
const Wrapper = app_1.styled.div `
  flex-wrap: wrap;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
  &.etym a {
    color: #222;
    font-weight: bold;
  }
`;
const List = ({ className, words, popup }) => {
    return (React.createElement(Wrapper, { className: className }, words.map((key, idx) => (React.createElement(Link_1.Link, { key: idx, name: key, popup: popup })))));
};
exports.List = List;


/***/ }),

/***/ 491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Word = void 0;
const app_1 = __webpack_require__(903);
const classnames_1 = __webpack_require__(184);
const React = __webpack_require__(294);
const List_1 = __webpack_require__(931);
const types_1 = __webpack_require__(673);
const WordEntry = app_1.styled.div `
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
  &.selected:not(.popup) > .Name {
    background: #e4d593;
  }
  &.popup {
    position: absolute;
    top: 0;
    left: -15px;
    box-shadow: 8px 8px 20px #00000070;
    z-index: 3;
  }
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
    font-style: italic;
    color: #666;
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
    color: #444;
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
const ID = app_1.styled.a `
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`;
const Word = ({ className, name, popup }) => {
    const ctx = app_1.useOvermind();
    const { filter } = ctx.state.keoda;
    const word = ctx.state.keoda.words[name];
    if (!word) {
        // Should never happen
        return null;
    }
    let highKey;
    if (filter) {
        const { type, key } = filter;
        if (type === 'type') {
            if (!word[key]) {
                return null;
            }
            highKey = key;
        }
        else {
            if (!word.fulltext.includes(key)) {
                return null;
            }
        }
    }
    return (React.createElement(WordEntry, { className: classnames_1.default('Word', className, {
            popup,
            selected: name === ctx.state.keoda.selected,
        }) },
        !popup && React.createElement(ID, { id: name }),
        React.createElement(Name, { className: "Name" },
            React.createElement("span", null, word.name)),
        React.createElement(Definitions, null,
            types_1.DEF_KEYS.map(key => word[key] ? (React.createElement(Definition, { key: key },
                React.createElement(DefType, { className: classnames_1.default(key, { selected: key === highKey }), onClick: () => ctx.actions.keoda.filter({ type: 'type', key }) }, key),
                key === 'etym' || key === 'see' ? (React.createElement(List_1.List, { className: key, words: word[key], popup: popup })) : (React.createElement(DefText, null, word[key])))) : null),
            word.desc && React.createElement(Definition, { className: "desc" }, word.desc))));
};
exports.Word = Word;


/***/ }),

/***/ 548:
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
__exportStar(__webpack_require__(333), exports);
__exportStar(__webpack_require__(721), exports);
__exportStar(__webpack_require__(931), exports);
__exportStar(__webpack_require__(491), exports);


/***/ }),

/***/ 673:
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
    'see',
];


/***/ }),

/***/ 790:
/***/ ((module) => {

module.exports = JSON.parse("{\"a\":{\"name\":\"a\",\"prep\":\"à (elle, lui)\",\"conj\":\"iel (3s)\",\"see\":[\"ahada\",\"oho\"],\"fulltext\":\"a ahada oho iel (3s) à (elle, lui)\"},\"ahada\":{\"name\":\"ahada\",\"noun\":\"elle/lui poétique\",\"etym\":[\"a\",\"yada\"],\"fulltext\":\"ahada a yada elle/lui poétique\"},\"yada\":{\"name\":\"yada\",\"noun\":\"corps rêvé, poétique (corps de nuit)\",\"desc\":\"si le corps visible, c'est {oda}, le corps profond, intime, poétique, identitaire, \\\"subconscient\\\" comme dirait Julia Serano, c'est {yada}.\",\"etym\":[\"ya\",\"oda\"],\"see\":[\"ahada\",\"piha\",\"iha\",\"oha\",\"shaha\",\"shiha\",\"shoha\"],\"fulltext\":\"yada ya oda si le corps visible, c'est {oda}, le corps profond, intime, poétique, identitaire, \\\"subconscient\\\" comme dirait Julia Serano, c'est {yada}. ahada piha iha oha shaha shiha shoha corps rêvé, poétique (corps de nuit)\"},\"piha\":{\"name\":\"piha\",\"noun\":\"moi poétique (mythique, profond)\",\"etym\":[\"pi\",\"yada\"],\"fulltext\":\"piha pi yada moi poétique (mythique, profond)\"},\"yadaguitoda\":{\"name\":\"yadaguitoda\",\"noun\":\"corps poétique féminin né dans un corps masculin (femme trans)\",\"fulltext\":\"yadaguitoda corps poétique féminin né dans un corps masculin (femme trans)\"},\"yaguito\":{\"name\":\"yaguito\",\"noun\":\"version courte pour femme trans (femme née dans un corps homme)\",\"fulltext\":\"yaguito version courte pour femme trans (femme née dans un corps homme)\"},\"tadaguiyoda\":{\"name\":\"tadaguiyoda\",\"noun\":\"corps poétique masculin né dans un corps féminin (homme trans)\",\"fulltext\":\"tadaguiyoda corps poétique masculin né dans un corps féminin (homme trans)\"},\"taguiyo\":{\"name\":\"taguiyo\",\"noun\":\"version courte pour homme trans (homme né dans un corps femme)\",\"fulltext\":\"taguiyo version courte pour homme trans (homme né dans un corps femme)\"},\"adu\":{\"name\":\"adu\",\"noun\":\"proche, ami\",\"fulltext\":\"adu proche, ami\"},\"doda\":{\"name\":\"doda\",\"noun\":\"petit.e frère/soeur\",\"etym\":[\"du\",\"oda\"],\"see\":[\"dudapan\"],\"fulltext\":\"doda du oda dudapan petit.e frère/soeur\"},\"aga\":{\"name\":\"aga\",\"noun\":\"musique\",\"see\":[\"agana\",\"agade\",\"ago\"],\"fulltext\":\"aga agana agade ago musique\"},\"agana\":{\"name\":\"agana\",\"noun\":\"son (la chose musique incarnée)\",\"etym\":[\"aga\",\"na\"],\"see\":[\"agauki\"],\"fulltext\":\"agana aga na agauki son (la chose musique incarnée)\"},\"agade\":{\"name\":\"agade\",\"noun\":\"écho (deux sons)\",\"etym\":[\"aga\",\"de\"],\"fulltext\":\"agade aga de écho (deux sons)\"},\"agauki\":{\"name\":\"agauki\",\"verb\":\"résonner (le son long)\",\"etym\":[\"agana\",\"uki\"],\"fulltext\":\"agauki agana uki résonner (le son long)\"},\"agaukida\":{\"name\":\"agaukida\",\"noun\":\"temple (le lieu qui résonne)\",\"fulltext\":\"agaukida temple (le lieu qui résonne)\"},\"ago\":{\"name\":\"ago\",\"noun\":\"rythme\",\"etym\":[\"aga\",\"o\"],\"desc\":\"Musique frappée.\",\"fulltext\":\"ago aga o Musique frappée. rythme\"},\"agu\":{\"name\":\"agu\",\"noun\":\"oreille\",\"verb\":\"écouter\",\"see\":[\"agupeu\"],\"fulltext\":\"agu agupeu oreille écouter\"},\"aj\":{\"name\":\"aj\",\"noun\":\"feu\",\"verb\":\"brûler\",\"see\":[\"ajapi\",\"laj\",\"taj\",\"yaj\"],\"fulltext\":\"aj ajapi laj taj yaj feu brûler\"},\"ajapi\":{\"name\":\"ajapi\",\"noun\":\"calcination de soi, transformation totale\",\"etym\":[\"aj\",\"pi\"],\"fulltext\":\"ajapi aj pi calcination de soi, transformation totale\"},\"al\":{\"name\":\"al\",\"noun\":\"ciel\",\"prefix\":\"en haut, vers le ciel ou la tête\",\"see\":[\"alayin\"],\"fulltext\":\"al alayin ciel en haut, vers le ciel ou la tête\"},\"alayin\":{\"name\":\"alayin\",\"noun\":\"haut du vagin\",\"etym\":[\"du\",\"al\",\"yin\"],\"see\":[\"dualayin\"],\"fulltext\":\"alayin du al yin dualayin haut du vagin\"},\"dualayin\":{\"name\":\"dualayin\",\"noun\":\"point G\",\"etym\":[\"du\",\"alayin\"],\"see\":[\"dalayin\"],\"fulltext\":\"dualayin du alayin dalayin point G\"},\"dalayin\":{\"name\":\"dalayin\",\"noun\":\"point G (version courte)\",\"etym\":[\"dualayin\"],\"fulltext\":\"dalayin dualayin point G (version courte)\"},\"ana\":{\"name\":\"ana\",\"noun\":\"arbre\",\"adj\":\"féminin\",\"see\":[\"anawi\",\"duna\",\"nona\"],\"fulltext\":\"ana anawi duna nona arbre féminin\"},\"anawi\":{\"name\":\"anawi\",\"noun\":\"meduse\",\"etym\":[\"ana\",\"awi\"],\"fulltext\":\"anawi ana awi meduse\"},\"anoda\":{\"name\":\"anoda\",\"noun\":\"femme\",\"fulltext\":\"anoda femme\"},\"anoto\":{\"name\":\"anoto\",\"noun\":\"femme-homme\",\"fulltext\":\"anoto femme-homme\"},\"aniwi\":{\"name\":\"aniwi\",\"noun\":\"femme-enby\",\"fulltext\":\"aniwi femme-enby\"},\"au\":{\"name\":\"au\",\"noun\":\"coeur\",\"verb\":\"aimer/recevoir\",\"see\":[\"aupa\",\"augu\",\"aupi\"],\"fulltext\":\"au aupa augu aupi coeur aimer/recevoir\"},\"auhu\":{\"name\":\"auhu\",\"noun\":\"tomber amoureux.se, attraction du cœur\",\"fulltext\":\"auhu tomber amoureux.se, attraction du cœur\"},\"aupa\":{\"name\":\"aupa\",\"noun\":\"gratitude (aimer tout)\",\"etym\":[\"au\",\"pa\"],\"fulltext\":\"aupa au pa gratitude (aimer tout)\"},\"awi\":{\"name\":\"awi\",\"noun\":\"poisson\",\"verb\":\"briller\",\"adj\":\"belle/beau\",\"see\":[\"anawi\",\"mawi\",\"awiu\",\"gawi\",\"kawi\",\"munawi\"],\"fulltext\":\"awi anawi mawi awiu gawi kawi munawi poisson briller belle/beau\"},\"mawi\":{\"name\":\"mawi\",\"noun\":\"dauphin\",\"etym\":[\"moon\",\"awi\"],\"fulltext\":\"mawi moon awi dauphin\"},\"awiu\":{\"name\":\"awiu\",\"noun\":\"nager\",\"etym\":[\"awi\",\"u\"],\"fulltext\":\"awiu awi u nager\"},\"baj\":{\"name\":\"baj\",\"noun\":\"membre inférieur\",\"fulltext\":\"baj membre inférieur\"},\"djobaj\":{\"name\":\"djobaj\",\"noun\":\"cuisse\",\"desc\":\"De {djo} et {baj}\",\"fulltext\":\"djobaj De {djo} et {baj} cuisse\"},\"habaj\":{\"name\":\"habaj\",\"noun\":\"jambe\",\"fulltext\":\"habaj jambe\"},\"kebaj\":{\"name\":\"kebaj\",\"noun\":\"testicules\",\"desc\":\"Caché {ke} entre les jambes {baj}.\",\"fulltext\":\"kebaj Caché {ke} entre les jambes {baj}. testicules\"},\"beo\":{\"name\":\"beo\",\"verb\":\"secouer\",\"adj\":\"secoué\",\"fulltext\":\"beo secouer secoué\"},\"bo\":{\"name\":\"bo\",\"noun\":\"ventre\",\"see\":[\"robo\",\"obo\"],\"fulltext\":\"bo robo obo ventre\"},\"robo\":{\"name\":\"robo\",\"noun\":\"nombril (centre du ventre)\",\"etym\":[\"ro\",\"bo\"],\"fulltext\":\"robo ro bo nombril (centre du ventre)\"},\"bu\":{\"name\":\"bu\",\"noun\":\"chose qui grossit (corps érectile)\",\"fulltext\":\"bu chose qui grossit (corps érectile)\"},\"buyon\":{\"name\":\"buyon\",\"noun\":\"corps érectile du clitoris\",\"fulltext\":\"buyon corps érectile du clitoris\"},\"butaj\":{\"name\":\"butaj\",\"noun\":\"corps érectile du pénis\",\"fulltext\":\"butaj corps érectile du pénis\"},\"lire\":{\"name\":\"lire\",\"tens\":\"futur éventuel, improbable mais pas impossible\",\"fulltext\":\"lire futur éventuel, improbable mais pas impossible\"},\"liro\":{\"name\":\"liro\",\"tens\":\"futur lointain\",\"fulltext\":\"liro futur lointain\"},\"liru\":{\"name\":\"liru\",\"tens\":\"futur proche\",\"fulltext\":\"liru futur proche\"},\"lira\":{\"name\":\"lira\",\"tens\":\"demain\",\"see\":[\"lirana\"],\"fulltext\":\"lira lirana demain\"},\"liri\":{\"name\":\"liri\",\"tens\":\"ce soir, ce matin qui vient, la journée qui arrive\",\"fulltext\":\"liri ce soir, ce matin qui vient, la journée qui arrive\"},\"lemi\":{\"name\":\"lemi\",\"tens\":\"hier soir, ce matin, aujourd'hui\",\"fulltext\":\"lemi hier soir, ce matin, aujourd'hui\"},\"lema\":{\"name\":\"lema\",\"tens\":\"hier\",\"fulltext\":\"lema hier\"},\"lemu\":{\"name\":\"lemu\",\"tens\":\"passé proche\",\"fulltext\":\"lemu passé proche\"},\"lemo\":{\"name\":\"lemo\",\"tens\":\"passé lointain\",\"fulltext\":\"lemo passé lointain\"},\"leme\":{\"name\":\"leme\",\"tens\":\"passé éventuel, improbable mais pas impossible\",\"fulltext\":\"leme passé éventuel, improbable mais pas impossible\"},\"da\":{\"name\":\"da\",\"noun\":\"lieu, 9\",\"suffix\":\"lieu\",\"see\":[\"dahem\",\"dahir\",\"goa\",\"lama\",\"lamoa\"],\"fulltext\":\"da dahem dahir goa lama lamoa lieu, 9 lieu\"},\"dapa\":{\"name\":\"dapa\",\"noun\":\"joie, émotion complexe\",\"fulltext\":\"dapa joie, émotion complexe\"},\"guda\":{\"name\":\"guda\",\"noun\":\"le lieu de l'expérience\",\"fulltext\":\"guda le lieu de l'expérience\"},\"de\":{\"name\":\"de\",\"noun\":\"2\",\"pron\":\"nous deux\",\"posit\":\"sur le dos (2) jambes écartées\",\"conj\":\"nous deux (5p)\",\"see\":[\"agade\"],\"fulltext\":\"de agade nous deux (5p) 2 nous deux sur le dos (2) jambes écartées\"},\"deda\":{\"name\":\"deda\",\"pron\":\"nous deux\",\"fulltext\":\"deda nous deux\"},\"hamade\":{\"name\":\"hamade\",\"noun\":\"index (2ème doigt)\",\"posit\":\"sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)\",\"fulltext\":\"hamade index (2ème doigt) sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)\"},\"nede\":{\"name\":\"nede\",\"noun\":\"vie sans temps (stress, pas de mémoire)\",\"fulltext\":\"nede vie sans temps (stress, pas de mémoire)\"},\"dej\":{\"name\":\"dej\",\"noun\":\"vers\",\"fulltext\":\"dej vers\"},\"dahem\":{\"name\":\"dahem\",\"prep\":\"quand (passé)\",\"etym\":[\"da\",\"em\"],\"desc\":\"Le lieu {da} vécu {em}\",\"fulltext\":\"dahem da em Le lieu {da} vécu {em} quand (passé)\"},\"di\":{\"name\":\"di\",\"prefix\":\"qui (transforme verbe en adj)\",\"see\":[\"diguwu\",\"yadifa\"],\"fulltext\":\"di diguwu yadifa qui (transforme verbe en adj)\"},\"diguwu\":{\"name\":\"diguwu\",\"noun\":\"généreu.se.x\",\"etym\":[\"di\",\"guwu\"],\"fulltext\":\"diguwu di guwu généreu.se.x\"},\"dil\":{\"name\":\"dil\",\"noun\":\"ongle, griffe\",\"see\":[\"pedil\"],\"fulltext\":\"dil pedil ongle, griffe\"},\"pedil\":{\"name\":\"pedil\",\"noun\":\"fourche\",\"etym\":[\"pe\",\"dil\"],\"see\":[\"lipedil\"],\"fulltext\":\"pedil pe dil lipedil fourche\"},\"lipedil\":{\"name\":\"lipedil\",\"noun\":\"fourchette\",\"etym\":[\"lil\",\"pedil\"],\"fulltext\":\"lipedil lil pedil fourchette\"},\"dahir\":{\"name\":\"dahir\",\"prep\":\"quand (future)\",\"etym\":[\"da\",\"lir\"],\"fulltext\":\"dahir da lir quand (future)\"},\"dja\":{\"name\":\"dja\",\"noun\":\"possible\",\"see\":[\"edja\"],\"fulltext\":\"dja edja possible\"},\"dji\":{\"name\":\"dji\",\"noun\":\"10 (mémoire)\",\"desc\":\"Pour les dizaines, on utilise dji au lieu de {pi} {ipi} (mais on peut aussi dire {pi} {ipi})\",\"etym\":[\"pi\",\"ipi\"],\"fulltext\":\"dji pi ipi Pour les dizaines, on utilise dji au lieu de {pi} {ipi} (mais on peut aussi dire {pi} {ipi}) 10 (mémoire)\"},\"djipa\":{\"name\":\"djipa\",\"noun\":\"souvenir (être dieu.e)\",\"fulltext\":\"djipa souvenir (être dieu.e)\"},\"djil\":{\"name\":\"djil\",\"noun\":\"cheveux\",\"posit\":\"debout, le corps penché en avant, les cheveux offerts, prêts à être pris.\",\"see\":[\"djoda\"],\"fulltext\":\"djil djoda cheveux debout, le corps penché en avant, les cheveux offerts, prêts à être pris.\"},\"djoda\":{\"name\":\"djoda\",\"noun\":\"ours\",\"etym\":[\"djil\",\"oda\"],\"fulltext\":\"djoda djil oda ours\"},\"nedjil\":{\"name\":\"nedjil\",\"noun\":\"sans poils\",\"verb\":\"raser\",\"fulltext\":\"nedjil sans poils raser\"},\"djo\":{\"name\":\"djo\",\"adj\":\"partie proximal\",\"desc\":\"Au centre {dej} {ojo}\",\"see\":[\"djonopi\",\"obo\"],\"fulltext\":\"djo Au centre {dej} {ojo} djonopi obo partie proximal\"},\"hadjo\":{\"name\":\"hadjo\",\"verb\":\"prendre vers soi\",\"fulltext\":\"hadjo prendre vers soi\"},\"djoha\":{\"name\":\"djoha\",\"verb\":\"rejeter (loin de soi)\",\"fulltext\":\"djoha rejeter (loin de soi)\"},\"muhadjo\":{\"name\":\"muhadjo\",\"verb\":\"cueillir\",\"fulltext\":\"muhadjo cueillir\"},\"dom\":{\"name\":\"dom\",\"adj\":\"très fort\",\"desc\":\"\\nImplique un contact très profond, intime, fort, non pas par la force physique\\nmais par l’intensité de la circulation des sensations, du “donner” et\\n“recevoir”.\\n\\nPar exemple, la phrase suivante:\\n\\n[object Object]\\n\\nN’implique pas automatiquement la copulation méchanique et bestiale (même si\\ncette dernière est possible), mais plutôt la recherche d’une très grande\\nprofondeur et intensité qui pourrait aussi se traduire par beaucoup de\\nlenteur ou de câlins ou de contrastes, etc.\\n\",\"fulltext\":\"dom \\nImplique un contact très profond, intime, fort, non pas par la force physique\\nmais par l’intensité de la circulation des sensations, du “donner” et\\n“recevoir”.\\n\\nPar exemple, la phrase suivante:\\n\\n[object Object]\\n\\nN’implique pas automatiquement la copulation méchanique et bestiale (même si\\ncette dernière est possible), mais plutôt la recherche d’une très grande\\nprofondeur et intensité qui pourrait aussi se traduire par beaucoup de\\nlenteur ou de câlins ou de contrastes, etc.\\n très fort\"},\"don\":{\"name\":\"don\",\"prep\":\"où\",\"fulltext\":\"don où\"},\"du\":{\"name\":\"du\",\"prefix\":\"devant\",\"desc\":\"Inspiré de sud (on regarde le sud).\",\"see\":[\"doda\",\"alayin\",\"dualayin\",\"duto\",\"duna\",\"duwi\",\"duyin\",\"duha\"],\"fulltext\":\"du Inspiré de sud (on regarde le sud). doda alayin dualayin duto duna duwi duyin duha devant\"},\"duto\":{\"name\":\"duto\",\"noun\":\"petit frère/vent\",\"etym\":[\"du\",\"oto\"],\"fulltext\":\"duto du oto petit frère/vent\"},\"duna\":{\"name\":\"duna\",\"noun\":\"petite soeur/arbre\",\"etym\":[\"du\",\"ana\"],\"fulltext\":\"duna du ana petite soeur/arbre\"},\"duwi\":{\"name\":\"duwi\",\"noun\":\"petit.e enby/oiseau\",\"etym\":[\"du\",\"iwi\"],\"fulltext\":\"duwi du iwi petit.e enby/oiseau\"},\"duyin\":{\"name\":\"duyin\",\"noun\":\"avant du vagin\",\"etym\":[\"du\",\"yin\"],\"fulltext\":\"duyin du yin avant du vagin\"},\"dur\":{\"name\":\"dur\",\"noun\":\"nuque\",\"verb\":\"obéir\",\"adj\":\"obéissant.e\",\"fulltext\":\"dur nuque obéir obéissant.e\"},\"e\":{\"name\":\"e\",\"verb\":\"deviens, soit, être\",\"see\":[\"edja\",\"eyu\"],\"fulltext\":\"e edja eyu deviens, soit, être\"},\"edja\":{\"name\":\"edja\",\"prep\":\"interrogation (ou affirmative)\",\"etym\":[\"e\",\"dja\"],\"fulltext\":\"edja e dja interrogation (ou affirmative)\"},\"nedja\":{\"name\":\"nedja\",\"prep\":\"pas possible (ou affirmative)\",\"fulltext\":\"nedja pas possible (ou affirmative)\"},\"egi\":{\"name\":\"egi\",\"adj\":\"froid\",\"see\":[\"egina\",\"tajegi\",\"yonegi\"],\"fulltext\":\"egi egina tajegi yonegi froid\"},\"egina\":{\"name\":\"egina\",\"noun\":\"endive, janvier\",\"etym\":[\"egi\",\"ina\"],\"fulltext\":\"egina egi ina endive, janvier\"},\"eku\":{\"name\":\"eku\",\"prep\":\"que\",\"fulltext\":\"eku que\"},\"el\":{\"name\":\"el\",\"adj\":\"droit\",\"see\":[\"namel\"],\"fulltext\":\"el namel droit\"},\"em\":{\"name\":\"em\",\"noun\":\"le vécu\",\"verb\":\"vivre\",\"see\":[\"dahem\",\"nem\",\"lem\"],\"fulltext\":\"em dahem nem lem le vécu vivre\"},\"nem\":{\"name\":\"nem\",\"verb\":\"mourir, ne pas vivre\",\"etym\":[\"ne\",\"em\"],\"fulltext\":\"nem ne em mourir, ne pas vivre\"},\"dim\":{\"name\":\"dim\",\"noun\":\"couleur cerise\",\"fulltext\":\"dim couleur cerise\"},\"erina\":{\"name\":\"erina\",\"noun\":\"cerise (fruit), juin\",\"fulltext\":\"erina cerise (fruit), juin\"},\"muneri\":{\"name\":\"muneri\",\"noun\":\"téton (cerise du sein)\",\"fulltext\":\"muneri téton (cerise du sein)\"},\"tajeri\":{\"name\":\"tajeri\",\"noun\":\"gland (cerise du pénis)\",\"fulltext\":\"tajeri gland (cerise du pénis)\"},\"yoneri\":{\"name\":\"yoneri\",\"noun\":\"clitoris (cerise de la vulve)\",\"fulltext\":\"yoneri clitoris (cerise de la vulve)\"},\"eshu\":{\"name\":\"eshu\",\"adj\":\"perdu\",\"fulltext\":\"eshu perdu\"},\"eshubeo\":{\"name\":\"eshubeo\",\"noun\":\"monstre\",\"fulltext\":\"eshubeo monstre\"},\"fa\":{\"name\":\"fa\",\"noun\":\"yeux\",\"verb\":\"regarder\",\"desc\":\"Lorsqu’on utilise les yeux comme \\\"récépteurs\\\" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme ({i}, {u} ou {o}). Par exemple [object Object] versus [object Object].\",\"see\":[\"gufa\",\"fatio\",\"yafa\",\"yadifa\"],\"fulltext\":\"fa Lorsqu’on utilise les yeux comme \\\"récépteurs\\\" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme ({i}, {u} ou {o}). Par exemple [object Object] versus [object Object]. gufa fatio yafa yadifa yeux regarder\"},\"gufa\":{\"name\":\"gufa\",\"noun\":\"pupille (vie de l'oeil)\",\"etym\":[\"gu\",\"fa\"],\"fulltext\":\"gufa gu fa pupille (vie de l'oeil)\"},\"falo\":{\"name\":\"falo\",\"noun\":\"yeux humides, tristesse\",\"verb\":\"être triste\",\"fulltext\":\"falo yeux humides, tristesse être triste\"},\"faj\":{\"name\":\"faj\",\"noun\":\"prépuce, protection\",\"desc\":\"version courte de {feyaj}\",\"etym\":[\"fe\",\"yaj\"],\"fulltext\":\"faj fe yaj version courte de {feyaj} prépuce, protection\"},\"feyaj\":{\"name\":\"feyaj\",\"noun\":\"prépuce\",\"desc\":\"version longue de {faj}\",\"etym\":[\"fe\",\"yaj\"],\"fulltext\":\"feyaj fe yaj version longue de {faj} prépuce\"},\"nefaj\":{\"name\":\"nefaj\",\"verb\":\"découvrir le gland, retrousser la peau du prépuce\",\"fulltext\":\"nefaj découvrir le gland, retrousser la peau du prépuce\"},\"fe\":{\"name\":\"fe\",\"noun\":\"7 (sur)\",\"prefix\":\"sur\",\"verb\":\"être sur\",\"see\":[\"faj\",\"feyaj\"],\"fulltext\":\"fe faj feyaj 7 (sur) être sur sur\"},\"fena\":{\"name\":\"fena\",\"noun\":\"choux (couches), février\",\"fulltext\":\"fena choux (couches), février\"},\"feo\":{\"name\":\"feo\",\"adv\":\"sur moi\",\"fulltext\":\"feo sur moi\"},\"feoda\":{\"name\":\"feoda\",\"noun\":\"habits\",\"desc\":\"Littéralement \\\"sur le corps\\\".\",\"fulltext\":\"feoda Littéralement \\\"sur le corps\\\". habits\"},\"nefe\":{\"name\":\"nefe\",\"noun\":\"nu\",\"adj\":\"découvert\",\"verb\":\"déshabiller, découvrir\",\"fulltext\":\"nefe nu déshabiller, découvrir découvert\"},\"fepa\":{\"name\":\"fepa\",\"noun\":\"fierté\",\"fulltext\":\"fepa fierté\"},\"fen\":{\"name\":\"fen\",\"noun\":\"genoux\",\"posit\":\"à genoux\",\"verb\":\"marcher\",\"fulltext\":\"fen genoux marcher à genoux\"},\"fi\":{\"name\":\"fi\",\"noun\":\"fil, relier\",\"fulltext\":\"fi fil, relier\"},\"fishasha\":{\"name\":\"fishasha\",\"verb\":\"coudre (le fil qui danse)\",\"fulltext\":\"fishasha coudre (le fil qui danse)\"},\"gufishasha\":{\"name\":\"gufishasha\",\"verb\":\"coudre la vie, relier les choses hors du temps causal\",\"fulltext\":\"gufishasha coudre la vie, relier les choses hors du temps causal\"},\"gufi\":{\"name\":\"gufi\",\"noun\":\"fil de vie\",\"fulltext\":\"gufi fil de vie\"},\"fio\":{\"name\":\"fio\",\"noun\":\"aubergine (couleur)\",\"see\":[\"fiona\"],\"fulltext\":\"fio fiona aubergine (couleur)\"},\"fiona\":{\"name\":\"fiona\",\"noun\":\"aubergine (légume)\",\"etym\":[\"fio\",\"na\"],\"fulltext\":\"fiona fio na aubergine (légume)\"},\"fo\":{\"name\":\"fo\",\"verb\":\"fouetter\",\"fulltext\":\"fo fouetter\"},\"ga\":{\"name\":\"ga\",\"noun\":\"esprit\",\"desc\":\"Dans le sens de l'esprit des choses, l'esprit de la nature, etc.\",\"see\":[\"gana\",\"gao\",\"kuga\",\"nega\"],\"fulltext\":\"ga Dans le sens de l'esprit des choses, l'esprit de la nature, etc. gana gao kuga nega esprit\"},\"gana\":{\"name\":\"gana\",\"noun\":\"la terre\",\"etym\":[\"ga\",\"na\"],\"fulltext\":\"gana ga na la terre\"},\"gai\":{\"name\":\"gai\",\"noun\":\"conscience, pluie\",\"desc\":\"esprit caressé / qui caresse (la pluie sur la terre)\",\"see\":[\"gugai\"],\"fulltext\":\"gai esprit caressé / qui caresse (la pluie sur la terre) gugai conscience, pluie\"},\"kegai\":{\"name\":\"kegai\",\"noun\":\"dieu\",\"desc\":\"caché dans l'esprit caressé\",\"fulltext\":\"kegai caché dans l'esprit caressé dieu\"},\"gau\":{\"name\":\"gau\",\"noun\":\"attention (esprit tiré)\",\"etym\":[\"gau\",\"u\"],\"see\":[\"gau\",\"ligau\"],\"fulltext\":\"gau gau u gau ligau attention (esprit tiré)\"},\"gao\":{\"name\":\"gao\",\"noun\":\"attention (esprit projeté)\",\"etym\":[\"ga\",\"o\"],\"fulltext\":\"gao ga o attention (esprit projeté)\"},\"kuga\":{\"name\":\"kuga\",\"noun\":\"la pensée causale, l'esprit de victime\",\"etym\":[\"ku\",\"ga\"],\"fulltext\":\"kuga ku ga la pensée causale, l'esprit de victime\"},\"nega\":{\"name\":\"nega\",\"noun\":\"fou (sans esprit)\",\"etym\":[\"ne\",\"ga\"],\"fulltext\":\"nega ne ga fou (sans esprit)\"},\"gi\":{\"name\":\"gi\",\"noun\":\"doux (expérience caressée)\",\"suffix\":\"doux\",\"etym\":[\"gu\",\"i\"],\"see\":[\"gilapa\",\"yagi\",\"yaonagi\",\"yogi\",\"yohonagi\"],\"fulltext\":\"gi gu i gilapa yagi yaonagi yogi yohonagi doux (expérience caressée) doux\"},\"gil\":{\"name\":\"gil\",\"noun\":\"tigre\",\"see\":[\"gilil\"],\"fulltext\":\"gil gilil tigre\"},\"gilil\":{\"name\":\"gilil\",\"noun\":\"chat (petit tigre)\",\"etym\":[\"gil\",\"lil\"],\"fulltext\":\"gilil gil lil chat (petit tigre)\"},\"go\":{\"name\":\"go\",\"noun\":\"intense (expérience fouettée)\",\"etym\":[\"gu\",\"o\"],\"fulltext\":\"go gu o intense (expérience fouettée)\"},\"gol\":{\"name\":\"gol\",\"adj\":\"grand\",\"see\":[\"goa\",\"gawi\",\"goda\",\"shegul\"],\"fulltext\":\"gol goa gawi goda shegul grand\"},\"goa\":{\"name\":\"goa\",\"suffix\":\"big place\",\"etym\":[\"gol\",\"da\"],\"see\":[\"lamagoa\"],\"fulltext\":\"goa gol da lamagoa big place\"},\"gola\":{\"name\":\"gola\",\"noun\":\"grande chose (courge)\",\"fulltext\":\"gola grande chose (courge)\"},\"gawi\":{\"name\":\"gawi\",\"noun\":\"baleine\",\"etym\":[\"gol\",\"awi\"],\"fulltext\":\"gawi gol awi baleine\"},\"goda\":{\"name\":\"goda\",\"noun\":\"éléphant\",\"etym\":[\"gol\",\"oda\"],\"fulltext\":\"goda gol oda éléphant\"},\"gu\":{\"name\":\"gu\",\"adj\":\"obscurité, gestation, profondeur\",\"prefix\":\"profondeur\",\"desc\":\"On peut voir {gu} comme le mouvement de l'esprit {ga} (esprit) {u} (tiré)\",\"see\":[\"gufa\",\"gi\",\"go\",\"gulir\",\"gulem\",\"guo\",\"gui\",\"guwu\",\"guru\",\"gugai\",\"augu\",\"gupa\",\"gupi\",\"sigu\"],\"fulltext\":\"gu On peut voir {gu} comme le mouvement de l'esprit {ga} (esprit) {u} (tiré) gufa gi go gulir gulem guo gui guwu guru gugai augu gupa gupi sigu obscurité, gestation, profondeur profondeur\"},\"gulir\":{\"name\":\"gulir\",\"noun\":\"souhaiter (gu du future)\",\"etym\":[\"gu\",\"lir\"],\"fulltext\":\"gulir gu lir souhaiter (gu du future)\"},\"gulem\":{\"name\":\"gulem\",\"noun\":\"se souvenir (gu du passé)\",\"etym\":[\"gu\",\"lem\"],\"fulltext\":\"gulem gu lem se souvenir (gu du passé)\"},\"guna\":{\"name\":\"guna\",\"noun\":\"vie\",\"fulltext\":\"guna vie\"},\"guo\":{\"name\":\"guo\",\"verb\":\"mourir\",\"etym\":[\"gu\",\"o\"],\"fulltext\":\"guo gu o mourir\"},\"gui\":{\"name\":\"gui\",\"verb\":\"naître\",\"etym\":[\"gu\",\"i\"],\"see\":[\"iwigui\"],\"fulltext\":\"gui gu i iwigui naître\"},\"guwu\":{\"name\":\"guwu\",\"verb\":\"donner\",\"etym\":[\"gu\",\"wu\"],\"see\":[\"diguwu\",\"guwuna\"],\"fulltext\":\"guwu gu wu diguwu guwuna donner\"},\"guwuna\":{\"name\":\"guwuna\",\"noun\":\"don\",\"etym\":[\"guwu\",\"na\"],\"fulltext\":\"guwuna guwu na don\"},\"guru\":{\"name\":\"guru\",\"noun\":\"réalisation des profondeurs\",\"etym\":[\"gu\",\"ru\"],\"fulltext\":\"guru gu ru réalisation des profondeurs\"},\"gugai\":{\"name\":\"gugai\",\"noun\":\"fertilité\",\"adj\":\"fertile\",\"etym\":[\"gu\",\"gai\"],\"fulltext\":\"gugai gu gai fertilité fertile\"},\"augu\":{\"name\":\"augu\",\"adj\":\"confiance\",\"etym\":[\"au\",\"gu\"],\"fulltext\":\"augu au gu confiance\"},\"negu\":{\"name\":\"negu\",\"noun\":\"l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\",\"desc\":\"C'est l'inverse de la confiance: {augu}\",\"fulltext\":\"negu C'est l'inverse de la confiance: {augu} l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\"},\"guyuina\":{\"name\":\"guyuina\",\"noun\":\"pomme (le fruit de la vie)\",\"fulltext\":\"guyuina pomme (le fruit de la vie)\"},\"gupa\":{\"name\":\"gupa\",\"noun\":\"nature (tout le sombre/profondeur)\",\"etym\":[\"gu\",\"pa\"],\"fulltext\":\"gupa gu pa nature (tout le sombre/profondeur)\"},\"ha\":{\"name\":\"ha\",\"noun\":\"tête\",\"adj\":\"loin\",\"prefix\":\"partie supérieure ou distale\",\"see\":[\"duha\",\"hawe\",\"hase\",\"noha\"],\"fulltext\":\"ha duha hawe hase noha tête loin partie supérieure ou distale\"},\"duha\":{\"name\":\"duha\",\"noun\":\"visage\",\"etym\":[\"du\",\"ha\"],\"fulltext\":\"duha du ha visage\"},\"hawe\":{\"name\":\"hawe\",\"noun\":\"joue droite\",\"etym\":[\"ha\",\"we\"],\"fulltext\":\"hawe ha we joue droite\"},\"hase\":{\"name\":\"hase\",\"noun\":\"joue gauche\",\"etym\":[\"ha\",\"se\"],\"fulltext\":\"hase ha se joue gauche\"},\"noha\":{\"name\":\"noha\",\"noun\":\"occiput (dos de la tête)\",\"etym\":[\"no\",\"ha\"],\"fulltext\":\"noha no ha occiput (dos de la tête)\"},\"hal\":{\"name\":\"hal\",\"adj\":\"vers le ciel, immense\",\"fulltext\":\"hal vers le ciel, immense\"},\"mahal\":{\"name\":\"mahal\",\"noun\":\"main immense, action divine\",\"adj\":\"miraculeuse.x\",\"fulltext\":\"mahal main immense, action divine miraculeuse.x\"},\"hao\":{\"name\":\"hao\",\"noun\":\"buste\",\"desc\":\"De {ha} (moitié supérieure) et {oda} (corps).\",\"fulltext\":\"hao De {ha} (moitié supérieure) et {oda} (corps). buste\"},\"hem\":{\"name\":\"hem\",\"adj\":\"offert\",\"suffix\":\"offert\",\"desc\":\"Compliment important qui signifie \\\"je vois que tu m'offres ceci\\\". Par example [object Object] ou [object Object].\",\"fulltext\":\"hem Compliment important qui signifie \\\"je vois que tu m'offres ceci\\\". Par example [object Object] ou [object Object]. offert offert\"},\"him\":{\"name\":\"him\",\"verb\":\"grandir\",\"see\":[\"mahim\"],\"fulltext\":\"him mahim grandir\"},\"yuhim\":{\"name\":\"yuhim\",\"noun\":\"naître\",\"fulltext\":\"yuhim naître\"},\"mahim\":{\"name\":\"mahim\",\"noun\":\"construire (les mains qui font grandir)\",\"etym\":[\"ma\",\"him\"],\"fulltext\":\"mahim ma him construire (les mains qui font grandir)\"},\"i\":{\"name\":\"i\",\"noun\":\"caresser\",\"prefix\":\"à toi\",\"conj\":\"tu (2s)\",\"desc\":\"Il y a une exception pour le suffixe ajouté à {ma} (main): dans ce cas, on ne dit pas 'mai' mais directement {mi}.\",\"see\":[\"gi\",\"gui\",\"iha\",\"ida\",\"shei\"],\"fulltext\":\"i Il y a une exception pour le suffixe ajouté à {ma} (main): dans ce cas, on ne dit pas 'mai' mais directement {mi}. gi gui iha ida shei tu (2s) caresser à toi\"},\"iha\":{\"name\":\"iha\",\"noun\":\"toi poétique\",\"etym\":[\"i\",\"yada\"],\"fulltext\":\"iha i yada toi poétique\"},\"ida\":{\"name\":\"ida\",\"noun\":\"toi\",\"etym\":[\"i\",\"oda\"],\"fulltext\":\"ida i oda toi\"},\"ibu\":{\"name\":\"ibu\",\"prep\":\"pour\",\"fulltext\":\"ibu pour\"},\"im\":{\"name\":\"im\",\"noun\":\"fermé\",\"fulltext\":\"im fermé\"},\"in\":{\"name\":\"in\",\"adj\":\"chaud\",\"see\":[\"odin\",\"tajin\",\"yajin\",\"yonin\",\"yuina\"],\"fulltext\":\"in odin tajin yajin yonin yuina chaud\"},\"odin\":{\"name\":\"odin\",\"noun\":\"lion.ne\",\"etym\":[\"oda\",\"in\"],\"fulltext\":\"odin oda in lion.ne\"},\"ina\":{\"name\":\"ina\",\"noun\":\"plante\",\"see\":[\"egina\"],\"fulltext\":\"ina egina plante\"},\"ipa\":{\"name\":\"ipa\",\"noun\":\"100\",\"fulltext\":\"ipa 100\"},\"ipi\":{\"name\":\"ipi\",\"noun\":\"10\",\"see\":[\"dji\"],\"fulltext\":\"ipi dji 10\"},\"ipipa\":{\"name\":\"ipipa\",\"noun\":\"souvenir (être dieu.e)\",\"fulltext\":\"ipipa souvenir (être dieu.e)\"},\"ipu\":{\"name\":\"ipu\",\"noun\":\"1000\",\"fulltext\":\"ipu 1000\"},\"ir\":{\"name\":\"ir\",\"adj\":\"sous\",\"fulltext\":\"ir sous\"},\"iwi\":{\"name\":\"iwi\",\"noun\":\"oiseau, enby\",\"see\":[\"duwi\",\"iwiu\",\"iwigui\",\"miwi\",\"nowi\",\"iwa\"],\"fulltext\":\"iwi duwi iwiu iwigui miwi nowi iwa oiseau, enby\"},\"iwiu\":{\"name\":\"iwiu\",\"noun\":\"voler\",\"etym\":[\"iwi\",\"u\"],\"fulltext\":\"iwiu iwi u voler\"},\"iwigui\":{\"name\":\"iwigui\",\"noun\":\"oiseau qui naît (phénix)\",\"etym\":[\"iwi\",\"gui\"],\"fulltext\":\"iwigui iwi gui oiseau qui naît (phénix)\"},\"iwioda\":{\"name\":\"iwioda\",\"noun\":\"enby\",\"fulltext\":\"iwioda enby\"},\"je\":{\"name\":\"je\",\"noun\":\"8 (proche, émotion)\",\"fulltext\":\"je 8 (proche, émotion)\"},\"jepa\":{\"name\":\"jepa\",\"noun\":\"lien, appartenance\",\"fulltext\":\"jepa lien, appartenance\"},\"jo\":{\"name\":\"jo\",\"noun\":\"éponge\",\"see\":[\"joyon\"],\"fulltext\":\"jo joyon éponge\"},\"joyon\":{\"name\":\"joyon\",\"noun\":\"corps spongieux du clitoris\",\"etym\":[\"jo\",\"yon\"],\"fulltext\":\"joyon jo yon corps spongieux du clitoris\"},\"jotaj\":{\"name\":\"jotaj\",\"noun\":\"corps spongieux du pénis\",\"fulltext\":\"jotaj corps spongieux du pénis\"},\"jom\":{\"name\":\"jom\",\"noun\":\"group, famille\",\"fulltext\":\"jom group, famille\"},\"jana\":{\"name\":\"jana\",\"noun\":\"forêt\",\"fulltext\":\"jana forêt\"},\"ka\":{\"name\":\"ka\",\"noun\":\"4 (singularité, qui ne peut pas être pensé)\",\"pron\":\"tous\",\"suffix\":\"tous\",\"posit\":\"à quatre pattes\",\"conj\":\"tou.te.s, universel (7p)\",\"see\":[\"kada\",\"neka\",\"karu\",\"koda\",\"kanam\"],\"fulltext\":\"ka kada neka karu koda kanam tou.te.s, universel (7p) 4 (singularité, qui ne peut pas être pensé) tous tous à quatre pattes\"},\"kada\":{\"name\":\"kada\",\"noun\":\"tou.te.s\",\"etym\":[\"ka\",\"oda\"],\"fulltext\":\"kada ka oda tou.te.s\"},\"ika\":{\"name\":\"ika\",\"pron\":\"à toi, nous toutes et tous\",\"fulltext\":\"ika à toi, nous toutes et tous\"},\"hamaka\":{\"name\":\"hamaka\",\"noun\":\"annulaire (4ème doigt)\",\"posit\":\"à quatre pattes (indiquée par un signe de main: pouce contre annulaire)\",\"fulltext\":\"hamaka annulaire (4ème doigt) à quatre pattes (indiquée par un signe de main: pouce contre annulaire)\"},\"neka\":{\"name\":\"neka\",\"noun\":\"honte\",\"etym\":[\"ne\",\"ka\"],\"fulltext\":\"neka ne ka honte\"},\"karu\":{\"name\":\"karu\",\"verb\":\"choisir (la réalisation du singulier en soi)\",\"etym\":[\"ka\",\"ru\"],\"fulltext\":\"karu ka ru choisir (la réalisation du singulier en soi)\"},\"koda\":{\"name\":\"koda\",\"noun\":\"cow\",\"etym\":[\"ka\",\"oda\"],\"fulltext\":\"koda ka oda cow\"},\"ke\":{\"name\":\"ke\",\"adj\":\"caché\",\"prefix\":\"caché\",\"see\":[\"kela\"],\"fulltext\":\"ke kela caché caché\"},\"kei\":{\"name\":\"kei\",\"conj\":\"tu honorifique (2h)\",\"see\":[\"keda\"],\"fulltext\":\"kei keda tu honorifique (2h)\"},\"keda\":{\"name\":\"keda\",\"pron\":\"tu honorifique\",\"etym\":[\"kei\",\"oda\"],\"fulltext\":\"keda kei oda tu honorifique\"},\"ko\":{\"name\":\"ko\",\"prep\":\"avec\",\"fulltext\":\"ko avec\"},\"ku\":{\"name\":\"ku\",\"noun\":\"corde\",\"verb\":\"attacher\",\"see\":[\"kuga\",\"kupa\",\"kulei\",\"kuoda\"],\"fulltext\":\"ku kuga kupa kulei kuoda corde attacher\"},\"kupa\":{\"name\":\"kupa\",\"desc\":\"Tout attacher, relation marchande au monde, \\\"faire pour\\\", opposé de {gupi} ou {aupa}.\",\"etym\":[\"ku\",\"pa\"],\"see\":[\"nekupa\"],\"fulltext\":\"kupa ku pa Tout attacher, relation marchande au monde, \\\"faire pour\\\", opposé de {gupi} ou {aupa}. nekupa\"},\"nekupa\":{\"name\":\"nekupa\",\"noun\":\"lâcher prise, ne pas attacher tout\",\"etym\":[\"ne\",\"kupa\"],\"fulltext\":\"nekupa ne kupa lâcher prise, ne pas attacher tout\"},\"kulei\":{\"name\":\"kulei\",\"verb\":\"manipuler\",\"desc\":\"Attacher le temps, manipuler, relation marchande au temps (si alors).\",\"etym\":[\"ku\",\"lei\"],\"fulltext\":\"kulei ku lei Attacher le temps, manipuler, relation marchande au temps (si alors). manipuler\"},\"kuoda\":{\"name\":\"kuoda\",\"noun\":\"victime-bourreau-sauveu.se.r\",\"desc\":\"Corps attaché.\",\"etym\":[\"ku\",\"oda\"],\"fulltext\":\"kuoda ku oda Corps attaché. victime-bourreau-sauveu.se.r\"},\"la\":{\"name\":\"la\",\"noun\":\"lèvres\",\"verb\":\"embrasser\",\"see\":[\"kela\",\"lapa\",\"lana\",\"laj\",\"ulul\"],\"fulltext\":\"la kela lapa lana laj ulul lèvres embrasser\"},\"kela\":{\"name\":\"kela\",\"noun\":\"dent\",\"etym\":[\"ke\",\"la\"],\"see\":[\"kelasa\",\"kelo\",\"kawi\"],\"fulltext\":\"kela ke la kelasa kelo kawi dent\"},\"kelasa\":{\"name\":\"kelasa\",\"noun\":\"couteau\",\"etym\":[\"kela\",\"sa\"],\"fulltext\":\"kelasa kela sa couteau\"},\"lapa\":{\"name\":\"lapa\",\"verb\":\"parler (les lèvres partout)\",\"etym\":[\"la\",\"pa\"],\"see\":[\"lapalapa\",\"lapir\",\"gilapa\"],\"fulltext\":\"lapa la pa lapalapa lapir gilapa parler (les lèvres partout)\"},\"lapalapa\":{\"name\":\"lapalapa\",\"noun\":\"canard\",\"etym\":[\"lapa\",\"lapa\"],\"fulltext\":\"lapalapa lapa lapa canard\"},\"kelo\":{\"name\":\"kelo\",\"noun\":\"crocodile\",\"etym\":[\"kela\",\"oda\"],\"fulltext\":\"kelo kela oda crocodile\"},\"kawi\":{\"name\":\"kawi\",\"noun\":\"requin\",\"etym\":[\"kela\",\"awi\"],\"fulltext\":\"kawi kela awi requin\"},\"lapir\":{\"name\":\"lapir\",\"noun\":\"annoncer\",\"etym\":[\"lapa\",\"elir\"],\"fulltext\":\"lapir lapa elir annoncer\"},\"gilapa\":{\"name\":\"gilapa\",\"noun\":\"chuchotter (la douceur parle)\",\"etym\":[\"gi\",\"lapa\"],\"fulltext\":\"gilapa gi lapa chuchotter (la douceur parle)\"},\"lana\":{\"name\":\"lana\",\"noun\":\"parole, langage, chose des lèvres\",\"etym\":[\"la\",\"na\"],\"fulltext\":\"lana la na parole, langage, chose des lèvres\"},\"lae\":{\"name\":\"lae\",\"pron\":\"elle/il/elle.s/ils/eux\",\"fulltext\":\"lae elle/il/elle.s/ils/eux\"},\"laj\":{\"name\":\"laj\",\"noun\":\"sourire\",\"verb\":\"sourire\",\"etym\":[\"la\",\"aj\"],\"fulltext\":\"laj la aj sourire sourire\"},\"lam\":{\"name\":\"lam\",\"verb\":\"laver\",\"noun\":\"eau\",\"see\":[\"lama\",\"lamoa\",\"malam\",\"melam\",\"lamon\",\"otalamon\"],\"fulltext\":\"lam lama lamoa malam melam lamon otalamon eau laver\"},\"falam\":{\"name\":\"falam\",\"noun\":\"larmes profondes\",\"verb\":\"pleurs qui lavent\",\"fulltext\":\"falam larmes profondes pleurs qui lavent\"},\"lama\":{\"name\":\"lama\",\"noun\":\"mer\",\"etym\":[\"lam\",\"da\"],\"see\":[\"lamagoa\",\"sheulama\"],\"fulltext\":\"lama lam da lamagoa sheulama mer\"},\"lamagoa\":{\"name\":\"lamagoa\",\"noun\":\"océan\",\"etym\":[\"lama\",\"goa\"],\"fulltext\":\"lamagoa lama goa océan\"},\"lami\":{\"name\":\"lami\",\"noun\":\"vague\",\"see\":[\"lamioda\"],\"fulltext\":\"lami lamioda vague\"},\"lamioda\":{\"name\":\"lamioda\",\"noun\":\"serpent\",\"etym\":[\"lami\",\"oda\"],\"fulltext\":\"lamioda lami oda serpent\"},\"lamoa\":{\"name\":\"lamoa\",\"noun\":\"source (lieu)\",\"etym\":[\"lam\",\"on\",\"da\"],\"fulltext\":\"lamoa lam on da source (lieu)\"},\"lamu\":{\"name\":\"lamu\",\"verb\":\"boire\",\"fulltext\":\"lamu boire\"},\"lau\":{\"name\":\"lau\",\"noun\":\"toujours\",\"desc\":\"(le temps aime {lei} {au})\",\"fulltext\":\"lau (le temps aime {lei} {au}) toujours\"},\"le\":{\"name\":\"le\",\"suffix\":\"annonce d' un nom\",\"desc\":\"L'enchassée avec le nom se termine par {oda}.\",\"fulltext\":\"le L'enchassée avec le nom se termine par {oda}. annonce d' un nom\"},\"ile\":{\"name\":\"ile\",\"prep\":\"toi qui te nomme\",\"fulltext\":\"ile toi qui te nomme\"},\"lei\":{\"name\":\"lei\",\"noun\":\"le temps\",\"prep\":\"alors\",\"conj\":\"toujours\",\"desc\":\"Donne {lem} et {lir}.\",\"see\":[\"kulei\"],\"fulltext\":\"lei Donne {lem} et {lir}. kulei toujours le temps alors\"},\"gulei\":{\"name\":\"gulei\",\"noun\":\"le temps de l'expérience\",\"fulltext\":\"gulei le temps de l'expérience\"},\"elei\":{\"name\":\"elei\",\"prep\":\"toujours (pas usité, on utilise lau)\",\"fulltext\":\"elei toujours (pas usité, on utilise lau)\"},\"ulei\":{\"name\":\"ulei\",\"prep\":\"jusqu'à ce que (tirer le temps)\",\"desc\":\"De {ul} et {lei} {eku}\",\"fulltext\":\"ulei De {ul} et {lei} {eku} jusqu'à ce que (tirer le temps)\"},\"leiuki\":{\"name\":\"leiuki\",\"noun\":\"patience\",\"adj\":\"patient.e\",\"desc\":\"De {lei} et {uki} (temps long).\",\"fulltext\":\"leiuki De {lei} et {uki} (temps long). patience patient.e\"},\"neleiuki\":{\"name\":\"neleiuki\",\"noun\":\"impatience\",\"adj\":\"impatient.e\",\"fulltext\":\"neleiuki impatience impatient.e\"},\"lem\":{\"name\":\"lem\",\"suffix\":\"passé\",\"verb\":\"vivait\",\"etym\":[\"em\"],\"see\":[\"gulem\"],\"fulltext\":\"lem em gulem vivait passé\"},\"lemir\":{\"name\":\"lemir\",\"suffix\":\"toujours\",\"desc\":\"De {lem} et {lir}.\",\"fulltext\":\"lemir De {lem} et {lir}. toujours\"},\"elem\":{\"name\":\"elem\",\"noun\":\"le passé existe (dans le passé)\",\"fulltext\":\"elem le passé existe (dans le passé)\"},\"elemir\":{\"name\":\"elemir\",\"noun\":\"de toute éternité\",\"fulltext\":\"elemir de toute éternité\"},\"li\":{\"name\":\"li\",\"noun\":\"bouche\",\"verb\":\"sucer\",\"see\":[\"lipa\",\"ligau\",\"liu\"],\"fulltext\":\"li lipa ligau liu bouche sucer\"},\"lipa\":{\"name\":\"lipa\",\"noun\":\"chanter\",\"etym\":[\"li\",\"pa\"],\"see\":[\"lipawi\"],\"fulltext\":\"lipa li pa lipawi chanter\"},\"lipawi\":{\"name\":\"lipawi\",\"noun\":\"loup (qui chante la lune)\",\"etym\":[\"lipa\",\"munawi\"],\"fulltext\":\"lipawi lipa munawi loup (qui chante la lune)\"},\"keli\":{\"name\":\"keli\",\"noun\":\"langue\",\"verb\":\"lécher\",\"desc\":\"De {ke} (caché) et {li} (bouche): caché dans la bouche.\",\"fulltext\":\"keli De {ke} (caché) et {li} (bouche): caché dans la bouche. langue lécher\"},\"ligau\":{\"name\":\"ligau\",\"noun\":\"goûter (attention dans la bouche)\",\"etym\":[\"li\",\"gau\"],\"fulltext\":\"ligau li gau goûter (attention dans la bouche)\"},\"lil\":{\"name\":\"lil\",\"adj\":\"petit.e\",\"noun\":\"5\",\"suffix\":\"petit.e\",\"see\":[\"lipedil\",\"gilil\",\"limasa\",\"lilimasa\",\"palajil\",\"piulil\",\"lisoa\"],\"fulltext\":\"lil lipedil gilil limasa lilimasa palajil piulil lisoa 5 petit.e petit.e\"},\"hamalil\":{\"name\":\"hamalil\",\"noun\":\"auriculaire (petit doigt, 5ème doigt)\",\"fulltext\":\"hamalil auriculaire (petit doigt, 5ème doigt)\"},\"lilaj\":{\"name\":\"lilaj\",\"noun\":\"étincelle\",\"posit\":\"sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)\",\"desc\":\"De {lil} petit et {aj} feu.\",\"fulltext\":\"lilaj De {lil} petit et {aj} feu. étincelle sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)\"},\"nelil\":{\"name\":\"nelil\",\"noun\":\"confusion\",\"verb\":\"confondre\",\"fulltext\":\"nelil confusion confondre\"},\"lir\":{\"name\":\"lir\",\"noun\":\"future\",\"see\":[\"dahir\",\"gulir\"],\"fulltext\":\"lir dahir gulir future\"},\"lirana\":{\"name\":\"lirana\",\"noun\":\"promesse\",\"etym\":[\"lira\",\"na\"],\"fulltext\":\"lirana lira na promesse\"},\"ilir\":{\"name\":\"ilir\",\"noun\":\"future toi (tu vas...)\",\"fulltext\":\"ilir future toi (tu vas...)\"},\"elir\":{\"name\":\"elir\",\"noun\":\"le future exist (dans le future)\",\"see\":[\"lapir\"],\"fulltext\":\"elir lapir le future exist (dans le future)\"},\"liu\":{\"name\":\"liu\",\"verb\":\"manger\",\"etym\":[\"li\",\"u\"],\"fulltext\":\"liu li u manger\"},\"lo\":{\"name\":\"lo\",\"noun\":\"soumis.e, humide, qui reçoit\",\"see\":[\"loda\",\"loru\"],\"fulltext\":\"lo loda loru soumis.e, humide, qui reçoit\"},\"loda\":{\"name\":\"loda\",\"noun\":\"personne soumis.e\",\"etym\":[\"lo\",\"oda\"],\"fulltext\":\"loda lo oda personne soumis.e\"},\"loru\":{\"name\":\"loru\",\"noun\":\"devenir petit.e (se soumettre)\",\"adj\":\"humilité\",\"etym\":[\"lo\",\"ru\"],\"fulltext\":\"loru lo ru devenir petit.e (se soumettre) humilité\"},\"silo\":{\"name\":\"silo\",\"adj\":\"doucement\",\"desc\":\"De {si} et {lo} (comme soumis.e).\",\"fulltext\":\"silo De {si} et {lo} (comme soumis.e). doucement\"},\"ma\":{\"name\":\"ma\",\"noun\":\"main\",\"verb\":\"prendre dans la main, branler, tenir\",\"desc\":\"\\nVoir aussi les exceptions liées au suffixes {i} (masser, caresser), {o} (frapper, faire mal) et {u} (tirer, pincer): {mi}, {mo}, {mu}. On peut aussi utiliser la négation {nema} (lâcher).\\n\",\"see\":[\"mahim\",\"malam\",\"masa\"],\"fulltext\":\"ma \\nVoir aussi les exceptions liées au suffixes {i} (masser, caresser), {o} (frapper, faire mal) et {u} (tirer, pincer): {mi}, {mo}, {mu}. On peut aussi utiliser la négation {nema} (lâcher).\\n mahim malam masa main prendre dans la main, branler, tenir\"},\"hama\":{\"name\":\"hama\",\"noun\":\"doigt\",\"desc\":\"De {ha} (tête, moitié supérieure) et {ma} (main).\",\"fulltext\":\"hama De {ha} (tête, moitié supérieure) et {ma} (main). doigt\"},\"djoma\":{\"name\":\"djoma\",\"noun\":\"poignet\",\"desc\":\"De {djo} (bas) et {ma} (main).\",\"fulltext\":\"djoma De {djo} (bas) et {ma} (main). poignet\"},\"nema\":{\"name\":\"nema\",\"noun\":\"sans main\",\"verb\":\"lâcher\",\"desc\":\"De {ne} (négation) et {ma} (main).\",\"fulltext\":\"nema De {ne} (négation) et {ma} (main). sans main lâcher\"},\"mu\":{\"name\":\"mu\",\"verb\":\"tirer, pincer avec la main\",\"desc\":\"De {ma} (main) et le suffix {u}.\",\"fulltext\":\"mu De {ma} (main) et le suffix {u}. tirer, pincer avec la main\"},\"malam\":{\"name\":\"malam\",\"noun\":\"maman (la main de l'eau)\",\"etym\":[\"ma\",\"lam\"],\"fulltext\":\"malam ma lam maman (la main de l'eau)\"},\"miwi\":{\"name\":\"miwi\",\"noun\":\"papillon\",\"etym\":[\"mi\",\"iwi\"],\"fulltext\":\"miwi mi iwi papillon\"},\"masa\":{\"name\":\"masa\",\"noun\":\"pèle\",\"etym\":[\"ma\",\"sa\"],\"see\":[\"limasa\"],\"fulltext\":\"masa ma sa limasa pèle\"},\"limasa\":{\"name\":\"limasa\",\"noun\":\"cuillère\",\"etym\":[\"lil\",\"masa\"],\"see\":[\"lilimasa\"],\"fulltext\":\"limasa lil masa lilimasa cuillère\"},\"lilimasa\":{\"name\":\"lilimasa\",\"noun\":\"petite cuillère\",\"etym\":[\"lil\",\"limasa\"],\"fulltext\":\"lilimasa lil limasa petite cuillère\"},\"me\":{\"name\":\"me\",\"verb\":\"être en mouvement\",\"prefix\":\"bouger dans\",\"see\":[\"meshe\",\"melam\"],\"fulltext\":\"me meshe melam être en mouvement bouger dans\"},\"meshe\":{\"name\":\"meshe\",\"verb\":\"voler\",\"etym\":[\"me\",\"she\"],\"fulltext\":\"meshe me she voler\"},\"melam\":{\"name\":\"melam\",\"verb\":\"nager\",\"etym\":[\"me\",\"lam\"],\"fulltext\":\"melam me lam nager\"},\"lom\":{\"name\":\"lom\",\"noun\":\"de (fait de)\",\"fulltext\":\"lom de (fait de)\"},\"meu\":{\"name\":\"meu\",\"prep\":\"sinon\",\"fulltext\":\"meu sinon\"},\"mi\":{\"name\":\"mi\",\"verb\":\"masser\",\"desc\":\"De {ma} (main) avec le suffixe {i} (masser).\",\"see\":[\"miwi\"],\"fulltext\":\"mi De {ma} (main) avec le suffixe {i} (masser). miwi masser\"},\"mo\":{\"name\":\"mo\",\"verb\":\"frapper, faire mal (avec la main)\",\"fulltext\":\"mo frapper, faire mal (avec la main)\"},\"moon\":{\"name\":\"moon\",\"noun\":\"seins\",\"posit\":\"à genoux, buste au sol\",\"see\":[\"mawi\",\"munawi\",\"muna\"],\"fulltext\":\"moon mawi munawi muna seins à genoux, buste au sol\"},\"munwe\":{\"name\":\"munwe\",\"noun\":\"sein droite\",\"desc\":\"De {mu} et {we}.\",\"fulltext\":\"munwe De {mu} et {we}. sein droite\"},\"hamun\":{\"name\":\"hamun\",\"noun\":\"téton\",\"see\":[\"hamunon\"],\"fulltext\":\"hamun hamunon téton\"},\"munawi\":{\"name\":\"munawi\",\"noun\":\"lune\",\"etym\":[\"moon\",\"awi\"],\"see\":[\"lipawi\"],\"fulltext\":\"munawi moon awi lipawi lune\"},\"muna\":{\"name\":\"muna\",\"noun\":\"biberon\",\"etym\":[\"moon\",\"na\"],\"fulltext\":\"muna moon na biberon\"},\"na\":{\"name\":\"na\",\"suffix\":\"incarné (chose)\",\"see\":[\"agana\",\"fiona\",\"gana\",\"guwuna\",\"lana\",\"lirana\",\"muna\",\"piuna\",\"shana\",\"tiona\",\"yuina\"],\"fulltext\":\"na agana fiona gana guwuna lana lirana muna piuna shana tiona yuina incarné (chose)\"},\"naj\":{\"name\":\"naj\",\"noun\":\"frisson, nuage\",\"verb\":\"frissonner\",\"fulltext\":\"naj frisson, nuage frissonner\"},\"najlo\":{\"name\":\"najlo\",\"noun\":\"orgasme,pluie\",\"fulltext\":\"najlo orgasme,pluie\"},\"najapa\":{\"name\":\"najapa\",\"noun\":\"brouillard\",\"desc\":\"De {naj} (nuage) et {pa} (partout).\",\"fulltext\":\"najapa De {naj} (nuage) et {pa} (partout). brouillard\"},\"nam\":{\"name\":\"nam\",\"noun\":\"bois\",\"see\":[\"kanam\",\"namel\"],\"fulltext\":\"nam kanam namel bois\"},\"kanam\":{\"name\":\"kanam\",\"noun\":\"chaise\",\"etym\":[\"ka\",\"nam\"],\"fulltext\":\"kanam ka nam chaise\"},\"namel\":{\"name\":\"namel\",\"noun\":\"bâton (bois droit)\",\"etym\":[\"nam\",\"el\"],\"fulltext\":\"namel nam el bâton (bois droit)\"},\"ne\":{\"name\":\"ne\",\"prefix\":\"négation, monde des mots, transe commune\",\"see\":[\"nem\",\"nega\",\"neka\",\"nekupa\",\"negupi\",\"nesu\"],\"fulltext\":\"ne nem nega neka nekupa negupi nesu négation, monde des mots, transe commune\"},\"neoda\":{\"name\":\"neoda\",\"noun\":\"cadavre, sans corps, personne (no body)\",\"fulltext\":\"neoda cadavre, sans corps, personne (no body)\"},\"nepa\":{\"name\":\"nepa\",\"noun\":\"abysse, néant\",\"fulltext\":\"nepa abysse, néant\"},\"nelo\":{\"name\":\"nelo\",\"verb\":\"lutter\",\"desc\":\"De {ne} et {lo}, ne pas se soumettre.\",\"fulltext\":\"nelo De {ne} et {lo}, ne pas se soumettre. lutter\"},\"no\":{\"name\":\"no\",\"prefix\":\"derrière\",\"desc\":\"Inspiré de nord (on regarde le sud)\",\"see\":[\"noha\",\"noda\",\"nona\",\"nowi\",\"nopi\",\"noyin\"],\"fulltext\":\"no Inspiré de nord (on regarde le sud) noha noda nona nowi nopi noyin derrière\"},\"noda\":{\"name\":\"noda\",\"noun\":\"grand.e soeur/frère\",\"etym\":[\"no\",\"oda\"],\"fulltext\":\"noda no oda grand.e soeur/frère\"},\"noto\":{\"name\":\"noto\",\"noun\":\"grand frère/vent\",\"fulltext\":\"noto grand frère/vent\"},\"nona\":{\"name\":\"nona\",\"noun\":\"grande soeur/arbre\",\"etym\":[\"no\",\"ana\"],\"fulltext\":\"nona no ana grande soeur/arbre\"},\"nowi\":{\"name\":\"nowi\",\"noun\":\"grand.e frère/soeur enby/oiseau\",\"etym\":[\"no\",\"iwi\"],\"fulltext\":\"nowi no iwi grand.e frère/soeur enby/oiseau\"},\"nopi\":{\"name\":\"nopi\",\"noun\":\"dos\",\"posit\":\"allongé sur le dos\",\"etym\":[\"no\",\"pi\"],\"see\":[\"djonopi\"],\"fulltext\":\"nopi no pi djonopi dos allongé sur le dos\"},\"djonopi\":{\"name\":\"djonopi\",\"noun\":\"bas du dos\",\"etym\":[\"djo\",\"nopi\"],\"fulltext\":\"djonopi djo nopi bas du dos\"},\"noyin\":{\"name\":\"noyin\",\"noun\":\"fond du vagin (col de l'utérus)\",\"etym\":[\"no\",\"yin\"],\"fulltext\":\"noyin no yin fond du vagin (col de l'utérus)\"},\"noa\":{\"name\":\"noa\",\"noun\":\"peau\",\"fulltext\":\"noa peau\"},\"noam\":{\"name\":\"noam\",\"verb\":\"toucher\",\"fulltext\":\"noam toucher\"},\"nu\":{\"name\":\"nu\",\"verb\":\"broder (le truc solitaire, concentré.e)\",\"see\":[\"pinu\"],\"fulltext\":\"nu pinu broder (le truc solitaire, concentré.e)\"},\"sinu\":{\"name\":\"sinu\",\"adj\":\"délicatement\",\"desc\":\"De {si} et {nu} (...).\",\"fulltext\":\"sinu De {si} et {nu} (...). délicatement\"},\"nur\":{\"name\":\"nur\",\"adv\":\"seulement\",\"fulltext\":\"nur seulement\"},\"o\":{\"name\":\"o\",\"noun\":\"on\",\"suffix\":\"frapper, faire mal\",\"prefix\":\"en bas ?? me ??\",\"conj\":\"on (1sp)\",\"desc\":\"Le \\\"on\\\" est important: on est pas séparés. Ça indique à la fois \\\"moi et les autres\\\" (même imaginés) et \\\"toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc\\\". Quand on dit {o}, on implique tout ça. Si \\\"on\\\" te fait l'amour, c'est un monde entier qui vient à ta rencontre.\",\"see\":[\"ago\",\"gao\",\"go\",\"guo\",\"oha\",\"odo\"],\"fulltext\":\"o Le \\\"on\\\" est important: on est pas séparés. Ça indique à la fois \\\"moi et les autres\\\" (même imaginés) et \\\"toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc\\\". Quand on dit {o}, on implique tout ça. Si \\\"on\\\" te fait l'amour, c'est un monde entier qui vient à ta rencontre. ago gao go guo oha odo on (1sp) on en bas ?? me ?? frapper, faire mal\"},\"hafo\":{\"name\":\"hafo\",\"verb\":\"tomber (tête fouettée)\",\"fulltext\":\"hafo tomber (tête fouettée)\"},\"obo\":{\"name\":\"obo\",\"noun\":\"pubis (bas du ventre)\",\"desc\":\"version familière de {djobo}\",\"etym\":[\"djo\",\"bo\"],\"fulltext\":\"obo djo bo version familière de {djobo} pubis (bas du ventre)\"},\"habo\":{\"name\":\"habo\",\"noun\":\"plexus\",\"fulltext\":\"habo plexus\"},\"djobo\":{\"name\":\"djobo\",\"noun\":\"pubis\",\"desc\":\"version longue de {obo}\",\"fulltext\":\"djobo version longue de {obo} pubis\"},\"yoda\":{\"name\":\"yoda\",\"noun\":\"corps avec une vulve\",\"fulltext\":\"yoda corps avec une vulve\"},\"oda\":{\"name\":\"oda\",\"noun\":\"corps, lieu vivant (\\\"on\\\")\",\"suffix\":\"animal comme, qui a\",\"desc\":\"De là vient {keoda} (**la langue cachée du corps**).\",\"see\":[\"yada\",\"doda\",\"djoda\",\"goda\",\"ida\",\"odin\",\"kada\",\"koda\",\"keda\",\"kuoda\",\"kelo\",\"lamioda\",\"loda\",\"noda\",\"yosa\",\"oho\",\"odo\",\"odu\",\"otoda\",\"peda\",\"pida\",\"shada\",\"shida\",\"shoda\",\"uloda\",\"yida\"],\"fulltext\":\"oda De là vient {keoda} (**la langue cachée du corps**). yada doda djoda goda ida odin kada koda keda kuoda kelo lamioda loda noda yosa oho odo odu otoda peda pida shada shida shoda uloda yida corps, lieu vivant (\\\"on\\\") animal comme, qui a\"},\"oha\":{\"name\":\"oha\",\"pron\":\"soi poétique (nous indéf)\",\"etym\":[\"o\",\"yada\"],\"fulltext\":\"oha o yada soi poétique (nous indéf)\"},\"keoda\":{\"name\":\"keoda\",\"noun\":\"lieu de vie cachée, langue cachée du corps\",\"fulltext\":\"keoda lieu de vie cachée, langue cachée du corps\"},\"yosa\":{\"name\":\"yosa\",\"noun\":\"humain\",\"etym\":[\"yo\",\"oda\"],\"fulltext\":\"yosa yo oda humain\"},\"oho\":{\"name\":\"oho\",\"noun\":\"iel\",\"etym\":[\"a\",\"oda\"],\"fulltext\":\"oho a oda iel\"},\"odo\":{\"name\":\"odo\",\"noun\":\"partir\",\"etym\":[\"oda\",\"o\"],\"fulltext\":\"odo oda o partir\"},\"odu\":{\"name\":\"odu\",\"noun\":\"rejoindre, venir, se tirer le corps vers\",\"etym\":[\"oda\",\"u\"],\"fulltext\":\"odu oda u rejoindre, venir, se tirer le corps vers\"},\"ojo\":{\"name\":\"ojo\",\"adj\":\"centre\",\"fulltext\":\"ojo centre\"},\"om\":{\"name\":\"om\",\"noun\":\"transcendance\",\"adj\":\"ouvert\",\"prefix\":\"transcender\",\"suffix\":\"temple, lieu sacré\",\"fulltext\":\"om transcendance ouvert transcender temple, lieu sacré\"},\"on\":{\"name\":\"on\",\"noun\":\"source\",\"verb\":\"faire naître (apparaître)\",\"see\":[\"lamoa\",\"lamon\",\"yaon\",\"yohon\",\"hamunon\",\"onsho\"],\"fulltext\":\"on lamoa lamon yaon yohon hamunon onsho source faire naître (apparaître)\"},\"lamon\":{\"name\":\"lamon\",\"noun\":\"urètre (source de l'eau)\",\"etym\":[\"lam\",\"on\"],\"fulltext\":\"lamon lam on urètre (source de l'eau)\"},\"yaon\":{\"name\":\"yaon\",\"noun\":\"lever de la nuit (coucher de soleil)\",\"etym\":[\"ya\",\"on\"],\"see\":[\"yaonagi\"],\"fulltext\":\"yaon ya on yaonagi lever de la nuit (coucher de soleil)\"},\"yohon\":{\"name\":\"yohon\",\"noun\":\"lever du jour\",\"etym\":[\"yo\",\"on\"],\"see\":[\"yohonagi\"],\"fulltext\":\"yohon yo on yohonagi lever du jour\"},\"ora\":{\"name\":\"ora\",\"noun\":\"excitation, envie\",\"desc\":\"Utiliser pour les phrase interrogatives.\",\"fulltext\":\"ora Utiliser pour les phrase interrogatives. excitation, envie\"},\"ota\":{\"name\":\"ota\",\"noun\":\"source, ouverture\",\"see\":[\"otalamon\",\"kepalota\"],\"fulltext\":\"ota otalamon kepalota source, ouverture\"},\"otalamon\":{\"name\":\"otalamon\",\"noun\":\"cercle de l'urètre\",\"desc\":\"zone autour de l'urètre (chez la femme)\",\"etym\":[\"lam\",\"ota\"],\"fulltext\":\"otalamon lam ota zone autour de l'urètre (chez la femme) cercle de l'urètre\"},\"hamunon\":{\"name\":\"hamunon\",\"noun\":\"auréole autour du mamelon\",\"etym\":[\"hamun\",\"on\"],\"fulltext\":\"hamunon hamun on auréole autour du mamelon\"},\"kepalota\":{\"name\":\"kepalota\",\"noun\":\"zone autour de l'anus\",\"etym\":[\"kepal\",\"ota\"],\"fulltext\":\"kepalota kepal ota zone autour de l'anus\"},\"oto\":{\"name\":\"oto\",\"noun\":\"vent\",\"adj\":\"masculin\",\"see\":[\"duto\",\"otoda\"],\"fulltext\":\"oto duto otoda vent masculin\"},\"otoda\":{\"name\":\"otoda\",\"noun\":\"homme\",\"etym\":[\"oto\",\"oda\"],\"fulltext\":\"otoda oto oda homme\"},\"otana\":{\"name\":\"otana\",\"noun\":\"homme-femme\",\"fulltext\":\"otana homme-femme\"},\"otiwi\":{\"name\":\"otiwi\",\"noun\":\"homme-enby\",\"fulltext\":\"otiwi homme-enby\"},\"pa\":{\"name\":\"pa\",\"noun\":\"tout, le mystère\",\"see\":[\"aupa\",\"gupa\",\"kupa\",\"lapa\",\"lipa\",\"papi\",\"pipa\"],\"fulltext\":\"pa aupa gupa kupa lapa lipa papi pipa tout, le mystère\"},\"pali\":{\"name\":\"pali\",\"noun\":\"enchanter (chanter de dedans)\",\"fulltext\":\"pali enchanter (chanter de dedans)\"},\"pahau\":{\"name\":\"pahau\",\"verb\":\"pardonner (tout recevoir)\",\"desc\":\"{aupa} et {pahau} sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner {pahau} c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent {aupa}. La confiance, c'est recevoir le temps entier {augu} (passé, présent, avenir), accepter le processus de vie.\",\"fulltext\":\"pahau {aupa} et {pahau} sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner {pahau} c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent {aupa}. La confiance, c'est recevoir le temps entier {augu} (passé, présent, avenir), accepter le processus de vie. pardonner (tout recevoir)\"},\"paoda\":{\"name\":\"paoda\",\"pron\":\"tou.te.s\",\"fulltext\":\"paoda tou.te.s\"},\"pal\":{\"name\":\"pal\",\"noun\":\"fesses\",\"fulltext\":\"pal fesses\"},\"palaj\":{\"name\":\"palaj\",\"noun\":\"soleil (fesses de feu)\",\"see\":[\"palajil\"],\"fulltext\":\"palaj palajil soleil (fesses de feu)\"},\"palajil\":{\"name\":\"palajil\",\"noun\":\"abricot, juillet\",\"etym\":[\"palaj\",\"lil\"],\"fulltext\":\"palajil palaj lil abricot, juillet\"},\"kepal\":{\"name\":\"kepal\",\"noun\":\"anus\",\"desc\":\"De {ke} (caché) et {pal} (fesses).\",\"see\":[\"kepalota\"],\"fulltext\":\"kepal De {ke} (caché) et {pal} (fesses). kepalota anus\"},\"hapal\":{\"name\":\"hapal\",\"noun\":\"haut des fesses\",\"fulltext\":\"hapal haut des fesses\"},\"pan\":{\"name\":\"pan\",\"noun\":\"rouge\",\"see\":[\"dudapan\"],\"fulltext\":\"pan dudapan rouge\"},\"dudapan\":{\"name\":\"dudapan\",\"noun\":\"renard\",\"etym\":[\"doda\",\"pan\"],\"fulltext\":\"dudapan doda pan renard\"},\"pe\":{\"name\":\"pe\",\"noun\":\"3\",\"suffix\":\"quelques un.e.s\",\"conj\":\"quelques un.e.s (6p)\",\"posit\":\"deux jambes et un anus (levrette) = mun\",\"see\":[\"pedil\",\"peda\"],\"fulltext\":\"pe pedil peda quelques un.e.s (6p) 3 quelques un.e.s deux jambes et un anus (levrette) = mun\"},\"peda\":{\"name\":\"peda\",\"pron\":\"quelques\",\"etym\":[\"pe\",\"oda\"],\"fulltext\":\"peda pe oda quelques\"},\"hamape\":{\"name\":\"hamape\",\"noun\":\"majeur (3ème doigt)\",\"posit\":\"levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)\",\"fulltext\":\"hamape majeur (3ème doigt) levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)\"},\"nepe\":{\"name\":\"nepe\",\"noun\":\"isolement (oubli de \\\"pa\\\")\",\"fulltext\":\"nepe isolement (oubli de \\\"pa\\\")\"},\"peu\":{\"name\":\"peu\",\"noun\":\"peur\",\"see\":[\"agupeu\"],\"fulltext\":\"peu agupeu peur\"},\"agupeu\":{\"name\":\"agupeu\",\"noun\":\"courage\",\"etym\":[\"agu\",\"peu\"],\"desc\":\"Écouter la peur\",\"fulltext\":\"agupeu agu peu Écouter la peur courage\"},\"pi\":{\"name\":\"pi\",\"adv\":\"ici, origine\",\"noun\":\"1\",\"posit\":\"debout\",\"conj\":\"je (1s)\",\"desc\":\"Opposé de {pa}.\",\"see\":[\"piha\",\"ajapi\",\"dji\",\"nopi\",\"pida\",\"papi\",\"pipa\",\"pinu\",\"aupi\",\"gupi\"],\"fulltext\":\"pi Opposé de {pa}. piha ajapi dji nopi pida papi pipa pinu aupi gupi je (1s) 1 debout ici, origine\"},\"pida\":{\"name\":\"pida\",\"noun\":\"moi\",\"etym\":[\"pi\",\"oda\"],\"fulltext\":\"pida pi oda moi\"},\"papi\":{\"name\":\"papi\",\"noun\":\"sagesse (tout écho en soi)\",\"etym\":[\"pa\",\"pi\"],\"fulltext\":\"papi pa pi sagesse (tout écho en soi)\"},\"pipa\":{\"name\":\"pipa\",\"noun\":\"innocence (soi partout)\",\"etym\":[\"pi\",\"pa\"],\"fulltext\":\"pipa pi pa innocence (soi partout)\"},\"pinu\":{\"name\":\"pinu\",\"noun\":\"seul (le soi brodé, je brode)\",\"etym\":[\"pi\",\"nu\"],\"fulltext\":\"pinu pi nu seul (le soi brodé, je brode)\"},\"aupi\":{\"name\":\"aupi\",\"noun\":\"S'aimer soi-même, ici.\",\"etym\":[\"au\",\"pi\"],\"fulltext\":\"aupi au pi S'aimer soi-même, ici.\"},\"gupi\":{\"name\":\"gupi\",\"noun\":\"intégrer le mouvement, ressentir, se laisser transformer\",\"etym\":[\"gu\",\"pi\"],\"see\":[\"negupi\"],\"fulltext\":\"gupi gu pi negupi intégrer le mouvement, ressentir, se laisser transformer\"},\"negupi\":{\"name\":\"negupi\",\"noun\":\"lutter contre l'expérience\",\"etym\":[\"ne\",\"gupi\"],\"fulltext\":\"negupi ne gupi lutter contre l'expérience\"},\"nepi\":{\"name\":\"nepi\",\"noun\":\"division\",\"fulltext\":\"nepi division\"},\"djopi\":{\"name\":\"djopi\",\"noun\":\"soi proximal (soi profond, souvent le passé)\",\"fulltext\":\"djopi soi proximal (soi profond, souvent le passé)\"},\"hapi\":{\"name\":\"hapi\",\"noun\":\"soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\",\"fulltext\":\"hapi soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\"},\"pio\":{\"name\":\"pio\",\"noun\":\"périnée, origine\",\"fulltext\":\"pio périnée, origine\"},\"piu\":{\"name\":\"piu\",\"noun\":\"vert\",\"see\":[\"piuna\",\"piulil\"],\"fulltext\":\"piu piuna piulil vert\"},\"piuna\":{\"name\":\"piuna\",\"noun\":\"épinards (mai)\",\"etym\":[\"piu\",\"na\"],\"fulltext\":\"piuna piu na épinards (mai)\"},\"piulil\":{\"name\":\"piulil\",\"noun\":\"petits pois\",\"etym\":[\"piu\",\"lil\"],\"fulltext\":\"piulil piu lil petits pois\"},\"piutaj\":{\"name\":\"piutaj\",\"noun\":\"poireaux (mars)\",\"fulltext\":\"piutaj poireaux (mars)\"},\"pon\":{\"name\":\"pon\",\"noun\":\"orange (couleur)\",\"fulltext\":\"pon orange (couleur)\"},\"pona\":{\"name\":\"pona\",\"noun\":\"orange (fruit), novembre\",\"fulltext\":\"pona orange (fruit), novembre\"},\"ponalil\":{\"name\":\"ponalil\",\"noun\":\"mandarine (fruit), décembre\",\"fulltext\":\"ponalil mandarine (fruit), décembre\"},\"pu\":{\"name\":\"pu\",\"noun\":\"couleur tomate\",\"see\":[\"putam\"],\"fulltext\":\"pu putam couleur tomate\"},\"putam\":{\"name\":\"putam\",\"noun\":\"tomate (fruit), août\",\"etym\":[\"pu\",\"tam\"],\"fulltext\":\"putam pu tam tomate (fruit), août\"},\"ram\":{\"name\":\"ram\",\"noun\":\"épaule\",\"fulltext\":\"ram épaule\"},\"ri\":{\"name\":\"ri\",\"prefix\":\"périphérique\",\"see\":[\"riyon\"],\"fulltext\":\"ri riyon périphérique\"},\"ria\":{\"name\":\"ria\",\"noun\":\"dehors\",\"fulltext\":\"ria dehors\"},\"ro\":{\"name\":\"ro\",\"prefix\":\"proche du centre\",\"see\":[\"robo\",\"royon\"],\"fulltext\":\"ro robo royon proche du centre\"},\"robaj\":{\"name\":\"robaj\",\"noun\":\"intérieur des cuisses\",\"desc\":\"On devrait dire rodjobaj mais on dit robaj. L'intérieur des mollets se dit rohabaj.\",\"fulltext\":\"robaj On devrait dire rodjobaj mais on dit robaj. L'intérieur des mollets se dit rohabaj. intérieur des cuisses\"},\"roa\":{\"name\":\"roa\",\"noun\":\"dans\",\"fulltext\":\"roa dans\"},\"toroa\":{\"name\":\"toroa\",\"noun\":\"dans mon\",\"fulltext\":\"toroa dans mon\"},\"tiroa\":{\"name\":\"tiroa\",\"noun\":\"dans ton\",\"fulltext\":\"tiroa dans ton\"},\"taroa\":{\"name\":\"taroa\",\"noun\":\"dans son\",\"fulltext\":\"taroa dans son\"},\"ru\":{\"name\":\"ru\",\"noun\":\"émergence, réalisation\",\"suffix\":\"devenir\",\"see\":[\"guru\",\"karu\",\"loru\"],\"fulltext\":\"ru guru karu loru émergence, réalisation devenir\"},\"rum\":{\"name\":\"rum\",\"noun\":\"bras\",\"fulltext\":\"rum bras\"},\"harum\":{\"name\":\"harum\",\"noun\":\"avant-bras\",\"fulltext\":\"harum avant-bras\"},\"djorum\":{\"name\":\"djorum\",\"noun\":\"haut du bras\",\"fulltext\":\"djorum haut du bras\"},\"rumi\":{\"name\":\"rumi\",\"verb\":\"prendre dans les bras\",\"fulltext\":\"rumi prendre dans les bras\"},\"leirumi\":{\"name\":\"leirumi\",\"verb\":\"Embrasser le temps = vivre\",\"fulltext\":\"leirumi Embrasser le temps = vivre\"},\"sa\":{\"name\":\"sa\",\"noun\":\"outil\",\"see\":[\"kelasa\",\"masa\"],\"fulltext\":\"sa kelasa masa outil\"},\"sam\":{\"name\":\"sam\",\"noun\":\"pied\",\"posit\":\"debout\",\"fulltext\":\"sam pied debout\"},\"fesam\":{\"name\":\"fesam\",\"noun\":\"chaussettes\",\"fulltext\":\"fesam chaussettes\"},\"hasam\":{\"name\":\"hasam\",\"noun\":\"orteil\",\"fulltext\":\"hasam orteil\"},\"djosam\":{\"name\":\"djosam\",\"noun\":\"cheville\",\"fulltext\":\"djosam cheville\"},\"se\":{\"name\":\"se\",\"suffix\":\"gauche\",\"desc\":\"Inspiré de est (on regarde le sud).\",\"see\":[\"hase\"],\"fulltext\":\"se Inspiré de est (on regarde le sud). hase gauche\"},\"sen\":{\"name\":\"sen\",\"noun\":\"ici, ce lieu\",\"fulltext\":\"sen ici, ce lieu\"},\"sha\":{\"name\":\"sha\",\"noun\":\"hanche\",\"conj\":\"iels (3p)\",\"see\":[\"shada\",\"shaha\",\"shasha\",\"shana\"],\"fulltext\":\"sha shada shaha shasha shana iels (3p) hanche\"},\"shada\":{\"name\":\"shada\",\"noun\":\"elles/eux\",\"etym\":[\"sha\",\"oda\"],\"fulltext\":\"shada sha oda elles/eux\"},\"shaha\":{\"name\":\"shaha\",\"noun\":\"elles/eux poétique\",\"etym\":[\"sha\",\"yada\"],\"fulltext\":\"shaha sha yada elles/eux poétique\"},\"shasha\":{\"name\":\"shasha\",\"verb\":\"dancer\",\"etym\":[\"sha\",\"sha\"],\"fulltext\":\"shasha sha sha dancer\"},\"shana\":{\"name\":\"shana\",\"noun\":\"la danse\",\"etym\":[\"sha\",\"na\"],\"fulltext\":\"shana sha na la danse\"},\"she\":{\"name\":\"she\",\"noun\":\"l'air\",\"see\":[\"meshe\",\"shei\",\"sheu\"],\"fulltext\":\"she meshe shei sheu l'air\"},\"shei\":{\"name\":\"shei\",\"verb\":\"souffler (air qui caresse)\",\"etym\":[\"she\",\"i\"],\"fulltext\":\"shei she i souffler (air qui caresse)\"},\"sheu\":{\"name\":\"sheu\",\"noun\":\"nez\",\"verb\":\"respirer\",\"etym\":[\"she\",\"u\"],\"desc\":\"De {she} et {u}\",\"see\":[\"sheulama\",\"shegul\"],\"fulltext\":\"sheu she u De {she} et {u} sheulama shegul nez respirer\"},\"sheulama\":{\"name\":\"sheulama\",\"verb\":\"plongée sous marine\",\"etym\":[\"sheu\",\"lama\"],\"fulltext\":\"sheulama sheu lama plongée sous marine\"},\"shegul\":{\"name\":\"shegul\",\"noun\":\"cochon\",\"etym\":[\"sheu\",\"gol\"],\"fulltext\":\"shegul sheu gol cochon\"},\"shi\":{\"name\":\"shi\",\"conj\":\"vous (2p)\",\"noun\":\"6\",\"see\":[\"shida\",\"shiha\"],\"fulltext\":\"shi shida shiha vous (2p) 6\"},\"shida\":{\"name\":\"shida\",\"noun\":\"vous\",\"etym\":[\"shi\",\"oda\"],\"fulltext\":\"shida shi oda vous\"},\"shiha\":{\"name\":\"shiha\",\"noun\":\"vous poétique\",\"etym\":[\"shi\",\"yada\"],\"fulltext\":\"shiha shi yada vous poétique\"},\"shipa\":{\"name\":\"shipa\",\"noun\":\"croire\",\"fulltext\":\"shipa croire\"},\"sho\":{\"name\":\"sho\",\"noun\":\"salive\",\"verb\":\"saliver\",\"conj\":\"nous tous présent.e.s (1p)\",\"see\":[\"shoda\",\"shoha\",\"onsho\"],\"fulltext\":\"sho shoda shoha onsho nous tous présent.e.s (1p) salive saliver\"},\"shoda\":{\"name\":\"shoda\",\"noun\":\"nous\",\"etym\":[\"sho\",\"oda\"],\"fulltext\":\"shoda sho oda nous\"},\"shoha\":{\"name\":\"shoha\",\"noun\":\"nous poétique\",\"etym\":[\"sho\",\"yada\"],\"fulltext\":\"shoha sho yada nous poétique\"},\"onsho\":{\"name\":\"onsho\",\"noun\":\"sucre, récompense\",\"etym\":[\"on\",\"sho\"],\"fulltext\":\"onsho on sho sucre, récompense\"},\"shu\":{\"name\":\"shu\",\"prep\":\"et\",\"fulltext\":\"shu et\"},\"si\":{\"name\":\"si\",\"suffix\":\"comme\",\"desc\":\"Annonce d'une manière qui se terminera par {esi} (sauf si c'est qu'on mot).\",\"see\":[\"sigu\"],\"fulltext\":\"si Annonce d'une manière qui se terminera par {esi} (sauf si c'est qu'on mot). sigu comme\"},\"sigu\":{\"name\":\"sigu\",\"noun\":\"sombre (comme le mystère)\",\"etym\":[\"si\",\"gu\"],\"fulltext\":\"sigu si gu sombre (comme le mystère)\"},\"esi\":{\"name\":\"esi\",\"suffix\":\"ainsi, pour, de sorte que\",\"fulltext\":\"esi ainsi, pour, de sorte que\"},\"soa\":{\"name\":\"soa\",\"noun\":\"la terre, le sol\",\"suffix\":\"au sol\",\"prefix\":\"proche du sol, des pieds\",\"see\":[\"lisoa\"],\"fulltext\":\"soa lisoa la terre, le sol proche du sol, des pieds au sol\"},\"lisoa\":{\"name\":\"lisoa\",\"noun\":\"table (petit sol)\",\"etym\":[\"lil\",\"soa\"],\"fulltext\":\"lisoa lil soa table (petit sol)\"},\"su\":{\"name\":\"su\",\"verb\":\"avoir\",\"see\":[\"nesu\"],\"fulltext\":\"su nesu avoir\"},\"nesu\":{\"name\":\"nesu\",\"verb\":\"manquer\",\"etym\":[\"ne\",\"su\"],\"fulltext\":\"nesu ne su manquer\"},\"ta\":{\"name\":\"ta\",\"noun\":\"son/ses\",\"fulltext\":\"ta son/ses\"},\"taj\":{\"name\":\"taj\",\"noun\":\"pénis\",\"verb\":\"pénétrer avec le pénis\",\"etym\":[\"te\",\"aj\"],\"see\":[\"tajin\",\"tajegi\"],\"fulltext\":\"taj te aj tajin tajegi pénis pénétrer avec le pénis\"},\"tajin\":{\"name\":\"tajin\",\"noun\":\"pénis chaud, en érection\",\"etym\":[\"taj\",\"in\"],\"fulltext\":\"tajin taj in pénis chaud, en érection\"},\"tajegi\":{\"name\":\"tajegi\",\"noun\":\"pénis froid, au repos\",\"etym\":[\"taj\",\"egi\"],\"fulltext\":\"tajegi taj egi pénis froid, au repos\"},\"toda\":{\"name\":\"toda\",\"noun\":\"personne avec un pénis\",\"fulltext\":\"toda personne avec un pénis\"},\"tajo\":{\"name\":\"tajo\",\"noun\":\"frapper du pénis\",\"desc\":\"Basé sur {taj} (pénis) et {o} (frapper).\",\"fulltext\":\"tajo Basé sur {taj} (pénis) et {o} (frapper). frapper du pénis\"},\"hataj\":{\"name\":\"hataj\",\"noun\":\"gland\",\"desc\":\"De {ha} (tête, partie supérieure) et {taj} (pénis).\",\"fulltext\":\"hataj De {ha} (tête, partie supérieure) et {taj} (pénis). gland\"},\"tam\":{\"name\":\"tam\",\"noun\":\"boule (testicule)\",\"see\":[\"putam\"],\"fulltext\":\"tam putam boule (testicule)\"},\"te\":{\"name\":\"te\",\"verb\":\"donner\",\"see\":[\"taj\"],\"fulltext\":\"te taj donner\"},\"ti\":{\"name\":\"ti\",\"noun\":\"ton/tes\",\"prefix\":\"ton/tes\",\"suffix\":\"ton/tes\",\"fulltext\":\"ti ton/tes ton/tes ton/tes\"},\"tio\":{\"name\":\"tio\",\"noun\":\"genitals\",\"verb\":\"faire l'amour\",\"see\":[\"fatio\",\"tiona\"],\"fulltext\":\"tio fatio tiona genitals faire l'amour\"},\"fatio\":{\"name\":\"fatio\",\"noun\":\"iris (fleur de l'oeil\",\"etym\":[\"fa\",\"tio\"],\"fulltext\":\"fatio fa tio iris (fleur de l'oeil\"},\"tiona\":{\"name\":\"tiona\",\"noun\":\"flower (genital thing)\",\"etym\":[\"tio\",\"na\"],\"fulltext\":\"tiona tio na flower (genital thing)\"},\"to\":{\"name\":\"to\",\"noun\":\"mon (notre)/nos\",\"suffix\":\"mon/nos\",\"fulltext\":\"to mon (notre)/nos mon/nos\"},\"tosho\":{\"name\":\"tosho\",\"noun\":\"notre\",\"suffix\":\"notre\",\"fulltext\":\"tosho notre notre\"},\"toshi\":{\"name\":\"toshi\",\"noun\":\"votre\",\"suffix\":\"votre\",\"fulltext\":\"toshi votre votre\"},\"tosha\":{\"name\":\"tosha\",\"noun\":\"leur\",\"suffix\":\"leur\",\"fulltext\":\"tosha leur leur\"},\"topi\":{\"name\":\"topi\",\"noun\":\"mon à moi\",\"suffix\":\"mon à moi\",\"fulltext\":\"topi mon à moi mon à moi\"},\"u\":{\"name\":\"u\",\"suffix\":\"tirer\",\"see\":[\"awiu\",\"gau\",\"iwiu\",\"liu\",\"odu\",\"sheu\"],\"fulltext\":\"u awiu gau iwiu liu odu sheu tirer\"},\"couler\":{\"name\":\"couler\",\"noun\":\"uba\",\"fulltext\":\"couler uba\"},\"uki\":{\"name\":\"uki\",\"adj\":\"long\",\"suffix\":\"long\",\"see\":[\"agauki\"],\"fulltext\":\"uki agauki long long\"},\"ul\":{\"name\":\"ul\",\"prefix\":\"jusque\",\"desc\":\"Tirer jusqu'à une forme d'événement, de rupture, de changement.\",\"fulltext\":\"ul Tirer jusqu'à une forme d'événement, de rupture, de changement. jusque\"},\"ulu\":{\"name\":\"ulu\",\"noun\":\"amuser, faire rire (tirer sur la corde)\",\"see\":[\"uloda\",\"ulul\"],\"fulltext\":\"ulu uloda ulul amuser, faire rire (tirer sur la corde)\"},\"uloda\":{\"name\":\"uloda\",\"noun\":\"clown\",\"etym\":[\"ulu\",\"oda\"],\"fulltext\":\"uloda ulu oda clown\"},\"ulul\":{\"name\":\"ulul\",\"noun\":\"asperge, avril\",\"etym\":[\"ulu\",\"la\"],\"fulltext\":\"ulul ulu la asperge, avril\"},\"uma\":{\"name\":\"uma\",\"prep\":\"ou\",\"fulltext\":\"uma ou\"},\"we\":{\"name\":\"we\",\"suffix\":\"droite\",\"desc\":\"Inspiré de ouest (on regarde le sud).\",\"see\":[\"hawe\"],\"fulltext\":\"we Inspiré de ouest (on regarde le sud). hawe droite\"},\"wen\":{\"name\":\"wen\",\"noun\":\"coude\",\"fulltext\":\"wen coude\"},\"wi\":{\"name\":\"wi\",\"noun\":\"pruneau (couleur)\",\"see\":[\"wiyon\"],\"fulltext\":\"wi wiyon pruneau (couleur)\"},\"wiyon\":{\"name\":\"wiyon\",\"noun\":\"pruneau (fruit)\",\"etym\":[\"wi\",\"yon\"],\"fulltext\":\"wiyon wi yon pruneau (fruit)\"},\"wu\":{\"name\":\"wu\",\"suffix\":\"de (possédé par)\",\"see\":[\"guwu\"],\"fulltext\":\"wu guwu de (possédé par)\"},\"diwu\":{\"name\":\"diwu\",\"prep\":\"qui possède\",\"fulltext\":\"diwu qui possède\"},\"fawulama\":{\"name\":\"fawulama\",\"noun\":\"poisson (yeux de la mer)\",\"desc\":\"Voir aussi {awi}\",\"fulltext\":\"fawulama Voir aussi {awi} poisson (yeux de la mer)\"},\"ya\":{\"name\":\"ya\",\"noun\":\"nuit\",\"see\":[\"yada\",\"yaon\",\"yagi\",\"iwa\",\"yafa\",\"yadifa\"],\"fulltext\":\"ya yada yaon yagi iwa yafa yadifa nuit\"},\"yagi\":{\"name\":\"yagi\",\"noun\":\"Bonne (douce) nuit\",\"etym\":[\"ya\",\"gi\"],\"fulltext\":\"yagi ya gi Bonne (douce) nuit\"},\"yaonagi\":{\"name\":\"yaonagi\",\"noun\":\"Bonsoir (bon lever de nuit)\",\"etym\":[\"yaon\",\"gi\"],\"fulltext\":\"yaonagi yaon gi Bonsoir (bon lever de nuit)\"},\"iwa\":{\"name\":\"iwa\",\"noun\":\"hibou\",\"etym\":[\"iwi\",\"ya\"],\"fulltext\":\"iwa iwi ya hibou\"},\"yafa\":{\"name\":\"yafa\",\"verb\":\"rêver (la nuit voit)\",\"etym\":[\"ya\",\"fa\"],\"fulltext\":\"yafa ya fa rêver (la nuit voit)\"},\"yadifa\":{\"name\":\"yadifa\",\"noun\":\"rêve (la nuit qui voit)\",\"etym\":[\"ya\",\"di\",\"fa\"],\"fulltext\":\"yadifa ya di fa rêve (la nuit qui voit)\"},\"yaj\":{\"name\":\"yaj\",\"noun\":\"clitoris, gland (joie en feu)\",\"etym\":[\"yu\",\"aj\"],\"see\":[\"faj\",\"feyaj\",\"yajin\"],\"fulltext\":\"yaj yu aj faj feyaj yajin clitoris, gland (joie en feu)\"},\"yajin\":{\"name\":\"yajin\",\"noun\":\"gland froid, au repos\",\"etym\":[\"yaj\",\"in\"],\"fulltext\":\"yajin yaj in gland froid, au repos\"},\"yi\":{\"name\":\"yi\",\"adj\":\"minuscule\",\"conj\":\"tu dépravé.e (2x)\",\"see\":[\"yida\"],\"fulltext\":\"yi yida tu dépravé.e (2x) minuscule\"},\"yida\":{\"name\":\"yida\",\"pron\":\"tu dépravé\",\"etym\":[\"yi\",\"oda\"],\"fulltext\":\"yida yi oda tu dépravé\"},\"yin\":{\"name\":\"yin\",\"noun\":\"vagin\",\"desc\":\"De {yu} et {in}\",\"see\":[\"alayin\",\"duyin\",\"noyin\"],\"fulltext\":\"yin De {yu} et {in} alayin duyin noyin vagin\"},\"yo\":{\"name\":\"yo\",\"noun\":\"jour\",\"see\":[\"yosa\",\"yohon\",\"yogi\"],\"fulltext\":\"yo yosa yohon yogi jour\"},\"yogi\":{\"name\":\"yogi\",\"noun\":\"Douce journée (salutation)\",\"etym\":[\"yo\",\"gi\"],\"fulltext\":\"yogi yo gi Douce journée (salutation)\"},\"yohonagi\":{\"name\":\"yohonagi\",\"noun\":\"Bon lever de jour\",\"etym\":[\"yohon\",\"gi\"],\"fulltext\":\"yohonagi yohon gi Bon lever de jour\"},\"yon\":{\"name\":\"yon\",\"noun\":\"vulve\",\"desc\":\"De {yu} et {on} (joie-apparaître = donner la joie = accoucher)\",\"see\":[\"joyon\",\"wiyon\",\"riyon\",\"royon\",\"yonin\",\"yonegi\"],\"fulltext\":\"yon De {yu} et {on} (joie-apparaître = donner la joie = accoucher) joyon wiyon riyon royon yonin yonegi vulve\"},\"riyon\":{\"name\":\"riyon\",\"noun\":\"lèvres périphériques\",\"etym\":[\"ri\",\"yon\"],\"fulltext\":\"riyon ri yon lèvres périphériques\"},\"royon\":{\"name\":\"royon\",\"noun\":\"lèvres centrales\",\"etym\":[\"ro\",\"yon\"],\"fulltext\":\"royon ro yon lèvres centrales\"},\"yonin\":{\"name\":\"yonin\",\"noun\":\"vulve chaude, en érection\",\"etym\":[\"yon\",\"in\"],\"fulltext\":\"yonin yon in vulve chaude, en érection\"},\"yonegi\":{\"name\":\"yonegi\",\"noun\":\"vulve froide, au repos\",\"etym\":[\"yon\",\"egi\"],\"fulltext\":\"yonegi yon egi vulve froide, au repos\"},\"keyon\":{\"name\":\"keyon\",\"noun\":\"clitoris\",\"fulltext\":\"keyon clitoris\"},\"feyon\":{\"name\":\"feyon\",\"noun\":\"culotte\",\"fulltext\":\"feyon culotte\"},\"yu\":{\"name\":\"yu\",\"noun\":\"joie\",\"adj\":\"joyeux\",\"see\":[\"yaj\",\"eyu\",\"yuina\"],\"fulltext\":\"yu yaj eyu yuina joie joyeux\"},\"eyu\":{\"name\":\"eyu\",\"prep\":\"si\",\"desc\":\"Être joyeux = être tellement = si xxx\",\"etym\":[\"e\",\"yu\"],\"fulltext\":\"eyu e yu Être joyeux = être tellement = si xxx si\"},\"yuina\":{\"name\":\"yuina\",\"noun\":\"fruit\",\"etym\":[\"yu\",\"in\",\"na\"],\"fulltext\":\"yuina yu in na fruit\"},\"zu\":{\"name\":\"zu\",\"verb\":\"aimer\",\"desc\":\"Évolution de {au} en {zu} surtout si la conj requiert un 'h' de liaison.\",\"fulltext\":\"zu Évolution de {au} en {zu} surtout si la conj requiert un 'h' de liaison. aimer\"},\"es\":{\"name\":\"es\",\"noun\":\"se (être soi, se regarder, se confondre)\",\"fulltext\":\"es se (être soi, se regarder, se confondre)\"},\"uya\":{\"name\":\"uya\",\"noun\":\"de/depuis\",\"suffix\":\"depuis (placé après: ha-uya = de loin)\",\"fulltext\":\"uya de/depuis depuis (placé après: ha-uya = de loin)\"},\"ten\":{\"name\":\"ten\",\"pron\":\"les\",\"desc\":\"optionel, utilisé pour souligner le sujet\",\"fulltext\":\"ten optionel, utilisé pour souligner le sujet les\"},\"tu\":{\"name\":\"tu\",\"noun\":\"la/le\",\"desc\":\"optionel, utilisé pour souligner le sujet\",\"fulltext\":\"tu optionel, utilisé pour souligner le sujet la/le\"}}");

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
/******/ 			[177,54]
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