import React from "react";
import "./App.css";


function App() {

  const goods =[
    {
      id:1,
      title:"boots",
      describe: "Red boots"
    },
    {
      id:2,
      title:"convers",
      describe: "Green boots"
    },
    {
      id:3,
      title:"Speed top",
      describe: "Gold boots"
    },


  ]

  const logo = "MONOTYPE"
  const isAuth = true;

  return (
    <React.Fragment>
      {
        !isAuth ? (
          <h1>Get register</h1>
        ) : (
          <>
                <Header 
                greet="Hello world" 
                name="Alex" 
                logotype= {logo}
                />

                {
                  goods.map(item => <Card base={item} key={item.id}/>)
                }


          </>
        )
      }


    </React.Fragment>
  );
}

export default App;
