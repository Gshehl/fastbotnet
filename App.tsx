import React, { useEffect } from 'react';

const App = () => {
  const handleBotNetButtonClick = () => {
    window.location.href = 'https://t.me/fastcnocbot';
  };

  const handleOwnerButtonClick = () => {
    window.location.href = 'https://t.me/kuranigod';
  };

  const handleChannelButtonClick = () => {
    window.location.href = 'https://t.me/+3fLtaBaIu1ZlNWEy';
  };

  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const symbols = '0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < columns; i++) {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 30);
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center relative">
      <canvas id="matrix" className="absolute top-0 left-0 w-full h-full"></canvas>
      <header className="fixed top-0 left-0 w-full bg-red-500 text-white py-4 z-10">
        <div className="container mx-auto px-4 flex justify-start">
          <h1 className="text-2xl font-bold">FastBotNet</h1>
        </div>
      </header>
      <div className="pt-20"></div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-8 md:px-32 md:text-4xl py-4 px-16 text-2xl z-10 mb-4 rounded-lg"
        onClick={handleBotNetButtonClick}
      >
        BotNet
      </button>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-4 md:px-16 md:text-2xl py-2 px-8 text-xl z-10 rounded-lg"
          onClick={handleChannelButtonClick}
        >
          Channel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-4 md:px-16 md:text-2xl py-2 px-8 text-xl z-10 rounded-lg"
          onClick={handleOwnerButtonClick}
        >
          Owner
        </button>
      </div>
    </div>
  );
};

export default App;