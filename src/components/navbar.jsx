import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🍴 Spice Hub</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/menu" className="hover:text-yellow-300">Menu</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </div>
    </nav>
  );
}
