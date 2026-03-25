export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar container">
        <div className="logo">Handcrafted Haven</div>
        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Our Story</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Artisanal Goods for the <br /> Modern Home</h1>
          <p>Carefully curated, ethically sourced, and beautifully designed. Discover the heart of craftsmanship in every piece.</p>
          <a href="#" className="btn">Shop Now</a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <h2 className="section-title">Newest Arrivals</h2>
        <div className="grid">
          {[
            { id: 1, title: 'Terracotta Vase', price: '$45.00' },
            { id: 2, title: 'Linen Throw Blanket', price: '$85.00' },
            { id: 3, title: 'Hand-Carved Bowl', price: '$62.00' },
            { id: 4, title: 'Sage Ceramic Mug', price: '$24.00' },
          ].map((product) => (
            <div key={product.id} className="card">
              <div className="card-img">[ Product Image ]</div>
              <div className="card-info">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section hero" style={{ backgroundColor: '#8a9a5b1a' }}>
        <div className="container">
          <h2>Our Artisanal Values</h2>
          <div className="grid" style={{ marginTop: '2rem' }}>
            <div>
              <h3>Sustainability</h3>
              <p>We believe in products that last a lifetime and respect our planet.</p>
            </div>
            <div>
              <h3>Quality</h3>
              <p>Every item is hand-selected for its superior craftsmanship and detail.</p>
            </div>
            <div>
              <h3>Artisans First</h3>
              <p>We work directly with makers to ensure fair pay and safe conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <span className="logo">Handcrafted Haven</span>
          <p>&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>A CSE 341 Group Project by Luis E.</p>
        </div>
      </footer>
    </main>
  );
}
