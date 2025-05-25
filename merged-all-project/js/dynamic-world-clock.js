
//Dynamic world clock
function updateClock() {
    // dubai's time offset (GMT+4:30) and Medina's time offset (GMT+3)
    const utcTime = new Date();
    const dubaiOffset = 4.5 * 60 * 60 * 1000; // dubai (GMT +4:30)
    const madinaOffset = 3 * 60 * 60 * 1000;  // Medina (GMT +3)
    const newyorkOffset = -4 * 60 * 60 * 1000;  // Medina (GMT +3)
    const brazilOffset = -3 * 60 * 60 * 1000;  // Medina (GMT +3)
    const madridOffset = 2 * 60 * 60 * 1000;  // Medina (GMT +3)
    const alaskaOffset = -9 * 60 * 60 * 1000  // Medina (GMT +3)

    const dubaiTime = new Date(utcTime.getTime() + dubaiOffset);
    const madinaTime = new Date(utcTime.getTime() + madinaOffset);
    const newyorkTime = new Date(utcTime.getTime() + newyorkOffset);
    const brazilTime = new Date(utcTime.getTime() + brazilOffset);
    const madridTime = new Date(utcTime.getTime() + madridOffset);
    const alaskaTime = new Date(utcTime.getTime() + alaskaOffset);

    // Extract hour and minute for dubai
    const dubaiHours = dubaiTime.getUTCHours().toString().padStart(2, "0");
    const dubaiMinutes = dubaiTime.getUTCMinutes().toString().padStart(2, "0");

    // Extract hour and minute for Medina
    const madinaHours = madinaTime.getUTCHours().toString().padStart(2, "0");
    const madinaMinutes = madinaTime.getUTCMinutes().toString().padStart(2, "0");

    const newyorkHours = newyorkTime.getUTCHours().toString().padStart(2, "0");
    const newyorkMinutes = newyorkTime.getUTCMinutes().toString().padStart(2, "0");

    const brazilHours = brazilTime.getUTCHours().toString().padStart(2, "0");
    const brazilMinutes = brazilTime.getUTCMinutes().toString().padStart(2, "0");

    const madridHours = madridTime.getUTCHours().toString().padStart(2, "0");
    const madridMinutes = madridTime.getUTCMinutes().toString().padStart(2, "0");

    const alaskaHours = alaskaTime.getUTCHours().toString().padStart(2, "0");
    const alaskaMinutes = alaskaTime.getUTCMinutes().toString().padStart(2, "0");

    // Display the time for dubai and Medina in the format HH:MM
    document.getElementById("dubai").innerText = `${dubaiHours}:${dubaiMinutes}`;
    document.getElementById("madina").innerText = `${madinaHours}:${madinaMinutes}`;
    document.getElementById("newyork").innerText = `${newyorkHours}:${newyorkMinutes}`;
    document.getElementById("brazil").innerText = `${brazilHours}:${brazilMinutes}`;
    document.getElementById("madrid").innerText = `${madridHours}:${madridMinutes}`;
    document.getElementById("alaska").innerText = `${alaskaHours}:${alaskaMinutes}`;

}

// Update every minute without API delay
setInterval(updateClock, 60000);
updateClock();
//Done
