const grid = document.getElementById('paletteGrid');
const btn = document.getElementById('btnGenerate');
const countSelect = document.getElementById('countSelect');
const formatSelect = document.getElementById('formatSelect');
const feedbackBar = document.getElementById('feedbackBar');
const feedbackText = document.getElementById('feedbackText');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const toastIcon = document.getElementById('toastIcon');
const counterBadge = document.getElementById('counterBadge');

let totalGenerated = 0;
let toastTimer = null;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0)*255), Math.round(f(8)*255), Math.round(f(4)*255)];
}

function rgbToHex(r, g, b) {
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

function generateColor() {
  const h = randomInt(0, 359);
  const s = randomInt(45, 90);
  const l = randomInt(35, 70);
  const [r, g, b] = hslToRgb(h, s, l);
  const hex = rgbToHex(r, g, b);
  return { h, s, l, r, g, b, hex };
}

function formatSecondary(color, fmt) {
  if (fmt === 'rgba') return `rgba(${color.r},${color.g},${color.b},1)`;
  if (fmt === 'hsl')  return `hsl(${color.h},${color.s}%,${color.l}%)`;
  return color.hex;
}

function showToast(icon, msg, duration = 2400) {
  if (toastTimer) clearTimeout(toastTimer);
  toastIcon.textContent = icon;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

function showFeedback(msg) {
  feedbackText.textContent = msg;
  feedbackBar.classList.add('visible');
  setTimeout(() => feedbackBar.classList.remove('visible'), 2800);
}

function copyToClipboard(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function buildCard(color, index, fmt) {
  const card = document.createElement('article');
  card.className = 'color-card animate';
  card.style.animationDelay = (index * 60) + 'ms';

  const swatch = document.createElement('div');
  swatch.className = 'color-swatch';
  swatch.style.backgroundColor = color.hex;

  const badge = document.createElement('span');
  badge.className = 'copied-badge';
  badge.textContent = '¡Copiado!';
  swatch.appendChild(badge);

  const hexLabel = document.createElement('span');
  hexLabel.className = 'color-hex';
  hexLabel.textContent = color.hex;

  const secondaryLabel = document.createElement('span');
  secondaryLabel.className = 'color-secondary';
  secondaryLabel.textContent = formatSecondary(color, fmt);

  card.appendChild(swatch);
  card.appendChild(hexLabel);
  card.appendChild(secondaryLabel);

  card.addEventListener('click', () => {
    copyToClipboard(color.hex);
    badge.classList.add('show');
    setTimeout(() => badge.classList.remove('show'), 1400);
    showToast('📋', `${color.hex} copiado al portapapeles`);
  });

  return card;
}

function generatePalette() {
  btn.classList.add('loading');
  btn.textContent = 'Generando...';

  setTimeout(() => {
    const count = parseInt(countSelect.value, 10);
    const fmt = formatSelect.value;

    grid.innerHTML = '';

    const colors = Array.from({ length: count }, generateColor);
    colors.forEach((color, i) => {
      grid.appendChild(buildCard(color, i, fmt));
    });

    totalGenerated++;
    counterBadge.textContent = `${totalGenerated} ${totalGenerated === 1 ? 'paleta generada' : 'paletas generadas'}`;
    counterBadge.classList.add('active');

    showFeedback(`✔ Paleta de ${count} colores en formato ${fmt.toUpperCase()} generada`);
    showToast('🎨', `Nueva paleta lista — ${count} colores`);

    btn.classList.remove('loading');
    btn.textContent = 'Generar.';
  }, 180);
}

btn.addEventListener('click', generatePalette);
generatePalette();
