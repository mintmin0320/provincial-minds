import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface IPortalProps {
  title: string
  children: ReactNode
}

function PortalWrapper({ title, children }: IPortalProps) {
  const [el] = useState(() => {
    const element = document.createElement("div")
    element.id = title
    return element
  })

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return createPortal(children, el)
}

export default PortalWrapper
