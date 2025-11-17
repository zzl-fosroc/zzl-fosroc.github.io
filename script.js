// --- CONSTANTS & DATA ---

/**
 * Title-cases a string, keeping small words lowercase.
 */
function toTitleCase(str) {
  if (!str) return "";
  const smallWords = /\b(a|an|and|as|at|but|by|be|for|in|of|on|or|to|with)\b/g;
  const units = /\b(mm|ml|m|l)\b/gi;

  let title = str.replace(
    /\b\w+/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

  title = title.replace(smallWords, (match, word) => {
    if (title.indexOf(match) === 0) return match;
    return word;
  });

  title = title.replace(units, (match) => match.toLowerCase());
  title = title.replace(/\(S\)/g, "(s)");

  // Fix specific product names
  title = title.replace(/\b(Lokfix E55|Lokfix E77|Nitoseal Pu40-cs|Thioflex 600 Gg|Thioflex 600 Pg|Primer 7e|Supercast Ept|Supercast Pc)\b/gi, (match) => {
    if (match.toLowerCase() === 'lokfix e55') return 'Lokfix E55';
    if (match.toLowerCase() === 'lokfix e77') return 'Lokfix E77';
    if (match.toLowerCase() === 'nitoseal pu40-cs') return 'Nitoseal PU40-CS';
    if (match.toLowerCase() === 'thioflex 600 gg') return 'Thioflex 600 GG';
    if (match.toLowerCase() === 'thioflex 600 pg') return 'Thioflex 600 PG';
    if (match.toLowerCase() === 'primer 7e') return 'Primer 7E';
    if (match.toLowerCase() === 'supercast ept') return 'Supercast EPT';
    if (match.toLowerCase() === 'supercast pc') return 'Supercast PC';
    return match;
  });

  return title;
}


/**
 * Translation strings for all UI elements.
 */
const translations = {
en: {
    // Hub Keys
    welcome: "Welcome",
    selectLanguage: "Please Select Your Language",
    selectTool: "Select an Application",
    anchorCalculator: "Anchoring Material Calculator",
    anchorDescription: "Calculate No. of Cartidge for Lokfix.",
    materialCatalogue: "Material Catalogue",
    comingSoon: "Coming Soon",
    featureInProgress: "This feature is currently under development.",
    back: "Back",
    results: "Results",
    criteriaForResults: "Criteria for Result",

    // PWA/Install Keys
    installApp: "Install App",
    installAppDescription: "Add IQ Hub to your home screen.",
    installOnSamsung: "Install on Samsung",
    samsungInstallPart1: "To install, tap the Menu button",
    samsungInstallPart2: "and then select 'Add to Home Screen'.",
    close: "Close",

    // Sealant Calculator Keys
    sealantCalculator: "Sealant Volume Calculator",
    sealantDescription: "Nitoseal and Thioflex Calculator.",
    sealantProduct: "Select Sealant Product",
    sealantSubstrate: "Substrate Type",
    substratePorous: "Porous",
    substrateNonPorous: "Non-Porous",
    jointWidth: "Joint Width",
    jointWidthMin6: "Joint Width (6mm - 50mm)",
    jointWidthMin5: "Joint Width (5mm - 50mm)",
    jointDepth: "Joint Depth",
    jointDepthMin6: "Joint Depth (6mm - 50mm)",
    jointDepthMin5: "Joint Depth (5mm - 50mm)",
    totalJointLength: "Total Joint Length",
    m: "m",
    litres: "Litres",
    thioflex600gg: "Thioflex 600 Gun-Grade",
    thioflex600pg: "Thioflex 600 Pour-Grade",
    nitosealpu40: "Nitoseal PU40-CS",
    packagesNeeded: "Packages Needed",
    setsNeeded: "Sets Needed",
    sausages: "Sausage(s)",
    packs: "Pack(s)",
    sets: "Set(s)",
    wastageNote: "({percent}% wastage)",
    sealantProductPageTitle: "Select Product",
    sealantProductPageStep: "Step 1 of 4",
    sealantSubstratePageTitle: "Select Substrate",
    sealantSubstratePageStep: "Step 2 of 4",
    sealantDimsPageTitle: "Joint Dimensions",
    sealantDimsPageStep: "Step 3 of 4",
    sealantResultPageTitle: "Calculation Results",
    sealantResultPageStep: "Step 4 of 4",
    sealantCalculate: "Calculate",
    sealantEditCriteria: "Edit Criteria",
    guidanceTitle: "Guidelines",
    guidanceManualTitle: "Recommendation (Manual Mode)",
    guidancePU40: "Uses Nitoseal PU40-CS guidelines. Min. depth {minDepth}mm for {substrate} substrate.",
    guidanceThioflex: "Uses ASTM C 1193-16 guidelines. Min. depth 5mm.",
    guidancePU40Rec: "Recommendation based on Nitoseal PU40-CS: Aim for 2:1 ratio (max 50mm depth). Min. depth {minDepth}mm.",
    guidanceThioflexRec: "Recommendation based on ASTM C 1193-16: Aim for 2:1 ratio (max 50mm depth). Min. depth 5mm.",
    errorMinJointWidth: "Joint width must be at least {minWidth}mm.",
    errorMaxJointWidth: "Joint width must not exceed 50mm.",
    errorMinJointDepth: "Joint depth must be at least {minDepth}mm.",
    errorMaxJointDepth: "Depth for {product} must not exceed {maxDepth}mm.",
    errorMaxJointDepthManual: "Manual depth must not exceed 50mm.",
    errorMaxJointDepthLinked: "Linked depth must not exceed 25mm.",
    errorSealantLength: "Please enter a valid total length.",
    sealantStartOver: "Start Over",
    includePrimer: "Calculate Primer 7E",
    primerNeeded: "Primer 7E Needed",
    tins: "Tin(s)",
    primerAreaNoteText: "For {area} m² joint area ({litres} L)",

    // Anchor Calculator Keys
    chooseApplicationType: "Choose the Application Type.",
    structural: "Structural",
    nonStructural: "Non-Structural",
    selectRebarDiameter: "Select Rebar",
    chooseRebarSize: "Choose the rebar size you are using.",
    selectHoleDiameter: "Select Hole Size",
    forLokfixE77: "For Lokfix E77 & Rebar",
    selectEmbedmentDepth: "Embedment Depth",
    selectedDepth: "Selected Depth:",
    min: "Min",
    max: "Max",
    mm: "mm",
    mL: "mL",
    continueToCalculator: "Continue",
    volumeCalculator: "Volume Calculator",
    estimateResinVolume: "Estimate resin volume for anchor rods.",
    rebar: "Rebar",
    holeDiameter: "Hole Diameter",
    embedmentDepth: "Embedment Depth",
    embedmentDepthHoleDepth: "Embedment Depth / Hole Depth",
    holeDiameterPlaceholder: "e.g., 16",
    holeDepthPlaceholder: "e.g., 125",
    netVolumePerAnchor: "Net Volume (per anchor):",
    volumeRequiredPerAnchor: "Total Volume (per anchor):",
    numberOfRebars: "Number of Rebars",
    totalVolumeRequired: "Total Volume Required:",
    totalCartridgesNeeded: "Total Cartridges Needed:",
    lokfixE55: "Lokfix E55",
    lokfixE77: "Lokfix E77",
    cartridges: "Cartridge(s)",
    errorFillFields: "Please fill in all fields with valid numbers.",
    errorPositiveValues: "All values must be positive.",
    errorHoleSize: "Hole Diameter must be larger than Rod Diameter.",
    customizeWastage: "Customize Wastage",
    wastageFactor: "Wastage Factor",
    includesWastage: "Includes",
    wastage: "wastage",
    fillDepthNote: "(Calculated at 2/3 fill depth)",
    startOver: "Start Over",

    // Pile Top Calculator Keys
    pileTopCalculator: "Pile Top Calculator",
    pileTopDescription: "Estimate Supercast PC for pile leveling.",
    pileTopShapePageTitle: "Select Pile Shape",
    pileTopShapePageStep: "Step 1 of 3",
    pileTopDimsPageTitle: "Pile Dimensions",
    pileTopDimsPageStep: "Step 2 of 3",
    pileTopResultPageTitle: "Pile Top Results",
    pileTopResultPageStep: "Step 3 of 3",
    selectPileType: "Select Pile Type",
    pileTypeRound: "Round",
    pileTypeSquare: "Square",
    pileTypeRectangular: "Rectangular",
    pileDiameter: "Pile Diameter",
    pileDiameterMm: "Pile Diameter (mm)",
    pileDiameterPlaceholder: "Enter custom diameter (mm)",
    pileSideLength: "Side Length",
    pileSideLengthMm: "Side Length (mm)",
    pileSidePlaceholder: "Enter custom side length (mm)",
    pileLength: "Length",
    pileLengthMm: "Length (mm)",
    pileLengthPlaceholder: "Enter length (mm)",
    pileWidth: "Width",
    pileWidthMm: "Width (mm)",
    pileWidthPlaceholder: "Enter width (mm)",
    pileThickness: "Casting Thickness (mm)",
    pileThicknessNote: "Min 15mm, Max 250mm per layer", // CHANGED
    cm: "cm",
    unit: "Unit",
    pileTopCalculate: "Calculate",
    numberOfPiles: "Number of Piles",
    bagsNeeded: "Bags Needed (Supercast PC)",
    bags: "Bag(s)",
    recommendation: "Recommendation",
    recThickness: "Thickness exceeds 250mm. Recommend casting in {layers} layers.",
    recVolume: "Volume per pile exceeds 350L. Recommend casting in multiple layers.",
    recCombined: "Thickness exceeds 250mm and Volume per pile exceeds 350L. Recommend casting in {layers} layers.",
    recOK: "Casting can be done in a single layer.",
    errorPileInputs: "Please fill all dimension and thickness fields with valid positive numbers.",
    errorMinPileThickness: "Casting thickness must be at least 15mm.", // NEW
    selectDimension: "Select Dimension",
    customDimension: "Custom",
    includeEPT: "Calculate Supercast EPT",
    eptThickness: "Supercast EPT Thickness (15-50 mm)",
    eptPacks: "Set(s)",
    eptSetsNeeded: "Supercast EPT Sets Needed", // UPDATED
    eptVolumeNotePrefix: "Total Volume:", // NEW
    eptPackSize: "Select Supercast EPT Pack Size", // NEW
    eptPack20L: "20 Liters", // NEW
    eptPack46L: "46 Liters", // NEW
  },
  ar: {
    // Hub Keys
    welcome: "مرحباً بك",
    selectLanguage: "يرجى اختيار لغتك",
    selectTool: "اختر تطبيقاً",
    anchorCalculator: "حاسبة مواد الزرع",
    anchorDescription: "احسب كميات Lokfix.",
    materialCatalogue: "كاتلوك المواد",
    comingSoon: "قريباً",
    featureInProgress: "هذه الميزة قيد التطوير حالياً.",
    back: "رجوع",
    results: "النتائج",
    criteriaForResults: "معايير النتيجة",

    // PWA/Install Keys
    installApp: "تثبيت التطبيق",
    installAppDescription: "أضف IQ Hub إلى شاشتك الرئيسية.",
    installOnSamsung: "التثبيت على سامسونج",
    samsungInstallPart1: "للتثبيت، انقر على زر القائمة",
    samsungInstallPart2: "ثم اختر 'إضافة إلى الشاشة الرئيسية'.",
    close: "إغلاق",

    // Sealant Calculator Keys
    sealantCalculator: "حاسبة كمية مانع التسرب",
    sealantDescription: "حاسبة  Thioflex و Nitoseal.",
    sealantProduct: "اختر منتج مانع التسرب",
    sealantSubstrate: "نوع السطح",
    substratePorous: "مسامي",
    substrateNonPorous: "غير مسامي",
    jointWidth: "عرض الفاصل",
    jointWidthMin6: "عرض الفاصل (6مم - 50مم)",
    jointWidthMin5: "عرض الفاصل (5مم - 50مم)",
    jointDepth: "عمق الفاصل",
    jointDepthMin6: "عمق الفاصل (6مم - 50مم)",
    jointDepthMin5: "عمق الفاصل (5مم - 50مم)",
    totalJointLength: "إجمالي طول الفاصل",
    m: "م",
    litres: "لتر", // CHANGED from L
    thioflex600gg: "Thioflex 600 - GG",
    thioflex600pg: "Thioflex 600 - PG",
    nitosealpu40: "Nitoseal PU40-CS",
    packagesNeeded: "العبوات المطلوبة",
    setsNeeded: "أطقم مطلوبة",
    sausages: "قطعة",
    packs: "عبوة",
    sets: "عبوة",
    wastageNote: "({percent}% هدر)",
    sealantProductPageTitle: "اختر المنتج",
    sealantProductPageStep: "الخطوة 1 من 4",
    sealantSubstratePageTitle: "اختر نوع السطح",
    sealantSubstratePageStep: "الخطوة 2 من 4",
    sealantDimsPageTitle: "أبعاد الفاصل",
    sealantDimsPageStep: "الخطوة 3 من 4",
    sealantResultPageTitle: "نتائج الحساب",
    sealantResultPageStep: "الخطوة 4 من 4",
    sealantCalculate: "احسب",
    sealantEditCriteria: "تعديل المعايير",
    guidanceTitle: "الإرشادات",
    guidanceManualTitle: "توصية (وضع يدوي)",
    guidancePU40: "يستخدم إرشادات Nitoseal PU40-CS. أدنى عمق {minDepth} مم للأسطح الـ {substrate}.",
    guidanceThioflex: "يستخدم إرشادات ASTM C 1193-16. أدنى عمق 5 مم.",
    guidancePU40Rec: "توصية بناءً على Nitoseal PU40-CS: استهدف نسبة 2:1 (بحد أقصى 50 مم عمق). أدنى عمق {minDepth} مم.",
    guidanceThioflexRec: "توصية بناءً على ASTM C 1193-16: استهدف نسبة 2:1 (بحد أقصى 50 مم عمق). أدنى عمق 5 مم.",
    errorMinJointWidth: "يجب أن يكون عرض الفاصل {minWidth} مم على الأقل.",
    errorMaxJointWidth: "يجب ألا يتجاوز عرض الفاصل 50 مم.",
    errorMinJointDepth: "يجب أن يكون عمق الفاصل {minDepth} مم على الأقل.",
    errorMaxJointDepth: "يجب ألا يتجاوز العمق لهذا المنتج {maxDepth} مم.",
    errorMaxJointDepthManual: "يجب ألا يتجاوز العمق اليدوي 50 مم.",
    errorMaxJointDepthLinked: "يجب ألا يتجاوز العمق المرتبط 25 مم.",
    errorSealantLength: "يرجى إدخال إجمالي طول صالح.",
    sealantStartOver: "ابدأ من جديد",
    includePrimer: "Primer 7E الحساب",
    primerNeeded: "Primer 7E المطلوب",
    tins: "علبة",
    primerAreaNoteText: "لمساحة فاصل {area} م² ({litres} لتر)",

    // Anchor Calculator Keys
    chooseApplicationType: "اختر نوع التطبيق.",
    structural: "إنشائي",
    nonStructural: "غير إنشائي",
    selectRebarDiameter: "اختر قطر الحديد",
    chooseRebarSize: "اختر قطر حديد التسليح الذي تستخدمه.",
    selectHoleDiameter: "اختر قطر الثقب",
    forLokfixE77: "لتطبيق Lokfix E77 و حديد تسليح",
    selectEmbedmentDepth: "اختر عمق التثبيت",
    selectedDepth: "العمق المحدد:",
    min: "الأدنى",
    max: "الأقصى",
    mm: "مم", // CHANGED from mm
    mL: "مل",
    continueToCalculator: "متابعة",
    volumeCalculator: "حاسبة الحجم",
    estimateResinVolume: "تقدير حجم المادة المطلوب.",
    rebar: "حديد التسليح",
    holeDiameter: "قطر الثقب",
    embedmentDepth: "عمق التثبيت",
    embedmentDepthHoleDepth: "عمق التثبيت / عمق الثقب",
    holeDiameterPlaceholder: "مثال: 16",
    holeDepthPlaceholder: "مثال: 125",
    netVolumePerAnchor: "الحجم الصافي (لكل مثبت):",
    volumeRequiredPerAnchor: "إجمالي الحجم (لكل مثبت):",
    numberOfRebars: "عدد الثقوب",
    totalVolumeRequired: "إجمالي الحجم المطلوب:",
    totalCartridgesNeeded: "إجمالي العبوات المطلوبة:",
    lokfixE55: "Lokfix E55",
    lokfixE77: "Lokfix E77",
    cartridges: "عبوة",
    errorFillFields: "يرجى ملء جميع الحقول بأرقام صالحة.",
    errorPositiveValues: "يجب أن تكون جميع القيم موجبة.",
    errorHoleSize: "يجب أن يكون قطر الثقب أكبر من قطر حديد التسليح.",
    customizeWastage: "تعديل نسبة الهدر",
    wastageFactor: "عامل الهدر",
    includesWastage: "شامل",
    wastage: "نسبة هدر",
    fillDepthNote: "(محسوب على أساس 2/3 عمق التعبئة)",
    startOver: "ابدأ من جديد",

    // Pile Top Calculator Keys
    pileTopCalculator: "حاسبة رؤوس الركائز",
    pileTopDescription: "تقدير كمية Supercast PC لتسوية الركائز.",
    pileTopShapePageTitle: "اختر شكل الركيزة",
    pileTopShapePageStep: "الخطوة 1 من 3",
    pileTopDimsPageTitle: "أبعاد الركيزة",
    pileTopDimsPageStep: "الخطوة 2 من 3",
    pileTopResultPageTitle: "نتائج رأس الركيزة",
    pileTopResultPageStep: "الخطوة 3 من 3",
    selectPileType: "اختر نوع الركيزة",
    pileTypeRound: "دائري",
    pileTypeSquare: "مربع",
    pileTypeRectangular: "مستطيل",
    pileDiameter: "قطر الركيزة",
    pileDiameterMm: "قطر الركيزة (مم)",
    pileDiameterPlaceholder: "أدخل القطر المخصص (مم)",
    pileSideLength: "طول الضلع",
    pileSideLengthMm: "طول الضلع (مم)",
    pileSidePlaceholder: "أدخل طول الضلع المخصص (مم)",
    pileLength: "الطول",
    pileLengthMm: "الطول (مم)",
    pileLengthPlaceholder: "أدخل الطول (مم)",
    pileWidth: "العرض",
    pileWidthMm: "العرض (مم)",
    pileWidthPlaceholder: "أدخل العرض (مم)",
    pileThickness: "سماكة الصب (مم)",
    pileThicknessNote: "أدنى 15مم، أقصى 250مم للطبقة الواحدة", // CHANGED
    cm: "سم",
    unit: "الوحدة",
    pileTopCalculate: "احسب",
    numberOfPiles: "عدد الركائز",
    bagsNeeded: "الأكياس المطلوبة (Supercast PC)",
    bags: "كيس",
    recommendation: "التوصية",
    recThickness: "السماكة تتجاوز 250مم. يوصى بالصب على {layers} طبقات.",
    recVolume: "حجم الركيزة الواحدة يتجاوز 350 لتر. يوصى بالصب على عدة طبقات.",
    recCombined: "السماكة تتجاوز 250مم وحجم الركيزة الواحدة يتجاوز 350 لتر. يوصى بالصب على {layers} طبقات.",
    recOK: "يمكن تنفيذ الصب في طبقة واحدة.",
    errorPileInputs: "يرجى ملء جميع حقول الأبعاد والسماكة بأرقام موجبة صالحة.",
    errorMinPileThickness: "يجب أن تكون سماكة الصب 15 مم على الأقل.", // NEW
    selectDimension: "اختر البعد",
    customDimension: "مخصص",
    includeEPT: "حساب  Supercast EPT",
    eptThickness: "سماكة Supercast EPT (15-50 مم)",
    eptPacks: "عبوة", // NEW
    eptSetsNeeded: "عبوات  Supercast EPT المطلوبة", // UPDATED
    eptVolumeNotePrefix: "الحجم الإجمالي:", // NEW
    eptPackSize: " اختر حجم عبوة Supercast EPT", // CHANGED
    eptPack20L: "20 لتر", // NEW
    eptPack46L: "46 لتر", // NEW
  }
};

// --- SEALANT CALC DATA ---
const SEALANT_PACKAGE_SIZES = {
  "Nitoseal PU40-CS": { size: 0.6, unitKey: "sausages", type: "S", wastage: 0.20 },
  "Thioflex 600 GG": { size: 2.5, unitKey: "sets", type: "M", wastage: 0.15 },
  "Thioflex 600 PG": { size: 5.0, unitKey: "sets", type: "M", wastage: 0.15 }
};
const PRIMER_7E_COVERAGE = 8; // m² per Litre (Assumed average coverage)
const PRIMER_7E_TIN_SIZE = 1.0; // Litre

// --- ANCHOR CALC DATA ---
const CARTRIDGE_SIZES = { E77: [585], E55: [300] };
const e55FixedData = {
  8: { hole: 12, depth: 80 },
  10: { hole: 14, depth: 90 },
  12: { hole: 16, depth: 110 },
  14: { hole: 18, depth: 115 },
  16: { hole: 20, depth: 125 },
  20: { hole: 25, depth: 170 },
  25: { hole: 32, depth: 210 },
  28: { hole: 35, depth: 250 },
  32: { hole: 40, depth: 270 }
};
const e77EmbedmentData = {
  8: { min: 60, max: 160 },
  10: { min: 60, max: 200 },
  12: { min: 70, max: 240 },
  14: { min: 75, max: 280 },
  16: { min: 80, max: 320 },
  20: { min: 90, max: 400 },
  24: { min: 96, max: 480 },
  25: { min: 100, max: 500 },
  28: { min: 112, max: 560 },
  32: { min: 128, max: 640 }
};
const e77HoleData = {
  8: { min: 10, max: 12 },
  10: { min: 12, max: 14 },
  12: { min: 14, max: 16 },
  14: { min: 18, max: 18 },
  16: { min: 20, max: 20 },
  20: { min: 25, max: 25 },
  24: { min: 30, max: 32 },
  25: { min: 30, max: 32 },
  28: { min: 35, max: 35 },
  32: { min: 40, max: 40 }
};

// --- PILE TOP CALC DATA ---
const SUPERCAST_PC_YIELD = 11.5; // Litres per 25kg bag
const PILE_DIMENSIONS = {
  round: [300, 400, 450, 500, 600, 750, 800, 1000, 1200, 1500], // CHANGED 900 to 800
  square: [250, 300, 350, 400]
};

// --- GLOBAL STATE ---
let ui;
let state;

// --- CORE UI & NAVIGATION ---

function setLanguage(lang) {
  if (lang !== "en" && lang !== "ar") lang = "en";

  state.currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const langTranslations = translations[lang] || translations.en;

  // Update all text elements
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.dataset.langKey;
    if (langTranslations[key]) {
      let text = langTranslations[key];
      if (lang === 'en') text = toTitleCase(text);
      el.textContent = text;
    }
  });

  // Update all placeholders
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.dataset.langPlaceholder;
    if (langTranslations[key]) {
      let text = langTranslations[key];
      if (lang === 'en') text = toTitleCase(text);
      el.placeholder = text;
    }
  });

  // Update EPT pack button text
  if (ui && ui.eptPack20L) {
    ui.eptPack20L.textContent = langTranslations.eptPack20L || "20 L";
  }
  if (ui && ui.eptPack46L) {
    ui.eptPack46L.textContent = langTranslations.eptPack46L || "46 L";
  }

  // Re-populate pile dimension dropdowns if they exist
  if (ui && ui.pileTopDimsPage && !ui.pileTopDimsPage.classList.contains("hidden")) {
      populatePileDimOptions(state.pileTopType);
  }

  if (ui && ui.calculatorPage && !ui.calculatorPage.classList.contains("hidden")) {
    runPerAnchorCalculation();
  }

  if (ui) {
    if (!ui.sealantDimensionsPage.classList.contains("hidden")) {
      updateSealantInputLabels(state.sealantProduct);
      updateSealantGuidance();
    } else if (!ui.sealantResultPage.classList.contains("hidden")) {
      runSealantCalculation(false);
    }
    // Update pile top results if visible
    if (!ui.pileTopResultArea.classList.contains("hidden")) {
      runPileTopCalculation(false); // Use runPileTopCalculation to update EPT state
      updatePileTopResults();
    }
  }
}


