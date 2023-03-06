const categoryPath = {
  world: 'world',
  humanrights: 'humanrights',
  politicsAndSociety: 'politics-and-society',
  health: 'health',
  environment: 'environment',
  econ: 'econ',
  culture: 'culture',
  education: 'education',
  podcast: 'podcast',
  opinion: 'opinion',
  photography: 'photography',
}

export const CATEGORY_PATH = categoryPath

export const CATEGORY_ORDER = [
  categoryPath.world,
  categoryPath.humanrights,
  categoryPath.politicsAndSociety,
  categoryPath.health,
  categoryPath.environment,
  categoryPath.econ,
  categoryPath.culture,
  categoryPath.education,
]

// todo: update id when db ready
export const CATEGORY_LABEL = {
  [categoryPath.world]: '國際兩岸',
  [categoryPath.humanrights]: '人權司法',
  [categoryPath.politicsAndSociety]: '政治社會',
  [categoryPath.health]: '醫療健康',
  [categoryPath.environment]: '環境永續',
  [categoryPath.econ]: '經濟產業',
  [categoryPath.culture]: '文化生活',
  [categoryPath.education]: '教育校園',
  [categoryPath.podcast]: 'Podcast',
  [categoryPath.opinion]: '評論',
  [categoryPath.photography]: '影像',
}

export const CATEGORY_ID = {
  [categoryPath.world]: '63206383207bf7c5f871622c',
  [categoryPath.humanrights]: '63206383207bf7c5f8716234',
  [categoryPath.politicsAndSociety]: '63206383207bf7c5f871623d',
  [categoryPath.health]: '63206383207bf7c5f8716245',
  [categoryPath.environment]: '63206383207bf7c5f871624d',
  [categoryPath.econ]: '63206383207bf7c5f8716254',
  [categoryPath.culture]: '63206383207bf7c5f8716259',
  [categoryPath.education]: '63206383207bf7c5f8716260',
  [categoryPath.podcast]: '63206383207bf7c5f8716266',
  [categoryPath.opinion]: '63206383207bf7c5f8716269',
  [categoryPath.photography]: '574d028748fa171000c45d48',
}

// flip CATEGORY_ID to a {id: path} object
let categoryIDToPath = {}
Object.entries(CATEGORY_ID).forEach(([key, value]) => {
  categoryIDToPath[value] = key
})
export const GET_CATEGORY_PATH_FROM_ID = id => {
  return categoryIDToPath[id]
}

const subcategoryPath = {
  all: 'all',
  hk: 'hk',
  china: 'china',
  us: 'us',
  jpAndKr: 'jp-and-kr',
  indoPacific: 'indo-pacific',
  europe: 'europe',
  others: 'others',
  gender: 'gender',
  labor: 'labor',
  immigrant: 'immigrant',
  housingJustice: 'housing-justice',
  transformationalJustice: 'transformational-justice',
  socialAdministration: 'social-administration',
  justice: 'justice',
  digital: 'digital',
  election: 'election',
  politicalPartyAndLocalFaction: 'political-party-and-local-faction',
  policy: 'policy',
  transportation: 'transportation',
  foodSafety: 'food-safety',
  informationWarfare: 'information-warfare',
  socialwatch: 'socialwatch',
  pandemic: 'pandemic',
  healthPolicy: 'health-policy',
  biotech: 'biotech',
  patientAutonomy: 'patient-autonomy',
  psychology: 'psychology',
  longTermCare: 'long-term-care',
  publicHealth: 'public-health',
  cicularEconomy: 'circular-economy',
  ocean: 'ocean',
  mountainAndForest: 'mountain-and-forest',
  animal: 'animal',
  climateChange: 'climatechange',
  pollution: 'pollution',
  naturalDisaster: 'natural-disaster',
  economy: 'economy',
  energyEcon: 'energy-econ',
  agriculture: 'agriculture',
  technology: 'technology',
  peAndSports: 'pe-and-sports',
  movie: 'movie',
  publishing: 'publishing',
  music: 'music',
  dramaAndTheatre: 'drama-and-theatre',
  art: 'art',
  eduPolicy: 'edu-policy',
  higherEducation: 'higher-education',
  teens: 'teens',
  parenting: 'parenting',
  lowBirthRate: 'low-birth-rate',
  theRealStory: 'the-real-story',
  onTheGround: 'on-the-ground',
  bookReview: 'book-review',
  letter: 'letter',
}

