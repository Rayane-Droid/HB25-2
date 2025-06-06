function selectLanguage() {
  const lang = document.getElementById("language").value;
  if (!lang) return;
  currentLanguage = lang;
  const t = translations[lang];
  // Mise à jour des champs commentaires
  updateCommentsSection(lang);
  // Mise à jour des textes
  document.getElementById("language-selection").classList.add("hidden");
  document.getElementById("user-form").classList.remove("hidden");
  document.getElementById("welcome-message").innerText = t.welcome;
  document.getElementById("label-username").innerText = t.username;
  document.getElementById("label-phone").innerText = t.phone;
  document.getElementById("btn-continue").innerText = t.continue;
  document.getElementById("btn-back").innerText = t.back;
  document.getElementById("property-title").innerText = t.propertyTitle;
  document.getElementById("btn-save").innerText = t.save;
  // Mise à jour des en-têtes du tableau
  const tableHeaders = document.querySelectorAll("#property-table th");
  t.tableHeaders.forEach((header, index) => {
    tableHeaders[index].innerText = header;
  });
  // === Gère la direction RTL pour l'arabe ===
  const form = document.getElementById("user-form");
  const content = document.getElementById("content");
  const table = document.getElementById("property-table");
  if (lang === "ar") {
    form.classList.add("rtl");
    form.style.direction = "rtl";
    form.style.textAlign = "right";
    content.classList.add("rtl");
    content.style.direction = "rtl";
    content.style.textAlign = "right";
    table.classList.add("rtl-table");
    table.setAttribute("dir", "rtl");
  } else {
    form.classList.remove("rtl");
    form.style.direction = "ltr";
    form.style.textAlign = "left";
    content.classList.remove("rtl");
    content.style.direction = "ltr";
    content.style.textAlign = "left";
    table.classList.remove("rtl-table");
    table.removeAttribute("dir");
  }
}