function updateBottomActionBar(pageId) {
  if (!ui || !ui.bottomActionBar) return;
  const bar = ui.bottomActionBar;
  bar.querySelectorAll(".action-button").forEach((btn) => btn.classList.add("hidden"));

  let showBar = true;

  switch (pageId) {
    case "depthPage":
      ui.anchorCalculateButton.classList.remove("hidden");
      break;
    case "calculatorPage":
      ui.anchorStartOver.classList.remove("hidden");
      break;
    case "sealantDimensionsPage":
      ui.sealantCalculateButton.classList.remove("hidden");
      break;
    case "sealantResultPage":
      ui.sealantStartOver.classList.remove("hidden");
      break;
    // Pile Top Page
    case "pileTopShapePage":
      // No buttons on shape selection, back button is enough
      showBar = false;
      break;
    case "pileTopDimsPage":
      ui.pileTopCalculateButton.classList.remove("hidden");
      break;
    case "pileTopResultPage": // UPDATED
      ui.pileTopStartOver.classList.remove("hidden");
      break;
    case "languagePage":
    case "hubPage":
    case "cataloguePage":
    case "sealantProductPage":
    case "sealantSubstratePage":
      showBar = false;
      break;
    default:
      break;
  }

  if (showBar) bar.classList.remove("hidden");
  else bar.classList.add("hidden");
}

