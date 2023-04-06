const TELU: { [key: string]: string } = {
  // Some letters that are not where expected:
  // /ʋ/ sound = made with v       = వ
  // /ʃ/ sound = made with shift+s = శ
  // /au/ sound = (alt+)shift+o = ఔ
  // /ai/ sound = (alt+)shift+e = ఐ
  // /kt/ sound = k, f, t = క్త

  // Phonetic change from Telugu
  // /z/ sound = made with alt+shift+T = ఠ = /ʈʰ/
  // /f/ sound = made with c     = చ  = /tʃ/

  // lone 'e'  = made with > (bottom left of kbd)

  // special cases for endings
  // ram$: 'రాం', // do we need this rule ?
  // pon$: 'పోఁ', // do we need this rule ?
  m$: 'ం',
  n$: 'ఁ',
  h$: 'ః',

  // y
  nyu: 'నైు', // fix these as they come...
  my: 'మై',
  ny: 'నై',
  py: 'పై',
  by: 'బై',
  ty: 'తై',
  dy: 'దై',
  ky: 'కై',
  gy: 'గై',
  fy: 'చై',
  sy: 'సై',
  zy: 'ఠై',
  shy: 'శై',
  jy: 'జై',
  hy: 'హై',
  ly: 'లై',

  // i
  shki: 'శ్కి',
  shti: 'శ్తి',
  kti: 'క్తి',
  nti: 'న్తి',
  sti: 'స్తి',
  mi: 'మి',
  ni: 'ని',
  pi: 'పి',
  bi: 'బి',
  ti: 'తి',
  di: 'ది',
  ki: 'కి',
  gi: 'గి',
  fi: 'చి',
  si: 'సి',
  zi: 'ఠి',
  shi: 'శి',
  ji: 'జి',
  hi: 'హి',
  wiu: 'విు',
  wi: 'వి',
  yi: 'యి',
  ri: 'రి',
  liu: 'లిు',
  li: 'లి',

  // e
  shke: 'శ్కే',
  shte: 'శ్తే',
  kte: 'క్తే',
  nte: 'న్తే',
  ste: 'స్తే',
  ske: 'స్కే',
  me: 'మే',
  ne: 'నే',
  pe: 'పే',
  be: 'బే',
  te: 'తే',
  de: 'దే',
  ke: 'కే',
  ge: 'గే',
  fe: 'చే',
  se: 'సే',
  ze: 'ఠే',
  she: 'శే',
  je: 'జే',
  he: 'ఠే',
  we: 'వే',
  ye: 'యే',
  re: 'రే',
  le: 'లే',

  // au
  shkau: 'శ్కౌ',
  shtau: 'శ్తౌ',
  ktau: 'క్తౌ',
  ntau: 'న్తౌ',
  stau: 'స్తౌ',
  skau: 'స్కూ',
  nau: 'నౌ',
  pau: 'పౌ',
  bau: 'బౌ',
  tau: 'తౌ',
  dau: 'దౌ',
  kau: 'కౌ',
  gau: 'గౌ',
  fau: 'చౌ',
  sau: 'సౌ',
  zau: 'ఠౌ',
  shau: 'శౌ',
  jau: 'జౌ',
  hau: 'హౌ',
  wau: 'వౌ',
  yau: 'యౌ',
  rau: 'రౌ',
  lau: 'లౌ',

  // a
  shka: 'శ్కా',
  shta: 'శ్తా',
  kta: 'క్తా',
  nta: 'న్తా',
  sta: 'స్తా',
  ska: 'స్కా',
  ma: 'మా',
  na: 'నా',
  pa: 'పా',
  ba: 'బా',
  ta: 'తా',
  da: 'దా',
  ka: 'కా',
  ga: 'గా',
  fa: 'చా',
  sa: 'సా',
  za: 'ఠా',
  sha: 'శా',
  ja: 'జా',
  ha: 'హా',
  wa: 'వా',
  ya: 'యా',
  ra: 'రా',
  la: 'లా',

  // u
  shku: 'శ్కు',
  shtu: 'శ్తు',
  ktu: 'క్తు',
  ntu: 'న్తు',
  stu: 'స్తు',
  sku: 'స్కు',
  mu: 'ము',
  nu: 'ను',
  pu: 'పు',
  bu: 'బు',
  tu: 'తు',
  du: 'దు',
  ku: 'కు',
  gu: 'గు',
  fu: 'చు',
  su: 'సు',
  zu: 'ఠు',
  shu: 'శు',
  ju: 'జు',
  hu: 'హు',
  wu: 'వు',
  yu: 'యు',
  ru: 'రు',
  lu: 'లు',

  // o
  shko: 'శ్కో',
  shto: 'శ్తో',
  kto: 'క్తో',
  nto: 'న్తో',
  sto: 'స్తో',
  sko: 'స్కో',
  mo: 'మో',
  no: 'నో',
  po: 'పో',
  bo: 'బో',
  to: 'తో',
  do: 'దో',
  ko: 'కో',
  go: 'గో',
  fo: 'చో',
  so: 'సో',
  zo: 'ఠో',
  sho: 'శో',
  jo: 'జో',
  ho: 'హో',
  wo: 'వో',
  yo: 'యో',
  ro: 'రో',
  lo: 'లో',

  iu: 'ఇు', // alt-i + u
  ai: 'ఐ', // alt-shift-e
  au: 'ఆు', // alt-shift-a + u, 'ఔ' (alt-shift-o)= /aw/ but ours sound like /au/
  i: 'ఇ', // Telugu would use యి (yi = /ji/ )
  e: 'ఎ',
  a: 'అ',
  y: 'ఐ',

  u: 'ఉ',
  o: 'ఓ',
  g: 'గ్‌',

  // leftover letters due to double consonants
  s: 'స్‌',
  m: 'మ్‌',
  l: 'ల్‌',
  r: 'ర్‌',
  j: 'జ్‌', //   /ʒ/ (end) or /dʒ/ (in-word)
  //
  ['1']: '౧',
  ['2']: '౨',
  ['3']: '౩',
  ['4']: '౪',
  ['5']: '౫',
  ['6']: '౬',
  ['7']: '౭',
  ['8']: '౮',
  ['9']: '౯',
  ['0']: '౦',
  ['\\.']: '.',
  [',']: ',',
}

