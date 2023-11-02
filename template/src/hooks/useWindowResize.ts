import { useEffect, useState } from 'react'
import { WindowSize } from '@/types'

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  })
  useEffect(() => {
    const onresize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth })
    }

    window.addEventListener('resize', onresize)
    return () => {
      window.removeEventListener('resize', onresize)
    }
  }, [])
  return windowSize
}