export const SUBCATEGORY_PATH = subcategoryPath

export const SUBCATEGORY_LABEL = {
  [subcategoryPath.all]: '全部',
  [subcategoryPath.hk]: '香港',
  [subcategoryPath.china]: '中國',
  [subcategoryPath.us]: '美國',
  [subcategoryPath.jpAndKr]: '日韓',
  [subcategoryPath.indoPacific]: '東南亞與印太',
  [subcategoryPath.europe]: '歐洲',
  [subcategoryPath.others]: '其他',
  [subcategoryPath.gender]: '性別',
  [subcategoryPath.labor]: '勞動',
  [subcategoryPath.immigrant]: '移工與移民',
  [subcategoryPath.housingJustice]: '居住正義',
  [subcategoryPath.transformationalJustice]: '轉型正義',
  [subcategoryPath.socialAdministration]: '社政安置',
  [subcategoryPath.justice]: '獄政司法',
  [subcategoryPath.digital]: '數位人權',
  [subcategoryPath.election]: '選舉',
  [subcategoryPath.politicalPartyAndLocalFaction]: '政黨與地方政治',
  [subcategoryPath.policy]: '政策',
  [subcategoryPath.transportation]: '交通',
  [subcategoryPath.foodSafety]: '食安',
  [subcategoryPath.informationWarfare]: '資訊戰',
  [subcategoryPath.socialwatch]: '社會觀察',
  [subcategoryPath.pandemic]: '疫情',
  [subcategoryPath.healthPolicy]: '醫療政策',
  [subcategoryPath.biotech]: '生物科技',
  [subcategoryPath.patientAutonomy]: '病人自主權利',
  [subcategoryPath.psychology]: '心理',
  [subcategoryPath.longTermCare]: '長照',
  [subcategoryPath.publicHealth]: '公共衛生',
  [subcategoryPath.cicularEconomy]: '循環經濟',
  [subcategoryPath.ocean]: '海洋',
  [subcategoryPath.mountainAndForest]: '山林',
  [subcategoryPath.animal]: '動物',
  [subcategoryPath.climateChange]: '能源與氣候變遷',
  [subcategoryPath.pollution]: '環境污染',
  [subcategoryPath.naturalDisaster]: '自然災害',
  [subcategoryPath.economy]: '經濟',
  [subcategoryPath.energyEcon]: '能源',
  [subcategoryPath.agriculture]: '農林漁牧',
  [subcategoryPath.technology]: '科技',
  [subcategoryPath.peAndSports]: '體育',
  [subcategoryPath.movie]: '電影',
  [subcategoryPath.publishing]: '出版',
  [subcategoryPath.music]: '音樂',
  [subcategoryPath.dramaAndTheatre]: '戲劇',
  [subcategoryPath.art]: '藝術',
  [subcategoryPath.eduPolicy]: '教育政策',
  [subcategoryPath.higherEducation]: '高等教育',
  [subcategoryPath.teens]: '青少年',
  [subcategoryPath.parenting]: '育兒',
  [subcategoryPath.lowBirthRate]: '少子化',
  [subcategoryPath.theRealStory]: 'The Real Story',
  [subcategoryPath.onTheGround]: 'On the Ground 路邊攤計畫',
  [subcategoryPath.bookReview]: '書摘與書評',
  [subcategoryPath.letter]: '讀者投書',
}

