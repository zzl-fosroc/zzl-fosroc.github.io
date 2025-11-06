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
    anchorCalculator: "حاسبة مواد التثبيت",
    anchorDescription: "احسب كمية الريزين لـ Lokfix E55 و E77.",
    materialCatalogue: "كتالوج المواد",
    comingSoon: "قريباً",
    featureInProgress: "هذه الميزة قيد التطوير حالياً.",
    back: "رجوع",
    results: "النتائج",
    criteriaForResults: "معايير النتيجة",

    // Sealant Calculator Keys
    sealantCalculator: "حاسبة كمية السيلانت",
    sealantDescription: "تقدير متطلبات سيلانت الفواصل.",

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
    estimateResinVolume: "تقدير حجم الريزين المطلوب.",
    rebar: "حديد التسليح",
    holeDiameter: "قطر الثقب",
    embedmentDepth: "عمق التثبيت",
    embedmentDepthHoleDepth: "عمق التثبيت / عمق الثقب",
    holeDiameterPlaceholder: "مثال: 16",
    holeDepthPlaceholder: "مثال: 125",
    netVolumePerAnchor: "الحجم الصافي (لكل مثبت):",
    volumeRequiredPerAnchor: "إجمالي الحجم (لكل مثبت):",
    numberOfRebars: "عدد أسياخ الحديد",
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

// ANCHOR CALC
const CARTRIDGE_SIZES = {
  E77: [585],
  E55: [300]
};
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

  let showBar = false;

  switch (pageId) {
    case "depthPage":
      if (ui.continueToCalcButton)
        ui.continueToCalcButton.classList.remove("hidden");
      showBar = true;
      break;
    case "calculatorPage":
      if (ui.anchorStartOver) ui.anchorStartOver.classList.remove("hidden");
      showBar = true;
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
      showPage("languagePage", { showLogo: true, titleKey: "welcome" });
      break;
    case "hubPage":
      showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" });
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
  if (!data) data = { min: 50, max: 500 };

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
 */
function syncSliderFloat(
  numberInput,
  slider,
  defaultVal,
  min,
  max,
  onBlur = false
) {
  let valStr = numberInput.value.replace(/[^0-9.]/g, "");
  const dotIndex = valStr.indexOf(".");
  if (dotIndex > -1) {
    valStr =
      valStr.substring(0, dotIndex + 1) +
      valStr.substring(dotIndex + 1).replace(/\./g, "");
  }

  if (numberInput.value !== valStr) {
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

  if (val < min) {
    if (onBlur) {
      val = min;
      numberInput.value = val.toString();
    }
  }

  if (val > max) {
    val = max;
    numberInput.value = val.toString();
  }

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
    
    // ADDED: Wastage UI elements
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
    anchorStartOver: document.getElementById("anchorStartOver")
  };

  // Initialize global states
  state = {
    product: "",
    rebarSize: "",
    rebarText: "",
    holeSize: "",
    depth: "",
    volumePerAnchor: 0, // MODIFIED: This now stores THEORETICAL volume
    currentLanguage: "en",
    wastagePercent: 45 // MODIFIED: Wastage state default to 45
  };

  // --- Attach Event Listeners ---

  // Hub Listeners
  ui.selectLangEnButton.addEventListener("click", () => {
    setLanguage("en");
    showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" });
  });
  ui.selectLangArButton.addEventListener("click", () => {
    setLanguage("ar");
    showPage("hubPage", { titleKey: "selectTool", backPage: "languagePage" });
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
  ui.selectSealantCalculatorButton.addEventListener("click", () => {
    showPage("cataloguePage", {
      titleKey: "sealantCalculator",
      stepKey: "comingSoon",
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

      let defaultWastage = 45; // MODIFIED: Default wastage is now 45%
      if (
        state.rebarSize === "8" ||
        state.rebarSize === "10" ||
        state.rebarSize === "12"
      ) {
        defaultWastage = 50;
      }
      // MODIFIED: Set wastage in state
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

  // ADDED: Wastage button and slider listeners
  ui.toggleWastageButton.addEventListener("click", () => {
    ui.wastageCustomizationSection.classList.toggle("hidden");
  });

  ui.wastageSlider.addEventListener("input", (e) => {
    ui.wastageValue.value = e.target.value;
    state.wastagePercent = parseInt(e.target.value, 10);
    if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); // Recalculate
  });

  ui.wastageValue.addEventListener("input", (e) => {
    syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100); // MODIFIED: Default to 45
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      state.wastagePercent = val;
      if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); // Recalculate
    }
  });

  ui.wastageValue.addEventListener("blur", (e) => {
    syncSliderInt(e.target, ui.wastageSlider, 45, 10, 100, true); // MODIFIED: Default to 45
    state.wastagePercent = parseInt(e.target.value, 10);
    if (!ui.resultArea.classList.contains("hidden")) runPerAnchorCalculation(); // Recalculate
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

  // --- App Init ---
  resetCalculator();
  setLanguage("en"); // Set default language
  showPage("languagePage", { showLogo: true, titleKey: "welcome" });
});