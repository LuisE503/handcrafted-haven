export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Handcrafted Haven</span>
        <p>
          &copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.
        </p>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
          A CSE 341 Group Project by Team Handcrafted Haven
        </p>
      </div>
    </footer>
  );
}
