import React, { useState } from "react";

const DNAtoRNAConverter: React.FC = () => {
  const [dna, setDna] = useState<string>("");
  const [rna, setRna] = useState<string>("");

  const handleConvert = () => {
    const rnaSequence = dna.replace(/T/g, "U");
    setRna(rnaSequence);
  };

  return (
    <div className="converter-container">
      <h1 className="title">DNK dan RNKga o'zgartirish</h1>
      <input
        type="text"
        placeholder="DNK ketma-ketligini kiriting maslan : (e.g. GCAT)"
        value={dna}
        onChange={(e) => setDna(e.target.value.toUpperCase())}
        className="dna-input"
      />
      <button onClick={handleConvert} className="convert-btn">Bosing</button>
      {rna && (
        <div className="output">
          <h3>Javobi:</h3>
          <p>{rna}</p>
        </div>
      )}
    </div>
  );
};

export default DNAtoRNAConverter;
