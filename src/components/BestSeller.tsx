const bestSellers = [
    {  image: "/images/book1.jpg" },

    {image: "/images/book2.jpg" },
    {  image: "/images/book3.jpg" },
    { image: "/images/book4.jpg" },

    { image: "/images/book5.jpg" },
    { image: "/images/book6.jpg" },
    { image: "/images/book7.jpg" },
    { image: "/images/book8.jpg" },

    {   image: "/images/book9.jpg" },
    {   image: "/images/book10.jpg" },









  ];
  
  const BestSeller = () => {
    return (
      <section className="best-seller">
        <div className="section-header">
          <h2>Our Sells Books</h2>
          
        </div>
  
        <div className="best-grid">
          {bestSellers.map((item, index) => (
            <div className="best-card" key={index}>
              <span className="book-badge">BEST</span>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default BestSeller;