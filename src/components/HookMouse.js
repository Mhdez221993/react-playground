import React, { useEffect, useState } from 'react';

const HookMouse = () => {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)

  useEffect(() => {
    console.log('useEffect updating x and y');
    window.addEventListener('mousemove', logMousePosition)

    return () => window.removeEventListener('mousemove', logMousePosition)

  }, [])

  const logMousePosition = (e) => {
    console.log('Mouse event');
    setY(e.clientY)
    setX(e.clientX)
  }

  return (
    <div>
      X - {x} ==== Y - {y}
    </div>
  );
};

export default HookMouse;