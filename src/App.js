import "./styles.css";
import React, { useState } from "react";
const tedxDictionary = {
  Communication: [
    {
      Title:
        "The 110 techniques of communication and public speaking | David JP Phillips",
      link: "https://www.youtube.com/watch?v=K0pxo-dS9Hc&t=3s",
      Rating: "4/5"
    },
    {
      Title: "7 Ways to Make a Conversation With Anyone | Malavika Varadan",
      link: "https://www.youtube.com/watch?v=F4Zu5ZZAG7I&t",
      Rating: "5/5"
    },
    {
      Title:
        "The dark magic of communication - How we manipulate others | Christopher Cummings",
      link: "https://www.youtube.com/watch?v=cfNJmmabimU",
      Rating: "4/5"
    }
  ],
  Cofidence: [
    {
      Title: "Six behaviors to increase your confidence | Emily Jaenson",
      link: "https://www.youtube.com/watch?v=IitIl2C3Iy8",
      Rating: "4/5"
    },
    {
      Title: "What Does It Mean To Be Yourself? | Carly Sotas",
      link: "https://www.youtube.com/watch?v=Ptvwrfftziw",
      Rating: "4.5/5"
    },
    {
      Title: "Stop searching for your passion | Terri Trespicio",
      link: "https://www.youtube.com/watch?v=6MBaFL7sCb8",
      Rating: "5/5"
    },
    {
      Title: "How to stop screwing yourself over | Mel Robbins",
      link: "https://www.youtube.com/watch?v=Lp7E973zozc",
      Rating: "4.5/5"
    }
  ],
  TimeManagement: [
    {
      Title: "How To Multiply Your Time | Rory Vaden",
      link: "https://www.youtube.com/watch?v=y2X7c9TUQJ8",
      Rating: "5/5"
    },
    {
      Title: "The secrets of modern time management | Hitesh Choudhary",
      link: "https://www.youtube.com/watch?v=s1KrFy_3LYQ",
      Rating: "4/5"
    },
    {
      Title:
        "How a student changed her study habits by setting goals and managing time | Yana Savitsky",
      link: "https://www.youtube.com/watch?v=z7e7gtU3PHY",
      Rating: "4.5/5"
    },
    {
      Title: "How to Get Your Brain to Focus | Chris Bailey",
      link: "https://www.youtube.com/watch?v=Hu4Yvq-g7_Y",
      Rating: "5/5"
    }
  ]
};
let tedxTalks = Object.keys(tedxDictionary);
export default function App() {
  const [genre, setGenre] = useState("Communication");
  function tedxClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "slateblue" }}>TEDx Talks Recommendation!!</h1>
      <div className="center-container">
        {tedxTalks.map((genre) => (
          <button onClick={() => tedxClickHandler(genre)} key={genre}>
            {" "}
            {genre}
          </button>
        ))}
      </div>
      <div className="list-items">
        <ul>
          {tedxDictionary[genre].map((talks) => (
            <li className="non-bullet">
              <div className="items">
                <div className="title">{talks.Title}</div>
                <div>Rating : {talks.Rating}</div>
                <div>
                  <a href={talks.link} className="watch-lnk">
                    Watch Now
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
