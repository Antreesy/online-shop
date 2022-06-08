import { useState, useEffect } from "react"

import { getWindowWidth, throttle } from "utils/utils"

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener("resize", () => throttle(handleResize, 100))
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowWidth
}

export default useResize
