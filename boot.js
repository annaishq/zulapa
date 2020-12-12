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