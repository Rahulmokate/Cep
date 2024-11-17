// Initialize a basic map using Leaflet.js
document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([40.7128, -74.0060], 13); // Default to NYC coordinates

  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Example of adding a noise marker
  const exampleNoiseData = [
    { lat: 40.7138, lon: -74.0060, noiseLevel: 85, noiseType: "Traffic" },
    { lat: 40.7120, lon: -74.0080, noiseLevel: 70, noiseType: "Construction" },
  ];

  exampleNoiseData.forEach((data) => {
    const color = data.noiseLevel > 80 ? "red" : data.noiseLevel > 65 ? "yellow" : "green";
    L.circle([data.lat, data.lon], {
      radius: 100,
      color: color,
    })
      .bindPopup(`Noise Level: ${data.noiseLevel} dB<br>Type: ${data.noiseType}`)
      .addTo(map);
  });

  // Handle form submission
  const form = document.getElementById("noise-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const noiseLevel = document.getElementById("noise-level").value;
    const noiseType = document.getElementById("noise-type").value;

    if (noiseLevel && noiseType) {
      alert(`Noise report submitted:\nLevel: ${noiseLevel} dB\nType: ${noiseType}`);
    } else {
      alert("Please fill in all fields.");
    }
  });
});
