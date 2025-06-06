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
    const area =
      (property.areas[currentLanguage] || property.areas.fr) + " " + superficy;
    const currency = generalTranslations.currencyLabel[currentLanguage] || "DH";
    const price =
      (property.prices[currentLanguage] || property.prices.fr) + " " + currency;

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
    const proposeBtn = document.createElement("button");
    proposeBtn.innerText = t.propose;
    proposeBtn.className = "btn";
    proposeBtn.onclick = () => {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = t.propose + " un prix";
      input.style.width = "120px";
      //===================================
      const sendBtn = document.createElement("button");
      sendBtn.innerText = t.continue;
      sendBtn.className = "btn";
      sendBtn.onclick = () => {
        const value = input.value;
        if (!value || isNaN(value)) {
          alert(t.invalidPrice);
          return;
        }
        //
        row.querySelector(".proposal-cell").textContent = value + " DH";
        row.querySelector(".validate-cell").innerHTML = "";
        row.querySelector(".cancel-cell").innerHTML = "";
        row.setAttribute("data-checked", "true");
      };
      //===================================
      const proposalCell = row.querySelector(".proposal-cell");
      proposalCell.innerHTML = "";
      proposalCell.appendChild(input);
      proposalCell.appendChild(sendBtn);
      row.querySelector(".validate-cell").innerHTML = "";
      row.querySelector(".cancel-cell").innerHTML = "";
    };
    //===================================
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = t.cancel;
    cancelBtn.className = "btn";
    cancelBtn.onclick = () => {
      row.querySelector(".cancel-cell").innerText = t.noDesire;
      row.querySelector(".validate-cell").innerHTML = "";
      row.querySelector(".proposal-cell").innerHTML = "";
      row.setAttribute("data-checked", "true");
    };
    row.querySelector(".validate-cell").appendChild(validateBtn);
    row.querySelector(".proposal-cell").appendChild(proposeBtn);
    row.querySelector(".cancel-cell").appendChild(cancelBtn);
    tbody.appendChild(row);
  });
}
// = Enregistre la police "Amiri" avec pdfMake ====
pdfMake.fonts = {
  Amiri: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Bold.ttf",
    italics: "Amiri-Regular.ttf",
    bolditalics: "Amiri-Bold.ttf"
  }
};
