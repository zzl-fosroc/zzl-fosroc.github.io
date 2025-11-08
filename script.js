// --- CONSTANTS & DATA ---

/**
 * Title-cases a string, keeping small words lowercase.
 * @param {string} str - The string to title-case.
 * @returns {string} The title-cased string.
 */
function toTitleCase(str) {
  if (!str) return "";
  const smallWords = /\b(a|an|and|as|at|but|by|be|for|in|of|on|or|to|with)\b/g;
  const units = /\b(mm|ml|m|l)\b/gi; // FIX 2: Made case-insensitive to catch 'Mm'

  let title = str.replace(
    /\b\w+/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

  // Keep small words lowercase, unless they are the first word
  title = title.replace(smallWords, (match, word) => {
    if (title.indexOf(match) === 0) {
      return match; // Keep capitalized if it's the first word
    }
    return word;
  });

  // Ensure units are lowercase
  title = title.replace(units, (match) => match.toLowerCase());

  // Fix specific product names
  title = title.replace(/\b(Lokfix E55|Lokfix E77|Nitoseal Pu40|Thioflex 600 Gg|Thioflex 600 Pg)\b/gi, (match) => {
    if (match.toLowerCase() === 'lokfix e55') return 'Lokfix E55';
    if (match.toLowerCase() === 'lokfix e77') return 'Lokfix E77';
    if (match.toLowerCase() === 'nitoseal pu40') return 'Nitoseal PU40';
    if (match.toLowerCase() === 'thioflex 600 gg') return 'Thioflex 600 GG';
    if (match.toLowerCase() === 'thioflex 600 pg') return 'Thioflex 600 PG';
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
    anchorDescription: "Calculate resin for Lokfix E55 & E77.",
    materialCatalogue: "Material Catalogue",
    comingSoon: "Coming Soon",
    featureInProgress: "This feature is currently under development.",
    back: "Back",
    results: "Results",
    criteriaForResults: "Criteria for Result",

    // Sealant Calculator Keys
    sealantCalculator: "Sealant Volume Calculator",
    sealantDescription: "Estimate joint sealant requirements.",
    sealantProduct: "Select Sealant Product",
    sealantSubstrate: "Substrate Type",
    substratePorous: "Porous",
    substrateNonPorous: "Non-Porous",
    jointWidth: "Joint Width", // Generic
    jointWidthMin6: "Joint Width (6mm - 50mm)",
    jointWidthMin5: "Joint Width (5mm - 50mm)",
    jointDepth: "Joint Depth", // Generic
    jointDepthMin6: "Joint Depth (6mm - 50mm)", // MODIFIED
    jointDepthMin5: "Joint Depth (5mm - 50mm)", // MODIFIED
    totalJointLength: "Total Joint Length",
    m: "m",
    litres: "Litres",
    thioflex600gg: "Thioflex 600 GG",
    thioflex600pg: "Thioflex 600 PG",
    nitosealpu40: "Nitoseal PU40",
    packagesNeeded: "Packages Needed",
    setsNeeded: "Sets Needed",
    sausages: "sausage(s)",
    packs: "pack(s)",
    sets: "set(s)",
    wastageNote: "({percent}% wastage)",
    // NEW: Page titles and steps
    sealantProductPageTitle: "Select Product",
    sealantProductPageStep: "Step 1 of 3",
    sealantDimsPageTitle: "Joint Dimensions",
    sealantDimsPageStep: "Step 2 of 3",
    sealantResultPageTitle: "Calculation Results",
    sealantResultPageStep: "Step 3 of 3",
    sealantCalculate: "Calculate",
    sealantEditCriteria: "Edit Criteria",
    // Guidance
    guidanceTitle: "Guidelines",
    guidanceManualTitle: "Recommendation (Manual Mode)",
    guidancePU40: "Uses Nitoseal PU40-CS guidelines. Min. depth {minDepth}mm for {substrate} substrate.",
    guidanceThioflex: "Uses ASTM C 1193-16 guidelines. Min. depth 5mm.",
    guidancePU40Rec: "Recommendation based on Nitoseal PU40-CS: Aim for 2:1 ratio (max 50mm depth). Min. depth {minDepth}mm.", // MODIFIED
    guidanceThioflexRec: "Recommendation based on ASTM C 1193-16: Aim for 2:1 ratio (max 50mm depth). Min. depth 5mm.", // MODIFIED
    // Errors
    errorMinJointWidth: "Joint width must be at least {minWidth}mm.",
    errorMaxJointWidth: "Joint width must not exceed 50mm.",
    errorMinJointDepth: "Joint depth must be at least {minDepth}mm.",
    errorMaxJointDepth: "Depth for {product} must not exceed {maxDepth}mm.",
    errorMaxJointDepthManual: "Manual depth must not exceed 50mm.", // NEW
    errorMaxJointDepthLinked: "Linked depth must not exceed 25mm.", // NEW
    errorSealantLength: "Please enter a valid total length.", // NEW
    sealantStartOver: "Start Over",

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
    cartridges: "cartridge(s)",
    errorFillFields: "Please fill in all fields with valid numbers.",
    errorPositiveValues: "All values must be positive.",
    errorHoleSize: "Hole Diameter must be larger than Rod Diameter.",
    customizeWastage: "Customize Wastage",
    wastageFactor: "Wastage Factor",
    includesWastage: "Includes",
    wastage: "wastage",
    fillDepthNote: "(Calculated at 2/3 fill depth)",
    startOver: "Start Over"
  },
  ar: {
    // Hub Keys
    welcome: "مرحباً بك",
    selectLanguage: "يرجى اختيار لغتك",
    selectTool: "اختر تطبيقاً",
    anchorCalculator: "حاسبة مواد الزرع",
    anchorDescription: "احسب كمية لـ Lokfix E55 و E77.",
    materialCatalogue: "كتالوك المواد",
    comingSoon: "قريباً",
    featureInProgress: "هذه الميزة قيد التطوير حالياً.",
    back: "رجوع",
    results: "النتائج",
    criteriaForResults: "معايير النتيجة",

    // Sealant Calculator Keys
    sealantCalculator: "حاسبة كمية مانع التسرب",
    sealantDescription: "تقدير متطلبات مانع التسرب الفواصل.",
    sealantProduct: "اختر منتج مانع التسرب",
    sealantSubstrate: "نوع السطح",
    substratePorous: "مسامي",
    substrateNonPorous: "غير مسامي",
    jointWidth: "عرض الفاصل",
    jointWidthMin6: "عرض الفاصل (6مم - 50مم)",
    jointWidthMin5: "عرض الفاصل (5مم - 50مم)",
    jointDepth: "عمق الفاصل",
    jointDepthMin6: "عمق الفاصل (6مم - 50مم)", // MODIFIED
    jointDepthMin5: "عمق الفاصل (5مم - 50مم)", // MODIFIED
    totalJointLength: "إجمالي طول الفاصل",
    m: "م",
    litres: "لتر",
    thioflex600gg: "ثيوفلكس 600 GG",
    thioflex600pg: "ثيوفلكS 600 PG",
    nitosealpu40: "نيتوسيل PU40",
    packagesNeeded: "العبوات المطلوبة",
    setsNeeded: "أطقم مطلوبة",
    sausages: "قطعة",
    packs: "عبوة",
    sets: "عبوة",
    wastageNote: "({percent}% هدر)",
    // NEW: Page titles and steps
    sealantProductPageTitle: "اختر المنتج",
    sealantProductPageStep: "الخطوة 1 من 3",
    sealantDimsPageTitle: "أبعاد الفاصل",
    sealantDimsPageStep: "الخطوة 2 من 3",
    sealantResultPageTitle: "نتائج الحساب",
    sealantResultPageStep: "الخطوة 3 من 3",
    sealantCalculate: "احسب",
    sealantEditCriteria: "تعديل المعايير",
    // Guidance
    guidanceTitle: "الإرشادات",
    guidanceManualTitle: "توصية (وضع يدوي)",
    guidancePU40: "يستخدم إرشادات Nitoseal PU40-CS. أدنى عمق {minDepth} مم للأسطح الـ {substrate}.",
    guidanceThioflex: "يستخدم إرشادات ASTM C 1193-16. أدنى عمق 5 مم.",
    guidancePU40Rec: "توصية بناءً على Nitoseal PU40-CS: استهدف نسبة 2:1 (بحد أقصى 50 مم عمق). أدنى عمق {minDepth} مم.", // MODIFIED
    guidanceThioflexRec: "توصية بناءً على ASTM C 1193-16: استهدف نسبة 2:1 (بحد أقصى 50 مم عمق). أدنى عمق 5 مم.", // MODIFIED
    // Errors
    errorMinJointWidth: "يجب أن يكون عرض الفاصل {minWidth} مم على الأقل.",
    errorMaxJointWidth: "يجب ألا يتجاوز عرض الفاصل 50 مم.",
    errorMinJointDepth: "يجب أن يكون عمق الفاصل {minDepth} مم على الأقل.",
    errorMaxJointDepth: "يجب ألا يتجاوز العمق لهذا المنتج {maxDepth} مم.",
    errorMaxJointDepthManual: "يجب ألا يتجاوز العمق اليدوي 50 مم.", // NEW
    errorMaxJointDepthLinked: "يجب ألا يتجاوز العمق المرتبط 25 مم.", // NEW
    errorSealantLength: "يرجى إدخال إجمالي طول صالح.", // NEW
    sealantStartOver: "ابدأ من جديد",

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
    mm: "مم",
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
    startOver: "ابدأ من جديد"
  }
};

// --- SEALANT CALC (NEW) ---
const SEALANT_PACKAGE_SIZES = {
  "Nitoseal PU40": {
    size: 0.6,
    unitKey: "sausages",
    type: "S",
    wastage: 0.20 // 20%
  }, // 600ml
  "Thioflex 600 GG": {
    size: 2.5,
    unitKey: "sets",
    type: "M",
    wastage: 0.15 // 15%
  }, // 2.5L
  "Thioflex 600 PG": {
    size: 5.0,
    unitKey: "sets",
    type: "M",
    wastage: 0.15 // 15%
  } // 5.0L
};

// ANCHOR CALC
const CARTRIDGE_SIZES = {
  E77: [585],
  E55: [300]
};
const e55FixedData = {
  8: {
    hole: 12,
    depth: 80
  },
  10: {
    hole: 14,
    depth: 90
  },
  12: {
    hole: 16,
    depth: 110
  },
  14: {
    hole: 18,
    depth: 115
  },
  16: {
    hole: 20,
    depth: 125
  },
  20: {
    hole: 25,
    depth: 170
  },
  25: {
    hole: 32,
    depth: 210
  },
  28: {
    hole: 35,
    depth: 250
  },
  32: {
    hole: 40,
    depth: 270
  }
};
const e77EmbedmentData = {
  8: {
    min: 60,
    max: 160
  },
  10: {
    min: 60,
    max: 200
  },
  12: {
    min: 70,
    max: 240
  },
  14: {
    min: 75,
    max: 280
  },
  16: {
    min: 80,
    max: 320
  },
  20: {
    min: 90,
    max: 400
  },
  24: {
    min: 96,
    max: 480
  },
  25: {
    min: 100,
    max: 500
  },
  28: {
    min: 112,
    max: 560
  },
  32: {
    min: 128,
    max: 640
  }
};
const e77HoleData = {
  8: {
    min: 10,
    max: 12
  },
  10: {
    min: 12,
    max: 14
  },
  12: {
    min: 14,
    max: 16
  },
  14: {
    min: 18,
    max: 18
  },
  16: {
    min: 20,
    max: 20
  },
  20: {
    min: 25,
    max: 25
  },
  24: {
    min: 30,
    max: 32
  },
  25: {
    min: 30,
    max: 32
  },
  28: {
    min: 35,
    max: 35
  },
  32: {
    min: 40,
    max: 40
  }
};

// --- GLOBAL STATE ---
let ui;
let state;

// --- CORE UI & NAVIGATION ---

/**
 * Sets the application language and updates all UI text.
 * @param {string} lang - 'en' or 'ar'
 */
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
      if (lang === 'en') {
        text = toTitleCase(text);
      }
      el.textContent = text;
    }
  });

  // Update all placeholders
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.dataset.langPlaceholder;
    if (langTranslations[key]) {
      let text = langTranslations[key];
      if (lang === 'en') {
        text = toTitleCase(text);
      }
      el.placeholder = text;
    }
  });

  // Re-run any dynamic text updates
  if (
    ui &&
    ui.calculatorPage &&
    !ui.calculatorPage.classList.contains("hidden")
  ) {
    runPerAnchorCalculation();
  }

  // Re-run sealant calculation/guidance if on dimensions or results page
  if (ui) {
    if (!ui.sealantDimensionsPage.classList.contains("hidden")) {
      updateSealantInputLabels(state.sealantProduct);
      updateSealantGuidance();
    } else if (!ui.sealantResultPage.classList.contains("hidden")) {
      runSealantCalculation(false); // Re-run calc to update text
    }
  }
}

