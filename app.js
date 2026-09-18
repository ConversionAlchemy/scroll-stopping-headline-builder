const FORMULAS = [
  { id: "p1", category: "promise", name: "Outcome Without Obstacle", required: ["outcome", "roadblock"], headline: "{outcome}—Without {roadblock}", sub: "{product} uses {mechanism} to help {audience} {outcome}.", pair: "Promise + how it works" },
  { id: "p2", category: "promise", name: "Product For Outcome", required: ["product", "audience", "outcome"], headline: "The {product} That Helps {audience} {outcome}", sub: "Made with {feature} for a simpler path to {outcome}.", pair: "Promise + benefit" },
  { id: "p3", category: "promise", name: "Outcome Starts Here", required: ["outcome", "mechanism"], headline: "{outcome} Starts With {mechanism}", sub: "Meet {product}, designed for {audience}.", pair: "Promise + mechanism" },
  { id: "p4", category: "promise", name: "Finally Without", required: ["outcome", "alternative"], headline: "Finally, {outcome} Without {alternative}", sub: "{mechanism} helps {audience} get there with less friction.", pair: "Promise + relief" },
  { id: "p5", category: "promise", name: "How To In A Timeframe", required: ["audience", "outcome", "timeframe"], headline: "How {audience} Can {outcome} {timeframe}", sub: "{product} makes it possible with {mechanism}.", pair: "Promise + timeframe" },
  { id: "p6", category: "promise", name: "Simpler Way", required: ["outcome"], headline: "A Simpler Way To {outcome}", sub: "{product} combines {feature} with {mechanism}.", pair: "Promise + process" },
  { id: "p7", category: "promise", name: "Everything You Need", required: ["outcome"], headline: "Everything You Need To {outcome}", sub: "Built for {audience}, with {feature} where it matters.", pair: "Promise + fit" },
  { id: "p8", category: "promise", name: "From Pain To Outcome", required: ["pain", "outcome"], headline: "From {pain} To {outcome}", sub: "Discover how {product} uses {mechanism} to change the experience.", pair: "Before + after" },

  { id: "n1", category: "pain", name: "Tired Of The Problem", required: ["pain", "product"], headline: "Tired Of {pain}? Try {product}", sub: "{mechanism} helps {audience} {outcome}.", pair: "Pain + solution" },
  { id: "n2", category: "pain", name: "Stop The Problem", required: ["pain", "roadblock"], headline: "Stop {pain} Without {roadblock}", sub: "{product} uses {mechanism} to help you {outcome}.", pair: "Pain + reassurance" },
  { id: "n3", category: "pain", name: "Why It Keeps Happening", required: ["pain", "mechanism"], headline: "Why {pain} Keeps Happening—and What To Do Instead", sub: "{mechanism} gives {audience} a better path to {outcome}.", pair: "Pain + education" },
  { id: "n4", category: "pain", name: "No More Trade-Off", required: ["alternative", "roadblock", "outcome"], headline: "No {alternative}. No {roadblock}. Just {outcome}.", sub: "Meet {product}, made for {audience}.", pair: "Frustration + relief" },

  { id: "r1", category: "proof", name: "Proof First", required: ["proof", "outcome"], headline: "{proof}: A Better Way To {outcome}", sub: "See how {product} turns {mechanism} into a practical advantage.", pair: "Proof + promise" },
  { id: "r2", category: "proof", name: "Outcome Backed By Proof", required: ["outcome", "proof"], headline: "{outcome}, Backed By {proof}", sub: "{product} was designed for {audience} using {mechanism}.", pair: "Promise + proof" },
  { id: "r3", category: "proof", name: "Proof And Counting", required: ["proof", "product"], headline: "{proof}—And Counting. Discover {product}", sub: "A more believable way for {audience} to {outcome}.", pair: "Proof + product" },
  { id: "r4", category: "proof", name: "Pain Plus Proof", required: ["pain", "proof"], headline: "Still Dealing With {pain}? {proof}", sub: "{product} helps through {mechanism}.", pair: "Pain + proof" },

  { id: "m1", category: "mechanism", name: "Mechanism Behind Outcome", required: ["mechanism", "outcome"], headline: "The {mechanism} Behind {outcome}", sub: "Inside {product}: {feature}, designed for {audience}.", pair: "Mechanism + feature" },
  { id: "m2", category: "mechanism", name: "Smarter Way", required: ["mechanism", "outcome"], headline: "{mechanism}: The Smarter Way To {outcome}", sub: "Created for {audience} who are done with {alternative}.", pair: "Mechanism + contrast" },
  { id: "m3", category: "mechanism", name: "Feature For Outcome", required: ["feature", "outcome"], headline: "{feature} For {outcome}", sub: "It’s how {product} helps {audience} move beyond {pain}.", pair: "Feature + benefit" },
  { id: "m4", category: "mechanism", name: "Meet The Product", required: ["product", "outcome"], headline: "Meet {product}: {outcome} Made Simpler", sub: "The difference is {mechanism}.", pair: "Product + process" },
  { id: "m5", category: "mechanism", name: "Built To", required: ["product", "outcome"], headline: "{product}: Built To Help You {outcome}", sub: "Get there with {feature} and {mechanism}.", pair: "Product + benefit" },

  { id: "o1", category: "offer", name: "Offer First", required: ["offer", "outcome"], headline: "{offer}—And Start To {outcome}", sub: "Try {product}, made for {audience} with {mechanism}.", pair: "Offer + promise" },
  { id: "o2", category: "offer", name: "Reassuring Offer", required: ["alternative", "offer"], headline: "Done With {alternative}? {offer}", sub: "See how {product} helps {audience} {outcome}.", pair: "Frustration + offer" },
  { id: "o3", category: "offer", name: "Try It For Yourself", required: ["product", "offer"], headline: "Try {product} For Yourself", sub: "{offer}. Experience {mechanism} on your way to {outcome}.", pair: "Product + offer" },
  { id: "o4", category: "offer", name: "Offer With Proof", required: ["offer", "proof"], headline: "{offer}", sub: "Join {proof} and discover a more credible way to {outcome}.", pair: "Offer + proof" },

  { id: "i1", category: "identity", name: "Designed For", required: ["audience", "outcome"], headline: "Designed For {audience} Who Want To {outcome}", sub: "{product} delivers through {mechanism}.", pair: "Identity + mechanism" },
  { id: "i2", category: "identity", name: "If This Is You", required: ["audience", "pain"], headline: "If You’re {audience} And Tired Of {pain}, Start Here", sub: "{product} helps you {outcome} with {mechanism}.", pair: "Identity + pain" },
  { id: "i3", category: "identity", name: "What If", required: ["outcome", "roadblock"], headline: "What If You Could {outcome} Without {roadblock}?", sub: "That’s why {product} uses {mechanism}.", pair: "Question + reason" },
  { id: "i4", category: "identity", name: "Waiting For", required: ["product", "audience"], headline: "The {product} {audience} Have Been Waiting For", sub: "Designed to help you {outcome}, with {feature} built in.", pair: "Identity + product" },
  { id: "i5", category: "identity", name: "Switching From", required: ["audience", "alternative", "product"], headline: "Why {audience} Are Switching From {alternative} To {product}", sub: "The difference: {mechanism}, plus {proof}.", pair: "Identity + contrast" },
  { id: "i6", category: "identity", name: "Routine Route", required: ["routine", "outcome"], headline: "Make {routine} Your Route To {outcome}", sub: "Add {product} for {feature} that fits your day.", pair: "Routine + promise" }
];

