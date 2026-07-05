// Animates color through the full hue wheel over a fixed duration.
// Opt in per-property via class:
//   revolve-bg     -> background-color
//   revolve-border -> border-color
//   revolve-text   -> color (including nested <a> tags)
(function () {
	const durationMs = 15000;

	function tick(bgEls, borderEls, textEls) {
		const elapsed = Date.now() % durationMs;
		const hue = (elapsed / durationMs) * 360;
		const color = `hsl(${hue}, 80%, 60%)`;

		for (const el of bgEls) el.style.backgroundColor = color;
		for (const el of borderEls) el.style.borderColor = color;
		for (const el of textEls) {
			el.style.color = 'rgb(var(--black))';
			for (const link of el.querySelectorAll('a')) {
				link.style.color = 'rgb(var(--black))';
			}
		}

		requestAnimationFrame(() => tick(bgEls, borderEls, textEls));
	}

	function start() {
		const bgEls = document.querySelectorAll('.revolve-bg');
		const borderEls = document.querySelectorAll('.revolve-border');
		const textEls = document.querySelectorAll('.revolve-text');
		if (!bgEls.length && !borderEls.length && !textEls.length) return;
		requestAnimationFrame(() => tick(bgEls, borderEls, textEls));
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', start);
	} else {
		start();
	}
})();
