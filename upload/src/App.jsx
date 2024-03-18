import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <b>FIOH</b>
        </div>
        <div>Select an image to upload</div>
        <div>
          <input type="file" multiple accept="image/*" onChange={() => {}} />
        </div>
      </div>
    </>
  );
}

export default App;
