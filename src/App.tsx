import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="p-6 bg-gray-50 flex flex-col items-center min-h-screen">
      
      <Counter />

     
      <Greeting name="Younes" />
    </div>
  );
}

export default App;