/**
 * Manages which action buttons are visible in the bottom bar.
 * @param {string} pageId - The ID of the page being shown.
 */
function updateBottomActionBar(pageId) {
  if (!ui || !ui.bottomActionBar) {
    console.error("Bottom action bar not found");
    return;
  }
  const bar = ui.bottomActionBar;
  // Hide all buttons within the bar
  bar
    .querySelectorAll(".action-button")
    .forEach((btn) => btn.classList.add("hidden"));

  let showBar = true;

  switch (pageId) {
    // Anchor
    case "depthPage":
      ui.continueToCalcButton.classList.remove("hidden");
      break;
    case "calculatorPage": // Anchor Result Page
      ui.anchorStartOver.classList.remove("hidden"); // KEEP
      break;
    // Sealant
    case "sealantProductPage":
      ui.sealantContinueToDims.classList.remove("hidden");
      // ui.sealantStartOver.classList.remove("hidden"); // REMOVED
      break;
    case "sealantDimensionsPage":
      ui.sealantCalculateButton.classList.remove("hidden");
      // ui.sealantStartOver.classList.remove("hidden"); // REMOVED
      break;
    case "sealantResultPage": // Sealant Result Page
      ui.sealantStartOver.classList.remove("hidden"); // KEEP
      break;
    // Hub/Language
    case "languagePage":
    case "hubPage":
    case "cataloguePage":
      showBar = false;
      break;
    // Default (Anchor selection)
    default:
      // ui.anchorStartOver.classList.remove("hidden"); // REMOVED
      // No button by default on selection pages
      break;
  }

  if (showBar) {
    bar.classList.remove("hidden");
  } else {
    bar.classList.add("hidden");
  }
}


/**
 * Main navigation function. Moves page from storage to view and updates UI.
 * @param {string} pageId - The ID of the page to show.
 * @param {object} options - Configuration for the page header.
 */
