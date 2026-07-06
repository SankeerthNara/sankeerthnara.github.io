(function () {
  const style = document.createElement("style");
  style.textContent = `
    body.light-mode {
      --background_color: #f0f4ff;
      --primary_color:    #0066cc;
      --secondary_color:  #dde3f0;
      --text_color:       #111122;
      --address_bar:      #1a7a1a;
      --proj_color:       #cc0000;
    }
    #theme-toggle-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 9999;

      width:  54px;
      height: 54px;
      border-radius: 50%;
      border: 2px solid var(--primary_color);
      background: var(--secondary_color);
      color: var(--primary_color);
      cursor: pointer;

      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 0 4px 18px rgba(0,0,0,0.35);
      transition: transform 0.25s ease, box-shadow 0.25s ease,
                  background 0.35s, color 0.35s, border-color 0.35s;
    }

    #theme-toggle-btn:hover {
      transform: scale(1.15) rotate(15deg);
      box-shadow: 0 6px 24px rgba(0,0,0,0.45);
    }

    /* Smooth theme transition on the whole page */
    body {
      transition: background-color 0.35s ease, color 0.35s ease;
    }
  `;
  document.head.appendChild(style);
  const btn = document.createElement("button");
  btn.id = "theme-toggle-btn";
  btn.setAttribute("aria-label", "Toggle light/dark mode");
  btn.setAttribute("title", "Toggle light/dark mode");

  const DARK_ICON  = "🌙";
  const LIGHT_ICON = "☀️";
  const STORAGE_KEY = "sn-theme";

  function applyTheme(mode) {
    if (mode === "light") {
      document.body.classList.add("light-mode");
      btn.textContent = DARK_ICON;   // clicking again → go dark
      btn.setAttribute("title", "Switch to dark mode");
    } else {
      document.body.classList.remove("light-mode");
      btn.textContent = LIGHT_ICON;  // clicking again → go light
      btn.setAttribute("title", "Switch to light mode");
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }
  const saved = localStorage.getItem(STORAGE_KEY) || "dark";
  applyTheme(saved);
  btn.addEventListener("click", () => {
    const current = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
  document.body.appendChild(btn);
})();
