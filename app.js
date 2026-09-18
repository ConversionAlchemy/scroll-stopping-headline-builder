const FORMULAS = [
  { id: "p1", category: "promise", name: "Outcome without obstacle", required: ["outcome", "roadblock"], headline: "{outcome}—without {roadblock}", sub: "{product} uses {mechanism} to help {audience} {outcome}.", pair: "Promise + how it works" },
  { id: "p2", category: "promise", name: "Product for outcome", required: ["product", "audience", "outcome"], headline: "The {product} that helps {audience} {outcome}", sub: "Made with {feature} for a simpler path to {outcome}.", pair: "Promise + benefit" },
  { id: "p3", category: "promise", name: "Outcome starts here", required: ["outcome", "mechanism"], headline: "{outcome} starts with {mechanism}", sub: "Meet {product}, designed for {audience}.", pair: "Promise + mechanism" },
  { id: "p4", category: "promise", name: "Finally without", required: ["outcome", "alternative"], headline: "Finally, {outcome} without {alternative}", sub: "{mechanism} helps {audience} get there with less friction.", pair: "Promise + relief" },
  { id: "p5", category: "promise", name: "How to in a timeframe", required: ["audience", "outcome", "timeframe"], headline: "How {audience} can {outcome} {timeframe}", sub: "{product} makes it possible with {mechanism}.", pair: "Promise + timeframe" },
  { id: "p6", category: "promise", name: "Simpler way", required: ["outcome"], headline: "A simpler way to {outcome}", sub: "{product} combines {feature} with {mechanism}.", pair: "Promise + process" },
  { id: "p7", category: "promise", name: "Everything you need", required: ["outcome"], headline: "Everything you need to {outcome}", sub: "Built for {audience}, with {feature} where it matters.", pair: "Promise + fit" },
  { id: "p8", category: "promise", name: "From pain to outcome", required: ["pain", "outcome"], headline: "From {pain} to {outcome}", sub: "Discover how {product} uses {mechanism} to change the experience.", pair: "Before + after" },

  { id: "n1", category: "pain", name: "Tired of the problem", required: ["pain", "product"], headline: "Tired of {pain}? Try {product}", sub: "{mechanism} helps {audience} {outcome}.", pair: "Pain + solution" },
  { id: "n2", category: "pain", name: "Stop the problem", required: ["pain", "roadblock"], headline: "Stop {pain} without {roadblock}", sub: "{product} uses {mechanism} to help you {outcome}.", pair: "Pain + reassurance" },
  { id: "n3", category: "pain", name: "Why it keeps happening", required: ["pain", "mechanism"], headline: "Why {pain} keeps happening—and what to do instead", sub: "{mechanism} gives {audience} a better path to {outcome}.", pair: "Pain + education" },
  { id: "n4", category: "pain", name: "No more trade-off", required: ["alternative", "roadblock", "outcome"], headline: "No {alternative}. No {roadblock}. Just {outcome}.", sub: "Meet {product}, made for {audience}.", pair: "Frustration + relief" },

  { id: "r1", category: "proof", name: "Proof first", required: ["proof", "outcome"], headline: "{proof}: a better way to {outcome}", sub: "See how {product} turns {mechanism} into a practical advantage.", pair: "Proof + promise" },
  { id: "r2", category: "proof", name: "Outcome backed by proof", required: ["outcome", "proof"], headline: "{outcome}, backed by {proof}", sub: "{product} was designed for {audience} using {mechanism}.", pair: "Promise + proof" },
  { id: "r3", category: "proof", name: "Proof and counting", required: ["proof", "product"], headline: "{proof}—and counting. Discover {product}", sub: "A more believable way for {audience} to {outcome}.", pair: "Proof + product" },
  { id: "r4", category: "proof", name: "Pain plus proof", required: ["pain", "proof"], headline: "Still dealing with {pain}? {proof}", sub: "{product} helps through {mechanism}.", pair: "Pain + proof" },

  { id: "m1", category: "mechanism", name: "Mechanism behind outcome", required: ["mechanism", "outcome"], headline: "The {mechanism} behind {outcome}", sub: "Inside {product}: {feature}, designed for {audience}.", pair: "Mechanism + feature" },
  { id: "m2", category: "mechanism", name: "Smarter way", required: ["mechanism", "outcome"], headline: "{mechanism}: the smarter way to {outcome}", sub: "Created for {audience} who are done with {alternative}.", pair: "Mechanism + contrast" },
  { id: "m3", category: "mechanism", name: "Feature for outcome", required: ["feature", "outcome"], headline: "{feature} for {outcome}", sub: "It’s how {product} helps {audience} move beyond {pain}.", pair: "Feature + benefit" },
  { id: "m4", category: "mechanism", name: "Meet the product", required: ["product", "outcome"], headline: "Meet {product}: {outcome} made simpler", sub: "The difference is {mechanism}.", pair: "Product + process" },
  { id: "m5", category: "mechanism", name: "Built to", required: ["product", "outcome"], headline: "{product}: built to help you {outcome}", sub: "Get there with {feature} and {mechanism}.", pair: "Product + benefit" },

  { id: "o1", category: "offer", name: "Offer first", required: ["offer", "outcome"], headline: "{offer}—and start to {outcome}", sub: "Try {product}, made for {audience} with {mechanism}.", pair: "Offer + promise" },
  { id: "o2", category: "offer", name: "Reassuring offer", required: ["alternative", "offer"], headline: "Done with {alternative}? {offer}", sub: "See how {product} helps {audience} {outcome}.", pair: "Frustration + offer" },
  { id: "o3", category: "offer", name: "Try it for yourself", required: ["product", "offer"], headline: "Try {product} for yourself", sub: "{offer}. Experience {mechanism} on your way to {outcome}.", pair: "Product + offer" },
  { id: "o4", category: "offer", name: "Offer with proof", required: ["offer", "proof"], headline: "{offer}", sub: "Join {proof} and discover a more credible way to {outcome}.", pair: "Offer + proof" },

  { id: "i1", category: "identity", name: "Designed for", required: ["audience", "outcome"], headline: "Designed for {audience} who want to {outcome}", sub: "{product} delivers through {mechanism}.", pair: "Identity + mechanism" },
  { id: "i2", category: "identity", name: "If this is you", required: ["audience", "pain"], headline: "If you’re {audience} and tired of {pain}, start here", sub: "{product} helps you {outcome} with {mechanism}.", pair: "Identity + pain" },
  { id: "i3", category: "identity", name: "What if", required: ["outcome", "roadblock"], headline: "What if you could {outcome} without {roadblock}?", sub: "That’s why {product} uses {mechanism}.", pair: "Question + reason" },
  { id: "i4", category: "identity", name: "Waiting for", required: ["product", "audience"], headline: "The {product} {audience} have been waiting for", sub: "Designed to help you {outcome}, with {feature} built in.", pair: "Identity + product" },
  { id: "i5", category: "identity", name: "Switching from", required: ["audience", "alternative", "product"], headline: "Why {audience} are switching from {alternative} to {product}", sub: "The difference: {mechanism}, plus {proof}.", pair: "Identity + contrast" },
  { id: "i6", category: "identity", name: "Routine route", required: ["routine", "outcome"], headline: "Make {routine} your route to {outcome}", sub: "Add {product} for {feature} that fits your day.", pair: "Routine + promise" }
];

