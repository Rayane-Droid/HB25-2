
//function fixArabicOrder(phrase) {
// if (!phrase || typeof phrase !== "string") return phrase;
  // Si c'est de l'arabe uniquement (ou majoritairement), on inverse manuellement les mots
// const words = phrase.trim().split(/\s+/);
// return words.reverse().join(" ");
//}
function fixArabicOrder(phrase) {
  if (!phrase || typeof phrase !== "string") return phrase;

  // Supprime la ponctuation temporairement, puis la réinsère à la fin
  //const punctuation = phrase.match(/[.?!،؛]$/);
  const punctuation = phrase.match(/[\.\?!،؛؟]+$/); // inclut "؟"

  const cleanPhrase = phrase.replace(/[.?!،؛]$/, "").trim();

  const words = cleanPhrase.split(/\s+/).reverse();
  return words.join(" ") + (punctuation ? punctuation[0] : "");
}


// Forcer les chiffres occidentaux même en arabe
function convertArabicDigitsToEnglish(input) {
  const arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return input.replace(/[٠-٩]/g, d => arabicNums.indexOf(d));
}