function showPage(pageId, options = {}) {
  if (!ui) {
    console.error("UI not initialized, cannot show page.");
    return;
  }

  const config = {
    titleKey: "",
    stepKey: "",
    backPage: null,
    showLogo: false,
    ...options
  };

  // Move any currently visible page back to storage
  const currentPages = ui.interactionArea.querySelectorAll(".page-content");
  currentPages.forEach((p) => {
    p.classList.add("hidden");
    ui.pageStorage.appendChild(p);
  });

  // Get the new page from storage and show it
  const page = document.getElementById(pageId);
  if (page) {
    ui.interactionArea.appendChild(page);
    page.classList.remove("hidden");
  } else {
    console.error(`Page with ID "${pageId}" not found.`);
    return;
  }

  // Configure Header (Viewing Area)
  ui.headerLogo.classList.toggle("hidden", !config.showLogo);

  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;

  if (config.titleKey) {
    let text = langTranslations[config.titleKey] || "...";
    if (lang === 'en') {
      text = toTitleCase(text);
    }
    ui.headerTitle.textContent = text;
    ui.headerTitle.classList.remove("hidden");
  } else {
    ui.headerTitle.classList.add("hidden");
  }

  if (config.stepKey) {
    let text = langTranslations[config.stepKey] || "...";
    if (lang === 'en') {
      text = toTitleCase(text);
    }
    ui.headerStep.textContent = text;
    ui.headerStep.classList.remove("hidden");
  } else {
    ui.headerStep.classList.add("hidden");
  }

  // Configure Top Bar (Back Button)
  if (config.backPage) {
    ui.headerBackButton.dataset.page = config.backPage;
    ui.headerBackButton.classList.remove("hidden");
  } else {
    ui.headerBackButton.classList.add("hidden");
  }

  // Configure Bottom Action Bar
  updateBottomActionBar(pageId);

  // Scroll interaction area to top on page change
  ui.interactionArea.scrollTop = 0;
}

/**
 * Handles navigation when the back button is clicked.
 * @param {string} toPageId - The page ID to navigate back to.
 */
function navigateBack(toPageId) {
  switch (toPageId) {
    case "languagePage":
      showPage("languagePage", {
        showLogo: true,
        titleKey: "welcome"
      });
      break;
    case "hubPage":
      showPage("hubPage", {
        titleKey: "selectTool",
        backPage: "languagePage"
      });
      break;
    // Anchor Calc
    case "selectionPage":
      resetCalculator();
      showPage("selectionPage", {
        titleKey: "anchorCalculator",
        stepKey: "chooseApplicationType",
        backPage: "hubPage"
      });
      break;
    case "rebarPage":
      showPage("rebarPage", {
        titleKey: "selectRebarDiameter",
        backPage: "selectionPage"
      });
      break;
    case "holePage":
      showPage("holePage", {
        titleKey: "selectHoleDiameter",
        stepKey: "forLokfixE77",
        backPage: "rebarPage"
      });
      break;
    case "depthPage":
      showPage("depthPage", {
        titleKey: "selectEmbedmentDepth",
        stepKey: "forLokfixE77",
        backPage: "holePage"
      });
      break;
    // Sealant Calc
    case "sealantProductPage":
      showPage("sealantProductPage", {
        titleKey: "sealantProductPageTitle",
        stepKey: "sealantProductPageStep",
        backPage: "hubPage"
      });
      break;
    case "sealantDimensionsPage":
      showPage("sealantDimensionsPage", {
        titleKey: "sealantDimsPageTitle",
        stepKey: "sealantDimsPageStep",
        backPage: "sealantProductPage"
      });
      break;
    case "sealantResultPage":
      showPage("sealantResultPage", {
        titleKey: "sealantResultPageTitle",
        stepKey: "sealantResultPageStep",
        backPage: "sealantDimensionsPage"
      });
      break;
  }
}

// --- SEALANT CALC LOGIC (NEW) ---

/**
 * Resets the sealant calculator to its default state.
 */
function resetSealantCalculator() {
  if (!ui) return;

  const defaultProduct = "Nitoseal PU40";
  const defaultSubstrate = "porous";
  const defaultWastage = SEALANT_PACKAGE_SIZES[defaultProduct].wastage;

  state.sealantProduct = defaultProduct;
  state.sealantSubstrate = defaultSubstrate;
  state.sealantVolumeLitres = 0;
  state.sealantDepthLinked = true;
  state.sealantWastagePercent = defaultWastage * 100;
  state.sealantWastageCustomized = false;

  // Reset product page
  selectSealantProduct(state.sealantProduct);
  selectSealantSubstrate(state.sealantSubstrate, true);

  // Reset dimensions page
  updateSealantInputRanges(state.sealantProduct); // Sets sliders to min 6
  const {
    depth
  } = getRecommendedDepth(6); // Get default depth
  ui.sealantJointWidth.value = "6";
  ui.sealantJointWidthSlider.value = 6;
  ui.sealantJointDepth.value = depth;
  ui.sealantJointDepthSlider.value = depth;
  ui.sealantJointLength.value = "";
  ui.sealantDimErrorArea.classList.add("hidden");
  ui.sealantDimErrorArea.textContent = "";

  // Reset link button
  updateSealantLinkButton();
  updateSealantGuidance();

  // Reset results page
  ui.sealantTotalResultArea.classList.add("hidden");
  ui.sealantWastageCustomizationSection.classList.add("hidden");
  ui.sealantWastageSlider.value = state.sealantWastagePercent;
  ui.sealantWastageValue.value = state.sealantWastagePercent;
}

/**
 * Updates sealant input labels based on product.
 */
function updateSealantInputLabels() {
  const productName = state.sealantProduct;
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;

  let widthKey = "jointWidthMin6";
  let depthKey = "jointDepthMin6"; // Manual mode max is 50mm

  if (productName === "Thioflex 600 GG" || productName === "Thioflex 600 PG") {
    widthKey = "jointWidthMin5";
    depthKey = "jointDepthMin5"; // Manual mode max is 50mm
  }

  ui.sealantWidthLabel.textContent = langTranslations[widthKey];
  ui.sealantDepthLabel.textContent = langTranslations[depthKey];
}

/**
 * Updates sealant input slider ranges and values based on product.
 */
function updateSealantInputRanges(productName) {
  let minWidth = 6;
  let minDepth = 6;

  if (productName === "Thioflex 600 GG" || productName === "Thioflex 600 PG") {
    minWidth = 5;
    minDepth = 5;
  }

  // Update Width
  ui.sealantJointWidthSlider.min = minWidth;
  ui.sealantJointWidth.min = minWidth;
  if (parseFloat(ui.sealantJointWidth.value) < minWidth) {
    ui.sealantJointWidth.value = minWidth;
    ui.sealantJointWidthSlider.value = minWidth;
  }

  // Update Depth
  ui.sealantJointDepthSlider.min = minDepth;
  ui.sealantJointDepth.min = minDepth;
  // Depth max is handled by updateSealantLinkButton()

  if (parseFloat(ui.sealantJointDepth.value) < minDepth) {
    ui.sealantJointDepth.value = minDepth;
    ui.sealantJointDepthSlider.value = minDepth;
  }

  // Update labels
  updateSealantInputLabels();
}


/**
 * Sets the active sealant product in state and updates UI.
 */
function selectSealantProduct(productName) {
  state.sealantProduct = productName;

  // Update button styles
  ui.sealantProductPU40.classList.toggle("selected", productName === "Nitoseal PU40");
  ui.sealantProductGG.classList.toggle("selected", productName === "Thioflex 600 GG");
  ui.sealantProductPG.classList.toggle("selected", productName === "Thioflex 600 PG");

  // Update slider ranges on dimensions page
  updateSealantInputRanges(productName);

  // Show/hide substrate selection
  if (productName === "Nitoseal PU40") {
    ui.sealantSubstrateSection.classList.remove("hidden");
    selectSealantSubstrate(state.sealantSubstrate, true);
  } else {
    ui.sealantSubstrateSection.classList.add("hidden");
    state.sealantSubstrate = "porous"; // Thioflex defaults to porous
  }

  // Reset wastage unless it was customized
  if (!state.sealantWastageCustomized) {
    const newWastage = SEALANT_PACKAGE_SIZES[productName].wastage * 100;
    state.sealantWastagePercent = newWastage;
    ui.sealantWastageSlider.value = newWastage;
    ui.sealantWastageValue.value = newWastage;
  }

  // Force depth update on product change
  handleSealantWidthInput(true);
}

