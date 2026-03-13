import { useState } from 'react'

export function useCopyToClipboard(timeout = 1800) {
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    })
  }

  return { copied, copy }
}
