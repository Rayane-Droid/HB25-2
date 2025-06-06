function submitUserInfo() {
  const t = translations[currentLanguage];
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  if (!username || !phone) {
    alert(t.fillAll);
    return;
  }
  const phoneRegex = /^\+?\d{8,15}$/;
  if (!phoneRegex.test(phone)) {
    alert(t.invalidPhone);
    return;
  }
  document.getElementById("user-form").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
  generatePropertyTable();
}
