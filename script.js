/* =====================================================
   GINGERMITRA JAVASCRIPT
===================================================== */


/* =====================================================
   GLOBAL DATA
===================================================== */

let currentLanguage =
    localStorage.getItem("gingerLanguage") || "kn";


let iotData = {

    moisture: 42,

    n: 68,

    p: 56,

    k: 72,

    updatedAt: new Date()

};


let motorState = "OFF";

let currentWeather = null;

let selectedCropImage = null;


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    kn: {

        smartFarming: "Smart Farming",

        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

        weather: "ಹವಾಮಾನ",

        cropDoctor: "ಬೆಳೆ ವೈದ್ಯ",

        farmingGuide: "ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ",

        assistant: "ಜಿಂಜರ್ ಸಹಾಯಕ",

        market: "ನೇರ ಮಾರುಕಟ್ಟೆ",

        needHelp: "ಸಹಾಯ ಬೇಕೇ?",

        helpText:
            "ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",

        askAssistant:
            "ಸಹಾಯಕರನ್ನು ಕೇಳಿ",

        systemOnline:
            "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್",

        smartGingerFarming:
            "ಸ್ಮಾರ್ಟ್ ಶುಂಠಿ ಕೃಷಿ",

        welcomeTitle:
            "ನಿಮ್ಮ ಶುಂಠಿ ಕೃಷಿಯನ್ನು ಸ್ಮಾರ್ಟ್ ಆಗಿ ನಿರ್ವಹಿಸಿ",

        welcomeText:
            "ಹವಾಮಾನ, ಮಣ್ಣು, ನೀರಾವರಿ, ಬೆಳೆ ಆರೋಗ್ಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",

        askGingerAssistant:
            "ಜಿಂಜರ್ ಸಹಾಯಕರನ್ನು ಕೇಳಿ",

        overview:
            "ಅವಲೋಕನ",

        todayOverview:
            "ಇಂದಿನ ಕೃಷಿ ಸ್ಥಿತಿ",

        tomorrowWeather:
            "ನಾಳೆಯ ಹವಾಮಾನ",

        cropHealth:
            "ಬೆಳೆ ಆರೋಗ್ಯ",

        uploadCrop:
            "ಚಿತ್ರದ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ",

        aiAssistant:
            "AI ಸಹಾಯಕ",

        askQuestion:
            "ಪ್ರಶ್ನೆ ಕೇಳಿ",

        farmingAdvice:
            "ಕೃಷಿ ಸಲಹೆ ಪಡೆಯಿರಿ",

        directMarket:
            "ನೇರ ಮಾರುಕಟ್ಟೆ",

        sellDirect:
            "ನೇರವಾಗಿ ಮಾರಾಟ",

        contactBuyers:
            "ಖರೀದಿದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ",

        iotMonitoring:
            "IoT ಮಾನಿಟರಿಂಗ್",

        farmSensors:
            "ಫಾರ್ಮ್ ಸೆನ್ಸರ್‌ಗಳು",

        refreshSensor:
            "ಸೆನ್ಸರ್ ರಿಫ್ರೆಶ್",

        soilMoisture:
            "ಮಣ್ಣಿನ ತೇವಾಂಶ",

        soilNutrients:
            "ಮಣ್ಣಿನ ಪೋಷಕಾಂಶ",

        npkSensor:
            "NPK ಸೆನ್ಸರ್",

        average:
            "ಸರಾಸರಿ",

        soilHealth:
            "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",

        iotReading:
            "IoT ಸೆನ್ಸರ್ ರೀಡಿಂಗ್",

        lastUpdated:
            "ಕೊನೆಯ ಅಪ್‌ಡೇಟ್",

        motorControl:
            "ಮೋಟಾರ್ ನಿಯಂತ್ರಣ",

        currentMotorStatus:
            "ಪ್ರಸ್ತುತ ಮೋಟಾರ್ ಸ್ಥಿತಿ",

        motorOnRule:
            "ಮೋಟಾರ್ ON",

        motorHoldRule:
            "ಹಿಂದಿನ ಸ್ಥಿತಿ",

        motorOffRule:
            "ಮೋಟಾರ್ OFF",

        autoMode:
            "ಸ್ವಯಂ ಮೋಡ್",

        updated:
            "ಅಪ್‌ಡೇಟ್",

        sensorDemo:
            "IoT ಸೆನ್ಸರ್ ಡೆಮೊ",

        sensorDemoText:
            "ನಿಜವಾದ ESP32 ಸಂಪರ್ಕ ಇಲ್ಲದಾಗ ಪರೀಕ್ಷಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಬಳಸಿ.",

        dry:
            "ಒಣ ಮಣ್ಣು",

        normal:
            "ಸಾಮಾನ್ಯ",

        wet:
            "ತೇವ ಮಣ್ಣು",

        weatherTitle:
            "ಶುಂಠಿ ಕೃಷಿಗಾಗಿ ಹವಾಮಾನ",

        weatherSubtitle:
            "ನಿಮ್ಮ ಸ್ಥಳದ ನಾಳೆಯ ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಿ.",

        getForecast:
            "ಮುನ್ಸೂಚನೆ ಪಡೆಯಿರಿ",

        myLocation:
            "ನನ್ನ ಸ್ಥಳ",

        loadingWeather:
            "ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯಲಾಗುತ್ತಿದೆ...",

        tomorrow:
            "ನಾಳೆ",

        rainChance:
            "ಮಳೆಯ ಸಾಧ್ಯತೆ",

        rainfall:
            "ಮಳೆಯ ಪ್ರಮಾಣ",

        wind:
            "ಗಾಳಿ",

        sprayingAdvice:
            "ಸಿಂಪಡಣೆ ಸಲಹೆ",

        listen:
            "ಕೇಳಿ",

        manualWeather:
            "ತಾಪಮಾನ ಆಧಾರಿತ ತ್ವರಿತ ಸಲಹೆ",

        manualWeatherText:
            "ತಾಪಮಾನವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಸಾಮಾನ್ಯ ಸಲಹೆ ಪಡೆಯಿರಿ.",

        check:
            "ಪರಿಶೀಲಿಸಿ",

        cropDoctorTitle:
            "ನಿಮ್ಮ ಶುಂಠಿ ಬೆಳೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",

        cropDoctorSubtitle:
            "ಎಲೆಯ ಅಥವಾ ಶುಂಠಿಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",

        uploadImage:
            "ಚಿತ್ರದ ಅಪ್‌ಲೋಡ್",

        clickUpload:
            "ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಿ",

        analyzeCrop:
            "ಬೆಳೆ ಪರಿಶೀಲಿಸಿ",

        analysisResult:
            "ಪರಿಶೀಲನೆಯ ಫಲಿತಾಂಶ",

        uploadFirst:
            "ಮೊದಲು ಬೆಳೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",

        demoNote:
            "ಡೆಮೊ ಸೂಚನೆ",

        cropDemoText:
            "ಇದು frontend demo. ನಿಜವಾದ ರೋಗ ಪತ್ತೆಗಾಗಿ machine-learning model ಅಥವಾ image-analysis API ಅನ್ನು ಸಂಪರ್ಕಿಸಬೇಕು.",

        guideTitle:
            "ಶುಂಠಿ ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ",

        guideSubtitle:
            "ಹಂತ ಹಂತವಾಗಿ ಶುಂಠಿ ಬೆಳೆಯುವ ಮಾಹಿತಿ.",

        soilPreparation:
            "ಮಣ್ಣಿನ ಸಿದ್ಧತೆ",

        soilPreparationText:
            "ಉತ್ತಮ ನೀರು ಹರಿದುಹೋಗುವ ವ್ಯವಸ್ಥೆಯಿರುವ ಸಡಿಲ ಮಣ್ಣು ಆಯ್ಕೆ ಮಾಡಿ. ಮಣ್ಣನ್ನು ಚೆನ್ನಾಗಿ ಉಳುಮೆ ಮಾಡಿ ಸಾವಯವ ಗೊಬ್ಬರ ಸೇರಿಸಿ.",

        planting:
            "ನೆಡುವಿಕೆ",

        plantingText:
            "ಆರೋಗ್ಯಕರ ಬೀಜ ಶುಂಠಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸೂಕ್ತ ಅಂತರದಲ್ಲಿ ಬೀಜ ತುಂಡುಗಳನ್ನು ನೆಡಿ.",

        irrigation:
            "ನೀರಾವರಿ",

        irrigationText:
            "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಗಮನಿಸಿ. ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ ಮತ್ತು ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ನೀರು ನೀಡಿ.",

        fertilizer:
            "ಗೊಬ್ಬರ ಮತ್ತು NPK",

        fertilizerText:
            "ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ನೈಟ್ರೋಜನ್, ಫಾಸ್ಫರಸ್ ಮತ್ತು ಪೊಟ್ಯಾಸಿಯಂ ಬಳಸಿ.",

        disease:
            "ರೋಗ ಮತ್ತು ಕೀಟ",

        diseaseText:
            "ಎಲೆಗಳ ಬಣ್ಣ ಬದಲಾವಣೆ, ಕೊಳೆತ ಅಥವಾ ಕೀಟಗಳ ಲಕ್ಷಣಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",

        harvest:
            "ಕೊಯ್ಲು",

        harvestText:
            "ಎಲೆಗಳು ಹಳದಿಯಾಗಲು ಪ್ರಾರಂಭಿಸಿದಾಗ ಮತ್ತು ಬೆಳೆ ಪರಿಪಕ್ವವಾದಾಗ ಕೊಯ್ಲು ಮಾಡಿ.",

        storage:
            "ಸಂಗ್ರಹಣೆ",

        storageText:
            "ಶುಂಠಿಯನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಒಣಗಿಸಿ ಮತ್ತು ತಂಪಾದ ಗಾಳಿಯಾಡುವ ಸ್ಥಳದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.",

        marketGuide:
            "ಮಾರುಕಟ್ಟೆ",

        marketGuideText:
            "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಸಾಧ್ಯವಾದರೆ ಖರೀದಿದಾರರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.",

        assistantTitle:
            "ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ",

        assistantSubtitle:
            "ಶುಂಠಿ ಕೃಷಿಯ ಬಗ್ಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿ.",

        online:
            "Online",

        assistantWelcome:
            "ನಮಸ್ಕಾರ! 🌱 ನಾನು GingerMitra ಸಹಾಯಕ. ಶುಂಠಿ ಕೃಷಿ, ನೀರಾವರಿ, ರೋಗ, NPK ಮತ್ತು ಹವಾಮಾನದ ಬಗ್ಗೆ ಕೇಳಬಹುದು.",

        quickWeather:
            "ನಾಳೆ ಹವಾಮಾನ?",

        quickWater:
            "ನೀರಾವರಿ",

        quickDisease:
            "ರೋಗಗಳು",

        quickNPK:
            "NPK",

        directContact:
            "ನೇರ ಸಂಪರ್ಕ",

        marketHelp:
            "ಶುಂಠಿ ಮಾರಾಟ / ಖರೀದಿ",

        callDescription:
            "ಶುಂಠಿ ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಮಾರಾಟದ ಕುರಿತು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.",

        callNow:
            "ಕರೆ ಮಾಡಿ",

        marketTitle:
            "ಖರೀದಿದಾರರನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ",

        marketSubtitle:
            "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುವ ಡೆಮೊ ಮಾರುಕಟ್ಟೆ ವಿಭಾಗ.",

        demoBuyers:
            "ಡೆಮೊ ಖರೀದಿದಾರರು",

        freshGinger:
            "ತಾಜಾ ಶುಂಠಿ ಖರೀದಿ",

        gingerSupplier:
            "ಶುಂಠಿ ಪೂರೈಕೆ",

        agroBuyer:
            "ಕೃಷಿ ಉತ್ಪನ್ನ ಖರೀದಿದಾರ",

        farmBuyer:
            "ರೈತರಿಂದ ನೇರ ಖರೀದಿ",

        contact:
            "ಸಂಪರ್ಕಿಸಿ",

        marketDemoNote:
            "ಮೇಲಿನ ಖರೀದಿದಾರರ ವಿವರಗಳು frontend demo ಗಾಗಿ ಮಾತ್ರ. ನಿಜವಾದ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕಗಳನ್ನು ನಂತರ backend/database ಮೂಲಕ ಸೇರಿಸಬಹುದು.",

        footerText:
            "Smart Ginger Farming Platform"

    },


    en: {

        smartFarming: "Smart Farming",

        dashboard: "Dashboard",

        weather: "Weather",

        cropDoctor: "Crop Doctor",

        farmingGuide: "Farming Guide",

        assistant: "Ginger Assistant",

        market: "Direct Market",

        needHelp: "Need Help?",

        helpText:
            "Ask questions related to ginger farming.",

        askAssistant:
            "Ask Assistant",

        systemOnline:
            "System Online",

        smartGingerFarming:
            "Smart Ginger Farming",

        welcomeTitle:
            "Manage your ginger farm smarter",

        welcomeText:
            "Monitor weather, soil, irrigation, crop health and market connections in one place.",

        askGingerAssistant:
            "Ask Ginger Assistant",

        overview:
            "Overview",

        todayOverview:
            "Today's Farm Status",

        tomorrowWeather:
            "Tomorrow's Weather",

        cropHealth:
            "Crop Health",

        uploadCrop:
            "Check using image",

        aiAssistant:
            "AI Assistant",

        askQuestion:
            "Ask a Question",

        farmingAdvice:
            "Get farming advice",

        directMarket:
            "Direct Market",

        sellDirect:
            "Sell Directly",

        contactBuyers:
            "Contact buyers",

        iotMonitoring:
            "IoT Monitoring",

        farmSensors:
            "Farm Sensors",

        refreshSensor:
            "Refresh Sensor",

        soilMoisture:
            "Soil Moisture",

        soilNutrients:
            "Soil Nutrients",

        npkSensor:
            "NPK Sensor",

        average:
            "Average",

        soilHealth:
            "Soil Health",

        iotReading:
            "IoT Sensor Reading",

        lastUpdated:
            "Last Updated",

        motorControl:
            "Motor Control",

        currentMotorStatus:
            "Current Motor Status",

        motorOnRule:
            "Motor ON",

        motorHoldRule:
            "Keep Previous",

        motorOffRule:
            "Motor OFF",

        autoMode:
            "Auto Mode",

        updated:
            "Updated",

        sensorDemo:
            "IoT Sensor Demo",

        sensorDemoText:
            "Use the buttons below to test the system without a real ESP32 connection.",

        dry:
            "Dry Soil",

        normal:
            "Normal",

        wet:
            "Wet Soil",

        weatherTitle:
            "Weather for Ginger Farming",

        weatherSubtitle:
            "Check tomorrow's weather for your location.",

        getForecast:
            "Get Forecast",

        myLocation:
            "My Location",

        loadingWeather:
            "Getting weather information...",

        tomorrow:
            "Tomorrow",

        rainChance:
            "Rain Chance",

        rainfall:
            "Rainfall",

        wind:
            "Wind",

        sprayingAdvice:
            "Spraying Advice",

        listen:
            "Listen",

        manualWeather:
            "Quick Temperature Advice",

        manualWeatherText:
            "Enter temperature to get general advice.",

        check:
            "Check",

        cropDoctorTitle:
            "Check Your Ginger Crop",

        cropDoctorSubtitle:
            "Upload a leaf or ginger crop image.",

        uploadImage:
            "Upload Image",

        clickUpload:
            "Click here and select an image",

        analyzeCrop:
            "Analyze Crop",

        analysisResult:
            "Analysis Result",

        uploadFirst:
            "Upload a crop image first.",

        demoNote:
            "Demo Note",

        cropDemoText:
            "This is a frontend demo. A machine-learning model or image-analysis API is required for real disease detection.",

        guideTitle:
            "Ginger Farming Guide",

        guideSubtitle:
            "Step-by-step information for growing ginger.",

        soilPreparation:
            "Soil Preparation",

        soilPreparationText:
            "Choose loose, well-drained soil. Prepare the soil properly and add organic manure.",

        planting:
            "Planting",

        plantingText:
            "Select healthy seed ginger and plant pieces with suitable spacing.",

        irrigation:
            "Irrigation",

        irrigationText:
            "Monitor soil moisture. Avoid waterlogging and irrigate according to crop needs.",

        fertilizer:
            "Fertilizer & NPK",

        fertilizerText:
            "Use nitrogen, phosphorus and potassium based on soil testing and local recommendations.",

        disease:
            "Disease & Pest",

        diseaseText:
            "Regularly check leaves for discoloration, rot and signs of pests.",

        harvest:
            "Harvest",

        harvestText:
            "Harvest when the leaves begin to yellow and the crop reaches maturity.",

        storage:
            "Storage",

        storageText:
            "Clean, dry and store ginger in a cool, well-ventilated place.",

        marketGuide:
            "Market",

        marketGuideText:
            "Compare market prices and connect directly with buyers when possible.",

        assistantTitle:
            "Your Farming Assistant",

        assistantSubtitle:
            "Ask questions about ginger farming.",

        online:
            "Online",

        assistantWelcome:
            "Hello! 🌱 I am the GingerMitra Assistant. You can ask me about ginger farming, irrigation, diseases, NPK and weather.",

        quickWeather:
            "Tomorrow weather?",

        quickWater:
            "Irrigation",

        quickDisease:
            "Diseases",

        quickNPK:
            "NPK",

        directContact:
            "Direct Contact",

        marketHelp:
            "Ginger Selling / Buying",

        callDescription:
            "Contact directly for ginger market or selling information.",

        callNow:
            "Call Now",

        marketTitle:
            "Connect Directly With Buyers",

        marketSubtitle:
            "A demo market section for connecting directly without middlemen.",

        demoBuyers:
            "Demo Buyers",

        freshGinger:
            "Fresh ginger buyer",

        gingerSupplier:
            "Ginger supply",

        agroBuyer:
            "Agricultural product buyer",

        farmBuyer:
            "Direct farmer buying",

        contact:
            "Contact",

        marketDemoNote:
            "The buyer details above are only for frontend demonstration. Real market contacts can be connected later through a backend/database.",

        footerText:
            "Smart Ginger Farming Platform"

    }

};


