:root {
  --bg: #f4efe7;
  --panel: #fffaf1;
  --panel-strong: #f0d9b4;
  --primary: #7a3d1b;
  --primary-dark: #4e2513;
  --gold: #d7a647;
  --ink: #1d1a19;
  --muted: #5f564f;
  --green: #3c6e47;
  --green-soft: #dfeee2;
  --shadow: 0 18px 45px rgba(56, 35, 16, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.7;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(35, 22, 17, 0.88);
  backdrop-filter: blur(12px);
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.crest {
  font-size: 1.5rem;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.8rem 1rem;
  font-size: 0.88rem;
}

.main-nav a {
  color: rgba(255, 255, 255, 0.9);
  transition: opacity 0.2s ease;
}

.main-nav a:hover {
  opacity: 1;
  color: #f9d68a;
}

.hero {
  background: linear-gradient(135deg, rgba(115, 68, 43, 0.96), rgba(52, 32, 22, 0.95));
  color: #fff7ec;
  padding: 5rem 0 4rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--gold);
}

.hero h1,
.section-heading h2 {
  font-family: "Cinzel", serif;
  line-height: 1.15;
  margin: 0;
}

.hero h1 {
  font-size: clamp(2.4rem, 4vw, 4.5rem);
  max-width: 700px;
}

.hero-copy p {
  max-width: 680px;
  font-size: 1.08rem;
  color: rgba(255, 247, 236, 0.9);
}

.hero-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.85rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--gold);
  color: var(--primary-dark);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.hero-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.hero-card h2 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.hero-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
}

.hero-card li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
}

.hero-card span {
  min-width: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  background: rgba(255, 222, 164, 0.18);
  color: #ffe8b0;
}

.section {
  padding: 4.5rem 0;
}

.section.alt {
  background: #f7f0e8;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  color: var(--primary-dark);
}

.content-grid {
  display: grid;
  gap: 1.25rem;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.single-col {
  grid-template-columns: 1fr;
}

.card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(106, 76, 46, 0.09);
  border-radius: 22px;
  padding: 1.4rem 1.5rem;
  box-shadow: 0 12px 25px rgba(66, 38, 22, 0.05);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.35rem;
  color: var(--primary);
}

.card p,
.card li, .source-box p, .source-box li {
  color: var(--muted);
}

.card strong {
  color: var(--primary-dark);
}

.highlight {
  background: linear-gradient(180deg, #fdf4e2, #f8ead0);
}

.check-list {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
}

.quiz-block {
  margin-top: 2.25rem;
}

.quiz-block h3 {
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.quiz-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.quiz-card {
  background: #fff;
  border: 1px solid rgba(106, 76, 46, 0.08);
  border-radius: 20px;
  padding: 1.25rem;
  box-shadow: 0 10px 26px rgba(83, 53, 29, 0.05);
}

.quiz-card p {
  margin-top: 0;
  font-weight: 600;
  color: var(--primary-dark);
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  margin-top: 1rem;
}

.option {
  appearance: none;
  border: 1px solid rgba(116, 85, 60, 0.18);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  background: #faf5ef;
  color: var(--ink);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.option:hover {
  border-color: rgba(122, 61, 27, 0.5);
  transform: translateY(-1px);
}

.option.correct {
  background: #dff3e4;
  border-color: #5da26b;
  color: #214b2d;
}

.option.wrong {
  background: #fbe2e2;
  border-color: #d36f69;
  color: #7c2c2a;
}

.feedback {
  min-height: 30px;
  margin-top: 0.9rem;
  font-weight: 700;
  color: var(--green);
}

.glossary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.glossary-item {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  border: 1px solid rgba(106, 76, 46, 0.08);
  padding: 1.2rem;
  box-shadow: 0 10px 20px rgba(76, 50, 31, 0.04);
}

.glossary-item h3 {
  margin-top: 0;
  color: var(--primary);
}

.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4px;
  background: linear-gradient(90deg, rgba(122, 61, 27, 0.3), rgba(215, 166, 71, 0.8));
  z-index: 0;
}

.timeline-item {
  position: relative;
  z-index: 1;
  background: #fff;
  border: 1px solid rgba(122, 61, 27, 0.12);
  border-radius: 18px;
  padding: 1rem 0.9rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(70, 39, 18, 0.06);
}

.timeline-item span {
  display: inline-block;
  width: 62px;
  height: 62px;
  line-height: 62px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), #f6d79c);
  color: var(--primary-dark);
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.timeline-item p {
  margin: 0;
  font-weight: 600;
  color: var(--ink);
}

.source-box {
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(122, 61, 27, 0.09);
  padding: 1.7rem;
  box-shadow: 0 10px 25px rgba(64, 36, 21, 0.04);
}

.source-box ul {
  margin: 0.8rem 0 1rem;
  padding-left: 1.2rem;
}

.source-note {
  font-weight: 600;
  color: var(--primary-dark);
}

.site-footer {
  background: #271b17;
  color: rgba(255, 255, 255, 0.8);
  padding: 1.2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .hero-inner,
  .two-col,
  .quiz-grid,
  .glossary-grid,
  .timeline {
    grid-template-columns: 1fr;
  }

  .timeline {
    position: static;
  }

  .timeline::before {
    display: none;
  }

  .main-nav {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .nav-wrap {
    align-items: flex-start;
    flex-direction: column;
    padding: 0.9rem 0;
  }

  .main-nav {
    gap: 0.5rem 0.8rem;
  }

  .hero {
    padding-top: 4.5rem;
  }

  .options {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }
}