function showPage(pageId, options = {}) {
  if (!ui) return;

  const config = { titleKey: "", stepKey: "", backPage: null, showLogo: false, ...options };
  const currentPages = ui.interactionArea.querySelectorAll(".page-content");
  currentPages.forEach((p) => {
    p.classList.add("hidden");
    ui.pageStorage.appendChild(p);
  });

  const page = document.getElementById(pageId);
  if (page) {
    ui.interactionArea.appendChild(page);
    page.classList.remove("hidden");
  }

  ui.headerLogo.classList.toggle("hidden", !config.showLogo);
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;

  if (config.titleKey) {
    let text = langTranslations[config.titleKey] || "...";
    if (lang === 'en') text = toTitleCase(text);
    ui.headerTitle.textContent = text;
    ui.headerTitle.classList.remove("hidden");
  } else {
    ui.headerTitle.classList.add("hidden");
  }

  if (config.stepKey) {
    let text = langTranslations[config.stepKey] || "...";
    if (lang === 'en') text = toTitleCase(text);
    ui.headerStep.textContent = text;
    ui.headerStep.classList.remove("hidden");
  } else {
    ui.headerStep.classList.add("hidden");
  }

  if (config.backPage) {
    ui.headerBackButton.dataset.page = config.backPage;
    ui.headerBackButton.classList.remove("hidden");
  } else {
    ui.headerBackButton.classList.add("hidden");
  }

  updateBottomActionBar(pageId);
  ui.interactionArea.scrollTop = 0;
}

function navigateBack(toPageId) {
  switch (toPageId) {
    case "languagePage":
      showPage("languagePage", { showLogo: true, titleKey: "welcome" });
      break;
    case "hubPage":
      showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" });
      break;
    // Anchor
    case "selectionPage":
      resetCalculator();
      showPage("selectionPage", { titleKey: "anchorCalculator", stepKey: "chooseApplicationType", backPage: "hubPage" });
      break;
    case "rebarPage":
      showPage("rebarPage", { titleKey: "selectRebarDiameter", backPage: "selectionPage" });
      break;
    case "holePage":
      showPage("holePage", { titleKey: "selectHoleDiameter", stepKey: "forLokfixE77", backPage: "rebarPage" });
      break;
    case "depthPage":
      showPage("depthPage", { titleKey: "selectEmbedmentDepth", stepKey: "forLokfixE77", backPage: "holePage" });
      break;
    // Sealant
    case "sealantProductPage":
      resetSealantCalculator(); // Reset when going back to product page
      showPage("sealantProductPage", { titleKey: "sealantProductPageTitle", stepKey: "sealantProductPageStep", backPage: "hubPage" });
      break;
    case "sealantSubstratePage":
      showPage("sealantSubstratePage", { titleKey: "sealantSubstratePageTitle", stepKey: "sealantSubstratePageStep", backPage: "sealantProductPage" });
      break;
    case "sealantDimensionsPage":
      const sealantBackPage = (state.sealantProduct === "Nitoseal PU40-CS") ? "sealantSubstratePage" : "sealantProductPage";
      showPage("sealantDimensionsPage", { titleKey: "sealantDimsPageTitle", stepKey: "sealantDimsPageStep", backPage: sealantBackPage });
      break;
    case "sealantResultPage":
      showPage("sealantResultPage", { titleKey: "sealantResultPageTitle", stepKey: "sealantResultPageStep", backPage: "sealantDimensionsPage" });
      break;
    // Pile Top
    case "pileTopShapePage":
      resetPileTopCalculator(); // Reset when going back to shape page
      showPage("pileTopShapePage", { titleKey: "pileTopShapePageTitle", stepKey: "pileTopShapePageStep", backPage: "hubPage" });
      break;
    case "pileTopDimsPage":
      showPage("pileTopDimsPage", { titleKey: "pileTopDimsPageTitle", stepKey: "pileTopDimsPageStep", backPage: "pileTopShapePage" });
      break;
    case "pileTopResultPage": // UPDATED
      showPage("pileTopResultPage", { titleKey: "pileTopResultPageTitle", stepKey: "pileTopResultPageStep", backPage: "pileTopDimsPage" });
      break;
  }
}

// --- SEALANT LOGIC ---
function resetSealantCalculator() {
  if (!ui) return;
  // UPDATED: Start with no product selected
  state.sealantProduct = null;
  state.sealantSubstrate = "porous"; // Default substrate
  state.sealantVolumeLitres = 0;
  state.sealantDepthLinked = true;
  state.sealantWastagePercent = 20; // Default
  state.sealantWastageCustomized = false;

  // Unselect all product buttons
  ui.sealantProductPU40.classList.remove("selected");
  ui.sealantProductGG.classList.remove("selected");
  ui.sealantProductPG.classList.remove("selected");
  
  // Unselect all substrate buttons
  ui.sealantSelectSubstratePorous.classList.remove("selected");
  ui.sealantSelectSubstrateNonPorous.classList.remove("selected");
  
  // Clear inputs
  ui.sealantJointWidth.value = "";
  ui.sealantJointWidthSlider.value = 6;
  ui.sealantJointDepth.value = "";
  ui.sealantJointDepthSlider.value = 6;
  ui.sealantJointLength.value = "";
  ui.sealantDimErrorArea.classList.add("hidden");
  ui.sealantDimErrorArea.textContent = "";
  updateSealantLinkButton(); // Resets link button
  ui.sealantGuidanceText.innerHTML = "";
  ui.sealantTotalResultArea.classList.add("hidden");
  ui.sealantWastageCustomizationSection.classList.add("hidden");
  ui.sealantWastageSlider.value = state.sealantWastagePercent;
  ui.sealantWastageValue.value = state.sealantWastagePercent;

  // Reset primer
  ui.sealantIncludePrimer.checked = false;
  ui.sealantPrimerResultBlock.classList.add("hidden");
}


function updateSealantInputLabels() {
  const productName = state.sealantProduct;
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  let widthKey = "jointWidthMin6";
  let depthKey = "jointDepthMin6";
  if (productName === "Thioflex 600 GG" || productName === "Thioflex 600 PG") {
    widthKey = "jointWidthMin5";
    depthKey = "jointDepthMin5";
  }
  let widthText = langTranslations[widthKey];
  let depthText = langTranslations[depthKey];
  if (lang === 'en') {
    widthText = toTitleCase(widthText);
    depthText = toTitleCase(depthText);
  }
  ui.sealantWidthLabel.textContent = widthText;
  ui.sealantDepthLabel.textContent = depthText;
}


function updateSealantInputRanges(productName) {
  let minWidth = 6;
  let minDepth = 6;
  if (productName === "Thioflex 600 GG" || productName === "Thioflex 600 PG") {
    minWidth = 5;
    minDepth = 5;
  }
  ui.sealantJointWidthSlider.min = minWidth;
  ui.sealantJointWidth.min = minWidth;
  if (parseFloat(ui.sealantJointWidth.value) < minWidth) {
    ui.sealantJointWidth.value = minWidth;
    ui.sealantJointWidthSlider.value = minWidth;
  }
  ui.sealantJointDepthSlider.min = minDepth;
  ui.sealantJointDepth.min = minDepth;
  if (parseFloat(ui.sealantJointDepth.value) < minDepth) {
    ui.sealantJointDepth.value = minDepth;
    ui.sealantJointDepthSlider.value = minDepth;
  }
  updateSealantInputLabels();
}

function selectSealantProduct(productName) {
  state.sealantProduct = productName;
  ui.sealantProductPU40.classList.toggle("selected", productName === "Nitoseal PU40-CS");
  ui.sealantProductGG.classList.toggle("selected", productName === "Thioflex 600 GG");
  ui.sealantProductPG.classList.toggle("selected", productName === "Thioflex 600 PG");
  
  updateSealantInputRanges(productName);

  if (productName === "Nitoseal PU40-CS") {
    // Set default substrate, but don't select button here
    state.sealantSubstrate = "porous"; 
    // Set default selection on substrate page
    ui.sealantSelectSubstratePorous.classList.add("selected");
    ui.sealantSelectSubstrateNonPorous.classList.remove("selected");
  } else {
    state.sealantSubstrate = "porous"; // Default for Thioflex
  }

  if (!state.sealantWastageCustomized) {
    const newWastage = SEALANT_PACKAGE_SIZES[productName].wastage * 100;
    state.sealantWastagePercent = newWastage;
    ui.sealantWastageSlider.value = newWastage;
    ui.sealantWastageValue.value = newWastage;
  }
  
  // Set default dimensions if this is the first selection
  if (ui.sealantJointWidth.value === "") {
    const { depth, minWidth } = getRecommendedDepth(6);
    ui.sealantJointWidth.value = minWidth;
    ui.sealantJointWidthSlider.value = minWidth;
    ui.sealantJointDepth.value = depth;
    ui.sealantJointDepthSlider.value = depth;
  }
  
  handleSealantWidthInput(true); // This also calls updateSealantGuidance

  // Auto-navigate
  if (state.sealantProduct === "Nitoseal PU40-CS") {
    showPage("sealantSubstratePage", { titleKey: "sealantSubstratePageTitle", stepKey: "sealantSubstratePageStep", backPage: "sealantProductPage" });
  } else {
    showPage("sealantDimensionsPage", { titleKey: "sealantDimsPageTitle", stepKey: "sealantDimsPageStep", backPage: "sealantProductPage" });
  }
}

function selectSealantSubstrate(substrate) {
  state.sealantSubstrate = substrate;
  ui.sealantSelectSubstratePorous.classList.toggle("selected", substrate === "porous");
  ui.sealantSelectSubstrateNonPorous.classList.toggle("selected", substrate === "non-porous");
  
  // Update guidance on the next page
  handleSealantWidthInput(true);

  // Auto-navigate
  showPage("sealantDimensionsPage", { titleKey: "sealantDimsPageTitle", stepKey: "sealantDimsPageStep", backPage: "sealantSubstratePage" });
}

function toggleSealantLink() {
  state.sealantDepthLinked = !state.sealantDepthLinked;
  updateSealantLinkButton();
  handleSealantWidthInput(true);
  updateSealantGuidance();
}

function updateSealantLinkButton() {
  if (!ui) return;
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  let minDepth, maxDepth, depthKey;
  const { minWidth } = getRecommendedDepth(0);
  if (minWidth === 5) {
    minDepth = 5;
    depthKey = "jointDepthMin5";
  } else {
    minDepth = 6;
    depthKey = "jointDepthMin6";
  }
  if (state.sealantDepthLinked) {
    maxDepth = 25;
    ui.sealantLinkToggle.classList.add("linked");
    ui.sealantLinkIcon.classList.remove("hidden");
    ui.sealantUnlinkIcon.classList.add("hidden");
    ui.sealantJointDepth.disabled = true;
    ui.sealantJointDepthSlider.disabled = true;
    ui.sealantJointDepth.style.opacity = "0.5";
    ui.sealantJointDepthSlider.style.opacity = "0.5";
  } else {
    maxDepth = 50;
    ui.sealantLinkToggle.classList.remove("linked");
    ui.sealantLinkIcon.classList.add("hidden");
    ui.sealantUnlinkIcon.classList.remove("hidden");
    ui.sealantJointDepth.disabled = false;
    ui.sealantJointDepthSlider.disabled = false;
    ui.sealantJointDepth.style.opacity = "1";
    ui.sealantJointDepthSlider.style.opacity = "1";
  }
  ui.sealantJointDepthSlider.max = maxDepth;
  ui.sealantJointDepth.max = maxDepth;
  ui.sealantJointDepthSlider.min = minDepth;
  ui.sealantJointDepth.min = minDepth;
  
  let depthLabelText = langTranslations[depthKey];
  if (lang === 'en') depthLabelText = toTitleCase(depthLabelText);
  ui.sealantDepthLabel.textContent = depthLabelText;

  let currentDepth = parseFloat(ui.sealantJointDepth.value);
  if (currentDepth > maxDepth) {
    ui.sealantJointDepth.value = maxDepth;
    ui.sealantJointDepthSlider.value = maxDepth;
  }
}

