import React from "react";
import Items from "../widgets/Items";
import { useSelector } from "react-redux";

function HomePage() {
  const item = useSelector((state) => state.items);

  return (
    <main>
      <div className="items-container">
        {item.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
