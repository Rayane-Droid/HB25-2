function resetApp() {
  currentLanguage = "fr";
  document.getElementById("language-selection").classList.remove("hidden");
  document.getElementById("user-form").classList.add("hidden");
  document.getElementById("content").classList.add("hidden");
  document.getElementById("language").value = "";
  document.getElementById("username").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("comments").value = "";
  document.getElementById("property-body").innerHTML = "";
}
