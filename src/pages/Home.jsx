import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">YOUR EVERYDAY, MADE BETTER</span>
          <h1>Good finds.<br /><span>Great prices.</span></h1>
          <p>Discover the things you love, all in one place. A better way to shop starts here.</p>
          <Link to="/product" className="home-shop-link">Explore the collection <span aria-hidden="true">→</span></Link>
          <div className="home-trust-note"><span aria-hidden="true">✓</span> Easy shopping, reliable delivery</div>
        </div>
        <div className="home-hero-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/036/428/120/small_2x/ai-generated-shopping-trolley-or-cart-resting-on-the-surface-supermarket-pushcart-for-groceries-concept-banner-for-purchases-photo.jpg"
            alt="A shopping cart ready for your next ShopKart find"
          />
          <span className="home-image-badge">A little more joy in every order</span>
        </div>
      </section>
      <div className="home-benefits" aria-label="ShopKart benefits">
        <div><span className="benefit-icon">✦</span><span><strong>Good value</strong><small>Everyday prices you'll love</small></span></div>
        <div><span className="benefit-icon">♡</span><span><strong>Great selection</strong><small>Find something for everyone</small></span></div>
        <div><span className="benefit-icon">↗</span><span><strong>Easy shopping</strong><small>Simple from browse to buy</small></span></div>
      </div>
    </main>
  )
}

  export default Home;
