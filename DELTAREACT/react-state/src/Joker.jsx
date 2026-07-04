import { useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const getNewJoke = async () => {
    try {
      const response = await fetch(URL);
      const jsonResponse = await response.json();

      console.log(jsonResponse);

      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    async function getFirstJoke() {
      try {
        const response = await fetch(URL);
        const jsonResponse = await response.json();

        console.log(jsonResponse);

        setJoke({
          setup: jsonResponse.setup,
          punchline: jsonResponse.punchline,
        });
      } catch (error) {
        console.log("Error fetching joke:", error);
      }
    }

    getFirstJoke();
  }, []);

  return (
    <div>
      <h1>😂 Random Joke Generator</h1>

      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>

      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}