/* =====================================================
   LANGUAGE
===================================================== */

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "gingerLanguage",
        language
    );

    document.documentElement.lang =
        language === "kn" ? "kn" : "en";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (
                translations[language] &&
                translations[language][key]
            ) {

                element.textContent =
                    translations[language][key];

            }

        });


    document.getElementById("lang-kn")
        .classList.toggle(
            "active",
            language === "kn"
        );


    document.getElementById("lang-en")
        .classList.toggle(
            "active",
            language === "en"
        );


    updatePlaceholders();

    updateIoTDashboard();

    if (currentWeather) {

        displayWeather(currentWeather);

    }

}


function updatePlaceholders() {

    const city =
        document.getElementById("weatherCity");

    const assistant =
        document.getElementById("assistantInput");

    const temp =
        document.getElementById("manualTemp");


    if (city) {

        city.placeholder =
            currentLanguage === "kn"
                ? "ನಗರದ ಹೆಸರು ನಮೂದಿಸಿ"
                : "Enter city name";

    }


    if (assistant) {

        assistant.placeholder =
            currentLanguage === "kn"
                ? "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ..."
                : "Type your question here...";

    }


    if (temp) {

        temp.placeholder =
            currentLanguage === "kn"
                ? "ತಾಪಮಾನ °C"
                : "Temperature °C";

    }

}


