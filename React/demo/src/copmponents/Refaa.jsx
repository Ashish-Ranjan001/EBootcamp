import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Step 1: Create a reference

  const handleClick = () => {
    inputRef.current.focus(); // Step 3: Use the reference to focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" /> {/* Step 2: Attach the reference */}
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;