const CATEGORY_NAMES = {
  all: "All", promise: "Promise", pain: "Pain", proof: "Proof",
  mechanism: "Mechanism", offer: "Offer", identity: "Customer"
};

const STORAGE_KEY = "ca-headline-builder-v1";
const FAVORITES_KEY = "ca-headline-favorites-v1";
const form = document.querySelector("#headlineForm");
const resultsSection = document.querySelector("#resultsSection");
const resultsEl = document.querySelector("#results");
const emptyState = document.querySelector("#emptyState");
const summaryEl = document.querySelector("#resultsSummary");
const filterRow = document.querySelector("#filterRow");
const favoritesButton = document.querySelector("#showFavorites");
let generated = [];
let activeFilter = "all";
let favoritesOnly = false;

function titleCaseStart(value) {
  const text = String(value || "").trim();
  return text ? text[0].toUpperCase() + text.slice(1) : "";
}

function sentenceCase(value) {
  const text = String(value || "").trim().replace(/[.!?]+$/, "");
  return text ? text[0].toLowerCase() + text.slice(1) : "";
}

function cleanText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function getInputs() {
  const data = Object.fromEntries(new FormData(form).entries());
  Object.keys(data).forEach(key => data[key] = cleanText(data[key]));
  data.maxWords = Number(data.maxWords || 14);
  return data;
}

function fill(template, data, headline = false) {
  const resolved = template.replace(/\{(\w+)\}/g, (_, key) => data[key] || "")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
  return headline ? titleCaseStart(resolved) : resolved;
}

function hasAllRequired(formula, data) {
  return formula.required.every(key => data[key]);
}

function canComplete(template, data) {
  const keys = [...template.matchAll(/\{(\w+)\}/g)].map(match => match[1]);
  return keys.every(key => data[key]);
}

