import * as _ from '../lang'

export const sing = _.card('sing', {
  // open: true,
  desc: () => `
# Some ideas for lyrics

## ${_.duthany.ti} (your laugh)

${_.phrase(
  "You laugh and get agitated when I'm here.",
  _.i.duthany,
  _.shu,
  _.i.rugui,
  _.dem,
  _.o.e,
  _.sen
)}

${_.phrase(
  'I burn to ashes when you are here.',
  _.es.o.pizau,
  _.si.qenam,
  _.dem,
  _.i.e,
  _.sen
)}

${_.phrase(
  'Eternity is remembered by the place.',
  _.lau.m,
  _.wa,
  _.a.lemegu,
  _.fu.sen
)}

## ${_.toda.m} (him)

${_.block(
  {
    t: 'I look in the mirror and I see him.',
    p: [_.o.fa, _.duana.m, _.qu, _.o.fa, _.toda.m],
  },
  {
    t: 'I look in my eyes and I see her.',
    p: [_.o.fa, _.fa.mo.m, _.qu, _.o.fa, _.nu.m],
  },
  {
    t: 'When will he go ?',
    p: [_.dir, _.toda.m, _.a.odo, _.q],
  },
  {
    t: 'I saw him always and always.',
    p: [_.o.fa.em, _.toda.m, _.si.lau, _.si.lau],
  },
  {
    t: 'He took my voice.',
    p: [_.to, _.a.hajo.emu, _.mo.lapa.m],
  },
  {
    t: '... my long hair everywhere.',
    p: [_.mo.ji.uki.pa.m],
  },
  {
    t: '... my place in life everywhere.',
    p: [_.mo.leirumi.pa.m],
  }
)}

Reply:

${_.block(
  {
    t: 'I am him.',
    p: [_.o.pi.e, _.toda.m],
  },
  {
    t: 'I have to die to let you thread your life.',
    p: [_.o.kuru, _.u.nem.m, _.eku, _.i.ru, _.gufi.ti.m],
  },
  {
    t: 'I thought I was a strong spirit.',
    p: [_.o.gaxim.em, _.eku, _.o.e, _.go.ga.m],
  },
  {
    t: 'Was I only a thought ?',
    p: [_.eja, _.o.e.em, _.nur, _.gaxim.m, _.q],
  },
  {
    t: 'Did I give you anything ?',
    p: [_.eja, _.o.guwu.em, _.pena.m, _.ni.ti, _.q],
  },
  {
    t: "I am dying but I don't know who I was.",
    p: [_.o.lu.nem, _.ne.shu, _.o.ne.pana, _.dona, _.o.e.em],
  },
  {
    t: 'You are my little daughter, you are my child.',
    p: [_.i.e, _.mo.jonu.lil.m, _.i.e, _.mo.joda.m],
  },
  {
    t: 'I love you, you are my life.',
    p: [_.o.zu, _.ti.m, _.i.e, _.em.mo.m],
  },
  {
    t: "Please don't forget me like I forgot you.",
    p: [_.miu, _.miu, _.ne.fiji.imp, _.pi.da.m, _.si.o.fiji.em, _.ti.daN.m],
  },
  {
    t: 'I kept us alive.',
    p: [_.o.magi, _.de.m, _.le.em],
  },
  {
    t: 'It took me so long to give you my life.',
    p: [_.es.o.gu.em, _.si.uki, _.ibu, _.u.guwu, _.ni.ti, _.em.mo.m],
  },
  {
    t: 'Forgive me.',
    p: [_.pahau.imp, _.ni.mo],
  },
  {
    t: 'I love you.',
    p: [_.o.zu, _.ti.m],
  },
  {
    t: 'You are my heart.',
    p: [_.i.e, _.zu.mo.m],
  },
  {
    t: 'Please remember that I loved you.',
    p: [_.miu, _.ji.imp, _.eku, _.o.zu.em, _.i.ti.m],
  }
)}

Reply:

${_.block(
  {
    t: "Je voudrais te dire que je t'aime.",
    p: [],
  },
  {
    t: "Mais je ne peux t'aimer que si tu me donnes ta vie.",
    p: [],
  },
  {
    t: "Alors je t'aimerai comme je n'ai aimé personne.",
    p: [],
  },
  {
    t: 'Je te dois la vie.',
    p: [],
  },
  {
    t: 'Je suis désolée que tu meures pour que je vive.',
    p: [],
  },
  {
    t: "Je suis désolée pour ceux qui t'aimes.",
    p: [],
  },
  {
    t: 'Je suis désolée pour ceux qui se souviennent de toi.',
    p: [],
  },
  {
    t: 'Je me souviendrai de toi.',
    p: [],
  }
)}

## ${_.i$} (you)

${_.phrase('I fall asleep in your embrace.', _.o.yi.fodi, _.ro.rumi.ti.m)}

${_.phrase(
  'I become a small girl as I drift away.',
  _.o.yi.ru,
  _.nu.lil.m,
  _.eleu,
  _.o.yi.meshe,
  _.dao
)}

## Death

* ${_.phrase('Experiencing pain and death')}
* ${_.phrase('Destruction and anihilation')}
* ${_.phrase('Inside me')}
* ${_.phrase('Inside me')}
* ${_.phrase('Somehow, I see the love')}
* ${_.phrase('Behind the pain')}
* ${_.phrase('Behind death')}
* ${_.phrase('Behind')}
* ${_.phrase('Behind')}
* ${_.phrase('I love you life')}
* ${_.phrase('I love you like I never loved before')}
* ${_.phrase('I miss dancing')}
* ${_.phrase('I miss cuddling')}
* ${_.phrase('I miss the eyes of another')}
* ${_.phrase('I miss everything')}
* ${_.phrase('This lesson in pain')}
* ${_.phrase('Kills me')}
* ${_.phrase('Kills me')}
* ${_.phrase('Transformation is hard')}
* ${_.phrase('I love you people')}
* ${_.phrase('I miss you so much')}
* ${_.phrase('I miss dancing with you')}
* ${_.phrase('I miss looking at you')}
* ${_.phrase('I miss loving you')}
* ${_.phrase('I miss making love to life')}
* ${_.phrase('Looking to the world')}
* ${_.phrase('Looking at the children')}
* ${_.phrase('Looking at animals')}
* ${_.phrase('Looking at nature')}
* ${_.phrase('Did I ask for so much ?')}
* ${_.phrase('I feel loved like never before')}
* ${_.phrase('I feel wounded like never before')}
* ${_.phrase('Why ?')}
* ${_.phrase('Oh why ?')}
* ${_.phrase('To bring me closer...')}
* ${_.phrase('To bring me closer...')}
* ${_.phrase('I love everyone of you')}
* ${_.phrase('I love your dreams')}
* ${_.phrase('I love your bodies')}
* ${_.phrase('I love your weird struggles')}
* ${_.phrase('You are my life')}
* ${_.phrase('You are my soul')}
* ${_.phrase('You are my enchantment')}
* ${_.phrase('I know I have to go down')}
* ${_.phrase('I love you so much')}
* ${_.phrase('For giving me this')}
* ${_.phrase('Kindness')}

## Leave your home, girl

* ${_.phrase(
    /* 'The war is coming again.' */ 'We are becoming war again.',
    _.o.lu.ru,
    _.nemek.m,
    _.si.ota
  )}
* ${_.phrase(/* 'We are growing' */ 'We are being grown', _.es.sho.lu.xim)}
* ${_.phrase('Into fear and hatred', _.peu.m, _.shu, _.nepi.m)}
* ${_.phrase('Our hearts are closing', _.au.msho, _.sha.lu.dak)}
* ${_.phrase('Our minds are foggy.', _.ga.msho, _.sha.nashapa)}

* ${_.phrase('You don’t have a future here.', _.i.sauthe, _.ir.m, _.sen)}

* ${_.phrase('Leave your home, girl', _.odo.imp, _.muda.ti.m, _.nu.lil)}
* ${_.phrase('Alone in the dark', _.done, _.le.pienu, _.ro.gu)}
* ${_.phrase(
    'Without your voice in the house',
    _.es.a.ne$.ir,
    _.lapa.ti.m,
    _.ro.muda
  )}
* ${_.phrase(
    'Without your joy between the tables',
    _.es.a.ne$.ir,
    _.yu.ti.m,
    _.kte.lisoa
  )}
* ${_.phrase('Leave your home, girl', _.odo.imp, _.muda.ti.m, _.nu.lil)}

* ${_.phrase('War crushes the sweetest spirits', _.nemek, _.a.ber, _.ye.ga.gi)}

* ${_.phrase(
    'Leaving hatred and power',
    _.a.wabi,
    _.nexa.m,
    _.shu,
    _.gohuski.m
  )}
* ${_.phrase('As only players', _.kusi, _.yulak.m)}
* ${_.phrase('In the fields', _.ro.gesh)}
* ${_.phrase('And hearts.', _.shu, _.ro.zu.m)}
* ${_.phrase('You would become dark here.', _.i.ru.ire, _.ne.yu.m, _.sen)}

* ${_.phrase('Leave your home, girl', _.odo.imp, _.muda.ti.m, _.nu.lil)}


`,
})
