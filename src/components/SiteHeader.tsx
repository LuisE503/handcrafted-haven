import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="navbarWrap">
      <nav className="navbar container" aria-label="Main navigation">
        <Link href="/" className="logo">
          Handcrafted Haven
        </Link>
        <div className="nav-links">
          <Link href="/shop">Shop</Link>
          <Link href="/#values">Our Story</Link>
          <Link href="/cart">Cart</Link>
          <a href="mailto:hello@handcraftedhaven.com">Contact</a>
        </div>
      </nav>
    </header>
  );
}
