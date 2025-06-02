window.onload = () => {
  window.jspdf.jsPDF.API.events.push(['addFonts', function() {
    this.addFileToVFS("Amiri-Regular.ttf", "base64");
    this.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  }]);
};

