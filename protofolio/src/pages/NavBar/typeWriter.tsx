import { useEffect, useState } from "react"
export function Typewriter({ words, className,}: { words: string[], className?: string}) {
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState("")
    const [deleting, setDeleting] = useState(false)
    useEffect(() => {
        const current = words[wordIndex % words.length]

        if (!deleting && text === current) {
        const hold = setTimeout(() => setDeleting(true), 1600)
        return () => clearTimeout(hold)
    }

    if (deleting && text === "") {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
        return
    }

    const timeout = setTimeout(() => { setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
        },
        deleting ? 55 : 110,
    )

    return () => clearTimeout(timeout)}, [text, deleting, wordIndex, words])

    return (
    <span className={className}>
        {text}
        <span className="ml-0.5 inline-block h-[0.9em] w-0.75 translate-y-0.5 animate-pulse bg-primary align-middle " />
    </span>
)
}