const EXAMPLES = [
  {
    product: "DreamCloud Pillow", audience: "side sleepers", outcome: "wake up without neck pain",
    pain: "waking up with a stiff neck", alternative: "constantly flipping your pillow",
    roadblock: "buying another expensive pillow", mechanism: "adaptive dual-layer support",
    feature: "adjustable loft", proof: "trusted by 12,000+ sleepers", timeframe: "from the first night",
    routine: "your nightly wind-down", offer: "Try it for 60 nights, risk-free"
  },
  {
    product: "Brewhaus Grind & Brew", audience: "people who buy coffee out every morning",
    outcome: "café-quality coffee at home", pain: "weak, stale coffee from pre-ground beans",
    alternative: "queuing at the coffee shop before work", roadblock: "another machine cluttering the counter",
    mechanism: "a built-in grinder that grinds fresh for every cup", feature: "automatic temperature control",
    proof: "rated 4.8 by 9,000 owners", timeframe: "from your first cup",
    routine: "your morning before work", offer: "Try it for 60 days, risk-free"
  },
  {
    product: "Coolweave Sheet Set", audience: "hot sleepers", outcome: "stay cool through the night",
    pain: "waking up sweating and kicking the covers off", alternative: "flipping to the cold side of the bed",
    roadblock: "spending more on sheets that still trap heat",
    mechanism: "long-staple cotton woven in breathable percale", feature: "stays cool to the touch",
    proof: "reviewers finally sleep under the covers again", timeframe: "from the first night",
    routine: "your nightly wind-down", offer: "Try them for 100 nights, with free returns"
  },
  {
    product: "Marlow Leather Weekender", audience: "people who want real leather without designer prices",
    outcome: "premium leather without the markup", pain: "paying four figures for a logo",
    alternative: "designer bags at ten times the cost", roadblock: "buying leather online without handling it first",
    mechanism: "handcrafted in Italy from top-grain leather", feature: "ages into a darker patina",
    proof: "made in the same Tuscan workshop as designer labels", timeframe: "within a week of ordering",
    routine: "your weekend packing", offer: "Try it for 100 days, with free returns"
  },
  {
    product: "Second Skin Daily Moisturiser", audience: "people tired of complicated skincare",
    outcome: "softer, smoother skin", pain: "skin that feels tight by midday",
    alternative: "a 10-step routine that takes twenty minutes", roadblock: "another bottle on an already full shelf",
    mechanism: "a single hydrating base replacing serum, essence and cream",
    feature: "two pumps covers your whole face", proof: "dermatologist tested on sensitive skin",
    timeframe: "within two weeks", routine: "right after cleansing, morning or night",
    offer: "Try it for 30 days, money back"
  },
  {
    product: "Rho Liquid Vitamins", audience: "people who take supplements and feel no difference",
    outcome: "actually absorb what you pay for", pain: "expensive supplements that pass straight through you",
    alternative: "swallowing a handful of capsules every morning", roadblock: "another supplement that does nothing",
    mechanism: "liposomal spheres that shield nutrients during digestion",
    feature: "10x higher absorption than capsules", proof: "trusted by 100,000+ customers",
    timeframe: "within the first month", routine: "one spoonful with breakfast",
    offer: "60-day money-back guarantee"
  },
  {
    product: "Lumen Clip-In Extensions", audience: "women who want fuller hair without a salon appointment",
    outcome: "salon-quality hair at home", pain: "thin, flat hair that never holds volume",
    alternative: "monthly salon visits and damaging glue", roadblock: "extensions that look obviously fake",
    mechanism: "seamless clip-in wefts matched to your shade", feature: "fits in under five minutes",
    proof: "over 40,000 sets sold", timeframe: "in under five minutes",
    routine: "your morning routine", offer: "Free returns within 30 days"
  }
];
let exampleIndex = -1;
let fillToken = 0;