/**
 * Sets the active sealant substrate and updates buttons.
 */
function selectSealantSubstrate(substrate, force = false) {
  if (state.sealantSubstrate === substrate && !force) return;

  state.sealantSubstrate = substrate;
  ui.sealantSubstratePorous.classList.toggle("selected", substrate === "porous");
  ui.sealantSubstrateNonPorous.classList.toggle("selected", substrate === "non-porous");

  // Re-run guidance and calculation
  handleSealantWidthInput(true); // Force depth update
}

/**
 * Toggles the linked state of sealant depth.
 */
function toggleSealantLink() {
  state.sealantDepthLinked = !state.sealantDepthLinked;
  updateSealantLinkButton();
  // If we just re-linked, update the depth
  handleSealantWidthInput(true);
  // Update guidance text
  updateSealantGuidance();
}

/**
 * Updates the link button UI and depth input constraints based on state.
 */
function updateSealantLinkButton() {
  if (!ui) return;
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  let minDepth, maxDepth, depthKey;

  const {
    minWidth
  } = getRecommendedDepth(0); // Just to get minWidth
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
    // Disable depth inputs
    ui.sealantJointDepth.disabled = true;
    ui.sealantJointDepthSlider.disabled = true;
    ui.sealantJointDepth.style.opacity = "0.5";
    ui.sealantJointDepthSlider.style.opacity = "0.5";
    ui.sealantJointDepth.style.cursor = "not-allowed";
    ui.sealantJointDepthSlider.style.cursor = "not-allowed";
  } else {
    // MANUAL MODE
    maxDepth = 50;
    ui.sealantLinkToggle.classList.remove("linked");
    ui.sealantLinkIcon.classList.add("hidden");
    ui.sealantUnlinkIcon.classList.remove("hidden");
    // Enable depth inputs
    ui.sealantJointDepth.disabled = false;
    ui.sealantJointDepthSlider.disabled = false;
    ui.sealantJointDepth.style.opacity = "1";
    ui.sealantJointDepthSlider.style.opacity = "1";
    ui.sealantJointDepth.style.cursor = "text";
    ui.sealantJointDepthSlider.style.cursor = "pointer";
  }

  // Update constraints
  ui.sealantJointDepthSlider.max = maxDepth;
  ui.sealantJointDepth.max = maxDepth;
  ui.sealantJointDepthSlider.min = minDepth;
  ui.sealantJointDepth.min = minDepth;

  // Update label
  ui.sealantDepthLabel.textContent = langTranslations[depthKey];

  // Clamp value if it's now out of bounds
  let currentDepth = parseFloat(ui.sealantJointDepth.value);
  if (currentDepth > maxDepth) {
    ui.sealantJointDepth.value = maxDepth;
    ui.sealantJointDepthSlider.value = maxDepth;
  }
}

/**
 * Gets depth recommendation based on product, width, and substrate.
 * @param {number} width - The joint width in mm.
 * @returns {object} {depth, minDepth, minWidth}
 */
function getRecommendedDepth(width) {
  const productName = state.sealantProduct;
  const substrate = state.sealantSubstrate;

  let minDepth, minWidth;

  if (productName === "Nitoseal PU40") {
    minWidth = 6;
    minDepth = (substrate === "porous") ? 10 : 6;
  } else {
    // Thioflex
    minWidth = 5;
    minDepth = 5;
  }

  let depth;
  // ASTM C 1193-16 Ratio
  if (width >= minWidth && width < 13) {
    depth = width; // 1:1 ratio
  } else if (width >= 13) {
    depth = width / 2; // 2:1 ratio
  } else {
    depth = minDepth; // Default for widths < minWidth
  }

  // Clamp to max 25mm (for linked mode) and min depth
  depth = Math.max(minDepth, Math.min(25, depth));

  return {
    depth: depth,
    minDepth: minDepth,
    minWidth: minWidth
  };
}

/**
 * Updates the guidance text on the dimensions page.
 */
function updateSealantGuidance() {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const productName = state.sealantProduct;
  const substrate = state.sealantSubstrate;
  const width = parseFloat(ui.sealantJointWidth.value) || 0;

  const {
    minDepth
  } = getRecommendedDepth(width);

  let guidanceTitleKey, guidanceTextKey;
  let guidanceText = "";
  const substrateText = langTranslations[substrate === 'porous' ? 'substratePorous' : 'substrateNonPorous'];

  if (state.sealantDepthLinked) {
    guidanceTitleKey = "guidanceTitle";
    if (productName === "Nitoseal PU40") {
      guidanceTextKey = "guidancePU40";
      guidanceText = langTranslations[guidanceTextKey]
        .replace("{minDepth}", minDepth)
        .replace("{substrate}", substrateText);
    } else {
      guidanceTextKey = "guidanceThioflex";
      guidanceText = langTranslations[guidanceTextKey];
    }
  } else {
    // Manual mode
    guidanceTitleKey = "guidanceManualTitle";
    if (productName === "Nitoseal PU40") {
      guidanceTextKey = "guidancePU40Rec";
      guidanceText = langTranslations[guidanceTextKey]
        .replace("{minDepth}", minDepth);
    } else {
      guidanceTextKey = "guidanceThioflexRec";
      guidanceText = langTranslations[guidanceTextKey];
    }
  }

  ui.sealantGuidanceText.innerHTML = `
      <h4 data-lang-key="${guidanceTitleKey}">${langTranslations[guidanceTitleKey]}</h4>
      <p>${guidanceText}</p>
    `;
}

/**
 * Handles changes to the width input, updating depth if linked.
 * @param {boolean} [forceDepthUpdate=false] - Force update of depth.
 */
function handleSealantWidthInput(forceDepthUpdate = false) {
  const width = parseFloat(ui.sealantJointWidth.value);
  const {
    depth,
    minDepth
  } = getRecommendedDepth(width);

  if (state.sealantDepthLinked && (forceDepthUpdate || !isNaN(width))) {
    const roundedDepth = parseFloat(depth.toFixed(1));
    ui.sealantJointDepth.value = roundedDepth;
    // Clamp slider value to its own min/max
    const sliderMin = parseFloat(ui.sealantJointDepthSlider.min);
    const sliderVal = Math.max(sliderMin, Math.min(25, roundedDepth));
    ui.sealantJointDepthSlider.value = sliderVal;
  }
  updateSealantGuidance();
}

/**
 * Validates dimension inputs before calculation.
 * @returns {boolean} True if valid, false if not.
 */
function validateSealantDimensions() {
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const width = parseFloat(ui.sealantJointWidth.value);
  const depth = parseFloat(ui.sealantJointDepth.value);
  const length = parseFloat(ui.sealantJointLength.value);

  const {
    minDepth,
    minWidth
  } = getRecommendedDepth(width);
  const maxDepth = state.sealantDepthLinked ? 25 : 50;

  let errors = [];

  // Validate Width
  if (isNaN(width) || width < minWidth) {
    errors.push(langTranslations.errorMinJointWidth.replace("{minWidth}", minWidth));
  }
  if (width > 50) {
    errors.push(langTranslations.errorMaxJointWidth);
  }

  // Validate Depth
  if (isNaN(depth) || depth < minDepth) {
    errors.push(langTranslations.errorMinJointDepth.replace("{minDepth}", minDepth));
  }
  if (depth > maxDepth) {
    const errKey = state.sealantDepthLinked ? "errorMaxJointDepthLinked" : "errorMaxJointDepthManual";
    errors.push(langTranslations[errKey]);
  }

  // Validate Length
  if (isNaN(length) || length <= 0) {
    errors.push(langTranslations.errorSealantLength);
  }

  if (errors.length > 0) {
    ui.sealantDimErrorArea.innerHTML = errors.join("<br>");
    ui.sealantDimErrorArea.classList.remove("hidden");
    return false;
  }

  ui.sealantDimErrorArea.classList.add("hidden");
  ui.sealantDimErrorArea.textContent = "";
  return true;
}

