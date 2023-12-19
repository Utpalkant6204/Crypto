import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'g4i2XsNxizJtGENgz6qSNoDqkTBBDuv9MQbm1/zu8GA='
      }
    };

    const apiUrl = 'https://openapiv1.coinstats.app/coins';

    const fetchData = async () => {
      try {
        const response = await Axios.get(apiUrl, options);

        // if (!response.data.success) {
        //   throw new Error(`Request failed with status ${response.status}`);
        // }

        console.log(response, "response from API");
        setListOfCoins(response.data.result); // Assuming 'coins' is the key in the response containing the list of coins
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData().catch((error) => console.error(error));
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1 className="head left">Crypto Tracker</h1>
        <input
          type="text"
          className="input right"
          placeholder="Search Here...."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
