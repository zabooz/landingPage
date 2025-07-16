import { useEffect, useState } from "react";

function App() {
  const [insult, setInsult] = useState("");

  useEffect(() => {
    fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
      .then((response) => response.json())
      .then((data) => setInsult(data.insult))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Fuck You</h1>
        <p className="mt-4 text-lg text-gray-300">{insult}</p>
      </div>
    </div>
  );
}

export default App;
