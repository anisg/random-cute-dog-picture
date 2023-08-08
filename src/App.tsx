import React, { useState } from "react";
import { MainPage } from "./components/live/mainPage/MainPage";
import { saveAs } from "file-saver";
import { Card } from "./components/live/card/Card";

function App() {
  const [dogImage, setDogImage] = useState<string | null>(null);

  function generateImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogImage(data.message))
  }

  function downloadImage() {
    console.log("image", dogImage)
    if (dogImage) {
      saveAs(dogImage, "dog.jpg");
    } else {
      alert("Please generate image first");
    }
  }

  return (<>
    {/* <div className="w-full h-full"><Card /></div> */}
    <MainPage frames={{
      mainPage: {
        className: 'w-full h-full'
      },
      dogImageContainer: {
        title: "Click to generate random dog image",
        className: 'cursor-pointer',
        ...(dogImage && {
          inner: <img src={dogImage} className="h-full" />
        }),
        onClick: generateImage,
      },
      buttonDownload: {
        className: 'cursor-pointer',
        onClick: downloadImage,
      }
    }} />
  </>
  );
}

export default App;