const FIELD_KEYS = ["product", "audience", "outcome", "pain", "alternative", "roadblock", "mechanism", "feature", "proof", "timeframe", "routine", "offer"];

const FIELD_ALIASES = {
  "product or brand": "product", "brand": "product",
  "ideal customer": "audience", "customer": "audience",
  "desired outcome": "outcome",
  "main pain or problem": "pain", "pain point": "pain", "problem": "pain",
  "frustrating alternative": "alternative",
  "top objection or roadblock": "roadblock", "objection": "roadblock",
  "unique mechanism": "mechanism",
  "most persuasive feature": "feature",
  "proof or credibility": "proof", "credibility": "proof",
  "simple routine or use moment": "routine", "use moment": "routine"
};

const AI_PROMPT = `Fill out this brief for my product. Reply with a JSON object only: no explanation, no code fences, no extra keys.

{
  "product": "the product or brand name",
  "audience": "who it is for, e.g. side sleepers",
  "outcome": "the change they want, e.g. wake up without neck pain",
  "pain": "the main problem they have now",
  "alternative": "the frustrating thing they do instead",
  "roadblock": "their top objection to buying",
  "mechanism": "what makes it work, e.g. adaptive dual-layer support",
  "feature": "the single most persuasive feature",
  "proof": "a concrete credibility fact, e.g. trusted by 12,000+ sleepers",
  "timeframe": "how fast results come, e.g. from the first night",
  "routine": "when or how it is used, e.g. your nightly wind-down",
  "offer": "the offer or guarantee, e.g. try it for 60 nights, risk-free"
}

Rules: write every value as a natural lowercase phrase, not a sentence. No adjectives without substance. Use real specifics, never invented numbers. Leave a value as an empty string if you genuinely do not know it. Only "product", "audience" and "outcome" are required.

My product is:`;

