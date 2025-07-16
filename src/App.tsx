import { useEffect, useState } from "react";

function App() {
  const [insult, setInsult] = useState("");

  useEffect(() => {
    const apiUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
    // Using a CORS proxy to bypass the API's CORS restrictions.
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

    fetch(proxyUrl)
      .then((response) => response.json())
      .then((data) => {
        // The actual API response is nested in the 'contents' property of the proxy's response
        const insultData = JSON.parse(data.contents);
        setInsult(insultData.insult);
      })
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
