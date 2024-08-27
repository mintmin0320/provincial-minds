import { ReactNode } from "react"

interface ILayoutProps {
  className?: string
  children: ReactNode
}

const Layout = ({ className, children }: ILayoutProps) => {
  return <main className={`w-full bg-white ${className}`}>{children}</main>
}

export default Layout