function parsePasted(raw) {
  const text = String(raw || "").trim().replace(/^```[a-z]*\n?/i, "").replace(/```$/, "").trim();
  if (!text) return null;
  const out = {};

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end > start) {
    try {
      const parsed = JSON.parse(text.slice(start, end + 1));
      Object.entries(parsed).forEach(([key, value]) => {
        const mapped = FIELD_ALIASES[String(key).toLowerCase().trim()] || String(key).toLowerCase().trim();
        if (FIELD_KEYS.includes(mapped) && typeof value === "string") out[mapped] = value.trim();
      });
      if (Object.keys(out).length) return out;
    } catch {}
  }

  text.split(/\n+/).forEach(line => {
    const match = line.match(/^\s*[-*"]?\s*([A-Za-z ]+?)"?\s*[:=]\s*"?(.+?)"?,?\s*$/);
    if (!match) return;
    const mapped = FIELD_ALIASES[match[1].toLowerCase().trim()] || match[1].toLowerCase().trim();
    if (FIELD_KEYS.includes(mapped)) out[mapped] = match[2].trim();
  });

  return Object.keys(out).length ? out : null;
}

function fillFields(data, label) {
  const entries = FIELD_KEYS.filter(key => data[key]).map(key => [key, data[key]]);
  const token = ++fillToken;
  FIELD_KEYS.forEach(key => form.elements[key].value = "");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    entries.forEach(([key, value]) => form.elements[key].value = value);
    saveForm();
    return notify(label);
  }

  let index = 0;
  const step = () => {
    if (token !== fillToken) return;
    const [key, value] = entries[index];
    form.elements[key].value = value;
    index += 1;
    if (index < entries.length) {
      setTimeout(step, 26 + Math.random() * 48);
      return;
    }
    saveForm();
    notify(label);
  };
  setTimeout(step, 40);
}

const FLOOR = 0.5;
const CEILING = 0.85;
const MIN_RESULTS = 6;

const STORAGE_KEY = "ca-headline-builder-v1";
const form = document.querySelector("#headlineForm");
const resultsSection = document.querySelector("#resultsSection");
const resultsEl = document.querySelector("#results");
const emptyState = document.querySelector("#emptyState");
const countEl = document.querySelector("#resultsCount");
const caret = document.querySelector("#caret");
const generateButton = document.querySelector("#generateButton");
let generated = [];
let runToken = 0;

function titleCaseStart(value) {
  const text = String(value || "").trim();
  return text ? text[0].toUpperCase() + text.slice(1) : "";
}

const SMALL_WORDS = new Set(["a","an","and","as","at","but","by","for","from","in","into","nor","of","on","onto","or","over","per","so","the","to","up","via","with","yet"]);

