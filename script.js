  // Add custom JavaScript code here
  const greetings = [
    "Happy Mother's Day!",
    "Thank you for everything, Mom!",
    "You're the best, Mom!",
    "I love you, Mom!",
    "You're my hero, Mom!",
    "You're the glue that holds our family together, Mom!",
    "You're a supermom, Mom!",
    "You're the queen of our hearts, Mom!",
    "You're a blessing to us, Mom!",
    "You're the sunshine in our lives, Mom!"
  ];
  function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }
  const button = document.querySelector('.btn-primary');
  button.addEventListener('click', function() {
    alert(getRandomGreeting());
  });


