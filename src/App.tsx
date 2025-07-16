import { useEffect, useState } from "react";

function App() {
  const [insult, setInsult] = useState("");

  useEffect(() => {
    fetch("/api/insult")
      .then((response) => response.json())
      .then((data) => {
        setInsult(data.insult);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-6xl font-extrabold text-red-600 mt-8 mb-8">Fuck You</h1>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="text-center bg-gray-800 border-4 border-red-600 rounded-lg p-16 max-w-7xl mx-auto">
          <p className="text-7xl font-semibold text-white leading-tight">{insult}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