function titleCase(value) {
  const words = String(value || "").trim().split(/\s+/);
  return words.map((word, index) => {
    const bare = word.toLowerCase();
    if (index > 0 && index < words.length - 1 && SMALL_WORDS.has(bare.replace(/[^a-z]/g, ""))) return bare;
    return word.replace(/^([^A-Za-z]*)([a-z])/, (_, lead, letter) => lead + letter.toUpperCase());
  }).join(" ");
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
  data.maxChars = Number(data.maxChars || 60);
  data.maxSubChars = Number(data.maxSubChars || 140);
  data.includeSubhead = document.querySelector("#includeSubhead").checked;
  data.includeHeadline = document.querySelector("#includeHeadline").checked || !data.includeSubhead;
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

function fillRatio(formula, data) {
  const placeholders = [...new Set([...`${formula.headline} ${formula.sub}`.matchAll(/\{(\w+)\}/g)].map(match => match[1]))];
  const supplied = placeholders.filter(key => data[key]).length;
  return placeholders.length ? supplied / placeholders.length : 1;
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
  const lineWidth = 28;
  const lines = Math.max(1, Math.ceil(chars / lineWidth));
  const checks = [
    { label: chars <= data.maxChars ? `${chars} characters` : `${chars} characters—trim`, pass: chars <= data.maxChars },
    { label: subheadline.length <= data.maxSubChars ? "Subheadline fits" : "Subheadline long", pass: !data.includeSubhead || subheadline.length <= data.maxSubChars },
    { label: `${lines} est. mobile line${lines === 1 ? "" : "s"}`, pass: lines <= 3 },
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

function generate(event) {
  event?.preventDefault();
  if (!form.reportValidity()) return;
  const data = getInputs();
  saveForm(data);
  const eligible = FORMULAS.filter(formula => hasAllRequired(formula, data));
  let threshold = FLOOR + Math.random() * (CEILING - FLOOR);
  let passing = eligible.filter(formula => fillRatio(formula, data) >= threshold);
  while (passing.length < MIN_RESULTS && threshold > 0) {
    threshold -= 0.1;
    passing = eligible.filter(formula => fillRatio(formula, data) >= threshold);
  }
  generated = passing
    .map(formula => buildCandidate(formula, data))
    .sort((a, b) => scoreCandidate(b) - scoreCandidate(a));
  resultsSection.hidden = false;
  revealResults();
}

function rowDelay(index) {
  const base = Math.max(45, 230 - index * 14);
  const jitter = Math.random() * 90;
  const catch_ = index > 0 && index % 5 === 0 ? 260 + Math.random() * 180 : 0;
  return base + jitter + catch_;
}

function revealResults() {
  const token = ++runToken;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  resultsEl.innerHTML = "";
  countEl.textContent = "(0)";
  emptyState.hidden = generated.length > 0;
  if (!generated.length) return;
  if (reduced) return renderResults();

  generateButton.disabled = true;
  generateButton.classList.add("is-rolling");
  caret.hidden = false;
  let index = 0;

  const step = () => {
    if (token !== runToken) return;
    resultsEl.insertAdjacentHTML("beforeend", cardTemplate(generated[index], index));
    index += 1;
    countEl.textContent = `(${index})`;
    if (index < generated.length) {
      setTimeout(step, rowDelay(index));
      return;
    }
    caret.hidden = true;
    generateButton.classList.remove("is-rolling");
    generateButton.disabled = false;
  };

  setTimeout(step, 320);
}

function scoreCandidate(item) {
  const passed = item.checks.filter(check => check.pass).length;
  const offerBoost = item.category === "offer" ? 1.5 : 0;
  const proofBoost = item.category === "proof" ? 1 : 0;
  const lengthPenalty = Math.max(0, item.chars - item.data.maxChars) / 5;
  const subPenalty = item.data.includeSubhead ? Math.max(0, item.subheadline.length - item.data.maxSubChars) / 20 : 0;
  const roll = Math.random() * 1.2;
  return passed + offerBoost + proofBoost + roll - lengthPenalty - subPenalty;
}

function renderResults() {
  countEl.textContent = `(${generated.length})`;
  resultsEl.innerHTML = generated.map((item, index) => cardTemplate(item, index)).join("");
  emptyState.hidden = generated.length > 0;
}

function countsLabel(item) {
  const parts = [];
  if (item.data.includeHeadline) parts.push(item.chars);
  if (item.data.includeSubhead) parts.push(item.subheadline.length);
  return `${parts.join(", ")} Characters`;
}

function cardTemplate(item, index) {
  const head = item.data.includeHeadline ? `<h2 class="headline-preview">${escapeHtml(titleCase(item.headline))}</h2>` : "";
  const sub = item.data.includeSubhead ? `<p class="subheadline-preview">${escapeHtml(titleCase(item.subheadline))}</p>` : "";
  return `<article class="result-card" data-id="${item.id}">
    <p class="result-number">#${index + 1}</p>
    ${head}
    ${sub}
    <div class="card-footer"><span class="counts">${countsLabel(item)}</span><div class="card-actions"><button class="result-action" type="button" data-action="edit">Edit</button><button class="result-action" type="button" data-action="copy">Copy</button></div></div>
  </article>`;
}

function sentenceLabel(value) {
  const text = cleanText(value).toLowerCase();
  return titleCaseStart(text);
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
}

function copyItem(item) {
  const lines = [];
  if (item.data.includeHeadline) lines.push(titleCase(item.headline));
  if (item.data.includeSubhead) lines.push(titleCase(item.subheadline));
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
  textarea.value = `${titleCase(item.headline)}\n${titleCase(item.subheadline)}`;
  const anchor = card.querySelector(".headline-preview") || card.querySelector(".subheadline-preview") || card.querySelector(".checks");
  anchor.before(textarea);
  card.querySelector("[data-action='edit']").textContent = "Apply";
  textarea.focus();
}

form.addEventListener("submit", generate);
form.addEventListener("input", () => {
  updateSettingsDisplay();
  saveForm();
});

resultsEl.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  const card = event.target.closest(".result-card");
  if (!button || !card) return;
  const item = generated.find(candidate => candidate.id === card.dataset.id);
  if (!item) return;
  if (button.dataset.action === "copy") copyItem(item);
  if (button.dataset.action === "edit") toggleEditor(card, item);
});

document.querySelector("#saveAll").addEventListener("click", () => {
  if (!generated.length) return notify("Generate some directions first.");
  window.print();
});

document.querySelector("#loadExample").addEventListener("click", () => {
  exampleIndex = (exampleIndex + 1) % EXAMPLES.length;
  const example = EXAMPLES[exampleIndex];
  fillFields(example, `Loaded ${example.product}. Example ${exampleIndex + 1} of ${EXAMPLES.length}.`);
});

const pasteDialog = document.querySelector("#pasteDialog");
const pasteInput = document.querySelector("#pasteInput");
const pasteError = document.querySelector("#pasteError");

function currentAsCode() {
  const data = getInputs();
  const shape = {};
  FIELD_KEYS.forEach(key => shape[key] = data[key] || "");
  return JSON.stringify(shape, null, 2);
}

document.querySelector("#openPaste").addEventListener("click", () => {
  pasteError.hidden = true;
  pasteInput.value = currentAsCode();
  pasteDialog.showModal();
  document.body.classList.add("dialog-open");
  pasteInput.focus();
  pasteInput.setSelectionRange(0, 0);
});

pasteDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

pasteDialog.addEventListener("click", event => {
  const box = pasteDialog.getBoundingClientRect();
  const inside = event.clientX >= box.left && event.clientX <= box.right
    && event.clientY >= box.top && event.clientY <= box.bottom;
  if (!inside) pasteDialog.close();
});

document.querySelector("#closePaste").addEventListener("click", () => pasteDialog.close());

document.querySelector("#copyPrompt").addEventListener("click", () => {
  navigator.clipboard.writeText(AI_PROMPT).then(() => notify("AI instructions copied."));
});

document.querySelector("#applyPaste").addEventListener("click", () => {
  const data = parsePasted(pasteInput.value);
  if (!data) {
    pasteError.textContent = "Could not read that. Paste the JSON object your AI returned, or one field per line as name: value.";
    pasteError.hidden = false;
    return;
  }
  const missing = ["product", "audience", "outcome"].filter(key => !data[key]);
  if (missing.length) {
    pasteError.textContent = `Missing required field${missing.length === 1 ? "" : "s"}: ${missing.join(", ")}.`;
    pasteError.hidden = false;
    return;
  }
  pasteDialog.close();
  fillFields(data, `Filled ${Object.keys(data).length} fields from your AI.`);
});

function resetBuilder() {
  form.reset();
  updateSettingsDisplay();
  localStorage.removeItem(STORAGE_KEY);
  generated = [];
  resultsSection.hidden = true;
  notify("Builder reset.");
  window.scrollTo({ top: 0 });
}

document.querySelector("#resetAll").addEventListener("click", resetBuilder);
document.querySelector("#resetFooter").addEventListener("click", resetBuilder);

restoreForm();
updateSettingsDisplay();

function updateSettingsDisplay() {
  const maxChars = document.querySelector("#maxChars");
  const maxSubChars = document.querySelector("#maxSubChars");
  document.querySelector("#maxCharsValue").textContent = maxChars.value;
  document.querySelector("#maxSubCharsValue").textContent = maxSubChars.value;
  updateRangeProgress(maxChars);
  updateRangeProgress(maxSubChars);
  document.querySelector("#headlineCharsSetting").hidden = !document.querySelector("#includeHeadline").checked;
  document.querySelector("#subheadCharsSetting").hidden = !document.querySelector("#includeSubhead").checked;
}

function updateRangeProgress(input) {
  const progress = ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
  input.closest(".range-wrap").style.setProperty("--range-progress", `${progress}%`);
}

const includeHeadline = document.querySelector("#includeHeadline");
const includeSubhead = document.querySelector("#includeSubhead");
[includeHeadline, includeSubhead].forEach(box => box.addEventListener("change", () => {
  if (!includeHeadline.checked && !includeSubhead.checked) box.checked = true;
  updateSettingsDisplay();
}));

document.querySelectorAll("img").forEach(image => {
  image.addEventListener("error", () => { image.style.visibility = "hidden"; });
});