const PHON: { [key: string]: string } = {
  i: 'i',
  e: 'ɛ',
  a: 'a',
  A: 'am',
  u: 'u',
  o: 'ɔ',
  m: 'm',
  n: 'n',
  p: 'p',
  b: 'b',
  t: 't',
  d: 'd',
  k: 'k',
  g: 'g',
  f: 'f',
  s: 's',
  z: 'z',
  S: 'ʃ', // 'ʂ' in reality but less people know the IPA sign
  J: 'ʒ',
  j: 'ʒ',
  H: 'x',
  h: 'h',
  w: 'w',
  y: 'j',
  r: 'r',
  l: 'l',
  ['.']: '',
}

function tran(word: string) {
  return word
    .replace(/sh/g, 'S')
    .replace(/j$/, 'J')
    .replace(/h$/, 'H')
    .split('')
    .map(k => {
      const p = PHON[k]
      return p === null ? k : p
    })
}

export function phon(word: string) {
  const w = tran(word.toLowerCase()).join('')
  return w ? `/${w}/` : ' '
}

const ENDRE = /[jrmn]$/
function fixEnd(word: string) {
  if (ENDRE.test(word)) {
    return word
  }
  return word
}

export function write(word: string) {
  let w = fixEnd(word.toLowerCase())
  for (const k in TELU) {
    w = w.replace(new RegExp(k, 'g'), TELU[k])
  }
  return w
}
