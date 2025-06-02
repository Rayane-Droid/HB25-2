// Dans script.js
const safeText = (str) => str.replace(/[&<>"']/g, (c) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}[c]));

// Exemple : utilisation pour afficher une réponse safe dans la page
function displayMessage(message) {
  const safeMessage = safeText(message);
  document.getElementById('chatbox').innerHTML += `<p>${safeMessage}</p>`;
}
