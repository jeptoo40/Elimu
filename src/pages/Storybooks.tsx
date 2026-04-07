import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StorybooksItems = [
  { name: "NPPE", image: "/images/STORY1.jpg", price: " ", category: "Storybooks" },

  { name: " Lindsay", image: "/images/pas2.jpg", price: "KSh 100", category: "Articles" },
  
  { name: "SELINA", image: "/images/STORY2.jpg", price: " ", category: "Storybooks" },

  { name: "School Trip",image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },

  { name: "DREAMS DENIED", image: "/images/STORY3.jpg", price: " ", category: "Storybooks" },

  { name: "THUNDER", image: "/images/STORY4.jpg", price: " ", category: "Storybooks" },
 
  { image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },

  { name: " The Thief", image: "/images/pas3.jpg", price: "KSh 100", category: "Articles" },
  { name: "NJINGA", image: "/images/STORY5.jpg", price: " ", category: "Storybooks" },
  
  { name: " The Passion", image: "/images/pas.jpg", price: "KSh 750", category: "Articles" },
  
  { name: "THAMBI", image: "/images/STORY6.jpg", price: " ", category: "Storybooks" },
 
];

const phoneNumber = "254724491544";

const categories = ["All",  "Storybooks", "Articles", "Novels"];

const StorybooksTools = () => {
  const [sort, setSort] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter by category
  const filteredItems = selectedCategory === "All"
    ? StorybooksItems
    : StorybooksItems.filter((item) => item.category === selectedCategory);

  // Sorting function
  const sortedItems = () => {
    if (sort === "price-low") {
      return [...filteredItems].sort(
        (a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
      );
    }
    if (sort === "price-high") {
      return [...filteredItems].sort(
        (a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""))
      );
    }
    return filteredItems;
  };

  const handleWhatsApp = (price, name) => {
    const message = `Hello, I'm interested in ${name} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="Storybooks-tools-section">
  <h2>Our Storybooks</h2>

  <div className="Storybooks-container">
    
    {/* SIDEBAR */}
    <div className="Storybooks-sidebar">
      <div className="sidebar-box">
        <h3>Categories</h3>

        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`sidebar-item ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="Storybooks-main">
      
      {/* Top bar (sorting like Schoolmall) */}
      <div className="Storybooks-topbar">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default sorting</option>
          <option value="price-low">Sort by price: low to high</option>
          <option value="price-high">Sort by price: high to low</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="Storybooks-tools-grid">
        {sortedItems().map((item, index) => (
         <div className="Storybooks-tools-card" key={index}>
         <img src={item.image} alt={item.name} />
       
         <p className="tool-name">{item.name}</p>
         <p className="price">{item.price}</p>
       
         <button className="add-to-cart">Add to cart</button>
       
         <button 
           className="whatsapp-btn"
           onClick={() => handleWhatsApp(item.price, item.name)}
         >
           Order via WhatsApp
         </button>
       </div>
        ))}
      </div>

    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default StorybooksTools;