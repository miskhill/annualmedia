import { useState } from "react"
import "../navbar.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Annual Media
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/series">Series</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}