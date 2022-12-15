import "./App.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "./firebase";
import { Description } from "./components/Description/Description";

function App() {
  const handleRead = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
    });
  };

  const handleWrite = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title: "practicing",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <button onClick={handleRead}>Get todos</button>
      <button onClick={handleWrite}>Add todo</button>
      <Description />
    </div>
  );
}

export default App;
