let debounceTimer: number

export const debounce = (callback: () => void, time: number): void => {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(callback, time)
}

let throttlePause: boolean

export const throttle = (callback: () => void, time: number) => {
  if (throttlePause) return

  throttlePause = true

  setTimeout(() => {
    callback()
    throttlePause = false
  }, time)
}

export const getWindowWidth = (): number => {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window
    return width
  }
  return -1
}
