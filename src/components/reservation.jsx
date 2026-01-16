export default function Reservation() {
    return (
      <form className="max-w-md mx-auto bg-white p-6 shadow rounded">
        <input className="w-full border p-2 mb-3" placeholder="Name" />
        <input className="w-full border p-2 mb-3" placeholder="Phone" />
        <input type="date" className="w-full border p-2 mb-3" />
        <input type="time" className="w-full border p-2 mb-3" />
        <button className="w-full bg-red-700 text-white py-2">
          Reserve Table
        </button>
      </form>
    );
  }
  