// Reveal cards as they scroll into view, and highlight the active
// quick-jump nav pill based on which section is on screen.

document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var cards = document.querySelectorAll(".item-card, .bundle-card");
  if (reduceMotion) {
    cards.forEach(function (c) { c.classList.add("in-view"); });
  } else if ("IntersectionObserver" in window) {
    var cardObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(function (c) { cardObserver.observe(c); });
  } else {
    cards.forEach(function (c) { c.classList.add("in-view"); });
  }

  var navLinks = document.querySelectorAll(".quicknav nav a");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute("href"));
  });

  function setActive() {
    var pos = window.scrollY + 90;
    var current = 0;
    sections.forEach(function (sec, i) {
      if (sec && sec.offsetTop <= pos) current = i;
    });
    navLinks.forEach(function (a, i) {
      a.classList.toggle("active", i === current);
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }
});
