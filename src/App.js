import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Music I like</h1>
      <Card
        albumTitle="Abbey Road"
        albumDescription="Abbey Road is the eleventh studio album by English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the album were the last in which all four Beatles participated."
        imageURL="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        buttonText="OK"
      />

      <Card
        albumTitle="Master of Puppets"
        albumDescription="Master of Puppets is the third studio album by American heavy metal band Metallica, released on March 3, 1986, by Elektra Records. It was the band's last album to feature bassist Cliff Burton, who died in a bus accident during the album's promotional tour."
        imageURL="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20160305095544_1280.jpg&f=1&nofb=1&ipt=f6346238eb168e62b9ebc6bff4d0bc096545b81f8a58b1364ee1c561949e70fb&ipo=images"
        buttonText="Listen Now"
      />

      <Card
        albumTitle="Appetite for Destruction"
        albumDescription="Appetite for Destruction is the debut studio album by American hard rock band Guns N' Roses, released on July 21, 1987, by Geffen Records. The album features a raw and gritty sound, combining elements of hard rock, punk, and heavy metal."
        imageURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71H9ZR6EGFL._AC_SL1400_.jpg&f=1&nofb=1&ipt=7486af2f0a034617bcecdd1829ae0383f24c2976fbdc9ef46fd0a1bcb918e50e&ipo=images"
        buttonText="Play Album"
      />
    </div>
  );
};

export default App;