function getRecommendedDepth(width) {
  const productName = state.sealantProduct;
  const substrate = state.sealantSubstrate;
  let minDepth, minWidth;
  if (productName === "Nitoseal PU40-CS") {
    minWidth = 6;
    minDepth = (substrate === "porous") ? 10 : 6;
  } else {
    minWidth = 5;
    minDepth = 5;
  }
  let depth;
  if (width >= minWidth && width < 13) {
    depth = width;
  } else if (width >= 13) {
    depth = width / 2;
  } else {
    depth = minDepth;
  }
  depth = Math.max(minDepth, Math.min(25, depth));
  return { depth: depth, minDepth: minDepth, minWidth: minWidth };
}

function updateSealantGuidance() {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const productName = state.sealantProduct;
  const substrate = state.sealantSubstrate;
  const width = parseFloat(ui.sealantJointWidth.value) || 0;
  const { minDepth } = getRecommendedDepth(width);
  let guidanceTitleKey, guidanceTextKey, guidanceText = "";
  const substrateText = langTranslations[substrate === 'porous' ? 'substratePorous' : 'substrateNonPorous'];

  if (state.sealantDepthLinked) {
    guidanceTitleKey = "guidanceTitle";
    if (productName === "Nitoseal PU40-CS") {
      guidanceTextKey = "guidancePU40";
      guidanceText = langTranslations[guidanceTextKey].replace("{minDepth}", minDepth).replace("{substrate}", substrateText);
    } else {
      guidanceTextKey = "guidanceThioflex";
      guidanceText = langTranslations[guidanceTextKey];
    }
  } else {
    guidanceTitleKey = "guidanceManualTitle";
    if (productName === "Nitoseal PU40-CS") {
      guidanceTextKey = "guidancePU40Rec";
      guidanceText = langTranslations[guidanceTextKey].replace("{minDepth}", minDepth);
    } else {
      guidanceTextKey = "guidanceThioflexRec";
      guidanceText = langTranslations[guidanceTextKey];
    }
  }

  let titleText = langTranslations[guidanceTitleKey];
  if(lang === 'en') titleText = toTitleCase(titleText);

  ui.sealantGuidanceText.innerHTML = `<h4 data-lang-key="${guidanceTitleKey}">${titleText}</h4><p>${guidanceText}</p>`;
}


function handleSealantWidthInput(forceDepthUpdate = false) {
  const width = parseFloat(ui.sealantJointWidth.value);
  const { depth } = getRecommendedDepth(width);
  if (state.sealantDepthLinked && (forceDepthUpdate || !isNaN(width))) {
    const roundedDepth = parseFloat(depth.toFixed(1));
    ui.sealantJointDepth.value = roundedDepth;
    const sliderMin = parseFloat(ui.sealantJointDepthSlider.min);
    const sliderVal = Math.max(sliderMin, Math.min(25, roundedDepth));
    ui.sealantJointDepthSlider.value = sliderVal;
  }
  updateSealantGuidance();
}

function validateSealantDimensions() {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const width = parseFloat(ui.sealantJointWidth.value);
  const depth = parseFloat(ui.sealantJointDepth.value);
  const length = parseFloat(ui.sealantJointLength.value);
  const { minDepth, minWidth } = getRecommendedDepth(width);
  const maxDepth = state.sealantDepthLinked ? 25 : 50;
  let errors = [];

  if (isNaN(width) || width < minWidth) errors.push(langTranslations.errorMinJointWidth.replace("{minWidth}", minWidth));
  if (width > 50) errors.push(langTranslations.errorMaxJointWidth);
  if (isNaN(depth) || depth < minDepth) errors.push(langTranslations.errorMinJointDepth.replace("{minDepth}", minDepth));
  if (depth > maxDepth) {
    const errKey = state.sealantDepthLinked ? "errorMaxJointDepthLinked" : "errorMaxJointDepthManual";
    errors.push(langTranslations[errKey]);
  }
  if (isNaN(length) || length <= 0) errors.push(langTranslations.errorSealantLength);

  if (errors.length > 0) {
    ui.sealantDimErrorArea.innerHTML = errors.join("<br>");
    ui.sealantDimErrorArea.classList.remove("hidden");
    return false;
  }
  ui.sealantDimErrorArea.classList.add("hidden");
  ui.sealantDimErrorArea.textContent = "";
  return true;
}

function runSealantCalculation(showPageOnSuccess = true) {
  if (showPageOnSuccess && !validateSealantDimensions()) return;

  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const productName = state.sealantProduct;
  const productInfo = SEALANT_PACKAGE_SIZES[productName];
  const substrate = state.sealantSubstrate;
  const width = parseFloat(ui.sealantJointWidth.value);
  const depth = parseFloat(ui.sealantJointDepth.value);
  const length = parseFloat(ui.sealantJointLength.value);
  const wastagePercent = state.sealantWastagePercent;

  if (!productInfo || isNaN(width) || isNaN(depth) || isNaN(length)) {
    if (showPageOnSuccess) {
      ui.sealantDimErrorArea.innerHTML = langTranslations.errorFillFields;
      ui.sealantDimErrorArea.classList.remove("hidden");
    }
    return;
  }

  const netVolumeLitres = (width / 1000) * (depth / 1000) * length * 1000;
  const totalVolumeLitres = netVolumeLitres * (1 + (wastagePercent / 100));
  state.sealantVolumeLitres = totalVolumeLitres;
  const packagesNeeded = Math.ceil(totalVolumeLitres / productInfo.size);

  let packagesLabelKey = (productInfo.type === 'M') ? "setsNeeded" : "packagesNeeded";
  const unitText = langTranslations[productInfo.unitKey] || "unit(s)";
  const wastageText = langTranslations.wastageNote.replace("{percent}", wastagePercent);

  let packagesLabelText = langTranslations[packagesLabelKey];
  if(lang === 'en') packagesLabelText = toTitleCase(packagesLabelText);

  ui.sealantTotalVolume.textContent = `${totalVolumeLitres.toFixed(2)} ${langTranslations.litres}`;
  ui.sealantPackagesLabel.textContent = packagesLabelText;
  ui.sealantPackagesLabel.dataset.langKey = packagesLabelKey;
  ui.sealantPackagesResultValue.innerHTML = `<b>${packagesNeeded}</b> ${unitText}`;
  ui.sealantWastageNote.textContent = wastageText;

  ui.sealantDisplayProduct.textContent = productName;
  if (productName === "Nitoseal PU40-CS") {
    const substrateText = langTranslations[substrate === 'porous' ? 'substratePorous' : 'substrateNonPorous'];
    ui.sealantDisplaySubstrate.textContent = substrateText;
    ui.sealantDisplaySubstrateContainer.classList.remove("hidden");
  } else {
    ui.sealantDisplaySubstrateContainer.classList.add("hidden");
  }
  ui.sealantDisplayWidth.textContent = `${width} ${langTranslations.mm}`;
  ui.sealantDisplayDepth.textContent = `${depth} ${langTranslations.mm}`;
  ui.sealantDisplayLength.textContent = `${length} ${langTranslations.m}`;
  ui.sealantWastageSlider.value = wastagePercent;
  ui.sealantWastageValue.value = wastagePercent;

  // Primer Calculation
  if (ui.sealantIncludePrimer.checked) {
    const jointFaceArea_m2 = (depth / 1000) * 2 * length;
    const primerNeeded_L = jointFaceArea_m2 / PRIMER_7E_COVERAGE;
    const tinsNeeded = Math.ceil(primerNeeded_L / PRIMER_7E_TIN_SIZE);
    
    ui.sealantPrimerResultValue.innerHTML = `<b>${tinsNeeded}</b> ${langTranslations.tins}`;
    
    let noteText = langTranslations.primerAreaNoteText
      .replace("{area}", jointFaceArea_m2.toFixed(2))
      .replace("{litres}", primerNeeded_L.toFixed(2));
    ui.sealantPrimerAreaNote.textContent = noteText;
    
    ui.sealantPrimerResultBlock.classList.remove("hidden");
  } else {
    ui.sealantPrimerResultBlock.classList.add("hidden");
  }


  ui.sealantTotalResultArea.classList.remove("hidden");
  if (showPageOnSuccess) {
    showPage("sealantResultPage", { titleKey: "sealantResultPageTitle", stepKey: "sealantResultPageStep", backPage: "sealantDimensionsPage" });
  }
}


// --- ANCHOR LOGIC ---
function resetCalculator() {
  if (!ui) return;
  ui.resultArea.classList.add("hidden");
  ui.errorArea.classList.add("hidden");
  ui.totalResultArea.classList.add("hidden");
  ui.criteriaSection.classList.add("hidden");
  ui.errorArea.textContent = "";
  ui.cartridgeResultValue.innerHTML = "";
  ui.form.reset();
  ui.rebarButtons.forEach((btn) => btn.classList.remove("selected"));
  ui.holeGrid.innerHTML = "";
  ui.displayHoleDiameter.textContent = "";
  ui.displayHoleDepth.textContent = "";
  if (ui.selectedRebarDisplay) ui.selectedRebarDisplay.textContent = "";
  if (ui.holeRebarDisplay) ui.holeRebarDisplay.textContent = "";
  if (ui.depthRebarDisplay) ui.depthRebarDisplay.textContent = "";
  ui.wastageCustomizationSection.classList.add("hidden");
  ui.wastageSlider.value = 45;
  ui.wastageValue.value = 45;
  state.wastagePercent = 45;
  state.product = "";
  state.rebarSize = "";
  state.rebarText = "";
  state.holeSize = "";
  state.depth = "";
  state.volumePerAnchor = 0;
  ui.rebarCountSlider.value = 1;
  ui.rebarCountValue.value = 1;
  updateBottomActionBar(null);
  setLanguage(state.currentLanguage);
}

function selectProduct(productName) {
  state.product = productName;
  ui.selectedProductInput.value = productName;
  ui.rebarButtons.forEach((btn) => {
    if (productName === "E77") {
      btn.style.display = "block";
      btn.disabled = false;
      btn.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      if (e55FixedData.hasOwnProperty(btn.dataset.value)) {
        btn.style.display = "block";
        btn.disabled = false;
        btn.classList.remove("opacity-50", "cursor-not-allowed");
      } else {
        btn.style.display = "none";
        btn.disabled = true;
        btn.classList.add("opacity-50", "cursor-not-allowed");
      }
    }
  });
  ui.rebarButtons.forEach((btn) => btn.classList.remove("selected"));
  showPage("rebarPage", { titleKey: "selectRebarDiameter", backPage: "selectionPage" });
}

function setupHolePage(rebarSize) {
  const data = e77HoleData[rebarSize];
  if (!data) return;
  ui.holeRebarDisplay.textContent = state.rebarText;
  ui.holeGrid.innerHTML = "";
  const lang = state.currentLanguage;
  const mm = translations[lang].mm;
  const minButton = document.createElement("button");
  minButton.type = "button";
  minButton.className = "btn-select hole-btn";
  minButton.dataset.value = data.min;
  minButton.textContent = `${data.min} ${mm}`;
  ui.holeGrid.appendChild(minButton);
  if (data.min !== data.max) {
    const maxButton = document.createElement("button");
    maxButton.type = "button";
    maxButton.className = "btn-select hole-btn";
    maxButton.dataset.value = data.max;
    maxButton.textContent = `${data.max} ${mm}`;
    ui.holeGrid.appendChild(maxButton);
  }
}

