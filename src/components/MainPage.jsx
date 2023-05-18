import React from "react";


function MainPage() {
  return (
    
    <>
      
        <input className="search" name="search" defaultValue="Search" />
      

      <img className="foodful-logo" src="./src/Pic/foodful-logo.png" alt="foodful" />

      <button className="login">Login</button>
    

    <div className="retseptid">
      <div className="retsept-1">
        <img className="pilt" src="./src/Pic/retsept-1.png" alt="food" />
        <h3 className="text">Retsepti Nimi</h3>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rem
          perferendis laborum fugiat asperiores quo iusto adipisci incidunt
          maxime sunt aspernatur nulla aut consectetur iure accusantium
          consequuntur, ullam itaque fugit!
        </p>

        <img className="heart" src="./src/Pic/heart.png" alt="Heart" />
        <p className="likes">123</p>

        <div />
      </div>
      <div className="retsept-2">
        <img className="pilt" src="./src/Pic/retsept-1.png" alt="food" />
        <h3 className="text">Retsepti Nimi</h3>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rem
          perferendis laborum fugiat asperiores quo iusto adipisci incidunt
          maxime sunt aspernatur nulla aut consectetur iure accusantium
          consequuntur, ullam itaque fugit!
        </p>

        <img className="heart" src="./src/Pic/heart.png" alt="Heart" />
        <p className="likes">123</p>

        <div />
      </div>
      <div className="retsept-3">
        <img className="pilt" src="./src/Pic/retsept-1.png" alt="food" />
        <h3 className="text">Retsepti Nimi</h3>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rem
          perferendis laborum fugiat asperiores quo iusto adipisci incidunt
          maxime sunt aspernatur nulla aut consectetur iure accusantium
          consequuntur, ullam itaque fugit!
        </p>

        <img className="heart" src="./src/Pic/heart.png" alt="Heart" />
        <p className="likes">123</p>

        <div />
      </div>
    </div>
    </>
  );
}

export default MainPage;
