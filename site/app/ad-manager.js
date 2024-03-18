const fakeAds = ["../assets/cult_ad.gif"];

function createAd() {
  const adIndex = Math.floor(Math.random() * fakeAds.length);
  const adURL = fakeAds[adIndex];

  const adElement = document.createElement("img");
  adElement.src = adURL;
  adElement.style.position = "fixed";
  adElement.classList.add("fake-ad");

  // Wait for the ad to load before calculating its position
  adElement.onload = function () {
    const adHeight = adElement.naturalHeight;
    const adWidth = adElement.naturalWidth;

    // Ensure the ad fits within the viewport
    const maxY = window.innerHeight - adHeight;
    const randomY = Math.floor(Math.random() * Math.max(maxY, 1));

    adElement.style.top = `${randomY}px`;

    // Determine side (left or right) for horizontal positioning
    if (Math.random() < 0.5) {
      // Place ad against the left edge
      adElement.style.left = "0px";
    } else {
      // Place ad against the right edge
      adElement.style.right = "0px";
    }

    document.body.appendChild(adElement);

    // Remove ad when clicked
    adElement.onclick = function () {
      document.body.removeChild(adElement);
    };
  };
}

function createRandomAd() {
  createAd();
  const randomInterval = Math.floor(Math.random() * 5000) + 5000;
  setTimeout(createRandomAd, randomInterval);
}

createRandomAd();