document.getElementById("lang-kn")
    .addEventListener(
        "click",
        () => setLanguage("kn")
    );


document.getElementById("lang-en")
    .addEventListener(
        "click",
        () => setLanguage("en")
    );


/* =====================================================
   NAVIGATION
===================================================== */

function openPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });


    const selected =
        document.getElementById(pageId);


    if (selected) {

        selected.classList.add(
            "active-page"
        );

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === pageId
            );

        });


    document
        .querySelector(".main-content")
        .scrollTo?.({
            top: 0,
            behavior: "smooth"
        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    document
        .getElementById("sidebar")
        .classList.remove("open");

}


document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openPage(
                    button.dataset.page
                );

            }
        );

    });


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("sidebar")
                .classList.toggle("open");

        }
    );


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(
    message,
    icon = "✓"
) {

    const toast =
        document.getElementById("toast");

    document.getElementById(
        "toastMessage"
    ).textContent = message;

    document.getElementById(
        "toastIcon"
    ).textContent = icon;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =====================================================
   IOT SYSTEM
===================================================== */

function generateIoTReading() {

    iotData.moisture =
        Math.floor(
            Math.random() * 81
        ) + 10;


    iotData.n =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.p =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.k =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.updatedAt =
        new Date();


    updateIoTDashboard();


    showToast(
        currentLanguage === "kn"
            ? "IoT ಸೆನ್ಸರ್ ಅಪ್‌ಡೇಟ್ ಆಗಿದೆ"
            : "IoT sensor updated",
        "📡"
    );

}


/*
    REAL IoT CONNECTION

    Later replace the demo function above
    with your ESP32 / Firebase / MQTT / REST API.

    Example data:

    {
        moisture: 28,
        nitrogen: 65,
        phosphorus: 52,
        potassium: 74
    }
*/


function applyIoTData(data) {

    iotData.moisture =
        Number(data.moisture);

    iotData.n =
        Number(data.nitrogen);

    iotData.p =
        Number(data.phosphorus);

    iotData.k =
        Number(data.potassium);

    iotData.updatedAt =
        new Date();

    updateIoTDashboard();

}


/* =====================================================
   UPDATE IOT DASHBOARD
===================================================== */

function updateIoTDashboard() {

    const moisture =
        Math.max(
            0,
            Math.min(
                100,
                iotData.moisture
            )
        );


    document.getElementById(
        "moistureValue"
    ).textContent = moisture;


    document.getElementById(
        "moistureBar"
    ).style.width = moisture + "%";


    let moistureStatus;

    let moistureAdvice;


    if (moisture < 30) {

        moistureStatus =
            currentLanguage === "kn"
                ? "ಒಣ"
                : "Dry";

        moistureAdvice =
            currentLanguage === "kn"
                ? "ಮಣ್ಣು ಒಣವಾಗಿದೆ. ನೀರಾವರಿ ಅಗತ್ಯವಿದೆ."
                : "Soil is dry. Irrigation is required.";

    }

    else if (moisture <= 50) {

        moistureStatus =
            currentLanguage === "kn"
                ? "ಸಾಮಾನ್ಯ"
                : "Normal";

        moistureAdvice =
            currentLanguage === "kn"
                ? "ಮಣ್ಣಿನ ತೇವಾಂಶ ಸೂಕ್ತ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ."
                : "Soil moisture is in the stable range.";

    }

    else {

        moistureStatus =
            currentLanguage === "kn"
                ? "ತೇವ"
                : "Wet";

        moistureAdvice =
            currentLanguage === "kn"
                ? "ಮಣ್ಣು ಸಾಕಷ್ಟು ತೇವವಾಗಿದೆ. ಹೆಚ್ಚುವರಿ ನೀರು ಬೇಡ."
                : "Soil is sufficiently wet. Avoid excess irrigation.";

    }


    document.getElementById(
        "moistureStatus"
    ).textContent =
        moistureStatus;


    document.getElementById(
        "moistureAdvice"
    ).textContent =
        moistureAdvice;


    document.getElementById(
        "sensorUpdated"
    ).textContent =
        formatTime(
            iotData.updatedAt
        );


    updateNPK();

    updateMotorFromMoisture(
        moisture
    );

}


/* =====================================================
   NPK
===================================================== */

function updateNPK() {

    const n =
        clamp(iotData.n);

    const p =
        clamp(iotData.p);

    const k =
        clamp(iotData.k);


    document.getElementById(
        "nValue"
    ).textContent = n;


    document.getElementById(
        "pValue"
    ).textContent = p;


    document.getElementById(
        "kValue"
    ).textContent = k;


    document.getElementById(
        "nBar"
    ).style.width = n + "%";


    document.getElementById(
        "pBar"
    ).style.width = p + "%";


    document.getElementById(
        "kBar"
    ).style.width = k + "%";


    document.getElementById(
        "nStatus"
    ).textContent =
        nutrientStatus(n);


    document.getElementById(
        "pStatus"
    ).textContent =
        nutrientStatus(p);


    document.getElementById(
        "kStatus"
    ).textContent =
        nutrientStatus(k);


    const average =
        Math.round(
            (n + p + k) / 3
        );


    document.getElementById(
        "npkAverage"
    ).textContent =
        average + "%";


    document.getElementById(
        "npkHealth"
    ).textContent =
        nutrientHealth(average);

}


function clamp(value) {

    return Math.max(
        0,
        Math.min(
            100,
            Number(value)
        )
    );

}


function nutrientStatus(value) {

    if (value < 40) {

        return currentLanguage === "kn"
            ? "ಕಡಿಮೆ"
            : "Low";

    }

    if (value < 70) {

        return currentLanguage === "kn"
            ? "ಸಾಮಾನ್ಯ"
            : "Normal";

    }

    return currentLanguage === "kn"
        ? "ಉತ್ತಮ"
        : "Good";

}


function nutrientHealth(value) {

    if (value < 40) {

        return currentLanguage === "kn"
            ? "ಕಡಿಮೆ"
            : "Low";

    }

    if (value < 70) {

        return currentLanguage === "kn"
            ? "ಸಾಮಾನ್ಯ"
            : "Normal";

    }

    return currentLanguage === "kn"
        ? "ಉತ್ತಮ"
        : "Good";

}


/* =====================================================
   MOTOR CONTROL
===================================================== */

function updateMotorFromMoisture(
    moisture
) {

    /*
       HYSTERESIS LOGIC

       < 30%  => MOTOR ON

       30-50% => KEEP PREVIOUS STATE

       > 50%  => MOTOR OFF
    */


    if (moisture < 30) {

        motorState = "ON";

    }

    else if (moisture > 50) {

        motorState = "OFF";

    }


    updateMotorUI();

}


function updateMotorUI() {

    const status =
        document.getElementById(
            "motorStatus"
        );

    const largeStatus =
        document.getElementById(
            "motorStatusLarge"
        );

    const icon =
        document.getElementById(
            "motorStatusIcon"
        );

    const message =
        document.getElementById(
            "motorMessage"
        );


    status.textContent =
        motorState;


    largeStatus.textContent =
        motorState;


    icon.classList.remove(
        "motor-on",
        "motor-off"
    );


    if (motorState === "ON") {

        icon.classList.add(
            "motor-on"
        );

        icon.textContent = "▶️";

        status.style.color =
            "#2F8F57";

        largeStatus.style.color =
            "#2F8F57";


        message.textContent =
            currentLanguage === "kn"
                ? "ಮಣ್ಣಿನ ತೇವಾಂಶ 30% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇದೆ. ನೀರಾವರಿ ಮೋಟಾರ್ ON ಆಗಿದೆ."
                : "Soil moisture is below 30%. Irrigation motor is ON.";

    }

    else {

        icon.classList.add(
            "motor-off"
        );

        icon.textContent = "⏹️";

        status.style.color =
            "#C84A3D";

        largeStatus.style.color =
            "#C84A3D";


        message.textContent =
            currentLanguage === "kn"
                ? "ಮಣ್ಣಿನ ತೇವಾಂಶ 50% ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿದೆ. ನೀರಾವರಿ ಮೋಟಾರ್ OFF ಆಗಿದೆ."
                : "Soil moisture is above 50%. Irrigation motor is OFF.";

    }


    document.getElementById(
        "motorUpdated"
    ).textContent =
        formatTime(new Date());

}


/* =====================================================
   SENSOR TEST BUTTONS
===================================================== */

document
    .getElementById("dryTestBtn")
    .addEventListener(
        "click",
        () => {

            iotData.moisture = 25;

            iotData.updatedAt =
                new Date();

            updateIoTDashboard();

            showToast(
                currentLanguage === "kn"
                    ? "ತೇವಾಂಶ 25% — ಮೋಟಾರ್ ON"
                    : "Moisture 25% — Motor ON",
                "💧"
            );

        }
    );


document
    .getElementById("normalTestBtn")
    .addEventListener(
        "click",
        () => {

            iotData.moisture = 40;

            iotData.updatedAt =
                new Date();

            updateIoTDashboard();

            showToast(
                currentLanguage === "kn"
                    ? "ತೇವಾಂಶ 40% — ಹಿಂದಿನ ಮೋಟಾರ್ ಸ್ಥಿತಿ"
                    : "Moisture 40% — Previous motor state",
                "💧"
            );

        }
    );


document
    .getElementById("wetTestBtn")
    .addEventListener(
        "click",
        () => {

            iotData.moisture = 60;

            iotData.updatedAt =
                new Date();

            updateIoTDashboard();

            showToast(
                currentLanguage === "kn"
                    ? "ತೇವಾಂಶ 60% — ಮೋಟಾರ್ OFF"
                    : "Moisture 60% — Motor OFF",
                "💧"
            );

        }
    );


document
    .getElementById("refreshSensorBtn")
    .addEventListener(
        "click",
        generateIoTReading
    );


/* Automatic simulated sensor update */

setInterval(
    generateIoTReading,
    15000
);


/* =====================================================
   WEATHER
===================================================== */

const weatherCodes = {

    0: {
        kn: "ಸ್ವಚ್ಛ ಆಕಾಶ",
        en: "Clear sky"
    },

    1: {
        kn: "ಬಹುತೇಕ ಸ್ವಚ್ಛ",
        en: "Mainly clear"
    },

    2: {
        kn: "ಭಾಗಶಃ ಮೋಡ",
        en: "Partly cloudy"
    },

    3: {
        kn: "ಮೋಡ ಕವಿದ",
        en: "Overcast"
    },

    45: {
        kn: "ಮಂಜು",
        en: "Fog"
    },

    48: {
        kn: "ಮಂಜು",
        en: "Fog"
    },

    51: {
        kn: "ತುಂತುರು ಮಳೆ",
        en: "Light drizzle"
    },

    53: {
        kn: "ತುಂತುರು ಮಳೆ",
        en: "Drizzle"
    },

    55: {
        kn: "ಭಾರೀ ತುಂತುರು ಮಳೆ",
        en: "Heavy drizzle"
    },

    61: {
        kn: "ಮಳೆ",
        en: "Rain"
    },

    63: {
        kn: "ಮಧ್ಯಮ ಮಳೆ",
        en: "Moderate rain"
    },

    65: {
        kn: "ಭಾರೀ ಮಳೆ",
        en: "Heavy rain"
    },

    71: {
        kn: "ಹಿಮಪಾತ",
        en: "Snow"
    },

    73: {
        kn: "ಹಿಮಪಾತ",
        en: "Snow"
    },

    75: {
        kn: "ಭಾರೀ ಹಿಮಪಾತ",
        en: "Heavy snow"
    },

    80: {
        kn: "ಮಳೆಯ ತುಂತುರು",
        en: "Rain showers"
    },

    81: {
        kn: "ಮಳೆ",
        en: "Rain showers"
    },

    82: {
        kn: "ಭಾರೀ ಮಳೆ",
        en: "Heavy rain showers"
    },

    95: {
        kn: "ಗುಡುಗು ಸಹಿತ ಮಳೆ",
        en: "Thunderstorm"
    },

    96: {
        kn: "ಗುಡುಗು ಮತ್ತು ಆಲಿಕಲ್ಲು",
        en: "Thunderstorm with hail"
    },

    99: {
        kn: "ಗುಡುಗು ಮತ್ತು ಆಲಿಕಲ್ಲು",
        en: "Thunderstorm with hail"
    }

};


function getWeatherName(code) {

    if (weatherCodes[code]) {

        return weatherCodes[code][
            currentLanguage
        ];

    }

    return currentLanguage === "kn"
        ? "ಹವಾಮಾನ"
        : "Weather";

}


/* =====================================================
   GET CITY WEATHER
===================================================== */

document
    .getElementById("getWeatherBtn")
    .addEventListener(
        "click",
        getCityWeather
    );


document
    .getElementById("weatherCity")
    .addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                getCityWeather();

            }

        }
    );


