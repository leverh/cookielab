import { useState } from 'react'

export const DEFAULT_STATE = {
  msg: 'We use cookies to improve your experience and analyze site traffic.',
  btnAccept: 'Accept all',
  btnDecline: 'Decline',
  learnMore: 'Privacy Policy',
  cBg: '#1a1a2e',
  cText: '#ffffff',
  cAccept: '#4f46e5',
  cDecline: '#374151',
  cBtnText: '#ffffff',
  cLink: '#818cf8',
  pos: 'bottom',
  anim: 'slide',
  output: 'both',
}

export function useBannerState() {
  const [state, setState] = useState(DEFAULT_STATE)

  const update = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }

  return { state, update }
}
