const Navbar = () => {
    return (
      <nav className="bg-green-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-lg">Cow Manure Store</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/shop" className="text-white">Shop</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  