
const storybooks = () => {
    const books = [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "1984", author: "George Orwell" },
      { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    ];
  
    return (
      <div className="books-page">
        <h1>our Stories</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default storybooks;