function buildCandidate(formula, data) {
  const headline = fill(formula.headline, data, true);
  const subheadline = canComplete(formula.sub, data) ? fill(formula.sub, data, false) : fallbackSubheadline(data);
  const words = headline.split(/\s+/).filter(Boolean).length;
  const chars = headline.length;
  const lineWidth = data.device === "mobile" ? 28 : 48;
  const lines = Math.max(1, Math.ceil(chars / lineWidth));
  const checks = [
    { label: words <= data.maxWords ? `${words} words` : `${words} words—trim`, pass: words <= data.maxWords },
    { label: `${lines} est. ${data.device} line${lines === 1 ? "" : "s"}`, pass: data.device === "mobile" ? lines <= 3 : lines <= 2 },
    { label: includesAny(headline, [data.audience, data.pain, data.outcome]) ? "Relevant hook" : "Check relevance", pass: includesAny(headline, [data.audience, data.pain, data.outcome]) },
    { label: includesAny(`${headline} ${subheadline}`, [data.mechanism, data.proof, data.feature, data.offer]) ? "Reason to believe" : "Add belief support", pass: includesAny(`${headline} ${subheadline}`, [data.mechanism, data.proof, data.feature, data.offer]) }
  ];
  return { ...formula, headline, subheadline, words, chars, lines, checks, data };
}

function fallbackSubheadline(data) {
  const parts = [];
  if (data.product && data.audience) parts.push(`${data.product} is designed for ${data.audience}`);
  if (data.mechanism) parts.push(`using ${sentenceCase(data.mechanism)}`);
  else if (data.feature) parts.push(`with ${sentenceCase(data.feature)}`);
  if (data.outcome) parts.push(`to help you ${sentenceCase(data.outcome)}`);
  return parts.length ? `${parts.join(" ")}.` : "Add a mechanism or proof point to make the promise more believable.";
}

function includesAny(haystack, values) {
  const source = haystack.toLowerCase();
  return values.filter(Boolean).some(value => source.includes(String(value).toLowerCase().replace(/[.!?]+$/, "")));
}

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || {}; }
  catch { return {}; }
}

function setFavorites(value) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(value));
}

function getFavoriteKey(item) {
  return `${item.id}:${item.headline}`;
}

function generate(event) {
  event?.preventDefault();
  if (!form.reportValidity()) return;
  const data = getInputs();
  saveForm(data);
  generated = FORMULAS
    .filter(formula => (data.category === "all" || formula.category === data.category) && hasAllRequired(formula, data))
    .map(formula => buildCandidate(formula, data))
    .sort((a, b) => scoreCandidate(b) - scoreCandidate(a));
  activeFilter = "all";
  favoritesOnly = false;
  favoritesButton.setAttribute("aria-pressed", "false");
  renderFilters();
  renderResults();
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scoreCandidate(item) {
  const passed = item.checks.filter(check => check.pass).length;
  const offerBoost = item.category === "offer" ? 1.5 : 0;
  const proofBoost = item.category === "proof" ? 1 : 0;
  const lengthPenalty = Math.max(0, item.words - item.data.maxWords);
  return passed + offerBoost + proofBoost - lengthPenalty;
}

function renderFilters() {
  const categories = ["all", ...new Set(generated.map(item => item.category))];
  filterRow.innerHTML = categories.map(category => `<button class="filter-button" type="button" data-filter="${category}" aria-pressed="${category === activeFilter}">${CATEGORY_NAMES[category]}</button>`).join("");
}

function renderResults() {
  const favorites = getFavorites();
  const visible = generated.filter(item => {
    const categoryMatch = activeFilter === "all" || item.category === activeFilter;
    const favoriteMatch = !favoritesOnly || favorites[getFavoriteKey(item)];
    return categoryMatch && favoriteMatch;
  });
  const inputCategory = getInputs().category;
  summaryEl.textContent = `${generated.length} complete direction${generated.length === 1 ? "" : "s"}${inputCategory === "all" ? ", ranked by usefulness." : ` in the ${CATEGORY_NAMES[inputCategory].toLowerCase()} family.`}`;
  resultsEl.innerHTML = visible.map(cardTemplate).join("");
  emptyState.hidden = visible.length > 0;
}

function cardTemplate(item) {
  const favorites = getFavorites();
  const favorite = Boolean(favorites[getFavoriteKey(item)]);
  const outputType = item.data.outputType;
  const hero = outputType === "hero" ? `<div class="hero-extra"><p><strong>CTA:</strong> ${escapeHtml(buildCta(item.data))}</p><p><strong>Image direction:</strong> ${escapeHtml(buildImageDirection(item.data))}</p></div>` : "";
  const sub = outputType === "headline" ? "" : `<p class="subheadline-preview">${escapeHtml(item.subheadline)}</p>`;
  return `<article class="result-card" data-id="${item.id}" data-device="${item.data.device}">
    <div class="card-top"><p class="formula-label">${escapeHtml(item.name)} · ${escapeHtml(item.pair)}</p><button class="favorite-button" type="button" data-action="favorite" aria-label="${favorite ? "Remove from" : "Add to"} favorites" aria-pressed="${favorite}">${favorite ? "★" : "☆"}</button></div>
    <h3 class="headline-preview">${escapeHtml(item.headline)}</h3>
    ${sub}${hero}
    <div class="checks">${item.checks.map(check => `<span class="check${check.pass ? "" : " warn"}">${escapeHtml(check.label)}</span>`).join("")}</div>
    <div class="card-footer"><span class="counts">${item.words} words · ${item.chars} characters</span><div class="card-actions"><button class="small-button" type="button" data-action="edit">Edit</button><button class="small-button" type="button" data-action="copy">Copy</button></div></div>
  </article>`;
}

function buildCta(data) {
  if (data.offer) return data.offer.replace(/[.!?]+$/, "");
  if (data.product) return `Shop ${data.product}`;
  return "Explore the product";
}

function buildImageDirection(data) {
  const subject = data.audience || "the customer";
  const moment = data.routine ? `during ${sentenceCase(data.routine)}` : "using the product";
  const result = data.outcome ? `; make ${sentenceCase(data.outcome)} visually obvious` : "";
  return `Show ${subject} ${moment}${result}.`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[char]));
}