/**
 * Runs the final sealant calculation and populates the result page.
 * @param {boolean} [showPageOnSuccess=true] - Navigate to results page after calc.
 */
function runSealantCalculation(showPageOnSuccess = true) {
  // 1. Validate
  if (showPageOnSuccess && !validateSealantDimensions()) {
    return; // Stop if validating before navigation and it fails
  }

  // 2. Get Data
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;
  const productName = state.sealantProduct;
  const productInfo = SEALANT_PACKAGE_SIZES[productName];
  const substrate = state.sealantSubstrate;

  const width = parseFloat(ui.sealantJointWidth.value);
  const depth = parseFloat(ui.sealantJointDepth.value);
  const length = parseFloat(ui.sealantJointLength.value);
  const wastagePercent = state.sealantWastagePercent; // Get from state

  if (!productInfo || isNaN(width) || isNaN(depth) || isNaN(length)) {
    // This should be caught by validation, but as a fallback
    if (showPageOnSuccess) { // Only show error if this was a user click
      ui.sealantDimErrorArea.innerHTML = langTranslations.errorFillFields;
      ui.sealantDimErrorArea.classList.remove("hidden");
    }
    return;
  }

  // 3. Calculate
  const width_m = width / 1000;
  const depth_m = depth / 1000;
  const length_m = length;
  const wastageFactor = 1 + (wastagePercent / 100);

  const netVolume_m3 = width_m * depth_m * length_m;
  const netVolumeLitres = netVolume_m3 * 1000;
  const totalVolumeLitres = netVolumeLitres * wastageFactor;
  state.sealantVolumeLitres = totalVolumeLitres;
  const packagesNeeded = Math.ceil(totalVolumeLitres / productInfo.size);

  // 4. Populate Results Page
  // Update package/set label
  let packagesLabelKey = "packagesNeeded";
  let unitTextKey = productInfo.unitKey;
  if (productInfo.type === 'M') { // 'M' for multi-component (sets)
    packagesLabelKey = "setsNeeded";
  }
  const unitText = langTranslations[unitTextKey] || "unit(s)";
  const wastageText = langTranslations.wastageNote.replace("{percent}", wastagePercent);

  ui.sealantTotalVolume.textContent = `${totalVolumeLitres.toFixed(2)} ${langTranslations.litres}`;
  ui.sealantPackagesLabel.textContent = langTranslations[packagesLabelKey];
  ui.sealantPackagesLabel.dataset.langKey = packagesLabelKey;
  ui.sealantPackagesResultValue.innerHTML = `<b>${packagesNeeded}</b> ${unitText}`;
  ui.sealantWastageNote.textContent = wastageText;

  // 5. Populate Criteria Display
  ui.sealantDisplayProduct.textContent = productName;
  if (productName === "Nitoseal PU40") {
    const substrateText = langTranslations[substrate === 'porous' ? 'substratePorous' : 'substrateNonPorous'];
    ui.sealantDisplaySubstrate.textContent = substrateText;
    ui.sealantDisplaySubstrateContainer.classList.remove("hidden");
  } else {
    ui.sealantDisplaySubstrateContainer.classList.add("hidden");
  }
  ui.sealantDisplayWidth.textContent = `${width} ${langTranslations.mm}`;
  ui.sealantDisplayDepth.textContent = `${depth} ${langTranslations.mm}`;
  ui.sealantDisplayLength.textContent = `${length} ${langTranslations.m}`;

  // 6. Populate Wastage UI on Results Page
  ui.sealantWastageSlider.value = wastagePercent;
  ui.sealantWastageValue.value = wastagePercent;

  // 7. Show Page
  ui.sealantTotalResultArea.classList.remove("hidden");
  if (showPageOnSuccess) {
    showPage("sealantResultPage", {
      titleKey: "sealantResultPageTitle",
      stepKey: "sealantResultPageStep",
      backPage: "sealantDimensionsPage"
    });
  }
}


// --- ANCHOR CALC LOGIC ---

/**
 * Resets the anchor calculator state and UI.
 */
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

  // MODIFIED: Reset wastage UI to 45%
  ui.wastageCustomizationSection.classList.add("hidden");
  ui.wastageSlider.value = 45;
  ui.wastageValue.value = 45;

  state.wastagePercent = 45; // MODIFIED: Reset state value to 45

  state.product = "";
  state.rebarSize = "";
  state.rebarText = "";
  state.holeSize = "";
  state.depth = "";
  state.volumePerAnchor = 0; // This will store theoretical volume

  ui.rebarCountSlider.value = 1;
  ui.rebarCountValue.value = 1;

  updateBottomActionBar(null);
  setLanguage(state.currentLanguage);
}

/**
 * Handles product selection logic.
 * @param {string} productName - 'E77' or 'E55'
 */
