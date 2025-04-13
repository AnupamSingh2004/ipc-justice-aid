
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  // English
  en: {
    // Common
    "app.name": "IPC Justice Aid",
    "app.version": "v1.0.0",
    "app.description": "Find laws and legal information easily.",
    "app.disclaimer": "Disclaimer: This analysis is for informational purposes only and does not constitute legal advice. Consult a legal professional for personalized guidance.",
    "app.ogTitle": "IPC Justice Aid: Your Legal Companion",
    "app.ogDescription": "Explore laws, understand legal concepts, and stay informed with our comprehensive legal resource.",
    "app.keywords": "law, legal, justice, information, guide, articles, cases, legislation",
    "app.feedback": "Give Feedback",
    "app.feedbackDescription": "Help us improve by sharing your thoughts.",
    "app.submit": "Submit",
    "app.thankYou": "Thank you!",
    "app.feedbackReceived": "We appreciate your feedback.",

    //Index
    "index.searchBarPlaceholder": "Search for laws, articles, and more...",
    "index.heroTitle": "Empowering Justice Through Knowledge",
    "index.heroSubtitle": "Your gateway to understanding the legal landscape of India.",
    "index.cardLawsTitle": "Explore Indian Laws",
    "index.cardLawsDescription": "Browse through a comprehensive collection of Indian laws and regulations.",
    "index.cardInsightsTitle": "Legal Insights",
    "index.cardInsightsDescription": "Read articles and analysis to deepen your understanding of the legal system.",
    "index.cardCaseTitle": "Case Predictions",
    "index.cardCaseDescription": "Get insights on possible outcomes of legal cases.",
    "index.cardContactTitle": "Connect with Experts",
    "index.cardContactDescription": "Find and consult with legal professionals.",

    // Navigation
    "nav.home": "Home",
    "nav.search": "Search",
    "nav.history": "History",
    "nav.about": "About",
    "nav.back": "Back",
    
    // User actions
    "action.notifications": "Notifications",
    "action.resources": "Legal Resources",
    "action.profile": "Profile",
    "action.settings": "Settings",
    "action.logout": "Log out",
    
    // Search results
    "results.title": "Search Results",
    "results.showing": "Showing results for:",
    "results.sections": "Applicable IPC Sections",
    "results.relevance": "Relevance:",
    "results.punishment": "Punishment:",
    "results.empty": "No results found",
    "results.try_different": "Try a different search term",
    "results.searchBarPlaceholder": "Search for laws, articles, and more...",
    "results.emptyStateTitle": "No results found",
    "results.emptyStateDescription": "Try adjusting your search or explore our categories.",
    
    // Summary
    "summary.results": "Results",
    "summary.high_relevance": "High Relevance",
    "summary.medium_relevance": "Medium Relevance",
    "summary.low_relevance": "Low Relevance",
    
    // Prediction
    "prediction.title": "Case Prediction Analysis",
    "prediction.disclaimer": "Based on similar historical cases",
    "prediction.chance": "Conviction chance",
    "prediction.advice": "Legal Advice",

    //Auth
    "auth.welcome": "Welcome",
    "auth.description": "Sign in to your account or create a new one",
    "auth.login": "Login",
    "auth.register": "Register",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.name": "Full Name",
    "auth.forgotPassword": "Forgot password?",
    "auth.signIn": "Sign In",
    "auth.success": "Success",
    "auth.error": "Error",
    "auth.loginSuccess": "You have successfully logged in",
    "auth.registerSuccess": "You have successfully registered",
    "auth.passwordMismatch": "Passwords do not match",
    "theme.toggle": "Toggle theme",

    //About
    "about.title": "About IPC Justice Aid",
    "about.description": "Learn more about our mission and team.",
    "about.missionTitle": "Our Mission",
    "about.missionDescription": "To provide accessible and reliable legal information to everyone.",
    "about.teamTitle": "Our Team",
    "about.teamDescription": "Meet the people behind IPC Justice Aid.",
  },

  // Hindi
  hi: {
    // Common
    "app.name": "आईपीसी न्याय सहायता",
    "app.version": "संस्करण 1.0.0",
    "app.disclaimer": "अस्वीकरण: यह विश्लेषण केवल जानकारी के उद्देश्यों के लिए है और कानूनी सलाह नहीं है। व्यक्तिगत मार्गदर्शन के लिए किसी कानूनी पेशेवर से परामर्श करें।",
    "app.description": "कानून और कानूनी जानकारी आसानी से प्राप्त करें।",
    "app.ogTitle": "आईपीसी न्याय सहायता: आपका कानूनी साथी",
    "app.ogDescription": "कानूनों का अन्वेषण करें, कानूनी अवधारणाओं को समझें, और हमारे व्यापक कानूनी संसाधन के साथ सूचित रहें।",
    "app.keywords": "कानून, कानूनी, न्याय, जानकारी, गाइड, लेख, मामले, विधान",
    "app.feedback": "प्रतिक्रिया दें",
    "app.feedbackDescription": "अपने विचारों को साझा करके हमें बेहतर बनाने में मदद करें।",
    "app.submit": "जमा करें",
    "app.thankYou": "धन्यवाद!",
    "app.feedbackReceived": "हमें आपकी प्रतिक्रिया की सराहना है।",

    //Index
    "index.searchBarPlaceholder": "कानूनों, लेखों और अधिक के लिए खोजें...",
    "index.heroTitle": "ज्ञान के माध्यम से न्याय को सशक्त बनाना",
    "index.heroSubtitle": "भारत के कानूनी परिदृश्य को समझने का आपका प्रवेश द्वार।",
    "index.cardLawsTitle": "भारतीय कानूनों का अन्वेषण करें",
    "index.cardLawsDescription": "भारतीय कानूनों और विनियमों के एक व्यापक संग्रह के माध्यम से ब्राउज़ करें।",
    "index.cardInsightsTitle": "कानूनी अंतर्दृष्टि",
    "index.cardInsightsDescription": "कानूनी प्रणाली की अपनी समझ को गहरा करने के लिए लेख और विश्लेषण पढ़ें।",
    "index.cardCaseTitle": "मामले की भविष्यवाणियां",
    "index.cardCaseDescription": "कानूनी मामलों के संभावित परिणामों पर अंतर्दृष्टि प्राप्त करें।",
    "index.cardContactTitle": "विशेषज्ञों से जुड़ें",
    "index.cardContactDescription": "कानूनी पेशेवरों को खोजें और उनसे परामर्श करें।",

    // Navigation
    "nav.home": "होम",
    "nav.search": "खोज",
    "nav.history": "इतिहास",
    "nav.about": "परिचय",
    "nav.back": "वापस",
    
    // User actions
    "action.notifications": "सूचनाएं",
    "action.resources": "कानूनी संसाधन",
    "action.profile": "प्रोफाइल",
    "action.settings": "सेटिंग्स",
    "action.logout": "लॉग आउट",
    
    // Search results
    "results.title": "खोज परिणाम",
    "results.showing": "के लिए परिणाम दिखा रहे हैं:",
    "results.sections": "लागू आईपीसी धाराएं",
    "results.relevance": "प्रासंगिकता:",
    "results.punishment": "सजा:",
    "results.empty": "कोई परिणाम नहीं मिला",
    "results.try_different": "अलग खोज शब्द का प्रयास करें",
    "results.searchBarPlaceholder": "कानूनों, लेखों और अधिक के लिए खोजें...",
    "results.emptyStateTitle": "कोई परिणाम नहीं मिला",
    "results.emptyStateDescription": "अपनी खोज को समायोजित करने का प्रयास करें या हमारी श्रेणियों का पता लगाएं।",
    
    // Summary
    "summary.results": "परिणाम",
    "summary.high_relevance": "उच्च प्रासंगिकता",
    "summary.medium_relevance": "मध्यम प्रासंगिकता",
    "summary.low_relevance": "कम प्रासंगिकता",
    
    // Prediction
    "prediction.title": "केस पूर्वानुमान विश्लेषण",
    "prediction.disclaimer": "समान ऐतिहासिक मामलों के आधार पर",
    "prediction.chance": "सजा की संभावना",
    "prediction.advice": "कानूनी सलाह",

    //About
    "about.title": "न्याय हब के बारे में",
    "about.description": "हमारे मिशन और टीम के बारे में अधिक जानें।",
    "about.missionTitle": "हमारा मिशन",
    "about.missionDescription": "सभी के लिए सुलभ और विश्वसनीय कानूनी जानकारी प्रदान करना।",
    "about.teamTitle": "हमारी टीम",
    "about.teamDescription": "आईपीसी न्याय सहायता के पीछे के लोगों से मिलें।",

    //Auth
    "auth.welcome": "स्वागत है",
    "auth.description": "अपने खाते में साइन इन करें या नया खाता बनाएं",
    "auth.login": "लॉगिन",
    "auth.register": "रजिस्टर",
    "auth.email": "ईमेल",
    "auth.password": "पासवर्ड",
    "auth.confirmPassword": "पासवर्ड की पुष्टि करें",
    "auth.name": "पूरा नाम",
    "auth.forgotPassword": "पासवर्ड भूल गए?",
    "auth.signIn": "साइन इन करें",
    "auth.success": "सफलता",
    "auth.error": "त्रुटि",
    "auth.loginSuccess": "आप सफलतापूर्वक लॉग इन हो गए हैं",
    "auth.registerSuccess": "आपने सफलतापूर्वक पंजीकरण कर लिया है",
    "auth.passwordMismatch": "पासवर्ड मेल नहीं खाते",
    "theme.toggle": "थीम बदलें",
  },

  // Marathi
  mr: {
    // Common
    "app.name": "आयपीसी न्याय सहाय्य",
    "app.version": "आवृत्ती 1.0.0",
    "app.disclaimer": "अस्वीकरण: हे विश्लेषण केवळ माहितीसाठी आहे आणि कायदेशीर सल्ला नाही. वैयक्तिक मार्गदर्शनासाठी कायदेशीर व्यावसायिकांचा सल्ला घ्या.",
    "app.ogTitle": "आईपीसी न्याय सहाय्य: तुमचा कायदेशीर साथीदार",
    "app.ogDescription": "कायद्यांचे अन्वेषण करा, कायदेशीर संकल्पना समजून घ्या आणि आमच्या विस्तृत कायदेशीर संसाधनासह माहितीपूर्ण रहा.",
    "app.keywords": "कायदा, कायदेशीर, न्याय, माहिती, मार्गदर्शक, लेख, प्रकरणे, विधान",
    "app.feedback": "अभिप्राय द्या",
    "app.feedbackDescription": "तुमचे विचार सामायिक करून आम्हाला सुधारण्यात मदत करा.",
    "app.submit": "सबमिट करा",
    "app.thankYou": "धन्यवाद!",
    "app.feedbackReceived": "आम्ही तुमच्या अभिप्रायाचे कौतुक करतो.",

    //Index
    "index.searchBarPlaceholder": "कायदे, लेख आणि अधिक शोधा...",
    "index.heroTitle": "ज्ञानाद्वारे न्यायाला सक्षम करणे",
    "index.heroSubtitle": "भारतातील कायदेशीर परिदृश्य समजून घेण्यासाठी तुमचा प्रवेशद्वार.",
    "index.cardLawsTitle": "भारतीय कायदे एक्सप्लोर करा",
    "index.cardLawsDescription": "भारतीय कायदे आणि नियमांच्या विस्तृत संग्रहातून ब्राउझ करा.",
    "index.cardInsightsTitle": "कायदेशीर अंतर्दृष्टी",
    "index.cardInsightsDescription": "कायदेशीर प्रणालीची तुमची समज अधिक दृढ करण्यासाठी लेख आणि विश्लेषण वाचा.",
    "index.cardCaseTitle": "केस अंदाज",
    "index.cardCaseDescription": "कायदेशीर प्रकरणांच्या संभाव्य परिणामांवर अंतर्दृष्टी मिळवा.",
    "index.cardContactTitle": "तज्ञांशी संपर्क साधा",
    "index.cardContactDescription": "कायदेशीर व्यावसायिकांना शोधा आणि त्यांच्याशी सल्लामसलत करा.",

    // Navigation
    "nav.home": "मुख्यपृष्ठ",
    "nav.search": "शोध",
    "nav.history": "इतिहास",
    "nav.about": "आमच्याबद्दल",
    "nav.back": "मागे",
    
    // User actions
    "action.notifications": "सूचना",
    "action.resources": "कायदेशीर संसाधने",
    "action.profile": "प्रोफाइल",
    "action.settings": "सेटिंग्ज",
    "action.logout": "बाहेर पडा",
    
    // Search results
    "results.title": "शोध परिणाम",
    "results.showing": "यासाठी परिणाम दाखवत आहे:",
    "results.sections": "लागू आयपीसी कलमे",
    "results.relevance": "प्रासंगिकता:",
    "results.punishment": "शिक्षा:",
    "results.empty": "कोणतेही परिणाम सापडले नाहीत",
    "results.try_different": "वेगळा शोध शब्द वापरून पहा",
    "results.searchBarPlaceholder": "कायदे, लेख आणि अधिक शोधा...",
    "results.emptyStateTitle": "निकाल नाही",
    "results.emptyStateDescription": "तुमचा शोध समायोजित करण्याचा प्रयत्न करा किंवा आमच्या श्रेणी एक्सप्लोर करा.",
    
    // Summary
    "summary.results": "परिणाम",
    "summary.high_relevance": "उच्च प्रासंगिकता",
    "summary.medium_relevance": "मध्यम प्रासंगिकता",
    "summary.low_relevance": "कमी प्रासंगिकता",
    
    // Prediction
    "prediction.title": "केस अंदाज विश्लेषण",
    "prediction.disclaimer": "समान ऐतिहासिक केसेसवर आधारित",
    "prediction.chance": "दोषी ठरण्याची शक्यता",
    "prediction.advice": "कायदेशीर सल्ला",

    //About
    "about.title": "आईपीसी न्याय सहाय्य बद्दल",
    "about.description": "आमच्या ध्येय आणि कार्यसंघाबद्दल अधिक जाणून घ्या.",
    "about.missionTitle": "आमचे ध्येय",
    "about.missionDescription": "सर्वांसाठी प्रवेशयोग्य आणि विश्वसनीय कायदेशीर माहिती प्रदान करणे.",
    "about.teamTitle": "आमचा कार्यसंघ",
    "about.teamDescription": "आईपीसी न्याय सहाय्यच्या मागे असलेल्या लोकांना भेटा.",

    //Auth
    "auth.welcome": "स्वागत आहे",
    "auth.description": "आपल्या खात्यात साइन इन करा किंवा नवीन खाते तयार करा",
    "auth.login": "लॉगिन",
    "auth.register": "नोंदणी करा",
    "auth.email": "ईमेल",
    "auth.password": "पासवर्ड",
    "auth.confirmPassword": "पासवर्डची पुष्टी करा",
    "auth.name": "पूर्ण नाव",
    "auth.forgotPassword": "पासवर्ड विसरलात?",
    "auth.signIn": "साइन इन करा",
    "auth.success": "यशस्वी",
    "auth.error": "त्रुटी",
    "auth.loginSuccess": "आपण यशस्वीरित्या लॉग इन केले आहे",
    "auth.registerSuccess": "आपण यशस्वीरित्या नोंदणी केली आहे",
    "auth.passwordMismatch": "पासवर्ड जुळत नाहीत",
    "theme.toggle": "थीम बदला",
  },

  // Telugu
  te: {
    // Common
    "app.name": "ఐపిసి న్యాయ సహాయం",
    "app.version": "వెర్షన్ 1.0.0",
    "app.disclaimer": "డిస్క్లేమర్: ఈ విశ్లేషణ కేవలం సమాచార ప్రయోజనాల కోసం మాత్రమే మరియు చట్టపరమైన సలహా కాదు. వ్యక్తిగత మార్గదర్శకత్వం కోసం చట్టపరమైన నిపుణులను సంప్రదించండి.",
    "app.description": "చట్టాలు మరియు చట్టపరమైన సమాచారాన్ని సులభంగా కనుగొనండి.",
    "app.ogTitle": "జస్టిస్ హబ్: మీ లీగల్ కంపానియన్",
    "app.ogDescription": "చట్టాలను అన్వేషించండి, చట్టపరమైన భావనలను అర్థం చేసుకోండి మరియు మా సమగ్ర చట్టపరమైన వనరుతో సమాచారం తెలుసుకోండి.",
    "app.keywords": "చట్టం, చట్టపరమైన, న్యాయం, సమాచారం, గైడ్, కథనాలు, కేసులు, శాసనం",
    "app.feedback": "అభిప్రాయాన్ని తెలియజేయండి",
    "app.feedbackDescription": "మీ ఆలోచనలను పంచుకోవడం ద్వారా మెరుగుపరచడంలో మాకు సహాయపడండి.",
    "app.submit": "సమర్పించండి",
    "app.thankYou": "ధన్యవాదాలు!",
    "app.feedbackReceived": "మీ అభిప్రాయాన్ని మేము అభినందిస్తున్నాము.",

    //Index
    "index.searchBarPlaceholder": "చట్టాలు, కథనాలు మరియు మరిన్నింటి కోసం శోధించండి...",
    "index.heroTitle": "నాలెడ్జ్ ద్వారా జస్టిస్‌ను శక్తివంతం చేయడం",
    "index.heroSubtitle": "భారతదేశం యొక్క చట్టపరమైన ప్రకృతి దృశ్యాన్ని అర్థం చేసుకోవడానికి మీ ప్రవేశ ద్వారం.",
    "index.cardLawsTitle": "భారతీయ చట్టాలను అన్వేషించండి",
    "index.cardLawsDescription": "భారతీయ చట్టాలు మరియు నిబంధనల యొక్క సమగ్ర సేకరణ ద్వారా బ్రౌజ్ చేయండి.",
    "index.cardInsightsTitle": "చట్టపరమైన అంతర్దృష్టులు",
    "index.cardInsightsDescription": "చట్టపరమైన వ్యవస్థ గురించి మీ అవగాహనను పెంచుకోవడానికి కథనాలు మరియు విశ్లేషణలను చదవండి.",
    "index.cardCaseTitle": "కేసు అంచనాలు",
    "index.cardCaseDescription": "చట్టపరమైన కేసుల యొక్క సాధ్యమయ్యే ఫలితాలపై అంతర్దృష్టులను పొందండి.",
    "index.cardContactTitle": "నిపుణులతో కనెక్ట్ అవ్వండి",
    "index.cardContactDescription": "చట్టపరమైన నిపుణులను కనుగొని, సంప్రదించండి.",

    // Navigation
    "nav.home": "హోమ్",
    "nav.search": "శోధన",
    "nav.history": "చరిత్ర",
    "nav.about": "గురించి",
    "nav.back": "వెనుకకు",
    
    // User actions
    "action.notifications": "నోటిఫికేషన్స్",
    "action.resources": "చట్టపరమైన వనరులు",
    "action.profile": "ప్రొఫైల్",
    "action.settings": "సెట్టింగ్స్",
    "action.logout": "లాగ్ అవుట్",
    
    // Search results
    "results.title": "శోధన ఫలితాలు",
    "results.showing": "కోసం ఫలితాలు చూపిస్తోంది:",
    "results.sections": "వర్తించే ఐపిసి సెక్షన్లు",
    "results.relevance": "సంబంధిత:",
    "results.punishment": "శిక్ష:",
    "results.empty": "ఫలితాలు కనుగొనబడలేదు",
    "results.try_different": "వేరే శోధన పదాన్ని ప్రయత్నించండి",
    "results.searchBarPlaceholder": "చట్టాలు, కథనాలు మరియు మరిన్నింటి కోసం శోధించండి...",
    "results.emptyStateTitle": "ఫలితాలు కనుగొనబడలేదు",
    "results.emptyStateDescription": "మీ శోధనను సర్దుబాటు చేయడానికి ప్రయత్నించండి లేదా మా వర్గాలను అన్వేషించండి.",

    //About
    "about.title": "జస్టిస్ హబ్ గురించి",
    "about.description": "మా లక్ష్యం మరియు బృందం గురించి మరింత తెలుసుకోండి.",
    "about.missionTitle": "మా లక్ష్యం",
    "about.missionDescription": "అందరికీ అందుబాటులో ఉండే మరియు నమ్మదగిన చట్టపరమైన సమాచారాన్ని అందించడం.",
    "about.teamTitle": "మా బృందం",
    "about.teamDescription": "జస్టిస్ హబ్ వెనుక ఉన్న వ్యక్తులను కలవండి.",
    
    // Summary
    "summary.results": "ఫలితాలు",
    "summary.high_relevance": "అధిక సంబంధం",
    "summary.medium_relevance": "మధ్యస్థ సంబంధం",
    "summary.low_relevance": "తక్కువ సంబంధం",
    
    // Prediction
    "prediction.title": "కేసు ఊహించడం విశ్లేషణ",
    "prediction.disclaimer": "సారూప్య చరిత్ర కేసుల ఆధారంగా",
    "prediction.chance": "దోషి నిర్ధారణ అవకాశం",
    "prediction.advice": "చట్టపరమైన సలహా",

    //Auth
    "auth.welcome": "స్వాగతం",
    "auth.description": "మీ ఖాతాకు సైన్ ఇన్ చేయండి లేదా కొత్తదాన్ని సృష్టించండి",
    "auth.login": "లాగిన్",
    "auth.register": "నమోదు",
    "auth.email": "ఇమెయిల్",
    "auth.password": "పాస్వర్డ్",
    "auth.confirmPassword": "పాస్వర్డ్ నిర్ధారించండి",
    "auth.name": "పూర్తి పేరు",
    "auth.forgotPassword": "పాస్వర్డ్ మర్చిపోయారా?",
    "auth.signIn": "సైన్ ఇన్",
    "auth.success": "విజయం",
    "auth.error": "లోపం",
    "auth.loginSuccess": "మీరు విజయవంతంగా లాగిన్ అయ్యారు",
    "auth.registerSuccess": "మీరు విజయవంతంగా నమోదు చేసుకున్నారు",
    "auth.passwordMismatch": "పాస్వర్డ్లు సరిపోలలేదు",
    "theme.toggle": "థీమ్ మార్చండి",
  },

  // Gujarati
  gu: {
    // Common
    "app.name": "આઈપીસી ન્યાય સહાય",
    "app.version": "સંસ્કરણ 1.0.0",
    "app.disclaimer": "અસ્વીકરણ: આ વિશ્લેષણ માત્ર માહિતીના હેતુઓ માટે છે અને કાનૂની સલાહ નથી. વ્યક્તિગત માર્ગદર્શન માટે કાનૂની વ્યાવસાયિકનો સંપર્ક કરો.",
    "app.description": "કાયદાઓ અને કાનૂની માહિતી સરળતાથી શોધો.",
    "app.ogTitle": "જસ્ટિસ હબ: તમારા કાનૂની સાથી",
    "app.ogDescription": "કાયદાઓનું અન્વેષણ કરો, કાનૂની વિભાવનાઓને સમજો અને અમારા વ્યાપક કાનૂની સંસાધન સાથે માહિતગાર રહો.",
    "app.keywords": "કાયદો, કાનૂની, ન્યાય, માહિતી, માર્ગદર્શિકા, લેખો, કેસો, કાયદો",
    "app.feedback": "પ્રતિસાદ આપો",
    "app.feedbackDescription": "તમારા વિચારો શેર કરીને અમને સુધારવામાં મદદ કરો.",
    "app.submit": "સબમિટ કરો",
    "app.thankYou": "આભાર!",
    "app.feedbackReceived": "અમે તમારા પ્રતિસાદની પ્રશંસા કરીએ છીએ.",

    //Index
    "index.searchBarPlaceholder": "કાયદાઓ, લેખો અને વધુ માટે શોધો...",
    "index.heroTitle": "જ્ઞાન દ્વારા ન્યાયને સશક્ત બનાવવું",
    "index.heroSubtitle": "ભારતના કાનૂની લેન્ડસ્કેપને સમજવા માટેનું તમારું પ્રવેશદ્વાર.",
    "index.cardLawsTitle": "ભારતીય કાયદાઓનું અન્વેષણ કરો",
    "index.cardLawsDescription": "ભારતીય કાયદાઓ અને નિયમોના વ્યાપક સંગ્રહ દ્વારા બ્રાઉઝ કરો.",
    "index.cardInsightsTitle": "કાનૂની આંતરદૃષ્ટિ",
    "index.cardInsightsDescription": "કાનૂની પ્રણાલીની તમારી સમજને વધુ ગાઢ બનાવવા માટે લેખો અને વિશ્લેષણ વાંચો.",
    "index.cardCaseTitle": "કેસ આગાહીઓ",
    "index.cardCaseDescription": "કાનૂની કેસોના સંભવિત પરિણામો પર આંતરદૃષ્ટિ મેળવો.",
    "index.cardContactTitle": "નિષ્ણાતો સાથે જોડાઓ",
    "index.cardContactDescription": "કાનૂની વ્યાવસાયિકોને શોધો અને તેમની સાથે સંપર્ક કરો.",

    // Navigation
    "nav.home": "હોમ",
    "nav.search": "શોધ",
    "nav.history": "ઇતિહાસ",
    "nav.about": "વિશે",
    "nav.back": "પાછા",
    
    // User actions
    "action.notifications": "સૂચનાઓ",
    "action.resources": "કાનૂની સંસાધનો",
    "action.profile": "પ્રોફાઇલ",
    "action.settings": "સેટિંગ્સ",
    "action.logout": "લૉગ આઉટ",
    
    // Search results
    "results.title": "શોધ પરિણામો",
    "results.showing": "માટે પરિણામો બતાવી રહ્યાં છે:",
    "results.sections": "લાગુ આઈપીસી કલમો",
    "results.relevance": "પ્રસ્તુતતા:",
    "results.punishment": "સજા:",
    "results.empty": "કોઈ પરિણામ મળ્યાં નથી",
    "results.try_different": "અલગ શોધ શબ્દ પ્રયાસ કરો",
    "results.searchBarPlaceholder": "કાયદાઓ, લેખો અને વધુ માટે શોધો...",
    "results.emptyStateTitle": "કોઈ પરિણામો મળ્યા નથી",
    "results.emptyStateDescription": "તમારી શોધને સમાયોજિત કરવાનો પ્રયાસ કરો અથવા અમારી શ્રેણીઓનું અન્વેષણ કરો.",
    
    // Summary
    "summary.results": "પરિણામો",
    "summary.high_relevance": "ઉચ્ચ પ્રસ્તુતતા",
    "summary.medium_relevance": "મધ્યમ પ્રસ્તુતતા",
    "summary.low_relevance": "નીચી પ્રસ્તુતતા",
    
    // Prediction
    "prediction.title": "કેસ પૂર્વાનુમાન વિશ્લેષણ",
    "prediction.disclaimer": "સમાન ઐતિહાસિક કેસો પર આધારિત",
    "prediction.chance": "દોષિત થવાની શક્યતા",
    "prediction.advice": "કાનૂની સલાહ",

    //About
    "about.title": "જસ્ટિસ હબ વિશે",
    "about.description": "અમારા મિશન અને ટીમ વિશે વધુ જાણો.",
    "about.missionTitle": "અમારું મિશન",
    "about.missionDescription": "દરેક વ્યક્તિ માટે સુલભ અને વિશ્વસનીય કાનૂની માહિતી પ્રદાન કરવી.",
    "about.teamTitle": "અમારી ટીમ",
    "about.teamDescription": "જસ્ટિસ હબ પાછળના લોકોને મળો.",

    //Auth
    "auth.welcome": "સ્વાગત છે",
    "auth.description": "તમારા ખાતામાં સાઇન ઇન કરો અથવા નવું બનાવો",
    "auth.login": "લોગિન",
    "auth.register": "નોંધણી કરો",
    "auth.email": "ઈમેલ",
    "auth.password": "પાસવર્ડ",
    "auth.confirmPassword": "પાસવર્ડની પુષ્ટિ કરો",
    "auth.name": "પૂરું નામ",
    "auth.forgotPassword": "પાસવર્ડ ભૂલી ગયા?",
    "auth.signIn": "સાઇન ઇન કરો",
    "auth.success": "સફળતા",
    "auth.error": "ભૂલ",
    "auth.loginSuccess": "તમે સફળતાપૂર્વક લોગિન કર્યું છે",
    "auth.registerSuccess": "તમે સફળતાપૂર્વક નોંધણી કરી છે",
    "auth.passwordMismatch": "પાસવર્ડ મેળ ખાતા નથી",
    "theme.toggle": "થીમ બદલો",
  },

  // Bengali
  bn: {
    // Common
    "app.name": "আইপিসি ন্যায় সহায়তা",
    "app.version": "সংস্করণ 1.0.0",
    "app.disclaimer": "দাবিত্যাগ: এই বিশ্লেষণটি শুধুমাত্র তথ্যগত উদ্দেশ্যে এবং আইনি পরামর্শ নয়। ব্যক্তিগত নির্দেশনার জন্য একজন আইনি পেশাদারের সাথে পরামর্শ করুন।",
    "app.description": "সহজে আইন ও আইনি তথ্য খুঁজুন।",
    "app.ogTitle": "জাস্টিস হাব: আপনার আইনি সঙ্গী",
    "app.ogDescription": "আইন অন্বেষণ করুন, আইনি ধারণা বুঝুন, এবং আমাদের ব্যাপক আইনি সম্পদ সঙ্গে অবগত থাকুন।",
    "app.keywords": "আইন, আইনি, বিচার, তথ্য, গাইড, প্রবন্ধ, মামলা, আইন",
    "app.feedback": "মতামত দিন",
    "app.feedbackDescription": "আপনার মতামত শেয়ার করে আমাদের উন্নতি করতে সাহায্য করুন।",
    "app.submit": "জমা দিন",
    "app.thankYou": "ধন্যবাদ!",
    "app.feedbackReceived": "আমরা আপনার মতামত প্রশংসা করি।",

    //index
    "index.searchBarPlaceholder": "আইন, প্রবন্ধ, এবং আরো জন্য অনুসন্ধান করুন...",
    "index.heroTitle": "জ্ঞানের মাধ্যমে ন্যায়বিচারকে শক্তিশালী করা",
    "index.heroSubtitle": "ভারতের আইনি ল্যান্ডস্কেপ বোঝার জন্য আপনার প্রবেশদ্বার।",
    "index.cardLawsTitle": "ভারতীয় আইন অন্বেষণ করুন",
    "index.cardLawsDescription": "ভারতীয় আইন ও বিধিগুলির একটি ব্যাপক সংগ্রহ মাধ্যমে ব্রাউজ করুন।",
    "index.cardInsightsTitle": "আইনি অন্তর্দৃষ্টি",
    "index.cardInsightsDescription": "আইনি সিস্টেমের আপনার বোঝা গভীর করার জন্য প্রবন্ধ এবং বিশ্লেষণ পড়ুন।",
    "index.cardCaseTitle": "মামলা পূর্বাভাস",
    "index.cardCaseDescription": "আইনি ক্ষেত্রে সম্ভাব্য ফলাফল উপর অন্তর্দৃষ্টি পান।",
    "index.cardContactTitle": "বিশেষজ্ঞদের সাথে সংযোগ স্থাপন করুন",
    "index.cardContactDescription": "আইনি পেশাদারদের খুঁজুন এবং তাদের সাথে পরামর্শ করুন।",
    
    // Navigation
    "nav.home": "হোম",
    "nav.search": "অনুসন্ধান",
    "nav.history": "ইতিহাস",
    "nav.about": "সম্পর্কে",
    "nav.back": "পিছনে",
    
    // User actions
    "action.notifications": "বিজ্ঞপ্তি",
    "action.resources": "আইনি সম্পদ",
    "action.profile": "প্রোফাইল",
    "action.settings": "সেটিংস",
    "action.logout": "লগ আউট",
    
    // Search results
    "results.title": "অনুসন্ধান ফলাফল",
    "results.showing": "এর জন্য ফলাফল দেখাচ্ছে:",
    "results.sections": "প্রযোজ্য আইপিসি ধারা",
    "results.relevance": "প্রাসঙ্গিকতা:",
    "results.punishment": "শাস্তি:",
    "results.empty": "কোন ফলাফল পাওয়া যায়নি",
    "results.try_different": "একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন",
    "results.searchBarPlaceholder": "আইন, প্রবন্ধ, এবং আরো জন্য অনুসন্ধান করুন...",
    "results.emptyStateTitle": "কোনো ফলাফল পাওয়া যায়নি",
    "results.emptyStateDescription": "আপনার অনুসন্ধান সামঞ্জস্য করার চেষ্টা করুন অথবা আমাদের বিভাগগুলি অন্বেষণ করুন।",
    
    // Summary
    "summary.results": "ফলাফল",
    "summary.high_relevance": "উচ্চ প্রাসঙ্গিকতা",
    "summary.medium_relevance": "মাঝারি প্রাসঙ্গিকতা",
    "summary.low_relevance": "কম প্রাসঙ্গিকতা",
    
    // Prediction
    "prediction.title": "মামলা পূর্বাভাস বিশ্লেষণ",
    "prediction.disclaimer": "অনুরূপ ঐতিহাসিক মামলার উপর ভিত্তি করে",
    "prediction.chance": "দোষী সাব্যস্ত হওয়ার সম্ভাবনা",
    "prediction.advice": "আইনি পরামর্শ",

    //About
    "about.title": "জাস্টিস হাব সম্পর্কে",
    "about.description": "আমাদের মিশন এবং দল সম্পর্কে আরো জানুন।",
    "about.missionTitle": "আমাদের লক্ষ্য",
    "about.missionDescription": "সবার জন্য অ্যাক্সেসযোগ্য এবং নির্ভরযোগ্য আইনি তথ্য প্রদান করা।",
    "about.teamTitle": "আমাদের দল",
    "about.teamDescription": "জাস্টিস হাব পিছনে মানুষ দেখা করুন।",

    //Auth
    "auth.welcome": "স্বাগতম",
    "auth.description": "আপনার অ্যাকাউন্টে সাইন ইন করুন বা একটি নতুন তৈরি করুন",
    "auth.login": "লগইন",
    "auth.register": "নিবন্ধন",
    "auth.email": "ইমেইল",
    "auth.password": "পাসওয়ার্ড",
    "auth.confirmPassword": "পাসওয়ার্ড নিশ্চিত করুন",
    "auth.name": "পুরো নাম",
    "auth.forgotPassword": "পাসওয়ার্ড ভুলে গেছেন?",
    "auth.signIn": "সাইন ইন করুন",
    "auth.success": "সফলতা",
    "auth.error": "ত্রুটি",
    "auth.loginSuccess": "আপনি সফলভাবে লগইন করেছেন",
    "auth.registerSuccess": "আপনি সফলভাবে নিবন্ধন করেছেন",
    "auth.passwordMismatch": "পাসওয়ার্ড মিলছে না",
    "theme.toggle": "থিম পরিবর্তন করুন",
  },

  // Tamil
  ta: {
    // Common
    "app.name": "ஐபிசி நீதி உதவி",
    "app.version": "பதிப்பு 1.0.0",
    "app.disclaimer": "மறுப்பு: இந்த பகுப்பாய்வு தகவல் நோக்கங்களுக்காக மட்டுமே மற்றும் சட்ட ஆலோசனை அல்ல. தனிப்பட்ட வழிகாட்டுதலுக்கு ஒரு சட்ட நிபுணரை அணுகவும்.",
    "app.description": "சட்டங்கள் மற்றும் சட்ட தகவல்களை எளிதாகக் கண்டறியவும்.",
    "app.ogTitle": "நீதி மையம்: உங்கள் சட்ட துணை",
    "app.ogDescription": "சட்டங்களை ஆராயுங்கள், சட்டக் கருத்துகளைப் புரிந்து கொள்ளுங்கள், மேலும் எங்கள் விரிவான சட்ட ஆதாரத்துடன் தகவலறிந்து இருங்கள்.",
    "app.keywords": "சட்டம், சட்ட, நீதி, தகவல், வழிகாட்டி, கட்டுரைகள், வழக்குகள், சட்டம்",
    "app.feedback": "கருத்து கொடு",
    "app.feedbackDescription": "உங்கள் எண்ணங்களைப் பகிர்ந்து கொள்வதன் மூலம் மேம்படுத்த எங்களுக்கு உதவுங்கள்.",
    "app.submit": "சமர்ப்பிக்கவும்",
    "app.thankYou": "நன்றி!",
    "app.feedbackReceived": "உங்கள் கருத்தை நாங்கள் பாராட்டுகிறோம்.",

    
    // Navigation
    "nav.home": "முகப்பு",
    "nav.search": "தேடல்",
    "nav.history": "வரலாறு",
    "nav.about": "பற்றி",
    "nav.back": "பின்",
    
    // User actions
    "action.notifications": "அறிவிப்புகள்",
    "action.resources": "சட்ட வளங்கள்",
    "action.profile": "சுயவிவரம்",
    "action.settings": "அமைப்புகள்",
    "action.logout": "வெளியேறு",
    
    // Search results
    "results.title": "தேடல் முடிவுகள்",
    "results.showing": "முடிவுகள் காட்டப்படுகின்றன:",
    "results.sections": "பொருந்தக்கூடிய ஐபிசி பிரிவுகள்",
    "results.relevance": "தொடர்புடைய:",
    "results.punishment": "தண்டனை:",
    "results.empty": "முடிவுகள் எதுவும் இல்லை",
    "results.try_different": "வேறு தேடல் சொல்லை முயற்சிக்கவும்",
    "results.searchBarPlaceholder": "சட்டங்கள், கட்டுரைகள் மற்றும் பலவற்றைத் தேடுங்கள்...",
    "results.emptyStateTitle": "எந்த முடிவுகளும் கிடைக்கவில்லை",
    "results.emptyStateDescription": "உங்கள் தேடலை சரிசெய்ய முயற்சிக்கவும் அல்லது எங்கள் வகைகளை ஆராயவும்.",
    
    // Summary
    "summary.results": "முடிவுகள்",
    "summary.high_relevance": "உயர் தொடர்பு",
    "summary.medium_relevance": "நடுத்தர தொடர்பு",
    "summary.low_relevance": "குறைந்த தொடர்பு",
    
    // Prediction
    "prediction.title": "வழக்கு முன்னறிவிப்பு பகுப்பாய்வு",
    "prediction.disclaimer": "ஒத்த வரலாற்று வழக்குகளின் அடிப்படையில்",
    "prediction.chance": "குற்றம் சாட்டப்படும் வாய்ப்பு",
    "prediction.advice": "சட்ட ஆலோசனை",

    //About
    "about.title": "நீதி மையம் பற்றி",
    "about.description": "எங்கள் நோக்கம் மற்றும் குழு பற்றி மேலும் அறிக.",
    "about.missionTitle": "எங்கள் நோக்கம்",
    "about.missionDescription": "அனைவருக்கும் அணுகக்கூடிய மற்றும் நம்பகமான சட்ட தகவல்களை வழங்குதல்.",
    "about.teamTitle": "எங்கள் குழு",
    "about.teamDescription": "நீதி மையத்தின் பின்னணியில் உள்ளவர்களைச் சந்தியுங்கள்.",


    //Auth
    "auth.welcome": "வரவேற்கிறோம்",
    "auth.description": "உங்கள் கணக்கில் உள்நுழையவும் அல்லது புதிதாக உருவாக்கவும்",
    "auth.login": "உள்நுழைய",
    "auth.register": "பதிவு செய்யவும்",
    "auth.email": "மின்னஞ்சல்",
    "auth.password": "கடவுச்சொல்",
    "auth.confirmPassword": "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    "auth.name": "முழு பெயர்",
    "auth.forgotPassword": "கடவுச்சொல் மறந்துவிட்டதா?",
    "auth.signIn": "உள்நுழைக",
    "auth.success": "வெற்றி",
    "auth.error": "பிழை",
    "auth.loginSuccess": "நீங்கள் வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்",
    "auth.registerSuccess": "நீங்கள் வெற்றிகரமாக பதிவுசெய்துள்ளீர்கள்",
    "auth.passwordMismatch": "கடவுச்சொற்கள் பொருந்தவில்லை",
    "theme.toggle": "தீம் மாற்றவும்",

    //Index
    "index.searchBarPlaceholder": "சட்டங்கள், கட்டுரைகள் மற்றும் பலவற்றைத் தேடுங்கள்...",
    "index.heroTitle": "அறிவின் மூலம் நீதியை மேம்படுத்துதல்",
    "index.heroSubtitle": "இந்தியாவின் சட்ட நிலப்பரப்பைப் புரிந்துகொள்வதற்கான உங்கள் நுழைவாயில்.",
    "index.cardLawsTitle": "இந்திய சட்டங்களை ஆராயுங்கள்",
    "index.cardLawsDescription": "இந்திய சட்டங்கள் மற்றும் ஒழுங்குமுறைகளின் விரிவான தொகுப்பின் மூலம் உலாவவும்.",
    "index.cardInsightsTitle": "சட்ட நுண்ணறிவு",
    "index.cardInsightsDescription": "சட்ட அமைப்பைப் பற்றிய உங்கள் புரிதலை ஆழப்படுத்த கட்டுரைகள் மற்றும் பகுப்பாய்வுகளைப் படியுங்கள்.",
    "index.cardCaseTitle": "வழக்கு கணிப்புகள்",
    "index.cardCaseDescription": "சட்ட வழக்குகளின் சாத்தியமான விளைவுகள் பற்றிய நுண்ணறிவுகளைப் பெறுங்கள்.",
    "index.cardContactTitle": "நிபுணர்களுடன் இணைந்திருங்கள்",
    "index.cardContactDescription": "சட்ட வல்லுநர்களைக் கண்டுபிடித்து கலந்தாலோசிக்கவும்.",

  },

  // Assamese
  as: {
    // Common
    "app.name": "আইপিচি ন্যায় সহায়",
    "app.version": "সংস্কৰণ 1.0.0",
    "app.disclaimer": "দায়ত্যাগ: এই বিশ্লেষণ কেৱল তথ্যৰ উদ্দেশ্যৰ বাবে আৰু আইনী পৰামৰ্শ নহয়। ব্যক্তিগত নিৰ্দেশনাৰ বাবে আইনী পেছাদাৰীৰ পৰামৰ্শ লওক।",
    "app.description": "আইন আৰু আইনী তথ্য সহজে বিচাৰি উলিয়াওক।",
    "app.ogTitle": "ন্যায় কেন্দ্ৰ: আপোনাৰ আইনী সংগী",
    "app.ogDescription": "আইনসমূহ অন্বেষণ কৰক, আইনী ধাৰণাসমূহ বুজি লওক, আৰু আমাৰ বিস্তৃত আইনী সম্পদৰ সৈতে অৱগত থাকক।",
    "app.keywords": "আইন, আইনী, ন্যায়, তথ্য, নিৰ্দেশিকা, প্ৰবন্ধ, গোচৰ, আইন",
    "app.feedback": "মতামত দিয়ক",
    "app.feedbackDescription": "আপোনাৰ विचारসমূহ শ্বেয়াৰ কৰি আমাক উন্নত কৰাত সহায় কৰক।",
    "app.submit": "জমাকৰক",
    "app.thankYou": "ধন্যবাদ!",
    "app.feedbackReceived": "আমি আপোনাৰ মতামতৰ শলাগ লওঁ।",

    //Index
    "index.searchBarPlaceholder": "আইন, প্ৰবন্ধ, আৰু অধিকৰ বাবে সন্ধান কৰক...",
    "index.heroTitle": "জ্ঞানৰ জৰিয়তে ন্যায়ক শক্তিশালী কৰা",
    "index.heroSubtitle": "ভাৰতৰ আইনী পৰিৱেশ বুজিবলৈ আপোনাৰ প্ৰৱেশদ্বাৰ।",
    "index.cardLawsTitle": "ভাৰতীয় আইনসমূহ অন্বেষণ কৰক",
    "index.cardLawsDescription": "ভাৰতীয় আইন আৰু নিয়মসমূহৰ এক বিস্তৃত সংগ্ৰহৰ জৰিয়তে ব্ৰাউজ কৰক।",
    "index.cardInsightsTitle": "আইনী অন্তৰ্দৃষ্টি",
    "index.cardInsightsDescription": "আইনী ব্যৱস্থাৰ বিষয়ে আপোনাৰ বোধগম্যতা গভীৰ কৰিবলৈ প্ৰবন্ধ আৰু বিশ্লেষণ পঢ়ক।",
    "index.cardCaseTitle": "গোচৰৰ পূৰ্বানুমান",
    "index.cardCaseDescription": "আইনী গোচৰসমূহৰ সম্ভাৱ্য ফলাফলৰ ওপৰত অন্তৰ্দৃষ্টি লাভ কৰক।",
    "index.cardContactTitle": "বিশেষজ্ঞসকলৰ সৈতে সংযোগ স্থাপন কৰক",
    "index.cardContactDescription": "আইনী পেছাদাৰীসকলক বিচাৰি উলিয়াওক আৰু তেওঁলোকৰ সৈতে যোগাযোগ কৰক।",

    // Navigation
    "nav.home": "হোম",
    "nav.search": "সন্ধান",
    "nav.history": "ইতিহাস",
    "nav.about": "বিষয়ে",
    "nav.back": "পিছলৈ",
    
    // User actions
    "action.notifications": "জাননী",
    "action.resources": "আইনী সম্পদ",
    "action.profile": "প্ৰোফাইল",
    "action.settings": "ছেটিংছ",
    "action.logout": "লগ আউট",
    
    // Search results
    "results.title": "সন্ধানৰ ফলাফল",
    "results.showing": "ফলাফল দেখুওৱা হৈছে:",
    "results.sections": "প্ৰযোজ্য আইপিচি বিভাগসমূহ",
    "results.relevance": "প্ৰাসংগিকতা:",
    "results.punishment": "শাস্তি:",
    "results.empty": "কোনো ফলাফল পোৱা নাই",
    "results.try_different": "এটা ভিন্ন সন্ধান শব্দ চেষ্টা কৰক",
    "results.searchBarPlaceholder": "আইন, প্ৰবন্ধ, আৰু অধিকৰ বাবে সন্ধান কৰক...",
    "results.emptyStateTitle": "কোনো ফলাফল পোৱা নগ'ল",
    "results.emptyStateDescription": "আপোনাৰ সন্ধানটো ঠিক কৰিবলৈ চেষ্টা কৰক অথবা আমাৰ শ্ৰেণীসমূহ অন্বেষণ কৰক।",

    
    
    // Summary
    "summary.results": "ফলাফল",
    "summary.high_relevance": "উচ্চ প্ৰাসংগিকতা",
    "summary.medium_relevance": "মধ্যম প্ৰাসংগিকতা",
    "summary.low_relevance": "নিম্ন প্ৰাসংগিকতা",
    
    // Prediction
    "prediction.title": "গোচৰ পূৰ্বানুমান বিশ্লেষণ",
    "prediction.disclaimer": "সমান ঐতিহাসিক গোচৰৰ ওপৰত ভিত্তি কৰি",
    "prediction.chance": "দোষী সাব্যস্ত হোৱাৰ সম্ভাৱনা",
    "prediction.advice": "আইনী পৰামৰ্শ",

    //About
    "about.title": "ন্যায় কেন্দ্ৰৰ বিষয়ে",
    "about.description": "আমাৰ লক্ষ্য আৰু দলৰ বিষয়ে অধিক জানক।",
    "about.missionTitle": "আমাৰ লক্ষ্য",
    "about.missionDescription": "সকলোৰে বাবে সুলভ আৰু বিশ্বাসযোগ্য আইনী তথ্য প্ৰদান কৰা।",
    "about.teamTitle": "আমাৰ দল",
    "about.teamDescription": "ন্যায় কেন্দ্ৰৰ পিছত থকা লোকসকলক লগ কৰক।",

    //Auth
    "auth.welcome": "স্বাগতম",
    "auth.description": "আপোনাৰ একাউণ্টত ছাইন ইন কৰক বা এটা নতুন সৃষ্টি কৰক",
    "auth.login": "লগিন",
    "auth.register": "পঞ্জীয়ন কৰক",
    "auth.email": "ইমেইল",
    "auth.password": "পাছৱৰ্ড",
    "auth.confirmPassword": "পাছৱৰ্ড নিশ্চিত কৰক",
    "auth.name": "সম্পূৰ্ণ নাম",
    "auth.forgotPassword": "পাছৱৰ্ড পাহৰি গৈছে?",
    "auth.signIn": "ছাইন ইন কৰক",
    "auth.success": "সফলতা",
    "auth.error": "ত্ৰুটি",
    "auth.loginSuccess": "আপুনি সফলতাৰে লগিন কৰিছে",
    "auth.registerSuccess": "আপুনি সফলতাৰে পঞ্জীয়ন কৰিছে",
    "auth.passwordMismatch": "পাছৱৰ্ডসমূহ মিল নাখায়",
    "theme.toggle": "থীম সলনি কৰক",

    
    
  },

  // Punjabi
  pa: {
    // Common
    "app.name": "ਆਈਪੀਸੀ ਨਿਆਂ ਸਹਾਇਤਾ",
    "app.version": "ਵਰਜਨ 1.0.0",
    "app.disclaimer": "ਅਸਵੀਕਾਰ: ਇਹ ਵਿਸ਼ਲੇਸ਼ਣ ਸਿਰਫ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਹੈ ਅਤੇ ਕਾਨੂੰਨੀ ਸਲਾਹ ਨਹੀਂ ਹੈ। ਨਿੱਜੀ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਕਾਨੂੰਨੀ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
    "app.description": "ਕਾਨੂੰਨ ਅਤੇ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ ਆਸਾਨੀ ਨਾਲ ਲੱਭੋ।",
    "app.ogTitle": "ਜਸਟਿਸ ਹੱਬ: ਤੁਹਾਡਾ ਕਾਨੂੰਨੀ ਸਾਥੀ",
    "app.ogDescription": "ਕਾਨੂੰਨਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ, ਕਾਨੂੰਨੀ ਧਾਰਨਾਵਾਂ ਨੂੰ ਸਮਝੋ, ਅਤੇ ਸਾਡੇ ਵਿਆਪਕ ਕਾਨੂੰਨੀ ਸਰੋਤ ਨਾਲ ਜਾਣੂ ਰਹੋ।",
    "app.keywords": "ਕਾਨੂੰਨ, ਕਾਨੂੰਨੀ, ਨਿਆਂ, ਜਾਣਕਾਰੀ, ਗਾਈਡ, ਲੇਖ, ਕੇਸ, ਕਾਨੂੰਨ",
    "app.feedback": "ਫੀਡਬੈਕ ਦਿਓ",
    "app.feedbackDescription": "ਆਪਣੇ ਵਿਚਾਰ ਸਾਂਝੇ ਕਰਕੇ ਸਾਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
    "app.submit": "ਸਬਮਿਟ ਕਰੋ",
    "app.thankYou": "ਧੰਨਵਾਦ!",
    "app.feedbackReceived": "ਅਸੀਂ ਤੁਹਾਡੀ ਫੀਡਬੈਕ ਦੀ ਸ਼ਲਾਘਾ ਕਰਦੇ ਹਾਂ।",

    //Index
    "index.searchBarPlaceholder": "ਕਾਨੂੰਨਾਂ, ਲੇਖਾਂ ਅਤੇ ਹੋਰ ਲਈ ਖੋਜ ਕਰੋ...",
    "index.heroTitle": "ਗਿਆਨ ਦੁਆਰਾ ਨਿਆਂ ਨੂੰ ਸ਼ਕਤੀ ਪ੍ਰਦਾਨ ਕਰਨਾ",
    "index.heroSubtitle": "ਭਾਰਤ ਦੇ ਕਾਨੂੰਨੀ ਪਰਿਦ੍ਰਿਸ਼ ਨੂੰ ਸਮਝਣ ਲਈ ਤੁਹਾਡਾ ਦਰਵਾਜ਼ਾ।",
    "index.cardLawsTitle": "ਭਾਰਤੀ ਕਾਨੂੰਨਾਂ ਦਾ ਅਧਿਐਨ ਕਰੋ",
    "index.cardLawsDescription": "ਭਾਰਤੀ ਕਾਨੂੰਨਾਂ ਅਤੇ ਵਿਧੀ ਨਿਯਮਾਂ ਦਾ ਵਿਸਤ੍ਰਿਤ ਸੰਚੇ ਪੜ੍ਹੋ।",
    "index.cardInsightsTitle": "ਕਾਨੂੰਨੀ ਝਲਕੀਆਂ",
    "index.cardInsightsDescription": "ਕਾਨੂੰਨੀ ਪ੍ਰਣਾਲੀ ਦੀ ਸਮਝ ਨੂੰ ਗਹਿਰਾਈ ਨਾਲ ਜਾਣਨ ਲਈ ਲੇਖ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਪੜ੍ਹੋ।",
    "index.cardCaseTitle": "ਮਾਮਲਿਆਂ ਦੀ ਭਵਿੱਖਬਾਣੀ",
    "index.cardCaseDescription": "ਕਾਨੂੰਨੀ ਕੇਸਾਂ ਦੇ ਸੰਭਾਵਿਤ ਨਤੀਜਿਆਂ ਬਾਰੇ ਝਲਕ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "index.cardContactTitle": "ਮਾਹਿਰਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    "index.cardContactDescription": "ਕਾਨੂੰਨੀ ਵਿਦਵਾਨਾਂ ਨੂੰ ਲੱਭੋ ਅਤੇ ਉਨ੍ਹਾਂ ਨਾਲ ਸਲਾਹ ਕਰੋ।",


    // Navigation
    "nav.home": "ਹੋਮ",
    "nav.search": "ਖੋਜ",
    "nav.history": "ਇਤਿਹਾਸ",
    "nav.about": "ਬਾਰੇ",
    "nav.back": "ਵਾਪਸ",
    
    // User actions
    "action.notifications": "ਸੂਚਨਾਵਾਂ",
    "action.resources": "ਕਾਨੂੰਨੀ ਸਰੋਤ",
    "action.profile": "ਪ੍ਰੋਫਾਈਲ",
    "action.settings": "ਸੈਟਿੰਗਾਂ",
    "action.logout": "ਲੌਗ ਆਉਟ",
    
    // Search results
    "results.title": "ਖੋਜ ਨਤੀਜੇ",
    "results.showing": "ਲਈ ਨਤੀਜੇ ਦਿਖਾ ਰਿਹਾ ਹੈ:",
    "results.sections": "ਲਾਗੂ ਆਈਪੀਸੀ ਧਾਰਾਵਾਂ",
    "results.relevance": "ਪ੍ਰਸੰਗਿਕਤਾ:",
    "results.punishment": "ਸਜ਼ਾ:",
    "results.empty": "ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ",
    "results.try_different": "ਵੱਖਰੇ ਖੋਜ ਸ਼ਬਦ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    "results.searchBarPlaceholder": "ਕਾਨੂੰਨਾਂ, ਲੇਖਾਂ ਅਤੇ ਹੋਰ ਲਈ ਖੋਜ ਕਰੋ...",
    "results.emptyStateTitle": "ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ",
    "results.emptyStateDescription": "ਆਪਣੀ ਖੋਜ ਬਦਲ ਕੇ ਵੇਖੋ ਜਾਂ ਸਾਡੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਦੀ ਖੋਜ ਕਰੋ।",

    
    // Summary
    "summary.results": "ਨਤੀਜੇ",
    "summary.high_relevance": "ਉੱਚ ਪ੍ਰਸੰਗਿਕਤਾ",
    "summary.medium_relevance": "ਮੱਧਮ ਪ੍ਰਸੰਗਿਕਤਾ",
    "summary.low_relevance": "ਘੱਟ ਪ੍ਰਸੰਗਿਕਤਾ",
    
    // Prediction
    "prediction.title": "ਕੇਸ ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "prediction.disclaimer": "ਸਮਾਨ ਇਤਿਹਾਸਕ ਮਾਮਲਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ",
    "prediction.chance": "ਦੋਸ਼ੀ ਠਹਿਰਾਉਣ ਦੀ ਸੰਭਾਵਨਾ",
    "prediction.advice": "ਕਾਨੂੰਨੀ ਸਲਾਹ",

    //Auth
    "auth.welcome": "ਸਵਾਗਤ ਹੈ",
    "auth.description": "ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਲੌਗਿਨ ਕਰੋ ਜਾਂ ਨਵਾਂ ਖਾਤਾ ਬਣਾਓ",
    "auth.login": "ਲੌਗਿਨ",
    "auth.register": "ਰਜਿਸਟਰ",
    "auth.email": "ਈਮੇਲ",
    "auth.password": "ਪਾਸਵਰਡ",
    "auth.confirmPassword": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "auth.name": "ਪੂਰਾ ਨਾਮ",
    "auth.forgotPassword": "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ ਹੋ?",
    "auth.signIn": "ਸਾਈਨ ਇਨ",
    "auth.success": "ਸਫਲਤਾ",
    "auth.error": "ਗਲਤੀ",
    "auth.loginSuccess": "ਤੁਸੀਂ ਸਫਲਤਾਪੂਰਵਕ ਲੌਗਿਨ ਕਰ ਲਿਆ ਹੈ",
    "auth.registerSuccess": "ਤੁਸੀਂ ਸਫਲਤਾਪੂਰਵਕ ਰਜਿਸਟਰ ਕਰ ਲਿਆ ਹੈ",
    "auth.passwordMismatch": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
    "theme.toggle": "ਥੀਮ ਬਦਲੋ",

    //About
    "about.title": "IPC ਨਿਆਂ ਸਹਾਇਤਾ ਬਾਰੇ",
    "about.description": "ਸਾਡੀ ਮਿਸ਼ਨ ਅਤੇ ਟੀਮ ਬਾਰੇ ਹੋਰ ਜਾਣੋ।",
    "about.missionTitle": "ਸਾਡਾ ਮਿਸ਼ਨ",
    "about.missionDescription": "ਹਰ ਕਿਸੇ ਲਈ ਪਹੁੰਚਯੋਗ ਅਤੇ ਭਰੋਸੇਯੋਗ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨੀ।",
    "about.teamTitle": "ਸਾਡੀ ਟੀਮ",
    "about.teamDescription": "IPC ਨਿਆਂ ਸਹਾਇਤਾ ਦੇ ਪਿੱਛੇ ਦੇ ਲੋਕਾਂ ਨੂੰ ਮਿਲੋ।"

  }
};
