/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
__exportStar(__webpack_require__(634), exports);


/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.select = void 0;
const select = (ctx, arg) => {
    const { state } = ctx;
    const { name } = arg;
    ctx.state.keoda.selected = name;
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
  position: relative;
  margin-right: 8px;
  & > .popup {
    display: none;
  }
  &:hover > .popup {
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
const Link = ({ className, name, popup }) => {
    app_1.useOvermind();
    return (React.createElement(Wrapper, { className: className },
        React.createElement(Anchor, { href: `#${name}` }, name),
        !popup && React.createElement(Word_1.Word, { name: name, popup: true })));
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
const DEF_KEYS = [
    'etym',
    'noun',
    'verb',
    'adj',
    'conj',
    'prefix',
    'suffix',
    'prep',
    'pron',
    'tens',
    'lang',
    'posit',
    'see',
];
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
    top: 28px;
    left: -38px;
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
`;
const DefType = app_1.styled.div `
  padding: 5px 20px 5px 0;
  font-weight: bold;
  width: 4rem;
  flex-shrink: 0;
  color: red;
  &.etym {
    color: #222;
  }
  &.noun {
    color: #28467d;
  }
  &.verb {
    color: purple;
  }
  &.adj {
    color: #444;
  }
  &.conj {
    color: yellowgreen;
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
    const word = ctx.state.keoda.words[name];
    if (!word) {
        // Should never happen
        return null;
    }
    return (React.createElement(WordEntry, { className: classnames_1.default('Word', className, {
            popup,
            selected: name === ctx.state.keoda.selected,
        }) },
        !popup && React.createElement(ID, { id: name }),
        React.createElement(Name, { className: "Name" },
            React.createElement("span", null, word.name)),
        React.createElement(Definitions, null, DEF_KEYS.map(key => word[key] ? (React.createElement(Definition, { key: key },
            React.createElement(DefType, { className: key }, key),
            key === 'etym' || key === 'see' ? (React.createElement(List_1.List, { className: key, words: word[key], popup: popup })) : (React.createElement(DefText, null, word[key])))) : null))));
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

/***/ 790:
/***/ ((module) => {

module.exports = JSON.parse("{\"a\":{\"name\":\"a\",\"prep\":\"à (elle, lui)\",\"conj\":\"iel (3s)\",\"see\":[\"ahada\",\"oho\"]},\"ahada\":{\"name\":\"ahada\",\"noun\":\"elle/lui poétique\",\"etym\":[\"a\",\"yada\"]},\"yada\":{\"name\":\"yada\",\"noun\":\"corps rêvé, poétique (corps de nuit)\",\"desc\":\"si le corps visible, c'est {oda}, le corps profond, intime, poétique, identitaire, \\\"subconscient\\\" comme dirait Julia Serano, c'est {yada}.\",\"etym\":[\"ya\",\"oda\"],\"see\":[\"ahada\",\"piha\",\"iha\",\"oha\",\"shaha\",\"shiha\",\"shoha\"]},\"piha\":{\"name\":\"piha\",\"noun\":\"moi poétique (mythique, profond)\",\"etym\":[\"pi\",\"yada\"]},\"yadaguitoda\":{\"name\":\"yadaguitoda\",\"noun\":\"corps poétique féminin né dans un corps masculin (femme trans)\"},\"yaguito\":{\"name\":\"yaguito\",\"noun\":\"version courte pour femme trans (femme née dans un corps homme)\"},\"tadaguiyoda\":{\"name\":\"tadaguiyoda\",\"noun\":\"corps poétique masculin né dans un corps féminin (homme trans)\"},\"taguiyo\":{\"name\":\"taguiyo\",\"noun\":\"version courte pour homme trans (homme né dans un corps femme)\"},\"adu\":{\"name\":\"adu\",\"noun\":\"proche, ami\"},\"doda\":{\"name\":\"doda\",\"noun\":\"petit.e frère/soeur\",\"etym\":[\"du\",\"oda\"],\"see\":[\"dudapan\"]},\"aga\":{\"name\":\"aga\",\"noun\":\"musique\",\"see\":[\"agana\",\"agade\",\"ago\"]},\"agana\":{\"name\":\"agana\",\"noun\":\"son (la chose musique incarnée)\",\"etym\":[\"aga\",\"na\"],\"see\":[\"agauki\"]},\"agade\":{\"name\":\"agade\",\"noun\":\"écho (deux sons)\",\"etym\":[\"aga\",\"de\"]},\"agauki\":{\"name\":\"agauki\",\"verb\":\"résonner (le son long)\",\"etym\":[\"agana\",\"uki\"]},\"agaukida\":{\"name\":\"agaukida\",\"noun\":\"temple (le lieu qui résonne)\"},\"ago\":{\"name\":\"ago\",\"noun\":\"rythme\",\"etym\":[\"aga\",\"o\"],\"desc\":\"Musique frappée.\"},\"agu\":{\"name\":\"agu\",\"noun\":\"oreille\",\"verb\":\"écouter\",\"see\":[\"agupeu\"]},\"aj\":{\"name\":\"aj\",\"noun\":\"feu\",\"verb\":\"brûler\",\"see\":[\"ajapi\",\"laj\",\"taj\",\"yaj\"]},\"ajapi\":{\"name\":\"ajapi\",\"noun\":\"calcination de soi, transformation totale\",\"etym\":[\"aj\",\"pi\"]},\"al\":{\"name\":\"al\",\"noun\":\"ciel\",\"prefix\":\"en haut, vers le ciel ou la tête\",\"see\":[\"alayin\"]},\"alayin\":{\"name\":\"alayin\",\"noun\":\"haut du vagin\",\"etym\":[\"du\",\"al\",\"yin\"],\"see\":[\"dualayin\"]},\"dualayin\":{\"name\":\"dualayin\",\"noun\":\"point G\",\"etym\":[\"du\",\"alayin\"],\"see\":[\"dalayin\"]},\"dalayin\":{\"name\":\"dalayin\",\"noun\":\"point G (version courte)\",\"etym\":[\"dualayin\"]},\"ana\":{\"name\":\"ana\",\"noun\":\"arbre\",\"adj\":\"féminin\",\"see\":[\"anawi\",\"duna\",\"nona\"]},\"anawi\":{\"name\":\"anawi\",\"noun\":\"meduse\",\"etym\":[\"ana\",\"awi\"]},\"anoda\":{\"name\":\"anoda\",\"noun\":\"femme\"},\"anoto\":{\"name\":\"anoto\",\"noun\":\"femme-homme\"},\"aniwi\":{\"name\":\"aniwi\",\"noun\":\"femme-enby\"},\"au\":{\"name\":\"au\",\"noun\":\"coeur\",\"verb\":\"aimer/recevoir\",\"see\":[\"aupa\",\"augu\",\"aupi\"]},\"auhu\":{\"name\":\"auhu\",\"noun\":\"tomber amoureux.se, attraction du cœur\"},\"aupa\":{\"name\":\"aupa\",\"noun\":\"gratitude (aimer tout)\",\"etym\":[\"au\",\"pa\"]},\"awi\":{\"name\":\"awi\",\"noun\":\"poisson\",\"verb\":\"briller\",\"adj\":\"belle/beau\",\"see\":[\"anawi\",\"mawi\",\"awiu\",\"gawi\",\"kawi\",\"munawi\"]},\"mawi\":{\"name\":\"mawi\",\"noun\":\"dauphin\",\"etym\":[\"moon\",\"awi\"]},\"awiu\":{\"name\":\"awiu\",\"noun\":\"nager\",\"etym\":[\"awi\",\"u\"]},\"baj\":{\"name\":\"baj\",\"noun\":\"membre inférieur\"},\"djobaj\":{\"name\":\"djobaj\",\"noun\":\"cuisse\",\"desc\":\"De {djo} et {baj}\"},\"habaj\":{\"name\":\"habaj\",\"noun\":\"jambe\"},\"kebaj\":{\"name\":\"kebaj\",\"noun\":\"testicules\",\"desc\":\"Caché {ke} entre les jambes {baj}.\"},\"beo\":{\"name\":\"beo\",\"verb\":\"secouer\",\"adj\":\"secoué\"},\"bo\":{\"name\":\"bo\",\"noun\":\"ventre\",\"see\":[\"robo\",\"obo\"]},\"robo\":{\"name\":\"robo\",\"noun\":\"nombril (centre du ventre)\",\"etym\":[\"ro\",\"bo\"]},\"bu\":{\"name\":\"bu\",\"noun\":\"chose qui grossit (corps érectile)\"},\"buyon\":{\"name\":\"buyon\",\"noun\":\"corps érectile du clitoris\"},\"butaj\":{\"name\":\"butaj\",\"noun\":\"corps érectile du pénis\"},\"lire\":{\"name\":\"lire\",\"tens\":\"futur éventuel, improbable mais pas impossible\"},\"liro\":{\"name\":\"liro\",\"tens\":\"futur lointain\"},\"liru\":{\"name\":\"liru\",\"tens\":\"futur proche\"},\"lira\":{\"name\":\"lira\",\"tens\":\"demain\",\"see\":[\"lirana\"]},\"liri\":{\"name\":\"liri\",\"tens\":\"ce soir, ce matin qui vient, la journée qui arrive\"},\"lemi\":{\"name\":\"lemi\",\"tens\":\"hier soir, ce matin, aujourd'hui\"},\"lema\":{\"name\":\"lema\",\"tens\":\"hier\"},\"lemu\":{\"name\":\"lemu\",\"tens\":\"passé proche\"},\"lemo\":{\"name\":\"lemo\",\"tens\":\"passé lointain\"},\"leme\":{\"name\":\"leme\",\"tens\":\"passé éventuel, improbable mais pas impossible\"},\"da\":{\"name\":\"da\",\"noun\":\"lieu, 9\",\"suffix\":\"lieu\",\"see\":[\"dahem\",\"dahir\",\"goa\",\"lama\",\"lamoa\"]},\"dapa\":{\"name\":\"dapa\",\"noun\":\"joie, émotion complexe\"},\"guda\":{\"name\":\"guda\",\"noun\":\"le lieu de l'expérience\"},\"de\":{\"name\":\"de\",\"noun\":\"2\",\"pron\":\"nous deux\",\"posit\":\"sur le dos (2) jambes écartées\",\"conj\":\"nous deux (5p)\",\"see\":[\"agade\"]},\"deda\":{\"name\":\"deda\",\"pron\":\"nous deux\"},\"hamade\":{\"name\":\"hamade\",\"noun\":\"index (2ème doigt)\",\"posit\":\"sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)\"},\"nede\":{\"name\":\"nede\",\"noun\":\"vie sans temps (stress, pas de mémoire)\"},\"dej\":{\"name\":\"dej\",\"noun\":\"vers\"},\"dahem\":{\"name\":\"dahem\",\"prep\":\"quand (passé)\",\"etym\":[\"da\",\"em\"],\"desc\":\"Le lieu {da} vécu {em}\"},\"di\":{\"name\":\"di\",\"prefix\":\"qui (transforme verbe en adj)\",\"see\":[\"diguwu\",\"yadifa\"]},\"diguwu\":{\"name\":\"diguwu\",\"noun\":\"généreu.se.x\",\"etym\":[\"di\",\"guwu\"]},\"dil\":{\"name\":\"dil\",\"noun\":\"ongle, griffe\",\"see\":[\"pedil\"]},\"pedil\":{\"name\":\"pedil\",\"noun\":\"fourche\",\"etym\":[\"pe\",\"dil\"],\"see\":[\"lipedil\"]},\"lipedil\":{\"name\":\"lipedil\",\"noun\":\"fourchette\",\"etym\":[\"lil\",\"pedil\"]},\"dahir\":{\"name\":\"dahir\",\"prep\":\"quand (future)\",\"etym\":[\"da\",\"lir\"]},\"dja\":{\"name\":\"dja\",\"noun\":\"possible\",\"see\":[\"edja\"]},\"dji\":{\"name\":\"dji\",\"noun\":\"10 (mémoire)\",\"desc\":\"Pour les dizaines, on utilise dji au lieu de {pi} {ipi} (mais on peut aussi dire {pi} {ipi})\",\"etym\":[\"pi\",\"ipi\"]},\"djipa\":{\"name\":\"djipa\",\"noun\":\"souvenir (être dieu.e)\"},\"djil\":{\"name\":\"djil\",\"noun\":\"cheveux\",\"posit\":\"debout, le corps penché en avant, les cheveux offerts, prêts à être pris.\",\"see\":[\"djoda\"]},\"djoda\":{\"name\":\"djoda\",\"noun\":\"ours\",\"etym\":[\"djil\",\"oda\"]},\"nedjil\":{\"name\":\"nedjil\",\"noun\":\"sans poils\",\"verb\":\"raser\"},\"djo\":{\"name\":\"djo\",\"adj\":\"partie proximal\",\"desc\":\"Au centre {dej} {ojo}\",\"see\":[\"djonopi\",\"obo\"]},\"hadjo\":{\"name\":\"hadjo\",\"verb\":\"prendre vers soi\"},\"djoha\":{\"name\":\"djoha\",\"verb\":\"rejeter (loin de soi)\"},\"muhadjo\":{\"name\":\"muhadjo\",\"verb\":\"cueillir\"},\"dom\":{\"name\":\"dom\",\"adj\":\"très fort\",\"desc\":\"\\nImplique un contact très profond, intime, fort, non pas par la force physique\\nmais par l’intensité de la circulation des sensations, du “donner” et\\n“recevoir”.\\n\\nPar exemple, la phrase suivante:\\n\\n[object Object]\\n\\nN’implique pas automatiquement la copulation méchanique et bestiale (même si\\ncette dernière est possible), mais plutôt la recherche d’une très grande\\nprofondeur et intensité qui pourrait aussi se traduire par beaucoup de\\nlenteur ou de câlins ou de contrastes, etc.\\n\"},\"don\":{\"name\":\"don\",\"prep\":\"où\"},\"du\":{\"name\":\"du\",\"prefix\":\"devant\",\"desc\":\"Inspiré de sud (on regarde le sud).\",\"see\":[\"doda\",\"alayin\",\"dualayin\",\"duto\",\"duna\",\"duwi\",\"duyin\",\"duha\"]},\"duto\":{\"name\":\"duto\",\"noun\":\"petit frère/vent\",\"etym\":[\"du\",\"oto\"]},\"duna\":{\"name\":\"duna\",\"noun\":\"petite soeur/arbre\",\"etym\":[\"du\",\"ana\"]},\"duwi\":{\"name\":\"duwi\",\"noun\":\"petit.e enby/oiseau\",\"etym\":[\"du\",\"iwi\"]},\"duyin\":{\"name\":\"duyin\",\"noun\":\"avant du vagin\",\"etym\":[\"du\",\"yin\"]},\"dur\":{\"name\":\"dur\",\"noun\":\"nuque\",\"verb\":\"obéir\",\"adj\":\"obéissant.e\"},\"e\":{\"name\":\"e\",\"verb\":\"deviens, soit, être\",\"see\":[\"edja\",\"eyu\"]},\"edja\":{\"name\":\"edja\",\"prep\":\"interrogation (ou affirmative)\",\"etym\":[\"e\",\"dja\"]},\"nedja\":{\"name\":\"nedja\",\"prep\":\"pas possible (ou affirmative)\"},\"egi\":{\"name\":\"egi\",\"adj\":\"froid\",\"see\":[\"egina\",\"tajegi\",\"yonegi\"]},\"egina\":{\"name\":\"egina\",\"noun\":\"endive, janvier\",\"etym\":[\"egi\",\"ina\"]},\"eku\":{\"name\":\"eku\",\"prep\":\"que\"},\"el\":{\"name\":\"el\",\"adj\":\"droit\",\"see\":[\"namel\"]},\"em\":{\"name\":\"em\",\"noun\":\"le vécu\",\"verb\":\"vivre\",\"see\":[\"dahem\",\"nem\",\"lem\"]},\"nem\":{\"name\":\"nem\",\"verb\":\"mourir, ne pas vivre\",\"etym\":[\"ne\",\"em\"]},\"dim\":{\"name\":\"dim\",\"noun\":\"couleur cerise\"},\"erina\":{\"name\":\"erina\",\"noun\":\"cerise (fruit), juin\"},\"muneri\":{\"name\":\"muneri\",\"noun\":\"téton (cerise du sein)\"},\"tajeri\":{\"name\":\"tajeri\",\"noun\":\"gland (cerise du pénis)\"},\"yoneri\":{\"name\":\"yoneri\",\"noun\":\"clitoris (cerise de la vulve)\"},\"eshu\":{\"name\":\"eshu\",\"adj\":\"perdu\"},\"eshubeo\":{\"name\":\"eshubeo\",\"noun\":\"monstre\"},\"fa\":{\"name\":\"fa\",\"noun\":\"yeux\",\"verb\":\"regarder\",\"desc\":\"Lorsqu’on utilise les yeux comme \\\"récépteurs\\\" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme ({i}, {u} ou {o}). Par exemple [object Object] versus [object Object].\",\"see\":[\"gufa\",\"fatio\",\"yafa\",\"yadifa\"]},\"gufa\":{\"name\":\"gufa\",\"noun\":\"pupille (vie de l'oeil)\",\"etym\":[\"gu\",\"fa\"]},\"falo\":{\"name\":\"falo\",\"noun\":\"yeux humides, tristesse\",\"verb\":\"être triste\"},\"faj\":{\"name\":\"faj\",\"noun\":\"prépuce, protection\",\"desc\":\"version courte de {feyaj}\",\"etym\":[\"fe\",\"yaj\"]},\"feyaj\":{\"name\":\"feyaj\",\"noun\":\"prépuce\",\"desc\":\"version longue de {faj}\",\"etym\":[\"fe\",\"yaj\"]},\"nefaj\":{\"name\":\"nefaj\",\"verb\":\"découvrir le gland, retrousser la peau du prépuce\"},\"fe\":{\"name\":\"fe\",\"noun\":\"7 (sur)\",\"prefix\":\"sur\",\"verb\":\"être sur\",\"see\":[\"faj\",\"feyaj\"]},\"fena\":{\"name\":\"fena\",\"noun\":\"choux (couches), février\"},\"feo\":{\"name\":\"feo\",\"adv\":\"sur moi\"},\"feoda\":{\"name\":\"feoda\",\"noun\":\"habits\",\"desc\":\"Littéralement \\\"sur le corps\\\".\"},\"nefe\":{\"name\":\"nefe\",\"noun\":\"nu\",\"adj\":\"découvert\",\"verb\":\"déshabiller, découvrir\"},\"fepa\":{\"name\":\"fepa\",\"noun\":\"fierté\"},\"fen\":{\"name\":\"fen\",\"noun\":\"genoux\",\"posit\":\"à genoux\",\"verb\":\"marcher\"},\"fi\":{\"name\":\"fi\",\"noun\":\"fil, relier\"},\"fishasha\":{\"name\":\"fishasha\",\"verb\":\"coudre (le fil qui danse)\"},\"gufishasha\":{\"name\":\"gufishasha\",\"verb\":\"coudre la vie, relier les choses hors du temps causal\"},\"gufi\":{\"name\":\"gufi\",\"noun\":\"fil de vie\"},\"fio\":{\"name\":\"fio\",\"noun\":\"aubergine (couleur)\",\"see\":[\"fiona\"]},\"fiona\":{\"name\":\"fiona\",\"noun\":\"aubergine (légume)\",\"etym\":[\"fio\",\"na\"]},\"fo\":{\"name\":\"fo\",\"verb\":\"fouetter\"},\"ga\":{\"name\":\"ga\",\"noun\":\"esprit\",\"desc\":\"Dans le sens de l'esprit des choses, l'esprit de la nature, etc.\",\"see\":[\"gana\",\"gao\",\"kuga\",\"nega\"]},\"gana\":{\"name\":\"gana\",\"noun\":\"la terre\",\"etym\":[\"ga\",\"na\"]},\"gai\":{\"name\":\"gai\",\"noun\":\"conscience, pluie\",\"desc\":\"esprit caressé / qui caresse (la pluie sur la terre)\",\"see\":[\"gugai\"]},\"kegai\":{\"name\":\"kegai\",\"noun\":\"dieu\",\"desc\":\"caché dans l'esprit caressé\"},\"gau\":{\"name\":\"gau\",\"noun\":\"attention (esprit tiré)\",\"etym\":[\"gau\",\"u\"],\"see\":[\"gau\",\"ligau\"]},\"gao\":{\"name\":\"gao\",\"noun\":\"attention (esprit projeté)\",\"etym\":[\"ga\",\"o\"]},\"kuga\":{\"name\":\"kuga\",\"noun\":\"la pensée causale, l'esprit de victime\",\"etym\":[\"ku\",\"ga\"]},\"nega\":{\"name\":\"nega\",\"noun\":\"fou (sans esprit)\",\"etym\":[\"ne\",\"ga\"]},\"gi\":{\"name\":\"gi\",\"noun\":\"doux (expérience caressée)\",\"suffix\":\"doux\",\"etym\":[\"gu\",\"i\"],\"see\":[\"gilapa\",\"yagi\",\"yaonagi\",\"yogi\",\"yohonagi\"]},\"gil\":{\"name\":\"gil\",\"noun\":\"tigre\",\"see\":[\"gilil\"]},\"gilil\":{\"name\":\"gilil\",\"noun\":\"chat (petit tigre)\",\"etym\":[\"gil\",\"lil\"]},\"go\":{\"name\":\"go\",\"noun\":\"intense (expérience fouettée)\",\"etym\":[\"gu\",\"o\"]},\"gol\":{\"name\":\"gol\",\"adj\":\"grand\",\"see\":[\"goa\",\"gawi\",\"goda\",\"shegul\"]},\"goa\":{\"name\":\"goa\",\"suffix\":\"big place\",\"etym\":[\"gol\",\"da\"],\"see\":[\"lamagoa\"]},\"gola\":{\"name\":\"gola\",\"noun\":\"grande chose (courge)\"},\"gawi\":{\"name\":\"gawi\",\"noun\":\"baleine\",\"etym\":[\"gol\",\"awi\"]},\"goda\":{\"name\":\"goda\",\"noun\":\"éléphant\",\"etym\":[\"gol\",\"oda\"]},\"gu\":{\"name\":\"gu\",\"adj\":\"obscurité, gestation, profondeur\",\"prefix\":\"profondeur\",\"desc\":\"On peut voir {gu} comme le mouvement de l'esprit {ga} (esprit) {u} (tiré)\",\"see\":[\"gufa\",\"gi\",\"go\",\"gulir\",\"gulem\",\"guo\",\"gui\",\"guwu\",\"guru\",\"gugai\",\"augu\",\"gupa\",\"gupi\",\"sigu\"]},\"gulir\":{\"name\":\"gulir\",\"noun\":\"souhaiter (gu du future)\",\"etym\":[\"gu\",\"lir\"]},\"gulem\":{\"name\":\"gulem\",\"noun\":\"se souvenir (gu du passé)\",\"etym\":[\"gu\",\"lem\"]},\"guna\":{\"name\":\"guna\",\"noun\":\"vie\"},\"guo\":{\"name\":\"guo\",\"verb\":\"mourir\",\"etym\":[\"gu\",\"o\"]},\"gui\":{\"name\":\"gui\",\"verb\":\"naître\",\"etym\":[\"gu\",\"i\"],\"see\":[\"iwigui\"]},\"guwu\":{\"name\":\"guwu\",\"verb\":\"donner\",\"etym\":[\"gu\",\"wu\"],\"see\":[\"diguwu\",\"guwuna\"]},\"guwuna\":{\"name\":\"guwuna\",\"noun\":\"don\",\"etym\":[\"guwu\",\"na\"]},\"guru\":{\"name\":\"guru\",\"noun\":\"réalisation des profondeurs\",\"etym\":[\"gu\",\"ru\"]},\"gugai\":{\"name\":\"gugai\",\"noun\":\"fertilité\",\"adj\":\"fertile\",\"etym\":[\"gu\",\"gai\"]},\"augu\":{\"name\":\"augu\",\"adj\":\"confiance\",\"etym\":[\"au\",\"gu\"]},\"negu\":{\"name\":\"negu\",\"noun\":\"l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation\",\"desc\":\"C'est l'inverse de la confiance: {augu}\"},\"guyuina\":{\"name\":\"guyuina\",\"noun\":\"pomme (le fruit de la vie)\"},\"gupa\":{\"name\":\"gupa\",\"noun\":\"nature (tout le sombre/profondeur)\",\"etym\":[\"gu\",\"pa\"]},\"ha\":{\"name\":\"ha\",\"noun\":\"tête\",\"adj\":\"loin\",\"prefix\":\"partie supérieure ou distale\",\"see\":[\"duha\",\"hawe\",\"hase\",\"noha\"]},\"duha\":{\"name\":\"duha\",\"noun\":\"visage\",\"etym\":[\"du\",\"ha\"]},\"hawe\":{\"name\":\"hawe\",\"noun\":\"joue droite\",\"etym\":[\"ha\",\"we\"]},\"hase\":{\"name\":\"hase\",\"noun\":\"joue gauche\",\"etym\":[\"ha\",\"se\"]},\"noha\":{\"name\":\"noha\",\"noun\":\"occiput (dos de la tête)\",\"etym\":[\"no\",\"ha\"]},\"hal\":{\"name\":\"hal\",\"adj\":\"vers le ciel, immense\"},\"mahal\":{\"name\":\"mahal\",\"noun\":\"main immense, action divine\",\"adj\":\"miraculeuse.x\"},\"hao\":{\"name\":\"hao\",\"noun\":\"buste\",\"desc\":\"De {ha} (moitié supérieure) et {oda} (corps).\"},\"hem\":{\"name\":\"hem\",\"adj\":\"offert\",\"suffix\":\"offert\",\"desc\":\"Compliment important qui signifie \\\"je vois que tu m'offres ceci\\\". Par example [object Object] ou [object Object].\"},\"him\":{\"name\":\"him\",\"verb\":\"grandir\",\"see\":[\"mahim\"]},\"yuhim\":{\"name\":\"yuhim\",\"noun\":\"naître\"},\"mahim\":{\"name\":\"mahim\",\"noun\":\"construire (les mains qui font grandir)\",\"etym\":[\"ma\",\"him\"]},\"i\":{\"name\":\"i\",\"noun\":\"caresser\",\"prefix\":\"à toi\",\"conj\":\"tu (2s)\",\"desc\":\"Il y a une exception pour le suffixe ajouté à {ma} (main): dans ce cas, on ne dit pas 'mai' mais directement {mi}.\",\"see\":[\"gi\",\"gui\",\"iha\",\"ida\",\"shei\"]},\"iha\":{\"name\":\"iha\",\"noun\":\"toi poétique\",\"etym\":[\"i\",\"yada\"]},\"ida\":{\"name\":\"ida\",\"noun\":\"toi\",\"etym\":[\"i\",\"oda\"]},\"ibu\":{\"name\":\"ibu\",\"prep\":\"pour\"},\"im\":{\"name\":\"im\",\"noun\":\"fermé\"},\"in\":{\"name\":\"in\",\"adj\":\"chaud\",\"see\":[\"odin\",\"tajin\",\"yajin\",\"yonin\",\"yuina\"]},\"odin\":{\"name\":\"odin\",\"noun\":\"lion.ne\",\"etym\":[\"oda\",\"in\"]},\"ina\":{\"name\":\"ina\",\"noun\":\"plante\",\"see\":[\"egina\"]},\"ipa\":{\"name\":\"ipa\",\"noun\":\"100\"},\"ipi\":{\"name\":\"ipi\",\"noun\":\"10\",\"see\":[\"dji\"]},\"ipipa\":{\"name\":\"ipipa\",\"noun\":\"souvenir (être dieu.e)\"},\"ipu\":{\"name\":\"ipu\",\"noun\":\"1000\"},\"ir\":{\"name\":\"ir\",\"adj\":\"sous\"},\"iwi\":{\"name\":\"iwi\",\"noun\":\"oiseau, enby\",\"see\":[\"duwi\",\"iwiu\",\"iwigui\",\"miwi\",\"nowi\",\"iwa\"]},\"iwiu\":{\"name\":\"iwiu\",\"noun\":\"voler\",\"etym\":[\"iwi\",\"u\"]},\"iwigui\":{\"name\":\"iwigui\",\"noun\":\"oiseau qui naît (phénix)\",\"etym\":[\"iwi\",\"gui\"]},\"iwioda\":{\"name\":\"iwioda\",\"noun\":\"enby\"},\"je\":{\"name\":\"je\",\"noun\":\"8 (proche, émotion)\"},\"jepa\":{\"name\":\"jepa\",\"noun\":\"lien, appartenance\"},\"jo\":{\"name\":\"jo\",\"noun\":\"éponge\",\"see\":[\"joyon\"]},\"joyon\":{\"name\":\"joyon\",\"noun\":\"corps spongieux du clitoris\",\"etym\":[\"jo\",\"yon\"]},\"jotaj\":{\"name\":\"jotaj\",\"noun\":\"corps spongieux du pénis\"},\"jom\":{\"name\":\"jom\",\"noun\":\"group, famille\"},\"jana\":{\"name\":\"jana\",\"noun\":\"forêt\"},\"ka\":{\"name\":\"ka\",\"noun\":\"4 (singularité, qui ne peut pas être pensé)\",\"pron\":\"tous\",\"suffix\":\"tous\",\"posit\":\"à quatre pattes\",\"conj\":\"tou.te.s, universel (7p)\",\"see\":[\"kada\",\"neka\",\"karu\",\"koda\",\"kanam\"]},\"kada\":{\"name\":\"kada\",\"noun\":\"tou.te.s\",\"etym\":[\"ka\",\"oda\"]},\"ika\":{\"name\":\"ika\",\"pron\":\"à toi, nous toutes et tous\"},\"hamaka\":{\"name\":\"hamaka\",\"noun\":\"annulaire (4ème doigt)\",\"posit\":\"à quatre pattes (indiquée par un signe de main: pouce contre annulaire)\"},\"neka\":{\"name\":\"neka\",\"noun\":\"honte\",\"etym\":[\"ne\",\"ka\"]},\"karu\":{\"name\":\"karu\",\"verb\":\"choisir (la réalisation du singulier en soi)\",\"etym\":[\"ka\",\"ru\"]},\"koda\":{\"name\":\"koda\",\"noun\":\"cow\",\"etym\":[\"ka\",\"oda\"]},\"ke\":{\"name\":\"ke\",\"adj\":\"caché\",\"prefix\":\"caché\",\"see\":[\"kela\"]},\"kei\":{\"name\":\"kei\",\"conj\":\"tu honorifique (2h)\",\"see\":[\"keda\"]},\"keda\":{\"name\":\"keda\",\"pron\":\"tu honorifique\",\"etym\":[\"kei\",\"oda\"]},\"ko\":{\"name\":\"ko\",\"prep\":\"avec\"},\"ku\":{\"name\":\"ku\",\"noun\":\"corde\",\"verb\":\"attacher\",\"see\":[\"kuga\",\"kupa\",\"kulei\",\"kuoda\"]},\"kupa\":{\"name\":\"kupa\",\"desc\":\"Tout attacher, relation marchande au monde, \\\"faire pour\\\", opposé de {gupi} ou {aupa}.\",\"etym\":[\"ku\",\"pa\"],\"see\":[\"nekupa\"]},\"nekupa\":{\"name\":\"nekupa\",\"noun\":\"lâcher prise, ne pas attacher tout\",\"etym\":[\"ne\",\"kupa\"]},\"kulei\":{\"name\":\"kulei\",\"verb\":\"manipuler\",\"desc\":\"Attacher le temps, manipuler, relation marchande au temps (si alors).\",\"etym\":[\"ku\",\"lei\"]},\"kuoda\":{\"name\":\"kuoda\",\"noun\":\"victime-bourreau-sauveu.se.r\",\"desc\":\"Corps attaché.\",\"etym\":[\"ku\",\"oda\"]},\"la\":{\"name\":\"la\",\"noun\":\"lèvres\",\"verb\":\"embrasser\",\"see\":[\"kela\",\"lapa\",\"lana\",\"laj\",\"ulul\"]},\"kela\":{\"name\":\"kela\",\"noun\":\"dent\",\"etym\":[\"ke\",\"la\"],\"see\":[\"kelasa\",\"kelo\",\"kawi\"]},\"kelasa\":{\"name\":\"kelasa\",\"noun\":\"couteau\",\"etym\":[\"kela\",\"sa\"]},\"lapa\":{\"name\":\"lapa\",\"verb\":\"parler (les lèvres partout)\",\"etym\":[\"la\",\"pa\"],\"see\":[\"lapalapa\",\"lapir\",\"gilapa\"]},\"lapalapa\":{\"name\":\"lapalapa\",\"noun\":\"canard\",\"etym\":[\"lapa\",\"lapa\"]},\"kelo\":{\"name\":\"kelo\",\"noun\":\"crocodile\",\"etym\":[\"kela\",\"oda\"]},\"kawi\":{\"name\":\"kawi\",\"noun\":\"requin\",\"etym\":[\"kela\",\"awi\"]},\"lapir\":{\"name\":\"lapir\",\"noun\":\"annoncer\",\"etym\":[\"lapa\",\"elir\"]},\"gilapa\":{\"name\":\"gilapa\",\"noun\":\"chuchotter (la douceur parle)\",\"etym\":[\"gi\",\"lapa\"]},\"lana\":{\"name\":\"lana\",\"noun\":\"parole, langage, chose des lèvres\",\"etym\":[\"la\",\"na\"]},\"lae\":{\"name\":\"lae\",\"pron\":\"elle/il/elle.s/ils/eux\"},\"laj\":{\"name\":\"laj\",\"noun\":\"sourire\",\"verb\":\"sourire\",\"etym\":[\"la\",\"aj\"]},\"lam\":{\"name\":\"lam\",\"verb\":\"laver\",\"noun\":\"eau\",\"see\":[\"lama\",\"lamoa\",\"malam\",\"melam\",\"lamon\",\"otalamon\"]},\"falam\":{\"name\":\"falam\",\"noun\":\"larmes profondes\",\"verb\":\"pleurs qui lavent\"},\"lama\":{\"name\":\"lama\",\"noun\":\"mer\",\"etym\":[\"lam\",\"da\"],\"see\":[\"lamagoa\",\"sheulama\"]},\"lamagoa\":{\"name\":\"lamagoa\",\"noun\":\"océan\",\"etym\":[\"lama\",\"goa\"]},\"lami\":{\"name\":\"lami\",\"noun\":\"vague\",\"see\":[\"lamioda\"]},\"lamioda\":{\"name\":\"lamioda\",\"noun\":\"serpent\",\"etym\":[\"lami\",\"oda\"]},\"lamoa\":{\"name\":\"lamoa\",\"noun\":\"source (lieu)\",\"etym\":[\"lam\",\"on\",\"da\"]},\"lamu\":{\"name\":\"lamu\",\"verb\":\"boire\"},\"lau\":{\"name\":\"lau\",\"noun\":\"toujours\",\"desc\":\"(le temps aime {lei} {au})\"},\"le\":{\"name\":\"le\",\"suffix\":\"annonce d' un nom\",\"desc\":\"L'enchassée avec le nom se termine par {oda}.\"},\"ile\":{\"name\":\"ile\",\"prep\":\"toi qui te nomme\"},\"lei\":{\"name\":\"lei\",\"noun\":\"le temps\",\"prep\":\"alors\",\"conj\":\"toujours\",\"desc\":\"Donne {lem} et {lir}.\",\"see\":[\"kulei\"]},\"gulei\":{\"name\":\"gulei\",\"noun\":\"le temps de l'expérience\"},\"elei\":{\"name\":\"elei\",\"prep\":\"toujours (pas usité, on utilise lau)\"},\"ulei\":{\"name\":\"ulei\",\"prep\":\"jusqu'à ce que (tirer le temps)\",\"desc\":\"De {ul} et {lei} {eku}\"},\"leiuki\":{\"name\":\"leiuki\",\"noun\":\"patience\",\"adj\":\"patient.e\",\"desc\":\"De {lei} et {uki} (temps long).\"},\"neleiuki\":{\"name\":\"neleiuki\",\"noun\":\"impatience\",\"adj\":\"impatient.e\"},\"lem\":{\"name\":\"lem\",\"suffix\":\"passé\",\"verb\":\"vivait\",\"etym\":[\"em\"],\"see\":[\"gulem\"]},\"lemir\":{\"name\":\"lemir\",\"suffix\":\"toujours\",\"desc\":\"De {lem} et {lir}.\"},\"elem\":{\"name\":\"elem\",\"noun\":\"le passé existe (dans le passé)\"},\"elemir\":{\"name\":\"elemir\",\"noun\":\"de toute éternité\"},\"li\":{\"name\":\"li\",\"noun\":\"bouche\",\"verb\":\"sucer\",\"see\":[\"lipa\",\"ligau\",\"liu\"]},\"lipa\":{\"name\":\"lipa\",\"noun\":\"chanter\",\"etym\":[\"li\",\"pa\"],\"see\":[\"lipawi\"]},\"lipawi\":{\"name\":\"lipawi\",\"noun\":\"loup (qui chante la lune)\",\"etym\":[\"lipa\",\"munawi\"]},\"keli\":{\"name\":\"keli\",\"noun\":\"langue\",\"verb\":\"lécher\",\"desc\":\"De {ke} (caché) et {li} (bouche): caché dans la bouche.\"},\"ligau\":{\"name\":\"ligau\",\"noun\":\"goûter (attention dans la bouche)\",\"etym\":[\"li\",\"gau\"]},\"lil\":{\"name\":\"lil\",\"adj\":\"petit.e\",\"noun\":\"5\",\"suffix\":\"petit.e\",\"see\":[\"lipedil\",\"gilil\",\"limasa\",\"lilimasa\",\"palajil\",\"piulil\",\"lisoa\"]},\"hamalil\":{\"name\":\"hamalil\",\"noun\":\"auriculaire (petit doigt, 5ème doigt)\"},\"lilaj\":{\"name\":\"lilaj\",\"noun\":\"étincelle\",\"posit\":\"sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)\",\"desc\":\"De {lil} petit et {aj} feu.\"},\"nelil\":{\"name\":\"nelil\",\"noun\":\"confusion\",\"verb\":\"confondre\"},\"lir\":{\"name\":\"lir\",\"noun\":\"future\",\"see\":[\"dahir\",\"gulir\"]},\"lirana\":{\"name\":\"lirana\",\"noun\":\"promesse\",\"etym\":[\"lira\",\"na\"]},\"ilir\":{\"name\":\"ilir\",\"noun\":\"future toi (tu vas...)\"},\"elir\":{\"name\":\"elir\",\"noun\":\"le future exist (dans le future)\",\"see\":[\"lapir\"]},\"liu\":{\"name\":\"liu\",\"verb\":\"manger\",\"etym\":[\"li\",\"u\"]},\"lo\":{\"name\":\"lo\",\"noun\":\"soumis.e, humide, qui reçoit\",\"see\":[\"loda\",\"loru\"]},\"loda\":{\"name\":\"loda\",\"noun\":\"personne soumis.e\",\"etym\":[\"lo\",\"oda\"]},\"loru\":{\"name\":\"loru\",\"noun\":\"devenir petit.e (se soumettre)\",\"adj\":\"humilité\",\"etym\":[\"lo\",\"ru\"]},\"silo\":{\"name\":\"silo\",\"adj\":\"doucement\",\"desc\":\"De {si} et {lo} (comme soumis.e).\"},\"ma\":{\"name\":\"ma\",\"noun\":\"main\",\"verb\":\"prendre dans la main, branler, tenir\",\"desc\":\"\\nVoir aussi les exceptions liées au suffixes {i} (masser, caresser), {o} (frapper, faire mal) et {u} (tirer, pincer): {mi}, {mo}, {mu}. On peut aussi utiliser la négation {nema} (lâcher).\\n\",\"see\":[\"mahim\",\"malam\",\"masa\"]},\"hama\":{\"name\":\"hama\",\"noun\":\"doigt\",\"desc\":\"De {ha} (tête, moitié supérieure) et {ma} (main).\"},\"djoma\":{\"name\":\"djoma\",\"noun\":\"poignet\",\"desc\":\"De {djo} (bas) et {ma} (main).\"},\"nema\":{\"name\":\"nema\",\"noun\":\"sans main\",\"verb\":\"lâcher\",\"desc\":\"De {ne} (négation) et {ma} (main).\"},\"mu\":{\"name\":\"mu\",\"verb\":\"tirer, pincer avec la main\",\"desc\":\"De {ma} (main) et le suffix {u}.\"},\"malam\":{\"name\":\"malam\",\"noun\":\"maman (la main de l'eau)\",\"etym\":[\"ma\",\"lam\"]},\"miwi\":{\"name\":\"miwi\",\"noun\":\"papillon\",\"etym\":[\"mi\",\"iwi\"]},\"masa\":{\"name\":\"masa\",\"noun\":\"pèle\",\"etym\":[\"ma\",\"sa\"],\"see\":[\"limasa\"]},\"limasa\":{\"name\":\"limasa\",\"noun\":\"cuillère\",\"etym\":[\"lil\",\"masa\"],\"see\":[\"lilimasa\"]},\"lilimasa\":{\"name\":\"lilimasa\",\"noun\":\"petite cuillère\",\"etym\":[\"lil\",\"limasa\"]},\"me\":{\"name\":\"me\",\"verb\":\"être en mouvement\",\"prefix\":\"bouger dans\",\"see\":[\"meshe\",\"melam\"]},\"meshe\":{\"name\":\"meshe\",\"verb\":\"voler\",\"etym\":[\"me\",\"she\"]},\"melam\":{\"name\":\"melam\",\"verb\":\"nager\",\"etym\":[\"me\",\"lam\"]},\"lom\":{\"name\":\"lom\",\"noun\":\"de (fait de)\"},\"meu\":{\"name\":\"meu\",\"prep\":\"sinon\"},\"mi\":{\"name\":\"mi\",\"verb\":\"masser\",\"desc\":\"De {ma} (main) avec le suffixe {i} (masser).\",\"see\":[\"miwi\"]},\"mo\":{\"name\":\"mo\",\"verb\":\"frapper, faire mal (avec la main)\"},\"moon\":{\"name\":\"moon\",\"noun\":\"seins\",\"posit\":\"à genoux, buste au sol\",\"see\":[\"mawi\",\"munawi\",\"muna\"]},\"munwe\":{\"name\":\"munwe\",\"noun\":\"sein droite\",\"desc\":\"De {mu} et {we}.\"},\"hamun\":{\"name\":\"hamun\",\"noun\":\"téton\",\"see\":[\"hamunon\"]},\"munawi\":{\"name\":\"munawi\",\"noun\":\"lune\",\"etym\":[\"moon\",\"awi\"],\"see\":[\"lipawi\"]},\"muna\":{\"name\":\"muna\",\"noun\":\"biberon\",\"etym\":[\"moon\",\"na\"]},\"na\":{\"name\":\"na\",\"suffix\":\"incarné (chose)\",\"see\":[\"agana\",\"fiona\",\"gana\",\"guwuna\",\"lana\",\"lirana\",\"muna\",\"piuna\",\"shana\",\"tiona\",\"yuina\"]},\"naj\":{\"name\":\"naj\",\"noun\":\"frisson, nuage\",\"verb\":\"frissonner\"},\"najlo\":{\"name\":\"najlo\",\"noun\":\"orgasme,pluie\"},\"najapa\":{\"name\":\"najapa\",\"noun\":\"brouillard\",\"desc\":\"De {naj} (nuage) et {pa} (partout).\"},\"nam\":{\"name\":\"nam\",\"noun\":\"bois\",\"see\":[\"kanam\",\"namel\"]},\"kanam\":{\"name\":\"kanam\",\"noun\":\"chaise\",\"etym\":[\"ka\",\"nam\"]},\"namel\":{\"name\":\"namel\",\"noun\":\"bâton (bois droit)\",\"etym\":[\"nam\",\"el\"]},\"ne\":{\"name\":\"ne\",\"prefix\":\"négation, monde des mots, transe commune\",\"see\":[\"nem\",\"nega\",\"neka\",\"nekupa\",\"negupi\",\"nesu\"]},\"neoda\":{\"name\":\"neoda\",\"noun\":\"cadavre, sans corps, personne (no body)\"},\"nepa\":{\"name\":\"nepa\",\"noun\":\"abysse, néant\"},\"nelo\":{\"name\":\"nelo\",\"verb\":\"lutter\",\"desc\":\"De {ne} et {lo}, ne pas se soumettre.\"},\"no\":{\"name\":\"no\",\"prefix\":\"derrière\",\"desc\":\"Inspiré de nord (on regarde le sud)\",\"see\":[\"noha\",\"noda\",\"nona\",\"nowi\",\"nopi\",\"noyin\"]},\"noda\":{\"name\":\"noda\",\"noun\":\"grand.e soeur/frère\",\"etym\":[\"no\",\"oda\"]},\"noto\":{\"name\":\"noto\",\"noun\":\"grand frère/vent\"},\"nona\":{\"name\":\"nona\",\"noun\":\"grande soeur/arbre\",\"etym\":[\"no\",\"ana\"]},\"nowi\":{\"name\":\"nowi\",\"noun\":\"grand.e frère/soeur enby/oiseau\",\"etym\":[\"no\",\"iwi\"]},\"nopi\":{\"name\":\"nopi\",\"noun\":\"dos\",\"posit\":\"allongé sur le dos\",\"etym\":[\"no\",\"pi\"],\"see\":[\"djonopi\"]},\"djonopi\":{\"name\":\"djonopi\",\"noun\":\"bas du dos\",\"etym\":[\"djo\",\"nopi\"]},\"noyin\":{\"name\":\"noyin\",\"noun\":\"fond du vagin (col de l'utérus)\",\"etym\":[\"no\",\"yin\"]},\"noa\":{\"name\":\"noa\",\"noun\":\"peau\"},\"noam\":{\"name\":\"noam\",\"verb\":\"toucher\"},\"nu\":{\"name\":\"nu\",\"verb\":\"broder (le truc solitaire, concentré.e)\",\"see\":[\"pinu\"]},\"sinu\":{\"name\":\"sinu\",\"adj\":\"délicatement\",\"desc\":\"De {si} et {nu} (...).\"},\"nur\":{\"name\":\"nur\",\"adv\":\"seulement\"},\"o\":{\"name\":\"o\",\"noun\":\"on\",\"suffix\":\"frapper, faire mal\",\"prefix\":\"en bas ?? me ??\",\"conj\":\"on (1sp)\",\"desc\":\"Le \\\"on\\\" est important: on est pas séparés. Ça indique à la fois \\\"moi et les autres\\\" (même imaginés) et \\\"toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc\\\". Quand on dit {o}, on implique tout ça. Si \\\"on\\\" te fait l'amour, c'est un monde entier qui vient à ta rencontre.\",\"see\":[\"ago\",\"gao\",\"go\",\"guo\",\"oha\",\"odo\"]},\"hafo\":{\"name\":\"hafo\",\"verb\":\"tomber (tête fouettée)\"},\"obo\":{\"name\":\"obo\",\"noun\":\"pubis (bas du ventre)\",\"desc\":\"version familière de {djobo}\",\"etym\":[\"djo\",\"bo\"]},\"habo\":{\"name\":\"habo\",\"noun\":\"plexus\"},\"djobo\":{\"name\":\"djobo\",\"noun\":\"pubis\",\"desc\":\"version longue de {obo}\"},\"yoda\":{\"name\":\"yoda\",\"noun\":\"corps avec une vulve\"},\"oda\":{\"name\":\"oda\",\"noun\":\"corps, lieu vivant (\\\"on\\\")\",\"suffix\":\"animal comme, qui a\",\"desc\":\"De là vient {keoda} (**la langue cachée du corps**).\",\"see\":[\"yada\",\"doda\",\"djoda\",\"goda\",\"ida\",\"odin\",\"kada\",\"koda\",\"keda\",\"kuoda\",\"kelo\",\"lamioda\",\"loda\",\"noda\",\"yosa\",\"oho\",\"odo\",\"odu\",\"otoda\",\"peda\",\"pida\",\"shada\",\"shida\",\"shoda\",\"uloda\",\"yida\"]},\"oha\":{\"name\":\"oha\",\"pron\":\"soi poétique (nous indéf)\",\"etym\":[\"o\",\"yada\"]},\"keoda\":{\"name\":\"keoda\",\"noun\":\"lieu de vie cachée, langue cachée du corps\"},\"yosa\":{\"name\":\"yosa\",\"noun\":\"humain\",\"etym\":[\"yo\",\"oda\"]},\"oho\":{\"name\":\"oho\",\"noun\":\"iel\",\"etym\":[\"a\",\"oda\"]},\"odo\":{\"name\":\"odo\",\"noun\":\"partir\",\"etym\":[\"oda\",\"o\"]},\"odu\":{\"name\":\"odu\",\"noun\":\"rejoindre, venir, se tirer le corps vers\",\"etym\":[\"oda\",\"u\"]},\"ojo\":{\"name\":\"ojo\",\"adj\":\"centre\"},\"om\":{\"name\":\"om\",\"noun\":\"transcendance\",\"adj\":\"ouvert\",\"prefix\":\"transcender\",\"suffix\":\"temple, lieu sacré\"},\"on\":{\"name\":\"on\",\"noun\":\"source\",\"verb\":\"faire naître (apparaître)\",\"see\":[\"lamoa\",\"lamon\",\"yaon\",\"yohon\",\"hamunon\",\"onsho\"]},\"lamon\":{\"name\":\"lamon\",\"noun\":\"urètre (source de l'eau)\",\"etym\":[\"lam\",\"on\"]},\"yaon\":{\"name\":\"yaon\",\"noun\":\"lever de la nuit (coucher de soleil)\",\"etym\":[\"ya\",\"on\"],\"see\":[\"yaonagi\"]},\"yohon\":{\"name\":\"yohon\",\"noun\":\"lever du jour\",\"etym\":[\"yo\",\"on\"],\"see\":[\"yohonagi\"]},\"ora\":{\"name\":\"ora\",\"noun\":\"excitation, envie\",\"desc\":\"Utiliser pour les phrase interrogatives.\"},\"ota\":{\"name\":\"ota\",\"noun\":\"source, ouverture\",\"see\":[\"otalamon\",\"kepalota\"]},\"otalamon\":{\"name\":\"otalamon\",\"noun\":\"cercle de l'urètre\",\"desc\":\"zone autour de l'urètre (chez la femme)\",\"etym\":[\"lam\",\"ota\"]},\"hamunon\":{\"name\":\"hamunon\",\"noun\":\"auréole autour du mamelon\",\"etym\":[\"hamun\",\"on\"]},\"kepalota\":{\"name\":\"kepalota\",\"noun\":\"zone autour de l'anus\",\"etym\":[\"kepal\",\"ota\"]},\"oto\":{\"name\":\"oto\",\"noun\":\"vent\",\"adj\":\"masculin\",\"see\":[\"duto\",\"otoda\"]},\"otoda\":{\"name\":\"otoda\",\"noun\":\"homme\",\"etym\":[\"oto\",\"oda\"]},\"otana\":{\"name\":\"otana\",\"noun\":\"homme-femme\"},\"otiwi\":{\"name\":\"otiwi\",\"noun\":\"homme-enby\"},\"pa\":{\"name\":\"pa\",\"noun\":\"tout, le mystère\",\"see\":[\"aupa\",\"gupa\",\"kupa\",\"lapa\",\"lipa\",\"papi\",\"pipa\"]},\"pali\":{\"name\":\"pali\",\"noun\":\"enchanter (chanter de dedans)\"},\"pahau\":{\"name\":\"pahau\",\"verb\":\"pardonner (tout recevoir)\",\"desc\":\"{aupa} et {pahau} sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner {pahau} c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent {aupa}. La confiance, c'est recevoir le temps entier {augu} (passé, présent, avenir), accepter le processus de vie.\"},\"paoda\":{\"name\":\"paoda\",\"pron\":\"tou.te.s\"},\"pal\":{\"name\":\"pal\",\"noun\":\"fesses\"},\"palaj\":{\"name\":\"palaj\",\"noun\":\"soleil (fesses de feu)\",\"see\":[\"palajil\"]},\"palajil\":{\"name\":\"palajil\",\"noun\":\"abricot, juillet\",\"etym\":[\"palaj\",\"lil\"]},\"kepal\":{\"name\":\"kepal\",\"noun\":\"anus\",\"desc\":\"De {ke} (caché) et {pal} (fesses).\",\"see\":[\"kepalota\"]},\"hapal\":{\"name\":\"hapal\",\"noun\":\"haut des fesses\"},\"pan\":{\"name\":\"pan\",\"noun\":\"rouge\",\"see\":[\"dudapan\"]},\"dudapan\":{\"name\":\"dudapan\",\"noun\":\"renard\",\"etym\":[\"doda\",\"pan\"]},\"pe\":{\"name\":\"pe\",\"noun\":\"3\",\"suffix\":\"quelques un.e.s\",\"conj\":\"quelques un.e.s (6p)\",\"posit\":\"deux jambes et un anus (levrette) = mun\",\"see\":[\"pedil\",\"peda\"]},\"peda\":{\"name\":\"peda\",\"pron\":\"quelques\",\"etym\":[\"pe\",\"oda\"]},\"hamape\":{\"name\":\"hamape\",\"noun\":\"majeur (3ème doigt)\",\"posit\":\"levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)\"},\"nepe\":{\"name\":\"nepe\",\"noun\":\"isolement (oubli de \\\"pa\\\")\"},\"peu\":{\"name\":\"peu\",\"noun\":\"peur\",\"see\":[\"agupeu\"]},\"agupeu\":{\"name\":\"agupeu\",\"noun\":\"courage\",\"etym\":[\"agu\",\"peu\"],\"desc\":\"Écouter la peur\"},\"pi\":{\"name\":\"pi\",\"adv\":\"ici, origine\",\"noun\":\"1\",\"posit\":\"debout\",\"conj\":\"je (1s)\",\"desc\":\"Opposé de {pa}.\",\"see\":[\"piha\",\"ajapi\",\"dji\",\"nopi\",\"pida\",\"papi\",\"pipa\",\"pinu\",\"aupi\",\"gupi\"]},\"pida\":{\"name\":\"pida\",\"noun\":\"moi\",\"etym\":[\"pi\",\"oda\"]},\"papi\":{\"name\":\"papi\",\"noun\":\"sagesse (tout écho en soi)\",\"etym\":[\"pa\",\"pi\"]},\"pipa\":{\"name\":\"pipa\",\"noun\":\"innocence (soi partout)\",\"etym\":[\"pi\",\"pa\"]},\"pinu\":{\"name\":\"pinu\",\"noun\":\"seul (le soi brodé, je brode)\",\"etym\":[\"pi\",\"nu\"]},\"aupi\":{\"name\":\"aupi\",\"noun\":\"S'aimer soi-même, ici.\",\"etym\":[\"au\",\"pi\"]},\"gupi\":{\"name\":\"gupi\",\"noun\":\"intégrer le mouvement, ressentir, se laisser transformer\",\"etym\":[\"gu\",\"pi\"],\"see\":[\"negupi\"]},\"negupi\":{\"name\":\"negupi\",\"noun\":\"lutter contre l'expérience\",\"etym\":[\"ne\",\"gupi\"]},\"nepi\":{\"name\":\"nepi\",\"noun\":\"division\"},\"djopi\":{\"name\":\"djopi\",\"noun\":\"soi proximal (soi profond, souvent le passé)\"},\"hapi\":{\"name\":\"hapi\",\"noun\":\"soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)\"},\"pio\":{\"name\":\"pio\",\"noun\":\"périnée, origine\"},\"piu\":{\"name\":\"piu\",\"noun\":\"vert\",\"see\":[\"piuna\",\"piulil\"]},\"piuna\":{\"name\":\"piuna\",\"noun\":\"épinards (mai)\",\"etym\":[\"piu\",\"na\"]},\"piulil\":{\"name\":\"piulil\",\"noun\":\"petits pois\",\"etym\":[\"piu\",\"lil\"]},\"piutaj\":{\"name\":\"piutaj\",\"noun\":\"poireaux (mars)\"},\"pon\":{\"name\":\"pon\",\"noun\":\"orange (couleur)\"},\"pona\":{\"name\":\"pona\",\"noun\":\"orange (fruit), novembre\"},\"ponalil\":{\"name\":\"ponalil\",\"noun\":\"mandarine (fruit), décembre\"},\"pu\":{\"name\":\"pu\",\"noun\":\"couleur tomate\",\"see\":[\"putam\"]},\"putam\":{\"name\":\"putam\",\"noun\":\"tomate (fruit), août\",\"etym\":[\"pu\",\"tam\"]},\"ram\":{\"name\":\"ram\",\"noun\":\"épaule\"},\"ri\":{\"name\":\"ri\",\"prefix\":\"périphérique\",\"see\":[\"riyon\"]},\"ria\":{\"name\":\"ria\",\"noun\":\"dehors\"},\"ro\":{\"name\":\"ro\",\"prefix\":\"proche du centre\",\"see\":[\"robo\",\"royon\"]},\"robaj\":{\"name\":\"robaj\",\"noun\":\"intérieur des cuisses\",\"desc\":\"On devrait dire rodjobaj mais on dit robaj. L'intérieur des mollets se dit rohabaj.\"},\"roa\":{\"name\":\"roa\",\"noun\":\"dans\"},\"toroa\":{\"name\":\"toroa\",\"noun\":\"dans mon\"},\"tiroa\":{\"name\":\"tiroa\",\"noun\":\"dans ton\"},\"taroa\":{\"name\":\"taroa\",\"noun\":\"dans son\"},\"ru\":{\"name\":\"ru\",\"noun\":\"émergence, réalisation\",\"suffix\":\"devenir\",\"see\":[\"guru\",\"karu\",\"loru\"]},\"rum\":{\"name\":\"rum\",\"noun\":\"bras\"},\"harum\":{\"name\":\"harum\",\"noun\":\"avant-bras\"},\"djorum\":{\"name\":\"djorum\",\"noun\":\"haut du bras\"},\"rumi\":{\"name\":\"rumi\",\"verb\":\"prendre dans les bras\"},\"leirumi\":{\"name\":\"leirumi\",\"verb\":\"Embrasser le temps = vivre\"},\"sa\":{\"name\":\"sa\",\"noun\":\"outil\",\"see\":[\"kelasa\",\"masa\"]},\"sam\":{\"name\":\"sam\",\"noun\":\"pied\",\"posit\":\"debout\"},\"fesam\":{\"name\":\"fesam\",\"noun\":\"chaussettes\"},\"hasam\":{\"name\":\"hasam\",\"noun\":\"orteil\"},\"djosam\":{\"name\":\"djosam\",\"noun\":\"cheville\"},\"se\":{\"name\":\"se\",\"suffix\":\"gauche\",\"desc\":\"Inspiré de est (on regarde le sud).\",\"see\":[\"hase\"]},\"sen\":{\"name\":\"sen\",\"noun\":\"ici, ce lieu\"},\"sha\":{\"name\":\"sha\",\"noun\":\"hanche\",\"conj\":\"iels (3p)\",\"see\":[\"shada\",\"shaha\",\"shasha\",\"shana\"]},\"shada\":{\"name\":\"shada\",\"noun\":\"elles/eux\",\"etym\":[\"sha\",\"oda\"]},\"shaha\":{\"name\":\"shaha\",\"noun\":\"elles/eux poétique\",\"etym\":[\"sha\",\"yada\"]},\"shasha\":{\"name\":\"shasha\",\"verb\":\"dancer\",\"etym\":[\"sha\",\"sha\"]},\"shana\":{\"name\":\"shana\",\"noun\":\"la danse\",\"etym\":[\"sha\",\"na\"]},\"she\":{\"name\":\"she\",\"noun\":\"l'air\",\"see\":[\"meshe\",\"shei\",\"sheu\"]},\"shei\":{\"name\":\"shei\",\"verb\":\"souffler (air qui caresse)\",\"etym\":[\"she\",\"i\"]},\"sheu\":{\"name\":\"sheu\",\"noun\":\"nez\",\"verb\":\"respirer\",\"etym\":[\"she\",\"u\"],\"desc\":\"De {she} et {u}\",\"see\":[\"sheulama\",\"shegul\"]},\"sheulama\":{\"name\":\"sheulama\",\"verb\":\"plongée sous marine\",\"etym\":[\"sheu\",\"lama\"]},\"shegul\":{\"name\":\"shegul\",\"noun\":\"cochon\",\"etym\":[\"sheu\",\"gol\"]},\"shi\":{\"name\":\"shi\",\"conj\":\"vous (2p)\",\"noun\":\"6\",\"see\":[\"shida\",\"shiha\"]},\"shida\":{\"name\":\"shida\",\"noun\":\"vous\",\"etym\":[\"shi\",\"oda\"]},\"shiha\":{\"name\":\"shiha\",\"noun\":\"vous poétique\",\"etym\":[\"shi\",\"yada\"]},\"shipa\":{\"name\":\"shipa\",\"noun\":\"croire\"},\"sho\":{\"name\":\"sho\",\"noun\":\"salive\",\"verb\":\"saliver\",\"conj\":\"nous tous présent.e.s (1p)\",\"see\":[\"shoda\",\"shoha\",\"onsho\"]},\"shoda\":{\"name\":\"shoda\",\"noun\":\"nous\",\"etym\":[\"sho\",\"oda\"]},\"shoha\":{\"name\":\"shoha\",\"noun\":\"nous poétique\",\"etym\":[\"sho\",\"yada\"]},\"onsho\":{\"name\":\"onsho\",\"noun\":\"sucre, récompense\",\"etym\":[\"on\",\"sho\"]},\"shu\":{\"name\":\"shu\",\"prep\":\"et\"},\"si\":{\"name\":\"si\",\"suffix\":\"comme\",\"desc\":\"Annonce d'une manière qui se terminera par {esi} (sauf si c'est qu'on mot).\",\"see\":[\"sigu\"]},\"sigu\":{\"name\":\"sigu\",\"noun\":\"sombre (comme le mystère)\",\"etym\":[\"si\",\"gu\"]},\"esi\":{\"name\":\"esi\",\"suffix\":\"ainsi, pour, de sorte que\"},\"soa\":{\"name\":\"soa\",\"noun\":\"la terre, le sol\",\"suffix\":\"au sol\",\"prefix\":\"proche du sol, des pieds\",\"see\":[\"lisoa\"]},\"lisoa\":{\"name\":\"lisoa\",\"noun\":\"table (petit sol)\",\"etym\":[\"lil\",\"soa\"]},\"su\":{\"name\":\"su\",\"verb\":\"avoir\",\"see\":[\"nesu\"]},\"nesu\":{\"name\":\"nesu\",\"verb\":\"manquer\",\"etym\":[\"ne\",\"su\"]},\"ta\":{\"name\":\"ta\",\"noun\":\"son/ses\"},\"taj\":{\"name\":\"taj\",\"noun\":\"pénis\",\"verb\":\"pénétrer avec le pénis\",\"etym\":[\"te\",\"aj\"],\"see\":[\"tajin\",\"tajegi\"]},\"tajin\":{\"name\":\"tajin\",\"noun\":\"pénis chaud, en érection\",\"etym\":[\"taj\",\"in\"]},\"tajegi\":{\"name\":\"tajegi\",\"noun\":\"pénis froid, au repos\",\"etym\":[\"taj\",\"egi\"]},\"toda\":{\"name\":\"toda\",\"noun\":\"personne avec un pénis\"},\"tajo\":{\"name\":\"tajo\",\"noun\":\"frapper du pénis\",\"desc\":\"Basé sur {taj} (pénis) et {o} (frapper).\"},\"hataj\":{\"name\":\"hataj\",\"noun\":\"gland\",\"desc\":\"De {ha} (tête, partie supérieure) et {taj} (pénis).\"},\"tam\":{\"name\":\"tam\",\"noun\":\"boule (testicule)\",\"see\":[\"putam\"]},\"te\":{\"name\":\"te\",\"verb\":\"donner\",\"see\":[\"taj\"]},\"ti\":{\"name\":\"ti\",\"noun\":\"ton/tes\",\"prefix\":\"ton/tes\",\"suffix\":\"ton/tes\"},\"tio\":{\"name\":\"tio\",\"noun\":\"genitals\",\"verb\":\"faire l'amour\",\"see\":[\"fatio\",\"tiona\"]},\"fatio\":{\"name\":\"fatio\",\"noun\":\"iris (fleur de l'oeil\",\"etym\":[\"fa\",\"tio\"]},\"tiona\":{\"name\":\"tiona\",\"noun\":\"flower (genital thing)\",\"etym\":[\"tio\",\"na\"]},\"to\":{\"name\":\"to\",\"noun\":\"mon (notre)/nos\",\"suffix\":\"mon/nos\"},\"tosho\":{\"name\":\"tosho\",\"noun\":\"notre\",\"suffix\":\"notre\"},\"toshi\":{\"name\":\"toshi\",\"noun\":\"votre\",\"suffix\":\"votre\"},\"tosha\":{\"name\":\"tosha\",\"noun\":\"leur\",\"suffix\":\"leur\"},\"topi\":{\"name\":\"topi\",\"noun\":\"mon à moi\",\"suffix\":\"mon à moi\"},\"u\":{\"name\":\"u\",\"suffix\":\"tirer\",\"see\":[\"awiu\",\"gau\",\"iwiu\",\"liu\",\"odu\",\"sheu\"]},\"couler\":{\"name\":\"couler\",\"noun\":\"uba\"},\"uki\":{\"name\":\"uki\",\"adj\":\"long\",\"suffix\":\"long\",\"see\":[\"agauki\"]},\"ul\":{\"name\":\"ul\",\"prefix\":\"jusque\",\"desc\":\"Tirer jusqu'à une forme d'événement, de rupture, de changement.\"},\"ulu\":{\"name\":\"ulu\",\"noun\":\"amuser, faire rire (tirer sur la corde)\",\"see\":[\"uloda\",\"ulul\"]},\"uloda\":{\"name\":\"uloda\",\"noun\":\"clown\",\"etym\":[\"ulu\",\"oda\"]},\"ulul\":{\"name\":\"ulul\",\"noun\":\"asperge, avril\",\"etym\":[\"ulu\",\"la\"]},\"uma\":{\"name\":\"uma\",\"prep\":\"ou\"},\"we\":{\"name\":\"we\",\"suffix\":\"droite\",\"desc\":\"Inspiré de ouest (on regarde le sud).\",\"see\":[\"hawe\"]},\"wen\":{\"name\":\"wen\",\"noun\":\"coude\"},\"wi\":{\"name\":\"wi\",\"noun\":\"pruneau (couleur)\",\"see\":[\"wiyon\"]},\"wiyon\":{\"name\":\"wiyon\",\"noun\":\"pruneau (fruit)\",\"etym\":[\"wi\",\"yon\"]},\"wu\":{\"name\":\"wu\",\"suffix\":\"de (possédé par)\",\"see\":[\"guwu\"]},\"diwu\":{\"name\":\"diwu\",\"prep\":\"qui possède\"},\"fawulama\":{\"name\":\"fawulama\",\"noun\":\"poisson (yeux de la mer)\",\"desc\":\"Voir aussi {awi}\"},\"ya\":{\"name\":\"ya\",\"noun\":\"nuit\",\"see\":[\"yada\",\"yaon\",\"yagi\",\"iwa\",\"yafa\",\"yadifa\"]},\"yagi\":{\"name\":\"yagi\",\"noun\":\"Bonne (douce) nuit\",\"etym\":[\"ya\",\"gi\"]},\"yaonagi\":{\"name\":\"yaonagi\",\"noun\":\"Bonsoir (bon lever de nuit)\",\"etym\":[\"yaon\",\"gi\"]},\"iwa\":{\"name\":\"iwa\",\"noun\":\"hibou\",\"etym\":[\"iwi\",\"ya\"]},\"yafa\":{\"name\":\"yafa\",\"verb\":\"rêver (la nuit voit)\",\"etym\":[\"ya\",\"fa\"]},\"yadifa\":{\"name\":\"yadifa\",\"noun\":\"rêve (la nuit qui voit)\",\"etym\":[\"ya\",\"di\",\"fa\"]},\"yaj\":{\"name\":\"yaj\",\"noun\":\"clitoris, gland (joie en feu)\",\"etym\":[\"yu\",\"aj\"],\"see\":[\"faj\",\"feyaj\",\"yajin\"]},\"yajin\":{\"name\":\"yajin\",\"noun\":\"gland froid, au repos\",\"etym\":[\"yaj\",\"in\"]},\"yi\":{\"name\":\"yi\",\"adj\":\"minuscule\",\"conj\":\"tu dépravé.e (2x)\",\"see\":[\"yida\"]},\"yida\":{\"name\":\"yida\",\"pron\":\"tu dépravé\",\"etym\":[\"yi\",\"oda\"]},\"yin\":{\"name\":\"yin\",\"noun\":\"vagin\",\"desc\":\"De {yu} et {in}\",\"see\":[\"alayin\",\"duyin\",\"noyin\"]},\"yo\":{\"name\":\"yo\",\"noun\":\"jour\",\"see\":[\"yosa\",\"yohon\",\"yogi\"]},\"yogi\":{\"name\":\"yogi\",\"noun\":\"Douce journée (salutation)\",\"etym\":[\"yo\",\"gi\"]},\"yohonagi\":{\"name\":\"yohonagi\",\"noun\":\"Bon lever de jour\",\"etym\":[\"yohon\",\"gi\"]},\"yon\":{\"name\":\"yon\",\"noun\":\"vulve\",\"desc\":\"De {yu} et {on} (joie-apparaître = donner la joie = accoucher)\",\"see\":[\"joyon\",\"wiyon\",\"riyon\",\"royon\",\"yonin\",\"yonegi\"]},\"riyon\":{\"name\":\"riyon\",\"noun\":\"lèvres périphériques\",\"etym\":[\"ri\",\"yon\"]},\"royon\":{\"name\":\"royon\",\"noun\":\"lèvres centrales\",\"etym\":[\"ro\",\"yon\"]},\"yonin\":{\"name\":\"yonin\",\"noun\":\"vulve chaude, en érection\",\"etym\":[\"yon\",\"in\"]},\"yonegi\":{\"name\":\"yonegi\",\"noun\":\"vulve froide, au repos\",\"etym\":[\"yon\",\"egi\"]},\"keyon\":{\"name\":\"keyon\",\"noun\":\"clitoris\"},\"feyon\":{\"name\":\"feyon\",\"noun\":\"culotte\"},\"yu\":{\"name\":\"yu\",\"noun\":\"joie\",\"adj\":\"joyeux\",\"see\":[\"yaj\",\"eyu\",\"yuina\"]},\"eyu\":{\"name\":\"eyu\",\"prep\":\"si\",\"desc\":\"Être joyeux = être tellement = si xxx\",\"etym\":[\"e\",\"yu\"]},\"yuina\":{\"name\":\"yuina\",\"noun\":\"fruit\",\"etym\":[\"yu\",\"in\",\"na\"]},\"zu\":{\"name\":\"zu\",\"verb\":\"aimer\",\"desc\":\"Évolution de {au} en {zu} surtout si la conj requiert un 'h' de liaison.\"},\"es\":{\"name\":\"es\",\"noun\":\"se (être soi, se regarder, se confondre)\"},\"uya\":{\"name\":\"uya\",\"noun\":\"de/depuis\",\"suffix\":\"depuis (placé après: ha-uya = de loin)\"},\"ten\":{\"name\":\"ten\",\"pron\":\"les\",\"desc\":\"optionel, utilisé pour souligner le sujet\"},\"tu\":{\"name\":\"tu\",\"noun\":\"la/le\",\"desc\":\"optionel, utilisé pour souligner le sujet\"}}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZW9kYS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9rZW9kYS8uL3NyYy9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovL2tlb2RhLy4vc3JjL2FjdGlvbnMvc2VsZWN0LnRzIiwid2VicGFjazovL2tlb2RhLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9rZW9kYS8uL3NyYy9ib290LnRzeCIsIndlYnBhY2s6Ly9rZW9kYS8uL3NyYy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8va2VvZGEvLi9zcmMvY29tcG9uZW50cy9MaW5rLnRzeCIsIndlYnBhY2s6Ly9rZW9kYS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4Iiwid2VicGFjazovL2tlb2RhLy4vc3JjL2NvbXBvbmVudHMvV29yZC50c3giLCJ3ZWJwYWNrOi8va2VvZGEvLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9rZW9kYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZW9kYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rZW9kYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2VvZGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rZW9kYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tlb2RhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tlb2RhL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGdEQUF3Qjs7Ozs7Ozs7Ozs7QUNRakIsTUFBTSxNQUFNLEdBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHO0lBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJO0FBQ2pDLENBQUM7QUFKWSxjQUFNLFVBSWxCOzs7Ozs7Ozs7OztBQ1hELGtEQUEyQztBQUUzQyxxREFBc0M7QUFHN0IsaUJBSEYsMkJBQU0sQ0FHRTtBQTJCRixtQkFBVyxHQUFHLDJCQUFVLEVBQVU7Ozs7Ozs7Ozs7OztBQ2pDL0MseUJBQW9CO0FBQ3BCLDRDQUFtQztBQUNuQyxrREFBeUM7QUFDekMsdUNBQThCO0FBQzlCLDBDQUFxQztBQUNyQyx5Q0FBb0M7QUFFcEMsOENBQWtDO0FBQ2xDLHVDQUFrQztBQUVsQyxNQUFNLE1BQU0sR0FBZ0I7SUFDMUIsWUFBWSxDQUFDLEdBQUc7UUFDZCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztZQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsS0FBSztZQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtTQUNuQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLE9BQU87S0FDZjtDQUNGO0FBRUQsU0FBZ0IsU0FBUztJQUN2QixJQUFJO1FBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FDYixvQkFBQyx5QkFBUSxJQUFDLEtBQUssRUFBRSxJQUFJLG1CQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hELG9CQUFDLGdCQUFHLE9BQUcsQ0FDRSxFQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQ2hDO0tBQ0Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0I7U0FDdEM7S0FDRjtBQUNILENBQUM7QUFmRCxzQ0FlQztBQUVELFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7QUM3Q1gsdUNBQWtEO0FBQ2xELHVDQUE4QjtBQUM5Qix3Q0FBNkI7QUFNN0IsTUFBTSxPQUFPLEdBQUcsWUFBTSxDQUFDLEdBQUc7Ozs7OztDQU16QjtBQUVNLE1BQU0sR0FBRyxHQUFtQixDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNuRCxNQUFNLEdBQUcsR0FBRyxpQkFBVyxFQUFFO0lBQ3pCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUs7SUFDbkMsT0FBTyxDQUNMLG9CQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUUsU0FBUyxJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDbkIsb0JBQUMsV0FBSSxJQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSSxDQUNoQyxDQUFDLENBQ00sQ0FDWDtBQUNILENBQUM7QUFWWSxXQUFHLE9BVWY7Ozs7Ozs7Ozs7O0FDMUJELHVDQUFrRDtBQUNsRCx1Q0FBOEI7QUFDOUIsd0NBQTZCO0FBUTdCLE1BQU0sT0FBTyxHQUFHLFlBQU0sQ0FBQyxHQUFHOzs7Ozs7Ozs7OztDQVd6QjtBQUVELE1BQU0sTUFBTSxHQUFHLFlBQU0sQ0FBQyxDQUFDOzs7Ozs7O0NBT3RCO0FBRU0sTUFBTSxJQUFJLEdBQW9CLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDbEUsaUJBQVcsRUFBRTtJQUNiLE9BQU8sQ0FDTCxvQkFBQyxPQUFPLElBQUMsU0FBUyxFQUFFLFNBQVM7UUFDM0Isb0JBQUMsTUFBTSxJQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxJQUFHLElBQUksQ0FBVTtRQUN4QyxDQUFDLEtBQUssSUFBSSxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLFNBQUcsQ0FDN0IsQ0FDWDtBQUNILENBQUM7QUFSWSxZQUFJLFFBUWhCOzs7Ozs7Ozs7OztBQ3hDRCx1Q0FBOEI7QUFDOUIsdUNBQXFDO0FBQ3JDLHdDQUE2QjtBQVE3QixNQUFNLE9BQU8sR0FBRyxZQUFNLENBQUMsR0FBRzs7Ozs7Ozs7OztDQVV6QjtBQUVNLE1BQU0sSUFBSSxHQUF1QixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQ3RFLE9BQU8sQ0FDTCxvQkFBQyxPQUFPLElBQUMsU0FBUyxFQUFFLFNBQVMsSUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLG9CQUFDLFdBQUksSUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUM1QyxDQUFDLENBQ00sQ0FDWDtBQUNILENBQUM7QUFSWSxZQUFJLFFBUWhCOzs7Ozs7Ozs7OztBQzlCRCx1Q0FBa0Q7QUFDbEQsOENBQW1DO0FBQ25DLHVDQUE4QjtBQUM5Qix3Q0FBNkI7QUFHN0IsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLEtBQUs7Q0FDTjtBQVFELE1BQU0sU0FBUyxHQUFHLFlBQU0sQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCM0I7QUFFRCxNQUFNLElBQUksR0FBRyxZQUFNLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0J0QjtBQUVELE1BQU0sV0FBVyxHQUFHLFlBQU0sQ0FBQyxHQUFHOzs7Ozs7Q0FNN0I7QUFFRCxNQUFNLFVBQVUsR0FBRyxZQUFNLENBQUMsR0FBRzs7OztDQUk1QjtBQUVELE1BQU0sT0FBTyxHQUFHLFlBQU0sQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOEN6QjtBQUVELE1BQU0sT0FBTyxHQUFHLFlBQU0sQ0FBQyxHQUFHOzs7O0NBSXpCO0FBRUQsTUFBTSxFQUFFLEdBQUcsWUFBTSxDQUFDLENBQUM7Ozs7O0NBS2xCO0FBRU0sTUFBTSxJQUFJLEdBQW9CLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxHQUFHLEdBQUcsaUJBQVcsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxzQkFBc0I7UUFDdEIsT0FBTyxJQUFJO0tBQ1o7SUFDRCxPQUFPLENBQ0wsb0JBQUMsU0FBUyxJQUNSLFNBQVMsRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7WUFDdkMsS0FBSztZQUNMLFFBQVEsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUM1QyxDQUFDO1FBRUQsQ0FBQyxLQUFLLElBQUksb0JBQUMsRUFBRSxJQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUk7UUFDM0Isb0JBQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxNQUFNO1lBQ3BCLGtDQUFPLElBQUksQ0FBQyxJQUFJLENBQVEsQ0FDbkI7UUFDUCxvQkFBQyxXQUFXLFFBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1Ysb0JBQUMsVUFBVSxJQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLG9CQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUUsR0FBRyxJQUFHLEdBQUcsQ0FBVztZQUN2QyxHQUFHLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2pDLG9CQUFDLFdBQUksSUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUMxRCxDQUFDLENBQUMsQ0FBQyxDQUNGLG9CQUFDLE9BQU8sUUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVcsQ0FDL0IsQ0FDVSxDQUNkLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDVCxDQUNXLENBQ0osQ0FDYjtBQUNILENBQUM7QUFsQ1ksWUFBSSxRQWtDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExELGdEQUFxQjtBQUNyQixnREFBc0I7QUFDdEIsZ0RBQXNCO0FBQ3RCLGdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7VUNIdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7VUNwRkE7VUFDQSIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QnXG4iLCJleHBvcnQge31cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi4vYXBwJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdEFyZyB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0OiBBY3Rpb248U2VsZWN0QXJnPiA9IChjdHgsIGFyZykgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSBjdHhcbiAgY29uc3QgeyBuYW1lIH0gPSBhcmdcbiAgY3R4LnN0YXRlLmtlb2RhLnNlbGVjdGVkID0gbmFtZVxufVxuIiwiaW1wb3J0IHsgSUFjdGlvbiwgSUNvbnRleHQsIE92ZXJtaW5kIH0gZnJvbSAnb3Zlcm1pbmQnXG5pbXBvcnQgeyBjcmVhdGVIb29rIH0gZnJvbSAnb3Zlcm1pbmQtcmVhY3QnXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCBhcyBDb21wIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyBDb21waWxlZFdvcmQgfSBmcm9tICcuL2NvbmxhbmcnXG5leHBvcnQgeyBzdHlsZWQsIENvbXAgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEtlb2RhQ29uZmlnIHtcbiAgb25Jbml0aWFsaXplOiAoY3R4OiBPdmVybWluZDxLZW9kYUNvbmZpZz4pID0+IHZvaWRcbiAgc3RhdGU6IHtcbiAgICBrZW9kYToge1xuICAgICAgc2VsZWN0ZWQ/OiBzdHJpbmdcbiAgICAgIHdvcmRzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IENvbXBpbGVkV29yZFxuICAgICAgfVxuICAgICAgbGV4aWNvbjogc3RyaW5nW11cbiAgICB9XG4gIH1cbiAgYWN0aW9uczoge1xuICAgIGtlb2RhOiB0eXBlb2YgYWN0aW9uc1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZyA9IEtlb2RhQ29uZmlnXG5cbmV4cG9ydCB0eXBlIEFjdGlvbjxJbnB1dCA9IHZvaWQsIE91dHB1dCA9IHZvaWQ+ID0gSUFjdGlvbjxDb25maWcsIElucHV0LCBPdXRwdXQ+XG5leHBvcnQgdHlwZSBBc3luY0FjdGlvbjxJbnB1dCA9IHZvaWQsIE91dHB1dCA9IHZvaWQ+ID0gSUFjdGlvbjxcbiAgQ29uZmlnLFxuICBJbnB1dCxcbiAgUHJvbWlzZTxPdXRwdXQ+XG4+XG5cbmV4cG9ydCBjb25zdCB1c2VPdmVybWluZCA9IGNyZWF0ZUhvb2s8Q29uZmlnPigpXG5cbmV4cG9ydCB0eXBlIENvbnRleHQgPSBJQ29udGV4dDxDb25maWc+XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgT3Zlcm1pbmQgfSBmcm9tICdvdmVybWluZCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnb3Zlcm1pbmQtcmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHsgS2VvZGFDb25maWcgfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCAqIGFzIHdvcmRzIGZyb20gJy4vZGIuanNvbidcblxuY29uc3QgY29uZmlnOiBLZW9kYUNvbmZpZyA9IHtcbiAgb25Jbml0aWFsaXplKGN0eCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG4gICAgICBjdHguYWN0aW9ucy5rZW9kYS5zZWxlY3QoeyBuYW1lIH0pXG4gICAgfSlcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICBrZW9kYToge1xuICAgICAgd29yZHMsXG4gICAgICBsZXhpY29uOiBPYmplY3Qua2V5cyh3b3Jkcykuc29ydCgpLFxuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBrZW9kYTogYWN0aW9ucyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgdHJ5IHtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UHJvdmlkZXIgdmFsdWU9e25ldyBPdmVybWluZChjb25maWcsIHsgZGV2dG9vbHM6IGZhbHNlIH0pfT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Qcm92aWRlcj4sXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG4gICAgKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QgLmxvYWRlcicpXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gYENvdWxkIG5vdCBsb2FkIGFwcGBcbiAgICB9XG4gIH1cbn1cblxucmVuZGVyQXBwKClcbiIsImltcG9ydCB7IENvbXAsIHN0eWxlZCwgdXNlT3Zlcm1pbmQgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL1dvcmQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC8qIHN0eWxlcyBoZXJlICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gXG5cbmV4cG9ydCBjb25zdCBBcHA6IENvbXA8QXBwUHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgY3R4ID0gdXNlT3Zlcm1pbmQoKVxuICBjb25zdCB7IGxleGljb24gfSA9IGN0eC5zdGF0ZS5rZW9kYVxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtsZXhpY29uLm1hcChuYW1lID0+IChcbiAgICAgICAgPFdvcmQga2V5PXtuYW1lfSBuYW1lPXtuYW1lfSAvPlxuICAgICAgKSl9XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG4iLCJpbXBvcnQgeyBDb21wLCBzdHlsZWQsIHVzZU92ZXJtaW5kIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi9Xb3JkJ1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwb3B1cD86IGJvb2xlYW5cbiAgbmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzk3ZDdkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICAmID4gLnBvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICY6aG92ZXIgPiAucG9wdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbmBcblxuY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTQ2MTYxO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzM5N2Q3ZDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGluazogQ29tcDxMaW5rUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBuYW1lLCBwb3B1cCB9KSA9PiB7XG4gIHVzZU92ZXJtaW5kKClcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8QW5jaG9yIGhyZWY9e2AjJHtuYW1lfWB9PntuYW1lfTwvQW5jaG9yPlxuICAgICAgeyFwb3B1cCAmJiA8V29yZCBuYW1lPXtuYW1lfSBwb3B1cCAvPn1cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29tcCwgc3R5bGVkIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4vTGluaydcblxuZXhwb3J0IGludGVyZmFjZSBEZXJpdmVkUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcG9wdXA/OiBib29sZWFuXG4gIHdvcmRzOiBzdHJpbmdbXVxufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAmLmV0eW0gYSB7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3Q6IENvbXA8RGVyaXZlZFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgd29yZHMsIHBvcHVwIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7d29yZHMubWFwKChrZXksIGlkeCkgPT4gKFxuICAgICAgICA8TGluayBrZXk9e2lkeH0gbmFtZT17a2V5fSBwb3B1cD17cG9wdXB9IC8+XG4gICAgICApKX1cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cbiIsImltcG9ydCB7IENvbXAsIHN0eWxlZCwgdXNlT3Zlcm1pbmQgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHsgQ29tcGlsZWRXb3JkIH0gZnJvbSAnLi4vY29ubGFuZy90eXBlcydcblxuY29uc3QgREVGX0tFWVM6IChrZXlvZiBDb21waWxlZFdvcmQpW10gPSBbXG4gICdldHltJyxcbiAgJ25vdW4nLFxuICAndmVyYicsXG4gICdhZGonLFxuICAnY29uaicsXG4gICdwcmVmaXgnLFxuICAnc3VmZml4JyxcbiAgJ3ByZXAnLFxuICAncHJvbicsXG4gICd0ZW5zJyxcbiAgJ2xhbmcnLFxuICAncG9zaXQnLFxuICAnc2VlJyxcbl1cblxuZXhwb3J0IGludGVyZmFjZSBXb3JkUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcG9wdXA/OiBib29sZWFuXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5jb25zdCBXb3JkRW50cnkgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgYmFja2dyb3VuZDogI2FiYTg5YztcbiAgbWFyZ2luOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgd2lkdGg6IDQ1MHB4O1xuICBhbGlnbi1zZWxmOiB0b3A7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDAwMDAxZjtcbiAgJi5zZWxlY3RlZDpub3QoLnBvcHVwKSA+IC5OYW1lIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTRkNTkzO1xuICB9XG4gICYucG9wdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI4cHg7XG4gICAgbGVmdDogLTM4cHg7XG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAyMHB4ICMwMDAwMDA3MDtcbiAgICB6LWluZGV4OiAzO1xuICB9XG5gXG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuOHM7XG4gIHBhZGRpbmc6IDEycHggMCAwIDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2Q2ZDNjNjtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgd2lkdGg6IDdyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgJiBzcGFuIHtcbiAgICBhbGlnbi1zZWxmOiB0b3A7XG4gIH1cbmBcblxuY29uc3QgRGVmaW5pdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzdiN2I3YjtcbmBcblxuY29uc3QgRGVmaW5pdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweDtcbmBcblxuY29uc3QgRGVmVHlwZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDRyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogcmVkO1xuICAmLmV0eW0ge1xuICAgIGNvbG9yOiAjMjIyO1xuICB9XG4gICYubm91biB7XG4gICAgY29sb3I6ICMyODQ2N2Q7XG4gIH1cbiAgJi52ZXJiIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG4gICYuYWRqIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICAmLmNvbmoge1xuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgfVxuICAmLnByZWZpeCB7XG4gICAgY29sb3I6ICM0NDQ7XG4gIH1cbiAgJi5zdWZmaXgge1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gICYucHJlcCB7XG4gICAgY29sb3I6ICM5NDQ7XG4gIH1cbiAgJi5wcm9uIHtcbiAgICBjb2xvcjogIzQ5NDtcbiAgfVxuICAmLnRlbnMge1xuICAgIGNvbG9yOiAjNDk5O1xuICB9XG4gICYubGFuZyB7XG4gICAgY29sb3I6ICM0NDQ7XG4gIH1cbiAgJi5wb3NpdCB7XG4gICAgY29sb3I6IHBpbms7XG4gIH1cbiAgJi5zZWUge1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuYFxuXG5jb25zdCBEZWZUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuYFxuXG5jb25zdCBJRCA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBXb3JkOiBDb21wPFdvcmRQcm9wcz4gPSAoeyBjbGFzc05hbWUsIG5hbWUsIHBvcHVwIH0pID0+IHtcbiAgY29uc3QgY3R4ID0gdXNlT3Zlcm1pbmQoKVxuICBjb25zdCB3b3JkID0gY3R4LnN0YXRlLmtlb2RhLndvcmRzW25hbWVdXG4gIGlmICghd29yZCkge1xuICAgIC8vIFNob3VsZCBuZXZlciBoYXBwZW5cbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPFdvcmRFbnRyeVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdXb3JkJywgY2xhc3NOYW1lLCB7XG4gICAgICAgIHBvcHVwLFxuICAgICAgICBzZWxlY3RlZDogbmFtZSA9PT0gY3R4LnN0YXRlLmtlb2RhLnNlbGVjdGVkLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgeyFwb3B1cCAmJiA8SUQgaWQ9e25hbWV9IC8+fVxuICAgICAgPE5hbWUgY2xhc3NOYW1lPVwiTmFtZVwiPlxuICAgICAgICA8c3Bhbj57d29yZC5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvTmFtZT5cbiAgICAgIDxEZWZpbml0aW9ucz5cbiAgICAgICAge0RFRl9LRVlTLm1hcChrZXkgPT5cbiAgICAgICAgICB3b3JkW2tleV0gPyAoXG4gICAgICAgICAgICA8RGVmaW5pdGlvbiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxEZWZUeXBlIGNsYXNzTmFtZT17a2V5fT57a2V5fTwvRGVmVHlwZT5cbiAgICAgICAgICAgICAge2tleSA9PT0gJ2V0eW0nIHx8IGtleSA9PT0gJ3NlZScgPyAoXG4gICAgICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtrZXl9IHdvcmRzPXt3b3JkW2tleV0hfSBwb3B1cD17cG9wdXB9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPERlZlRleHQ+e3dvcmRba2V5XX08L0RlZlRleHQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0RlZmluaXRpb24+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgKX1cbiAgICAgIDwvRGVmaW5pdGlvbnM+XG4gICAgPC9Xb3JkRW50cnk+XG4gIClcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vQXBwJ1xuZXhwb3J0ICogZnJvbSAnLi9MaW5rJ1xuZXhwb3J0ICogZnJvbSAnLi9MaXN0J1xuZXhwb3J0ICogZnJvbSAnLi9Xb3JkJ1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9XG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxMTc6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFsxNzcsNTRdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gdGhpc1tcIndlYnBhY2tDaHVua2tlb2RhXCJdID0gdGhpc1tcIndlYnBhY2tDaHVua2tlb2RhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=