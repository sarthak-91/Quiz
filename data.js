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
  id: "nepal-xi-t20-2014-hk",
  title: "Nepal XI vs Hong Kong (T20 World Cup 2014)",
  subtitle: "Name Nepal’s playing XI with their runs or wickets in that match",
  emoji: "🏏",
  answers: [
    { label: "Subash Khakurel (22 runs)", aliases: ["subash khakurel", "khakurel"],hint:"22 runs" },
    { label: "Sagar Pun (13 runs, 0 Wickets)", aliases: ["sagar pun", "pun"],hint:"13 runs, 0 Wickets" },
    { label: "Gyanendra Malla (48 runs)", aliases: ["gyanendra malla", "malla"],hint:"48 runs" },
    { label: "Paras Khadka (41 runs, 1 Wicket)", aliases: ["paras khadka", "paras"],hint:"41 runs, 1 Wicket" }, 
    { label: "Binod Bhandari (1 run)", aliases: ["binod bhandari", "bhandari"],hint:"1 run" },
    { label: "Sharad Vesawkar (14 runs)", aliases: ["sharad vesawkar", "vesawkar"],hint:"14 runs" },
    { label: "Basant Regmi (0 runs, 3 Wickets)", aliases: ["basant regmi", "regmi"],hint:"0 runs, 3 Wickets" },
    { label: "Naresh Bahadur Budayair (0 runs)", aliases: ["naresh bahadur budayair", "budayair","naresh budayair"],hint:"0 runs" },
    { label: "Shakti Gauchan (0 runs, 3 Wickets)", aliases: ["shakti gauchan", "gauchan"],hint:"0 runs, 3 Wickets" },
    { label: "Sompal Kami (2 Wickets)", aliases: ["sompal kami", "sompal"],hint:"2 Wickets" },
    { label: "Jitendra Mukhiya (1 Wicket)", aliases: ["jitendra mukhiya", "mukhiya"],hint:"1 Wicket" },
  ]
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
  id: "largest-districts-nepal",
  title: "Top 10 Largest Districts of Nepal",
  subtitle: "Name the districts with their area (sq. km) and province",
  emoji: "🗺️",
  answers: [
    { label: "Dolpa (7889 sq. km)", aliases: ["dolpa"], hint: "7889 sq. km, Karnali Province" },
    { label: "Humla (5655 sq. km)", aliases: ["humla"], hint: "5655 sq. km, Karnali Province" },
    { label: "Taplejung (3646 sq. km)", aliases: ["taplejung"], hint: "3646 sq. km, Koshi Province" },
    { label: "Gorkha (3610 sq. km)", aliases: ["gorkha"], hint: "3610 sq. km, Gandaki Province" },
    { label: "Mustang (3573 sq. km)", aliases: ["mustang"], hint: "3573 sq. km, Gandaki Province" },
    { label: "Mugu (3535 sq. km)", aliases: ["mugu"], hint: "3535 sq. km, Karnali Province" },
    { label: "Sankhuwasabha (3480 sq. km)", aliases: ["sankhuwasabha", "sankhuwasava"], hint: "3480 sq. km, Koshi Province" },
    { label: "Bajhang (3422 sq. km)", aliases: ["bajhang"], hint: "3422 sq. km, Sudurpashchim Province" },
    { label: "Solukhumbu (3312 sq. km)", aliases: ["solukhumbu", "solu khumbu"], hint: "3312 sq. km, Koshi Province" },
    { label: "Kailali (3235 sq. km)", aliases: ["kailali", "kailai"], hint: "3235 sq. km, Sudurpashchim Province" }
  ]
},
  {
  id: "nepal-xi-first-odi",
  title: "Nepal XI in First ODI",
  subtitle: "Name Nepal’s playing XI with their runs and wickets",
  emoji: "🏏",
  answers: [
    { label: "Gyanendra Malla (51 runs)", aliases: ["gyanendra malla", "malla"], hint: "51 runs" },
    { label: "Anil Sah (21 runs)", aliases: ["anil sah", "sah"], hint: "21 runs" },
    { label: "Paras Khadka (12 runs, 4 Wickets)", aliases: ["paras khadka", "paras"], hint: "12 runs, 4 Wickets" },
    { label: "Dipendra Singh Airee (33 runs)", aliases: ["dipendra singh airee", "dipendra airee", "airee"], hint: "33 runs" },
    { label: "Aarif Sheikh (0 runs)", aliases: ["aarif sheikh", "arif sheikh", "sheikh"], hint: "0 runs" },
    { label: "Sompal Kami (0 runs, 3 Wickets)", aliases: ["sompal kami", "sompal"], hint: "0 runs, 3 Wickets" },
    { label: "Basant Regmi (0 runs, 1 Wicket)", aliases: ["basant regmi", "regmi"], hint: "0 runs, 1 Wicket" },
    { label: "Shakti Gauchan (9 runs, 0 Wickets)", aliases: ["shakti gauchan", "gauchan"], hint: "9 runs, 0 Wickets" },
    { label: "Karan KC (0 runs, 1 Wicket)", aliases: ["karan kc", "karan kc", "karan"], hint: "0 runs, 1 Wicket" },
    { label: "Sandeep Lamichhane (1 run, 1 Wicket)", aliases: ["sandeep lamichhane", "lamichhane", "sandeep"], hint: "1 run, 1 Wicket" },
    { label: "Sharad Vesawkar (4 runs)", aliases: ["sharad vesawkar", "vesawkar"], hint: "4 runs" }
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
  {
  id: "nepal-most-runs-odi-t20i",
  title: "Nepal’s Top Run Scorers (ODI + T20I)",
  subtitle: "Name Nepali players with the most combined international runs as of April 25,2026",
  emoji: "🏏",
  answers: [
    { label: "1. Rohit Paudel, Runs: 3722", aliases: ["rohit paudel", "paudel"], hint: "Matches: 157, Runs: 3722" },
    { label: "2. Dipendra Singh Airee, Runs: 3469", aliases: ["dipendra singh airee", "airee"], hint: "Matches: 165, Runs: 3469" },
    { label: "3. Kushal Bhurtel, Runs: 3463", aliases: ["kushal bhurtel", "bhurtel"], hint: "Matches: 142, Runs: 3463" },
    { label: "4. Aasif Sheikh, Runs: 3394", aliases: ["aasif sheikh", "asif sheikh"], hint: "Matches: 136, Runs: 3394" },
    { label: "5. Aarif Sheikh, Runs: 2012", aliases: ["aarif sheikh", "arif sheikh"], hint: "Matches: 116, Runs: 2012" },
    { label: "6. Kushal Malla, Runs: 1852", aliases: ["kushal malla", "malla"], hint: "Matches: 101, Runs: 1852" },
    { label: "7. Gyanendra Malla, Runs: 1759", aliases: ["gyanendra malla", "malla"], hint: "Matches: 82, Runs: 1759" },
    { label: "8. Gulsan Jha, Runs: 1395", aliases: ["gulsan jha", "jha"], hint: "Matches: 97, Runs: 1395" },
    { label: "9. Sompal Kami, Runs: 1182", aliases: ["sompal kami", "sompal"], hint: "Matches: 155, Runs: 1182" },
    { label: "10. Karan KC, Runs: 1139", aliases: ["karan kc", "karan"], hint: "Matches: 134, Runs: 1139" },
    { label: "11. Paras Khadka, Runs: 1114", aliases: ["paras khadka", "paras"], hint: "Matches: 43, Runs: 1114" },
    { label: "12. Bhim Sharki, Runs: 1034", aliases: ["bhim sharki", "sharki"], hint: "Matches: 39, Runs: 1034" },
    { label: "13. Binod Bhandari, Runs: 680", aliases: ["binod bhandari", "bhandari"], hint:"Matches: 57, Runs: 680" },
    { label: "14. Anil Sah, Runs: 672", aliases: ["anil sah", "sah"], hint:"Matches: 31, Runs: 621" },
    
  ]
},
{
  id: "winners-a-division-league",
  title: "Winners of A Division League",
  subtitle: "Name all the winners of A Division League from 2040 to 2079 BS",
  emoji: "⚽",
  answers: [
    { label: "1. Church Boys United ", aliases: ["church boys united", "church boys"] , hint:"2079 BS"},
    { label: "2. Machhindra Football Club", aliases: ["machhindra football club", "machhindra"] , hint:"2078 BS"},
    { label: "3. Machhindra Football Club", aliases: ["machhindra football club", "machhindra"] , hint:"2076 BS"},
    { label: "4. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2075 BS"},
    { label: "5. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2070 BS"},
    { label: "6. Three Star Club", aliases: ["three star club", "three star"] , hint:"2069 BS"},
    { label: "7. Nepal Police FC", aliases: ["nepal police fc", "nepal police", "police"] , hint:"2068 BS"}, 
    { label: "8. Nepal Police FC", aliases: ["nepal police fc", "nepal police", "police"] , hint:"2067 BS"}, 
    { label: "9. Mahendra Police Club", aliases: ["mahendra police club", "mahendra police", "mahendra"] , hint:"2063 BS"},
    { label: "10. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2062 BS"},
    { label: "11. Three Star Club", aliases: ["three star club", "three star"] , hint:"2061 BS"},
    { label: "12. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2060 BS"},
    { label: "13. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2057 BS"},
    { label: "14. Three Star Club", aliases: ["three star club", "three star"] , hint:"2055 BS"},
    { label: "15. Three Star Club", aliases: ["three star club", "three star"] , hint:"2054 BS"},
    { label: "16. New Road Team", aliases: ["new road team", "new road","nrt"] , hint:"2052 BS"},
    { label: "17. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2046 BS"},
    { label: "18. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2044 BS"},
    { label: "19. Manang Marshyangdi Club", aliases: ["manang marshyangdi club", "manang marshyangdi", "manang"] , hint:"2043 BS"},
    { label: "20. Sankata Boys Club", aliases: ["sankata boys club", "sankata boys", "sankata"] , hint:"2042 BS"},
    { label: "21. Rani Pokhari Corner Team", aliases: ["rani pokhari corner team", "rani pokhari", "corner team","rpct"] , hint:"2041 BS"},
    { label: "22. Sankata Boys Club", aliases: ["sankata boys club", "sankata boys", "sankata"] , hint:"2040 BS"},
  ]
}
];

// ============================================================
//  Helper — get a quiz by id
// ============================================================
function getQuizById(id) {
  return QUIZZES.find((q) => q.id === id) || null;
}