function setupDepthSlider(rebarSize) {
  let data = e77EmbedmentData[rebarSize] || { min: 50, max: 500 };
  let recommendedDepth = (rebarSize === "8") ? 100 : parseFloat(rebarSize) * 10;
  recommendedDepth = Math.max(data.min, Math.min(data.max, recommendedDepth));
  ui.depthRebarDisplay.textContent = state.rebarText;
  ui.depthSlider.min = data.min;
  ui.depthSlider.max = data.max;
  ui.depthSlider.value = recommendedDepth;
  ui.depthValue.value = recommendedDepth;
  ui.depthMinLabel.textContent = data.min;
  ui.depthMaxLabel.textContent = data.max;
}

function setupCalculatorForm() {
  ui.holeDiameterInput.value = "";
  ui.holeDepthInput.value = "";
  ui.inputHoleDiameterDiv.classList.add("hidden");
  ui.inputHoleDepthDiv.classList.add("hidden");
  ui.displayE77Inputs.classList.remove("hidden");
  ui.resultArea.classList.add("hidden");
  ui.totalResultArea.classList.add("hidden");
  ui.criteriaSection.classList.add("hidden");
  ui.errorArea.classList.add("hidden");
  ui.rebarCountSlider.value = 1;
  ui.rebarCountValue.value = 1;
  ui.wastageSlider.value = state.wastagePercent;
  ui.wastageValue.value = state.wastagePercent;
  ui.wastageCustomizationSection.classList.add("hidden");

  const mm = translations[state.currentLanguage].mm;
  if (state.product === "E77" || state.product === "E55") {
    ui.selectedRebarDisplay.textContent = state.rebarText;
    ui.displayHoleDiameter.textContent = `${state.holeSize} ${mm}`;
    ui.displayHoleDepth.textContent = `${state.depth} ${mm}`;
    ui.holeDiameterInput.value = state.holeSize;
    ui.holeDepthInput.value = state.depth;
  }
}

function runPerAnchorCalculation() {
  ui.resultArea.classList.add("hidden");
  ui.errorArea.classList.add("hidden");
  ui.fillDepthNote.classList.add("hidden");
  const holeDiameter = parseFloat(ui.holeDiameterInput.value);
  const rodDiameter = parseFloat(ui.hiddenRodDiameterInput.value);
  const holeDepth = parseFloat(ui.holeDepthInput.value);
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  let wastagePercent = state.wastagePercent;

  if (isNaN(holeDiameter) || isNaN(rodDiameter) || isNaN(holeDepth)) {
    showError("errorFillFields", ui.errorArea);
    return;
  }
  if (holeDiameter <= 0 || rodDiameter <= 0 || holeDepth <= 0) {
    showError("errorPositiveValues", ui.errorArea);
    return;
  }
  if (holeDiameter <= rodDiameter) {
    showError("errorHoleSize", ui.errorArea);
    return;
  }

  const holeRadius = holeDiameter / 2;
  const rodRadius = rodDiameter / 2;
  const annulusArea = Math.PI * (Math.pow(holeRadius, 2) - Math.pow(rodRadius, 2));
  const netVolume_mm3 = annulusArea * holeDepth;
  const netVolume_mL = netVolume_mm3 / 1000;
  const totalVolume_mL_per_anchor = netVolume_mL * (1 + wastagePercent / 100);
  state.volumePerAnchor = netVolume_mL;

  const mL = langTranslations.mL;
  ui.netVolumeDisplay.textContent = `${netVolume_mL.toFixed(2)} ${mL}`;
  ui.resultVolume.textContent = `${totalVolume_mL_per_anchor.toFixed(2)} ${mL}`;
  let wastageText = `(${langTranslations.includesWastage} ${wastagePercent}% ${langTranslations.wastage})`;
  if (lang === 'en') wastageText = toTitleCase(wastageText);
  ui.resultWastage.textContent = wastageText;

  ui.resultArea.classList.remove("hidden");
  ui.totalResultArea.classList.remove("hidden");
  ui.criteriaSection.classList.remove("hidden");
  updateTotalCalculation();
  updateBottomActionBar("calculatorPage");
}

function updateTotalCalculation() {
  if (state.volumePerAnchor === 0) return;
  let rebarCount = parseInt(ui.rebarCountValue.value);
  if (isNaN(rebarCount) || rebarCount < 1) rebarCount = 1;
  const totalTheoreticalVolume = state.volumePerAnchor * rebarCount;
  const wastageFactor = 1 + state.wastagePercent / 100;
  const nozzleFactor = 15;
  const totalVolume = (totalTheoreticalVolume * wastageFactor) + nozzleFactor;
  const lang = state.currentLanguage;
  const mL = translations[lang].mL;
  ui.totalVolumeDisplay.textContent = `${totalVolume.toFixed(2)} ${mL}`;
  updateTotalCartridgeInfo(totalVolume);
}

function updateTotalCartridgeInfo(totalVolume) {
  let infoText = "";
  const lang = state.currentLanguage;
  const cartridgesStr = translations[lang].cartridges;
  let cartridges = 0;
  if (state.product === "E55") {
    const e55_size = CARTRIDGE_SIZES.E55[0];
    cartridges = Math.ceil(totalVolume / e55_size);
  } else if (state.product === "E77") {
    const e77_size = CARTRIDGE_SIZES.E77[0];
    cartridges = Math.ceil(totalVolume / e77_size);
  }
  if (cartridges > 0) infoText = `<b>${cartridges}</b> ${cartridgesStr}`;
  ui.cartridgeResultValue.innerHTML = infoText;
}


// --- PILE TOP LOGIC ---

function resetPileTopCalculator() {
  if (!ui) return;
  state.pileTopType = "round";
  state.volumeLitresPerPile = 0;
  state.eptVolumeLitresPerPile = 0;
  state.pileTopWastagePercent = 10; // UPDATED: Default 10%
  state.eptPackSize = 20; // NEW: Default 20L

  // Reset shape selection
  ui.pileTypeRound.classList.remove("selected");
  ui.pileTypeSquare.classList.remove("selected");
  ui.pileTypeRectangular.classList.remove("selected");
  
  // Reset dim page inputs
  ui.pileDiameter.value = "";
  ui.pileSide.value = "";
  ui.pileLength.value = "";
  ui.pileWidth.value = "";
  ui.pileThickness.value = "";
  // Disable thickness input
  ui.pileThickness.disabled = true;
  ui.pileThickness.style.opacity = '0.5';

  // UPDATED: Reset grids
  ui.pileDiameterGrid.innerHTML = "";
  ui.pileSideGrid.innerHTML = "";
  ui.pileDiameterCustom.classList.add('hidden');
  ui.pileSideCustom.classList.add('hidden');

  // Reset EPT
  ui.pileIncludeEPT.checked = false;
  ui.pileTopEPTSection.classList.add("hidden");
  ui.pileTopEPTPackSizeSection.classList.add("hidden"); // NEW
  ui.eptPack20L.classList.add("selected"); // NEW
  ui.eptPack46L.classList.remove("selected"); // NEW
  ui.pileEPTThickness.value = 25; // UPDATED: Default 25mm
  ui.pileEPTThicknessSlider.value = 25; // UPDATED: Default 25mm
  ui.pileTopEPTResultBlock.classList.add("hidden");

  // Reset pile count on results page
  ui.pileCountSlider.value = 1;
  ui.pileCountValue.value = 1;
  
  // Reset wastage on results page
  ui.pileTopWastageSlider.value = 10; // UPDATED: Default 10%
  ui.pileTopWastageValue.value = 10; // UPDATED: Default 10%
  ui.pileTopWastageCustomizationSection.classList.add("hidden");

  ui.pileTopErrorArea.classList.add("hidden");
  ui.pileTopResultArea.classList.add("hidden");
}


// UPDATED: Populates the dimension button grids
function populatePileDimOptions(type) {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  let gridEl, options, customInput, customDiv;
  
  let customDimText = langTranslations.customDimension;
  if(lang === 'en') customDimText = toTitleCase(customDimText);

  const customOptionButton = `<button type="button" class="btn-select pile-dim-btn" data-value="custom">${customDimText}</button>`;

  if (type === 'round') {
    gridEl = ui.pileDiameterGrid;
    options = PILE_DIMENSIONS.round;
    customInput = ui.pileDiameter;
    customDiv = ui.pileDiameterCustom;
  } else if (type === 'square') {
    gridEl = ui.pileSideGrid;
    options = PILE_DIMENSIONS.square;
    customInput = ui.pileSide;
    customDiv = ui.pileSideCustom;
  } else {
    return; // No buttons for rectangular
  }

  gridEl.innerHTML = ""; // Clear existing buttons
  options.forEach(dim => {
    gridEl.innerHTML += `<button type="button" class="btn-select pile-dim-btn" data-value="${dim}">${dim} ${langTranslations.mm}</button>`;
  });
  gridEl.innerHTML += customOptionButton;

  // Reset values
  customInput.value = "";
  customDiv.classList.add("hidden");
}


// UPDATED: Handles selection from the pile dimension button grids
function handlePileDimSelect(e) {
  const button = e.target.closest(".pile-dim-btn");
  if (!button) return; // Didn't click a button

  const type = state.pileTopType;
  const value = button.dataset.value;
  let customDiv, inputEl;

  // Highlight the selected button
  const grid = button.closest(".grid");
  if (grid) {
    grid.querySelectorAll(".btn-select").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  }

  if (type === 'round') {
    customDiv = ui.pileDiameterCustom;
    inputEl = ui.pileDiameter;
  } else if (type === 'square') {
    customDiv = ui.pileSideCustom;
    inputEl = ui.pileSide;
  } else {
    return;
  }

  if (value === 'custom') {
    customDiv.classList.remove('hidden');
    inputEl.value = "";
    inputEl.focus();
  } else {
    customDiv.classList.add('hidden');
    // Set value in mm
    inputEl.value = parseFloat(value);
  }
  validatePileDims();
}

function selectPileType(type) {
  state.pileTopType = type;
  
  // Update button selection on shape page
  ui.pileTypeRound.classList.toggle("selected", type === "round");
  ui.pileTypeSquare.classList.toggle("selected", type === "square");
  ui.pileTypeRectangular.classList.toggle("selected", type === "rectangular");

  // Show/hide dimension inputs on dims page
  ui.pileDimsRound.classList.toggle("hidden", type !== "round");
  ui.pileDimsSquare.classList.toggle("hidden", type !== "square");
  ui.pileDimsRectangular.classList.toggle("hidden", type !== "rectangular");

  // UPDATED: Populate button grids
  populatePileDimOptions(type);

  // Clear errors and results
  ui.pileTopErrorArea.classList.add("hidden");
  ui.pileTopResultArea.classList.add("hidden");
  
  // Reset and disable thickness input
  ui.pileThickness.value = "";
  ui.pileThickness.disabled = true;
  ui.pileThickness.style.opacity = '0.5';

  // Navigate to dimensions page
  showPage("pileTopDimsPage", { 
    titleKey: "pileTopDimsPageTitle", 
    stepKey: "pileTopDimsPageStep", 
    backPage: "pileTopShapePage" 
  });
}

function showPileError(messageKey) {
  const langTranslations = translations[state.currentLanguage] || translations.en;
  let text = langTranslations[messageKey] || "An unknown error occurred.";
  if (state.currentLanguage === 'en') text = toTitleCase(text);
  ui.pileTopErrorArea.textContent = text;
  ui.pileTopErrorArea.classList.remove("hidden");
  ui.pileTopResultArea.classList.add("hidden");
}

