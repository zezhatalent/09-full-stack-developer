import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function CodeLayersBackground() {
  const { theme } = useTheme();
  const codeSnippets = [
    { x: 50, y: 80, w: 200, lines: 5, delay: 0.3 },
    { x: 350, y: 180, w: 160, lines: 4, delay: 0.6 },
    { x: 700, y: 120, w: 180, lines: 6, delay: 0.9 },
    { x: 1100, y: 200, w: 170, lines: 4, delay: 1.2 },
    { x: 200, y: 500, w: 220, lines: 5, delay: 1.5 },
    { x: 800, y: 550, w: 190, lines: 3, delay: 1.8 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1440 900" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
        {codeSnippets.map((snippet, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: snippet.delay, duration: 1 }}>
            <rect x={snippet.x} y={snippet.y} width={snippet.w} height={snippet.lines * 16 + 20} rx="6"
              fill="none" stroke={i % 2 === 0 ? theme.accent : theme.accent2} strokeWidth="1" />
            {Array.from({ length: snippet.lines }).map((_, j) => (
              <motion.line key={j}
                x1={snippet.x + 12} y1={snippet.y + 16 + j * 16}
                x2={snippet.x + snippet.w * (0.4 + Math.random() * 0.4)} y2={snippet.y + 16 + j * 16}
                stroke={j % 3 === 0 ? theme.accent : theme.accent2} strokeWidth="2" strokeLinecap="round" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: snippet.delay + j * 0.1 }} />
            ))}
          </motion.g>
        ))}
        {/* Bracket decorations */}
        {[
          'M400,100 L380,100 L380,250 L400,250', 'M1040,400 L1060,400 L1060,520 L1040,520',
        ].map((d, i) => (
          <motion.path key={`bracket-${i}`} d={d} fill="none" stroke={theme.accent} strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2 + i * 0.3 }} />
        ))}
      </svg>
    </div>
  );
}

function FloatingElements() {
  const { theme } = useTheme();
  const elements = Array.from({ length: 10 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 18 + 6, duration: Math.random() * 8 + 8, delay: Math.random() * 4,
    shape: ['tag', 'brace', 'bracket'][i % 3],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <motion.div key={el.id} className="absolute" style={{
          left: `${el.x}%`, top: `${el.y}%`, width: el.size, height: el.size,
          borderRadius: '3px',
          border: `1px solid ${el.id % 2 === 0 ? theme.accent : theme.accent2}`,
          background: `${el.id % 2 === 0 ? theme.accent : theme.accent2}10`,
        }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: 'easeInOut' }} />
      ))}
    </div>
  );
}

function Frontend() {
  const { theme } = useTheme();
  const ui = [
    { label: 'Header', w: 60, x: 0 },
    { label: 'Card', w: 90, x: 2 },
    { label: 'Card', w: 90, x: 3 },
    { label: 'Button', w: 40, x: 4 },
  ];
  return (
    <div className="rounded-xl border p-3" style={{ borderColor: theme.border, background: theme.surface }}>
      <p className="mb-2 font-mono text-[10px]" style={{ color: theme.accent }}>frontend/ UI layer</p>
      <div className="space-y-2">
        {ui.map((c, i) => (
          <motion.div key={c.label} className="flex items-center gap-2"
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.22 }}>
            <span className="h-5 rounded" style={{
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
              width: `${c.w}%`, opacity: 0.85
            }} />
            <span className="font-mono text-[9px]" style={{ color: theme.muted }}>{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Backend() {
  const { theme } = useTheme();
  const nodes = [{ label: 'API', x: 8 }, { label: 'Cache', x: 42 }, { label: 'DB', x: 76 }];
  return (
    <div className="rounded-xl border p-3" style={{ borderColor: theme.border, background: theme.surface }}>
      <p className="mb-3 font-mono text-[10px]" style={{ color: theme.accent2 }}>backend/ data layer</p>
      <div className="relative">
        <motion.div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: theme.accent2 }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
        <div className="flex justify-between">
          {nodes.map((n, i) => (
            <motion.div key={n.label} className="z-10 flex h-12 w-16 items-center justify-center rounded border"
              style={{ borderColor: theme.accent2, background: theme.bg }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.25 }}>
              <span className="font-mono text-xs" style={{ color: theme.text }}>{n.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMouse({ x: (clientX / innerWidth - 0.5) * 20, y: (clientY / innerHeight - 0.5) * 20 });
  }, []);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } } };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden" style={{ background: theme.bg }} onMouseMove={handleMouse}>
      <CodeLayersBackground />
      <FloatingElements />

      <motion.div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center"
        style={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }} transition={{ type: 'spring', stiffness: 50, damping: 30 }}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="font-mono text-sm" style={{ color: theme.accent }}>Hi, I&apos;m</motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>{content.name}</motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-xl font-semibold" style={{
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{content.tagline}</motion.p>
        </motion.div>
      </motion.div>

      <motion.div className="relative z-10 mx-auto grid w-full max-w-3xl gap-5 px-6 pb-16 md:grid-cols-2"
        style={{ x: mouse.x * -0.2, y: mouse.y * -0.2 }} transition={{ type: 'spring', stiffness: 50, damping: 30 }}>
        <div className="flex items-start"><Frontend /></div>
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" style={{ color: theme.muted }}>⚡</span>
        <div className="flex items-end"><Backend /></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
        className="relative z-10 mx-auto flex flex-wrap justify-center gap-4 px-6 pb-16">
        <a href="#projects" className="rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
          style={{ background: theme.accent, color: '#fff' }}>View full-stack work</a>
        <a href="#contact" className="rounded-lg border px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
          style={{ borderColor: theme.accent2, color: theme.accent2 }}>Let&apos;s build</a>
      </motion.div>
    </section>
  );
}