async function getCityWeather() {

    const city =
        document
            .getElementById(
                "weatherCity"
            )
            .value
            .trim();


    if (!city) {

        showToast(
            currentLanguage === "kn"
                ? "ನಗರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
                : "Enter a city name",
            "⚠️"
        );

        return;

    }


    showWeatherLoading(true);


    try {

        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


        const geoResponse =
            await fetch(geoURL);


        const geoData =
            await geoResponse.json();


        if (
            !geoData.results ||
            !geoData.results.length
        ) {

            throw new Error(
                "Location not found"
            );

        }


        const place =
            geoData.results[0];


        await fetchWeather(
            place.latitude,
            place.longitude,
            `${place.name}, ${place.country || ""}`
        );


        localStorage.setItem(
            "gingerCity",
            place.name
        );

    }

    catch (error) {

        console.error(error);

        showToast(
            currentLanguage === "kn"
                ? "ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ"
                : "Could not get weather information",
            "⚠️"
        );

    }

    finally {

        showWeatherLoading(false);

    }

}


/* =====================================================
   MY LOCATION
===================================================== */

document
    .getElementById("locationBtn")
    .addEventListener(
        "click",
        getMyLocation
    );


function getMyLocation() {

    if (!navigator.geolocation) {

        showToast(
            currentLanguage === "kn"
                ? "ನಿಮ್ಮ ಬ್ರೌಸರ್ location support ಮಾಡುವುದಿಲ್ಲ"
                : "Your browser does not support location",
            "⚠️"
        );

        return;

    }


    showWeatherLoading(true);


    navigator.geolocation.getCurrentPosition(

        async position => {

            try {

                await fetchWeather(
                    position.coords.latitude,
                    position.coords.longitude,
                    currentLanguage === "kn"
                        ? "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳ"
                        : "Your current location"
                );

            }

            catch (error) {

                console.error(error);

            }

            finally {

                showWeatherLoading(false);

            }

        },

        () => {

            showWeatherLoading(false);

            showToast(
                currentLanguage === "kn"
                    ? "Location permission ನೀಡಿ"
                    : "Please allow location permission",
                "📍"
            );

        }

    );

}


