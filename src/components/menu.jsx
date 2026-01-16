const menuItems = [
    { name: "Paneer Butter Masala", desc: "Creamy & rich", price: "₹250" },
    { name: "Chicken Biryani", desc: "Hyderabadi style", price: "₹320" },
    { name: "Veg Pizza", desc: "Cheesy delight", price: "₹280" },
    { name: "Pasta Alfredo", desc: "Italian classic", price: "₹300" },
  ];
  
  export default function Menu() {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
          Our Menu
        </h2>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition"
            >
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <p className="text-red-700 font-semibold mt-3">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  