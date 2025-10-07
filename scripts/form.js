const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("productSelect");
  if (!selectElement) return;

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${product.name} (Avg. Rating: ${product.averagerating})`;
    selectElement.appendChild(option);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const reviewCountDisplay = document.getElementById("reviewCountDisplay");
  if (!reviewCountDisplay) return;

  // Initialize counter if it doesn't exist
  if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", "0");
  }

  // Increment counter for this review submission
  let count = parseInt(localStorage.getItem("reviewCount"), 10);
  count++;
  localStorage.setItem("reviewCount", count);

  // Display total reviews submitted
  reviewCountDisplay.textContent = `Total Reviews Completed: ${count}`;
});