export const SUBCATEGORY_ID = {
  [subcategoryPath.all]: '',
  [subcategoryPath.hk]: '63206383207bf7c5f871622d',
  [subcategoryPath.china]: '63206383207bf7c5f871622e',
  [subcategoryPath.us]: '63206383207bf7c5f871622f',
  [subcategoryPath.jpAndKr]: '63206383207bf7c5f8716230',
  [subcategoryPath.indoPacific]: '63206383207bf7c5f8716231',
  [subcategoryPath.europe]: '63206383207bf7c5f8716232',
  [subcategoryPath.others]: '63206383207bf7c5f8716233',
  [subcategoryPath.gender]: '63206383207bf7c5f8716235',
  [subcategoryPath.labor]: '63206383207bf7c5f8716236',
  [subcategoryPath.immigrant]: '63206383207bf7c5f8716237',
  [subcategoryPath.housingJustice]: '63206383207bf7c5f8716238',
  [subcategoryPath.transformationalJustice]: '63206383207bf7c5f8716239',
  [subcategoryPath.socialAdministration]: '63206383207bf7c5f871623a',
  [subcategoryPath.justice]: '63206383207bf7c5f871623b',
  [subcategoryPath.digital]: '63206383207bf7c5f871623c',
  [subcategoryPath.election]: '63206383207bf7c5f871623e',
  [subcategoryPath.politicalPartyAndLocalFaction]: '63206383207bf7c5f871623f',
  [subcategoryPath.policy]: '63206383207bf7c5f8716240',
  [subcategoryPath.transportation]: '63206383207bf7c5f8716241',
  [subcategoryPath.foodSafety]: '63206383207bf7c5f8716242',
  [subcategoryPath.informationWarfare]: '63206383207bf7c5f8716243',
  [subcategoryPath.socialwatch]: '63206383207bf7c5f8716244',
  [subcategoryPath.pandemic]: '63206383207bf7c5f8716246',
  [subcategoryPath.healthPolicy]: '63206383207bf7c5f8716247',
  [subcategoryPath.biotech]: '63206383207bf7c5f8716248',
  [subcategoryPath.patientAutonomy]: '63206383207bf7c5f8716249',
  [subcategoryPath.psychology]: '63206383207bf7c5f871624a',
  [subcategoryPath.longTermCare]: '63206383207bf7c5f871624b',
  [subcategoryPath.publicHealth]: '63206383207bf7c5f871624c',
  [subcategoryPath.cicularEconomy]: '63206383207bf7c5f871624e',
  [subcategoryPath.ocean]: '63206383207bf7c5f871624f',
  [subcategoryPath.mountainAndForest]: '63206383207bf7c5f8716250',
  [subcategoryPath.animal]: '63206383207bf7c5f8716251',
  [subcategoryPath.climateChange]: '633407174a9cab5ac7a90738',
  [subcategoryPath.pollution]: '63206383207bf7c5f8716252',
  [subcategoryPath.naturalDisaster]: '63206383207bf7c5f8716253',
  [subcategoryPath.economy]: '63206383207bf7c5f8716255',
  [subcategoryPath.energyEcon]: '63206383207bf7c5f8716256',
  [subcategoryPath.agriculture]: '63206383207bf7c5f8716257',
  [subcategoryPath.technology]: '63206383207bf7c5f8716258',
  [subcategoryPath.peAndSports]: '63206383207bf7c5f871625a',
  [subcategoryPath.movie]: '63206383207bf7c5f871625b',
  [subcategoryPath.publishing]: '63206383207bf7c5f871625c',
  [subcategoryPath.music]: '63206383207bf7c5f871625d',
  [subcategoryPath.dramaAndTheatre]: '63206383207bf7c5f871625e',
  [subcategoryPath.art]: '63206383207bf7c5f871625f',
  [subcategoryPath.eduPolicy]: '63206383207bf7c5f8716261',
  [subcategoryPath.higherEducation]: '63206383207bf7c5f8716262',
  [subcategoryPath.teens]: '63206383207bf7c5f8716263',
  [subcategoryPath.parenting]: '63206383207bf7c5f8716264',
  [subcategoryPath.lowBirthRate]: '63206383207bf7c5f8716265',
  [subcategoryPath.theRealStory]: '63206383207bf7c5f8716267',
  [subcategoryPath.onTheGround]: '63206383207bf7c5f8716268',
  [subcategoryPath.bookReview]: '63206383207bf7c5f871626a',
  [subcategoryPath.letter]: '63206383207bf7c5f871626b',
}

