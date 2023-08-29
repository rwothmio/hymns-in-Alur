type hymn = {
    id: string,
    key: string,
    tempo: string,
    collections: string[],
    titles: [Alur: string, English: string],
    body: [verse: string, chorus?: string][]
}

const hymns: hymn[] = [
    {
      id: '1',
      key: "G",
      tempo: `4/4`,
      collections: ["BA 1", "SW 1"],
      titles: ["Pak Mungu, won gin", "Doxology"],
      body: [
        [
          `Pak Mungu, won gin ma ber kpo,
   Pake wu dhanu yu mi ng'om.
  Jumalaika pake malu, pak Wego, Wod, Tipo Maleng'.`,
        ],
        [
          `Wu dhanu ma wuyie kpo, mond i ot pare ku pake.
  Wubin bang'e ku mutoro, wuyung Mungu wupak nyinge.`,
        ],
        [
          `Rwoth Yesu E Mungu mandha, Ecwiowa ku tegone.
  Tek wayie, Ejolowa, Ekwayuwa ni rombene.`,
        ],
        [
          `Rwoth Mungu En e jabero, E jakisa, Ene jamer.
  E jakony mwa, E jatel yo, E jalar mwa, Jakwac ma ber.`,
        ],
      ],
    },
    {
      id: '2',
      key: "Eb",
      tempo: `3/4`,
      collections: ["GH 149", "SW 48"],
      titles: ["E mer pa Mungu dit", "The Love of God"],
      body: [
        [
          `E mer pa Mungu dit apila, wacopo pore tak de ngo;
  Ekadhu malu ku wi cero, man cil i tipopiny mi tho.
  Ju ma gisendri dit i dubo, Rwoth Yesu tho pigi de,
  Elwong'ogi gibin i bang'e, Ewek dubo migi pet.`,
          `E mer pa Mungu dit apila, wacopo pore de ngo.
  Ju ma pwe ceke gibifoyo, mer pare cil nja ku nja.`,
        ],
        [
          `Ker ceke ma ni keni i ng'om, ku lonyone binyothri pet.
  Ju ma gikwero rwo ni Mungu, ndiri bimakugi ma gwei.
  Man mer pa Mungu bijwik de ngo, birem de ngo cil mi nja.
  Bero ma copo bodho dhanu, eromo pak nja ku nja.`,
          `E mer pa Mungu dit apila, wacopo pore de ngo.
  Ju ma pwe ceke gibifoyo, mer pare cil nja ku nja.`,
        ],
        [
          `Kadok jupong'o ng'om ku polo, ku lembe ma jugoro ngi
  Pi mer pa Mungu yor i bang'wa, m'Enyutho iwa i Wode:
  Jucopo ninyutho tak de ng0, dit mi mer pare bang'wa.
  Kitabu ceke ma jukiewo, binyutho ng'ete kende.`,
          `E mer pa Mungu dit apila, wacopo pore de ngo.
  Ju ma pwe ceke gibifoyo, mer pare cil nja ku nja.`,
        ],
      ],
    },
    {
      id: '3',
      key: "Ab",
      tempo: "6/4",
      collections: ["BA 3", "IH 369", "SW 27"],
      titles: ["Tel wiwa Mungu", "Majestic Sweetness"],
      body: [
        [
          `Tel wiwa Mungu ku ba ceng', fodi wa n'i ng'om.
  I lembe ma watimo kpo, In m'Itelo wiwa ri, Itelo wiwa ri.`,
        ],
        [
          `Tek wabeyenyo cora swa, i yo ma ber ungo,
  Itirwa. Rwoth i wang'ayo kum 
  wayenyo ngo wakier x2`,
        ],
        [
          `Tek wabewotho kudi ndhu, i tic ku ba rupiny,
  Lembe mwa ceke cungo cu kum
  Itelo wiwa rị x2`,
        ],
        [
          `Ka lem ma tek uwok iwa, de lembe moko mbe,
  Kum lworo negowa ungo, kum
  Itelo wiwa ri x2`,
        ],
      ],
    },
    {
      id: '4',
      key: "E",
      tempo: "4/4",
      collections: ["BA 4", "IH 20", "SW 5"],
      titles: ["Mungu Rwoth ma leng'", "Holy, Holy, Holy"],
      body: [
        [
          `Mungu Rwoth ma leng' kwe, m’I jatego ceke,
  Pir kugweno wer mwa de idho i beng'i tin.
  Mungu Rwoth ma leng' kwe, jatego, jakisa.
  Mungu acel m'unyuthre i adek.`,
        ],
        [
          `Mungu Rwoth ma leng' kwe, ju m'uboth gipeki,
  Gin girwo i beng'i ku the komker m'uberieny.
  Malaika mi polo, de girum i weng'1,
  M'Itie ku kwong'a, tin de, nja ku nja.`,
        ],
        [
          `Mungu Rwoth ma leng' kwe, kadok mudho geng'i
  Kadok ju m'udubo gibeneno dwong'ni ngo.
  In I leng' I kendi, ng'a mange rom kudi?
  Tegoni, merni, leng'ni sagu kpo.`,
        ],
        [
          `Mungu Rwoth ma leng' kwe, m'I jatego ceke,
  Ju mi ng'om ku polo de gipaku nyingi tin.
  Mungu Rwoth ma leng' kwe, jatego, jakisa,
  Mungu acel, m'unyuthre i adek.`,
        ],
      ],
    },
    {
      id: '5',
      key: "G",
      tempo: "4/4",
      collections: ["BA 5", "CH 317", "SW 56"],
      titles: ["Ubimo ma dwong'", "Lord of Glory"],
      body: [
        [
          `Ubimo ma dwong' wapeki, Yesu Kristo Wod Mungu.
  Wan ceke warum i weng'i In i dwong' ma sagu kpo.
  In i kendi m'Iromo, kum tic peri ceke cu.`,
        ],
        [
          `Ubimo ma dwong' wapeki, yang' jukweri, juguri.
  Ento tho Ivoyo ceke, tin In i jacampacu.
  In i kendi m'Iromo, kum Itho pi dhanu yu.`,
        ],
        [
          `Ubimo ma dwong' wapeki, Mungu m'umeri ketho
  Kwong' mi dubo mwa i wii, dwoki lam mi dubo kpo.
  In i kendi m'Iromo, kum Ivoyo tho iwa.`,
        ],
        [
          `Ubimo ma dwong' wapeki, kum Icer kind ju m'utho.
  Kristo pa Mungu wayungi, Ibibimo dhanu yu.
  In i kendi m’Iromo, kum i Rwoth mi rwodhi kpo.`,
        ],
      ],
    },
    {
      id: '6',
      key: "F",
      tempo: "4/4",
      collections: ["BA 6", "IH 485", "SW 4"],
      titles: ["Kwiocwiny pa Mungu", "Like a River Glorious"],
      body: [
        [
          `Kwiocwiny pa Mungu calu pi ma mol,
  Mondo ndhu i cwinywa, kwio racne kpo.
  Ceng' ku ceng' enyai m'emedre iwa cu,
  Man edoko thuth ketho wabedo yo.`,
          `Mungu mwa Yehova kwio cwinywa ndhu,
  Gin ma dhoge wacu en e lemandha.`,
        ],
        [
          `Wapondo i cinge kum lembe ma rac
  Yenyo nyayu ndiri, pidoic mi ndra.
  Kud ipid lem ng'om ku gin ma galu ngo.
  Bed yo, Mungu kuri, kum Eol ungo.`,
          `Mungu mwa Yehova kwio cwinywa ndhu,
  Gin ma dhoge wacu en e lemandha.`,
        ],
        [
          `Kud ilwor masendi, Mungu yie En,
  Mer pare bikuri Ebirieme cen.
  Gene nindo ceke, Ebikonyi de,
  Kwiocwiny pa Mungu, kwiocwiny ma dhe.`,
          `Mungu mwa Yehova kwio cwinywa ndhu,
  Gin ma dhoge wacu en e lemandha.`,
        ],
      ],
    },
    {
      id: '7',
      key: "G",
      tempo: "3/4",
      collections: ["BA 7", "IH 21", "SW 6"],
      titles: ["Wapeki Mungu Wegwa", "Come Thou Almighty King"],
      body: [
        [
          `Wapeki Mungu Wegwa, In i won Lembe mandha.
  Wabepeki! In i Wegwa ma leng' Mungu ma piri dwong',
  Wamio yung iri, Wegwa mi nja.`,
        ],
        [
          `Wapeki Yesu ma Wod, Lembe m'uloro i ng'om.
  Wabepeki! Rombo m'utho ni lam m'Isendri dit ku can,
  Jalar m'ubodhowa, Yesu Kristo.`,
        ],
        [
          `Wapeki Tipo Maleng', Tipo ma jajuk mandha.
  Wabepeki! Itelo wiwa cu, wakwei Iromwa do,
  Man bed japonji mwa, Tipo Maleng'.`,
        ],
        [
          `Wapeki Mungu acel, m' Inyuthrii yo adek.
  Wabepeki! Mungu, Wegwa, ku Wod, Tipo ma juko jo,
  Wapeki ku cwinywa ma nja ku nja.`,
        ],
      ],
    },
    {
      id: '8',
      key: "Eb",
      tempo: "4/4",
      collections: ["BA 10", "CH 281", "SW 40"],
      titles: ["Adieng'acwiny m'utimowa", "How Sweet the Name"],
      body: [
        [
          `Adieng'acwiny m'utimowa wabol i wi Yesu,
  Kum ie pido dit piwa, Ekurowa de du.`,
        ],
        [
          `Ka ter ma pek unurowa, evoyowa mandha,
  Wakwaye, man Ekonyowa, Yehova, tego mwa.`,
        ],
        [
          `Tek Mungu mulo cwinywa de, ku can, ku pidoic,
  Wang'eyo En Eponjowa, wabed ku yioyic.`,
        ],
        [
          `E ka can mwa ma keni thum Edwokowa ndhu cu
  Rwoth mwa bijolowa malu i bang'e i polo.`,
        ],
      ],
    },
    {
      id: '9',
      key: "A",
      tempo: "3/4",
      collections: ["BA 11", "IH 407", "SW 30"],
      titles: ["Ubimo ma Rwoth", "O Worship the King"],
      body: [
        [
          `Ubimo ma Rwoth, m'Edwong' i polo,
  Wer ire pi mer ku tego pare.
  E ban mwa ku pala, asi ku tong' de,
  Dong' wapak nying' Mungu ku tego ceke.`,
        ],
        [
          `Pak bero pare, ku riekone de,
  Derne romo ng'om, elero wang'wa.
  Kum kwinyo m'Edagu ko dubo ma rac,
  Ng'ecwiny pare opo kum lembe ma swa.`,
        ],
        [
          `Ipido piwa, Igwokowa dre,
  I Wegwa mi kwo, m'Ikonyowa le.
  Waneno kony peri i koth ku ceng' de,
  Icego cam iwa, wafoyi awe.`,
        ],
        [
          `Wa dhanu ma ng'ic, jubidhowa dit,
  Lem kum ku lem ng'om, Jok sendowa de.
  Wageni Rwoth Yesu m'Ivoyo mandha,
  Rucwic, ku Jalar mwa, jarimbwa mandha.`,
        ],
        [
          `Mugisa iri kum tegoni lwar,
  ku mer peri de m'Imaru kowa.
  Wameri, wadodi wapeki Mungu!
  Jole wer mwa ku pak ma wapeki kudo`,
        ],
      ],
    },
    {
      id: '10',
      key: "D",
      tempo: "4/4",
      collections: ["IH 116", "SW 24"],
      titles: ["Con Yesu lor'i ng'om", "What a Wonderful Saviour"],
      body: [
        [
          `Con Yesu lor'i ng'om mae, Yesu ma Jalar mwa.
  Eweko lonyo ma pare, Yesu ma Jalar mwa.`,
          `Yesu ma Jalar mwa, wa dhanu wameri.
  Yesu ma Jalar mwa, warwo i beng'i.`,
        ],
        [
          `Esendre ya Elar kowa, Yesu ma Jalar mwa.
  Ekwero ngo nitho kumwa, Yesu ma Jalar mwa.`,
        ],
        [
          `Ka Yesu tho Eai k'i liel, Yesu ma Jalar mwa.
  Elund Eidho ka maleng', Yesu ma Jalar mwa.`,
        ],
        [
          `Ka Yesu ai kud i polo, Yesu ma Jalar mwa.
  Bidwogo kar' Ecokwa kpo, Yesu ma Jalar mwa.`,
        ],
      ],
    },
    {
      id: '11',
      key: "G",
      tempo: "4/4",
      collections: ["BA 13", "IH 237", "SW 7"],
      titles: ["Pak nying Rwoth", "All Hail the Power (Coronation)"],
      body: [
        [
          `Pak nying Rwoth Yesu, nying ma dwong',
  Malaika rum ire.
  (Jamkermiwic waroi wie, Wayunge Rwoth mi rwodhi! x2)`,
        ],
        [
          `Wu piny pare ma piwu tek i wang Jawar ma Rwoth.
  (Ekoyowu pi tic ma pwe, wuyunge Rwoth mi rwodhi! x2)`,
        ],
        [
          `Wu suru ceke, dhanu yu, m'ubedo kwo i ng'om.
  (Wudode ni ubimo mu, wuyunge Rwoth mi rwodhi! x2)`,
        ],
        [
          `Ka wabitundo kuca ma wajwigra the tiendi,
  (Wapeki dit ku wer ma nja, Wayungi Rwoth mi rwodhi! x2)`,
        ],
      ],
    },
    {
      id: '12',
      key: "F",
      tempo: "3/4",
      collections: ["BA 14", "IH 35", "SW 170"],
      titles: ["Wafoyo Jalar mwa", "Blest be the tie"],
      body: [
        [
          `Wafoyo Jalar mwa, m'utho pi dhanu yu.
  Kum yioyic m'uribowa wadoko thek acel.`,
        ],
        [
          `Wacokra the komker, pa Rwoth mi bedopwe.
  Wang'eyo Ebewinjowa ka waberwo ire.`,
        ],
        [
          `Ka can unegowa, enurowa de dit,
  Juwadwa konyowa ku juk m'udwoko cwinywa tek.`,
        ],
        [
          `
  Ka kindwa pokre dra, enyayu can iwa.
  Ere i polo ka ma njwa wapokra ngo mi nja.`,
        ],
      ],
    },
    {
      id: '13',
      key: "F",
      tempo: "4/4",
      collections: ["BA 16", "IH 364", "SW 319"],
      titles: ["Rwoth Yesu ameri", "My Jesus I Love Thee"],
      body: [
        [
          `Rwoth Yesu ameri, Itie Rwodha nja,
  Aweko mutoro mi ng'om m'ucida.
  Jarimba ma leng' Kwe, Jalarna ma cu,
  Kawono ameri ma sagu ma con kpo.`,
        ],
        [
          `Ameri Yesu, kum Ilar Imara,
  Ikabu lem dubo m'unuro cwinya.
  Ikendo jamker mir ukudho pira,
  Rwoth Yesu ameri ku mer ma sagu kpo.`,
        ],
        [
          `Ameri ma kwo, abimeri k'i tho,
  Kanyong'a mi cwinya apeki ndhu cu.
  Tek kuma bivoc maku apeki asu.
  Rwoth Yesu ameri ku mer ma sagu kpo.`,
        ],
        [
          `Iudi m’lyiko i polo ma njwa,
  Abifoyi Rwodha, mutoro mandha.
  Ku jamker i wia abiwero pak iri,
  Rwoth Yesu ameri ku mer ma sagu kpo.`,
        ],
      ],
    },
    {
      id: '14',
      key: "G",
      tempo: "3/4",
      collections: ["BA 18", "SW 21"],
      titles: ["Mungu kurowa ma ber", "Safely through another week"],
      body: [
        [
          `Mungu kurowa ma ber, yenga acel m'ukadhu bo.
  Dong wayenyo cwinywa ler ka waparu merni tin.`,
          `(Ceng' pa Mungu sagu kpo,
  Yom ma tin ku yom ma nja) x2`,
        ],
        [
          `Dong' warwo ku nyingi tin, Yesu lwok lem dubo mwa.
  Iriem iwa lem mi ng'om, keth wapar lem peri kwa.`,
          `(Ceng' pa Mungu sagu kpo,
  Yom ma tin ku yom ma nja) x2`,
        ],
        [
          `Ceng pa Mungu, ceng' mi yom, Mungu mio iwa con.
  Ka wadaru tic mi ng'om wabiyom ku kwo ma nja.`,
          `(Ceng' pa Mungu sagu kpo,
  Yom ma tin ku yom ma nja) x2`,
        ],
      ],
    },
    {
      id: '15',
      key: "Ab",
      tempo: "4/4",
      collections: ["BA 19", "IH 483", "SW 145"],
      titles: ["Tek ikicri kawono", "Take the Name of Jesus"],
      body: [
        [
          `Tek ikicri kawono yer nying Yesu nying' ma ber.
  Ebijuki ndhu k'anyong'a kan iyero nying' Jalar.`,
          `(Nyinge mit x3) m'usagu kpo.
  (Nyinge mit x3) m'usagu kpo.`,
        ],
        [
          `Ka jadegi bin' i beng'i man eyenyo bidhoi,
  Yer nying' Yesu kud i cwinyi Ebilworoi ndhu.`,
          `(Nyinge mit x3) m'usagu kpo.
  (Nyinge mit x3) m'usagu kpo.`,
        ],
        [
          `Ka wacokra mal' i polo wabineno wang' Yesu.
  Wabiwero kanga pare Ebibed' Ubimo mwa.`,
          `(Nyinge mit x3) m'usagu kpo.
  (Nyinge mit x3) m'usagu kpo.`,
        ],
      ],
    },
    {
      id: '16',
      key: "Ab",
      tempo: "3/4",
      collections: ["IH 144"],
      titles: ["Yesu Jalar dong' wapake", "Praise the Saviour"],
      body: [
        [
          `Yesu Jalar dong' wapake, gin m'Etimo ng'a ma ng'eyo?
  Ang'o ma waculo ire? Ndhu gin mwa ceke.`,
        ],
        [
          `Yesu, nyinge mir anyong'a, En Ubimo ma jabang'wa,
  Nyinge mio tego iwa, tek warwo kude.`,
        ],
        [
          `Wagen Yesu wa Jukristu, kum Ewaruwa ku rimbe.
  Ebikurowa ceng' ceke kum Elokre ngo.`,
        ],
        [
          `Gwokwa Yesu, wa juperi, watim iri kum wameri.
  Tek wacung i lembe peri Ibijolowa.`,
        ],
        [
          `Ceng' ma wabitund' i beng'i wabibedo leng' i weng'i.
  Wabipeki de ndhu rondo kuca i polo.`,
        ],
      ],
    },
    {
      id: '17',
      key: "G",
      tempo: "3/4",
      collections: ["BA 21", "IH 366", "SW 306"],
      titles: ["Wafoyo Mungu", "Revive us again"],
      body: [
        [
          `Wafoyo Mungu, En m'Emaruwa dit,
  Kum Yesu ma Wode m'Emio iwa.`,
        ],
        [
          `Wan wafoyo Yesu Kristo, wan wafoyo Yesu.
  Wan wafoyo Wod Mungu, wafoyo Yesu.`,
        ],
        [
          `Wafoyo Jalar kum Etho piwa con
  En Emio kwo pare ni ju m'uyie.`,
        ],
        [
          `Wafoyo Jajuk, En m'Ebedo bang'wa,
  En m'Enenowa ceke, Emaruwa dit.`,
        ],
      ],
    },
    {
      id: '18',
      key: "G",
      tempo: "3/2",
      collections: ["BA 23", "IH 98", "SW 80"],
      titles: ["Anyong'a kwa!", "O Happy Day"],
      body: [
        [
          `(Anyong'a kwa! x2) kum Yesu tho Elaruwa.
  Mutoro pong'o cwinywa dit,
  Wafoyo Rwoth ku foc mandha.`,
          `(Lem ma dit x2) kum Yesu lwoko dubo mwa,
  Dong' warwo ire, wabed leng'
  Wacir abidhe ku ba ceng'
  (Lem ma dit x2) kum Yesu Iwoko dubo mwa.`,
        ],
        [
          `Amira ceke ni Rwodha, atim tic ire, tic mandha.
  Enyayu wer i dhoga kwa, adundena bepake nja!`,
          `(Lem ma dit x2) kum Yesu lwoko dubo mwa,
  Dong' warwo ire, wabed leng'
  Wacir abidhe ku ba ceng'
  (Lem ma dit x2) kum Yesu Iwoko dubo mwa.`,
        ],
        [
          `Dong' tic mi both m'Etimo thum, adoko pare piny ma dhe.
  Ku dwal ma mit Elwong'a
  "Bin, lub toka ndhu i yo ma pwe."`,
          `(Lem ma dit x2) kum Yesu lwoko dubo mwa,
  Dong' warwo ire, wabed leng'
  Wacir abidhe ku ba ceng'
  (Lem ma dit x2) kum Yesu Iwoko dubo mwa.`,
        ],
      ],
    },
    {
      id: '19',
      key: "Ab",
      tempo: "6/8",
      collections: ["BA 24", "IH 211", "SW 50", "SW 107"],
      titles: ["Nying' Yesu winjre ber", "O How I Love Jesus"],
      body: [
        [
          `Nying' Yesu winjre ber ira, e mit ma sagu ceke,
  Kum nying' mange wi ng'om ngung, uromo ngo calu en.`,
          `(An amaru Yesu x3) kum Elar Emara dit.`,
        ],
        [
          `Epoya pi rimbe m'ucwir, m'ulwoko dubo ceke.
  Epoya de pi mer pare, m' Emaru ko dhanu pet.`,
          `(An amaru Yesu x3) kum Elar Emara dit.`,
        ],
        [
          `Epoya de k'i can para, ya can m'utime sagu,
  Eng eyo yeyo can para, ma sagu jumange.`,
          `(An amaru Yesu x3) kum Elar Emara dit.`,
        ],
      ],
    },
    {
      id: '20',
      key: "Ab",
      tempo: "9/8",
      collections: ["BA 25", "IH 109", "SW 305"],
      titles: ["Waweru wer ma wafoi", "My Redeemer"],
      body: [
        [
          `Waweru wer ma wafoi ko Yesu
  Kum mer ma dit m'Emaru kowa.
  Keth' Etho piwa wi yen m'athara,
  Elwokwa ceke wabed leng' njwa.`,
          `Wawero wer ma wafoi ko Yesu,
  Kum pi lem tho m'Etho ko kor yen.
  Rimbe m'ucwir elwoko ko kier mwa,
  Ewaru dubo ceke cen.`,
        ],
        [
          `Waweru wer ma wafoi ko Yesu, con aba para jukabu cen.
  Eculo banja para ku kisa, berom'Etimo kaporne mbe.`,
          `Wawero wer ma wafoi ko Yesu,
  Kum pi lem tho m'Etho ko kor yen.
  Rimbe m'ucwir elwoko ko kier mwa,
  Ewaru dubo ceke cen.`,
        ],
        [
          `Waweru wer ma wafoi ko Yesu abidhe ceke voyowa ngo,
  Kum tego pare En e aloci m'Evoyo dubo ku tho de kpo.`,
          `Wawero wer ma wafoi ko Yesu,
  Kum pi lem tho m'Etho ko kor yen.
  Rimbe m'ucwir elwoko ko kier mwa,
   Ewaru dubo ceke cen.`,
        ],
        [
          `Waweru wer ma wafoi ko Mungu, wadoko wote ku yioyic.
  Ebilund cokowa ndhu i bang'e, e wabidoko cal kude de.`,
          `Wawero wer ma wafoi ko Yesu,
  Kum pi lem tho m'Etho ko kor yen.
  Rimbe m'ucwir elwoko ko kier mwa,
  Ewaru dubo ceke cen.`,
        ],
      ],
    },
    {
      id: '21',
      key: "Ab",
      tempo: "4/4",
      collections: ["BA 26", "IH 376", "SW 81"],
      titles: ["The yen m'athara pa Jalarna", "Glory to his Name"],
      body: [
        [
          `The yen m'athara pa Jalarna an aywak kum lem dubona.
  Yesu lwok ia dwoke tar, dong' afoi Jalar.`,
          `(Dong' afoi Jalarna x2) Rimb Jalarna
  Yang' ucwir pira, dong' afoi Jalar.`,
        ],
        [
          `Afoyo Yesu ma Jalarna kum En Esendre, Etho kuma.
  En de Ekura, bikura nja, dong' afoi Jalar.`,
          `(Dong' afoi Jalarna x2) Rimb Jalarna
  Yang' ucwir pira, dong' afoi Jalar.`,
        ],
        [
          `Ni dub m'adubo aboth mumbe, Yesu de bedo i ia lwe,
  An ke abedo i ie de, dong' afoi Jalar.`,
          `(Dong' afoi Jalarna x2) Rimb Jalarna
  Yang' ucwir pira, dong' afoi Jalar.`,
        ],
        [
          `Iko ibin de ba Jalarna, En de bileri ku rimbe nja.
  Ilund ifoye ku foc mandha, dong ifoi Jalar.`,
          `(Dong' ifoi Jalarni x2) Rimb Jalarni
  Yang' ucwir piri, dong' ifoi Jalar.`,
        ],
      ],
    },
    {
      id: '22',
      key: "Db",
      tempo: "4/4",
      collections: ["BA 27", "IH 296", "IH 296"],
      titles: ["Mer pa Yesu, maku", "When we all get to Heaven"],
      body: [
        [
          `Mer pa Yesu maku ya jupake, wer pi bero pare ku kisa.
  Ebeyiko udi dupa mal'i polo i bang'e.`,
          `Ka watundo i polo wabinwang'u mutoro dit mandha.
  Ka waneno Yesu wabibepaku nyinge nja.`,
        ],
        [
          `Ka fodi wawoth i ng'om maeni mudho cido wang'ayo iwa,
  Dwong' ku bero pa Rwoth Yesu dwoko wang' wa leng' andha.`,
          `Ka watundo i polo wabinwang'u mutoro dit mandha.
  Ka waneno Yesu wabibepaku nyinge nja.`,
        ],
        [
          `Dong' wabed asu ku tic m’Emio, wagene pı tego ku ba ceng'.
   Sukulia pare nuti wabinwang'e ka ma leng.`,
          `Ka watundo i polo wabinwang'u mutoro dit mandha.
  Ka waneno Yesu wabibepaku nyinge nja.`,
        ],
        [
          `Dong' wacir masendi ceke kuni wabineno wang' Jalar Yesu.
  Kan Ejolowa i polo, wabibedo kude nja.`,
          `Ka watundo i polo wabinwang'u mutoro dit mandha.
  Ka waneno Yesu wabibepaku nyinge nja.`,
        ],
      ],
    },
    {
        id: '22a',
        key: "Ab",
        tempo: "4/4",
        collections: ["BA 22", "IH 317", "SW171"],
        titles: ["E ber dit ya wagen Yesu", "'Tis so Sweet"],
        body: [
            [`E ber dit ya wagen Yesu, wan wageno rimbe ndhu.
Kum Elwoko cwinywa ceke tek wayio Yesune.`, `Yesu, Yesu, wan wagene, wan wayio lem pare.
Yesu, Yesu, e Jalar mwa, wan wakio dwogone.`],
            [`E ber dit ya wan wagene, wawek dubo ceke cen.
Kum wageno Yesu, ketho wabed kwo, e cwinywa kwi.`, `Yesu, Yesu, wan wagene, wan wayio lem pare.
Yesu, Yesu, e Jalar mwa, wan wakio dwogone.`],
            [`Tin wabedo kud anyong'a, kum wageno Rwoth Yesu.
E Jalarwa, e Jarimbwa, Ebibedo bang'wa nja.`, `Yesu, Yesu, wan wagene, wan wayio lem pare.
Yesu, Yesu, e Jalar mwa, wan wakio dwogone.`],
    ],
      },
      {
        id: '23',
        key: "Ab",
        tempo: "6/8",
        collections: ["BA 29", "IH 223", "SW 3"],
        titles: ["Pake, pake", "Praise Him, Praise Him"],
        body: [
            [`(Pake x2) Yesu Kristu ma Jawar mwa!
Cak wer i ng'om ceke kum mer ma dwong'.
(Pake x2) wu jumalaika m'i bang'e,
Pak nyinge ma tegone sagu nja!
Ebikurowa, wan wa nyithindho pare,
Rombene Ekwayuwa ku ba saa.`, `(Pake x2) yung Yesu Kristu ma Rwoth mwa,
Pake hai ku wer mir anyong'a kwa!`],
            [`(Pake x2) Yesu Kristu ma Jawar mwa!
Rimbe cwir, Etho de pi dubo mwa.
Jalar mwa, wagene pi both ma juboth ko.
(Pake x2) maku wayunge do!
Merne pore ngo, ng'a copo pido lwarne?
Dhanu yu mi ng'om Yesu maru kpo.`, `(Pake x2) yung Yesu Kristu ma Rwoth mwa,
Pake hai ku wer mir anyong'a kwa!`],
            [`(Pake x2) Yesu Kristu ma Jawar mwa!
Ebibino bimo wi dhanu yu!
Ker bibedo pare mandha ku ma pwe de,
Rwoth mi rwodhi, maku juyunge le!
Ubimo mandha, bimwa ku cwiny m'ukwio,
Con Ijwigri, meni judodi dre!`, `(Pake x2) yung Yesu Kristu ma Rwoth mwa,
Pake hai ku wer mir anyong'a kwa!`],
        ],
      },
      {
        id: '24',
        key: "D",
        tempo: "9/8",
        collections: ["BA 30", "IH 311", "SW 138"],
        titles: ["Meni ang'eyo Yesu Rwodha", "Blessed Assurance"],
        body: [
            [`Meni ang'eyo Yesu Rwodha, berone bedo nja i cwinya.
Tipone nyolo dhanu ma nyen
Anyong'a nega ceng' ku ba ceng'.`, `Both ma juboth ko ai i bang'e,
Lembe m'Eng'olo etimbre be.
Mungu m'araga kud iyeny ki
Kum Yesu kende e m'ubodhi.`],
            [`Konya ku yero lem peri ber, gin ma Iyenyo e ma ayer.
Ayeny awoth i yo peri cu, lembe mi ng'om abiweko kpo.`, `Both ma juboth ko ai i bang'e,
Lembe m'Eng'olo etimbre be.
Mungu m'araga kud iyeny ki
Kum Yesu kende e m'ubodhi.`],
            [`Yesu ameri, tel wia nja, akuro dwogo peri mandha.
Ang'ayu wang'a yor i polo, kum Ibigamu juperi kpo.`, `Both ma juboth ko ai i bang'e,
Lembe m'Eng'olo etimbre be.
Mungu m'araga kud iyeny ki
Kum Yesu kende e m'ubodhi.`],
        ],
      },
      {
        id: '25',
        key: "Ab",
        tempo: "4/4",
        collections: ["BA 31", "IH 5", "SW 18"],
        titles: ["Wapak nying' Mungu", "Blessed be the Name"],
        body: [
            [`Wapak nying' Mungu m'ubimo, E Mungu ma Won yung.
Emio Wode ya Etho nilaru dhanu yu.`, `Yesu bodhowa! Yesu bodhowa!
Yesu bodhowa ku rimbe
Yesu bodhowa! Yesu bodhowa!
Yesu bodhowa ku rimbe`],
            [`Nying Yesu sagu nying' mange, wayunge ku wer mwa.
Ejany malu jatego kpo, wayunge ku wer kwa.`, ``],
            [`Jawar, Jalar, jarimb dhanu, ma yang' girwinyo swa.
Eyabu yo mi both iwa m'utundo i polo.`, ``],
            [`Julwong'o nyinge Wang'uic, Japorlembe ma ber.
Jaditmawijo, Kwiocwiny, Jatego ma wi ker.`, `Yesu bodhowa! Yesu bodhowa!
Yesu bodhowa ku rimbe
Yesu bodhowa! Yesu bodhowa!
Yesu bodhowa ku rimbe`],
        ],
      },
      {
        id: '26',
        key: "A",
        tempo: "3/2",
        collections: ["BA 32", "IH 222", "SW 9"],
        titles: ["Ayenyo Mungu mi ira", "O for a Thousand"],
        body: [
            [`Ayenyo Mungu mi ira lem yung m'ayunge ko.
Ewara ndhu ku tegone ku berone mandha.`],
            [`Rwoth para mina tegocwiny m'atuc ko beroni,
Ni ju mi ng'om kara giyi, gin de gifoi nyingi.`],
            [`E Yesu! Nyingi mit andha ekwio cwinya lwe!
Eriemo can ku lworo de enyay' anyong'a kwa.`],
            [`Egonya kud i dubona, ewodha kud i tho.
Enyayu foyofoc ira, rimbe udwoka leng'.`],
        ],
      },
      {
        id: '27',
        key: "C",
        tempo: "4/4",
        collections: ["BA 33", "IH 386 SW", "109, 208"],
        titles: ["Lembe mi mutoro wok", "Bringing in the Sheaves"],
        body: [
            [`Lembe mi mutoro wok i yo pa Mungu
Ni kum Yesu Kristu ma Wod Mungune.
Yesu Kristu tho kum kier mi dhanu ceke,
Yesu Jalar nuti, dong' ifoi Yesu.`, `Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu
Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu`],
            [`Foyofoc unyay' anyong'a kud i cwiny jo,
Kum eriemo can m'ubedusendowa.
Tek mutoro nuti can ke bilund ringo,
Yesu Jalar nuti, dong' ifoi Yesu.`, `Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu
Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu`],
            [`Lem ma rac m'i ng'om umulowa wa dhanu,
En esendowa i woth mi kwo ma nyen.
Ento tek wafoyo Yesu kud i cwinywa,
Lem m'usendowa dong Mungu kabu cen.`, `Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu
Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu`],
            [`Jok ma en e won ndra thoko dit ewingwa,
Yenyo corowa cen ku ba Mungu mwa.
Dong' wabed ku tego wanen ru ba Mungu,
Yesu Jalar nuti, dong' ifoi Yesu.`, `Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu
Dong' ifoi Yesu, dong ifoi Yesu,
Yesu Jalar nuti, dong' ifoi Yesu`],
        ],
      },
      {
        id: '28',
        key: "F",
        tempo: "4/4",
        collections: ["BA 34", "IH 413", "SW 174"],
        titles: ["Tek lworo nyai", "A Shelter in the Time"],
        body: [
            [`Tek lworo nyai i cwinywa dit,
Kapondo mwa e Rwoth Mungu.
Ekurowa i can ma lic,
Kapondo mwa e Rwoth Mungu.`, `E Mungu In i cana (kapondo mwa! x3)
E Mungu In i cana (kapondo mwa! x3) n'i Rwoth Mungu.`],
            [`Tek koth ucwi e polo mor,
Kapondo mwa e Rwoth Mungu.
Tek ng'om umiel epi de woi,
Kapondo mwa e Rwoth Mungu.`, `E Mungu In i cana (kapondo mwa! x3)
E Mungu In i cana (kapondo mwa! x3) n'i Rwoth Mungu.`],
            [`Ku ba dieceng', Ku ba diewor,
Kapondo mwa e Rwoth Mungu.
Thong'om m'uwotho i mudho,
Kapondo mwa e Rwoth Mungu.`, `E Mungu In i cana (kapondo mwa! x3)
E Mungu In i cana (kapondo mwa! x3) n'i Rwoth Mungu.`],
            [`Rwoth konya do i lembe kpo,
Kapondo mwa e Rwoth Mungu.
I Mungu para ndhu rondo,
Kapondo mwa e Rwoth Mungu.`, `E Mungu In i cana (kapondo mwa! x3)
E Mungu In i cana (kapondo mwa! x3) n'i Rwoth Mungu.`],
        ],
      },
      {
        id: '29',
        key: "G",
        tempo: "3/4",
        collections: ["BA 35", "IH 469", "SW 119"],
        titles: ["Wan wawinjo lemandha", "Jesus Saves"],
        body: [
            [`Wan wawinjo lemandha, Yesu kende Jalar.
Lembene mutoro kwa! Yesu kende Jalar.
Rimone belwokowa, rimbe copo lonyoWa,
Yioyic m'unyuthowa, Yesu kende Jalar!`],
            [`Mungu wacu iwa kpo Yesu kende Jalar.
Dong' wuwinj kathere do, Yesu kende Jalar.
Dhanu yu wung'eye be, co ku mon, nyithindho de.
Wucik ithwu kume ki! Yesu kende Jalar!`],
            [`Dong wu dhanu wuwinj cu, Yesu kende Jalar.
En Ekwero mire ngo, Yesu kende Jalar.
Tek wayie wabiboth, lembe pare wacu do.
Keth jung'ei kathere cu, Yesu kende Jalar.`],
        ],
      },
      {
        id: '30',
        key: "G",
        tempo: "3/4",
        collections: ["BA 36", "IH 329", "SW 195"],
        titles: ["Ageno bero para ngo", "The Solid Rock "],
        body: [
            [`Ageno bero para ngo, ajengra kum lem ng'om de ngo
Ndhu rimb Yesu m'uoi pira, ku berone m'agenona.`, `Yesu ma kidi mi gundot,
(Jukwere con, m'Ekelo both x2)`],
            [`Tek mudho cido wang'a de, ageno bero peri be.
Tek dubo voya, cida bi, Elwoka tek atucogi.`, `Yesu ma kidi mi gundot,
(Jukwere con, m'Ekelo both x2)`],
            [`Lewic umbe ni jupare m'ugene i masendi de.
Eng'olo lembaribane m'ulokre ngo, jugene dre.`, `Yesu ma kidi mi gundot,
(Jukwere con, m'Ekelo both x2)`],
            [`I ceng' mi lieu tic binyuthre, ceng'ne biwodhe ka ma leng'
Rwoth konya atim iri cu, mac kud uwang' tic para do.`, `Yesu ma kidi mi gundot,
(Jukwere con, m'Ekelo both x2)`],
        ],
      },
      {
        id: '31',
        key: "Ab",
        tempo: "4/4",
        collections: ["IH 249"],
        titles: ["Ecopre andha abinwang'u", "And Can it Be"],
        body: [
            [`Ecopre andha abinwang'u ruc mi dubo para
I rimo pa Jalar? Emio kwo pare ndhu pira,
M'uketho Etho wi Kalvari?`, `Imaruwa, wang'uic sagu dit mandha,
Ya In i Mungu para dong' Idaru tho pira.
Imaruwa, ndhu wang'uic, i Munguna in Itho pira.`],
            [`Eweko dwong' ma pare yo ba Won,
Bero ma pare sagu pidoic.
Eweko ceke kum En e mer, Etho pi kodhi Adamu.`, `Imaruwa, wang'uic sagu dit mandha,
Ya In i Mungu para dong' Idaru tho pira.
Imaruwa, ndhu wang'uic, i Munguna in Itho pira.`],
            [`Alworo pokolembe kendo ngo
Kum an abedo bong' pa Rwoth Yesu.
Kwona ni ie ma En e Wic,
Eronya ku bedopwe pare.`, `Imaruwa, wang'uic sagu dit mandha,
Ya In i Mungu para dong' Idaru tho pira.
Imaruwa, ndhu wang'uic, i Munguna in Itho pira.`],
        ],
      },
      {
        id: '32',
        key: "Bb",
        tempo: "9/8",
        collections: ["IH 185"],
        titles: ["En e Ubimo mir aloci \n(Zaburi 24:9,10)", "Victory through Grace"],
        body: [
            [`En e Ubimo mir aloci, En e Ubimo ma dwong'
Etelo yo wi ju ma gi pare ka gicimondo i lwiny.
Nen gibekiedo ku tego, Rwoth migi gwokogi En.
Dre gibeyunge Ubimo, kum En e Jategokpo.`, `I lwiny maeni ju ma giloyo en e ni kum yioyic,
Rwoth migi ng'olo jumandha ma gibiloyo ma gwei`],
            [`Ubimone e Rwoth ma nenedi ma wubeyunge kumae?
Udul ma ng'a m'Etelo yo igi, ju ma gipake ku wer?
En e Jalar mwa ku Rwoth mwa, Ubimo, Jawar mandha.
Ju ma gipake gi ju ma rimb Nyathi Rombo lwoko.`, `I lwiny maeni ju ma giloyo en e ni kum yioyic,
Rwoth migi ng'olo jumandha ma gibiloyo ma gwei`],
            [`En e Ubimo mir aloci Yesu Jadit mi ng'om yu.
Polo ku ng' om de copo kadhu, jubim mi ng'om ceke de.
Ento jupare giloyo cil ma gicidho' bang'e
I pacu pare giyom de jamkermiwic kurogi.`, `I lwiny maeni ju ma giloyo en e ni kum yioyic,
Rwoth migi ng'olo jumandha ma gibiloyo ma gwei`],
        ],
      },
      /*{
        id: 0,
        key: "",
        tempo: "/",
        collections: [],
        titles: [],
        body: [],
      }, */
  ];
  
  /*

  */
  
  
 /* const getSong = (i) => {
      const body = hymns[i].body
      for (let parts of body) {
          for (let part of parts) {
              console.log(part + "\n")
          }
      }
  }
  
  getSong(17) 
  */
  
  //console.log(hymns[17].titles[0]);
  
  /*
  
  
  
  
  
  
  */
  