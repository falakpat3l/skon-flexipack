/* Skon Flexipack site script.
   Loaded in the head (not deferred) so the saved theme is applied before the page paints.
   Kept in its own file so the Content-Security-Policy can allow scripts from this site only. */
(function () {
  var root = document.documentElement;

  /* Theme: saved choice first, then the phone or computer setting */
  root.classList.add("js");
  var saved = null;
  try { saved = localStorage.getItem("skon-theme"); } catch (e) {}
  if (saved === "dark" || (!saved && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
  }

  /* Product photo that fails to load: show a neutral placeholder.
     Listening in the capture phase catches errors from images parsed after this script. */
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.parentNode && t.parentNode.classList && t.parentNode.classList.contains("pic")) {
      t.parentNode.classList.add("broken");
    }
  }, true);

  function init() {
    /* Product filters */
    var list = document.getElementById("products-list");
    var status = document.getElementById("filter-status");
    var cards = list.querySelectorAll(".card");
    var filts = document.querySelectorAll(".filt");
    filts.forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-f"), shown = 0;
        filts.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        cards.forEach(function (li) {
          var on = f === "all" || li.getAttribute("data-f") === f;
          li.hidden = !on;
          if (on) shown++;
        });
        status.textContent = "Showing " + shown + " of " + cards.length + " products";
      });
    });

    /* Mobile menu */
    var menuBtn = document.getElementById("menu-btn"), menu = document.getElementById("menu");
    function setMenu(open) {
      menu.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("open") && !e.target.closest(".head")) setMenu(false);
    });

    /* Theme button */
    var tb = document.getElementById("theme"), meta = document.querySelector('meta[name="theme-color"]');
    function sync() {
      var dark = root.getAttribute("data-theme") === "dark";
      tb.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      meta.setAttribute("content", dark ? "#0e1528" : "#ffffff");
    }
    tb.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark";
      if (dark) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", "dark");
      try { localStorage.setItem("skon-theme", dark ? "light" : "dark"); } catch (e) {}
      sync();
    });
    sync();

    /* Scroll reveal */
    var rev = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      rev.forEach(function (el) { io.observe(el); });
    } else {
      rev.forEach(function (el) { el.classList.add("in"); });
    }

    document.getElementById("press").classList.add("ink-in");
    document.getElementById("yr").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
