import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

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
          <motion.div
            key={c.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.22 }}
          >
            <span
              className="h-5 rounded"
              style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`, width: `${c.w}%`, opacity: 0.85 }}
            />
            <span className="font-mono text-[9px]" style={{ color: theme.muted }}>{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Backend() {
  const { theme } = useTheme();
  const nodes = [
    { label: 'API', x: 8 },
    { label: 'Cache', x: 42 },
    { label: 'DB', x: 76 },
  ];
  return (
    <div className="rounded-xl border p-3" style={{ borderColor: theme.border, background: theme.surface }}>
      <p className="mb-3 font-mono text-[10px]" style={{ color: theme.accent2 }}>backend/ data layer</p>
      <div className="relative">
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-px"
          style={{ background: theme.accent2 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        <div className="flex justify-between">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              className="z-10 flex h-12 w-16 items-center justify-center rounded border"
              style={{ borderColor: theme.accent2, background: theme.bg }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.25 }}
            >
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
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm"
          style={{ color: theme.accent }}
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-extrabold md:text-6xl"
          style={{ color: theme.text }}
        >
          {content.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-3 max-w-xl text-xl font-semibold"
          style={{
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {content.tagline}
        </motion.p>
      </div>

      {/* split stack */}
      <div className="relative z-10 mx-auto grid w-full max-w-3xl gap-5 px-6 pb-16 md:grid-cols-2">
        <div className="flex items-start">
          <Frontend />
        </div>
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" style={{ color: theme.muted }}>
          ⚡
        </span>
        <div className="flex items-end">
          <Backend />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 mx-auto flex flex-wrap justify-center gap-4 px-6 pb-16"
      >
        <a
          href="#projects"
          className="rounded-lg px-6 py-3 font-semibold"
          style={{ background: theme.accent, color: '#fff' }}
        >
          View full-stack work
        </a>
        <a
          href="#contact"
          className="rounded-lg border px-6 py-3 font-semibold"
          style={{ borderColor: theme.accent2, color: theme.accent2 }}
        >
          Let&apos;s build
        </a>
      </motion.div>
    </section>
  );
}