// This function now calculates for ONE pile and stores the result
function runPileTopCalculation(validate = true) {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  
  const thickness = parseFloat(ui.pileThickness.value);
  
  // UPDATED VALIDATION
  if (validate && (isNaN(thickness) || thickness <= 0)) {
    showPileError("errorPileInputs");
    return;
  }

  // NEW: Check for 15mm min
  if (validate && thickness < 15) {
     showPileError("errorMinPileThickness");
     return;
  }

  let volumeCm3 = 0;
  let pileAreaCm2 = 0; // This is 'k'
  let circumferenceCm = 0; // This is 'y'
  const thicknessCm = thickness / 10; // This is 'H' (or 'h')
  let criteriaHtml = ""; // For storing criteria display
  const mm = langTranslations.mm;

  switch (state.pileTopType) {
    case "round":
      const diam = parseFloat(ui.pileDiameter.value); // Value is now in mm
      if (validate && (isNaN(diam) || diam <= 0)) { showPileError("errorPileInputs"); return; }
      const radiusCm = (diam / 10) / 2; // Convert mm to cm, then radius
      const diamCm = diam / 10;
      
      pileAreaCm2 = Math.PI * Math.pow(radiusCm, 2);
      circumferenceCm = Math.PI * diamCm;
      
      criteriaHtml = `
        <div>
          <label class="form-label" data-lang-key="pileDiameterMm">${toTitleCase(langTranslations.pileDiameterMm)}</label>
          <p class="form-display">${diam} ${mm}</p>
        </div>
      `;
      break;
    
    case "square":
      const side = parseFloat(ui.pileSide.value); // Value is now in mm
      if (validate && (isNaN(side) || side <= 0)) { showPileError("errorPileInputs"); return; }
      const sideCm = side / 10; // Convert mm to cm
      
      pileAreaCm2 = Math.pow(sideCm, 2);
      circumferenceCm = 4 * sideCm;

      criteriaHtml = `
        <div>
          <label class="form-label" data-lang-key="pileSideLengthMm">${toTitleCase(langTranslations.pileSideLengthMm)}</label>
          <p class="form-display">${side} ${mm}</p>
        </div>
      `;
      break;

    case "rectangular":
      const length = parseFloat(ui.pileLength.value); // Value is now in mm
      const width = parseFloat(ui.pileWidth.value); // Value is now in mm
      if (validate && (isNaN(length) || length <= 0 || isNaN(width) || width <= 0)) { showPileError("errorPileInputs"); return; }
      const lengthCm = length / 10; // Convert mm to cm
      const widthCm = width / 10; // Convert mm to cm
      
      pileAreaCm2 = lengthCm * widthCm;
      circumferenceCm = 2 * (lengthCm + widthCm);

      criteriaHtml = `
        <div>
          <label class="form-label" data-lang-key="pileLengthMm">${toTitleCase(langTranslations.pileLengthMm)}</label>
          <p class="form-display">${length} ${mm}</p>
        </div>
        <div>
          <label class="form-label" data-lang-key="pileWidthMm">${toTitleCase(langTranslations.pileWidthMm)}</label>
          <p class="form-display">${width} ${mm}</p>
        </div>
      `;
      break;
  }
  
  // --- *** BUG FIX: ADDED SUPERCAST PC VOLUME CALCULATION *** ---
  // This line was missing, causing volumeCm3 to always be 0.
  volumeCm3 = pileAreaCm2 * thicknessCm;
  // --- *** END OF BUG FIX *** ---


  // Calculate EPT volume if checked
  if (ui.pileIncludeEPT.checked) {
    const eptThickness_mm = parseFloat(ui.pileEPTThickness.value);
    if (!isNaN(eptThickness_mm) && eptThickness_mm > 0) {
      
      // --- *** CORRECTED EPT CALCULATION START *** ---
      
      const x_cm = eptThickness_mm / 10;  // 'x' = EPT Thickness
      const H_cm = thicknessCm;            // 'h' = Supercast PC thickness
      const y_cm = circumferenceCm;        // 'y' = Circumference
      const k_cm2 = pileAreaCm2;           // 'k' = Pile Area

      // A = (Side Volume) + (Top Volume)
      // A = (x * y * h) + (k * x)
      
      const sideVolume = x_cm * y_cm * H_cm;
      const topVolume = k_cm2 * x_cm;
      
      const eptVolumeCm3 = sideVolume + topVolume; // This is 'A'
      
      state.eptVolumeLitresPerPile = eptVolumeCm3 / 1000;
      
      // --- *** CORRECTED EPT CALCULATION END *** ---

    } else {
      state.eptVolumeLitresPerPile = 0;
    }
  } else {
    state.eptVolumeLitresPerPile = 0;
  }


  if (validate && volumeCm3 <= 0) {
    showPileError("errorPileInputs");
    return;
  }

  const volumeLitresPerPile = volumeCm3 / 1000; // 1L = 1000 cm³
  state.volumeLitresPerPile = volumeLitresPerPile; // Store per-pile volume
  
  // Recommendation Logic (based on per-pile volume)
  const exceedsThickness = thickness > 250;
  const exceedsVolume = volumeLitresPerPile > 350; // Check per-pile volume
  let recKey = "recOK";
  let recText = "";

  if (exceedsThickness && exceedsVolume) {
    recKey = "recCombined";
  } else if (exceedsThickness) {
    recKey = "recThickness";
  } else if (exceedsVolume) {
    recKey = "recVolume";
  }
  
  recText = langTranslations[recKey];
  if (exceedsThickness) {
    const layers = Math.ceil(thickness / 250);
    recText = recText.replace("{layers}", layers);
  }
  
  // Set recommendation text on the results page
  ui.pileTopRecommendation.textContent = recText;
  ui.pileTopErrorArea.classList.add("hidden");

  // Populate Criteria
  let shapeText = langTranslations[`pileType${state.pileTopType.charAt(0).toUpperCase() + state.pileTopType.slice(1)}`];
  if (lang === 'en') shapeText = toTitleCase(shapeText);
  ui.pileTopDisplayShape.textContent = shapeText;
  ui.pileTopDisplayDims.innerHTML = criteriaHtml;
  ui.pileTopDisplayThickness.textContent = `${thickness} ${mm}`;

  // Calculate and display final results
  updatePileTopResults();
  
  // If validating (from button click), show results page
  if (validate) {
    ui.pileTopResultArea.classList.remove("hidden"); // Ensure results are visible
    showPage("pileTopResultPage", { 
      titleKey: "pileTopResultPageTitle", 
      stepKey: "pileTopResultPageStep", 
      backPage: "pileTopDimsPage" 
    });
  }
}


// This function calculates and displays the final totals on the results page
function updatePileTopResults() {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  
  const pileCount = parseInt(ui.pileCountValue.value) || 1;
  const totalVolumeLitres = state.volumeLitresPerPile * pileCount;
  const wastagePercent = state.pileTopWastagePercent;
  const finalVolumeWithWastage = totalVolumeLitres * (1 + (wastagePercent / 100));
  const bagsNeeded = Math.ceil(finalVolumeWithWastage / SUPERCAST_PC_YIELD);
  const wastageText = langTranslations.wastageNote.replace("{percent}", wastagePercent);

  // Display Results
  ui.pileTopTotalVolume.textContent = `${finalVolumeWithWastage.toFixed(2)} ${langTranslations.litres}`;
  ui.pileTopWastageNote.textContent = wastageText;
  ui.pileTopBagsNeeded.innerHTML = `<b>${bagsNeeded}</b> ${langTranslations.bags}`;
  
  // Calculate and Display EPT Results
  if (ui.pileIncludeEPT.checked && state.eptVolumeLitresPerPile > 0) {
    const totalEPTVolumeLitres = state.eptVolumeLitresPerPile * pileCount;
    // Assuming same wastage % for EPT
    const finalEPTVolumeWithWastage = totalEPTVolumeLitres * (1 + (wastagePercent / 100));
    const eptPackSize = state.eptPackSize; // NEW: Get pack size from state
    const eptPacksNeeded = Math.ceil(finalEPTVolumeWithWastage / eptPackSize); // UPDATED
    
    let eptPacksText = langTranslations.eptPacks; // NEW
    if(lang === 'en') eptPacksText = toTitleCase(eptPacksText);

    ui.pileTopEPTResultValue.innerHTML = `<b>${eptPacksNeeded}</b> ${eptPacksText}`; // UPDATED
    ui.pileTopEPTVolume.textContent = finalEPTVolumeWithWastage.toFixed(2);
    ui.pileTopEPTResultBlock.classList.remove("hidden");
  } else {
    ui.pileTopEPTResultBlock.classList.add("hidden");
  }

  // Ensure results area is visible if it was hidden
  ui.pileTopResultArea.classList.remove("hidden");
}


// Validation function for pile dimensions
function validatePileDims() {
  let dimsValid = false;
  const type = state.pileTopType;

  if (type === 'round') {
    const diam = parseFloat(ui.pileDiameter.value);
    if (!isNaN(diam) && diam > 0) {
      dimsValid = true;
    }
  } else if (type === 'square') {
    const side = parseFloat(ui.pileSide.value);
    if (!isNaN(side) && side > 0) {
      dimsValid = true;
    }
  } else if (type === 'rectangular') {
    const length = parseFloat(ui.pileLength.value);
    const width = parseFloat(ui.pileWidth.value);
    if ((!isNaN(length) && length > 0) && (!isNaN(width) && width > 0)) {
      dimsValid = true;
    }
  }

  if (dimsValid) {
    ui.pileThickness.disabled = false;
    ui.pileThickness.style.opacity = '1';
  } else {
    ui.pileThickness.disabled = true;
    ui.pileThickness.style.opacity = '0.5';
    ui.pileThickness.value = ''; // Clear thickness if dims become invalid
  }
}


// --- UTILITIES ---
function showError(messageKey, errorAreaElement) {
  if (!errorAreaElement) return;
  let text = translations[state.currentLanguage][messageKey] || "An unknown error occurred.";
  if (state.currentLanguage === 'en') text = toTitleCase(text);
  errorAreaElement.textContent = text;
  errorAreaElement.classList.remove("hidden");
}

function syncSliderInt(numberInput, slider, defaultVal, min, max, onBlur = false) {
  let valStr = numberInput.value.replace(/[^0-9]/g, "");
  let val;
  if (valStr === "") {
    if (onBlur) { val = defaultVal; valStr = defaultVal.toString(); }
    else { if (slider) slider.value = min; if (numberInput.value !== valStr) numberInput.value = valStr; return; }
  }
  val = parseInt(valStr);
  if (isNaN(val)) {
    if (onBlur) { val = defaultVal; valStr = defaultVal.toString(); }
    else { if (slider) slider.value = min; if (numberInput.value !== valStr) numberInput.value = valStr; return; }
  }
  if (val < min) { if (onBlur) { val = min; valStr = val.toString(); } }
  if (val > max) { val = max; valStr = val.toString(); }
  if (numberInput.value !== valStr) numberInput.value = valStr;
  if (slider) slider.value = val;
}

