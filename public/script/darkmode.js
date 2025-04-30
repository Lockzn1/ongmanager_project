// darkmode.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-toggle");
  
    // Verifique se há um tema previamente salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  
    toggleButton.addEventListener("click", () => {
      // Alterna a classe 'dark' na tag <html>
      document.documentElement.classList.toggle("dark");
  
      // Salva a preferência do usuário no localStorage
      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  