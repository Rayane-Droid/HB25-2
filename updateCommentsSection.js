function updateCommentsSection(lang) {
  const textarea = document.getElementById("comments");
  const label = document.getElementById("commentsLabel");
  // Mise à jour du placeholder
  if (generalTranslations.placeholder[lang]) {
    textarea.placeholder = generalTranslations.placeholder[lang];
  }
  // Mise à jour du label
  if (generalTranslations.commentsLabel[lang]) {
    label.textContent = generalTranslations.commentsLabel[lang];
  }
}
// Appliquer la langue par défaut (français)
updateCommentsSection("fr");
// Écouteur d'événement sur le sélecteur
document.getElementById("language").addEventListener("change", function () {
  updateCommentsSection(this.value);
});
