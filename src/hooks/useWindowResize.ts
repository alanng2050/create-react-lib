import { useEffect } from 'react'

export const useWindowResize = () => {
  useEffect(() => {
    const onresize = () => {
      console.log(window.innerHeight)
    }

    window.addEventListener('resize', onresize)
    return () => {
      window.removeEventListener('resize', onresize)
    }
  }, [])
}