function syncSliderFloat(numberInput, slider, defaultVal, min, max, onBlur = false, step = 0.1) {
  let valStr = numberInput.value.replace(/[^0-9.]/g, "");
  const dotIndex = valStr.indexOf(".");
  if (dotIndex > -1) valStr = valStr.substring(0, dotIndex + 1) + valStr.substring(dotIndex + 1).replace(/\./g, "");
  if (numberInput.value !== valStr && !onBlur) numberInput.value = valStr;
  let val = parseFloat(valStr);
  if (isNaN(val)) {
    if (onBlur) { val = defaultVal; numberInput.value = val.toString(); }
    else { if (slider) slider.value = min; return; }
  }
  if (val < min && onBlur) val = min;
  if (val > max) val = max;
  if (onBlur) {
    val = Math.round(val / step) * step;
    val = parseFloat(val.toFixed(1));
    numberInput.value = val.toString();
  }
  if (slider) slider.value = val;
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  ui = {
    appContainer: document.querySelector(".app-container"),
    topBar: document.querySelector(".app-top-bar"),
    viewingArea: document.getElementById("viewingArea"),
    interactionArea: document.getElementById("pageContainer"),
    pageStorage: document.getElementById("pageStorage"),
    bottomActionBar: document.getElementById("bottomActionBar"),
    headerLogo: document.getElementById("headerLogo"),
    headerTitle: document.getElementById("headerTitle"),
    headerStep: document.getElementById("headerStep"),
    headerBackButton: document.getElementById("headerBackButton"),
    languagePage: document.getElementById("languagePage"),
    hubPage: document.getElementById("hubPage"),
    cataloguePage: document.getElementById("cataloguePage"),
    selectLangEnButton: document.getElementById("selectLangEn"),
    selectLangArButton: document.getElementById("selectLangAr"),
    selectAnchorCalculatorButton: document.getElementById("selectAnchorCalculator"),
    selectCatalogueButton: document.getElementById("selectCatalogue"),
    selectSealantCalculatorButton: document.getElementById("selectSealantCalculator"),
    installAppButton: document.getElementById("installAppButton"),
    selectionPage: document.getElementById("selectionPage"),
    rebarPage: document.getElementById("rebarPage"),
    holePage: document.getElementById("holePage"),
    depthPage: document.getElementById("depthPage"),
    calculatorPage: document.getElementById("calculatorPage"),
    selectE77Button: document.getElementById("selectE77"),
    selectE55Button: document.getElementById("selectE55"),
    rebarButtons: document.querySelectorAll(".rebar-btn"),
    rebarGrid: document.getElementById("rebarGrid"),
    holeGrid: document.getElementById("holeGrid"),
    holeRebarDisplay: document.getElementById("holeRebarDisplay"),
    depthSlider: document.getElementById("depthSlider"),
    depthValue: document.getElementById("depthValue"),
    depthMinLabel: document.getElementById("depthMinLabel"),
    depthMaxLabel: document.getElementById("depthMaxLabel"),
    depthRebarDisplay: document.getElementById("depthRebarDisplay"),
    anchorCalculateButton: document.getElementById("anchorCalculateButton"),
    form: document.getElementById("calculatorForm"),
    selectedRebarDisplay: document.getElementById("selectedRebarDisplay"),
    selectedProductInput: document.getElementById("selectedProduct"),
    hiddenRodDiameterInput: document.getElementById("rodDiameter"),
    holeDepthInput: document.getElementById("holeDepth"),
    holeDiameterInput: document.getElementById("holeDiameter"),
    inputHoleDiameterDiv: document.getElementById("inputHoleDiameterDiv"),
    inputHoleDepthDiv: document.getElementById("inputHoleDepthDiv"),
    displayE77Inputs: document.getElementById("displayE77Inputs"),
    displayHoleDiameter: document.getElementById("displayHoleDiameter"),
    displayHoleDepth: document.getElementById("displayHoleDepth"),
    wastageSection: document.getElementById("wastageSection"),
    toggleWastageButton: document.getElementById("toggleWastageButton"),
    wastageCustomizationSection: document.getElementById("wastageCustomizationSection"),
    wastageSlider: document.getElementById("wastageSlider"),
    wastageValue: document.getElementById("wastageValue"),
    errorArea: document.getElementById("errorArea"),
    criteriaSection: document.getElementById("criteriaSection"),
    resultArea: document.getElementById("resultArea"),
    netVolumeDisplay: document.getElementById("netVolumeDisplay"),
    resultVolume: document.getElementById("resultVolume"),
    resultWastage: document.getElementById("resultWastage"),
    fillDepthNote: document.getElementById("fillDepthNote"),
    rebarCountSection: document.getElementById("rebarCountSection"),
    rebarCountSlider: document.getElementById("rebarCountSlider"),
    rebarCountValue: document.getElementById("rebarCountValue"),
    totalResultArea: document.getElementById("totalResultArea"),
    totalVolumeDisplay: document.getElementById("totalVolumeDisplay"),
    totalCartridgeInfo: document.getElementById("totalCartridgeInfo"),
    cartridgeResultValue: document.getElementById("cartridgeResultValue"),
    anchorStartOver: document.getElementById("anchorStartOver"),
    
    // Sealant UI
    sealantProductPage: document.getElementById("sealantProductPage"),
    sealantSubstratePage: document.getElementById("sealantSubstratePage"),
    sealantDimensionsPage: document.getElementById("sealantDimensionsPage"),
    sealantResultPage: document.getElementById("sealantResultPage"),
    sealantProductPU40: document.getElementById("sealantProductPU40CS"),
    sealantProductGG: document.getElementById("sealantProductGG"),
    sealantProductPG: document.getElementById("sealantProductPG"),
    sealantSelectSubstratePorous: document.getElementById("sealantSelectSubstratePorous"),
    sealantSelectSubstrateNonPorous: document.getElementById("sealantSelectSubstrateNonPorous"),
    sealantWidthLabel: document.getElementById("sealantWidthLabel"),
    sealantJointWidth: document.getElementById("sealantJointWidth"),
    sealantJointWidthSlider: document.getElementById("sealantJointWidthSlider"),
    sealantDepthLabel: document.getElementById("sealantDepthLabel"),
    sealantJointDepth: document.getElementById("sealantJointDepth"),
    sealantJointDepthSlider: document.getElementById("sealantJointDepthSlider"),
    sealantJointLength: document.getElementById("sealantJointLength"),
    sealantLinkToggle: document.getElementById("sealantLinkToggle"),
    sealantLinkIcon: document.getElementById("sealantLinkIcon"),
    sealantUnlinkIcon: document.getElementById("sealantUnlinkIcon"),
    sealantGuidanceText: document.getElementById("sealantGuidanceText"),
    sealantDimErrorArea: document.getElementById("sealantDimErrorArea"),
    sealantTotalResultArea: document.getElementById("sealantTotalResultArea"),
    sealantTotalVolume: document.getElementById("sealantTotalVolume"),
    sealantWastageNote: document.getElementById("sealantWastageNote"),
    sealantPackagesLabel: document.getElementById("sealantPackagesLabel"),
    sealantPackagesResultValue: document.getElementById("sealantPackagesResultValue"),
    sealantCriteriaSection: document.getElementById("sealantCriteriaSection"),
    sealantDisplayProduct: document.getElementById("sealantDisplayProduct"),
    sealantDisplaySubstrateContainer: document.getElementById("sealantDisplaySubstrateContainer"),
    sealantDisplaySubstrate: document.getElementById("sealantDisplaySubstrate"),
    sealantDisplayWidth: document.getElementById("sealantDisplayWidth"),
    sealantDisplayDepth: document.getElementById("sealantDisplayDepth"),
    sealantDisplayLength: document.getElementById("sealantDisplayLength"),
    sealantWastageSection: document.getElementById("sealantWastageSection"),
    sealantToggleWastageButton: document.getElementById("sealantToggleWastageButton"),
    sealantWastageCustomizationSection: document.getElementById("sealantWastageCustomizationSection"),
    sealantWastageSlider: document.getElementById("sealantWastageSlider"),
    sealantWastageValue: document.getElementById("sealantWastageValue"),
    sealantCalculateButton: document.getElementById("sealantCalculateButton"),
    sealantStartOver: document.getElementById("sealantStartOver"),
    samsungInstallModal: document.getElementById('samsungInstallModal'),
    closeSamsungModalButton: document.getElementById('closeSamsungModalButton'),

    // NEW: Sealant Primer UI
    sealantIncludePrimer: document.getElementById("sealantIncludePrimer"),
    sealantPrimerResultBlock: document.getElementById("sealantPrimerResultBlock"),
    sealantPrimerResultValue: document.getElementById("sealantPrimerResultValue"),
    sealantPrimerAreaNote: document.getElementById("sealantPrimerAreaNote"),

    // Pile Top UI Elements
    selectPileTopCalculatorButton: document.getElementById("selectPileTopCalculator"),
    pileTopShapePage: document.getElementById("pileTopShapePage"),
    pileTopDimsPage: document.getElementById("pileTopDimsPage"),
    pileTypeRound: document.getElementById("pileTypeRound"),
    pileTypeSquare: document.getElementById("pileTypeSquare"),
    pileTypeRectangular: document.getElementById("pileTypeRectangular"),
    pileDimsRound: document.getElementById("pileDimsRound"),
    pileDimsSquare: document.getElementById("pileDimsSquare"),
    pileDimsRectangular: document.getElementById("pileDimsRectangular"),
    pileDiameter: document.getElementById("pileDiameter"),
    pileSide: document.getElementById("pileSide"),
    pileLength: document.getElementById("pileLength"),
    pileWidth: document.getElementById("pileWidth"),
    pileThickness: document.getElementById("pileThickness"),
    pileCountSection: document.getElementById("pileCountSection"),
    pileCountSlider: document.getElementById("pileCountSlider"),
    pileCountValue: document.getElementById("pileCountValue"),
    pileTopCalculateButton: document.getElementById("pileTopCalculateButton"),
    pileTopStartOver: document.getElementById("pileTopStartOver"),
    pileTopErrorArea: document.getElementById("pileTopErrorArea"),
    pileTopResultPage: document.getElementById("pileTopResultPage"),
    pileTopResultArea: document.getElementById("pileTopResultArea"),
    pileTopTotalVolume: document.getElementById("pileTopTotalVolume"),
    pileTopWastageNote: document.getElementById("pileTopWastageNote"),
    pileTopBagsNeeded: document.getElementById("pileTopBagsNeeded"),
    pileTopRecommendation: document.getElementById("pileTopRecommendation"),
    pileTopWastageSection: document.getElementById("pileTopWastageSection"),
    pileTopToggleWastageButton: document.getElementById("pileTopToggleWastageButton"),
    pileTopWastageCustomizationSection: document.getElementById("pileTopWastageCustomizationSection"),
    pileTopWastageSlider: document.getElementById("pileTopWastageSlider"),
    pileTopWastageValue: document.getElementById("pileTopWastageValue"),
    pileDiameterGrid: document.getElementById("pileDiameterGrid"),
    pileDiameterCustom: document.getElementById("pileDiameterCustom"),
    pileSideGrid: document.getElementById("pileSideGrid"),
    pileSideCustom: document.getElementById("pileSideCustom"),
    pileTopCriteriaSection: document.getElementById("pileTopCriteriaSection"),
    pileTopDisplayShape: document.getElementById("pileTopDisplayShape"),
    pileTopDisplayDims: document.getElementById("pileTopDisplayDims"),
    pileTopDisplayThickness: document.getElementById("pileTopDisplayThickness"),

    // NEW: Pile Top EPT UI
    pileIncludeEPT: document.getElementById("pileIncludeEPT"),
    pileTopEPTSection: document.getElementById("pileTopEPTSection"),
    pileTopEPTPackSizeSection: document.getElementById("pileTopEPTPackSizeSection"), // NEW
    eptPack20L: document.getElementById("eptPack20L"), // NEW
    eptPack46L: document.getElementById("eptPack46L"), // NEW
    pileEPTThicknessSlider: document.getElementById("pileEPTThicknessSlider"),
    pileEPTThickness: document.getElementById("pileEPTThickness"),
    pileTopEPTResultBlock: document.getElementById("pileTopEPTResultBlock"),
    pileTopEPTResultValue: document.getElementById("pileTopEPTResultValue"),
    pileTopEPTVolume: document.getElementById("pileTopEPTVolume")
  };


  state = {
    product: "", rebarSize: "", rebarText: "", holeSize: "", depth: "",
    volumePerAnchor: 0, wastagePercent: 45,
    sealantProduct: null, sealantSubstrate: "porous", sealantVolumeLitres: 0,
    sealantDepthLinked: true, sealantWastagePercent: 20, sealantWastageCustomized: false,
    currentLanguage: "en", installPromptEvent: null,
    // Pile Top State
    pileTopType: "round", volumeLitresPerPile: 0, eptVolumeLitresPerPile: 0, 
    pileTopWastagePercent: 10, // UPDATED
    eptPackSize: 20 // NEW
  };


  // --- LISTENERS ---
  ui.selectLangEnButton.addEventListener("click", () => { setLanguage("en"); showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" }); });
  ui.selectLangArButton.addEventListener("click", () => { setLanguage("ar"); showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" }); });
  ui.headerBackButton.addEventListener("click", () => { if (ui.headerBackButton.dataset.page) navigateBack(ui.headerBackButton.dataset.page); });
  ui.selectAnchorCalculatorButton.addEventListener("click", () => { resetCalculator(); showPage("selectionPage", { titleKey: "anchorCalculator", stepKey: "chooseApplicationType", backPage: "hubPage" }); });
  ui.selectCatalogueButton.addEventListener("click", () => { showPage("cataloguePage", { titleKey: "materialCatalogue", stepKey: "comingSoon", backPage: "hubPage" }); });
  ui.selectSealantCalculatorButton.addEventListener("click", () => { resetSealantCalculator(); showPage("sealantProductPage", { titleKey: "sealantProductPageTitle", stepKey: "sealantProductPageStep", backPage: "hubPage" }); });

  ui.selectE77Button.addEventListener("click", () => selectProduct("E77"));
  ui.selectE55Button.addEventListener("click", () => selectProduct("E55"));
  ui.rebarGrid.addEventListener("click", (e) => {
    const button = e.target.closest(".rebar-btn");
    if (button) {
      state.rebarSize = button.dataset.value;
      state.rebarText = button.textContent;
      ui.hiddenRodDiameterInput.value = state.rebarSize;
      let defaultWastage = (["8", "10", "12"].includes(state.rebarSize)) ? 50 : 45;
      state.wastagePercent = defaultWastage;
      ui.rebarGrid.querySelectorAll(".btn-select").forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      if (state.product === "E77") {
        setupHolePage(state.rebarSize);
        showPage("holePage", { titleKey: "selectHoleDiameter", stepKey: "forLokfixE77", backPage: "rebarPage" });
      } else {
        const e55Data = e55FixedData[state.rebarSize];
        if (e55Data) {
          state.holeSize = e55Data.hole; state.depth = e55Data.depth;
          setupCalculatorForm();
          showPage("calculatorPage", { titleKey: "volumeCalculator", backPage: "rebarPage" });
          runPerAnchorCalculation();
        }
      }
    }
  });
  ui.holeGrid.addEventListener("click", (e) => {
    const button = e.target.closest(".hole-btn");
    if (button) {
      state.holeSize = button.dataset.value;
      ui.holeGrid.querySelectorAll(".btn-select").forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      setupDepthSlider(state.rebarSize);
      showPage("depthPage", { titleKey: "selectEmbedmentDepth", stepKey: "forLokfixE77", backPage: "holePage" });
    }
  });

  ui.toggleWastageButton.addEventListener("click", () => ui.wastageCustomizationSection.classList.toggle("hidden"));
  ui.wastageSlider.addEventListener("input", (e) => { ui.wastageValue.value = e.target.value; state.wastagePercent = parseInt(e.target.value, 10); if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); });
  ui.wastageValue.addEventListener("input", (e) => { syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100); const val = parseInt(e.target.value, 10); if (!isNaN(val)) { state.wastagePercent = val; if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); } });
  ui.wastageValue.addEventListener("blur", (e) => { syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100, true); state.wastagePercent = parseInt(e.target.value, 10); if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); });
  ui.depthSlider.addEventListener("input", (e) => ui.depthValue.value = e.target.value);
  ui.depthValue.addEventListener("input", (e) => { const min = parseInt(ui.depthSlider.min), max = parseInt(ui.depthSlider.max); syncSliderFloat(e.target, ui.depthSlider, min, min, max); });
  ui.depthValue.addEventListener("blur", (e) => { const min = parseInt(ui.depthSlider.min), max = parseInt(ui.depthSlider.max); syncSliderFloat(e.target, ui.depthSlider, min, min, max, true); });
  ui.anchorCalculateButton.addEventListener("click", () => { state.depth = ui.depthValue.value; setupCalculatorForm(); let backPageId = state.product === "E77" ? "depthPage" : "rebarPage"; showPage("calculatorPage", { titleKey: "volumeCalculator", backPage: backPageId }); runPerAnchorCalculation(); });
  ui.rebarCountSlider.addEventListener("input", (e) => { ui.rebarCountValue.value = e.target.value; if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation(); });
  ui.rebarCountValue.addEventListener("input", (e) => { syncSliderInt(e.target, ui.rebarCountSlider, 1, 1, 500); if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation(); });
  ui.rebarCountValue.addEventListener("blur", (e) => { syncSliderInt(e.target, ui.rebarCountSlider, 1, 1, 500, true); if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation(); });
  ui.anchorStartOver.addEventListener("click", () => navigateBack("selectionPage"));

  // Sealant Listeners
  ui.sealantProductPU40.addEventListener("click", () => selectSealantProduct("Nitoseal PU40-CS"));
  ui.sealantProductGG.addEventListener("click", () => selectSealantProduct("Thioflex 600 GG"));
  ui.sealantProductPG.addEventListener("click", () => selectSealantProduct("Thioflex 600 PG"));
  
  ui.sealantSelectSubstratePorous.addEventListener("click", () => selectSealantSubstrate("porous"));
  ui.sealantSelectSubstrateNonPorous.addEventListener("click", () => selectSealantSubstrate("non-porous"));
  
  ui.sealantLinkToggle.addEventListener("click", toggleSealantLink);
  ui.sealantCalculateButton.addEventListener("click", () => runSealantCalculation(true));
  ui.sealantJointWidthSlider.addEventListener("input", (e) => { ui.sealantJointWidth.value = e.target.value; handleSealantWidthInput(true); });
  ui.sealantJointWidth.addEventListener("input", (e) => { const min = parseFloat(e.target.min) || 5; syncSliderFloat(e.target, ui.sealantJointWidthSlider, min, min, 50, false, 0.5); handleSealantWidthInput(true); });
  ui.sealantJointWidth.addEventListener("blur", (e) => { const min = parseFloat(e.target.min) || 5; syncSliderFloat(e.target, ui.sealantJointWidthSlider, min, min, 50, true, 0.5); handleSealantWidthInput(true); });
  ui.sealantJointDepthSlider.addEventListener("input", (e) => { if (!state.sealantDepthLinked) { ui.sealantJointDepth.value = e.target.value; updateSealantGuidance(); } });
  ui.sealantJointDepth.addEventListener("input", (e) => { if (!state.sealantDepthLinked) { const min = parseFloat(e.target.min) || 5, max = parseFloat(e.target.max) || 50; syncSliderFloat(e.target, ui.sealantJointDepthSlider, min, min, max, false, 0.5); updateSealantGuidance(); } });
  ui.sealantJointDepth.addEventListener("blur", (e) => { if (!state.sealantDepthLinked) { const min = parseFloat(e.target.min) || 5, max = parseFloat(e.target.max) || 50; syncSliderFloat(e.target, ui.sealantJointDepthSlider, min, min, max, true, 0.5); updateSealantGuidance(); } });
  ui.sealantToggleWastageButton.addEventListener("click", () => ui.sealantWastageCustomizationSection.classList.toggle("hidden"));
  ui.sealantWastageSlider.addEventListener("input", (e) => { ui.sealantWastageValue.value = e.target.value; state.sealantWastagePercent = parseInt(e.target.value, 10); state.sealantWastageCustomized = true; runSealantCalculation(false); });
  ui.sealantWastageValue.addEventListener("input", (e) => { syncSliderInt(e.target, ui.sealantWastageSlider, 15, 10, 100); const val = parseInt(e.target.value, 10); if (!isNaN(val)) { state.sealantWastagePercent = val; state.sealantWastageCustomized = true; runSealantCalculation(false); } });
  ui.sealantWastageValue.addEventListener("blur", (e) => { syncSliderInt(e.target, ui.sealantWastageSlider, 15, 10, 100, true); state.sealantWastagePercent = parseInt(e.target.value, 10); state.sealantWastageCustomized = true; runSealantCalculation(false); });
  ui.sealantStartOver.addEventListener("click", () => navigateBack("sealantProductPage"));
  // NEW: Sealant primer listener
  ui.sealantIncludePrimer.addEventListener("change", () => {
    if (!ui.sealantResultPage.classList.contains("hidden")) {
      runSealantCalculation(false);
    }
  });


  // Pile Top Listeners
  ui.selectPileTopCalculatorButton.addEventListener("click", () => { resetPileTopCalculator(); showPage("pileTopShapePage", { titleKey: "pileTopShapePageTitle", stepKey: "pileTopShapePageStep", backPage: "hubPage" }); });
  ui.pileTypeRound.addEventListener("click", () => selectPileType("round"));
  ui.pileTypeSquare.addEventListener("click", () => selectPileType("square"));
  ui.pileTypeRectangular.addEventListener("click", () => selectPileType("rectangular"));
  ui.pileTopCalculateButton.addEventListener("click", () => runPileTopCalculation(true));
  ui.pileTopStartOver.addEventListener("click", () => navigateBack("pileTopShapePage"));
  // Pile Count Listeners (on results page)
  ui.pileCountSlider.addEventListener("input", (e) => { ui.pileCountValue.value = e.target.value; updatePileTopResults(); });
  ui.pileCountValue.addEventListener("input", (e) => { syncSliderInt(e.target, ui.pileCountSlider, 1, 1, 500); updatePileTopResults(); });
  ui.pileCountValue.addEventListener("blur", (e) => { syncSliderInt(e.target, ui.pileCountSlider, 1, 1, 500, true); updatePileTopResults(); });
  // Pile Wastage Listeners (on results page)
  ui.pileTopToggleWastageButton.addEventListener("click", () => ui.pileTopWastageCustomizationSection.classList.toggle("hidden"));
  ui.pileTopWastageSlider.addEventListener("input", (e) => { ui.pileTopWastageValue.value = e.target.value; state.pileTopWastagePercent = parseInt(e.target.value, 10); updatePileTopResults(); });
  ui.pileTopWastageValue.addEventListener("input", (e) => { syncSliderInt(e.target, ui.pileTopWastageSlider, 10, 0, 100); const val = parseInt(e.target.value, 10); if (!isNaN(val)) { state.pileTopWastagePercent = val; updatePileTopResults(); } }); // UPDATED default to 10
  ui.pileTopWastageValue.addEventListener("blur", (e) => { syncSliderInt(e.target, ui.pileTopWastageSlider, 10, 0, 100, true); state.pileTopWastagePercent = parseInt(e.target.value, 10); updatePileTopResults(); }); // UPDATED default to 10
  // Pile Dim Validation Listeners
  ui.pileDiameter.addEventListener("input", validatePileDims);
  ui.pileSide.addEventListener("input", validatePileDims);
  ui.pileLength.addEventListener("input", validatePileDims);
  ui.pileWidth.addEventListener("input", validatePileDims);
  ui.pileDiameterGrid.addEventListener("click", handlePileDimSelect);
  ui.pileSideGrid.addEventListener("click", handlePileDimSelect);
  
  // NEW: Pile Top EPT Listeners
  ui.pileIncludeEPT.addEventListener("change", () => {
    ui.pileTopEPTSection.classList.toggle("hidden", !ui.pileIncludeEPT.checked);
    ui.pileTopEPTPackSizeSection.classList.toggle("hidden", !ui.pileIncludeEPT.checked); // NEW
    // If we're on the results page, update the calculation
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      runPileTopCalculation(false); // Recalculate state
      updatePileTopResults(); // Update UI
    }
  });
  // NEW: EPT Pack Size Listeners
  ui.eptPack20L.addEventListener("click", () => {
    state.eptPackSize = 20;
    ui.eptPack20L.classList.add("selected");
    ui.eptPack46L.classList.remove("selected");
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      updatePileTopResults();
    }
  });
  ui.eptPack46L.addEventListener("click", () => {
    state.eptPackSize = 46;
    ui.eptPack46L.classList.add("selected");
    ui.eptPack20L.classList.remove("selected");
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      updatePileTopResults();
    }
  });
  // EPT Thickness Listeners
  ui.pileEPTThicknessSlider.addEventListener("input", (e) => { 
    ui.pileEPTThickness.value = e.target.value;
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      runPileTopCalculation(false);
      updatePileTopResults();
    }
  });
  ui.pileEPTThickness.addEventListener("input", (e) => { 
    syncSliderInt(e.target, ui.pileEPTThicknessSlider, 25, 15, 50); // UPDATED default to 25
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      runPileTopCalculation(false);
      updatePileTopResults();
    }
  });
  ui.pileEPTThickness.addEventListener("blur", (e) => { 
    syncSliderInt(e.target, ui.pileEPTThicknessSlider, 25, 15, 50, true); // UPDATED default to 25
    if (!ui.pileTopResultPage.classList.contains("hidden")) {
      runPileTopCalculation(false);
      updatePileTopResults();
    }
  });


  // --- PWA INSTALL LOGIC ---
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (isStandalone) {
    console.log("App is running in standalone mode.");
  } else {
    const isSamsungBrowser = /SamsungBrowser/.test(navigator.userAgent);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      state.installPromptEvent = e;
      if (ui.installAppButton) ui.installAppButton.classList.remove('hidden');
    });

    if (isSamsungBrowser && !state.installPromptEvent) {
      if (ui.installAppButton) ui.installAppButton.classList.remove('hidden');
    }

    if (ui.installAppButton) {
      ui.installAppButton.addEventListener('click', () => {
        if (state.installPromptEvent) {
          state.installPromptEvent.prompt();
          state.installPromptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') ui.installAppButton.classList.add('hidden');
            state.installPromptEvent = null;
          });
        } else if (isSamsungBrowser) {
          ui.samsungInstallModal.classList.remove('hidden');
        } else {
          alert("To install, tap your browser's Menu button and select 'Add to Home Screen' or 'Install App'.");
        }
      });
    }
  }

  if (ui.closeSamsungModalButton) {
    ui.closeSamsungModalButton.addEventListener('click', () => ui.samsungInstallModal.classList.add('hidden'));
  }

  // --- APP START ---
  resetCalculator();
  resetSealantCalculator();
  resetPileTopCalculator();
  setLanguage("en");
  showPage("languagePage", { showLogo: true, titleKey: "welcome" });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW failed: ', err));
    });
  }
});