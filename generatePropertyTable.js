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

    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${key}</td>
          <td>${area}</td>
          <td>${price}</td>
          <td class="validate-cell"></td>
          <td class="proposal-cell"></td>
          <td class="cancel-cell"></td>
        `;
    // === Appliquer RTL au tableau si la langue est l'arabe ===
    const table = document.getElementById("property-table");
    if (currentLanguage === "ar") {
      table.classList.add("rtl-table");
      table.setAttribute("dir", "rtl");
    } else {
      table.classList.remove("rtl-table");
      table.removeAttribute("dir");
    }
    // ==================================
    const validateBtn = document.createElement("button");
    validateBtn.innerText = t.validate;
    validateBtn.className = "btn";
    validateBtn.onclick = () => {
      row.querySelector(".validate-cell").innerText = row.cells[5].innerText;
      row.querySelector(".proposal-cell").innerHTML = "";
      row.querySelector(".cancel-cell").innerHTML = "";
      row.setAttribute("data-checked", "true");
    };

    
