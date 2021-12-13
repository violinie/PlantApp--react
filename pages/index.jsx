import Head from "next/head";
import Image from "next/image";
import { PlantList } from "../components/PlantList";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { fetchData } from "../http/fetch";

/*
const getPlants = () => {
  fetch("http://localhost:3000/api/plants")
  .then((response) => response.json())
  .then(plants => {

  });
};
*/

const getPlants = async () => {
  const plants = await fetchData("/api/plants");
  return plants;
};

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const plants = await getPlants();
    setData(plants);
  }, []);

  const [difficulty, setDifficulty] = useState(1);
  const [lightExposure, setLightExposure] = useState("low");
  const [activeFilter, setActiveFilter] = useState(false);
  const filteredData = !activeFilter
    ? data
    : data.filter((plant) => {
        return plant.difficulty === difficulty && plant.lightExposure === lightExposure;
      });
  return (
    <div className="main-container">
      <div className="main-container__filters filters">
        <div>
          <label>Obtížnost</label>
          <input
            type="number"
            min="1"
            max="3"
            value={difficulty}
            onChange={(e) => {
              setDifficulty(Number(e.target.value));
            }}
          ></input>
        </div>
        <div>
          <label>Světlo</label>
          <select
            value={lightExposure}
            onChange={(e) => {
              setLightExposure(e.target.value);
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => {
              setActiveFilter(true);
            }}
          >
            Aplikovat filtry
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setActiveFilter(false);
              setDifficulty(1);
              setLightExposure("low");
            }}
          >
            Resetovat filtry
          </button>
        </div>
      </div>
      <div className="main-container__content">
        <PlantList plants={filteredData}></PlantList>
      </div>
    </div>
  );
}

//react useState, useEffect
