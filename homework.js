setInterval(() => {
  let color, hex;
  hex = "1234567890ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;
}, 500);
