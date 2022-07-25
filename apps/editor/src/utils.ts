export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    function onload() {
      resolve(src)
      script.onload = script.onerror = null
    }
    script.src = src
    script.onload = onload
    script.onerror = reject
    script.crossOrigin = 'anonymous'
    document.head.append(script)
  })
}
