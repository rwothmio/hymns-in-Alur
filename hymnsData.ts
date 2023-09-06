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
      {
            id: '33',
            key: "Bb",
            tempo: "2/4",
            collections: ["BA 44", "IH 247"],
            titles: ["Lem ma dit", "The Old Time Religion"],
            body: [
                  [`(Lem ma dit lem pa Yesu x3) 
Lembe roma dit andha.`],
                  [`(Ebitela ba Yesu x3)
Lembe roma dit andha.`],
                  [`(Kum ekonya ceng' ceke x3)
Lembe roma dit andha.`],
                  [`(Kan avoc ebijuka x3)
Lembe roma dit andha.`],
                  [`(Ebitera i polo x3)
Lembe roma dit andha.`],
            ],
      },
      {
            id: '34',
            key: "E",
            tempo: "4/4",
            collections: ["BA 129", "IH 212", "SW 17"],
            titles: ["Wayung ubimo mwa", "Crown Him with Crowns"],
            body: [
                  [`Wayung ubimo mwa, Ebedo wi komker,
Winj wer ma jumaleng' wero, wer ma gipake ko.
Wapake de ku wer, kum Etho piwa kpo.
Wadode Rwoth mi rwodhi kwa Ubimo mwa mi nja.`],
                  [`Wayung ubimo mwa, Jacwic m'uronyo kum.
Junyole de i Bethlehem, Wod Mungu wok i ng'om.
Etho pi dubo kpo, Elaruwa k'i tho,
Wafoyo kisa pare dwong' m'umio iwa kwo.`],
                  [`En e ukungu mer, nen ng'ete, cinge de,
Wang' rem unen m'unyuthowa Esendre dit piwa.
Malaika ceke de giyungo Yesu Rwoth,
Gikulo wigi niyungo Ubimo mwa mi nja.`],
            ],
      },
      {
            id: '35',
            key: "C",
            tempo: "4/4",
            collections: ["BA 130", "IH 1"],
            titles: ["Ka piny uru i wia", "When Morning Gilds"],
            body: [
                  [`Ka piny uru i wia afoyo Rwoth ma dwong',
Pak Yesu Kristu dit. I tic m'atimo kpo,
Ka cwinya de berwo, pak Yesu Kristu dit.`],
                  [`Mungu ma malu ngbir, Wegwa ma I won mer, 
Pak Yesu Kristu dit
Wapeki ku wer kwa, mutoro negowa.
Pak Yesu Kristu dit`],
                  [`Tek can usendowa, Jajuk mwa nuti nja,
Pak Yesu Kristu dit
Kadok ambe ku piny, Emio kwiocwiny.
Pak Yesu Kristu dit`],
                  [`Ka fodi wani ng'om, wawero wer ma dwong'
Pak Yesu Kristu dit
Kuca i kwo mandha, wer mwa bibedo nja.
Pak Yesu Kristu dit`],
            ],
      },
      {
            id: '36',
            key: "Eb",
            tempo: "2/4",
            collections: ["CV 208", "SW 189"],
            titles: ["Ka waparu gin ma Mungu", "Count your blessings"],
            body: [
                  [`Ka waparu gin ma Mungu miowa,
Par ma tek gin ceke ma Emiowa.
Gin m'Emio bang'wa e m'unyuthowa,
Mungu em'umaru dhanu dit andha.`, `Yesu Kristu Mungu mio re, Lembe pare de Eoro re.
Ka wayio wabinwang'u kwo, kwo ma Mungu
mione bithum de ngo.`],
                  [`Ka kec nut'i pacu, koth ucwi de ngo,
Tek wapenjo Mungu Ebiwinjowa.
Mungu mio kata, ku rabolo de,
Kwen de, bel de, kal de Mungu mio re.`, `Yesu Kristu Mungu mio re, Lembe pare de Eoro re.
Ka wayio wabinwang'u kwo, kwo ma Mungu
mione bithum de ngo.`],
                  [`Mungu mio Yesu En m' etho piwa,
Yesu lori ng'om, Esendre dit andha.
Rimbe ceke cwir yang' con nibodhowa,
Ka wayio Yesu wabiboth andha.`, `Yesu Kristu Mungu mio re, Lembe pare de Eoro re.
Ka wayio wabinwang'u kwo, kwo ma Mungu
mione bithum de ngo.`],
            ],
      },
      {
            id: '37',
            key: "Bb",
            tempo: "4/4",
            collections: ["SW 11"],
            titles: ["Rwoth Munguna, ka ia \n (Zaburi 8)", "How Great Thou Art"],
            body: [
                  [`Rwoth Munguna, ka ia maku paru
Pi gin ceke ma In lcwio ri,
Cero ku dwi, ku ceng' m'urieny i polo
Ginyutho ya In i Jategokpo.`, `Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei
Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei`],
                  [`Kan abewotho ku the yen mi luli
Awinjo winyo paku In ku wer.
Gudi ma dongo nyutho pi dwong' peri
Ku giracwia kpo m'Icwio ri.`, `Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei
Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei`],
                  [`Kan abeparu pi Wodi m'loro, Etho pira,
E ia uwang' li. Wi Kalvari Eyeyo ter mwa ceke
Rimone cwir nilonyo dubona.`, `Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei
Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei`],
                  [`Ku dwal ma dit ka Kristu dwogo gama
Anyong'ana bisagu dit andha.
E abirum e abijwigra ire, e abipake,
"Munguna, I dwong!"`, `Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei
Apeki Rwoth ma In i Jalarna,
I dwong' ma gwei, I dwong' ma gwei`],
            ],
      },
      {
            id: '38',
            key: "Ab",
            tempo: "3/4",
            collections: ["IH 227", "SW 32"],
            titles: ["Wami dwong' ni Mungu", "To God be the Glory"],
            body: [
                  [`Wami dwong' ni Mungu kum tic pare dit,
Emio Wode kum Emaru ng'om yu.
Wode mio kwo - adunya pi kier mwa,
Eyabu dhugola mi kwo iwa kpo.`, `(Dwong'ni Rwoth x2) Wek ng'om winj dwande do!
(Dwong' ni Rwoth x2) Wek anyong'a mwa pong'!
Bin ceng'ni ba Wego ni kum Yesu Wod,
Wami foc ni Mungu, kum tic pare dwong'.`],
                  [`Eyabu yoj both, rimb Jalar Yesu cwir,
Ni dhanu m'uyie Mungu ng'olo de,
Jadubo ma rac dit m'eyio andha,
Dubo pare rucre pet i saa nica.`, `(Dwong'ni Rwoth x2) Wek ng'om winj dwande do!
(Dwong' ni Rwoth x2) Wek anyong'a mwa pong'!
Bin ceng'ni ba Wego ni kum Yesu Wod,
Wami foc ni Mungu, kum tic pare dwong'.`],
                  [`Enyutho dwong' pare ku lembe, ku tic,
Wafoye, wayunge, ku Nying Yesu Wod.
Andha wabipake ku wang'uic dit,
Ka waneno Yesu, Jalar, Rwoth Mungu.`, `(Dwong'ni Rwoth x2) Wek ng'om winj dwande do!
(Dwong' ni Rwoth x2) Wek anyong'a mwa pong'!
Bin ceng'ni ba Wego ni kum Yesu Wod,
Wami foc ni Mungu, kum tic pare dwong'.`],
            ],
      },
      {
            id: '39',
            key: "Ab",
            tempo: "3/4",
            collections: ["IH 33", "SW 45"],
            titles: ["Ka iwa pido pi Yesu", "Jesus the very Thought"],
            body: [
                  [`Ka iwa pido pi Yesu mutoro negowa,
Ento ma sagu ceke re, wanen ru wang Jalar.`],
                  [`Awinjo ngo, ang'eyo ngo, man de aparu kwe,
Nyinge mit sagu mange kpo, Jalar mi dhanu yu.`],
                  [`Wageno En ku kwiocwiny, Yesu m 'ubedo mol.
Ejukowa weg pidoic, Ekonyo ju m'uol.`],
            ],
      },
      {
            id: '40',
            key: "Eb",
            tempo: "3/4",
            collections: ["IH 103", "SW 10"],
            titles: ["Abiwero lem pa Kristu", "I Will Sing the Wondrous Story"],
            body: [
                  [`Abiwero lem pa Kristu, Yesu En m'Etho pira.
Con Eweko Won i polo kar' Etho Ebodh kowa.`, `Abiwero lembe pare, lem pa Yesu ma Jalar.
Wabiwero ku jupare, nja ku nja ku wer mandha.`],
                  [`Kan arwinyo Yesu nwang'a con arwinyo swai ng'om.
Yesu bino de i bang'a, En Emio ira kwo.`, `Abiwero lembe pare, lem pa Yesu ma Jalar.
Wabiwero ku jupare, nja ku nja ku wer mandha.`],
                  [`Woth ubedo tek dit ira, en edaru tegona.
Wang'a tho, e ndiri nega, Yesu wodha kud i can.`, `Abiwero lembe pare, lem pa Yesu ma Jalar.
Wabiwero ku jupare, nja ku nja ku wer mandha.`],
                  [`Wang'a cido dit ku mudho, lworo nega de mandha,
Tego pare riemo lworo ka Yesu wok i bang'a.`, `Abiwero lembe pare, lem pa Yesu ma Jalar.
Wabiwero ku jupare, nja ku nja ku wer mandha.`],
                  [`Ka tho nega Ebikura, kan aweko ng'om mae.
Ebibedo ndhu i bang'a keth atund i polone.`, `Abiwero lembe pare, lem pa Yesu ma Jalar.
Wabiwero ku jupare, nja ku nja ku wer mandha.`],
            ],
      },
      {
            id: '41',
            key: "Eb",
            tempo: "2/2",
            collections: ["BA 94", "IH 470", "SW 264"],
            titles: ["Yesu bibimo wi ng'om", "Jesus Shall Reign"],
            body: [
                  [`Yesu bibimo wi ng'om ceke de,
Gambrei nam cil i tung' ng'om.
E Rwoth mi rwodhi mi ng'om ngung',
Ubimo mwa, nyalwo mandha.`],
                  [`Mungu bidode malu kpo, cong ceke rum dwe the komker.
Kara leb ceke pak nyinge, Yesu Wod Mungu ma Jalar.`],
                  [`Haleluya! Jategokpo! Mutoro nego cwinywa kpo.
Dong' wami dwong' ni Jalar mwa, wapake dre, wayunge nja.`],
                  [`Thek ceke cokri nipake, ku girajoka dupa de.
Winj jumalaika gipake, ng'om de bipake nja ku nja.`],
            ],
      },
      {
            id: "42",
            key: "Ab",
            tempo: "6/8",
            collections: ["CH 206", "SW 105"],
            titles: ["Pokri ma rac", "Love found a Way"],
            body: [
                  [`Pokri ma rac i kindwa con waku Jalar,
Lembene wang'u ia li, Yesu bodha.
Kinde ma genogen umbe, e ceng' ma dwong',
Mer ting'o cwinya kud i tho, mer pa Jalar.`, `Mer nwang'u yo m'ewar ko cwinya,
Mer nwang'u yo m'udwoka ndhu bo.
Mer oro Rwoth, Etho kakara,
Mer nwang'u yo apaku Nying Jalar.`],
                  [`Mer kelo Jalar kar' Etho wi Kalvari pira m'adubo rac ma gwei.
Wang'uic dit. Mer tadu kindwa ku polo, ponja nirwo.
Yesu ulara, gonya de, dwong' ni Jalar.`, `Mer nwang'u yo m'ewar ko cwinya,
Mer nwang'u yo m'udwoka ndhu bo.
Mer oro Rwoth, Etho kakara,
Mer nwang'u yo apaku Nying Jalar.`],
                  [`Mer ting'a kud i ka ma thuth, longro pa Jok.
Kara acung wi cana.
Ma En e Jalar. Mer yabu polo ira de, ndhu genogen.
Ka mir anyong'a nja ku nja ku Yesu Rwoth.`, `Mer nwang'u yo m'ewar ko cwinya,
Mer nwang'u yo m'udwoka ndhu bo.
Mer oro Rwoth, Etho kakara,
Mer nwang'u yo apaku Nying Jalar.`],
            ],
      },
      {
            id: '43',
            key: "C",
            tempo: "4/4",
            collections: ["CH 347"],
            titles: ["Ndhu kwiocwiny", "Peace, perfect peace"],
            body: [
                  [`Ndhu kwiocwiny, i ng'om mae ma rac,
Rimb Yesu mio cwiny ma kwio ndhu.`],
                  [`Kwiocwiny de kind tic ma tek ceng' du.
Nitimo yeny pa Mungu mio yom.`],
                  [`Kwiocwiny de kind can ma dit mi ng' om,
Ku geno Yesu kwiocwiny juyic.`],
                  [`Kwiocwiny de nwang'u jumer ni bor.
Gigwokri calku wan i Yesu Rwoth.`],
                  [`Kwiocwiny de kadok tho wok bang'wa.
Rwoth Yesu sagu tho ku tegone.`],
                  [`Eni romo, ceng' mange can bithum,
Man wabibedo nja ku nja ba Rwoth.`],
            ],
      },
      {
            id: '44',
            key: "Bb",
            tempo: "4/4",
            collections: ["IH 70"],
            titles: ["Jarimo para Yesu", "It's just like His Love"],
            body: [
                  [`Jarimo para Yesu, Emara dit mandha, 
Mer pare ma Emara ko usagu mange le.
Kum tek akier atuc ire, Eweko dubona,
Emaka ki i cinge de, wode m'Emaru dit.`, `E Yesu Kristu m'ukabu dubo cen,
En e Jagwokna ku ba rupiny ceke.
E Yesu de m'utelo wia ber,
E Yesu ma Jamer.`],
                  [`Ceng' moko ka masendi betimo cwinya de, 
Mer pa Jalar apido ngo kum Jok usenda dit.
E Yesu lund urieme bor, Ebedo ru ia.
Acopo wero foc mandha kum Yesu ma Jamer.`, `E Yesu Kristu m'ukabu dubo cen,
En e Jagwokna ku ba rupiny ceke.
E Yesu de m'utelo wia ber,
E Yesu ma Jamer.`],
                  [`Ka can unuro cwinya, jumerna moko tho.
Aringo ndhu ba Munguna, Ejuka de kumae:
"Kud iywak calu judubo ma genogen umbe."
I polo wabinendra be ku Yesu ma Jamer.`, `E Yesu Kristu m'ukabu dubo cen,
En e Jagwokna ku ba rupiny ceke.
E Yesu de m'utelo wia ber,
E Yesu ma Jamer.`],
                  [`Ayenyo dit awer ru pi mer m'Emara ko,
Pi gwok ma Yesu gwoka ko an ma a ber ungo.
Wod Mungu ma Yesu Kristu m'Ubimo ma Won yung
Ma ceng' ku dwi ku cero de gipaku Nyinge dit.`, `E Yesu Kristu m'ukabu dubo cen,
En e Jagwokna ku ba rupiny ceke.
E Yesu de m'utelo wia ber,
E Yesu ma Jamer.`],
            ],
      },
      {
            id: '45',
            key: "G",
            tempo: "3/4",
            collections: [],
            titles: ["Yesu En e Jarimba", "Jesus is a Friend of Mine"],
            body: [
                  [`Yesu En e (Jarimba x3)
En Esagu utumira ceke do, Yesu En e Jarimba.`],
                  [`Yesu En e (Jabodhna x3)
En Esagu utumira ceke do, Yesu En e Jabodhna.`],
                  [`Yesu En e (Jagwokna x3)
En Esagu utumira ceke do, Yesu En e Jagwokna.`],
                  [`Yesu En e (Jakonyna x3)
En Esagu utumira ceke do, Yesu En e Jakonyna.`],
                  [`Yesu En e (Jakwacna x3)
En Esagu utumira ceke do, Yesu En e Jakwacna.`],
                  [`Yesu En e (Jajukna x3)
En Esagu utumira ceke do, Yesu En e Jajukna.`],
                  [`Yesu En e (Jalarna x3)
En Esagu utumira ceke do, Yesu En e Jalarna.`],
                  [`Yesu En e (Jamerna x3)
En Esagu utumira ceke do, Yesu En e Jamerna.`],
                  [`Yesu En e (Jawarna x3)
En Esagu utumira ceke do, Yesu En e Jawarna.`],
                  [`Yesu wan wafoi dit (wafoi x2)
Kum Iwaruwa ku rimoni m'ucwir,
Wan wamio foc ni Rwoth.`],
            ],
      },
      {
            id: '46',
            key: "Db",
            tempo: "4/4",
            collections: ["IH 161"],
            titles: ["A wufoi Yehova do \n(Zaburi 136)", "Let Him in"],
            body: [
                  [`A wufoi Yehova do, k-u-m e ber.
Mer mi bero pare de be--do mi nja.
Wafoi Rwoth mi rwodhi kpo, warum ire kum e dwong'.
Mer mi bero pare de be--do mi nja`],
                  [`Cinge cwio polo de, dwo--ng' ire.
Ng'om de tic mi cinge re, dwo--ng' ire.
Ceng' ku dwi ku cero kpo cwic ma Rwoth ucwio En.
Mer mi bero pare de be--do mi nja`],
                  [`En m'Egoyo Misiri, alo--ci, man
Ewodho Israel, dwo--ng' ire.
Cinge tek ku bote de, cil m'Epoko Nam Makwar.
Mer mi bero pare de be--do mi nja`],
                  [`Dhanu pare kadhu nam, dwo--ng ire,
Ku wi ng'om m'uthwo ma gwei, dwo--ng' ire.
Farao kud udulne de, Eredho, Enyotho pet.
Mer mi bero pare de be--do mi nja`],
                  [`Woth ma bor i langa re, dwo--ng' ire.
En Etelo Israel ku cin--ge.
Ng'om m'Emio ni aba, en e ng'om ma ber mandha
Mer mi bero pare de be--do mi nja`],
                  [`Mungu poi pi ju ma pwe, dwo--ng' ire.
Aba nuti igi de i ba--ng'e.
Both de nuti kind abidhe, wafoi Mungu dit mandha.
Mer mi bero pare de be--do mi nja`],
            ],
      },
      {
            id: '47',
            key: "Eb",
            tempo: "4/4",
            collections: ["CV 44", "SW 292"],
            titles: ["Kristu uloyo", "A Toi la Gloire"],
            body: [
                  [`Kristu uloyo, dwong' ubed ire nja, pak uromo Kristu,
Yunge nja ku nja. Digidi ma dit ubino,
Malaika pa Rwoth ng'ielo kidi bor cen, bedo de i wie.`, `Kristu uloyo, dwong' ubed ire nja,
Pak uromo Kristu, yunge nja ku nja.`],
                  [`Nen Yesu Kristu, En m'Eloyo tho, En Etho kakawa
En Ubimo mwa. Ju m'uyie ceke wurwei lembene,
Lembe pi Rwoth Yesu kum En m'Eloyo tho`, `Kristu uloyo, dwong' ubed ire nja,
Pak uromo Kristu, yunge nja ku nja.`],
                  [`Kum Yesu nuti Iworo binega ngo, an agene kende
Rwoth mi kwiocwiny. An a kwo ru kude ndhu ku tegone,
Kwona bed'i cinge, pirang'o alwor?`, `Kristu uloyo, dwong' ubed ire nja,
Pak uromo Kristu, yunge nja ku nja.`],
            ],
      },
      {
            id: '48',
            key: "Eb",
            tempo: "2/2",
            collections: ["BA 12 IH", "409 SW 317"],
            titles: ["Wang'a benonoi", "My Faith Looks Up"],
            body: [
                  [`Wang'a benonoi, Rombo mi Kalvari, Mungu Jalar.
Winja kan aberwo, wek dubo para kpo,
Ia m'ubedo col, lwoke dok tar.`],
                  [`Mungu Jakisa dit, ang'ic, dwoka bed tek,
Mungu para. Itho pi dubona, kum mer m'Imara ko.
Mer ma bithum ungo ndhu nja ku nja.`],
                  [`Ka yo bedoko col, an de amaku ol, nyuth ira yo.
Lok mudho dok va ceng', ler cwinya dwoke leng',
Kura, m'ageno In, kud akier do!`],
                  [`Ka can udoko lic, ka cwinya yenyo voc, konya Rwodha.
Kum gwok m'lgwoka ko, lworo binega ngo,
Ting'a i kori, abed beng'i nja.`],
            ],
      },
      {
            id: '49',
            key: "F",
            tempo: "3/4",
            collections: ["BA 9 IH", "19 SW 166"],
            titles: ["Der mi kwo para e Yesu", "Sun of my Soul"],
            body: [
                  [`Der mi kwo para e Yesu Rwoth, imenyo ira y yo mi both.
Lem mi ng'om an ayenyo ngo, egeng'o weng'i ira do.`],
                  [`Ka tic m'atimo ola mandha iting 'o ira ter ma pek.
Apoi pi yom m’Imio ri, kan abibedo i beng'i.`],
                  [`Bed i bang'a ku ba rupiny kpo, kum tek Itie Ikwio cwinya.
Ikura Yesu dieceng' du, In i Mungu, Inindo ngo.`],
                  [`Ka tho bisenda ku can mandha,
Dong' Ibed bang'a Rwoth mi nja.
Yesu Jalar, jol cwinya do, abed i beng'i i polo.`],
            ],
      },
      {
            id: '50',
            key: "Db",
            tempo: "4/4",
            collections: ["TH 271", "SW 190"],
            titles: ["I nindo ma woth para \n(Maranatha: 1 Kor 16:22)", "It is Well with My soul"],
            body: [
                  [`I nindo ma woth para bebedo miero,
I can ma lic Rwoth nuti de.
I woth para ceke Eyero ira:
"Kwiocwiny para romi, woda."
(Kwiocwiny pa Rwodha x2) Abejukra i Rwoth ku ba saa.`],
                  [`Ka Jok ubebidha, masendi nuti de,
Wia kud uwil pi mae: ya Kristu beneno ba ng'ic
Para kpo, bero pare de romo ira.
(Bero pa Yesu Rwoth x2) Bero pare de romo ira.`],
                  [`Ka Kristu tho pira Eyeyo gondrina,
Ayio tho pare ira. Abedo museme i cing' Jalarna,
Mak' afoi Yesu Rwoth nja ku nja.
(Foyofocni Jalar x2) Mak' afoi Jalarna nja ku nja.`],
                  [`Kawono akio kum Rwoth bidwogo rek,
Jupare biwinjo dwande. Rwoth Yesu biloro
Nicoko juyic, "Maranatha" bin pio, Rwodha.
(Bin Rwodha x2) "Marantha" bin pio, Rwodha.`],
            ],
      },
      {
            id: '51',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 8", "IH 396", "SW 35"],
            titles: ["Yesu Imio kwo ira", "Lead me to Calvary"],
            body: [
                  [`Yesu Imio kwo ira, dwong' ubed iri nja.
Keth apoi piri ku ba saa, nyuth ira Kalvari.`, `Keth apoi pi Gethsemane, keth apoi de pi can peri.
Man keth apoi pi mer peri, nyuth ira Kalvari.`],
                  [`Liel ma ni cana nyutho de, ka ma juyikoi.
Jukur mi polo tundo be, gigwoko avuji.`, `Keth apoi pi Gethsemane, keth apoi de pi can peri.
Man keth apoi pi mer peri, nyuth ira Kalvari.`],
                  [`Ayenyo Rwoth abin beng'i ku giramia de.
Kwij tho uthum, Ivoyo liel kuca wi Kalvari.`, `Keth apoi pi Gethsemane, keth apoi de pi can peri.
Man keth apoi pi mer peri, nyuth ira Kalvari.`],
                  [`Keth atim gin m'Iyenyo ri, i nindona ceke.
Keth alub toki ku ba ceng', nyuth ira Kalvari.`, `Keth apoi pi Gethsemane, keth apoi de pi can peri.
Man keth apoi pi mer peri, nyuth ira Kalvari.`],
            ],
      },
      {
            id: '52',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 15", "IH 99", "SW 236"],
            titles: ["Rwodha, ng'wek kwen", "Break the Bread of Life"],
            body: [
                  [`Rwodha, ng'wek kwen mi kwo, ng'wek ira tin,
Calu Ing'weko ninde con dhu nam.
Lembe m'ubedo kwo, ayenyo In,
Andha Yesu avani nega dit.`],
                  [`Rwodha, nyai lemandha, nyai ia tin,
Calu inyayu kwen ni dhanu con.
Ebilund gonya k’i mudho ma bi,
Lembe biketh' abed ma cwinya kwi.`],
                  [`In de i kwen mi kwo, ira Rwodha.
Lembe peri ma leng e m'ulara,
M'uketh abedo kwo de nja ku nja,
Yesu Kristu ma lem mi kwo, Rwodha.`],
            ],
      },
      {
            id: '53',
            key: "D",
            tempo: "3/4",
            collections: ["TH 27", "SW 143"],
            titles: ["Mungu In Itelo wia", "Guide me O Thou Great Jehovah"],
            body: [
                  [`Mungu In Itelo wia kan awoth'i ng'om keni.
An a ng'ic, In i won tego, gwoka ndhu ku tegoni.
(Kwen mi polo, Yesu En e kwen mi kwo x2)`],
                  [`Pi mi kwo de ai i beng'i, rieu binega kendo ngo.
I yo ceke Yesu kura, Ebitera i polo.
(I Jalarna, uma ndhu ku beroni x2)`],
                  [`Kan akadhu kud i longro meni tipopiny mi tho,
In i karacelo kuda ketho lworo nega ngo.
(Rwoth mi bero, abipaku nyingi nja x2)`],
            ]
      },
      {
            id: '54',
            key: "Ab",
            tempo: "4/4",
            collections: ["IH 347", "SW 227"],
            titles: ["An a peri Rwoth", "I am Thine O Lord"],
            body: [
                  [`An a peri Rwoth, dwendi winjre mit kum Iweco pi merni.
An ayeny' Inyai yioyic ira keth acor i kumi dri.`, `Tela (ceng'ni x2) vuti Rwoth 
Keth apoi pi tho peri,
Tela (ceng'ni x2) vuti Rwoth,
Ceng'ni ka ma rimbi cwir.`],
                  [`Dong' Ikoya tin ya atim iri, konya Rwoth ku beroni.
Keth ageni ndhu wang'a nen beng'i, man atim ru ka cwinyi.`, `Tela (ceng'ni x2) vuti Rwoth 
Keth apoi pi tho peri,
Tela (ceng'ni x2) vuti Rwoth,
Ceng'ni ka ma rimbi cwir.`],
                  [`Tek abino Rwoth, In Ikwera ngo kan arum i weng'i dwe.
Wec mwa bedo mit man ekonya dit, kum Inyayu bedopwe.`, `Tela (ceng'ni x2) vuti Rwoth 
Keth apoi pi tho peri,
Tela (ceng'ni x2) vuti Rwoth,
Ceng'ni ka ma rimbi cwir.`],
                  [`Karamb ng'eyo merni uvoya Rwoth ma k'aneno weng'i ngo.
Man anyong'ani sagu ng'eyong'ec, ebing'eire beng'i cu.`, `Tela (ceng'ni x2) vuti Rwoth 
Keth apoi pi tho peri,
Tela (ceng'ni x2) vuti Rwoth,
Ceng'ni ka ma rimbi cwir.`],
            ]
      },
      {
            id: '55',
            key: "F",
            tempo: "3/4",
            collections: ["HSS 563"],
            titles: ["Andha Jalar Rwoth Yesu tho \n(Isaya 53:5-11; Rum 12:1)", "O Lord, Remember Me"],
            body: [
                  [`Andha Jalar Rwoth Yesu tho, Ubimo sendre dit.
Jutong'o lero i kume junyayu rem de dit.`],
                  [`Esendre ni kum gondri mwa, kier mwa Eyeyo re.
Ni kum goc pare wacangu, wan ma waromo nyoth.`],
                  [`Ka Yesu tho kakawa con, Ealu dhoge ngo.
Jukabe woko kud i ng'om kum kier mwa ni wie.`],
                  [`Ebedo ber ni Mungu ya Enyai rem i Wode.
Enyayu can i kume re, Wod woro cili tho.`],
                  [`Wa rombe pare m'Ebodho, watim ang'o ire?
Wamira ire, wabed leng', watim yeny pare cu.`],
            ]
      },
      {
            id: '56',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 59", "IH 453", "SW 253"],
            titles: ["Ceng' ma pidoic udieng'o cwinyi", "Tell it to Jesus"],
            body: [
                  [`Ceng' ma pidoic udieng'o cwinyi (kwai Yesu konyi x2)
Cwinyi ringo rr kum lembe moko kwai Yesu konyi, gene.`, `(Kwai Yesu konyi x2) e Jamer mandhandha.
Jakony mange mbe ma ro ku Yesu, kwai Yesu konyi, gene.`],
                  [`Can unegi, man piweng'i oi brr, (kwai Yesu konyi x2)
Kud ilwor ki, ento yie kende, kwai Yesu konyi, gene.`, `(Kwai Yesu konyi x2) e Jamer mandhandha.
Jakony mange mbe ma ro ku Yesu, kwai Yesu konyi, gene.`],
                  [`Cwinyi miel e lworo de benegi, ,(kwai Yesu konyi x2)
Dubo nyayu lewic dit i weng'i, kwai Yesu konyi, gene.`, `(Kwai Yesu konyi x2) e Jamer mandhandha.
Jakony mange mbe ma ro ku Yesu, kwai Yesu konyi, gene.`],
                  [`Tek ilworo tho ma ibitho ko, (kwai Yesu konyi x2)
Ko ilar iyie kud i cwinyi, kwai Yesu konyi, gene.`, `(Kwai Yesu konyi x2) e Jamer mandhandha.
Jakony mange mbe ma ro ku Yesu, kwai Yesu konyi, gene.`],
                  [`Tek ithoko voyo lem mi dubo, (kwai Yesu konyi x2)
Som lem pa Rwoth Yesu, ebijuki, kwai Yesu konyi, gene.`, `(Kwai Yesu konyi x2) e Jamer mandhandha.
Jakony mange mbe ma ro ku Yesu, kwai Yesu konyi, gene.`],
            ]
      },
      {
            id: '57',
            key: "G",
            tempo: "3/2",
            collections: ["BA 66", "SSS 493", "SW 310"],
            titles: ["Athang'u cinga beng'i Rwoth", "I Do Believe"],
            body: [
                  [`Athang'u cinga beng'i Rwoth dieceng' ku diewor bu!
Aywak ba ng'a tek Ikuna, Yehova won tego?`, `(Ayio do x2) ya Yesu tho pira.
Rimbe m'ucwir wi Kalvari belonyo gondrina.`],
                  [`Juthumo nyathi romboni m'Ing'olo iwa con.
Apoi pi kadhukuwijo ketho waboth ni tho.`, `(Ayio do x2) ya Yesu tho pira.
Rimbe m'ucwir wi Kalvari belonyo gondrina.`],
                  [`Iwinjo ywak mi dhoga de kum can m'utima dit.
Imia calku lonyonini kum Jalar Yesu.`, `(Ayio do x2) ya Yesu tho pira.
Rimbe m'ucwir wi Kalvari belonyo gondrina.`],
            ]
      },
      {
            id: '58',
            key: "G",
            tempo: "6/4",
            collections: ["BA 75", "IH 143", "SW 318"],
            titles: ["Mungu lembe tuc", "Even me"],
            body: [
                  [`Mungu lembe tuc i bang'a pi mugisa peri de.
Ma Imioni juperi, ko Imie ira le.
Ira le, ira le, ko Imie ira le.`],
                  [`Kud ikuna Mungu Wegwa, an a rac, akier de swa.
Bed ku kisa dit i kuma kan atuco dubona.
Dubona, dubona, kan atuco dubona.`],
                  [`Jalar Yesu kud Iweka, an ajengra kumi ki.
An ayenyo bero peri, kum Itho wi Kalvari.
Kalvari, Kalvari, kum Itho wi Kalvari.`],
                  [`Mer pa Mungu, mer ma leng' kwe,
Rimb Jalar ma pire tek.
Bero peri nen i wothna, kan alubo toki pwe.
Toki pwe, toki pwe, kan alubo toki pwe.`],
            ]
      },
      {
            id: '59',
            key: "F",
            tempo: "6/8",
            collections: ["BA 76", "IH 62", "SW 33"],
            titles: ["Yesu abed ceng'ni", "Jesus Keep Me Near"],
            body: [
                  [`Yesu abed ceng'ni In, ceng'ni rimbi keca,
M'ucwir con ni dhanu yu, kulo mir alwoka.`, `Ceng'ni In, ceng'ni In, abed ndhu the tiendi.
Cil i ceng' m'atugo woth m'aci ko i beng'i.`],
                  [`Piny i ng'om a jawirok, kisa peri nwang'a.
In m'i cero jobi Iwok In Irienyi wang'a.`, `Ceng'ni In, ceng'ni In, abed ndhu the tiendi.
Cil i ceng' m'atugo woth m'aci ko i beng'i.`],
                  [`Ceng'ni In i rombona. In m'Itho kakara.
Kony awoth ma ber andha, cil i ceng' tho para.`, `Ceng'ni In, ceng'ni In, abed ndhu the tiendi.
Cil i ceng' m'atugo woth m'aci ko i beng'i.`],
                  [`Yesu, abed ceng'ni In kara In Ikonya.
Awoth ber ku ba rupiny, ram atund ko kuca.`, `Ceng'ni In, ceng'ni In, abed ndhu the tiendi.
Cil i ceng' m'atugo woth m'aci ko i beng'i.`],
            ]
      },
      {
            id: '60',
            key: "Bb",
            tempo: "6/8",
            collections: ["BA 77", "IH 380", "SW 247"],
            titles: ["Mungu biyepo cwiny", "There Shall Be Showers"],
            body: [
                  [`Mungu biyepo cwiny dhanu, Eng'olo lembene con.
Ju ma gigalu bipoi ndhu, e calu koth m'ubeton.`, `Koth Ebicoro, kum cwinywa tal calu ng'om.
Ng'om m'uthwo kau man ekak de,
Eketho cwinywa dok yom.`],
                  [`Mungu biyepo cwiny dhanu, nyinge m'ucidre bilony,
Man Ebidwokowa leng' njwa, ni cilo m'ucidowa.`, `Koth Ebicoro, kum cwinywa tal calu ng'om.
Ng'om m'uthwo kau man ekak de,
Eketho cwinywa dok yom.`],
                  [`Mungu biyepo cwiny dhanu, nyo Ebicore ndhu tin.
Tipo ma nyen Ebimio, kier mwa juguro kor yen.`, `Koth Ebicoro, kum cwinywa tal calu ng'om.
Ng'om m'uthwo kau man ekak de,
Eketho cwinywa dok yom.`],
            ]
      },
      {
            id: '61',
            key: "Eb",
            tempo: "9/8",
            collections: ["BA 80", "IH 422", "SW 240"],
            titles: ["Dong' akwai Yesu", "I Must Tell Jesus"],
            body: [
                  [`Dong' akwai Yesu kum lenmbe para,
A kenda ebicoprena ngo.
Ka ng'om usaga Yesu bilara, Yesu bilara Yesu Kristu.`, `(Dong' akwai Yesu x2) a kenda ebicoprena ngo.
(Dong' akwai Yesu x2) Yesu bilara, Yesu Kristu.`],
                  [`Dong' akwai Yesu pi can m'unega, En e jarimba.
Eriemo can. Tek an apenje, En de bikonya.
Yesu ni bang'a Ebijuka.`, `(Dong' akwai Yesu x2) a kenda ebicoprena ngo.
(Dong' akwai Yesu x2) Yesu bilara, Yesu Kristu.`],
                  [`Con a jadubo, ketho arwinyo,
Jok de ebidha ku lem mi ndra.
Dong' akwai Yesu, e jatel wia, Yesu bikura, Yesu Kristu.`, `(Dong' akwai Yesu x2) a kenda ebicoprena ngo.
(Dong' akwai Yesu x2) Yesu bilara, Yesu Kristu.`],
            ]
      },
      {
            id: '62',
            key: "G",
            tempo: "4/4",
            collections: ["BA 81", "H 435", "SW 149"],
            titles: ["Jarimbwa mbe ro ku Jalar", "No Not One"],
            body: [
                  [`Jarimbwa mbe ro ku Jalar Yesu tak de mbe, tak de mbe
Ng' atu mange mbem'ulwoko cwinywa, tak de mbe, tak de mbe`, `Yesu ng' eyo pi can mwa ceke, Ebikonyowa i rundi kpo.
Jarimbwa mbe ro ku En ma leng' kwe, tak de mbe, tak de mbe`],
                  [`Jarimbwa mbe ro ku En ma leng' kwe, tak de mbe, tak de mbe
Jarimbwa mbe ro ku En ma ming' de, tak de mbe, tak de mbe`, `Yesu ng' eyo pi can mwa ceke, Ebikonyowa i rundi kpo.
Jarimbwa mbe ro ku En ma leng' kwe, tak de mbe, tak de mbe`],
                  [`Jakristu moko de mbe m'Ekuno, tak de mbe, tak de mbe
Ng'atu m'uyie de mbe m 'Eriemo, tak de mbe, tak de mbe`, `Yesu ng' eyo pi can mwa ceke, Ebikonyowa i rundi kpo.
Jarimbwa mbe ro ku En ma leng' kwe, tak de mbe, tak de mbe`],
                  [`Gin moko mbe ro ku Jalar Yesu, tak de mbe, tak de mbe
Mer moko mbe ro ku mer pa Mungu, tak de mbe, tak de mbe`, `Yesu ng' eyo pi can mwa ceke, Ebikonyowa i rundi kpo.
Jarimbwa mbe ro ku En ma leng' kwe, tak de mbe, tak de mbe`],
            ]
      },
      {
            id: '63',
            key: "A",
            tempo: "9/8",
            collections: ["BA 82", "SW 225"],
            titles: ["An amio iri Rwoth", "Take My Life"],
            body: [
                  [`An amio iri Rwoth jukupiny m'abedo ko,
An ku lonyo para kpo gam maeni, jole do.`],
                  [`Tic m'atimo iri de, tiend' ario ku cinga de.
Dwanda bende, yike do, keth apak Jalarna cu.`],
                  [`Nindo para m'ani ng'om, kud anyothe calu con.
Atuc lembanyong'a ber keth anyeb juwada lwar.`],
                  [`Cal ku yeny m'ayenyo ngo, ento cal' Iyenyo ri.
Pidoicna dwoke nyen, cwinya de bed ot maleng'.`],
                  [`Kwona ceke peri Rwoth, rimbi dwoka lonyoni.
Kwona ceke peri Rwoth, a jamiru peri do.`],
            ]
      },
      {
            id: '64',
            key: "D",
            tempo: "6/8",
            collections: ["BA 84", "IH 30", "SW 244"],
            titles: ["Akoyo nindo moko ndhu", "Sweet Hour of Prayer"],
            body: [
                  [`Akoyo nindo moko ndhu, nirwo m'arum ko ni Rwoth Mungu.
M'acopo ting'o lembe kpo, akel apedhe i wang'e ndhu.`, `Arum the kom mi beroni, ajolo kisa peri de.
Ku tegocwiny akweyi do, Ikonya nindo mi ndiba kpo.`],
                  [`Tek can usagu cwinya kpo, Ikwio cwinya ku beroni.
Ang'eyo ngo ram akweyi, eyikre cu ni kum Tiponi.`, `Arum the kom mi beroni, ajolo kisa peri de.
Ku tegocwiny akweyi do, Ikonya nindo mi ndiba kpo.`],
                  [`Cor bang'a Mungu konya tin, acoro ceng'ni kum beroni.
Adundena upong' andha, ku yic m'ayio ko Munguna.`, `Arum the kom mi beroni, ajolo kisa peri de.
Ku tegocwiny akweyi do, Ikonya nindo mi ndiba kpo.`],
            ]
      },
      {
            id: '65',
            key: "Ab",
            tempo: "3/4",
            collections: ["BA 85", "IH 345", "SW 182"],
            titles: ["Ayeny awoth i yo ma cu", "Higher Ground"],
            body: [
                  [`Ayeny awoth i yo ma cu ku ba rupiny wakudi Rwoth.
Acidh i wang'a ndhu ku rwo, Ikura kara kud avoc.`, `Rwoth peya malu ceng'ni In acung i ng'eti ka
maleng'.
Ka ma mugisa sagu kpo, ayenyo aidh malu do.`],
                  [`Ayenyo ngo adong' kakae, abidhe dit, masendi kwa.
Jumoko foyo ng'om mae, andre ayeny aidh malu.`, `Rwoth peya malu ceng'ni In acung i ng'eti ka
maleng'.
Ka ma mugisa sagu kpo, ayenyo aidh malu do.`],
                  [`Ayeny' acir abidhe kpo, atim tic ber avoi dubo.
Gin ma tek Mungu nyolo nyen, eloyo ng'om k'awanyane.`, `Rwoth peya malu ceng'ni In acung i ng'eti ka
maleng'.
Ka ma mugisa sagu kpo, ayenyo aidh malu do.`],
                  [`Ayeny' atund i ng'om ma nyen kar anen dwong' pa
Rwoth maleng'. Atundo ngo kum berona, endre kum kwo
m'Emiona`, `Rwoth peya malu ceng'ni In acung i ng'eti ka
maleng'.
Ka ma mugisa sagu kpo, ayenyo aidh malu do.`],
            ]
      },
      {
            id: '66',
            key: "Ab",
            tempo: "6/8",
            collections: ["BA 86", "IH 457", "SW 158"],
            titles: ["Kud iyi abidhe", "Yield Not to Temptation"],
            body: [
                  [`Kud iyi abidhe pa jadegini, gut ni wonabali, ebiringoi.
Cor ndhu i vut Yesu Ecor i vuti,
Wukude wuvoyo abidhene vi.`, `Kwai Jalar ya Ekonyi ivoi ng'atu m'ubidhi.
Yesu nuti bigwoki, ndhu ku tegone En.`],
                  [`Der ribre nenedi ku mudho mi ng'om?
Man bedopwe ribre ngo ku camuco.
Bed ku kweri giri ni lem mi tarwang',
Yung Mungu i kumi, woth i lemandha.`, `Kwai Jalar ya Ekonyi ivoi ng'atu m'ubidhi.
Yesu nuti bigwoki, ndhu ku tegone En.`],
                  [`Ni ng'atu m'uloyo Rwoth mio jamker,
Man ke jubiyunge ku jamkermiwic.
Nen ndhu yo ba Yesu, gen tegone ndhu,
Aloci ni bang'wa wan waku Yesu.`, `Kwai Jalar ya Ekonyi ivoi ng'atu m'ubidhi.
Yesu nuti bigwoki, ndhu ku tegone En.`],
            ]
      },
      {
            id: '67',
            key: "F",
            tempo: "4/4",
            collections: ["BA 87", "IH 384", "SW 235"],
            titles: ["Yesu Kristu e jarimbwa", "What a Friend"],
            body: [
                  [`Yesu Kristu e jarimbwa, dubo mwa Eyeyo re.
Mungu wacu ya wakwaye, gin m'wayenyo i bang'e.
Kwiocwiny urwinyo iwa, can usendowa mumbe,
Wiwa wil nirwo ni Mungu ma waparu pire ngo.`],
                  [`Ndiba kud abidhe nuti ku masendi dit mandha.
Ento Mungu juko cwinywa tek warwo i bang'e nja.
Ng'atu ma e rom ku Yesu nwangre ngo i ng'om mae,
En Eng'eyo ng'ic mwa ceke, wakwai tego i bang'e.`],
                  [`Ter ma pek unuro cwinywa, tego mwa dong' nok ma gwei.
Tipo pare e jajuk mwa, mak' Etel wiwa i rwo.
Tek jurimbwa wanjri kumwa
Dong' waywak ni Mungu mwa.
Ebigwakuwa ku bote, Ebijuko cwinywa nja.`],
            ]
      },
      {
            id: '68',
            key: "Eb",
            tempo: "9/4",
            collections: ["BA 88", "IH 438", ""],
            titles: ["Tim ve Iyenyo, Mungu", "Have Thine own way"],
            body: [
                  [`Tim ve Iyenyo, Mungu Rwodha! An a ulobo m'Icwio ri.
Winya, Icwia ku bodhoni, kan arum dwe the tego peri.`],
                  [`Tim ve Iyenyo Mungu Rwodha! Nen yor i ia, mul ia do.
Kan Ilwok ia adok tar pu, arum ajwigra the cingi do.`],
                  [`Tim ve Iyenyo Mungu Rwodha!
Nen ram a ng'ic ko, ko Iyonya do.
Tegona ceke ai i beng'i, keth cwinya dok tek ku tegoni.`],
                  [`Tim ve Iyenyo Mungu Rwodha! Bima i kendi an a jendi.
Roma ku Tiponi ma jajuk, nen abekuro the tiendi yo.`],
            ]
      },
      {
            id: '69',
            key: "Ab",
            tempo: "3/4",
            collections: ["SSS 307"],
            titles: ["Mungu nuti kindwa", "God is here & that to Bless"],
            body: [
                  [`Mungu nuti kindwa eni ndhu ku tego Tipone.
Tek wakwaye Ebiketho polo cor koth wiwa tin.`, `Wek ebin wakweyi Mungu, cor mugisa wiwa tin.
Wabekuro, wabekuro Mungu mwa yep cwinywa do.`],
                  [`Mungu nuti kindwa eni, i kind cokri mwa mae.
Ava yepocwiny ni kumwa, kud Iwek ya cwinywa ai.`, `Wek ebin wakweyi Mungu, cor mugisa wiwa tin.
Wabekuro, wabekuro Mungu mwa yep cwinywa do.`],
                  [`Mungu nuti kindwa eni, dong' wakwai ku ripocwiny.
Mac mi mer uwang' i iwa, ketho gin ma rac urwiny.`, `Wek ebin wakweyi Mungu, cor mugisa wiwa tin.
Wabekuro, wabekuro Mungu mwa yep cwinywa do.`],
                  [`Jalar winjwa ka wakweyi, ka warum the tiendi ling'.
Wan wayio Tipo romwa, ya Edwokwa wadok leng'.`, `Wek ebin wakweyi Mungu, cor mugisa wiwa tin.
Wabekuro, wabekuro Mungu mwa yep cwinywa do.`],
            ]
      },
      {
            id: '70',
            key: "Ab",
            tempo: "4/4",
            collections: ["HW 199", "SSS 291", "SW 252"],
            titles: ["Wadaru paku nyingi", "Saviour Again to Thy"],
            body: [
                  [`Wadaru paku nyingi Mungu mwa,
Man warwo iri ku nying Rwoth Jalar.
Meni wapokra mi mugisani warum the tiendi miwa
kwiocwiny.`],
                  [`Ka wan walal ma ceng' uyenyo mwony,
Konj kwiocwiny i wiwa i Jadwong'.
Gwokwa pi wec tek dhogwa yenyo kier,
Cimwa pi dubo kara wawoth ber.`],
                  [`Kwi cwinywa tek ruvwa wok ku diewor.,
Ineno ceke, gwokwa, ku walwor.
Wan wa nyithindho ma Inyolo In,
In Tbikurowa cil i rupiny.`],
                  [`Kwo mwa de ceke peri In i Rwoth,
Romwa ku tego wacir lembe kot.
Ka tic bithum ma rundi mwa bijik,
Ku kwo ma nja wamond i kwiocwiny.`],
            ]
      },
      {
            id: '71',
            key: "bb",
            tempo: "3/4",
            collections: ["IH 315", "SW 118"],
            titles: ["Cana mwa ma tek mi nja", "Rock of Ages"],
            body: [
                  [`Cana mwa ma tek mi nja ma jung'enyo pira dra.
Rimoni ma yang ucwir, ecwir hau pi dhanu kpo.
Rimbe ruco dubona, man edwoka leng' ma njwa.`],
                  [`Kadok can unega dit, kadok tic atimo dit,
Meni ruco dubo ngo In i kendi 'laru jo.
An aromo both de ngo, mak' amok i kumi ki.`],
                  [`Rundi para calu lum, kadhu pio e kwona thum.
Abicidh' i polo ndhu, abineno weng'i bu.
Cana mwa ma tek mi nja ma jung'enyo pira dra.`],
            ]
      },
      {
            id: '72',
            key: "A",
            tempo: "3/4",
            collections: ["BA 136", "IH 382", "SW 241"],
            titles: ["Rwoth Yesu ayenyo", "Whiter than Snow"],
            body: [
                  [`Rwoth Yesu ayenyo abed leng' ma njwa,
Ayenyo Ibed i cwinya nja ku nja
Bai gin ma wilo wia i kumi do,
Lwok ia keth abed ma tar sagu pei.`, `Tar sagu pei, ma tar sagu pei,
Lwok ia keth abed ma tar sagu pe.`],
                  [`Rwoth Yesu par pira kawono akwei,
Gin m'uwilo wia konya ku kwere.
An amira iri ku ng'eyong'ec kpo,
Lwok ia keth abed ma tar sagu pei`, `Tar sagu pei, ma tar sagu pei,
Lwok ia keth abed ma tar sagu pe.`],
                  [`Rwoth Yesu kum eni akweyi mandha,
Akuro the tiendi ku cwinya ma lwe.
Aneno rimoni m'Ilwoka ko do,
Lwok ia keth abed ma tar sagu pei`, `Tar sagu pei, ma tar sagu pei,
Lwok ia keth abed ma tar sagu pe.`],
                  [`Rwoth Yesu akwei, arum iri dwe,
Mi ira adunde mi dhanu ma nyen,
Kum ju ma gikweyi, Ikwerogi ngo,
Lwok ia keth abed ma tar sagu pei`, `Tar sagu pei, ma tar sagu pei,
Lwok ia keth abed ma tar sagu pe.`],
            ]
      },
      {
            id: '73',
            key: "F",
            tempo: "6/8",
            collections: ["BA 140", "IH 374", "SW 181"],
            titles: ["Kur yo i wang' Yesu", "Take Time to be Holy"],
            body: [
                  [`Kur yo i wang' Yesu, inwang' bedopwe,
Rwo ire areri som Lem pare dit.
Mar bende jupare, kony ju ma gi ng'ic,
Kwai Rwoth mi mugisa man wii kud uwil.`],
                  [`Kur yo i wang' Yesu wek lembe mi ng'om,
Rwo nyalwe i bang'e Ebiwinjoi.
Iribri ku Yesu ibed cal kude,
I tic peri ceke ayine binen.`],
                  [`Kur yo i wang' Yesu Etel iri yo,
Kud iringi wang'e m'Etelo wii ngo.
I anyong'a, can de, ilub ng'ei Rwodhi
Man, nen tel ba Yesu, gen lem pare cu.`],
                  [`Bed yo i wang' Yesu, kur yo i cwinyi,
Wek pidoic ceke the ng'ol pare do.
Tipone biteri i thuth mi merne,
Iyikri pi bedo cil i polo de.`],
            ]
      },
      {
            id: '74',
            key: "D",
            tempo: "4/4",
            collections: ["BA 155", "IH 165"],
            titles: ["Tel wiwa Jawipiro", "Lead on O King"],
            body: [
                  [`Tel wiwa Jawipiro wamondu ndhu i lwiny,
Wakiedu mony wakudu, wacir ku tegocwiny.
Iponjowa ku rieko, Imio tego peri,
Kawono Jawipiro, cak wer, waci kudu.`],
                  [`Tel wiwa Jawipiro, wakied ku dubo kpo.
Wavoye ku leng' cwinywa, cil ma ng'om bikwio.
Anyego mwa ku kum ungo, ento ku Rwoth mi mudho,
Ku yioyic ku rwo de, wavoyo jakwor mwa.`],
                  [`Tel wiwa Jawipiro, waci ma lworo mbe.
Tek wan waneno weng'i e cwinywa doko tek.
I wiwa yen m'athara, der pare menyowa,
Jamkermiwic wanwang'u ba jadit mi wiwa.`],
            ]
      },
      {
            id: '75',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 156", "SW 248"],
            titles: ["Mungu ng'olo i lem", "He Will Answer Prayer"],
            body: [
                  [`Mungu ng'olo i lem pare ya Elingo tek warwo.
Ebiwinjo ywak mwa ceke kud adieng'acwiny mwa kpo.`, `Mungu winjo rwo mwa do, Ebidwoko wang'e kpo.
Yie kum Eromo ceke, Ebitimo, yie ndhu.`],
                  [`Ku wakwai ku cwiny ma jiji maku ya wagene ndhu.
Tipo gire kwayu piwa kara rwo mwa winjre cu.`, `Mungu winjo rwo mwa do, Ebidwoko wang'e kpo.
Yie kum Eromo ceke, Ebitimo, yie ndhu.`],
                  [`Mungu winjo penji ceke dok enok kadok elwar.
Tek wakwayu ndhu ku nyinge kwayukwac m'areri kwa.`, `Mungu winjo rwo mwa do, Ebidwoko wang'e kpo.
Yie kum Eromo ceke, Ebitimo, yie ndhu.`],
                  [`Gin m'urany ku gin m'unyothre tere ndhu iyer ni Rwoth.
Ebijuki ber i canne kum Eng'eyo lembe kpo.`, `Mungu winjo rwo mwa do, Ebidwoko wang'e kpo.
Yie kum Eromo ceke, Ebitimo, yie ndhu.`],
            ]
      },
      {
            id: '76',
            key: "Db",
            tempo: "4/4",
            collections: ["BA 160", "CH 541", "CV 286", "SW 303"],
            titles: ["Wabinendra ndhu i tiend Jalar", "God Be With You"],
            body: [
                  [`Wabinendra ndhu i tiend Jalar,
Ka warum nirwo i bang'e.
The komker mi bero pare, wabinendra ndhu i tiend Jalar.`, `Mungu kur kindwa, Ekur kindwa,
Cil i ceng' m'warombo tiend Jalar.
Mungu kur kindwa, Ekur kindwa,
Wabinendra ndhu i tiend Jalar.`],
                  [`Wabinendra ndhu i tiend Jalar,
Bed museme ku the bombe,
Ebikuri calu rombe, Wabinendra ndhu i tiend Jalar`, `Mungu kur kindwa, Ekur kindwa,
Cil i ceng' m'warombo tiend Jalar.
Mungu kur kindwa, Ekur kindwa,
Wabinendra ndhu i tiend Jalar.`],
                  [`Wabinendra ndhu i tiend Jalar,
Ebiyeyi ndhu ku bote,
Ibibedo yo i kore, Wabinendra ndhu i tiend Jalar`, `Mungu kur kindwa, Ekur kindwa,
Cil i ceng' m'warombo tiend Jalar.
Mungu kur kindwa, Ekur kindwa,
Wabinendra ndhu i tiend Jalar.`],
                  [`Wabinendra ndhu i tiend Jalar,
Nindo peri kpo ni cinge
Cil m'Ecoki ko i bang'e, Wabinendra ndhu i tiend Jalar`, `Mungu kur kindwa, Ekur kindwa,
Cil i ceng' m'warombo tiend Jalar.
Mungu kur kindwa, Ekur kindwa,
Wabinendra ndhu i tiend Jalar.`],
            ]
      },

      {
            id: '77',
            key: "G",
            tempo: "6/4",
            collections: ["BA 161", "IH 134", "SW 242"],
            titles: ["Bed i kuma Tipo Mungu", "Fill Me Now"],
            body: [
                  [`Bed i kuma Tipo Mungu, ko Iyik wang' cwinya tin.
Rom i ia Tipo Mungu, bin kawono roma tin.`, `Roma tin, roma tin
Yesu bin, Iroma tin.
Rom i ia Tipo Mungu, bin kawono roma tin.`],
                  [`Tin Icopo roma, Rwodha, ram Iroma ko loya.
Pidoicna yenyo voya, bin kawono roma In.`, `Roma tin, roma tin
Yesu bin, Iroma tin.
Rom i ia Tipo Mungu, bin kawono roma tin.`],
                  [`Tekra mbe, a yereyere, dong' arum the tiendi dwe.
Tiponi ma nja ku nja de, mina tego, roma tin.`, `Roma tin, roma tin
Yesu bin, Iroma tin.
Rom i ia Tipo Mungu, bin kawono roma tin.`],
            ]
      },
      {
            id: '78',
            key: "Ab",
            tempo: "6/8",
            collections: ["IH 356", "SW 180"],
            titles: ["Keth ang'ei mange pi Yesu", "More about Jesus"],
            body: [
                  [`Keth ang'ei mange pi Yesu kar' anyai lem mi berone.
Mange pi lem m'ubodho jo, mange pi mer m'uketh' Etho.`, `Lem Mange pi Yesu, lem Mange pi Yesu
Mange pi lem m'ubodho jo
Mange pi mer m'uketh' Etho.`],
                  [`Keth ang'ei kendo pi Yesu, mange pi yeny m'Eyenyo re.
Japonjina, Tipo Maleng', Nyuth ira lembe pi Kristo.`, `Lem Mange pi Yesu, lem Mange pi Yesu
Mange pi lem m'ubodho jo
Mange pi mer m'uketh' Etho.`],
                  [`Keth angei mange pi Yesu, wabed wawec ru wakude.
Awinjo lembagorane, adwoko lembene ire.`, `Lem Mange pi Yesu, lem Mange pi Yesu
Mange pi lem m'ubodho jo
Mange pi mer m'uketh' Etho.`],
                  [`Ang'ei pi Yesu Rwoth ma dit lonyo mi polo pare pet.
Mange pi dwogo pa Yesu, man bim mn'Ebimo ko ng'om yu.`, `Lem Mange pi Yesu, lem Mange pi Yesu
Mange pi lem m'ubodho jo
Mange pi mer m'uketh' Etho.`],
            ]
      },
      {
            id: '79',
            key: "G",
            tempo: "3/4",
            collections: ["BA 172", "IH 340", "SW 221"],
            titles: ["In Iroma ceng' ku ceng", "Close to Thee"],
            body: [
                  [`In Iroma ceng' ku ceng' kpo I Jarimba ma ber dit.
Man i yo m'ucidh' i polo abilubona toki.`, `Ceng'ni In, ceng'ni In,
Ceng'ni In, ceng'ni In,
Iyo ma cidho i polo abilubona toki.`],
                  [`Kadok can de wok i bang'a Yesu nuti ceng'ni an.
Abifoyo In i kendi, wabiwotho wakudi.`, `Ceng'ni In, ceng'ni In,
Ceng'ni In, ceng'ni In,
Iyo ma cidho i polo abilubona toki.`],
                  [`Kadok tho de woki bang'a Yesu nuti ceng'ni an.
Lworo ceke ringo bor cen, jagwokna ni vuta En.`, `Ceng'ni In, ceng'ni In,
Ceng'ni In, ceng'ni In,
Iyo ma cidho i polo abilubona toki.`],
            ]
      },
      {
            id: '80',
            key: "Eb",
            tempo: "2/4",
            collections: ["BA 173", "SW 249"],
            titles: ["Rwo areri", "Don't Stop Praying"],
            body: [
                  [`Rwo areri kum Mungu tie, rwo areri Elingoi.
Lembang'ola elokre ngo, Mungu winjo lem peri kpo.`],
                  [`Rwo areri tek can de tie, rwo areri Epoi piri.
Nyo i weng'i kit canne mbe, Ebikonyi i canne be.`],
                  [`Rwo areri abidhe tie, won abidhe bisendi de.
Yang' esendo Jalar mwa dit, en d'Evoye ku lem pare.`],
                  [`Rwo areri ka cwinyi dieng', rwo areri de kum canpiny.
Mungu neno gin ceke En, gene ndhu bed ku yioyic.`],
                  [`Rwo areri ka kumi lith. Ebijengi i ndiba pet.
Tek iyio ku cwinyi kpo, lem ma tek de bidoko yot.`],
            ]
      },
      {
            id: '81',
            key: "Db",
            tempo: "4/4",
            collections: ["CH 354", "SSS 537", "SW 198"],
            titles: ["Yesu nyutha wang'ayo", "Saviour Lead Me"],
            body: [
                  [`Yesu nyutha wang'ayo, lworo kud unega do.
Tek amok i kumi ki abibedoimerni.`, `Yesu, Yesu dong' Inyutha wang'ayo.
Kud awoth ariri swa, an ayeny' alubi nja.`],
                  [`Abibedo museme, cil i ndiba ceke de.
Cwinya bed i vuti dri kum abibegeno In.`, `Yesu, Yesu dong' Inyutha wang'ayo.
Kud awoth ariri swa, an ayeny' alubi nja.`],
                  [`Yesu e Jakwac ma ber, rombene Eng'eyo kpo.
Ebelwong'o nying'gi de man giwinjo dwande cu.`, `Yesu, Yesu dong' Inyutha wang'ayo.
Kud awoth ariri swa, an ayeny' alubi nja.`],
                  [`Yesu nyutha wang'ayo, cil ma kwona maku ai.
Yo m'akwanyu yo mi kwo, bitera i poloni.`, `Yesu, Yesu dong' Inyutha wang'ayo.
Kud awoth ariri swa, an ayeny' alubi nja.`],
            ]
      },
      {
            id: '82',
            key: "Eb",
            tempo: "4/4",
            collections: ["VT 4"],
            titles: ["Rwoth, pir urwo ku lem", "Just for Today"],
            body: [
                  [`Rwoth, pir urwo ku lem pare akwei ngo,
Cera, kara kud adubi - pi tin kende.`, `Pi tin kende, pi tin kende, Rwodha, gwoka.
Tel wia, pi tin kende.`],
                  [`Keth atim tic kud amora, ku rwo bende
Mi ira berocwiny bende - pi tin kende.`, `Pi tin kende, pi tin kende, Rwodha, gwoka.
Tel wia, pi tin kende.`],
                  [`Kud atim yeny m'ayenyo ra, keth abed wor.
Konya nimira gira dho - pi tin kende.`, `Pi tin kende, pi tin kende, Rwodha, gwoka.
Tel wia, pi tin kende.`],
                  [`Kud ayer lembe moko swa m'uromo ngo,
Cer dendhoga ku wec ma rac - pi tin kende.`, `Pi tin kende, pi tin kende, Rwodha, gwoka.
Tel wia, pi tin kende.`],
            ]
      },
      {
            id: '83',
            key: "Ab",
            tempo: "4/4",
            collections: ["BA 43", "IH 254", "SW 239"],
            titles: ["Kud ikuna Jalar", "Pass Me Not"],
            body: [
                  [`Kud ikuna Jalar Yesu, winj lem para do.
Kan Ikonyo jumange Rwoth, kud ikuna do!`, `Jalar, Yesu, kud ikuna do!
Kan Ikonyo jumange, Rwoth, kud ikuna do!`],
                  [`Ia pido kum lem dubo dong' atuce kpo.
Can unego cwinya ceke, Yesu lara do!`, `Jalar, Yesu, kud ikuna do!
Kan Ikonyo jumange, Rwoth, kud ikuna do!`],
                  [`Tipo peri copo konya ku ng'ic para do.
Etel wia yor i beng'i, Eyik rwona cu.`, `Jalar, Yesu, kud ikuna do!
Kan Ikonyo jumange, Rwoth, kud ikuna do!`],
                  [`Yesu In Ijuko cwinya sagu jumange.
Dong' ageno In i kendi, ng'atu mange mbe.`, `Jalar, Yesu, kud ikuna do!
Kan Ikonyo jumange, Rwoth, kud ikuna do!`],
            ]
      },
      {
            id: '84',
            key: "Ab",
            tempo: "6/8",
            collections: ["IH 371", "SW 251"],
            titles: ["Yab wang'a Rwoth", "Open My Eyes"],
            body: [
                  [`Yab wang'a Rwoth kara anen lembe mandha m'Inyutho ri
Iketh ang'ei thelembene de kara aboth ni dubona.
Cwinya bed yo i weng'i Rwoth, abed ayika niworo
Yab wang'a do mi ira der, Tipo Maleng'.`],
                  [`Yab itha Rwoth kara awinj dwendi m'Iyero ira ngbeng'.
Man kinde ma awinjo dwendi lembe ma swa birwinyo pet.
Cwinya bed yo i weng'i Rwoth, abed ayika niworo.
Yab itha do mi ira der, Tipo Maleng'.`],
                  [`Yab dhoga do kara ayer lembanyong'a ni dhanu yu.
Keth Lembe peri pong' i cwinya ayer ngbeng' ni jumange.
Cwinya bed yo i weng'i Rwoth, abed ayika niworo.
Yab dhoga do, mi ira der, Tipo Maleng'.`],
            ]
      },
      {
            id: '85',
            key: "G",
            tempo: "6/8",
            collections: ["IH 148", "SW 152"],
            titles: ["Ceng'ni ba Munguna", "Nearer my God to Thee"],
            body: [
                  [`Ceng'ni ba Munguna i ng'eti ki,
Tek can binega re, dong' lem moko mbe.
Werna bibed' asu, ceng'ni i ng'et Mungu,
Ceng ni ba Munguna, ceng'ni beng'i ki.`],
                  [`Wothna ariri swa i ng'om ma rac,
Piny ceke mudho kwa ayom the cana.
Lekna bibed' asu ceng'ni ng'et Mungu,
Ceng ni ba Munguna, ceng'ni beng'i ki.`],
                  [`Keth yo maeni nyang' i wang'a tin.
Gin kpo ioro ri ndhu ku kisani.
Malaika gwela ku ceng'ni i ng'et Mungu,
Ceng ni ba Munguna, ceng'ni beng'i ki.`],
                  [`Ka cwinya maku ai, tic para thum,
Ceng', dwi, ku cero de rwinyi wang'a ndhu.
Weja bibed' asu, ceng'ni i ng'et Mungu,
Ceng ni ba Munguna, ceng'ni beng'i ki.`],
            ]
      },
      {
            id: '86',
            key: "G",
            tempo: "3/4",
            collections: ["IH 412", "SW 185"],
            titles: ["Tipo Mungu tel wiwa", "Holy Spirit Faithful"],
            body: [
                  [`Tipo Mungu tel wiwa, In m'Ikonyo dhanu nja.
Peiwa yo yo ku cingwa, wa juwoth i ng'om ma ngbeng'.
Ju m'uvoc gifoyo dit ka giwinjo dwendi mit,
"M'umung' kwe kwe, jawoth bin! Luba, abikobo in".`],
                  [`Jarimbwa m'i ber mandha In m'Ikonyo dhanu nja.
Kud Iwek cwinywa bed mbwang' ka wawira swa i ng'om.
Won abidhe sendowa, cwinywa voc ma geno jwik.
"Dong' imung' yo, jawoth bin! Luba, abikobo in."`],
                  [`Ka tic mwa bedhingo thum, wabekuro yom ma nja.
Gin m'udong' ndhu genogen ma wageno kwo mandha.
Ka wakadhu yo mi tho, wan wajengra kum Jalar.
"Dong' imung yo, jawoth bin! Luba, abikobo in."`],
            ]
      },
      {
            id: '87',
            key: "F",
            tempo: "6/4",
            collections: ["IH 442", "SW 159"],
            titles: ["Yesu i jarimona", "Jesus Lover of my Soul"],
            body: [
                  [`Yesu i jarimona, wek ajeng'i kori In,
Kinde ma jubidha hai, ka Jok senda dit mandha.
Kura In, i Jalarna, cil m'abidhene bithum.
Yabna polo peri ngbeng', jol cwinya beng'i do.`],
                  [`Ka m'aring i ie mbe, cwinya jengre ndhu kumi.
Kud ikuna abed rwa, gwoka, juka In asu.
An ageno para In, konyna kpo ai i beng'i.
Um wia m'ubedo ngbeng' ku tipo mi bombi In.`],
                  [`In i Kristu, Iroma, anweng'i Isagu kpo.
Bodh judubo, ju ma rwa, kei kum jo gwok ju ma kic.
Nyingi leng' man e mandha, a jadubo ma andre.
I won bero mandhandha, an acido a jandra.`],
                  [`Bero kpo ai i beng'i mak' eum dubona kpo.
Rimbi ene yath mandha, dwoka leng Igwoka ndhu.
In i kwo ma dhenyni nja, wek agam dru i beng'i.
Dhenjri ru yor i cwinya, meui ia nja ku nja.`],
            ]
      },
      {
            id: '88',
            key: "Ab",
            tempo: "4/4",
            collections: ["IH 145"],
            titles: ["Yesu, Imara dit", "More Love to Thee"],
            body: [
                  [`Yesu, Imara dit, keth ameri. Winj, aberwo iri,
In i Yesu. Apenjoi kumae keth ameri mandha,
Keth ameri, keth ameri`],
                  [`Yang' con amaru gin mi ng om ceke,
Meni aweke kpo kar' ameri.
Imara dit ma swa, keth ameri mandha,
Keth ameri, keth ameri`],
                  [`Ka can bisenda dit ku lem mi tho,
Gin ma loro ri, akwero ngo.
Konya awer asu, keth ameri mandha,
Keth ameri, keth ameri`],
                  [`Ceng' moko abitho m'aweco ngo,
Lembe m'ayeroni bed ndhu kumae,
In ma Ilara ri, keth ameri mandha,
Keth ameri, keth ameri`],
            ]
      },
      {
            id: '89',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 17", "IH 30", "SW 245"],
            titles: ["Bed i bang'a In i Rwoth", "Abide with Me"],
            body: [
                  [`Bed i bang'a In i Rwoth Munguna,
Ka ceng' umwony e piny uyutho bi.
Ka jukony mange mbe, jajuk de mbe,
In i jajuk ma cu, bedi bang'a.`],
                  [`I saa ma kwo mi kum mae bithum,
Yungri mi ng'om ku dwong'ne bikadhu.
Lokri ma swa mi ng'om ku nyothne de,
In ma Ilokri ngo bed i bang'a.`],
                  [`Rwoth bed i bang'a ku ba ceng' ceke,
Mi ira tego, acir abidhe.
I jatel wia kara awoth pwe,
Dieceng' ku diewor Rwoth bed i bang'a.`],
                  [`Rupiny biwok, dhanu ceke bicer,
Anyong'a nuti i polo ma ber.
Der peri rieny, mudho ceke bithum,
I kwo, i tho, Mungu, bed i bang'a.`],
            ]
      },
      {
            id: '90',
            key: "Bb",
            tempo: "3/4",
            collections: ["TH 64", "SW 173"],
            titles: ["Jalar Yesu tel wia", "Jesus Saviour Pilot Me"],
            body: [
                  [`Jalar Yesu tel wia, kum ang'eyo yoje ngo.
Won abidhe nuti ndhu, en e riek, ewonda du.
In i Yesu Kristu Rwoth tek alubi abiboth.`],
                  [`In Ing'eyo juka In, nwang'u cwinya dieng' ku can.
Nam ku yamu cungo ti, man wavuvu bedo si.
In Ing'eyo telo wic, In i Mungu ma Rucwic.`],
                  [`In i Rwoth mi kwo ku tho keth' Icopo juka yo.
Man i ceng' ma kuma voc, Ibinyutho ira yo.
Ibilwong'a k'i polo, "Kud ilwor, Anuti do."`],
            ]
      },
      {
            id: '91',
            key: "F",
            tempo: "6/8",
            collections: ["IH 142"],
            titles: ["Ndhu Tipo peri", "Thy Holy Spirit"],
            body: [
                  [`Ndhu Tipo peri kende, Rwoth, m'Ecopo loko cwiny.
E tego peri kende Rwoth belwokowa ma leng'.`, `In Tipo mi yic, mi mer, tim tic i kindwa do.
Idwok adundewa dok leng' tin romwa ku tegoni.`],
                  [`Ndhu Tipo peri kende, Rwoth, binyayu mer iwa,
Man Tipo peri calu mac, Eyepo cwinywa pet.`, `In Tipo mi yic, mi mer, tim tic i kindwa do.
Idwok adundewa dok leng' tin romwa ku tegoni.`],
                  [`Ndhu Tipo peri kende, Rwoth, bikonyowa i tic,
E dwande copo jukowa, Ekabu pidoic.`, `In Tipo mi yic, mi mer, tim tic i kindwa do.
Idwok adundewa dok leng' tin romwa ku tegoni.`],
                  [`Ndhu Tipo peri kende, Rwoth, m'Emio beroni,
Ka wabekuro Tiponi, romwa, dwok iwa leng'.`, `In Tipo mi yic, mi mer, tim tic i kindwa do.
Idwok adundewa dok leng' tin romwa ku tegoni.`],
            ]
      },
      {
            id: '92',
            key: "G",
            tempo: "4/4",
            collections: ["SSS 309"],
            titles: ["Yep cwinywa Rwoth", "Revive Thy Work "],
            body: [
                  [`Yep cwinywa Rwoth Jalar, wakuro dwendi ling'.
Ng'ol iwa gin m'lyenyo ri, wayenyo wawoth leng'.`, `Yep cwinywa, Rwoth Jalar, keth tic utimbre ber.
Wek Tipo peri romwa kpo, miwa mugisa do.`],
                  [`Yep cwinywa Rwoth Jalar, yung nyingi edok dwong'.
Rom cwinywa kpo ku lem mi mer, wang' iwa li ve mac.`, `Yep cwinywa, Rwoth Jalar, keth tic utimbre ber.
Wek Tipo peri romwa kpo, miwa mugisa do.`],
                  [`Yep cwinywa Rwoth Jalar, nyuth lembe peri ngbeng'.
Keth thelembe ma ng'eyo tek, ung'eire iwa ber.`, `Yep cwinywa, Rwoth Jalar, keth tic utimbre ber.
Wek Tipo peri romwa kpo, miwa mugisa do.`],
                  [`Yep cwinywa Rwoth Jalar, ku Tiponi ma leng'.
Icer k'i tho wayere cu, wa jumulembene.`, `Yep cwinywa, Rwoth Jalar, keth tic utimbre ber.
Wek Tipo peri romwa kpo, miwa mugisa do.`],
            ]
      },
      {
            id: '93',
            key: "F",
            tempo: "4/4",
            collections: ["IH 316", "SW 224"],
            titles: ["Kpo bed iri In i Yesu", "All for Jesus"],
            body: [
                  [`Kpo bed iri In i Yesu tegona m'Iwaru ri,
Tic ku pidoia bende, nindo para ku saa de.
(Kpo bed iri In i Yesu, nindo para ku saa de x2)`],
                  [`Keth cinga tim tic m Inyutho, Iketh tienda de ring pio.
Wek wang'a nen In i kendi, man keth leba de pekI.
(Kpo bed iri In i Yesu, keth leba bed upeki x2)`],
                  [`Por ma wang'a tal i beng'i gin kpo rwinyo i wang'a.
Dwong' peri de woki cwinya m'aneno ram juguri.
(Kpo bed iri In i Yesu m' aneno ram juguri x2)`],
                  [`Ei ia wang' li i kumi, In m’Ibimo rwodhi kpo.
Idwok ndhu ni jamerni, Iketh ayom the bombi.
(Kpo bed iri In i Yesu, Iketh ayom the bombi x2)`],
            ]
      },
      {
            id: '94',
            key: "Ab",
            tempo: "3/4",
            collections: ["BA 73", "IH 100", "SW 238"],
            titles: ["Cor ceng'ni bang'a", "I Need Thee Every Hour"],
            body: [
                  [`Cor ceng'ni bang'a Rwoth, kwi cwinya, dwoka mol,
Kum tegona thum kot, a ng'ic e kuma ol.`, `Bed ceng'ni, kud iweka, tego peri tieka.
Konj bero peri roma, Rwoth para Yesu.`],
                  [`Bed ceng'ni bang'a Rwoth, jabidhe senda dit.
Dwok ter mi cwinya yot, juka ku dwal ma mit.`, `Bed ceng'ni, kud iweka, tego peri tieka.
Konj bero peri roma, Rwoth para Yesu.`],
                  [`Ling curna, Jajukna, Ing'eyo ndiba mwa,
Ku pidoic mi ng'om, man tho m'usendowa.`, `Bed ceng'ni, kud iweka, tego peri tieka.
Konj bero peri roma, Rwoth para Yesu.`],
                  [`A ng'eca peri Rwoth, amira iri dho.
Keth rimbi lwoka cu ku pidoia kpo.`, `Bed ceng'ni, kud iweka, tego peri tieka.
Konj bero peri roma, Rwoth para Yesu.`],
            ]
      },
      {
            id: '95',
            key: "F",
            tempo: "3/4",
            collections: ["SSS 587"],
            titles: ["Mungu yeny yor i cwinya \n(Zaburi 139:23,24)", "Search me, O God"],
            body: [
                  [`Mungu yeny yor i cwinya kpo, nyuth ira gin ma rac.
Tek an akier i weng'i Rwoth, konya atuce kpo.`]
                  [`Keth der uwok i ka ma col, wek adag dubona.
Keth giramung'a ceke de nyuthre ngbeng' ira do.`]
                  [`Yeny pidoia ceke de ka ma lemdubo wok.
Kum In Idagu dubo dit, konya adage de.`]
                  [`Yeny cil ma weng'i ma ve mac uketh' der rom ia.
Man tek der peri nyutho kier ayi aweke kpo.`]
                  [`Tel wia i yo peri cu cil ma kwo para thum.
Cil ma atundo i polo, arum the tiendi Rwoth.`]
            ]
      },
      {
            id: '96',
            key: "Ab",
            tempo: "4/4",
            collections: ["SSS 287", "SW 302"],
            titles: ["Jalar wawinjo Lembe \n(Juefeso 1:3)", "Lord, Dismiss Us"],
            body: [
                  [`Jalar wawinjo Lembe peri, kawono wabeyenyo dok
Konywa wacidh ku pido piri, ku lembe ma Iweco ri.
Watim tic iri kum wameri, wek wabed jumaleng' mandha.`],
                  [`Wafoyi Rwoth mwa Yesu Kristu, m'umio mugisa iwa.
Wafoyi de kum Lembe peri ma en e thala ni yo mwa.
Wabed jumandha i tic ceke, waruk lem ponji peri cu.`],
                  [`Man ka Jalar mwa Yesu Kristu bilwong'owa i ka maleng'
Wabed ayika waromb kude, anyong'a pong' kum wawore.
Man nja ku nja de wapak Yesu, wan waku juwadwa mae.`],
            ]
      },
      {
            id: '97',
            key: "Eb",
            tempo: "4/4",
            collections: ["IH 38", "SW 163"],
            titles: ["Jakwac mwa ma Rwoth", "Saviour like a Shepherd"],
            body: [
                  [`Jakwac mwa ma Rwoth mi bero ceke
Gwok rombeni ku ba ceng'.
Mi cemo ni rombe peri ceke, miwa kwen ma nja ku nja.
(Jalar Yesu, Jalar Yesu, gwokwa rombe peri do! x2)`],
                  [`Masendi ni bang'wa nindo ceke
Wan wa ng'ic waromo ngo.
Abidhe pa Jok de nuti bang'wa gwokwa yo ku beroni
(Jalar Yesu, Jalar Yesu, dong iwinj warwo iri x2)`],
                  [`Nindo ceke bed i bang'wa Yesu, kony wacung i tegoni,
Wan walubi calku yeny m'Iyenyo man wayungi ku ba ceng'.
(Jalar Yesu, Jalar Y esu, bed i bang 'wa ku ba ceng x2)`],
            ]
      },
      {
            id: '98',
            key: "Ab",
            tempo: "4/4",
            collections: ["BA 28", "H 155", "SW 199"],
            titles: ["Ayero lem pa Yesu", "I Love to Tel"],
            body: [
                  [`Ayero lem pa Yesu, e mit mandha ira,
Pi Yesu ku dwong pare, mer de m'Emaru kowa.
Ayero lem pa Yesu, kum en lemandha,
Eromo cwinya ceke ma sagu lem mange.`, `Ayero lem pa Yesu, Elaru ju m'urwinyo
Ebodho ju m'uyio, Yesu m'umaruwa.`],
                  [`Ayero lem pa Yesu, elar ekonya dre.
Ayenyo dong' ayere kara ekonyi de,
Ayero lem pa Yesu, esagu pidoic,
Esagu mido mi cam, e mit ma sagu kic.`, `Ayero lem pa Yesu, Elaru ju m'urwinyo
Ebodho ju m'uyio, Yesu m'umaruwa.`],
                  [`Ayero lem pa Yesu, jumoko winjo ngo.
Girem ni dwong pa Mungu, Lembariba wacu do.
Ayero lem pa Yesu, e lem mi both iwa.
Aol ungo niyere, ya Yesu tho piwa.`, `Ayero lem pa Yesu, Elaru ju m'urwinyo
Ebodho ju m'uyio, Yesu m'umaruwa.`],
                  [`Ayero lem pa Yesu, kum kec unego jo,
Pi kwen mi kwo ma Yesu, Ecopo yeng'o ja
Ayero lem pa Yesu, abed afoi Jalar.
Amare con ku tin de, abibemare nja!`, `Ayero lem pa Yesu, Elaru ju m'urwinyo
Ebodho ju m'uyio, Yesu m'umaruwa.`],
            ]
      },
      {
            id: '99',
            key: "Eb",
            tempo: "3/4",
            collections: ["BA 40", "IH 405", "SW 97"],
            titles: ["Naka an a jatic pa Jok", "Come Thou Fount"],
            body: [
                  [`Naka an a jatic pa Jok ku lem dubo pare de.
Ento dong' ayenyo para i Jalar ma Wod Mungu.`, `Yesu roma kud anyong'a kum Emio kwo ma nja.
En e Rwoth mwa ma Jalar mwa,
En e Jamer mandhandha.`],
                  [`Yesu Kristu yang' Ebino kar' Ebodhwa ju m'ukier.
Man Eii ku wonabali nwang' eyenyo ya warwiny`, `Yesu roma kud anyong'a kum Emio kwo ma nja.
En e Rwoth mwa ma Jalar mwa,
En e Jamer mandhandha.`],
                  [`Yesu Kristo ma jugure, kar' Edwok cwiny dhanu nyen.
Ewodh dhanu kud i mudho, Etel wigi ka ma leng'.`, `Yesu roma kud anyong'a kum Emio kwo ma nja.
En e Rwoth mwa ma Jalar mwa,
En e Jamer mandhandha.`],
                  [`Yesu Kristo Ebidwogo kar Ecokwa ju m'uboth.
Wabibedo nja wakugi, Ebibimo dhanu yu.`, `Yesu roma kud anyong'a kum Emio kwo ma nja.
En e Rwoth mwa ma Jalar mwa,
En e Jamer mandhandha.`],
            ]
      },
      {
            id: '100',
            key: "Ab",
            tempo: "3/4",
            collections: ["BA 41", "SW 308"],
            titles: ["An ayenyona lonyo ku jupiny", "Is My Name Written There?"],
            body: [
                  [`An ayenyona lonyo ku jupiny dit ungo,
An ayeny' amond i polo ba Yesu Kristu.
I kitabu pa Mungu, e kitabu mi kwo,
Ko iyer ira Yesu, nyo Igoro nyinga?`, `Nyo Igoro nyinga i kitabu mi kwo?
I kitabu ma peri, nyo lgoro nyinga?`],
                  [`Dubo para gi dupa calu kwio dhu nam,
Ento rimo Jalarna uberucogi kpo.
Lembe peri m'ukieure en e lembe mandha,
Kadok dubo gi kwar ngbo, Ebilwokogi kpo.`, `Nyo Igoro nyinga i kitabu mi kwo?
I kitabu ma peri, nyo lgoro nyinga?`],
                  [`Pacu pare i polo, en e leng njwa mandha,
Ju m'ubedo i ie kendo kendi ma tar.
Dubo ceke mbe kuca man ke lem tho de mbe,
Ka ma Yesu ni ie, nyo jugoro nyinga?`, `Nyo Igoro nyinga i kitabu mi kwo?
I kitabu ma peri, nyo lgoro nyinga?`],
            ]
      },
      {
            id: '101',
            key: "C",
            tempo: "4/4",
            collections: ["BA 42", "H 115", "SW 115"],
            titles: ["Kulo rimo nuti m'udhenyni", "There is a Fountain"],
            body: [
                  [`Kulo rimo nuti m'udhenyni m'ebeai i ng'et Jalar,
Tek judubo rony i kulone,
(Ebilwoko dubo cen x2) Elwoko dubo cen.
Tek judubo rony i kulone, Ebilwoko dubo cen.`],
                  [`Yang' jakwo m'uvoc efoyo dit ni kum kisa pa Jalar.
Keca an, m'adubo calu en,
(An aweko dubna lwany x2) Aweko dubna lwany.
Keca an, m'adubo calu en, an aweko dubna lwany.`],
                  [`Nyathi Rombo tho pi dhanu yu, tego rimbe nuti asu.
Cil inindo ma juyic mandha,
(Gibiboth ni dubo ndhu x2) Giboth ni dubo ndhu.
Cil i nindo ma juyic mandha, gibiboth ni dubo ndhu.`],
                  [`Por m'aneno rimbi kuca Rwoth,
Nwang' ethwogre ceng' m'Itho.
Mer m'Imara ko uroma dit
:(Ebiroma cil m'atho x2) Biroma cil m'atho.
Mer m'Imara ko uroma dit, ebiroma cil m'atho.`],
                  [`Abiwero wer ku dwal ma mit ma bipaku tegoni.
Nwang'u leba maeni mi tho,
(Daru vuto ling' i ng'om x2) Evuto ling'ing'om.
Nwang'u lembe maeni mi tho, daru vuto ling' i ng'om.`],
            ]
      },
      {
            id: '102',
            key: "G",
            tempo: "4/4",
            collections: ["BA 45", "IH 130", "SW 113"],
            titles: ["Ang'o lwoko cwinya kpo?", "Nothing but the Blood"],
            body: [
                  [`Ang'o lwoko cwinya kpo? Rimo Jalar Yesu kende.
Ang'o keyo cwinya ndhu? Rimo Jalar Yesu kende.`, `Rimo Jalar m'ucwir m'ulwoko ia ceke.
Mana gin mange mbe, rimo Jalar Yesu kende.`],
                  [`Gin m'ulwoko cwinya pet, rimo Jalar Yesu kende.
Mungu e Jakisa dit, rimo Jalar Yesu kende.`, `Rimo Jalar m'ucwir m'ulwoko ia ceke.
Mana gin mange mbe, rimo Jalar Yesu kende.`],
                  [`Cul m'Eculo pira kpo, rimo Jalar Yesu kende.
Berocwinya bodha ngo, rimo Jalar Yesu kende.`, `Rimo Jalar m'ucwir m'ulwoko ia ceke.
Mana gin mange mbe, rimo Jalar Yesu kende.`],
                  [`Ang'o dwoka doko leng'? rimo Jalar Yesu kende.
Cwinya geno polo tin, kum rimb Jalar Yesu kende.`, `Rimo Jalar m'ucwir m'ulwoko ia ceke.
Mana gin mange mbe, rimo Jalar Yesu kende.`],
            ]
      },
      {
            id: '103',
            key: "Ab",
            tempo: "4/4",
            collections: ["BA 46", "IH 95", "SW 122"],
            titles: ["In iwok ba Yesu", "Are You Washed?"],
            body: [
                  [`In iwok ba Yesu kara Elwoki?
En Elwoki ku rimbe m'ucwir?
Nindo nini in igeno berone?
En Elwoki ku rimbe m'ucwir?`, `Elwoki ku rimo? En Elwoki ku rimbe m'ucwir?
Cwinyi bedo leng' ma sagu vulo kpo?
En Elwoki ku rimbe m'ucwir?`],
                  [`In iwotho ku ba ceng' i ng'et Jalar?
En Elwoki ku rimbe m'ucwir?
In ijengri ru kor Yesu Kristu Rwoth?
En Elwoki ku rimbe m'ucwir?`, `Elwoki ku rimo? En Elwoki ku rimbe m'ucwir?
Cwinyi bedo leng' ma sagu vulo kpo?
En Elwoki ku rimbe m'ucwir?`],
                  [`Ceng' ma Yesu dwogo, Ebinweng'i leng"?
En Elwoki ku rimbe m'ucwir?
Ii doko tar ni kum rimb Jalarni?
En Elwoki ku rimbe m'ucwir?`, `Elwoki ku rimo? En Elwoki ku rimbe m'ucwir?
Cwinyi bedo leng' ma sagu vulo kpo?
En Elwoki ku rimbe m'ucwir?`],
                  [`Gin m'uwilo wii i kume, baye cen,
Kar' Elwoki ku rimbe m'ucwir.
Koc ku dubo ceke woth i bedopwe,
Kum elwoki ku rimbe m'ucwir.`, `Elwoki ku rimo? En Elwoki ku rimbe m'ucwir?
Cwinyi bedo leng' ma sagu vulo kpo?
En Elwoki ku rimbe m'ucwir?`],
            ]
      },
      {
            id: '104',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 47", "SW 116"],
            titles: ["An amaru Mungu!", "Weeping Will Not Save"],
            body: [
                  [`An amaru Mungu! En ukungu mer mandha,
Yesu bino yenyowa man Etho nilaruwa, wa judubo ceke.`, `An a nyathin pa Mungu, asikari pa Yesu.
Abiworo cik pare, tegone bikonya.`],
                  [`An amaru Yesu! Kum Emio kwo iwa,
Kan Etho wi Golgotha, man Ebino ribowa,
E jarimo mandha.`, `An a nyathin pa Mungu, asikari pa Yesu.
Abiworo cik pare, tegone bikonya.`],
                  [`Jajuk para nuti, ayenyo Eroma de,
E Japonji para de, Etuco thelembene
Mi lembe pa Mungu.`, `An a nyathin pa Mungu, asikari pa Yesu.
Abiworo cik pare, tegone bikonya.`],
                  [`Ava gin m'unega, woth ma yor i polo re,
Kaka dhanu mandhandha, wabitimo tic ma leng'
Nja ku nja k'anyong'a.`, `An a nyathin pa Mungu, asikari pa Yesu.
Abiworo cik pare, tegone bikonya.`],
            ]
      },
      {
            id: '105',
            key: "Eb",
            tempo: "3/4",
            collections: ["BA 48", "IH 189", "SW 111"],
            titles: ["Rimo m'akira pire", "The Cleansing Stream"],
            body: [
                  [`Rimo m'akira pire wok bang'a m'a jadub0,
Ya tek julwoka kude ngo dubna birucre ngo.`, `(Elonyowa x2) rimb Yesu cwir nilonyowa.
Wafoi Jalar mwa Yesu kum Elonyowa ma nja ku nja.`],
                  [`Awotho ngo i mudho tin, kum Yesu der mi ng'om.
Etelo wia ku ba ceng alubo toke ndhu`, `(Elonyowa x2) rimb Yesu cwir nilonyowa.
Wafoi Jalar mwa Yesu kum Elonyowa ma nja ku nja.`],
                  [`Ia wang'li kum berone m'uketh Etho piwa
Rwoth Yesu kende m n'uromo niyeyo dubo mwa.`, `(Elonyowa x2) rimb Yesu cwir nilonyowa.
Wafoi Jalar mwa Yesu kum Elonyowa ma nja ku nja.`],
            ]
      },
      {
            id: '106',
            key: "Ab",
            tempo: "4/4",
            collections: ["BA 49"],
            titles: ["Yesu Kristu En e yo", "Egyptian Melody"],
            body: [
                  [`Yesu Kristu En e yo, kajik yoje kamaleng'.
Tek wakwanyu yoje dre wabitundo i bang'e.`, `Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja
Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja`],
                  [`Yesu En e lemandha, En Edagu lem mi ndra
Man e kwo ma nja ku nja terowa ndhu ba Wegwa.`, `Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja
Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja`],
                  [`Yesu Ene kwen mi kwo kec binegowa de ngo.
Bed Imi kwen iwa do, kwen m'uai ndhu i polo.`, `Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja
Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja`],
                  [`Yesu Ene der mi ng'om, der m'umio iwa kwo.
Woth mi mudho rwinyo jo der pare benyutho yo.`, `Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja
Yesu Rwoth, Jalar mwa,
Wabifoye nja ku nja`],
            ]
      },
      {
            id: '107',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 50", "SW 124"],
            titles: ["Yesu belwong'i bin", "Come to the Saviour"],
            body: [
                  [`Yesu belwong'i bin bang'e tho,
Lem pare nyuthoe yo mi kwo.
Ken' i kindwa Ecungo tin, Ewacu, "Dong ibin."`, `Wabinene kud anyong'a kwa
Ku juwadwa ma gicokri lwar.
Gidoko tar ma dubo de mbe rimb Yesu Iwokogi.`],
                  [`Wuwek nyithindho bin ba Jalar,
Kum ker mi polo migi mandha.
Elwong'ogi ku cwinye ma ber, "Kud wugal ki Wubin"`, `Wabinene kud anyong'a kwa
Ku juwadwa ma gicokri lwar.
Gidoko tar ma dubo de mbe rimb Yesu Iwokogi.`],
                  [`Par pire cu, Elwong'i asu,
Man Ebijoli, bin bang'e pio.
Wek dubo peri, lub tok Jalar En Ebinyoli nyen.`, `Wabinene kud anyong'a kwa
Ku juwadwa ma gicokri lwar.
Gidoko tar ma dubo de mbe rimb Yesu Iwokogi.`],
            ]
      },
      {
            id: '108',
            key: "Eb",
            tempo: "3/4",
            collections: ["BA 51", "SW 313"],
            titles: ["Dwand Rwodha mit ira", "I am Coming Home"],
            body: [
                  [`Dwand Rwodha mit ira m'ulwong'a bin bang'e
Bilwoko ia ku rimbe, m'ucwir wi Kalvari.`, `(Abebino Rwoth x2) Ko Ilwok ia
Edok leng', ku rimoni m'ucwir.`],
                  [`Kadok abedo ng'ic, mi ira tegoni.
Lony gondrina ku rimoni, e poyone bithum.`, `(Abebino Rwoth x2) Ko Ilwok ia
Edok leng', ku rimoni m'ucwir.`],
                  [`Abino Yesu Rwoth, Iketh ageni ndhu.
Ikwio cwinya cungo ti, dwok yioyicna cu.`, `(Abebino Rwoth x2) Ko Ilwok ia
Edok leng', ku rimoni m'ucwir.`],
                  [`Afoyo rimb Yesu, afoyo berone.
Afoyo Rwoth Yesu Kristu, ku tegone ceke.`, `(Abebino Rwoth x2) Ko Ilwok ia
Edok leng', ku rimoni m'ucwir.`],
            ]
      },
      {
            id: '109',
            key: "G",
            tempo: "3/4",
            collections: ["BA 52", "IH 361", "SW312"],
            titles: ["An awok ba Kalvari", "I am Coming to the Cross"],
            body: [
                  [`An awok ba Kalvari, a jacan e kuma ng'ic.
An ayenyo kwo ma nja, kum Iyeyo dubona.`, `Rwoth ageno beroni, kum Itho pi dubona.
Rimbi cwir nilonyo jo, lara Y esu lara do`],
                  [`Dubo bimo tipona, nindo lwar awotho swa.
Yesu weco yo ira, "Abibodhi ku rimba."`, `Rwoth ageno beroni, kum Itho pi dubona.
Rimbi cwir nilonyo jo, lara Y esu lara do`],
                  [`Dong' amira gira bo, an adoko peri ndhu.
Kuma dho ku pinyna kpo an amio iri do.`, `Rwoth ageno beroni, kum Itho pi dubona.
Rimbi cwir nilonyo jo, lara Y esu lara do`],
            ]
      },
      {
            id: '110',
            key: "D",
            tempo: "4/4",
            collections: ["BA 53", "IH 206", "SW 128"],
            titles: ["Ng'am'uwinjo lembe", "Whosoever Heareth"],
            body: [
                  [`Ng'am'uwinjo lembe, lembe ma mit,
Yer mi dhanu ceke, lembene ber dit.
Lembe mir anyong'a wok i bang'wa tin,
Ng'a m'uyio, dong ebin!`, `(Ng'a m'uyio bin! x2) Tipo Mungu wacu iri.
"Dong ibin!" Ju m'umwony i dubo
Mungu lwong'owu, ng'a m'uyio dong' ebin!`],
                  [`Ng'a m'uyenyo bino dong' kud egal,
Nen dhugola thwolo, mond i ie do.
Yo mi kwo e Yesu, En e kende ba!
Ng'am'uyio dong ebin!`, `(Ng'a m'uyio bin! x2) Tipo Mungu wacu iri.
"Dong ibin!" Ju m'umwony i dubo
Mungu lwong'owu, ng'a m'uyio dong' ebin!`],
                  [`Lem ma Mungu ngolo elokre ngo,
Tek iyio Yesu ibinwang'u kwo.
Tego pare copo nyoli ndhu ma nyen,
Ng'a m'uyio, dong' ebin!`, `(Ng'a m'uyio bin! x2) Tipo Mungu wacu iri.
"Dong ibin!" Ju m'umwony i dubo
Mungu lwong'owu, ng'a m'uyio dong' ebin!`],
            ]
      },
      {
            id: '111',
            key: "G",
            tempo: "6/8",
            collections: ["BA 54", "TH 163", "SW 90"],
            titles: ["Were kendo, e mit ira", "Wonderful Words of Life"],
            body: [
                  [`Were kendo, e mit ira. Lembe ma dwong' mi kwo!
Yesu Kristu wok i bang'a, Lembe ma dwong mi kwo.
Nwang'a swa i yamba, Lembene ugwela.`, `Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo
Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo`],
                  [`Yung Jalar kum Emiowa, Lembe ma dwong' mi kwo!
Kisa nege pi ju ma swa, Lembe ma dwong' mi kwo!
Tek watuco dubo, En Ecopo ruco.`, `Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo
Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo`],
                  [`Keth ewinjre ni dhanu pet, Lembe ma dwong' mi kwo!
Watund kugi i polo de, Lembe ma dwong' mi kwo!
Wanen ba Jalar mwa, wapak nying Jalar mwa.`, `Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo
Anyong'a kwa, lembe mandha,
Lembe ma dwong mi kwo`],
            ]
      },
      {
            id: '112',
            key: "G",
            tempo: "4/4",
            collections: ["BA 55", "IH 188", "SW 131"],
            titles: ["Bin dhanu yu \n(Yoh 14:6)", "Only Trust Him"],
            body: [
                  [`(Bin dhanu yu x2) Wurwinyo dit andha.
Jalar mu de belwong'owu winj dwand Jalar mu tin.`, `(Bin ba Yesu x2) Ebelwong'owu.
(Bin ba Yesu x2) Ebilaruwu.`],
                  [`Kum rimb Jalar yang' con uoi nibodho dhanu yu,
Tuc dubo mu m'ucidowu, rimbe bilwokowu`, `(Bin ba Yesu x2) Ebelwong'owu.
(Bin ba Yesu x2) Ebilaruwu.`],
                  [`Ewacu "An a lemandha, ku kwo, ku wang'ayo."
Kwany yoje ndhu m'igalu ngo, e ibinwang'u kwo.`, `(Bin ba Yesu x2) Ebelwong'owu.
(Bin ba Yesu x2) Ebilaruwu.`],
                  [`Bin mond i kind Jukristo do m'ulubo bedopwe.
Wakudu karacelo wabitundo ka maleng'.`, `(Bin ba Yesu x2) Ebelwong'owu.
(Bin ba Yesu x2) Ebilaruwu.`],
            ]
      },
      {
            id: '113',
            key: "F",
            tempo: "4/4",
            collections: ["BA 56", "IH 73", "SW 133"],
            titles: ["Tek in iyenyo inwang'", "Look to the Lamb"],
            body: [
                  [`Tek in iyenyo inwang' kwo ma nja, nen Rombo pa Mungu.
Ndhu Yesu kende mio both mandha,
Nen Rombo pa Mungu.`, `Nen Rombo pa Mungu, rimbe ucwir piwa,
Ecopo bodhowa En e kende, nen Rombo pa Mungu.`],
                  [`Bed kud anyong'a Yesu meri dit,
Nen Rombo pa Mungu
Tin Ebilwoki ku rimbe m'ucwir,
Nen Rombo pa Mungu`, `Nen Rombo pa Mungu, rimbe ucwir piwa,
Ecopo bodhowa En e kende, nen Rombo pa Mungu.`],
                  [`Lok cwinyi tin, gen peri Yesu Rwoth,
Nen Rombo pa Mungu
Yio Rwoth Yesu mio iwa kwo,
Nen Rombo pa Mungu`, `Nen Rombo pa Mungu, rimbe ucwir piwa,
Ecopo bodhowa En e kende, nen Rombo pa Mungu.`],
                  [`Ceng' ma watundo malu ka maleng', Yesu binen iwa,
Man Ebidoko Rwoth ni dhanu pet, kerne bibedo nja.`, `Nen Rombo pa Mungu, rimbe ucwir piwa,
Ecopo bodhowa En e kende, nen Rombo pa Mungu.`],
            ]
      },
      {
            id: '114',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 83"],
            titles: ["Kum Mungu maru ng'om", "St. Cuthbert"],
            body: [
                  [`Kum Mungu maru ng'om mumbe Emio Yesu Wod.
Tek ng'atu moko yie ndhu ebedo kwo.`, ``],
                  [`Jupadu thenge mire ma! Lau dhoggi cide dit,
Ukudho cobo wie de, wi Kalvari.`],
                  [`Ecer m'Eai kendo k'i liel, wuduny pire i ngom,
Ka mir ang'o ke cwinywa miel, nilworo tho!`],
                  [`Juting'e malu ka Jajuk uloro ndhu ve mac
M'e jatel yo, Japonji de, Ejukowa.`],
                  [`Jalar bidwogo kendo ba, Emung'o iwa ngo,
Ya Ebidwogo jolowai polo nja.`],
            ]
      },
      {
            id: '115',
            key: "Eb",
            tempo: "6/4",
            collections: ["IH 198", "SW 126"],
            titles: ["Ku rambana m'anuti", "Just as I am"],
            body: [
                  [`Ku rambana m'anuti ko, ageno rimoni m'ucwir.
Ilwong'a In abin beng'i e Jalarna (awok x2)`],
                  [`Ku rambana agalu ngo nituco dubo m'i cwinya.
Rimbi ulwoko dubna kpo e Jalarna (awok x2)`],
                  [`Ku rambana, jacan eni, kab dubona, kwi cwinya de.
Gin kpo ayenyo i beng'i e Jalarna (awok x2)`],
                  [`Ku rambana, Ikwera ngo, ljoloa, Ilwok' ia.
Lembe m'Ing'olo an ajolo e Jalarna (awok x2)`],
                  [`Ku rambana, merni ma dhe ukabu gin m'ucera ndhu.
A peri In i kendi Rwoth, e Jalarna (awok x2)`],
            ]
      },
      {
            id: '116',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 127", "IH 300", "SW 121"],
            titles: ["Tin mutoro nuti", "Ring the Bells"],
            body: [
                  [`Tin mutoro nuti jubewero wer
Kum jadubo dwogo ndhu ba won.
Nen eai k'i langa nwang'u tiende kier,
Won uringo gwaku ng'ute ndhu.`, `Anyong'a n'i wang' malaika de
Kum jadubo loko cwinye tin.
Maku jumange de giyi Rwoth Yesu
Ebilwokogi ku rimbe ndhu.`],
                  [`Tin mutoro nuti jubicam' agba,
Wodwa meni kwo ma nwang' etho.
Piny edhenyo ceke, dubo voye ma!
En etuco ma eweko kpo.`, `Anyong'a n'i wang' malaika de
Kum jadubo loko cwinye tin.
Maku jumange de giyi Rwoth Yesu
Ebilwokogi ku rimbe ndhu.`],
                  [`Tin mutoro nuti wabifoyo dwong'
Kum jadubo dwogo tin ba Won.
Korikori bongu wile ku ma nyen,
Dong' juronye tin ku bedopwe.`, `Anyong'a n'i wang' malaika de
Kum jadubo loko cwinye tin.
Maku jumange de giyi Rwoth Yesu
Ebilwokogi ku rimbe ndhu.`],
            ]
      },
      {
            id: '117',
            key: "E",
            tempo: "4/4",
            collections: ["BA 132", "IH 55", "SW 78"],
            titles: ["Lewic binega tak de ngo", "At the Cross"],
            body: [
                  [`Lewic binega tak de ngo ni kum Rwodha Yesu.
Apid pi tho m'Etho kor yen awor Lem pare ndhu.`, `Kuca the yen m'athara aneno der ma dit,
Ter ma pek m'unuro cwinya de ai.
Ni kum yioyic wang'a yabre ndhu,
Kawono mutoro para pong.`],
                  [`Yesu e Mungu ku kite ageno nyinge ndhu.
Aneno lewic tak de ngo ni kum ageno En.`, `Kuca the yen m'athara aneno der ma dit,
Ter ma pek m'unuro cwinya de ai.
Ni kum yioyic wang'a yabre ndhu,
Kawono mutoro para pong.`],
                  [`Komker pa Yesu cungo tek ku lem m'Eng'olo de.
Amira bo i cinge do cil m'abinene ko.`, `Kuca the yen m'athara aneno der ma dit,
Ter ma pek m'unuro cwinya de ai.
Ni kum yioyic wang'a yabre ndhu,
Kawono mutoro para pong.`],
                  [`Ceng' nica Ebikwera ngo wang' komker pa Wegwa.
Ing'om ma nyen m'Eyiko cu amond' i yom ma nja.`, `Kuca the yen m'athara aneno der ma dit,
Ter ma pek m'unuro cwinya de ai.
Ni kum yioyic wang'a yabre ndhu,
Kawono mutoro para pong.`],
            ]
      },
      {
            id: '118',
            key: "Eb",
            tempo: "6/8",
            collections: ["HSS 570"],
            titles: ["Nyo iwinjo gin m'Eyerona?", "All Taken Away "],
            body: [
                  [`Nyo iwinjo gin m'Eyerona? "Yesu kabu dubna woko,
Ya dubna Eweko, agonjra, Yesu kabugi kpo."`, `(E Yesu kabu dubna kpo x3)
Yesu kabu dubna woko.`],
                  [`Berone ma dwong' En Emio swa, Yesu kabu dubna woko.
Kadok dubna kwar Edwoke tar, Yesu kabu dubna.`, `(E Yesu kabu dubna kpo x3)
Yesu kabu dubna woko.`],
                  [`An apondo the rimone m'ucwir. Yesu kabu dubna woko.
Man ia lony ni kum yioyic, Yesu kabu dubna.`, `(E Yesu kabu dubna kpo x3)
Yesu kabu dubna woko.`],
                  [`Kawono Tipo benyutho ira Yesu kabu dubna woko.
Eketho abedo agonya, Yesu kabu dubna.`, `(E Yesu kabu dubna kpo x3)
Yesu kabu dubna woko.`],
                  [`Afoyo Rwoth kum Eweko dubna, Yesu kabu dubna woko.
Kan abekukuni i yoje kwe, Yesu kabu dubna.`, `(E Yesu kabu dubna kpo x3)
Yesu kabu dubna woko.`],
            ]
      },
      {
            id: '119',
            key: "Eb",
            tempo: "4/4",
            collections: ["CV 166", "SW 114"],
            titles: ["Rimo Yesu Kristu", "Precious Blood"],
            body: [
                  [`Rimo Yesu Kristu kende yang' m'udaru cwir,
Ni judubo mi ng'om ceke, ecwir piri.`, `Rimo Yesu Kristu kende, yang' m'udaru cwir,
Dong' iyie, dong' ijole, ecwir piri.`],
                  [`Rimo Yesu Kristu kende, dong elwok ii,
Cwinyi, ng'eyong'ec, ku kumi, Tipo romi.`, `Rimo Yesu Kristu kende, yang' m'udaru cwir,
Dong' iyie, dong' ijole, ecwir piri.`],
                  [`Kadok dubo peri dupa sagu ceke ngi,
Tek igeno rimo Yesu, Elwoko ii.`, `Rimo Yesu Kristu kende, yang' m'udaru cwir,
Dong' iyie, dong' ijole, ecwir piri.`],
                  [`Ni kum rimone maeni ecopre iwa,
Wan wamond' i polo bang'e, wanen Yesu.`, `Rimo Yesu Kristu kende, yang' m'udaru cwir,
Dong' iyie, dong' ijole, ecwir piri.`],
            ]
      },
      {
            id: '120',
            key: "Ab",
            tempo: "3/4",
            collections: ["BA 138", "IH 93"],
            titles: ["Rimb Jalarna yang' con", "Alas and did my Saviour"],
            body: [
                  [`Rimb Jalarna yang' con ucwir, Jalarna tho kor yen?
Emio kwo ma pire tek, ma an de arenm ma gwei?`],
                  [`Ecur wi got ma Golgotha ni kum dubo mwa rac dit?
E ngisi nege, bero de, ku mer ma porne mbe.`],
                  [`Ceng' kandre dre, mudho yutho bi, dwong'ne de kud unen
Ceng' ma Jacwic ma dwong' utho pi giracwia mi ng'om
yu.`],
                  [`Piwang'a copo culo ngo an ma jabanja dit.
E Rwoth amira gira bo gin mange de romo ngo.`],
            ]
      },
      {
            id: '121',
            key: "D",
            tempo: "4/4",
            collections: ["BA 139", "IH 190"],
            titles: ["Tek iweko yo ma pwe", "Christ receiveth sinful men"],
            body: [
                  [`Tek iweko yo ma pwe man ipodh' i dubo de,
Kud imung ituce be, Ebiweko dubone.`, `Were ken.. do ira do, Yesu jo... lo dhanu kpo.
Yere ngbeng' ewinjre cu, Yesu jolo judubo.`],
                  [`Bin ku tic m'imuli ko, man ku ter m'unuri kpo.
Bin e ibinwang'u yom, ponji pare ber mandha.`, `Were ken.. do ira do, Yesu jo... lo dhanu kpo.
Yere ngbeng' ewinjre cu, Yesu jolo judubo.`],
                  [`Tek atuco dubona, En e pwe, man e mandha.
Ceke Ebiwekona, Ebilonyo gondrina.`, `Were ken.. do ira do, Yesu jo... lo dhanu kpo.
Yere ngbeng' ewinjre cu, Yesu jolo judubo.`],
                  [`Yesu jola ber mandha, man Eruco dubona.
Rimbe lwoka dwoka leng', kar' abed i polo nja.`, `Were ken.. do ira do, Yesu jo... lo dhanu kpo.
Yere ngbeng' ewinjre cu, Yesu jolo judubo.`],
            ]
      },
      {
            id: '122',
            key: "Bb",
            tempo: "4/4",
            collections: ["IH 425", "SW 112"],
            titles: ["Iyenyo dit ya juwek duboni?", "Would You Be Free?"],
            body: [
                  [`Iyenyo dit ya juwek duboni?
Juweko ni kum rimb Yesu Rwoth.
Iyenyo dit ya iloi lem ma rac? Iloye ni kum rimb Jalar.`, `Tego nuti, tego nuti dit ni kum rimo pa Jalar.
Tego nuti, tego nuti dit, i rimb Nyathi Rombo Jalar.`],
                  [`Iyenyo dit kud itingri i ng'om?
lcopo jwigri kum rimb Yesu.
Bin ba Kalvari man Ebilwoki ka ma rimb Jalar Yesu cwir.`, `Tego nuti, tego nuti dit ni kum rimo pa Jalar.
Tego nuti, tego nuti dit, i rimb Nyathi Rombo Jalar.`],
                  [`Iyenyo dit ibed tar sagu pei?
Julwoki ni kum rimb Yesu Rwoth.
Goc ma ni wiwa Eyeyo kor yen ka ma rimb Jalar Yesu cwir.`, `Tego nuti, tego nuti dit ni kum rimo pa Jalar.
Tego nuti, tego nuti dit, i rimb Nyathi Rombo Jalar.`],
                  [`Iyenyo dit ya itim tic ni Rwoth?
Inwang' tegocwiny kum rimbe cwir?
Iyenyo dit ya ipake ku wer ni kum tho m'Etho ko kor yen?`, `Tego nuti, tego nuti dit ni kum rimo pa Jalar.
Tego nuti, tego nuti dit, i rimb Nyathi Rombo Jalar.`],
            ]
      },
      {
            id: '123',
            key: "G",
            tempo: "4/4",
            collections: ["IH 231", "SW 76"],
            titles: ["An awinjo lembanyong'a", "I've a Message"],
            body: [
                  [`An awinjo lembanyong'a Haleluya, ayenyo ya iwinje de.
Lembagora ai ba Mungu, Haleluya,
"Nen ba Yesu ibinwang'u kwo."`, `Nen ba Yesu, umira, nen ba Yesu inwang' kwo.
Lembagora, ai ba Mungu, Haleluya
"Nen ba Yesu ibinwang'u kwo."`],
                  [`Lembene e lem mi mer, Haleluya,
Jarimba dong' iwinje cu.
Lembanyong'a ai i polo, Haleluya,
Yesu wacu en e lemandha.`, `Nen ba Yesu, umira, nen ba Yesu inwang' kwo.
Lembagora, ai ba Mungu, Haleluya
"Nen ba Yesu ibinwang'u kwo."`],
                  [`Kwo juketho iri ngbeng', Haleluya,
Juyenyo inwang' kwo mi nja.
Tek ineno yo ba Rwoth, Haleluya,
Yesu kende copo bodhi do.`, `Nen ba Yesu, umira, nen ba Yesu inwang' kwo.
Lembagora, ai ba Mungu, Haleluya
"Nen ba Yesu ibinwang'u kwo."`],
                  [`Abiyeroni pira, Haleluya, maram anwang'u kwo mi nja.
Saa m'ayio nying' Jalar, Haleluya,
Yesu bodho cwinya saa nica.`, `Nen ba Yesu, umira, nen ba Yesu inwang' kwo.
Lembagora, ai ba Mungu, Haleluya
"Nen ba Yesu ibinwang'u kwo."`],
            ]
      },
      {
            id: '124',
            key: "G",
            tempo: "4/4",
            collections: ["IH 195", "SW 136"],
            titles: ["Jalarna nuti Erwo pira", "I am Praying for You"],
            body: [
                  [`Jalarna nuti Erwo pira i polo,
Emara ma ber sagu dhanu mi ng'om.
Eneno i bang'a ku ngisi ma dit pare,
Arwo piri dit Jalarna bodhi de.`, `Arwo ni Rwoth piri, arwo ni Rwoth piri,
Arwo ni Rwoth Yesu Kristu dit piri.`],
                  [`Vwa bende nuti m'Edaru mio ira
Genogen mi nja man kwo ma thum ungo.
Fodi Ebilwong'a abicidho i bang'e,
Ber dit tek wacidhoi polo kudi.`, `Arwo ni Rwoth piri, arwo ni Rwoth piri,
Arwo ni Rwoth Yesu Kristu dit piri.`],
                  [`Kendi de nuti ma tar pu, ma leng' sagu
Ma Mungu bimia, akende kuca.
Man tek akende birieny ma ber dit i wang a.
Ber tek iyikri inwang' kendi bende.`, `Arwo ni Rwoth piri, arwo ni Rwoth piri,
Arwo ni Rwoth Yesu Kristu dit piri.`],
                  [`Ka Yesu bodhi yer pire de ni dhanu,
Keth gin de giyie giboth ni kume.
Man kinde m'iyero irwo ba Yesu pigi,
Rwo peri biwinjre ma ber ba Mungu.`, `Arwo ni Rwoth piri, arwo ni Rwoth piri,
Arwo ni Rwoth Yesu Kristu dit piri.`],
            ]
      },
      {
            id: '125',
            key: "Db",
            tempo: "4/4",
            collections: ["CH 131", "SW 93"],
            titles: ["E! winj lembe", "What Did He Do?"],
            body: [
                  [`E! winj lembe ma wabeyero, lem ma con juwinjo ngo.
Yesu weko dwong'ne i polo, kar' Ebin Elar ko jo.`, `Ng'a laruwa k'i can ma nja?
Wod Mungu wi yen m'athara.
Etim ang'o? Etho piwa. Anege ke?
Dong wun wuyi, en'i polo Erwo piwa.`],
                  [`Kadok malaika m'i polo copo tho kakawa ngo.
Jamer ma Mungu de jukuno, kor yen ma wi Kalvari.`, `Ng'a laruwa k'i can ma nja?
Wod Mungu wi yen m'athara.
Etim ang'o? Etho piwa. Anege ke?
Dong wun wuyi, en'i polo Erwo piwa.`],
                  [`Lembene fodi jubeyero m'ubewang'u ijo li.
Kuca i polo Rwoth bekwayu piwa m'e jalam mi nja.`, `Ng'a laruwa k'i can ma nja?
Wod Mungu wi yen m'athara.
Etim ang'o? Etho piwa. Anege ke?
Dong wun wuyi, en'i polo Erwo piwa.`],
                  [`Dong' wumiru ni Jalar Yesu man warum the tiende tin.
Wun de wubinwang'u mugisa, Ebilaruwa de tin.`, `Ng'a laruwa k'i can ma nja?
Wod Mungu wi yen m'athara.
Etim ang'o? Etho piwa. Anege ke?
Dong wun wuyi, en'i polo Erwo piwa.`],
            ]
      },
      {
            id: '126',
            key: "Db",
            tempo: "3/4",
            collections: ["IH 327", "SW 192"],
            titles: ["Dong' ku walwor ki", "Only Believe"],
            body: [
                  [`Dong' ku walwor ki, Esendre piwa,
Eai kud i tho, Emondo i kwo.
Tego kpo mi ng'om, ku mi polo de,
Umire ire, ni ndul ma pare.`, `(Yie kende x2), gin ceke coprene yie kende
(Yie kende x2), gin ceke coprene yie kende`],
                  [`Dong ku walwor ki, Etelo wiwa,
Jakwac mwa Enyutho yo ma wakwany.
Pi mwa ma kec de, Ebidwoko mit,
Emadhu ma kec pet i Gethsemane.`, `(Yie kende x2), gin ceke coprene yie kende
(Yie kende x2), gin ceke coprene yie kende`],
                  [`Dong' ku walwor ki, tek cwinywa dieng' hai,
Ekunowa ngo, Eni bang'wa nja.
Diewor ku dieceng', e ceke acel,
Eng'eyo cwinywa, kadok lembamung'a`, `(Yie kende x2), gin ceke coprene yie kende
(Yie kende x2), gin ceke coprene yie kende`],
            ]
      },
      {
            id: '127',
            key: "G",
            tempo: "4/4",
            collections: ["IH 279", "SW 19"],
            titles: ["Wer nuti m'awer", "Since I Have Been"],
            body: [
                  [`Wer nuti m'awer ni Jalar ugambre ceng' m'aboth.
Jamer ma Yesu Jalarna ugambre ceng' m'aboth.`, `(Ugambre ceng' m'aboth x2) abilula ku nyinge.
Ugambre ceng' m'aboth, abilula ku nying' Jalarna.`],
                  [`Jalar ukwio cwinya lwe, ugambre ceng' m'aboth.
Afoyo kayeny mi cwinye, ugambre ceng m'aboth.`, `(Ugambre ceng' m'aboth x2) abilula ku nyinge.
Ugambre ceng' m'aboth, abilula ku nying' Jalarna.`],
                  [`Atuco lembe pare ndhu, ugambre ceng' m'aboth.
Lembe ma jiji rwinyo kpo, ugambre ceng' m'aboth.`, `(Ugambre ceng' m'aboth x2) abilula ku nyinge.
Ugambre ceng' m'aboth, abilula ku nying' Jalarna.`],
                  [`Kabedona juyiko cu, ugambre ceng' m'aboth.
Abedo kuca nja ku nja, ugambre ceng' m'both.`, `(Ugambre ceng' m'aboth x2) abilula ku nyinge.
Ugambre ceng' m'aboth, abilula ku nying' Jalarna.`],
            ]
      },

      {
            id: '128',
            key: "G",
            tempo: "6/8",
            collections: ["H 446", "SW 95"],
            titles: ["Ku cwiny ma mol Eyenya", "In Tenderness He Sought Me"],
            body: [
                  [`Ku cwiny ma mol Eyenya ka dubo voya ma!
Ebiela de wi goke, Ekela ndhu i dwol.
Malaika de giwero wer ram werne romo polo gbur.`, `Mer ma dit m'uyenya, rimone m'ung'iewa.
Bero pare kela ndhu i dwol,
Bero dwong' m'ukela ndhu i dwol.`],
                  [`Elwoko rem mi dubo, Ewire ndhu ku mo,
Enwanga kan arwinyo, Evonj i bang'a mwa.
E dwal ma mit va pare mbe Eketho cwinya kwio lwe.`, `Mer ma dit m'uyenya, rimone m'ung'iewa.
Bero pare kela ndhu i dwol,
Bero dwong' m'ukela ndhu i dwol.`],
                  [`Enyutho poyo gute, e rimbe cwir de le,
Jamker ma mir ukudho, juroi i wie de.
Enen' ang'o i ia e m'Esendre ko kumeno e?`, `Mer ma dit m'uyenya, rimone m'ung'iewa.
Bero pare kela ndhu i dwol,
Bero dwong' m'ukela ndhu i dwol.`],
                  [`Abedo ndhu i vute, derne ucara cwe,
Kinde m'aneno wang'e afoyo kisane.
A rem nipeki Munguna, kadok apeki nja ku nja.`, `Mer ma dit m'uyenya, rimone m'ung'iewa.
Bero pare kela ndhu i dwol,
Bero dwong' m'ukela ndhu i dwol.`],
                  [`Ka nindona bekadhu, e cwinya kwio ndhu,
Akuro piny m'uru ma bisagu wagi yu.
Ka wa juyic, mugolene, wabed i ng'ete ka maleng'.`, `Mer ma dit m'uyenya, rimone m'ung'iewa.
Bero pare kela ndhu i dwol,
Bero dwong' m'ukela ndhu i dwol.`],
            ]
      },
      {
            id: '129',
            key: "D",
            tempo: "4/4",
            collections: ["IH 97", "SW 110"],
            titles: ["An afoyo rimo Jalar", "Blessed be the Fountain"],
            body: [
                  [`An afoyo rimo Jalar m'ucwir con pi dhanu mi ng'om.
Dubona m'ubedo kwar ngbo, rimone udwoke tar pu.
Con acayu lem peri ceke, man masendi nyayu can mumbe,
En Elwoko kier para cen man Edwoka tar sagu pei.`, `(Tar ma sagu pei x2) rimoni bidwoka tar pu,
Edwoka tar ma sagu pei.`],
                  [`Yesu yeyo kier para kpo, yen m'athara nure mandha.
Lak ukudho cobe de lith, an acangu kum goc pare dit.
Dong' atuco kier para ceke, an ayio Yesu ma Jalar.
Elwoko kier para cen man Edwoka tar sagu pei.`, `(Tar ma sagu pei x2) rimoni bidwoka tar pu,
Edwoka tar ma sagu pei.`],
                  [`Vwa, akier mandha con i lum kum akwanyu yo para an.
In Ijuko yamu ku nam, bed Ibim wi adundena.
Tek awoth' atira alubi, abilula ku kuhaya rac.
Jwiga Yesu the rimoni, Ebidwoka tar sagu pei.`, `(Tar ma sagu pei x2) rimoni bidwoka tar pu,
Edwoka tar ma sagu pei.`],
            ]
      },
      {
            id: '130',
            key: "A",
            tempo: "4/4",
            collections: ["IH 280", "SW 79"],
            titles: ["An aol ku lem dubo", "Since Jesus Came Into"],
            body: [
                  [`An aol ku lem dubo ayeny' adok leng',
Ajoli i cwinya Jalar.
Awek lembe ma con dong' akwany yo ma nyen,
Ajoli i cwinya Jalar.`, `(Ajoli i cwinya Jalar x2) kum Inyayu anyong'a
Afoyo mandha, ajoli i cwinya Jalar.`],
                  [`Dong awotho ngo swa kum Itelo wia,
Ajoli i cwinya Jalar
Cilo ai yweire cen cwinya lonjre mandha,
Ajoli i cwinya Jalar`, `(Ajoli i cwinya Jalar x2) kum Inyayu anyong'a
Afoyo mandha, ajoli i cwinya Jalar.`],
                  [`Lem ma jiji de mbe wang'a lero ku der,
Ajoli i cwinya Jalar
Piny ulero de her keth' awoth i derne,
Ajoli i cwinya Jalar`, `(Ajoli i cwinya Jalar x2) kum Inyayu anyong'a
Afoyo mandha, ajoli i cwinya Jalar.`],
                  [`Dong' awinjo pi polo kabedo ma ber,
Ajoli i cwinya Jalar
An aneno Rwoth Yesu m'Edoko won ker,
Ajoli i cwinya Jalar`, `(Ajoli i cwinya Jalar x2) kum Inyayu anyong'a
Afoyo mandha, ajoli i cwinya Jalar.`],
                  [`Dong' aloyo abidhe ku dubo mi ng'om, Abedo ku Yesu Jalar.
Ku ba ceng' Ebekonya kum tegone dwong',
Abedo ku Yesu Jalar.`, `(Ajoli i cwinya Jalar x2) kum Inyayu anyong'a
Afoyo mandha, ajoli i cwinya Jalar.`],
            ]
      },
      {
            id: '131',
            key: "G",
            tempo: "3/4",
            collections: ["IH 416", "SW 86"],
            titles: ["Bero pa Mungu kaporne mbe", "Grace Greater Than"],
            body: [
                  [`Bero pa Mungu kaporne mbe,
Berone lwar ma sagu kier mwa.
Kuca wi Kalvari Kristo tho,
Rimb Nyathi Rombo pa Mungu cwir.`, `Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Berone romo nilwoko ic.
Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Bero ma dit sagu dubna kpo.`],
                  [`Dubo ma kwar ngbo i cwinywa kpo,
Ketho warwinyo bor ku Mungu.
Bero pa Mungu ma porne mbe
Nyutho kapondo, yen m'athara.`, `Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Berone romo nilwoko ic.
Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Bero ma dit sagu dubna kpo.`],
                  [`Dubo mi cwinywa ekandre ngo,
Wayeny ang'o m'ulwokwa ndhu cu?
Nen, rimo thwogre wi Kalvari,
Rimo bilwoki tar sagu pei.`, `Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Berone romo nilwoko ic.
Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Bero ma dit sagu dubna kpo.`],
                  [`Bero ma thum de ngo nja ku nja, giramia ni ju m'uyie.
Wun ma wuyenyo wunen wang' Rwoth,
Wubin wujol bero pare tin.`, `Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Berone romo nilwoko ic.
Bero..... Bero.....
(Bero ma dit) (Ma pore ngo)
Bero ma dit sagu dubna kpo.`],
            ]
      },
      {
            id: '132',
            key: "",
            tempo: "",
            collections: [],
            titles: ["The ter mi dubo", "Abundant Life"],
            body: [
                  [`The ter mi dubo ku pidocwiny dhanu moko cur acura.
Gicopo bedo kud anyong'a tek ginwang'u kwo ma rondo.`, `(Kwo x3) ma mi nja, Yesu e kende jamicne
(Kwo x3) m'usagre, dwong' ubed ire mí rondo,`],
                  [`I ng'atu ma dubo benuri ku can ma kwonde tung' tung' de.
Lok cwinyi kawono man ijol kwo m'usagre i Rwoth Yesu.`, `(Kwo x3) ma mi nja, Yesu e kende jamicne
(Kwo x3) m'usagre, dwong' ubed ire mí rondo,`],
                  [`A, pi tego pa Tipo Maleng'! A, pi yepocwiny m'apila!
A, pir udul de m'umbe lworo, ayikra pi bino pare.`, `(Kwo x3) ma mi nja, Yesu e kende jamicne
(Kwo x3) m'usagre, dwong' ubed ire mí rondo,`],
            ]
      },
      {
            id: '133',
            key: "Ab",
            tempo: "6/8",
            collections: ["CH 221"],
            titles: ["Tek in iol ku lem dubo", "If you are Tired"],
            body: [
                  [`Tek in iol ku lem dubo, jamer, kwai Yesu Ewek dubo peri.
Tek in iyenyo inwang' kwo ma nyen, igen tego pa Yesu Rwoth.`, `Kawono, kud ikwere, kawono, yab ire do
Kawono tuc duboni kwai Yesu Elwok cwinyi leng'.`],
                  [`Tek in iyenyo adunde ma leng' kwai Yesu Ewek dubo peri.
Rimb Yesu cwir nilwoko duboni, yi ire ya rimbe lonyi.`, `Kawono, kud ikwere, kawono, yab ire do
Kawono tuc duboni kwai Yesu Elwok cwinyi leng'.`],
                  [`Tek cwinyi dieng', kwiocwiny mbe ma gwei,
Kwai Yesu Ewek dubo peri.
Anyong'a mi ng'om ie nanu, wada, i Yesu ibinwang'u yom.`, `Kawono, kud ikwere, kawono, yab ire do
Kawono tuc duboni kwai Yesu Elwok cwinyi leng'.`],
                  [`Yesu beyiko kabedo ma ber ni ju ma gijole mandhandha.
Tek in iyenyo ibed bang'e nja, ecopre ni kum yioyic.`, `Kawono, kud ikwere, kawono, yab ire do
Kawono tuc duboni kwai Yesu Elwok cwinyi leng'.`],
            ]
      },
      {
            id: '134',
            key: "Eb",
            tempo: "6/8",
            collections: ["BA 37", "CV 60", "SW 102"],
            titles: ["Rwoth Yesu yenyo jumandha", "The Great Physician"],
            body: [
                  [`Rwoth Yesu yenyo jumandha, Jukristu ma giwore.
Ma cwinygi kpo ubedo tar, m'uripo ku pa Yesu.`, `Ameri Yesu In ma Rwoth, ora e abicidho yot.
Abituco lem mi both, Yesu ma Jakisa.`],
                  [`Rwoth Yesu yenyo jumandha niponjo Lembe pare.
Ni ju m'urwinyo, ma Jalar usendre pigi bende.`, `Ameri Yesu In ma Rwoth, ora e abicidho yot.
Abituco lem mi both, Yesu ma Jakisa.`],
                  [`Rwoth Yesu yenyo jumandha ma copo voyo dubo.
Wa der mi ng'om, wapondo ngo, wawotho ngo i mudho.`, `Ameri Yesu In ma Rwoth, ora e abicidho yot.
Abituco lem mi both, Yesu ma Jakisa.`],
                  [`Rwoth Yesu yenyo jumandha nikwayu rombe pare.
Wating' nyithindo migi de, wadwokgi de i dwonde.`, `Ameri Yesu In ma Rwoth, ora e abicidho yot.
Abituco lem mi both, Yesu ma Jakisa.`],
            ]
      },
      {
            id: '135',
            key: "Eb",
            tempo: "4/4",
            collections: ["BA 57"],
            titles: ["Lem ma tek ubidhowa", "When Morning Comes"],
            body: [
                  [`Lem ma tek ubidhowa wa Jukristu ma ni ng'om,
Can ma pek unurowa, lembe dupa sendowa.
Wang'wa neno ber ungo, wang'wa umbre kud utor,
Gibilero ka wacokra bang'e nja.`, `Ceng' mange wabing'eyo cu, ka wacokra malu i polo.
Wabiwero wer kud anyong'a mandha,
Nwang'u lembe ceke wok kakare cu.`],
                  [`Kec unegowa i ng'om, tic de jonyo kumwa dwong'.
Ng'om uti unyayu doi, piny mwa ceke de belui
Kwaruwa gicayu cik ketho Mungu lamugi,
Ebithum ceng' ma wacokra bang'e nja.`, `Ceng' mange wabing'eyo cu, ka wacokra malu i polo.
Wabiwero wer kud anyong'a mandha,
Nwang'u lembe ceke wok kakare cu.`],
                  [`Tho ma negowa i ng'om, ceng' mange dong' ebithum.
Ceng' ma Rwoth ugamuwa, wabed bang'e nja ku nja.
Ju ma gibidong' i ng'om gibinwang'u can ma dwong'.
Wabineno ka wacokra bang'e nja.`, `Ceng' mange wabing'eyo cu, ka wacokra malu i polo.
Wabiwero wer kud anyong'a mandha,
Nwang'u lembe ceke wok kakare cu.`],
            ]
      },
      {
            id: '136',
            key: "F",
            tempo: "4/4",
            collections: ["BA 58", "IH 285", "SW 177"],
            titles: ["Anwang'u Yesu Kristu", "The Lily of the Valley"],
            body: [
                  [`Anwang'u Yesu Kristu, Edoko jarimba,
Pire sagu dit i cwinya andhandha.
Yesu calu thiuboko ma ber ma ng'wice ng'ar,
An amaru Yesu dit ku cwinya kpo.`, `Ekonya ceng' ku ceng' kpo, i can Enuti de,
Ter m'unura kpo Eyeyo ira de, Haleluya!
En e calu cero jobi, kugweno de enen.
An amaru Yesu dit ku cwinya kpo.`],
                  [`Abidhe de besenda, e Yesu voye En,
Nik esenda dit m'acopo cire ngo.
An aweko Jok, aringe, ku lembe pare kpo.
Dong' alubo ng'ei jarimba, ma Yesu.`, `Ekonya ceng' ku ceng' kpo, i can Enuti de,
Ter m'unura kpo Eyeyo ira de, Haleluya!
En e calu cero jobi, kugweno de enen.
An amaru Yesu dit ku cwinya kpo.`],
                  [`Eweko dhanu ki ngo, Enuti ceng' ku ceng',
Tek giyie andhandha ku cwinygi kpo.
Yesu e jagwok m'ukura dieceng ku diewor de,
Man ka kec upodho Ebirieme kpo.`, `Ekonya ceng' ku ceng' kpo, i can Enuti de,
Ter m'unura kpo Eyeyo ira de, Haleluya!
En e calu cero jobi, kugweno de enen.
An amaru Yesu dit ku cwinya kpo.`],
                  [`Anyong'a nego cwinya, jarimba nuti nja,
Ebigwoka ber m'Ecopo weka ngo.
Kum Enyayu foc i cwinya, mutoro dit mandha.
An amaru Yesu dit ku cwinya kpo.`, `Ekonya ceng' ku ceng' kpo, i can Enuti de,
Ter m'unura kpo Eyeyo ira de, Haleluya!
En e calu cero jobi, kugweno de enen.
An amaru Yesu dit ku cwinya kpo.`],
            ]
      },
      {
            id: '137',
            key: "F",
            tempo: "4/4",
            collections: ["BA 60", "H 200", "SW 233"],
            titles: ["Lem pa Yesu abiyio", "Where He Leads Me"],
            body: [
                  [`(Lem pa Yesu abiyio x3) Abiyio lembe pa Yesu.`, `(YomEtelo abilube x3) Abilubo ng'ei Yesu Kristu.`],
                  [`(Ka can nuti abikwaye x3) Abikwayu ru Yesu Kristu.`, `(YomEtelo abilube x3) Abilubo ng'ei Yesu Kristu.`],
                  [`(Lem m'Eyero abiwinjo x3) Abiwinjo lembe pa Yesu.`, `(YomEtelo abilube x3) Abilubo ng'ei Yesu Kristu.`],
                  [`(Tic m'Emio abitimo x3) Abitimo ni Yesu Kristu.`, `(YomEtelo abilube x3) Abilubo ng'ei Yesu Kristu.`],
                  [`(Ka tho senda abigene x3) Abegeno ru Yesu Kristu.`, `(YomEtelo abilube x3) Abilubo ng'ei Yesu Kristu.`],
            ]
      },
      {
            id: '138',
            key: "G",
            tempo: "9/8",
            collections: ["BA 61", "IH 291", "SW 148"],
            titles: ["Walub tok Yesu", "Heavenly Sunlight"],
            body: [
                  [`Walub tok Yesu kum En e der mwa,
Lworo mi mudho Sendowa ngo.
Ka Yesu cidho Eng'olo iwa, "Anuti kudu, cil nja ku nja."`, `(Der mi polo x2) Derne berieny tin yor i cwinya.
Haleluya, anyong'a nega, afoyo Yesu e Jalarna.`],
                  [`Mudho betieka, ecido wang'a,
Ecopo geng'o wang Yesu ngo.
Yesu e der mwa. Embe ku mudho,
Alubo toke, arwinyo ngo.`, `(Der mi polo x2) Derne berieny tin yor i cwinya.
Haleluya, anyong'a nega, afoyo Yesu e Jalarna.`],
                  [`Jumoko rwinyo i yo mi mudho,
Ento kajikne longro ma lieng'.
Kuca giywak dit, ku kayulak kwa,
Ka mi masendi ma nja ku nja.`, `(Der mi polo x2) Derne berieny tin yor i cwinya.
Haleluya, anyong'a nega, afoyo Yesu e Jalarna.`],
                  [`Wawoth asu ku Yesu ma der mwa ma watund ko i Kabedo mwa.
Mutoro negwa, wapak Jalar mwa,
Kum der m'uvoyo dubo mi ng'om.`, `(Der mi polo x2) Derne berieny tin yor i cwinya.
Haleluya, anyong'a nega, afoyo Yesu e Jalarna.`],
            ]
      },
      {
            id: '139',
            key: "Eb",
            tempo: "12/8",
            collections: ["BA 62", "IH 338", "SW 250"],
            titles: ["Dwok cwinywa leng' Yesu", "More Holiness Give Me"],
            body: [
                  [`Dwok cwinywa leng' Yesu, pidoic mwa bende
Miwa mwonyolembe tek wacoro cen.
Dong' wagen Jalar mwa, man wabed ku rwo
Kab adieng'acwinywa bim wi kumwa dho.`],
                  [`Mi dwokrileng' iwa, walub bedopwe,
Wayenyo Iromwa ku Tipo Maleng'.
Wath kumwa tim iri, jumiru mandha.
Keth can de unegwa tek watimo swa.`],
                  [`Wang'ei yeny pa Mungu m'e yirem'e cu,'
Man kothwa de lokre, wathier kumwa dho.
Wang'ei lembang'ola, wawore awe,
Wabed calu Yesu, kud ayine de.`],
                  [``],
            ]
      },
      {
            id: '140',
            key: "G",
            tempo: "3/2",
            collections: ["BA 63", "IH 94", "SW 212"],
            titles: ["Nyo an a jatic pa Jalar", "Am I a Soldier?"],
            body: [
                  [`Nyo an a jatic pa Jalar, akendo kendine?
Lewic unega pi Rwodha, amung'o berone?`],
                  [`Nyo an ageno abed nyap, jumange sendri gin?
Juyenya e aura ve, wek gin githo i lwiny?`],
                  [`Jakworna Jok ku dubo de, edoko jamerna?
Amer ku ju m'udagu Rwoth, arogo juwada!`],
                  [`Dong' awek amone ma rac m'atimno ba juwada!
Mak' akied lwiny ku tegocwiny atho ko ng'ei Rwodha!`],
            ]
      },
      {
            id: '141',
            key: "D",
            tempo: "6/8",
            collections: ["BA 64", "IH 23", "SW 172"],
            titles: ["Yo ma Yesu telo iwa", "Anywhere with Jesus"],
            body: [
                  [`Yo ma Yesu telo iwa bedo ber, wa jukwenda paare
Dong' wawore tho. Ju ma wotho kude jumutoro kwa.
Ndhu niwotho ka ma Yesu orowa.`, `Lworo mbe, cac umbe, wawinj dwand Jalar,
Ka ma Yesu orowa wawore ba.`],
                  [`Tek wawotho kude, Ebigwokowa ka jumer mwa bende
Kindwa koc kugi. I masendi ceke kadi ndiba de,
Yesu nyayu foyofoc i dhogwa re.`, `Lworo mbe, cac umbe, wawinj dwand Jalar,
Ka ma Yesu orowa wawore ba.`],
                  [`Tek wamaru Yesu dong' wamare cu, gin ma ie yenyo
Dong' watime ndhu. Lem mi ng'om bikadhu
Kud ayungane, ento wabibedo nja ku nja bang'e.`, `Lworo mbe, cac umbe, wawinj dwand Jalar,
Ka ma Yesu orowa wawore ba.`],
            ]
      },
      {
            id: '142',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 65", "IH 180", "SW 203"],
            titles: ["Wukuru, wubed nger", "Stand Up for Jesus"],
            body: [
                  [`Wukuru, wubed nger de, wu jutic pa Yesu.
Wuting abera pare man wulub toke cu.`, `Jadegi, wonabali, m'uyenyo rwinyo dhanu,
Jalar mwa Yesu loye kor yen mi Kalvari.`],
                  [`Wukuru, wubed nger de ku tego pa Yesu.
Wukoc ku dubo ceke ku lem pa Jok de ndhu.`, `Jadegi, wonabali, m'uyenyo rwinyo dhanu,
Jalar mwa Yesu loye kor yen mi Kalvari.`],
                  [`Wukuru, wubed nger de, rony jamtho pa Mungu.
Wugut ni wonabali, e ebiringowu.`, `Jadegi, wonabali, m'uyenyo rwinyo dhanu,
Jalar mwa Yesu loye kor yen mi Kalvari.`],
                  [`Wukuru, wubed nger de, ceng' moko lwiny bithum,
E Yesu won aloci bibimo dhanu yu.`, `Jadegi, wonabali, m'uyenyo rwinyo dhanu,
Jalar mwa Yesu loye kor yen mi Kalvari.`],
            ]
      },
      {
            id: '143',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 67", "IH 178", "SW 314"],
            titles: ["Kudh agwara do", "Sound the Battle Cry"],
            body: [
                  [`Kudh agwara do, dong' wacokra kpo! Jukwojwa gitie
I wang'wa ca! Ting abera mwa wakur bang'e ba!
Yesu Jawipiro mwa mandha!`, `Bed tek, wuting' cingwu m'uoi jeble!
Bed ayika, wudwok congwu tek!
Cidh i weng'wu lwiny ma dit bekiedre!
Yesu Jawipiro mwa mandha!`],
                  [`Cung atira do, wuriei cu jufwa, lem mi bedopwe
M'esagu kpo. Aloci ku dwong' en e yioyic,
Yesu Jawipiro mwa mandha!`, `Bed tek, wuting' cingwu m'uoi jeble!
Bed ayika, wudwok congwu tek!
Cidh i weng'wu lwiny ma dit bekiedre!
Yesu Jawipiro mwa mandha!`],
                  [`Man ka lwiny uthum ka wavoyogi,
Sukulia mwa jamkermiwic,
In i Mungu mwa wabipeki nja, wabilubo Jawiripiro ma!`, `Bed tek, wuting' cingwu m'uoi jeble!
Bed ayika, wudwok congwu tek!
Cidh i weng'wu lwiny ma dit bekiedre!
Yesu Jawipiro mwa mandha!`],
            ]
      },
      {
            id: '144',
            key: "E",
            tempo: "4/4",
            collections: ["BA 68", "IH 177", "SW 209"],
            titles: ["Wacidhu, Jukristu", "Onward Christian Soldiers"],
            body: [
                  [`Wacidhu, Jukristu, waci kiedo lwiny, wanen ko ba Yesu
Jathek yioyic, En Etelo wiwa, Ebivoyo de,
Kied ku tegocwinywu, wabivoyo be.`, `Wacidhu Jukristu, waci kiedo lwiny,
Wavoi ko jadegi ndhu ku tegocwiny!`],
                  [`Tek walubo Yesu wabivoyo Jok, tek wacogo wie
Ebiringo pio. En e won abidhe, won agobe de,
Lemandha bivoye, wawodh lembene.`, `Wacidhu Jukristu, waci kiedo lwiny,
Wavoi ko jadegi ndhu ku tegocwiny!`],
                  [`Kanisa pa Kristu en e thek acel, ku juwadwa dupa,
Jatelwic acel. Kisa pare ribowa ndhu ku ripocwiny.
Wan acel ku genogen, man ku berocwiny.`, `Wacidhu Jukristu, waci kiedo lwiny,
Wavoi ko jadegi ndhu ku tegocwiny!`],
                  [`Dong' wacidh i wang' wa wan wa ju pa Rwoth,
Aloci ni bangwa rondo ku rondo. Ubimo mwa Yesu
Bimo dhanu yu, dwong' ku pak mi dhogwa
Bed ni Rwoth mwa ndhu!`, `Wacidhu Jukristu, waci kiedo lwiny,
Wavoi ko jadegi ndhu ku tegocwiny!`],
            ]
      },
      {
            id: '145',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 69", "IH 328", "SW 141"],
            titles: ["Cung i lembang'ola", "Standing on the Promises"],
            body: [
                  [`Cung i lembang'ola pa Rwoth Yesu mwa,
Dong' ipak nying Yesu, dong' ifoye nja.
Lembe pare cungo en e lemandha,
Cung i lembang'ola pa Jalar.`, `Gene, gene.
Dong' igen gin ceke ma Rwoth Yesu ng'olo,
Gene, gene.
Gen lembang'ola pa Rwoth Yesu mwa.`],
                  [`Cung i lembang'ola pa Rwoth Yesu mwa,
Lembe pare nyothre ngo, ebedo nja, man lewic binego
Ju m'ugene ngo, cung i lembang'ola pa Jalar.`, `Gene, gene.
Dong' igen gin ceke ma Rwoth Yesu ng'olo,
Gene, gene.
Gen lembang'ola pa Rwoth Yesu mwa.`],
                  [`Cung i lembang'ola pa Rwoth Yesu mwa,
Lembe ma bigonyowa e lemandha, en e lem mi kwo ni ju
M'uyie de, cung i lembang'ola pa Jalar.`, `Gene, gene.
Dong' igen gin ceke ma Rwoth Yesu ng'olo,
Gene, gene.
Gen lembang'ola pa Rwoth Yesu mwa.`],
            ]
      },
      {
            id: '146',
            key: "G",
            tempo: "4/4",
            collections: ["BA 70", "CH 296", "SW 187"],
            titles: ["Tek imbe ku piny", "Leave it There"],
            body: [
                  [`Tek imbe ku piny mi ng'om ywak unyai i dhogi dwong',
Kec unegi dit aka; E kendi yec. Mungu gwoko winyo kpo.
Cwinygi ringo rr ungo, mi masendi peri ceke ba Yesu.`, `Mi bang'e, mi bang'e
Mi masendi peri ceke ba Yesu.
Kan isendri, man ivoc, rwo i bang'e kud ikoc,
Mi masendi peri ceke ba Yesu.`],
                  [`Tek tho remo kumi hai, congi mbe, i ng'ic ma gwei.
Cwinyi de udoko rac e weng'i col. Dong' i ng'ei Yesu jakei.
Ebiweki ngo Etie, mi masendi peri ceke ba Yesu.`, `Mi bang'e, mi bang'e
Mi masendi peri ceke ba Yesu.
Kan isendri, man ivoc, rwo i bang'e kud ikoc,
Mi masendi peri ceke ba Yesu.`],
                  [`Tek judegi doti rac e gilwong'o nyingi Swa,
Ii pido ya juwedu weki kpo. Yesu nuti i beng'i nja,
Cir ku tegocwiny wada, mi masendi peri ceke ba Yesu.`, `Mi bang'e, mi bang'e
Mi masendi peri ceke ba Yesu.
Kan isendri, man ivoc, rwo i bang'e kud ikoc,
Mi masendi peri ceke ba Yesu.`],
                  [`Tek iol, imaku ti, tego mbe m'uromo tic.
Lwar upodh i wii, ter iyeyo ngo. Mungu maru ju m'uti,
Bed i kore, gwake ki, mi masendi peri ceke ba Yesu.`, `Mi bang'e, mi bang'e
Mi masendi peri ceke ba Yesu.
Kan isendri, man ivoc, rwo i bang'e kud ikoc,
Mi masendi peri ceke ba Yesu.`],
            ]
      },
      {
            id: '147',
            key: "F",
            tempo: "6/8",
            collections: ["BA 71", "IH 171", "SW 210"],
            titles: ["Jukristu wuwek lem ma sai", "Faith is the Victory"],
            body: [
                  [`Jukristu wuwek lem ma sai, wameku ban mi lwiny.
Wugalu dwong' i lem mi ng'om wunyayu ndhu ng'ecwiny.
Kum Yesu neno dubo mwa kadok wasomo hai,
Aloci mwa m'uloyo ng'om e yioyic mandha.`, `(Rwoth voyo dubo kpo x2)
Aloci m'uloyo ng'om ndhu yioyic mandha.`],
                  [`Wating' jamtho pa Mungu kpo, thungu mi yioyic.
Waroi asi mi bedopwe ku rwo, ku kwayukwac,
Mer pare en abera mwa, ku pala pa Jalar,
Ma lake bith ma kun ku kun ma en e lemandha.`, `(Rwoth voyo dubo kpo x2)
Aloci m'uloyo ng'om ndhu yioyic mandha.`],
                  [`Judegi mwa gitiekowa gilibo tego mwa.
Athero migi kilowa, gigom kum thungu mwa.
Waketho sabu de mi both, walutho wara de.
Aloci mwa m'uloyo ng'om ndhu yioyic mandha.`, `(Rwoth voyo dubo kpo x2)
Aloci m'uloyo ng'om ndhu yioyic mandha.`],
            ]
      },
      {
            id: '148',
            key: "F",
            tempo: "3/4",
            collections: ["BA 72", "IH 402", "SW 162"],
            titles: ["Kawawotho ku Rwoth", "Trust and Obey"],
            body: [
                  [`Kawawotho ku Rwoth mberemberene yot,
Wothne bedo ber dit emiero. Rwoth ni bang'wa awe,
Dong' walub toke dre man watimu kayeny pare cu.`, `Gene, wore, yo mange moko mbe,
Ma junwang'u k'anyong'a, ndhu i lembe pare.`],
                  [`Paru can moko mbe, yutho wang'jo de mbe ma Jalar
Jukowa ngo ie. Cwiny ma jiji de mbe, man piwang'wa
Ng'oi ngo kum Jajuk nuti, wagene ndhu.`, `Gene, wore, yo mange moko mbe,
Ma junwang'u k'anyong'a, ndhu i lembe pare.`],
                  [`Ter ma pek nurowa kud adieng'acwiny mwa, Yesu wacu
Wabol i kore. Tho m'urubowa rek, yen m'athara ma pek,
Ju m'ugene, Eyungogi dre.`, `Gene, wore, yo mange moko mbe,
Ma junwang'u k'anyong'a, ndhu i lembe pare.`],
                  [`Dong' waribra kude, dong wabed the tiende,
Wabiwotho waku Yesu dre. Wabitimo ire wabifoye awe,
Kud walwor, wagene, wawore.`, `Gene, wore, yo mange moko mbe,
Ma junwang'u k'anyong'a, ndhu i lembe pare.`],
            ]
      },
      {
            id: '149',
            key: "D",
            tempo: "6/8",
            collections: ["BA 95", "IH 138", "SW 214"],
            titles: ["Abicidho ma cinga nanu", "Must I Go and Empty"],
            body: [
                  [`Abicidho ma cinga nanu, aci rombo ku Yesu Rwoth?
Rundi meni mi ponjo dhanu, gin mange mak' acor cen.`, `Wabicungo i wang' Jalar mwa, Ebikoro i tic mwa kpo.
Lewic ni ju ma cing' gi nanu, an ayenyo para ngo.`],
                  [`An alworo ngo tho m’unega kum aboth ni kum rimb Yesu,
Ento cidho ma cinga nanu ebedieng'o cwinya dit.`, `Wabicungo i wang' Jalar mwa, Ebikoro i tic mwa kpo.
Lewic ni ju ma cing' gi nanu, an ayenyo para ngo.`],
                  [`Nindo dupa ukadhu iwa ma watimo tic moko ngo.
Mak' wacidhu kawono nini, wayer lembe pa Yesu.`, `Wabicungo i wang' Jalar mwa, Ebikoro i tic mwa kpo.
Lewic ni ju ma cing' gi nanu, an ayenyo para ngo.`],
                  [`Wa Jukristu wacidhu yau yau, nindo mi timo tije tin,
Ma wapoi ie ju m'urwinyo nyo kajik mi ng'omne tin.`, `Wabicungo i wang' Jalar mwa, Ebikoro i tic mwa kpo.
Lewic ni ju ma cing' gi nanu, an ayenyo para ngo.`],
            ]
      },
      {
            id: '150',
            key: "F",
            tempo: "4/4",
            collections: ["BA 74", "IH 410", "SW 207"],
            titles: ["Work for the Night", "Tim tic ni Yesu Kristu"],
            body: [
                  [`Tim tic ni Yesu Kristu ka fodi kumi leng',
Tim ire tic ku tego, tim ku ba rupiny.
Tim ticne ku mutoro ka fodi ceng' urieny
Kum diewor ubino ka tic mwa bithum.`],
                  [`Yesu utimo tic dit kinde m'Etie i ng'om.
Ekeyo kum jo dupa cil ma ticne thum.
Esendre dit apila, endre Ekwero ngo,
Ceke Etimo iwa cil tho m'Etho ko.`],
                  [`Yesu beneno bang'wa lem moko kandre ngo.
Eng'eyo lem m'i iwa, ku tic m'watimo.
Ber ka walubo toke, ku tic m'Etimo En,
Wanyuth ko ya wamare, wafoye kudo.`],
            ]
      },
      {
            id: '151',
            key: "A",
            tempo: "4/4",
            collections: ["BA 79", "IH 323", "SW 157"],
            titles: ["Cwinywa ripo ndhu", "Leaning on the Everlasting"],
            body: [
                  [`Cwinywa ripo ndhu waku Yesugi
Ka wajengra kor Jalar Yesu.
Wan wabedo ber, pidoic umbe
Ka wajengra kor Jalar Yesu.`, `Jengri, Jengri
Ejengo ju m'ugene cu.
Jengri, Jengri
Dong' wajengra kor Jalar Yesu.`],
                  [`Wan wawotho ber i yo pa Jalar,
Ka wajengra kor Jalar Yesu.
Yo mwa lero ber kum Yesu m'e der,
Ka wajengra kor Jalar Yesu.`, `Jengri, Jengri
Ejengo ju m'ugene cu.
Jengri, Jengri
Dong' wajengra kor Jalar Yesu.`],
                  [`Wan wayeny' ang'o wan walwor ang'o,
Ka wajengra kor Jalar Yesu.
Cwinywa kwio kpo, ndiri ringo bor,
Ka wajengra kor Jalar Yesu.`, `Jengri, Jengri
Ejengo ju m'ugene cu.
Jengri, Jengri
Dong' wajengra kor Jalar Yesu.`],
            ]
      },
      {
            id: '152',
            key: "F",
            tempo: "4/4",
            collections: ["BA 121"],
            titles: ["Wan wabepokra ken' i ng'om", "Auld Lang Syne"],
            body: [
                  [`Wan wabepokra ken' i ng'om, kabedo ma tung tung',
Re, Yesu neno bang'wa nja kadok wapokra bor.`, `Mer pa Yesu m'uribowa ethum ungo cil nja,
Rwoth Yesu maruwa jufwa Ewotho kudwa ndhu.`],
                  [`Kadok wanendra kendo ngo kud i ng'om kakeni.
Wang'eyo wabinen kendo ba Yesu i polo.`, `Mer pa Yesu m'uribowa ethum ungo cil nja,
Rwoth Yesu maruwa jufwa Ewotho kudwa ndhu.`],
                  [`Tek lembe wok m'ucori cen, icidho ka mange,
Kud iwek lem pa Mungu ki, cung tek wi yioyic.`, `Mer pa Yesu m'uribowa ethum ungo cil nja,
Rwoth Yesu maruwa jufwa Ewotho kudwa ndhu.`],
            ]
      },
      {
            id: '153',
            key: "E",
            tempo: "6/8",
            collections: ["IH 158", "SW 17"],
            titles: ["Thala m'umenyo ira yo", "Thy Word have I Hid"],
            body: [
                  [`Thala m'umenyo ira yo en e Lembe pa Mungu
M'utelo wia atira i yo m'utund' i polo.`, `Akanu Lembe ma peri i bang'a i adundena,
(Kara kud adub x2) akanu Lembe ma peri.`],
                  [`Lem peri Rwoth, bedo mi nja ecungo m'elokre ngo.
Eponjowa dhanu m'i ng'om bedo mandha pa Yesu.`, `Akanu Lembe ma peri i bang'a i adundena,
(Kara kud adub x2) akanu Lembe ma peri.`],
                  [`Kugweno, dieceng' ku diewor apaku Rwoth Mungu nja.
Iromo pira ku ba ceng' cil i nindona ceke.`, `Akanu Lembe ma peri i bang'a i adundena,
(Kara kud adub x2) akanu Lembe ma peri.`],
                  [`Jubila gigoro piri i Jalar Yesu ma Rwoth.
Ikelo both ku kwiocwiny ni ju ma girwinyo swa.`, `Akanu Lembe ma peri i bang'a i adundena,
(Kara kud adub x2) akanu Lembe ma peri.`],
            ]
      },
      {
            id: '154',
            key: "Bb",
            tempo: "4/4",
            collections: ["BA 131"],
            titles: ["An amaru Yesu Kristu", "Why I Love"],
            body: [
                  [`An amaru Yesu Kristu, Yesu En e Jalarna
Yesu culo dubo para kuca wi got Kalvari.`, `An amaru Yesu Kristu, an ayio Yesune
Lembapoka Yesu culo, an ayio rimone`],
                  [`An amaru Yesu Kristu, Yesu En e Jalarna,
An a leng' de ni kum rimbe, rimone mi Kalvari.`, `An amaru Yesu Kristu, an ayio Yesune
Lembapoka Yesu culo, an ayio rimone`],
                  [`An amaru Yesu Kristu, Yesu En e Jarimba,
Tin Ebedo mal' i polo karacelo ku Wego.`, `An amaru Yesu Kristu, an ayio Yesune
Lembapoka Yesu culo, an ayio rimone`],
                  [`An amaru Yesu Kristu, En e Won aloci kpo.
Ceng' mi lwiny Yesu ni bang'wa Ebiwekowa de ngo.`, `An amaru Yesu Kristu, an ayio Yesune
Lembapoka Yesu culo, an ayio rimone`],
            ]
      },
      {
            id: '155',
            key: "G",
            tempo: "9/8",
            collections: ["IH 36"],
            titles: ["Yang' Mungu ng'olo", "Precious Promises"],
            body: [
                  [`Yang' Mungu ng'olo ya Ebikonyi
Tek ibesendri pi bedopwe.
"I yo m'ikwanyu, kind ng'om ku polo
Wang'a bikengo wii i yo."`, `"An Abimio riekona iri, wang'a bikenyo wii i yo."
I yo m'ikwanyu kind ng'om ku polo
Wang'a bilkengo wii i yo."`],
                  [`Ka lembabidhe bedieng'o cwinyi,
Dubo bevoyi i yo mi kwo.
Bed ndhu ku tego kum Mungu ng'olo
Wang'a bikengo wii i yo."`, `"An Abimio riekona iri, wang'a bikenyo wii i yo."
I yo m'ikwanyu kind ng'om ku polo
Wang'a bilkengo wii i yo."`],
                  [`Tek nwang' igeno gin ma jufoyo
Ento enyothre, lembene rany.
Ponji bijuki tek ibiparu Mungu mandha, Ewondowa ngo.`, `"An Abimio riekona iri, wang'a bikenyo wii i yo."
I yo m'ikwanyu kind ng'om ku polo
Wang'a bilkengo wii i yo."`],
                  [`Ka tho bedhingi, tegoni thum de, ii bepido, kwoni bevoc,
Winj dwande kuca ram Ebewacu,
"Wang'a bikengo wii i yo."`, `"An Abimio riekona iri, wang'a bikenyo wii i yo."
I yo m'ikwanyu kind ng'om ku polo
Wang'a bilkengo wii i yo."`],
            ]
      },
      {
            id: '156',
            key: "F",
            tempo: "6/8",
            collections: ["BA 142", "IH 335", "SW 77"],
            titles: ["Ng'om yu cido bi", "The Light of the World"],
            body: [
                  [`Ng'om yu cido bi dubo nyothe mandha, re der mi ng'om
Yu e Yesu. Emenyo yo iwa ka Jalar uwok
Kum der mi ng'om yu e Yesu.`, `Bin ba derne Emeny iri yo. Edoko derna m'awotho ko.
Con an abinga dong' wang'a kei
Kum der mi ng'om yu e Yesu.`],
                  [`Lub ng'eye e mudho bisendi ungo
Kum der mi ng'om yu e Yesu.
Lem pare e thala m'unyuthowa yo,
Kum der mi ng'om yu e Yesu.`, `Bin ba derne Emeny iri yo. Edoko derna m'awotho ko.
Con an abinga dong' wang'a kei
Kum der mi ng'om yu e Yesu.`],
                  [`Tek cudho becwenyi isendri i yo, jol der mi ng'om
Yu e Yesu. Rimbe copo kei tek weng'i ucor,
Kum der mi ng'om yu e Yesu.`, `Bin ba derne Emeny iri yo. Edoko derna m'awotho ko.
Con an abinga dong' wang'a kei
Kum der mi ng'om yu e Yesu.`],
                  [`I polo juywagu der mange de ngo kum Yesu e der
Mi polo. Adhura mi mola ebedo leng' njwa,
Kum derne e Nyathi Rombo.`, `Bin ba derne Emeny iri yo. Edoko derna m'awotho ko.
Con an abinga dong' wang'a kei
Kum der mi ng'om yu e Yesu.`],
            ]
      },
      {
            id: '157',
            key: "Eb",
            tempo: "4/4",
            collections: ["IH 264", "SW 103"],
            titles: ["Ang'o m'uketho Mungu nyutho ira \n(2 Tim 1:12)", "I Know Whom I Have"],
            body: [
                  [`Ang'o m'uketho Mungu nyutho ira berone m'usagre kpo?
Kadok adubo sagu jumange e rimbe lwoko dubona.`, `Ento an ang'eyo andhandha, ayio mandha ya En
Ecopo nigwoko gin ceke ira cil i ceng' m'Edwogo ko.`],
                  [`Ang'o m'uketho Mungu mio ira yic m'ayie keth aboth?
Man tek ayio Lembe pare cu, Ekwio cwinya lwe.`, `Ento an ang'eyo andhandha, ayio mandha ya En
Ecopo nigwoko gin ceke ira cil i ceng' m'Edwogo ko.`],
                  [`Ang'o m’uketho Tipo Mungu tuco i cwinya pi dubona?
Enyutho ira Yesu i Lem pare kar' abed ku yioyic.`, `Ento an ang'eyo andhandha, ayio mandha ya En
Ecopo nigwoko gin ceke ira cil i ceng' m'Edwogo ko.`],
                  [`Nyo lembang'o m'ubino i wang'a,
Lembe ma ber kadi ma rac?
Ma fod' aneno wang' Jalarna ngo masendi kadi anyonga?`, `Ento an ang'eyo andhandha, ayio mandha ya En
Ecopo nigwoko gin ceke ira cil i ceng' m'Edwogo ko.`],
                  [`Ang eyo ngo nindo ma Rwoth bidwogo, i diewor kadi dieceng.
Nyo abikadhu tipopiny mi tho, nyo wabirombo i lietho.`, `Ento an ang'eyo andhandha, ayio mandha ya En
Ecopo nigwoko gin ceke ira cil i ceng' m'Edwogo ko.`],
            ]
      },
      {
            id: '158',
            key: "F",
            tempo: "3/4",
            collections: ["IH 353", "SW 188"],
            titles: ["Atho ku Yesu wakude", "Moment by Moment"],
            body: [
                  [`Atho ku Yesu, wakude kor yen, akwo ku Yesu,
Kwo m'ubedo nyen, aneno Yesu cil ma derne rieny.
Ku ba ceng' ceke Rwoth, an a peri.`, `Ku ba ceng' ceke Egwoka ku mer, ku ba ceng ceke
Amaku kwone. Aneno Yesu cil ma derne rieny,
Ku ba ceng' ceke Rwoth, an a perl.`],
                  [`Kadok jubidha, Enut'i bang'a, ter para ceke
Eyeyogi En. Eribre kuda i can para kpo,
Ku ba ceng' ceke Egwoka ndhu cu.`, `Ku ba ceng' ceke Egwoka ku mer, ku ba ceng ceke
Amaku kwone. Aneno Yesu cil ma derne rieny,
Ku ba ceng' ceke Rwoth, an a perl.`],
                  [`Ka cwinya ng'abre m'acur ko ku can, piwang'a cwir dit,
Aywak de mumbe. Kadok abedo ku lembe ma tek
Ku ba ceng' ceke Eparu pira.`, `Ku ba ceng' ceke Egwoka ku mer, ku ba ceng ceke
Amaku kwone. Aneno Yesu cil ma derne rieny,
Ku ba ceng' ceke Rwoth, an a perl.`],
            ]
      },
];