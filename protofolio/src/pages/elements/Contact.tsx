const Contact = () => {
  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-8 shadow-lg shadow-cyan-950/20">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
        <h1 className="text-4xl font-bold text-[var(--text)]">Travaillons ensemble</h1>
        <p className="max-w-2xl text-[var(--text-h)]">
          Vous avez un projet, une idée ou un besoin de développement ?
          N’hésitez pas à me contacter pour en discuter.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:contact@example.com"
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[rgba(34,211,238,0.12)] hover:text-[var(--accent)]"
          >
            contact@example.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[rgba(34,211,238,0.12)] hover:text-[var(--accent)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
