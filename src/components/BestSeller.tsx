type BestSellerItem = {
    image: string;
    name: string;
    price: number;
  };
  
  const bestSellers: BestSellerItem[] = [
    { image: "/images/book1.jpg", name: "Math Book", price: 500 },
    { image: "/images/book2.jpg", name: "Science Book", price: 600 },
    { image: "/images/book3.jpg", name: "History Book", price: 400 },
    { image: "/images/book4.jpg", name: "English Book", price: 350 },
    { image: "/images/book5.jpg", name: "Art Book", price: 450 },
    { image: "/images/book6.jpg", name: "Programming Book", price: 700 },
    { image: "/images/book7.jpg", name: "Physics Book", price: 550 },
    { image: "/images/book8.jpg", name: "Chemistry Book", price: 650 },
    { image: "/images/book9.jpg", name: "Geography Book", price: 300 },
    { image: "/images/book10.jpg", name: "Biology Book", price: 500 },
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