/* =====================================================
   WEATHER API
===================================================== */

async function fetchWeather(
    latitude,
    longitude,
    locationName
) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,weather_code&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timezone=auto&forecast_days=2`;


    const response =
        await fetch(url);


    const data =
        await response.json();


    const tomorrowIndex = 1;


    currentWeather = {

        location: locationName,

        max:
            data.daily.temperature_2m_max[
                tomorrowIndex
            ],

        min:
            data.daily.temperature_2m_min[
                tomorrowIndex
            ],

        rain:
            data.daily.precipitation_probability_max[
                tomorrowIndex
            ],

        rainfall:
            data.daily.precipitation_sum[
                tomorrowIndex
            ],

        wind:
            data.daily.wind_speed_10m_max[
                tomorrowIndex
            ],

        code:
            data.daily.weather_code[
                tomorrowIndex
            ]

    };


    displayWeather(
        currentWeather
    );


    localStorage.setItem(
        "lastWeather",
        JSON.stringify(
            currentWeather
        )
    );

}


function displayWeather(weather) {

    document
        .getElementById(
            "weatherResult"
        )
        .classList.remove(
            "hidden"
        );


    document.getElementById(
        "weatherLocation"
    ).textContent =
        weather.location;


    document.getElementById(
        "weatherCondition"
    ).textContent =
        getWeatherName(weather.code);


    document.getElementById(
        "weatherMax"
    ).textContent =
        Math.round(weather.max) + "°C";


    document.getElementById(
        "weatherMin"
    ).textContent =
        Math.round(weather.min) + "°C";


    document.getElementById(
        "weatherRain"
    ).textContent =
        Math.round(weather.rain) + "%";


    document.getElementById(
        "weatherRainfall"
    ).textContent =
        Number(weather.rainfall).toFixed(1) + " mm";


    document.getElementById(
        "weatherWind"
    ).textContent =
        Math.round(weather.wind) + " km/h";


    const advice =
        getSprayAdvice(weather);


    document.getElementById(
        "sprayAdvice"
    ).textContent =
        advice;


    /*
       Dashboard weather summary
    */


    document.getElementById(
        "dashWeatherCondition"
    ).textContent =
        getWeatherName(weather.code);


    document.getElementById(
        "dashTemp"
    ).textContent =
        Math.round(weather.max) + "°C";


    document.getElementById(
        "dashRain"
    ).textContent =
        Math.round(weather.rain) + "%";


    document.getElementById(
        "dashWind"
    ).textContent =
        Math.round(weather.wind) +
        " km/h";


    document.getElementById(
        "currentLocation"
    ).textContent =
        weather.location;

}


function getSprayAdvice(weather) {

    if (
        weather.code >= 95
    ) {

        return currentLanguage === "kn"
            ? "ಗುಡುಗು ಸಹಿತ ಮಳೆಯ ಸಾಧ್ಯತೆ ಇದೆ. ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಿ."
            : "Thunderstorm is possible. Delay spraying.";

    }


    if (
        weather.rain >= 60 ||
        weather.rainfall >= 2
    ) {

        return currentLanguage === "kn"
            ? "ಮಳೆಯ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು. ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡುವುದು ಉತ್ತಮ."
            : "Rain probability is high. It is better to delay spraying.";

    }


    if (
        weather.wind > 20
    ) {

        return currentLanguage === "kn"
            ? "ಗಾಳಿ ವೇಗ ಹೆಚ್ಚು. ಸಿಂಪಡಣೆ ಮಾಡಿದರೆ spray drift ಆಗಬಹುದು."
            : "Wind speed is high. Spraying may cause spray drift.";

    }


    if (
        weather.max >= 35
    ) {

        return currentLanguage === "kn"
            ? "ತಾಪಮಾನ ಹೆಚ್ಚು. ಮಧ್ಯಾಹ್ನ ಸಿಂಪಡಣೆ ತಪ್ಪಿಸಿ."
            : "Temperature is high. Avoid spraying during midday.";

    }


    if (
        weather.rain >= 30
    ) {

        return currentLanguage === "kn"
            ? "ಮಳೆಯ ಸಾಧ್ಯತೆ ಇದೆ. ಸಿಂಪಡಣೆಗೆ ಮುನ್ನ ಸ್ಥಳೀಯ ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ."
            : "There is some rain probability. Check local weather before spraying.";

    }


    return currentLanguage === "kn"
        ? "ಹವಾಮಾನ ಸಾಮಾನ್ಯವಾಗಿ ಅನುಕೂಲಕರವಾಗಿದೆ. ಉತ್ಪನ್ನದ label ಮತ್ತು ಸ್ಥಳೀಯ ಕೃಷಿ ಸಲಹೆಯನ್ನು ಅನುಸರಿಸಿ."
        : "Weather is generally suitable. Follow the product label and local agricultural advice.";

}


function showWeatherLoading(show) {

    document
        .getElementById(
            "weatherLoading"
        )
        .classList.toggle(
            "hidden",
            !show
        );

}


/* =====================================================
   MANUAL TEMPERATURE
===================================================== */

document
    .getElementById("manualTempBtn")
    .addEventListener(
        "click",
        checkManualTemperature
    );


function checkManualTemperature() {

    const temp =
        Number(
            document
                .getElementById(
                    "manualTemp"
                )
                .value
        );


    const result =
        document.getElementById(
            "manualTempResult"
        );


    if (
        Number.isNaN(temp)
    ) {

        result.textContent =
            currentLanguage === "kn"
                ? "ತಾಪಮಾನ ನಮೂದಿಸಿ."
                : "Enter a temperature.";

        return;

    }


    if (temp >= 35) {

        result.textContent =
            currentLanguage === "kn"
                ? "🌡️ ತಾಪಮಾನ ಹೆಚ್ಚು. ಮಧ್ಯಾಹ್ನ ಸಿಂಪಡಣೆ ತಪ್ಪಿಸಿ ಮತ್ತು ಬೆಳೆ ನೀರಿನ ಅಗತ್ಯ ಗಮನಿಸಿ."
                : "🌡️ Temperature is high. Avoid midday spraying and monitor crop water needs.";

    }

    else if (temp >= 20) {

        result.textContent =
            currentLanguage === "kn"
                ? "🌱 ತಾಪಮಾನ ಸಾಮಾನ್ಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ."
                : "🌱 Temperature is within a generally suitable range.";

    }

    else {

        result.textContent =
            currentLanguage === "kn"
                ? "❄️ ತಾಪಮಾನ ಕಡಿಮೆಯಾಗಿದೆ. ಬೆಳೆ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ."
                : "❄️ Temperature is low. Monitor crop conditions.";

    }

}


/* =====================================================
   WEATHER SPEECH
===================================================== */

document
    .getElementById("speakWeather")
    .addEventListener(
        "click",
        speakWeather
    );


function speakWeather() {

    if (
        !currentWeather ||
        !("speechSynthesis" in window)
    ) {

        return;

    }


    const text =
        currentLanguage === "kn"

            ? `ನಾಳೆ ${currentWeather.location} ನಲ್ಲಿ ${getWeatherName(currentWeather.code)}. ಗರಿಷ್ಠ ತಾಪಮಾನ ${Math.round(currentWeather.max)} ಡಿಗ್ರಿ. ಮಳೆಯ ಸಾಧ್ಯತೆ ${Math.round(currentWeather.rain)} ಶೇಕಡಾ. ಗಾಳಿಯ ವೇಗ ${Math.round(currentWeather.wind)} ಕಿಲೋಮೀಟರ್ ಪ್ರತಿ ಗಂಟೆ.`

            : `Tomorrow in ${currentWeather.location}, the weather will be ${getWeatherName(currentWeather.code)}. Maximum temperature will be ${Math.round(currentWeather.max)} degrees. Rain probability is ${Math.round(currentWeather.rain)} percent. Wind speed will be ${Math.round(currentWeather.wind)} kilometers per hour.`;


    speakText(text);

}


/* =====================================================
   CROP DOCTOR
===================================================== */

document
    .getElementById("cropImage")
    .addEventListener(
        "change",
        handleCropImage
    );


function handleCropImage(event) {

    const file =
        event.target.files[0];


    if (!file) {

        return;

    }


    selectedCropImage = file;


    const preview =
        document.getElementById(
            "cropPreview"
        );


    preview.src =
        URL.createObjectURL(file);


    preview.classList.remove(
        "hidden"
    );


    document.getElementById(
        "analyzeCropBtn"
    ).disabled = false;


    showToast(
        currentLanguage === "kn"
            ? "ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ"
            : "Image selected",
        "📷"
    );

}


document
    .getElementById("analyzeCropBtn")
    .addEventListener(
        "click",
        analyzeCrop
    );


function analyzeCrop() {

    if (!selectedCropImage) {

        return;

    }


    const result =
        document.getElementById(
            "cropResult"
        );


    result.innerHTML = `

        <div style="font-size:28px;margin-bottom:8px;">
            🌿
        </div>

        <strong>
            ${
                currentLanguage === "kn"
                    ? "ಡೆಮೊ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ"
                    : "Demo analysis completed"
            }
        </strong>

        <p style="margin-top:8px;">

            ${
                currentLanguage === "kn"
                    ? "ಚಿತ್ರದ ಆಧಾರದ ಮೇಲೆ ಸಸ್ಯದಲ್ಲಿ stress ಅಥವಾ rhizome rot ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು. ನಿಖರವಾದ ರೋಗ ಪತ್ತೆಗಾಗಿ AI/ML image model ಅಗತ್ಯವಿದೆ."
                    : "The image can be checked for possible plant stress or rhizome rot symptoms. A real AI/ML image model is required for accurate disease detection."
            }

        </p>

    `;


    showToast(
        currentLanguage === "kn"
            ? "ಡೆಮೊ ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣ"
            : "Demo analysis completed",
        "🩺"
    );

}


/* =====================================================
   FARMING GUIDE SPEECH
===================================================== */

document
    .querySelectorAll(".listen-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const key =
                    button.dataset.speechKey;


                const text =
                    translations[
                        currentLanguage
                    ][key];


                speakText(text);

            }
        );

    });


function speakText(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        showToast(
            currentLanguage === "kn"
                ? "ನಿಮ್ಮ ಬ್ರೌಸರ್ voice support ಮಾಡುವುದಿಲ್ಲ"
                : "Your browser does not support voice",
            "⚠️"
        );

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        currentLanguage === "kn"
            ? "kn-IN"
            : "en-IN";


    speech.rate = 0.9;


    window.speechSynthesis.speak(
        speech
    );

}


/* =====================================================
   ASSISTANT
===================================================== */

document
    .getElementById("sendAssistant")
    .addEventListener(
        "click",
        sendAssistantMessage
    );


document
    .getElementById("assistantInput")
    .addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                sendAssistantMessage();

            }

        }
    );


document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;

                document.getElementById(
                    "assistantInput"
                ).value =
                    question;

                sendAssistantMessage();

            }
        );

    });


async function sendAssistantMessage() {

    const input =
        document.getElementById(
            "assistantInput"
        );


    const message =
        input.value.trim();


    if (!message) {

        return;

    }


    addChatMessage(
        message,
        "user"
    );


    input.value = "";


    /*
       WEATHER QUESTION
    */

    if (
        isWeatherQuestion(message)
    ) {

        addChatMessage(
            currentLanguage === "kn"
                ? "🌤️ ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯುತ್ತಿದ್ದೇನೆ..."
                : "🌤️ Getting weather information...",
            "bot"
        );


        const city =
            localStorage.getItem(
                "gingerCity"
            );


        if (city) {

            try {

                const geoURL =
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

                const response =
                    await fetch(geoURL);

                const data =
                    await response.json();


                if (
                    data.results &&
                    data.results.length
                ) {

                    const place =
                        data.results[0];


                    await fetchWeather(
                        place.latitude,
                        place.longitude,
                        `${place.name}, ${place.country || ""}`
                    );


                    addChatMessage(
                        getWeatherAssistantResponse(),
                        "bot"
                    );

                    return;

                }

            }

            catch (error) {

                console.error(error);

            }

        }


        addChatMessage(

            currentLanguage === "kn"

                ? "📍 ಮೊದಲು Weather ವಿಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ನಗರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನಂತರ ನಾನು ನಾಳೆಯ ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಬಹುದು."

                : "📍 First select your city in the Weather section. Then I can check tomorrow's weather.",

            "bot"

        );


        return;

    }


    const answer =
        getAssistantAnswer(
            message
        );


    setTimeout(
        () => {

            addChatMessage(
                answer,
                "bot"
            );

        },
        350
    );

}


function isWeatherQuestion(message) {

    const text =
        message.toLowerCase();


    const keywords = [

        "weather",
        "tomorrow",
        "forecast",
        "rain",
        "spray",
        "spraying",
        "wind",
        "ಹವಾಮಾನ",
        "ನಾಳೆ",
        "ಮುನ್ಸೂಚನೆ",
        "ಮಳೆ",
        "ಸಿಂಪಡಣೆ",
        "ಸ್ಪ್ರೇ",
        "ಗಾಳಿ"

    ];


    return keywords.some(
        keyword =>
            text.includes(keyword)
    );

}


function getWeatherAssistantResponse() {

    if (!currentWeather) {

        return currentLanguage === "kn"
            ? "ಹವಾಮಾನ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ."
            : "Weather information is not available.";

    }


    return currentLanguage === "kn"

        ? `🌤️ ${currentWeather.location} ನಲ್ಲಿ ನಾಳೆ ${getWeatherName(currentWeather.code)}. ಗರಿಷ್ಠ ತಾಪಮಾನ ${Math.round(currentWeather.max)}°C, ಮಳೆಯ ಸಾಧ್ಯತೆ ${Math.round(currentWeather.rain)}% ಮತ್ತು ಗಾಳಿ ${Math.round(currentWeather.wind)} km/h. ${getSprayAdvice(currentWeather)}`

        : `🌤️ Tomorrow in ${currentWeather.location}: ${getWeatherName(currentWeather.code)}. Maximum temperature ${Math.round(currentWeather.max)}°C, rain probability ${Math.round(currentWeather.rain)}%, and wind ${Math.round(currentWeather.wind)} km/h. ${getSprayAdvice(currentWeather)}`;

}


function getAssistantAnswer(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("water") ||
        text.includes("irrigation") ||
        text.includes("ನೀರು") ||
        text.includes("ನೀರಾವರಿ")
    ) {

        return currentLanguage === "kn"

            ? "💧 ಶುಂಠಿಗೆ ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಸ್ಥಿರವಾಗಿ ಇಡುವುದು ಮುಖ್ಯ. ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ. GingerMitra ನಲ್ಲಿ ಮಣ್ಣಿನ ತೇವಾಂಶ 30% ಕ್ಕಿಂತ ಕಡಿಮೆಯಾದಾಗ ಮೋಟಾರ್ ON ಆಗುತ್ತದೆ ಮತ್ತು 50% ಕ್ಕಿಂತ ಹೆಚ್ಚಾದಾಗ OFF ಆಗುತ್ತದೆ."

            : "💧 Maintaining stable soil moisture is important for ginger. Avoid waterlogging. In GingerMitra, the motor turns ON below 30% moisture and OFF above 50%.";

    }


    if (
        text.includes("disease") ||
        text.includes("rot") ||
        text.includes("ರೋಗ") ||
        text.includes("ಕೊಳೆ")
    ) {

        return currentLanguage === "kn"

            ? "🦠 ಶುಂಠಿಯಲ್ಲಿ rhizome rot ಸೇರಿದಂತೆ ಕೆಲವು ರೋಗಗಳು ಸಮಸ್ಯೆಯಾಗಬಹುದು. ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ, ಉತ್ತಮ drainage ಇಡಿ ಮತ್ತು ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ. ನಿಖರವಾದ ರೋಗ ಪತ್ತೆಗಾಗಿ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ."

            : "🦠 Ginger can face diseases such as rhizome rot. Avoid waterlogging, maintain good drainage and separate affected plants. Consult an agriculture expert for accurate diagnosis.";

    }


    if (
        text.includes("npk") ||
        text.includes("nitrogen") ||
        text.includes("phosphorus") ||
        text.includes("potassium") ||
        text.includes("n ") ||
        text.includes("ಗೊಬ್ಬರ")
    ) {

        return currentLanguage === "kn"

            ? "🧪 N = Nitrogen, P = Phosphorus ಮತ್ತು K = Potassium. ಸರಿಯಾದ ಪ್ರಮಾಣವು ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮತ್ತು ಸ್ಥಳೀಯ ಕೃಷಿ ಶಿಫಾರಸಿನ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ."

            : "🧪 N = Nitrogen, P = Phosphorus and K = Potassium. The correct amount depends on soil testing and local agricultural recommendations.";

    }


    if (
        text.includes("soil") ||
        text.includes("ಮಣ್ಣು")
    ) {

        return currentLanguage === "kn"

            ? "🌱 ಶುಂಠಿಗೆ ಉತ್ತಮ drainage ಇರುವ ಸಡಿಲ ಮಣ್ಣು ಸೂಕ್ತ. ಮಣ್ಣಿನಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ ಮತ್ತು ಸಾವಯವ ಪದಾರ್ಥವನ್ನು ಬಳಸಿ."

            : "🌱 Ginger generally prefers loose, well-drained soil. Avoid waterlogging and use suitable organic matter.";

    }


    if (
        text.includes("plant") ||
        text.includes("seed") ||
        text.includes("ನೆಡು") ||
        text.includes("ಬೀಜ")
    ) {

        return currentLanguage === "kn"

            ? "🌱 ಆರೋಗ್ಯಕರ ಬೀಜ ಶುಂಠಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸೂಕ್ತ ಅಂತರದಲ್ಲಿ ನೆಡಿ ಮತ್ತು ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಗಮನಿಸಿ."

            : "🌱 Select healthy seed ginger, plant with suitable spacing and monitor soil moisture during early growth.";

    }


    if (
        text.includes("harvest") ||
        text.includes("ಕೊಯ್ಲು")
    ) {

        return currentLanguage === "kn"

            ? "🌾 ಎಲೆಗಳು ಹಳದಿಯಾಗಲು ಪ್ರಾರಂಭಿಸಿದಾಗ ಮತ್ತು ಬೆಳೆ ಪರಿಪಕ್ವವಾದಾಗ ಕೊಯ್ಲು ಸಮಯವನ್ನು ಪರಿಗಣಿಸಬಹುದು. ಸ್ಥಳೀಯ ಬೆಳೆಯ ಅವಧಿಯನ್ನು ಸಹ ಗಮನಿಸಿ."

            : "🌾 Harvest can be considered when leaves begin to yellow and the crop reaches maturity. Also consider local crop duration.";

    }


    if (
        text.includes("market") ||
        text.includes("sell") ||
        text.includes("ಮಾರುಕಟ್ಟೆ") ||
        text.includes("ಮಾರಾಟ")
    ) {

        return currentLanguage === "kn"

            ? "🤝 Direct Market ವಿಭಾಗದಲ್ಲಿ 9611301264 ಸಂಖ್ಯೆಯ ಮೂಲಕ ನೇರ ಸಂಪರ್ಕ ಮಾಡಬಹುದು. ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ ನಂತರ ಮಾರಾಟದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ."

            : "🤝 You can use the Direct Market section and call 9611301264 for direct contact. Compare market prices before deciding to sell.";

    }


    if (
        text.includes("temperature") ||
        text.includes("ತಾಪಮಾನ")
    ) {

        return currentLanguage === "kn"

            ? "🌡️ ಶುಂಠಿ ಬೆಳೆಯಲ್ಲಿ ತಾಪಮಾನ, ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ಮಳೆಯ ಪರಿಸ್ಥಿತಿಯನ್ನು ಒಟ್ಟಾಗಿ ಗಮನಿಸುವುದು ಮುಖ್ಯ."

            : "🌡️ For ginger, monitor temperature together with soil moisture and rainfall conditions.";

    }


    return currentLanguage === "kn"

        ? "🌱 ನಾನು ಶುಂಠಿ ಕೃಷಿಯ ಬಗ್ಗೆ ಸಹಾಯ ಮಾಡಬಹುದು. ನೀರಾವರಿ, ಮಣ್ಣು, NPK, ರೋಗ, ನೆಡುವಿಕೆ, ಕೊಯ್ಲು, ಹವಾಮಾನ ಅಥವಾ ಮಾರುಕಟ್ಟೆಯ ಬಗ್ಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿ."

        : "🌱 I can help with ginger farming. Ask me about irrigation, soil, NPK, diseases, planting, harvesting, weather or market information.";

}


function addChatMessage(
    message,
    type
) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const messageDiv =
        document.createElement(
            "div"
        );


    messageDiv.className =
        `message ${type}`;


    if (type === "bot") {

        messageDiv.innerHTML = `

            <div class="message-avatar">
                🤖
            </div>

            <div class="message-bubble">
                ${escapeHTML(message)}
            </div>

        `;

    }

    else {

        messageDiv.innerHTML = `

            <div class="message-bubble">
                ${escapeHTML(message)}
            </div>

        `;

    }


    container.appendChild(
        messageDiv
    );


    container.scrollTop =
        container.scrollHeight;


    /*
       Bot voice
    */

    if (
        type === "bot"
    ) {

        // Uncomment if automatic voice is wanted:
        // speakText(message);

    }

}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}


/* =====================================================
   VOICE INPUT
===================================================== */

document
    .getElementById("voiceAssistant")
    .addEventListener(
        "click",
        startVoiceRecognition
    );


function startVoiceRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            currentLanguage === "kn"
                ? "ಈ ಬ್ರೌಸರ್ voice input support ಮಾಡುವುದಿಲ್ಲ"
                : "This browser does not support voice input",
            "⚠️"
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        currentLanguage === "kn"
            ? "kn-IN"
            : "en-IN";


    recognition.interimResults =
        false;


    recognition.maxAlternatives =
        1;


    showToast(
        currentLanguage === "kn"
            ? "ಮಾತನಾಡಿ..."
            : "Speak now...",
        "🎤"
    );


    recognition.start();


    recognition.onresult =
        event => {

            const transcript =
                event.results[0][0]
                    .transcript;


            document.getElementById(
                "assistantInput"
            ).value =
                transcript;


            sendAssistantMessage();

        };


    recognition.onerror =
        error => {

            console.error(error);

            showToast(
                currentLanguage === "kn"
                    ? "Voice input error"
                    : "Voice input error",
                "⚠️"
            );

        };

}


/* =====================================================
   UTILITY
===================================================== */

function formatTime(date) {

    return date.toLocaleTimeString(
        [],
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

function initializeApp() {

    setLanguage(
        currentLanguage
    );


    updateIoTDashboard();


    const savedCity =
        localStorage.getItem(
            "gingerCity"
        );


    if (savedCity) {

        document.getElementById(
            "weatherCity"
        ).value =
            savedCity;

    }


    const savedWeather =
        localStorage.getItem(
            "lastWeather"
        );


    if (savedWeather) {

        try {

            currentWeather =
                JSON.parse(
                    savedWeather
                );


            displayWeather(
                currentWeather
            );

        }

        catch (error) {

            console.error(error);

        }

    }

}


initializeApp();