function selectProduct(productName) {
  state.product = productName;
  ui.selectedProductInput.value = productName;

  ui.rebarButtons.forEach((btn) => {
    if (productName === "E77") {
      btn.style.display = "block";
      btn.disabled = false;
      btn.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      const rebarSize = btn.dataset.value;
      if (e55FixedData.hasOwnProperty(rebarSize)) {
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
  showPage("rebarPage", {
    titleKey: "selectRebarDiameter",
    backPage: "selectionPage"
  });
}

/**
 * Populates the hole selection page based on rebar size.
 * @param {string} rebarSize - The selected rebar diameter.
 */
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

/**
 * Configures the depth slider based on rebar size.
 * @param {string} rebarSize - The selected rebar diameter.
 */
function setupDepthSlider(rebarSize) {
  let data = e77EmbedmentData[rebarSize];
  if (!data) data = {
    min: 50,
    max: 500
  };

  // Calculate recommended depth
  let recommendedDepth;
  if (rebarSize === "8") {
    recommendedDepth = 100;
  } else {
    recommendedDepth = parseFloat(rebarSize) * 10;
  }

  // Clamp recommended depth to min/max range
  recommendedDepth = Math.max(data.min, Math.min(data.max, recommendedDepth));

  ui.depthRebarDisplay.textContent = state.rebarText;
  ui.depthSlider.min = data.min;
  ui.depthSlider.max = data.max;
  // Set default to recommended value
  ui.depthSlider.value = recommendedDepth;
  ui.depthValue.value = recommendedDepth;
  ui.depthMinLabel.textContent = data.min;
  ui.depthMaxLabel.textContent = data.max;
}


/**
 * Sets up the calculator form based on product (E77/E55)
 */
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

  // ADDED: Set wastage UI from state
  ui.wastageSlider.value = state.wastagePercent;
  ui.wastageValue.value = state.wastagePercent;
  ui.wastageCustomizationSection.classList.add("hidden"); // Ensure it's hidden on load

  const mm = translations[state.currentLanguage].mm;

  if (state.product === "E77" || state.product === "E55") {
    ui.inputHoleDiameterDiv.classList.add("hidden");
    ui.inputHoleDepthDiv.classList.add("hidden");
    ui.displayE77Inputs.classList.remove("hidden");

    ui.selectedRebarDisplay.textContent = state.rebarText;
    ui.displayHoleDiameter.textContent = `${state.holeSize} ${mm}`;
    ui.displayHoleDepth.textContent = `${state.depth} ${mm}`;

    ui.holeDiameterInput.value = state.holeSize;
    ui.holeDepthInput.value = state.depth;
  }
}

/**
 * Calculates and displays the volume per anchor.
 */
function runPerAnchorCalculation() {
  ui.resultArea.classList.add("hidden");
  ui.errorArea.classList.add("hidden");

  // MODIFIED: Hide the 2/3 fill depth note
  ui.fillDepthNote.classList.add("hidden");

  const holeDiameter = parseFloat(ui.holeDiameterInput.value);
  const rodDiameter = parseFloat(ui.hiddenRodDiameterInput.value);
  const holeDepth = parseFloat(ui.holeDepthInput.value);
  const lang = state.currentLanguage;
  const langTranslations = translations[lang] || translations.en;

  // MODIFIED: Read wastage from state
  let wastagePercent = state.wastagePercent;

  // MODIFIED: Use full depth for theoretical calculation (removed * 2/3)
  const effectiveDepth = holeDepth;

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
  const annulusArea =
    Math.PI * (Math.pow(holeRadius, 2) - Math.pow(rodRadius, 2));
  const netVolume_mm3 = annulusArea * effectiveDepth;
  const netVolume_mL = netVolume_mm3 / 1000; // This is the theoretical volume
  const wastageFactor = 1 + wastagePercent / 100;

  // This is Theoretical Volume + Wastage (for display per anchor)
  const totalVolume_mL_per_anchor = netVolume_mL * wastageFactor;

  // MODIFIED: Store the PURE theoretical volume in the state
  state.volumePerAnchor = netVolume_mL;

  const mL = langTranslations.mL;

  // Display pure theoretical volume
  ui.netVolumeDisplay.textContent = `${netVolume_mL.toFixed(2)} ${mL}`;
  // Display theoretical + wastage
  ui.resultVolume.textContent = `${totalVolume_mL_per_anchor.toFixed(2)} ${mL}`;

  let wastageText = `(${langTranslations.includesWastage} ${wastagePercent}% ${langTranslations.wastage})`;
  if (lang === 'en') {
    wastageText = toTitleCase(wastageText);
  }
  ui.resultWastage.textContent = wastageText;

  ui.resultArea.classList.remove("hidden");
  ui.totalResultArea.classList.remove("hidden");
  ui.criteriaSection.classList.remove("hidden");

  updateTotalCalculation();
  updateBottomActionBar("calculatorPage");
}

/**
 * Calculates and displays the total volume for all rebars.
 */
function updateTotalCalculation() {
  if (state.volumePerAnchor === 0) return;

  let rebarCount = parseInt(ui.rebarCountValue.value);
  if (isNaN(rebarCount) || rebarCount < 1) {
    rebarCount = 1;
  }

  // MODIFIED: This is now the Total *Theoretical* Volume
  const totalTheoreticalVolume = state.volumePerAnchor * rebarCount;

  // Get wastage and nozzle factors
  const wastageFactor = 1 + state.wastagePercent / 100;
  const nozzleFactor = 15; // 15mL nozzle factor

  // MODIFIED: Apply Hilti-style formula: (Total Theoretical * Wastage) + Nozzle
  const totalVolume = (totalTheoreticalVolume * wastageFactor) + nozzleFactor;

  const lang = state.currentLanguage;
  const mL = translations[lang].mL;

  ui.totalVolumeDisplay.textContent = `${totalVolume.toFixed(2)} ${mL}`;
  updateTotalCartridgeInfo(totalVolume);
}

/**
 * Calculates and displays the number of cartridges needed.
 * @param {number} totalVolume - Total calculated volume in mL.
 */
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

  if (cartridges > 0) {
    infoText = `<b>${cartridges}</b> ${cartridgesStr}`;
  }

  ui.cartridgeResultValue.innerHTML = infoText;
}

// --- UTILITIES ---

/**
 * Displays an error message in a specified element.
 * @param {string} messageKey - The key from the translations object.
 * @param {HTMLElement} errorAreaElement - The DOM element to show the error in.
 */
function showError(messageKey, errorAreaElement) {
  if (!errorAreaElement) return;
  let text = translations[state.currentLanguage][messageKey] ||
    "An unknown error occurred.";
  if (state.currentLanguage === 'en') {
    text = toTitleCase(text);
  }
  errorAreaElement.textContent = text;
  errorAreaElement.classList.remove("hidden");
}

/**
 * Synchronizes a number input field with a range slider (Integers).
 */
function syncSliderInt(
  numberInput,
  slider,
  defaultVal,
  min,
  max,
  onBlur = false
) {
  let valStr = numberInput.value.replace(/[^0-9]/g, "");
  let val;

  if (valStr === "") {
    if (onBlur) {
      val = defaultVal;
      valStr = defaultVal.toString();
    } else {
      if (slider) slider.value = min;
      if (numberInput.value !== valStr) numberInput.value = valStr;
      return;
    }
  }

  val = parseInt(valStr);

  if (isNaN(val)) {
    if (onBlur) {
      val = defaultVal;
      valStr = defaultVal.toString();
    } else {
      if (slider) slider.value = min;
      if (numberInput.value !== valStr) numberInput.value = valStr;
      return;
    }
  }

  if (val < min) {
    if (onBlur) {
      val = min;
      valStr = val.toString();
    }
  }

  if (val > max) {
    val = max;
    valStr = val.toString();
  }

  if (numberInput.value !== valStr) {
    numberInput.value = valStr;
  }

  if (slider) slider.value = val;
}

/**
 * Synchronizes a number input field with a range slider (Floats).
 * @param {HTMLInputElement} numberInput - The number input element.
 * @param {HTMLInputElement} slider - The range slider element.
 ** @param {number} defaultVal - The default value.
 * @param {number} min - The minimum allowed value.
 * @param {number} max - The maximum allowed value.
 * @param {boolean} [onBlur=false] - Is this function called on blur.
 * @param {number} [step=0.1] - The step value for rounding.
 */
function syncSliderFloat(
  numberInput,
  slider,
  defaultVal,
  min,
  max,
  onBlur = false,
  step = 0.1
) {
  let valStr = numberInput.value.replace(/[^0-9.]/g, "");
  const dotIndex = valStr.indexOf(".");
  if (dotIndex > -1) {
    valStr =
      valStr.substring(0, dotIndex + 1) +
      valStr.substring(dotIndex + 1).replace(/\./g, "");
  }

  if (numberInput.value !== valStr && !onBlur) {
    numberInput.value = valStr;
  }

  let val = parseFloat(valStr);

  if (isNaN(val)) {
    if (onBlur) {
      val = defaultVal;
      numberInput.value = val.toString();
    } else {
      if (slider) slider.value = min;
      return;
    }
  }

  // Clamp min/max
  if (val < min) {
    if (onBlur) {
      val = min;
    } else {
      // Don't auto-correct to min on input, just let validation handle it
    }
  }

  if (val > max) {
    val = max;
  }

  // If on blur, round and format
  if (onBlur) {
    val = Math.round(val / step) * step;
    val = parseFloat(val.toFixed(1)); // Ensure one decimal place
    numberInput.value = val.toString();
  }

  // Update slider
  if (slider) slider.value = val;
}

// --- INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  // Map all UI elements
  ui = {
    // App Structure
    appContainer: document.querySelector(".app-container"),
    topBar: document.querySelector(".app-top-bar"),
    viewingArea: document.getElementById("viewingArea"),
    interactionArea: document.getElementById("pageContainer"),
    pageStorage: document.getElementById("pageStorage"),
    bottomActionBar: document.getElementById("bottomActionBar"),

    // Header
    headerLogo: document.getElementById("headerLogo"),
    headerTitle: document.getElementById("headerTitle"),
    headerStep: document.getElementById("headerStep"),
    headerBackButton: document.getElementById("headerBackButton"),

    // Language/Hub Pages
    languagePage: document.getElementById("languagePage"),
    hubPage: document.getElementById("hubPage"),
    cataloguePage: document.getElementById("cataloguePage"),
    selectLangEnButton: document.getElementById("selectLangEn"),
    selectLangArButton: document.getElementById("selectLangAr"),
    selectAnchorCalculatorButton: document.getElementById(
      "selectAnchorCalculator"
    ),
    selectCatalogueButton: document.getElementById("selectCatalogue"),
    selectSealantCalculatorButton: document.getElementById(
      "selectSealantCalculator"
    ),

    // Anchor Calculator Pages
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
    continueToCalcButton: document.getElementById("continueToCalcButton"),
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

    // Anchor Wastage
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
    fillDepthNote: document.getElementById("fillDepthNote"), // ADDED
    rebarCountSection: document.getElementById("rebarCountSection"),
    rebarCountSlider: document.getElementById("rebarCountSlider"),
    rebarCountValue: document.getElementById("rebarCountValue"),
    totalResultArea: document.getElementById("totalResultArea"),
    totalVolumeDisplay: document.getElementById("totalVolumeDisplay"),
    totalCartridgeInfo: document.getElementById("totalCartridgeInfo"),
    cartridgeResultValue: document.getElementById("cartridgeResultValue"),
    anchorStartOver: document.getElementById("anchorStartOver"),

    // NEW: Sealant Calculator UI
    sealantProductPage: document.getElementById("sealantProductPage"), // RENAMED
    sealantDimensionsPage: document.getElementById("sealantDimensionsPage"), // NEW
    sealantResultPage: document.getElementById("sealantResultPage"), // NEW

    sealantProductPU40: document.getElementById("sealantProductPU40"),
    sealantProductGG: document.getElementById("sealantProductGG"),
    sealantProductPG: document.getElementById("sealantProductPG"),
    sealantSubstrateSection: document.getElementById("sealantSubstrateSection"),
    sealantSubstratePorous: document.getElementById("sealantSubstratePorous"),
    sealantSubstrateNonPorous: document.getElementById("sealantSubstrateNonPorous"),

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
    sealantDimErrorArea: document.getElementById("sealantDimErrorArea"), // RENAMED

    sealantTotalResultArea: document.getElementById("sealantTotalResultArea"),
    sealantTotalVolume: document.getElementById("sealantTotalVolume"),
    sealantWastageNote: document.getElementById("sealantWastageNote"),
    sealantPackagesLabel: document.getElementById("sealantPackagesLabel"),
    sealantPackagesResultValue: document.getElementById("sealantPackagesResultValue"),

    // NEW: Sealant Result Page Criteria/Wastage
    sealantCriteriaSection: document.getElementById("sealantCriteriaSection"),
    sealantDisplayProduct: document.getElementById("sealantDisplayProduct"),
    sealantDisplaySubstrateContainer: document.getElementById("sealantDisplaySubstrateContainer"),
    sealantDisplaySubstrate: document.getElementById("sealantDisplaySubstrate"),
    sealantDisplayWidth: document.getElementById("sealantDisplayWidth"),
    sealantDisplayDepth: document.getElementById("sealantDisplayDepth"),
    sealantDisplayLength: document.getElementById("sealantDisplayLength"),
    sealantEditCriteriaButton: document.getElementById("sealantEditCriteriaButton"),
    sealantWastageSection: document.getElementById("sealantWastageSection"),
    sealantToggleWastageButton: document.getElementById("sealantToggleWastageButton"),
    sealantWastageCustomizationSection: document.getElementById("sealantWastageCustomizationSection"),
    sealantWastageSlider: document.getElementById("sealantWastageSlider"),
    sealantWastageValue: document.getElementById("sealantWastageValue"),


    // NEW: Bottom Bar Buttons
    sealantContinueToDims: document.getElementById("sealantContinueToDims"),
    sealantCalculateButton: document.getElementById("sealantCalculateButton"),
    sealantStartOver: document.getElementById("sealantStartOver")
  };

  // Initialize global states
  state = {
    // Anchor
    product: "",
    rebarSize: "",
    rebarText: "",
    holeSize: "",
    depth: "",
    volumePerAnchor: 0,
    wastagePercent: 45,
    // Sealant (NEW)
    sealantProduct: "Nitoseal PU40",
    sealantSubstrate: "porous",
    sealantVolumeLitres: 0,
    sealantDepthLinked: true,
    sealantWastagePercent: 20, // Default for PU40
    sealantWastageCustomized: false,
    // General
    currentLanguage: "en",
  };

  // --- Attach Event Listeners ---

  // Hub Listeners
  ui.selectLangEnButton.addEventListener("click", () => {
    setLanguage("en");
    showPage("hubPage", {
      titleKey: "selectTool",
      backPage: "languagePage"
    });
  });
  ui.selectLangArButton.addEventListener("click", () => {
    setLanguage("ar");
    showPage("hubPage", {
      titleKey: "selectTool",
      backPage: "languagePage"
    });
  });

  ui.headerBackButton.addEventListener("click", () => {
    const backPageId = ui.headerBackButton.dataset.page;
    if (backPageId) {
      navigateBack(backPageId);
    }
  });

  // --- Hub Nav Listeners ---
  ui.selectAnchorCalculatorButton.addEventListener("click", () => {
    resetCalculator();
    showPage("selectionPage", {
      titleKey: "anchorCalculator",
      stepKey: "chooseApplicationType",
      backPage: "hubPage"
    });
  });
  ui.selectCatalogueButton.addEventListener("click", () => {
    showPage("cataloguePage", {
      titleKey: "materialCatalogue",
      stepKey: "comingSoon",
      backPage: "hubPage"
    });
  });
  // MODIFIED: Sealant button listener
  ui.selectSealantCalculatorButton.addEventListener("click", () => {
    resetSealantCalculator();
    showPage("sealantProductPage", {
      titleKey: "sealantProductPageTitle",
      stepKey: "sealantProductPageStep",
      backPage: "hubPage"
    });
  });


  // --- Anchor Calc Listeners ---
  ui.selectE77Button.addEventListener("click", () => selectProduct("E77"));
  ui.selectE55Button.addEventListener("click", () => selectProduct("E55"));

  ui.rebarGrid.addEventListener("click", (e) => {
    const button = e.target.closest(".rebar-btn");
    if (button) {
      state.rebarSize = button.dataset.value;
      state.rebarText = button.textContent;
      ui.hiddenRodDiameterInput.value = state.rebarSize;

      let defaultWastage = 45;
      if (
        state.rebarSize === "8" ||
        state.rebarSize === "10" ||
        state.rebarSize === "12"
      ) {
        defaultWastage = 50;
      }
      state.wastagePercent = defaultWastage;

      ui.rebarGrid
        .querySelectorAll(".btn-select")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      if (state.product === "E77") {
        setupHolePage(state.rebarSize);
        showPage("holePage", {
          titleKey: "selectHoleDiameter",
          stepKey: "forLokfixE77",
          backPage: "rebarPage"
        });
      } else {
        const rebarSize = state.rebarSize;
        const e55Data = e55FixedData[rebarSize];

        if (e55Data) {
          state.holeSize = e55Data.hole;
          state.depth = e55Data.depth;
          setupCalculatorForm();
          showPage("calculatorPage", {
            titleKey: "volumeCalculator",
            backPage: "rebarPage"
          });
          runPerAnchorCalculation();
        }
      }
    }
  });

  ui.holeGrid.addEventListener("click", (e) => {
    const button = e.target.closest(".hole-btn");
    if (button) {
      state.holeSize = button.dataset.value;
      ui.holeGrid
        .querySelectorAll(".btn-select")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      setupDepthSlider(state.rebarSize);
      showPage("depthPage", {
        titleKey: "selectEmbedmentDepth",
        stepKey: "forLokfixE77",
        backPage: "holePage"
      });
    }
  });

  // Anchor Wastage button and slider listeners
  ui.toggleWastageButton.addEventListener("click", () => {
    ui.wastageCustomizationSection.classList.toggle("hidden");
  });

  ui.wastageSlider.addEventListener("input", (e) => {
    ui.wastageValue.value = e.target.value;
    state.wastagePercent = parseInt(e.target.value, 10);
    if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation();
  });

  ui.wastageValue.addEventListener("input", (e) => {
    syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100);
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      state.wastagePercent = val;
      if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation();
    }
  });

  ui.wastageValue.addEventListener("blur", (e) => {
    syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100, true);
    state.wastagePercent = parseInt(e.target.value, 10);
    if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation();
  });

  ui.depthSlider.addEventListener("input", (e) => {
    ui.depthValue.value = e.target.value;
  });
  ui.depthValue.addEventListener("input", (e) => {
    const min = parseInt(ui.depthSlider.min);
    const max = parseInt(ui.depthSlider.max);
    syncSliderFloat(e.target, ui.depthSlider, min, min, max);
  });
  ui.depthValue.addEventListener("blur", (e) => {
    const min = parseInt(ui.depthSlider.min);
    const max = parseInt(ui.depthSlider.max);
    syncSliderFloat(e.target, ui.depthSlider, min, min, max, true);
  });
  ui.continueToCalcButton.addEventListener("click", () => {
    state.depth = ui.depthValue.value;
    setupCalculatorForm();

    let backPageId = state.product === "E77" ? "depthPage" : "rebarPage";
    showPage("calculatorPage", {
      titleKey: "volumeCalculator",
      backPage: backPageId
    });

    runPerAnchorCalculation();
  });

  ui.rebarCountSlider.addEventListener("input", (e) => {
    ui.rebarCountValue.value = e.target.value;
    if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation();
  });
  ui.rebarCountValue.addEventListener("input", (e) => {
    syncSliderInt(e.target, ui.rebarCountSlider, 1, 1, 500);
    if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation();
  });
  ui.rebarCountValue.addEventListener("blur", (e) => {
    syncSliderInt(e.target, ui.rebarCountSlider, 1, 1, 500, true);
    if (!ui.resultArea.classList.contains("hidden")) updateTotalCalculation();
  });

  ui.anchorStartOver.addEventListener("click", () => {
    resetCalculator();
    showPage("selectionPage", {
      titleKey: "anchorCalculator",
      stepKey: "chooseApplicationType",
      backPage: "hubPage"
    });
  });

  // --- NEW: Sealant Calc Listeners ---

  // Page 1: Product
  ui.sealantProductPU40.addEventListener("click", () => selectSealantProduct("Nitoseal PU40"));
  ui.sealantProductGG.addEventListener("click", () => selectSealantProduct("Thioflex 600 GG"));
  ui.sealantProductPG.addEventListener("click", () => selectSealantProduct("Thioflex 600 PG"));
  ui.sealantSubstratePorous.addEventListener("click", () => selectSealantSubstrate("porous"));
  ui.sealantSubstrateNonPorous.addEventListener("click", () => selectSealantSubstrate("non-porous"));
  ui.sealantContinueToDims.addEventListener("click", () => {
    showPage("sealantDimensionsPage", {
      titleKey: "sealantDimsPageTitle",
      stepKey: "sealantDimsPageStep",
      backPage: "sealantProductPage"
    });
  });

  // Page 2: Dimensions
  ui.sealantLinkToggle.addEventListener("click", toggleSealantLink);
  ui.sealantCalculateButton.addEventListener("click", () => runSealantCalculation(true));

  // Width slider sync
  ui.sealantJointWidthSlider.addEventListener("input", (e) => {
    ui.sealantJointWidth.value = e.target.value;
    handleSealantWidthInput(true); // Force depth update
  });
  ui.sealantJointWidth.addEventListener("input", (e) => {
    const min = parseFloat(e.target.min) || 5;
    syncSliderFloat(e.target, ui.sealantJointWidthSlider, min, min, 50, false, 0.5);
    handleSealantWidthInput(true); // Force depth update
  });
  ui.sealantJointWidth.addEventListener("blur", (e) => {
    const min = parseFloat(e.target.min) || 5;
    syncSliderFloat(e.target, ui.sealantJointWidthSlider, min, min, 50, true, 0.5);
    handleSealantWidthInput(true); // Force depth update
  });

  // Depth slider sync (only if unlinked)
  ui.sealantJointDepthSlider.addEventListener("input", (e) => {
    if (!state.sealantDepthLinked) {
      ui.sealantJointDepth.value = e.target.value;
      updateSealantGuidance();
    }
  });
  ui.sealantJointDepth.addEventListener("input", (e) => {
    if (!state.sealantDepthLinked) {
      const min = parseFloat(e.target.min) || 5;
      const max = parseFloat(e.target.max) || 50;
      syncSliderFloat(e.target, ui.sealantJointDepthSlider, min, min, max, false, 0.5);
      updateSealantGuidance();
    }
  });
  ui.sealantJointDepth.addEventListener("blur", (e) => {
    if (!state.sealantDepthLinked) {
      const min = parseFloat(e.target.min) || 5;
      const max = parseFloat(e.target.max) || 50;
      syncSliderFloat(e.target, ui.sealantJointDepthSlider, min, min, max, true, 0.5);
      updateSealantGuidance();
    }
  });

  // Page 3: Results
  ui.sealantEditCriteriaButton.addEventListener("click", () => {
    navigateBack("sealantDimensionsPage");
  });
  ui.sealantToggleWastageButton.addEventListener("click", () => {
    ui.sealantWastageCustomizationSection.classList.toggle("hidden");
  });

  ui.sealantWastageSlider.addEventListener("input", (e) => {
    ui.sealantWastageValue.value = e.target.value;
    state.sealantWastagePercent = parseInt(e.target.value, 10);
    state.sealantWastageCustomized = true;
    runSealantCalculation(false); // Re-run calc, do not navigate
  });
  ui.sealantWastageValue.addEventListener("input", (e) => {
    const min = 10;
    const max = 100;
    const def = 15;
    syncSliderInt(e.target, ui.sealantWastageSlider, def, min, max);
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      state.sealantWastagePercent = val;
      state.sealantWastageCustomized = true;
      runSealantCalculation(false); // Re-run calc, do not navigate
    }
  });
  ui.sealantWastageValue.addEventListener("blur", (e) => {
    const min = 10;
    const max = 100;
    const def = 15;
    syncSliderInt(e.target, ui.sealantWastageSlider, def, min, max, true);
    state.sealantWastagePercent = parseInt(e.target.value, 10);
    state.sealantWastageCustomized = true;
    runSealantCalculation(false); // Re-run calc, do not navigate
  });


  // General "Start Over" for Sealant
  ui.sealantStartOver.addEventListener("click", () => {
    // Simple navigation back to hub, which will reset
    navigateBack("hubPage");
  });


  // --- App Init ---
  resetCalculator();
  resetSealantCalculator();
  setLanguage("en"); // Set default language
  showPage("languagePage", {
    showLogo: true,
    titleKey: "welcome"
  });
});