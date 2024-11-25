import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // States setting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetching api
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products/");

      if (!response.ok) {
        throw new Error("Error fetching data"); // Error handling
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error as string);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // Comunicarse con un endpoint - Entidad externa al componente

  /**
   * ¿Cuándo usar un useEffect?
   * Cuando queremos consumir un endpoint
   * operaciones async
   * Para parámetros de entrada
   * Siempre usar useEffect cuando viene información desde afuera del componente
   */
  useEffect(() => {
    // ¿Qué lógica se ejecuta y cuándo?
    // 1. Se monta el componente y se ejecuta el useEffect
    // 2. Cada vez que se modifique uno de los valores del state se ejecuta el useEffect
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
