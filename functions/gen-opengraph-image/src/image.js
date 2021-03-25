import { useEffect } from "react";
import { Textfit } from "react-textfit";
import { render } from "react-dom";

export default function App() {
  useEffect(() => {
    var style = document.createElement("style");
    var toolbarStyle = `
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap");
  
      body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
    `;
    style.innerHTML = toolbarStyle;
    document.head.appendChild(style);
  }, []);
  return (
    <div
      className='App'
      style={{
        width: "1200px",
        height: "630px",
        backgroundImage:
          "linear-gradient(37deg, rgb(32, 218, 233), rgb(40, 21, 236))",
        margin: "0",
        padding: "0",
        fontSize: "20px",
        position: "absolute",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "#17232e",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "12px",
          padding: "44px",
          borderRadius: "4px",
        }}
      >
        <Textfit
          max={256}
          min={24}
          style={{
            minHeight: "40%",
            maxHeight: "40%",
            lineHeight: 1,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          Hello this is a new blog what
        </Textfit>

        <Textfit
          max={256}
          min={24}
          style={{
            minHeight: "30%",
            maxHeight: "30%",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "#ffffff",
            margin: "0px",
          }}
        >
          This is a description for this image i am just testing we can always
          change but what do you think guys please let me know
        </Textfit>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ color: "#fff", fontSize: "24px" }}>flutternerd.com</p>
          </div>

          <p
            style={{
              color: "#fff",
              fontSize: "24px",
            }}
          >
            @indianappguy
          </p>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
