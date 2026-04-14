// ============================================================
//  DATA.JS  —  Add or edit quizzes here
//
//  Each quiz has:
//    id        – unique string key
//    title     – shown at top of quiz
//    subtitle  – small description / hint
//    emoji     – decorative icon
//    answers   – ordered array of accepted answer objects
//              (can be any length — not limited to 10!)
//
//  Each answer object has:
//    label     – the text shown on the revealed tile
//    aliases   – array of strings the player can type to match
//              (all compared case-insensitively, partial ok)
// ============================================================

const QUIZZES = [

  {
    id: "nepal-prime-ministers",
    title: "Prime Ministers of Nepal (Post-Rana Era)",
    subtitle: "All PMs since the end of the Rana oligarchy in 1951 — in order",
    emoji: "🇳🇵",
    answers: [
      { label: "1. Matrika Prasad Koirala (1951–52)",   aliases: ["matrika", "matrika koirala", "matrika prasad", "mp koirala"] },
      { label: "2. King Tribhuvan (Direct Rule, 1952)",  aliases: ["tribhuvan", "king tribhuvan"] },
      { label: "3. Matrika Prasad Koirala (1952–53)",   aliases: ["matrika", "matrika koirala", "matrika prasad", "mp koirala"] },
      { label: "4. Mahendra (Direct Rule, 1953–55)",    aliases: ["mahendra", "king mahendra"] },
      { label: "5. Kirti Nidhi Bista (caretaker 1955)", aliases: ["bista", "kirti nidhi", "kirti nidhi bista"] },
      { label: "6. Tanka Prasad Acharya (1956–57)",    aliases: ["tanka", "acharya", "tanka prasad", "tanka prasad acharya"] },
      { label: "7. K.I. Singh (1957)",                  aliases: ["k.i. singh", "ki singh", "kunwar inderjit", "singh"] },
      { label: "8. Subarna Shamsher (caretaker 1957)",  aliases: ["subarna", "subarna shamsher"] },
      { label: "9. Bishweshwar Prasad Koirala (1959–60)", aliases: ["bp koirala", "Bishweshwar", "bp", "bishweshwar"] },
      { label: "10. Mahendra (Direct Rule, 1960–63)",   aliases: ["mahendra", "king mahendra"] },
      { label: "11. Tulsi Giri (1963–64)",              aliases: ["tulsi giri", "tulsi"] },
      { label: "12. Surya Bahadur Thapa (1964–65)",     aliases: ["surya bahadur thapa", "surya thapa", "surya bahadur"] },
      { label: "13. Kirti Nidhi Bista (1965–69)",       aliases: ["bista", "kirti nidhi", "kirti nidhi bista"] },
      { label: "14. Tulsi Giri (1969–70)",              aliases: ["tulsi giri", "tulsi"] },
      { label: "15. Kirti Nidhi Bista (1971–73)",       aliases: ["bista", "kirti nidhi", "kirti nidhi bista"] },
      { label: "16. Nagendra Prasad Rijal (1973–75)",   aliases: ["rijal", "nagendra", "nagendra rijal"] },
      { label: "17. Tulsi Giri (1975–77)",              aliases: ["tulsi giri", "tulsi"] },
      { label: "18. Kirti Nidhi Bista (1977–79)",       aliases: ["bista", "kirti nidhi", "kirti nidhi bista"] },
      { label: "19. Surya Bahadur Thapa (1979–83)",     aliases: ["surya bahadur thapa", "surya thapa", "surya bahadur"] },
      { label: "20. Lokendra Bahadur Chand (1983–86)",  aliases: ["chand", "lokendra", "lokendra chand"] },
      { label: "21. Nagendra Prasad Rijal (1986–87)",   aliases: ["rijal", "nagendra", "nagendra rijal"] },
      { label: "22. Marich Man Singh (1987–90)",         aliases: ["marich", "marich man singh", "marich man"] },
      { label: "23. Lokendra Bahadur Chand (1990)",     aliases: ["chand", "lokendra", "lokendra chand"] },
      { label: "24. Krishna Prasad Bhattarai (1990–91)", aliases: ["bhattarai", "krishna prasad", "kp bhattarai"] },
      { label: "25. Girija Prasad Koirala (1991–94)",   aliases: ["girija", "gp koirala", "girija prasad"] },
      { label: "26. Man Mohan Adhikari (1994–95)",      aliases: ["adhikari", "man mohan", "manmohan adhikari"] },
      { label: "27. Sher Bahadur Deuba (1995–97)",      aliases: ["deuba", "sher bahadur", "sher bahadur deuba"] },
      { label: "28. Lokendra Bahadur Chand (1997–98)",  aliases: ["chand", "lokendra", "lokendra chand"] },
      { label: "29. Surya Bahadur Thapa (1997)",        aliases: ["surya bahadur thapa", "surya thapa", "surya bahadur"] },
      { label: "30. Girija Prasad Koirala (1998–99)",   aliases: ["girija", "gp koirala", "girija prasad"] },
      { label: "31. Krishna Prasad Bhattarai (1999–00)", aliases: ["bhattarai", "krishna prasad", "kp bhattarai"] },
      { label: "32. Girija Prasad Koirala (2000–01)",   aliases: ["girija", "gp koirala", "girija prasad"] },
      { label: "33. Sher Bahadur Deuba (2001–02)",      aliases: ["deuba", "sher bahadur", "sher bahadur deuba"] },
      { label: "34. Lokendra Bahadur Chand (2002–03)",  aliases: ["chand", "lokendra", "lokendra chand"] },
      { label: "35. Surya Bahadur Thapa (2003–04)",     aliases: ["surya bahadur thapa", "surya thapa", "surya bahadur"] },
      { label: "36. Sher Bahadur Deuba (2004–05)",      aliases: ["deuba", "sher bahadur", "sher bahadur deuba"] },
      { label: "37. Girija Prasad Koirala (2006–08)",   aliases: ["girija", "gp koirala", "girija prasad"] },
      { label: "38. Pushpa Kamal Dahal 'Prachanda' (2008–09)", aliases: ["prachanda", "pushpa kamal", "dahal", "pushpa kamal dahal"] },
      { label: "39. Madhav Kumar Nepal (2009–11)",       aliases: ["madhav", "madhav kumar", "madhav nepal"] },
      { label: "40. Jhala Nath Khanal (2011)",           aliases: ["khanal", "jhala nath", "jhala nath khanal"] },
      { label: "41. Baburam Bhattarai (2011–13)",        aliases: ["baburam", "baburam bhattarai"] },
      { label: "42. Khil Raj Regmi (caretaker 2013–14)", aliases: ["regmi", "khil raj", "khil raj regmi"] },
      { label: "43. Sushil Koirala (2014–15)",           aliases: ["sushil", "sushil koirala"] },
      { label: "44. KP Sharma Oli (2015–16)",            aliases: ["oli", "kp oli", "kp sharma oli", "sharma oli"] },
      { label: "45. Pushpa Kamal Dahal 'Prachanda' (2016–17)", aliases: ["prachanda", "pushpa kamal", "dahal", "pushpa kamal dahal"] },
      { label: "46. Sher Bahadur Deuba (2017)",          aliases: ["deuba", "sher bahadur", "sher bahadur deuba"] },
      { label: "47. KP Sharma Oli (2018–21)",            aliases: ["oli", "kp oli", "kp sharma oli", "sharma oli"] },
      { label: "48. Sher Bahadur Deuba (2021–22)",       aliases: ["deuba", "sher bahadur", "sher bahadur deuba"] },
      { label: "49. Pushpa Kamal Dahal 'Prachanda' (2022–24)", aliases: ["prachanda", "pushpa kamal", "dahal", "pushpa kamal dahal"] },
      { label: "50. KP Sharma Oli (2024–2025)",       aliases: ["oli", "kp oli", "kp sharma oli", "sharma oli"] },
      { label: "51. Sushila Karki (2025–2026)",       aliases: ["sushila", "sushila karki","sushila karki"] },
      { label: "52. Balendra Shah (2026–present)",       aliases: ["balen","balendra", "balendra shah", "shah"] },
    ],
  },
  {
  id: "nepali-captains",
  title: "Nepali Cricket Captains",
  subtitle: "All Captains of Nepali National Cricket Team from 1996 to 2026",
  emoji: "🏏",
  answers: [
    { label: "Uttam Karmacharya (1996)", aliases: ["karmacharya","uttam","uttam karmacharya"] },
    { label: "LB Chhetri (1998)", aliases: ["lb chhetri","chhetri", "l b chhetri"] },
    { label: "Pawan Agarwal (2000)", aliases: ["pawan","pawan agarwal","agarwal"] },
    { label: "Ganesh Shahi Thakuri (2001)", aliases: ["ganesh shahi thakuri", "ganesh thakuri","thakuri"] },
    { label: "Raju Khadka (2001–2004)", aliases: ["raju khadka"] },
    { label: "Paresh Lohani (2004)", aliases: ["paresh lohani","lohani"] },
    { label: "Binod Das (2005–2008)", aliases: ["binod das","das"] },
    { label: "Paras Khadka (2009–2019)", aliases: ["paras khadka","paras","khadka"] },
    { label: "Gyanendra Malla (2019–2021)", aliases: ["gyanendra malla"] },
    { label: "Sandeep Lamichhane (2021–2022)", aliases: ["sandeep lamichhane","sandeep","lamichhane"] },
    { label: "Rohit Kumar Paudel (2022–)", aliases: ["rohit kumar paudel", "rohit paudel","paudel"] },
  ],
},
    {
    id: "tallest-mountains",
    title: "Top 10 Tallest Mountains",
    subtitle: "Ranked by elevation above sea level",
    emoji: "🏔️",
    answers: [
      { label: "Everest (8,849 m)",       aliases: ["everest", "sagarmatha", "chomolungma"] },
      { label: "K2 (8,611 m)",            aliases: ["k2", "godwin"] },
      { label: "Kangchenjunga (8,586 m)", aliases: ["kangchenjunga", "kanchenjunga"] },
      { label: "Lhotse (8,516 m)",        aliases: ["lhotse"] },
      { label: "Makalu (8,485 m)",        aliases: ["makalu"] },
      { label: "Cho Oyu (8,188 m)",       aliases: ["cho oyu", "chooyu"] },
      { label: "Dhaulagiri (8,167 m)",    aliases: ["dhaulagiri"] },
      { label: "Manaslu (8,163 m)",       aliases: ["manaslu"] },
      { label: "Nanga Parbat (8,126 m)", aliases: ["nanga parbat", "nangaparbat"] },
      { label: "Annapurna (8,091 m)",     aliases: ["annapurna"] },
    ],
  },
  {
    id: "terai-districts",
    title: "Districts in terai region of Nepal",
    subtitle: "Name all districts in terai region of Nepal from east to west",
    emoji: "🌾",
answers: [
  { label: "Jhapa", aliases: ["jhapa"] },
  { label: "Morang", aliases: ["morang"] },
  { label: "Sunsari", aliases: ["sunsari"] },
  { label: "Saptari", aliases: ["saptari"] },
  { label: "Siraha", aliases: ["siraha"] },
  { label: "Dhanusha", aliases: ["dhanusha", "janakpur"] },
  { label: "Mahottari", aliases: ["mahottari"] },
  { label: "Sarlahi", aliases: ["sarlahi"] },
  { label: "Rautahat", aliases: ["rautahat"] },
  { label: "Bara", aliases: ["bara"] },
  { label: "Parsa", aliases: ["parsa", "birgunj"] },
  { label: "Chitwan", aliases: ["chitwan"] },
  { label: "Nawalparasi East", aliases: ["nawalparasi east", "parasi east", "nawalpur"] },
  { label: "Nawalparasi West", aliases: ["nawalparasi west", "parasi west"] },
  { label: "Rupandehi", aliases: ["rupandehi", "butwal", "bhairahawa"] },
  { label: "Kapilbastu", aliases: ["kapilvastu","kapilbastu"] },
  { label: "Dang", aliases: ["dang"] },
  { label: "Banke", aliases: ["banke", "nepalgunj"] },
  { label: "Bardiya", aliases: ["bardiya", "bardia"] },
  { label: "Kailali", aliases: ["kailali", "dhangadhi"] },
  { label: "Kanchanpur", aliases: ["kanchanpur", "mahendranagar"] }
],
  },

  {
    id: "most-spoken-languages",
    title: "Top 10 Most Spoken Languages",
    subtitle: "By total number of speakers (native + second language)",
    emoji: "🗣️",
    answers: [
      { label: "English (~1.5B)",    aliases: ["english"] },
      { label: "Mandarin (~1.1B)",   aliases: ["mandarin", "chinese", "mandarin chinese"] },
      { label: "Hindi (~600M)",      aliases: ["hindi"] },
      { label: "Spanish (~560M)",    aliases: ["spanish", "español"] },
      { label: "French (~310M)",     aliases: ["french", "français"] },
      { label: "Arabic (~310M)",     aliases: ["arabic"] },
      { label: "Bengali (~270M)",    aliases: ["bengali", "bangla"] },
      { label: "Russian (~255M)",    aliases: ["russian"] },
      { label: "Portuguese (~240M)", aliases: ["portuguese"] },
      { label: "Urdu (~230M)",       aliases: ["urdu"] },
    ],
  },
  {
  id: "nepal-provinces-size-asc",
  title: "Provinces of Nepal by size",
  subtitle: "Name all 7 provinces of Nepal in ascending order (smallest to largest)",
  emoji: "🗺️",
  answers: [
    { label: "Madhesh Province (9,661 km²)", aliases: ["madhesh", "province 2", "madhes"] },
    { label: "Sudurpashchim Province (19,999.28 km²)", aliases: ["sudurpashchim", "far west", "province 7"] },
    { label: "Bagmati Province (20,300 km²)", aliases: ["bagmati", "province 3"] },
    { label: "Gandaki Province (21,504 km²)", aliases: ["gandaki", "province 4"] },
    { label: "Lumbini Province (22,288 km²)", aliases: ["lumbini", "province 5"] },
    { label: "Koshi Province (25,905 km²)", aliases: ["koshi", "province 1"] },
    { label: "Karnali Province (27,984 km²)", aliases: ["karnali", "province 6"] }
  ]
},

  {
    id: "largest-countries",
    title: "Top 10 Largest Countries",
    subtitle: "Ranked by total land area",
    emoji: "🌍",
    answers: [
      { label: "Russia (17.1M km²)",    aliases: ["russia"] },
      { label: "Canada (10.0M km²)",    aliases: ["canada"] },
      { label: "USA (9.8M km²)",        aliases: ["usa", "united states", "america", "us"] },
      { label: "China (9.6M km²)",      aliases: ["china"] },
      { label: "Brazil (8.5M km²)",     aliases: ["brazil", "brasil"] },
      { label: "Australia (7.7M km²)",  aliases: ["australia"] },
      { label: "India (3.3M km²)",      aliases: ["india"] },
      { label: "Argentina (2.8M km²)",  aliases: ["argentina"] },
      { label: "Kazakhstan (2.7M km²)", aliases: ["kazakhstan"] },
      { label: "Algeria (2.4M km²)",    aliases: ["algeria"] },
    ],
  },
];

// ============================================================
//  Helper — get a quiz by id
// ============================================================
function getQuizById(id) {
  return QUIZZES.find((q) => q.id === id) || null;
}
