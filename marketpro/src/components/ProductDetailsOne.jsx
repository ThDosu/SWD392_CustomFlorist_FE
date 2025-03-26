import { useState } from "react";

const CustomBouquet = () => {
  // Mock bouquet details
  const bouquet = {
    name: "Spring Blossom Bouquet",
    description: "A fresh mix of vibrant seasonal flowers, perfect for any occasion.",
    category: "Custom Bouquets",
  };

  const cardStyle = {
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    width: "150px",
    margin: "10px",
  };

  const imageStyle = {
 
      height: "26.625rem !important"
  ,
  

      width: "23.625rem !important"
  
  };
  
  const priceStyle = {
    color: "red",
    fontWeight: "bold",
  };
  
  const FlowerCard = ({ name, price, image }) => (
    <div style={cardStyle}>
      <img src={image} alt={name} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p style={priceStyle}>${price.toFixed(2)} per stem</p>
    </div>
  );
  
  // Flower options with name, price, and image
  const flowers = [
    { name: "Pink Rose", price: 2.5, image: "https://www.flowersbynature.com/files/cache/c4162a4071a53b5a7ae2269ccba7ddef_f2935.jpg" },
    { name: "Yellow Tulip", price: 3.0, image: "https://www.flowersbynature.com/files/cache/012ca8eef3e95fd54eb491326a9a6d1b_f2936.jpg" },
    { name: "White Lily", price: 4.0, image: "https://www.flowersbynature.com/files/cache/ae6da74443b1163daaaf3bd378b7d9dc_f2937.jpg" },
    { name: "Orange Daisy", price: 2.0, image: "https://www.flowersbynature.com/files/cache/a7f25f27872bf3555eedcb89757df8d6_f2940.jpg" },
    { name: "Lavender Orchid", price: 5.0, image: "https://www.flowersbynature.com/files/cache/584cf2f8896f454b295c55a6e0ba63f9_f2941.jpg" },
    { name: "Pink Rose", price: 2.5, image: "https://www.flowersbynature.com/files/cache/c4162a4071a53b5a7ae2269ccba7ddef_f2935.jpg" },
    
   
  ];

  // State to track quantity of each flower
  const [selectedFlowers, setSelectedFlowers] = useState(
    flowers.reduce((acc, flower) => ({ ...acc, [flower.name]: 0 }), {})
  );

  // Function to update quantity
  const updateQuantity = (flowerName, amount) => {
    setSelectedFlowers((prev) => ({
      ...prev,
      [flowerName]: Math.max(0, prev[flowerName] + amount),
    }));
  };

  // Calculate total price
  const totalPrice = Object.entries(selectedFlowers).reduce((total, [name, quantity]) => {
    const flower = flowers.find(f => f.name === name);
    return total + (flower.price * quantity);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
      {/* BOUQUET INFO */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{bouquet.name}</h1>
        <p className="text-gray-600 mt-2">{bouquet.description}</p>
     
        <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full mt-2 inline-block">{bouquet.category}</span>
      </div>

    {/* FLOWER SELECTION */}
<div       style={{display: "flex"  }} 

 className="flex flex-wrap gap-6 justify-between">
   <img 
   style={imageStyle}
        src="https://th.bing.com/th/id/OIP.GOf_sxeKbeeKM5SSLHtzGgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Image Bouquet"
        className=" object-cover rounded-md"
      />
  {flowers.map((flower) => (
    <div 
      key={flower.name} 
      style={cardStyle }
          
      className="border p-4 rounded-lg flex items-center gap-2 w-full max-w-md mr-4"
    >
      {/* Ảnh hoa */}
      <img 
        src={flower.image} 
        alt={flower.name} 
        className="w-90 h-90 object-cover rounded-md"
      />

      {/* Thông tin hoa */}
      <div className="flex-1">
        <h3 className="">{flower.name}</h3>
        <p className="text-gray-600">${flower.price.toFixed(2)} per stem</p>
      </div>

      {/* Bộ chọn số lượng */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => updateQuantity(flower.name, -1)} 
          className="px-3 py-1 border rounded transition hover:bg-gray-200"
        >
          -
        </button>
        <span className="text-lg font-semibold">{selectedFlowers[flower.name]}</span>
        <button 
          onClick={() => updateQuantity(flower.name, 1)} 
          className="px-3 py-1 border rounded transition hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  ))}
</div>


      {/* ORDER SUMMARY */}
      <div className="text-center border-t pt-4">
        <h2 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4 transition hover:bg-green-700">
          ORDER BOUQUET
        </button>
      </div>
    </div>
  );
};

export default CustomBouquet;