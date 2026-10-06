const reference = new URLSearchParams(window.location.search).get("reference");
const target = document.querySelector("[data-reference]");
const stateMessage = document.querySelector("[data-state-message]");

if (target && reference && /^[A-Za-z0-9_-]{1,80}$/.test(reference)) {
  target.textContent = reference;

  if (stateMessage && reference.startsWith("PRESTIGE-TEST-")) {
    stateMessage.textContent =
      "This legacy sandbox payment is not linked to a GHL appointment. Return to booking to create an appointment, and do not reuse this checkout link.";
    stateMessage.dataset.tone = "warning";
  }
}
