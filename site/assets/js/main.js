// Countdown to June 6, 2025
function updateCountdown() {
    const target = new Date('2025-06-06T23:59:00');
    const now = new Date();
    const diff = target - now;

    const el = document.getElementById('countdown');
    if (!el) return;

    if (diff <= 0) {
        el.textContent = 'DEADLINE REACHED';
        return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const fmt = n => String(n).padStart(2, '0');
    el.innerHTML = `<span>${fmt(d)}</span><em>d</em> <span>${fmt(h)}</span><em>h</em> <span>${fmt(m)}</span><em>m</em> <span>${fmt(s)}</span><em>s</em>`;
}

if (document.getElementById('countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
