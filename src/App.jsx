import React from "react";
import data from "./districs.json"; // Import the JSON file

function App() {
  // Filtering districts where the name contains the letter "a"
  const filteredDistricts = data.districts.filter(district => 
    district.name.includes("l")
  );

  return (
    <div>
      <h1>Telangana Districts </h1>
      <ol>
        {filteredDistricts.map((district) => (
          <li key={district.id}>{district.name} ({district.code})</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
