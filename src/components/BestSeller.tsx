type BestSellerItem = {
  image: string;
  price: string;
};

const bestSellers: BestSellerItem[] = [
  { image: "/images/book1.jpg", price: "Ksh 500" },
  { image: "/images/book2.jpg", price: "Ksh 600" },
  { image: "/images/book3.jpg", price: "Ksh 400" },
  { image: "/images/book4.jpg", price: "Ksh 350" },
  { image: "/images/book5.jpg", price: "Ksh 450" },
  { image: "/images/book6.jpg", price: "Ksh 700" },
  { image: "/images/book7.jpg", price: "Ksh 550" },
  { image: "/images/book8.jpg", price: "Ksh 650" },
  { image: "/images/book9.jpg", price: "Ksh 300" },
  { image: "/images/book10.jpg", price: "Ksh 500" },
];

const BestSeller = () => {
  return (
    <section className="best-seller">
      <div className="section-header">
        <h2>Our Best Selling Books</h2>
      </div>

      <div className="best-grid">
        {bestSellers.map((item, index) => (
          <div className="best-card" key={index}>
            <span className="book-badge">BEST</span>
            <img src={item.image} alt="Book" />
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;