// flip SUBCATEGORY_ID to a {id: path} object
let subcategoryIDToPath = {}
Object.entries(SUBCATEGORY_ID)
  .filter(([key, value]) => key !== subcategoryPath.all)
  .forEach(([key, value]) => {
    subcategoryIDToPath[value] = key
  })
export const GET_SUBCATEGORY_PATH_FROM_ID = id => {
  return subcategoryIDToPath[id]
}

export const CATEGORY_SET = {
  [categoryPath.world]: [
    subcategoryPath.all,
    subcategoryPath.hk,
    subcategoryPath.china,
    subcategoryPath.us,
    subcategoryPath.jpAndKr,
    subcategoryPath.indoPacific,
    subcategoryPath.europe,
    subcategoryPath.others,
  ],
  [categoryPath.humanrights]: [
    subcategoryPath.all,
    subcategoryPath.gender,
    subcategoryPath.labor,
    subcategoryPath.immigrant,
    subcategoryPath.housingJustice,
    subcategoryPath.transformationalJustice,
    subcategoryPath.socialAdministration,
    subcategoryPath.justice,
    subcategoryPath.digital,
  ],
  [categoryPath.politicsAndSociety]: [
    subcategoryPath.all,
    subcategoryPath.election,
    subcategoryPath.politicalPartyAndLocalFaction,
    subcategoryPath.policy,
    subcategoryPath.transportation,
    subcategoryPath.foodSafety,
    subcategoryPath.informationWarfare,
    subcategoryPath.socialwatch,
  ],
  [categoryPath.health]: [
    subcategoryPath.all,
    subcategoryPath.pandemic,
    subcategoryPath.healthPolicy,
    subcategoryPath.biotech,
    subcategoryPath.patientAutonomy,
    subcategoryPath.psychology,
    subcategoryPath.longTermCare,
    subcategoryPath.publicHealth,
  ],
  [categoryPath.environment]: [
    subcategoryPath.all,
    subcategoryPath.ocean,
    subcategoryPath.mountainAndForest,
    subcategoryPath.animal,
    subcategoryPath.climateChange,
    subcategoryPath.cicularEconomy,
    subcategoryPath.pollution,
    subcategoryPath.naturalDisaster,
  ],
  [categoryPath.econ]: [
    subcategoryPath.all,
    subcategoryPath.economy,
    subcategoryPath.energyEcon,
    subcategoryPath.agriculture,
    subcategoryPath.technology,
  ],
  [categoryPath.culture]: [
    subcategoryPath.all,
    subcategoryPath.peAndSports,
    subcategoryPath.movie,
    subcategoryPath.publishing,
    subcategoryPath.music,
    subcategoryPath.dramaAndTheatre,
    subcategoryPath.art,
  ],
  [categoryPath.education]: [
    subcategoryPath.all,
    subcategoryPath.eduPolicy,
    subcategoryPath.higherEducation,
    subcategoryPath.teens,
    subcategoryPath.parenting,
    subcategoryPath.lowBirthRate,
  ],
  [categoryPath.podcast]: [
    subcategoryPath.all,
    subcategoryPath.theRealStory,
    subcategoryPath.onTheGround,
  ],
  [categoryPath.opinion]: [
    subcategoryPath.all,
    subcategoryPath.bookReview,
    subcategoryPath.letter,
  ],
}

export default {
  CATEGORY_PATH,
  CATEGORY_ORDER,
  CATEGORY_LABEL,
  CATEGORY_ID,
  GET_CATEGORY_PATH_FROM_ID,
  GET_SUBCATEGORY_PATH_FROM_ID,
  SUBCATEGORY_LABEL,
  SUBCATEGORY_ID,
  CATEGORY_SET,
}
