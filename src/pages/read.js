import { useState } from 'react';
import { database } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function App() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, 'users');

  const downloadData = (jsonData) => {
    const jsonDataStr = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonDataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getData = () => {
    getDocs(collectionRef)
      .then((response) => {
        const jsonData = response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });

        // Trigger the download
        downloadData(jsonData);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <button onClick={getData}>Download Data</button>
  );
}

export default App;
