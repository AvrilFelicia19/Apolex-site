import React from "react";

const categories = [
  { title: "Blazers", keyword: "blazer" },
  { title: "Formal Shirts", keyword: "formal-shirt" },
  { title: "Formal Pants", keyword: "formal-pants" },
  { title: "Waistcoats", keyword: "waistcoat" },
  { title: "Full Sets", keyword: "wedding-suit" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center p-6 shadow-md">
        <img src="/logo.jpg" alt="Aplex Logo" className="w-28 h-28 rounded-full mb-2" />
        <h1 className="text-4xl font-bold">Apolex</h1>
        <p className="text-lg text-gray-600">Suits That Define You</p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 px-4 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Refined Elegance for Every Occasion</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Step into style with premium suits, shirts, and accessories crafted for weddings, business, and formal events.
        </p>
        <button className="text-white bg-black px-4 py-2 rounded hover:bg-gray-800">Explore Our Looks</button>
      </section>

      {/* Catalog */}
      <section className="p-6 space-y-10">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{cat.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map(num => (
                <img
                  key={num}
                  src={`https://source.unsplash.com/600x800/?${cat.keyword}&sig=${idx}${num}`}
                  alt={`${cat.title}`}
                  className="rounded-xl shadow-md object-cover w-full h-[400px]"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-black text-white text-center py-10">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>Email: <a href="mailto:Apolex.pvt@gmail.com" className="underline">Apolex.pvt@gmail.com</a></p>
        <p>Phone: <a href="tel:+916360216517" className="underline">+91 63602 16517</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-100 text-gray-600">
        &copy; {new Date().getFullYear()} Apolex. All rights reserved.
      </footer>
    </div>
  );
}
