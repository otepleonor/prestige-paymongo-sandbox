const reference = new URLSearchParams(window.location.search).get("reference");
const target = document.querySelector("[data-reference]");

if (target && reference && /^[A-Za-z0-9_-]{1,80}$/.test(reference)) {
  target.textContent = reference;
}
