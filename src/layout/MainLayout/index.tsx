import { Outlet } from 'react-router'
import './index.css'

export default function Layout() {
  return (
    <>
      <Header />

      <div className="background">
        <Outlet />
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="header background">
      <h3 className="mt-0 title">My App</h3>
      <nav className="nav">
        <ul>
          <li>
            <a className="ml-10" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="ml-10" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
