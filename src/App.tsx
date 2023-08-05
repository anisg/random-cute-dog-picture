import React, { useState } from "react";
import { MainPage } from "./components/live/mainPage/MainPage";

function App() {
  const [dogImage, setDogImage] = useState<string | null>(null);

  function generateImage() {
    console.log("click");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogImage(data.message))
  }

  return (
    <MainPage frames={{
      mainPage: {
        className: 'w-full h-full'
      },
      cuteDogPictureGenerator: {
        onClick: generateImage,
        ...(dogImage && {
          children: <img src={dogImage} />
        })
      },
      buttonDownload: {
        onClick: generateImage,
      }
    }} />
  );
}

export default App;
