"use client";

import React, { useState } from "react";

export default function Trigger() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ height: "150px" }}>
      <button className="trigger" onClick={() => setCount(count + 1)}>
        눌러보세요
      </button>
      <div className="test">{count}</div>
    </div>
  );
}
