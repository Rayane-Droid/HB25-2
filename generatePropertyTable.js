function generatePropertyTable() {
  const t = translations[currentLanguage];
  const tbody = document.getElementById("property-body");
  tbody.innerHTML = "";
  properties.forEach((property, index) => {
    const row = document.createElement("tr");
    row.setAttribute("data-checked", "false");
    const key = property.keys[currentLanguage] || property.keys.fr;
    const title = property.titles[currentLanguage] || property.titles.fr;
    const description =
      property.descriptions[currentLanguage] || property.descriptions.fr;
    const superficy = generalTranslations.superficy[currentLanguage] || "DH";
    const area = (property.areas[currentLanguage] || property.areas.fr) + " " + superficy;
    //const price = property.prices[currentLanguage] || property.prices.fr;
    const currency = generalTranslations.currencyLabel[currentLanguage] || "DH";
    const price = (property.prices[currentLanguage] || property.prices.fr) + " " + currency;

                     
