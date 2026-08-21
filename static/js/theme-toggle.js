(() => {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  var stored = localStorage.getItem(STORAGE_KEY);
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var initial = stored || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initial);

  button.addEventListener("click", () => {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
