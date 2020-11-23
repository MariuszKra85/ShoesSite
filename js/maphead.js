const API_KEY = process.env.MAP_KEY;
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
document.head.append(script);
