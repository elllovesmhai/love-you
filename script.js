function pressMe() {
  const randomMessage = document.createElement("div");
  randomMessage.className = "random-message";
  randomMessage.textContent = "I love you";

  // Random position within the window
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 50);

  randomMessage.style.left = `${x}px`;
  randomMessage.style.top = `${y}px`;

  document.body.appendChild(randomMessage);
}
