import React, { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <h1>Dog Image</h1>
      {data.map(dog => (
        <div key={dog.id}>
          <img src={dog.url} alt="dog" />
        </div>
      ))}
    </div>
  );
}
export default App;
