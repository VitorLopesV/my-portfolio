import { useEffect, useState } from 'react'

export function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1600 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setText((t) =>
        deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
      )
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
