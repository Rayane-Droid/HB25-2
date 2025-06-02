window.onload = () => {
  const amiriBase64 = "AAEAAAAABAAAA4g=="; // Ton vrai base64 ici

  window.jspdf.jsPDF.API.events.push(['addFonts', function() {
    this.addFileToVFS("Amiri-Regular.ttf", amiriBase64);
    this.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  }]);
};
