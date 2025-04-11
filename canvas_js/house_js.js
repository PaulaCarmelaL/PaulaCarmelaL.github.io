const canvas = document.getElementById('scene');
    const ctx = canvas.getContext('2d');

    
    function drawRectangle(x, y, width, height, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }

    
    function drawTriangle(x, y, base, height, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + base / 2, y - height);
      ctx.lineTo(x - base / 2, y);
      ctx.closePath();
      ctx.fill();
    }

    function drawCircle(x, y, radius, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // House
    function drawHouse(x, y) {
      drawRectangle(x, y, 100, 100, 'blue'); // house
      drawTriangle(x + 50, y, 100, 50, 'red'); // Roof
      drawRectangle(x + 35, y + 50, 30, 50, 'brown'); // Door
      drawRectangle(x + 10, y + 20, 20, 20, 'white'); // l window
      drawRectangle(x + 70, y + 20, 20, 20, 'white'); // r window
    }

    // Grass and Sun
    function drawBackground() {
      drawRectangle(0, 300, 800, 300, 'green'); 
      drawCircle(700, 100, 50, 'yellow'); 
    }

    // Stamp
    drawBackground();
    drawHouse(200, 300); 
    drawHouse(400, 300); 

