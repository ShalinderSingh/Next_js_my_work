"use client";

export default async function Product({ price }) {
    
  return (
    <div>
      <button onClick={() => alert(price)}>Check Price</button>
    </div>
  );
}