function saveForm(data = getInputs()) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restoreForm() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!data) return;
    Object.entries(data).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });
  } catch {}
}

function notify(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyItem(item) {
  const lines = [item.headline];
  if (item.data.outputType !== "headline") lines.push(item.subheadline);
  if (item.data.outputType === "hero") lines.push(`CTA: ${buildCta(item.data)}`, `Image direction: ${buildImageDirection(item.data)}`);
  navigator.clipboard.writeText(lines.join("\n\n")).then(() => notify("Copied to clipboard."));
}

function toggleEditor(card, item) {
  const existing = card.querySelector(".editor");
  if (existing) {
    const [headline, ...rest] = existing.value.split("\n");
    item.headline = cleanText(headline) || item.headline;
    if (rest.join(" ").trim()) item.subheadline = cleanText(rest.join(" "));
    renderResults();
    notify("Edit applied to this session.");
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.className = "editor";
  textarea.setAttribute("aria-label", "Edit headline and subheadline");
  textarea.value = `${item.headline}\n${item.subheadline}`;
  card.querySelector(".headline-preview").before(textarea);
  card.querySelector("[data-action='edit']").textContent = "Apply";
  textarea.focus();
}

form.addEventListener("submit", generate);
form.addEventListener("input", () => saveForm());

filterRow.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderResults();
});

resultsEl.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  const card = event.target.closest(".result-card");
  if (!button || !card) return;
  const item = generated.find(candidate => candidate.id === card.dataset.id);
  if (!item) return;
  if (button.dataset.action === "copy") copyItem(item);
  if (button.dataset.action === "edit") toggleEditor(card, item);
  if (button.dataset.action === "favorite") {
    const favorites = getFavorites();
    const key = getFavoriteKey(item);
    if (favorites[key]) delete favorites[key];
    else favorites[key] = { headline: item.headline, subheadline: item.subheadline, formula: item.name };
    setFavorites(favorites);
    renderResults();
  }
});

favoritesButton.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  favoritesButton.setAttribute("aria-pressed", String(favoritesOnly));
  renderResults();
});

document.querySelector("#exportFavorites").addEventListener("click", () => {
  const favorites = Object.values(getFavorites());
  if (!favorites.length) return notify("Favorite at least one direction first.");
  const content = favorites.map((item, index) => `${index + 1}. ${item.headline}\n${item.subheadline}\nFormula: ${item.formula}`).join("\n\n");
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "headline-shortlist.txt";
  link.click();
  URL.revokeObjectURL(link.href);
  notify("Favorites exported.");
});

document.querySelector("#loadExample").addEventListener("click", () => {
  const example = {
    product: "DreamCloud Pillow", audience: "side sleepers", outcome: "wake up without neck pain",
    pain: "waking up with a stiff neck", alternative: "constantly flipping your pillow",
    mechanism: "adaptive dual-layer support", feature: "adjustable loft",
    proof: "trusted by 12,000+ sleepers", timeframe: "from the first night",
    roadblock: "buying another expensive pillow", routine: "your nightly wind-down",
    offer: "Try it for 60 nights, risk-free"
  };
  Object.entries(example).forEach(([key, value]) => form.elements[key].value = value);
  saveForm();
  notify("Example loaded. Generate when ready.");
});

document.querySelector("#resetAll").addEventListener("click", () => {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  generated = [];
  resultsSection.hidden = true;
  notify("Builder reset.");
});

document.querySelector("#clearSaved").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(FAVORITES_KEY);
  form.reset();
  generated = [];
  resultsSection.hidden = true;
  notify("Saved inputs and favorites cleared.");
});

restoreForm();
