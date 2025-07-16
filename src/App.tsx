import { useEffect, useState } from "react";

function App() {
  const [insult, setInsult] = useState("");

  useEffect(() => {
    // Fetching from our own server's proxy endpoint
    fetch("/api/insult")
      .then((response) => response.json())
      .then((data) => {
        setInsult(data.insult);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4">
      <h1 className="text-6xl font-extrabold text-red-600 mb-8">Fuck You</h1>
      <div className="text-center bg-gray-800 border-4 border-red-600 rounded-lg p-8 max-w-3xl mx-auto">
        <p className="text-4xl font-semibold text-white leading-tight">{insult}</p>
      </div>
    </div>
  );
}

export default App;
