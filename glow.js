// Array de sites para redirecionamento
const sites = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.facebook.com",
    "https://www.wikipedia.org",
    "https://www.reddit.com",
    "https://www.amazon.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
    "https://www.linkedin.com",
    "https://www.github.com",
    "https://www.twitch.tv",
    "https://www.netflix.com",
    "https://www.spotify.com",
    "https://www.microsoft.com",
    "https://www.apple.com",
    "https://www.yahoo.com",
    "https://www.bing.com",
    "https://www.netflix.com",
    "https://www.yahoo.com",
    "https://www.twitch.tv",
    "https://www.walmart.com",
    "https://www.ebay.com",
    "https://www.target.com",
    "https://www.homedepot.com",
    "https://www.lowes.com",
    "https://www.aliexpress.com",
    "https://www.booking.com",
    "https://www.expedia.com",
    "https://www.tripadvisor.com",
    "https://www.airbnb.com",
    "https://www.uber.com",
    "https://www.lyft.com",
    "https://www.doordash.com",
    "https://www.grubhub.com",
    "https://www.postmates.com",
    "https://www.udemy.com",
    "https://www.coursera.org",
    "https://www.edx.org",
    "https://www.khanacademy.org",
    "https://www.codecademy.com",
    "https://www.freecodecamp.org",
    "https://www.stackoverflow.com",
    "https://www.medium.com",
    "https://www.quora.com",
    "https://www.reddit.com",
    "https://www.9gag.com",
    "https://www.buzzfeed.com",
    "https://www.ifunny.com",
    "https://www.cheezburger.com",
    "https://www.memecenter.com",
    "https://www.memegenerator.net",
  ];
  
  // Função para redirecionar para um site aleatório
  function redirect() {
    const randomIndex = Math.floor(Math.random() * sites.length);
    const randomSite = sites[randomIndex];
    window.location.href = randomSite;
  }
  
  // Seleciona todos os links dentro das tags <a> e adiciona o evento de clique
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", redirect);
  });