interface ICopyURLParams {
  title: string
  url: string
  onCompleted: () => void
  onError: () => void
}

export const copyURL = ({
  title,
  url,
  onCompleted,
  onError,
}: ICopyURLParams) => {
  if (typeof window !== "undefined") {
    // Check if the Web Share API is available
    if (window.navigator?.share) {
      window.navigator
        .share({
          title,
          url,
        })
        .then(onCompleted)
        .catch(onError)
    } else if (
      window.navigator.clipboard &&
      window.navigator.clipboard.writeText
    ) {
      // Check if the Clipboard API is available
      window.navigator.clipboard.writeText(url).then(onCompleted).catch(onError)
    } else {
      // Fallback for environments where Clipboard API is not available
      try {
        const input = document.createElement("input")
        input.setAttribute("value", url)
        document.body.appendChild(input)
        input.select()
        document.execCommand("copy")
        document.body.removeChild(input)
        onCompleted() // Call onCompleted after successful fallback copy
      } catch (e) {
        onError() // Call onError if fallback copy fails
      }
    }
  } else {
    onError() // Handle cases where window is undefined (e.g., server-side)
  }
}
