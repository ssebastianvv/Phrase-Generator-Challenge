"use client"; 
import { useState } from 'react';

export default function Home() {
  const [phrase, setPhrase] = useState("");

  const generatePhrase = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    setPhrase(data.phrase);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Generador de Frases</h1>
        <button
          onClick={generatePhrase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Generar Frase
        </button>
        <p className="mt-4 text-xl">{phrase}</p>
      </div>
    </div>
  );
}
