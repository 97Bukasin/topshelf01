 // === Category Data ===
  // === Cognac ===
const allProducts = [
  { id: 1, name: "Hennessy XO", price: 388000, image: "img/Features/XO.png", thumbnails: ["img/Features/XO.png", "img/products/hennessy-2.jpg", "img/products/hennessy-3.jpg"], category: "cognac", relatedIds: [2, 3, 4] },
  { id: 2, name: "Hennessy VSOP", price: 105000, image: "img/Products/", category: "cognac", relatedIds: [1, 3, 5] },
  { id: 3, name: "Hennessy VS", price: 62000, image: "img/Products/", category: "cognac", relatedIds: [1, 2, 6] },
  { id: 4, name: "D'USSE VSOP", price: 90500, image: "img/Products/", category: "cognac", relatedIds: [1, 5, 7] },
  { id: 5, name: "Martell VS", price: 58500, image: "img/Products/", category: "cognac", relatedIds: [2, 4, 6] },
  { id: 6, name: "Blue Swift", price: 95000, image: "img/Products/", category: "cognac", relatedIds: [3, 5, 7] },
  { id: 7, name: "Remy Martin", price: 87000, image: "img/Products/", category: "cognac", relatedIds: [4, 5, 6] },

  
  // === Whiskey ===
{ id: 8, name: "Glenfiddich 21", price: 360000, image: "img/Features/Glenfiddich.png", category: "whiskey", relatedIds: [9, 10, 11] },
{ id: 9, name: "Glenfiddich 18", price: 141000, image: "img/Products/", category: "whiskey", relatedIds: [8, 10, 12] },
{ id: 10, name: "Glenfiddich 15", price: 90000, image: "img/Products/", category: "whiskey", relatedIds: [8, 9, 11] },
{ id: 11, name: "Glenfiddich 12", price: 60200, image: "img/Products/", category: "whiskey", relatedIds: [8, 10, 13] },
{ id: 12, name: "Jack Daniels Old No. 7", price: 29700, image: "img/Products/", category: "whiskey", relatedIds: [9, 13, 14] },
{ id: 13, name: "Jameson Black Barrel", price: 45000, image: "img/Products/", category: "whiskey", relatedIds: [11, 12, 14] },
{ id: 14, name: "Jameson Irish Whiskey", price: 27000, image: "img/Products/", category: "whiskey", relatedIds: [12, 13, 15] },
{ id: 15, name: "Macallan 15", price: 208000, image: "img/Products/", category: "whiskey", relatedIds: [8, 16, 17] },
{ id: 16, name: "Macallan 12", price: 98500, image: "img/Products/", category: "whiskey", relatedIds: [10, 15, 17] },
{ id: 17, name: "The Observatory", price: 45700, image: "img/Products/", category: "whiskey", relatedIds: [13, 15, 16] },

// === Tequila ===
{ id: 18, name: "Don Julio 1942", price: 475000, image: "img/Features/1942.png", category: "tequila", relatedIds: [21, 22, 23] },
{ id: 19, name: "Olmeca Gold", price: 23700, image: "img/Products/3.png", category: "tequila", relatedIds: [20, 24, 25] },
{ id: 20, name: "Salamanca", price: 62000, image: "img/Products/2.png", category: "tequila", relatedIds: [19, 22, 24] },
{ id: 21, name: "Clase Azul Reposado", price: 430000, image: "img/Features/Azul.png", category: "tequila", relatedIds: [18, 23, 25] },
{ id: 22, name: "Volcan Blanco", price: 75000, image: "img/Products/", category: "tequila", relatedIds: [18, 20, 23] },
{ id: 23, name: "Volcan Cristalino", price: 125000, image: "img/Products/", category: "tequila", relatedIds: [18, 21, 22] },
{ id: 24, name: "Patron Silver", price: 55850, image: "img/Products/5.png", category: "tequila", relatedIds: [19, 20, 25] },
{ id: 25, name: "Sierra Reposado", price: 19000, image: "img/Products/6.png", category: "tequila", relatedIds: [19, 24, 26] },
{ id: 26, name: "Sierra Blanco", price: 17500, image: "img/Products/4.png", category: "tequila", relatedIds: [25, 24, 27] },
{ id: 27, name: "Camino Blanco", price: 22320, image: "img/Products/7.png", category: "tequila", relatedIds: [25, 26, 28] },
{ id: 28, name: "Camino Gold", price: 23700, image: "img/Products/12", category: "tequila", relatedIds: [26, 27, 19] },

// === Vodka ===
{ id: 29, name: "Absolut Blue", price: 22500, image: "img/Products/", category: "vodka", relatedIds: [30, 31, 34] },
{ id: 30, name: "Skyy Raspberry", price: 20500, image: "img/Products/", category: "vodka", relatedIds: [31, 32, 29] },
{ id: 31, name: "Skyy Passionfruit", price: 20500, image: "img/Products/", category: "vodka", relatedIds: [30, 32, 33] },
{ id: 32, name: "Skyy Original", price: 20500, image: "img/Products/", category: "vodka", relatedIds: [30, 31, 33] },
{ id: 33, name: "Skyy Citrus", price: 20500, image: "img/Products/", category: "vodka", relatedIds: [31, 32, 30] },
{ id: 34, name: "Ciroc Blue", price: 46000, image: "img/Products/", category: "vodka", relatedIds: [29, 30, 31] },

// === Syrup ===
{ id: 35, name: "Triple Sec Bardinet", price: 17000, image: "img/Products/9.png", category: "syrup", relatedIds: [36, 37] },
{ id: 36, name: "Grenadine", price: 13500, image: "img/Products/8.png", category: "syrup", relatedIds: [35, 37] },
{ id: 37, name: "Monin Mojito Mint", price: 14000, image: "img/Products/monin-mint.png", category: "syrup", relatedIds: [35, 36] },

  // === Wines ===
{ id: 38, name: "Martini Brut", price: 15900, image: "img/Products/13.png", category: "wines", relatedIds: [39, 40, 41] },
{ id: 39, name: "Martini Rose", price: 15900, image: "img/Products/11.png", category: "wines", relatedIds: [38, 40, 41] },
{ id: 40, name: "Martini Proseco", price: 15900, image: "img/Products/10.png", category: "wines", relatedIds: [38, 39, 41] },
{ id: 41, name: "Nederburg Cabernet Sauvignon", price: 22000, image: "img/Products/16.png", category: "wines", relatedIds: [42, 43, 44] },
{ id: 42, name: "Nederberg Sauvignon Blanc", price: 22000, image: "img/Products/14.png", category: "wines", relatedIds: [41, 43, 44] },
{ id: 43, name: "Nederberg Chapel Red", price: 22000, image: "img/Products/nederburgred-removebg-preview.png", category: "wines", relatedIds: [41, 42, 44] },
{ id: 44, name: "Four Cousins Red", price: 8500, image: "img/Products/", category: "wines", relatedIds: [45, 46, 43] },
{ id: 45, name: "Four Cousins White", price: 8500, image: "img/Products/", category: "wines", relatedIds: [44, 46, 47] },
{ id: 46, name: "Four Cousins Rose", price: 8500, image: "img/Products/", category: "wines", relatedIds: [44, 45, 47] },
{ id: 47, name: "Declan Red", price: 8900, image: "img/Products/", category: "wines", relatedIds: [46, 48, 49] },
{ id: 48, name: "Declan White", price: 8900, image: "img/Products/", category: "wines", relatedIds: [47, 49, 50] },
{ id: 49, name: "Asconi Agor", price: 9200, image: "img/Products/", category: "wines", relatedIds: [47, 48, 50] },
{ id: 50, name: "Escudo Rojo", price: 24500, image: "img/Products/", category: "wines", relatedIds: [48, 49, 41] },

  // === Gin ===
{ id: 51, name: "Gin Mare", price: 62500, image: "img/Products/", category: "gin", relatedIds: [52, 53] },
{ id: 52, name: "Bombay", price: 22500, image: "img/Products/", category: "gin", relatedIds: [51, 53] },
{ id: 53, name: "Gordons", price: 11250, image: "img/Products/", category: "gin", relatedIds: [51, 52] },

 // === rum ===
{ id: 58, name: "Captain Morgan Spiced Gold", price: 15000, image: "img/Products/", category: "rum", relatedIds: [59, 60, 61] },
{ id: 59, name: "Bacardi White", price: 13500, image: "img/Products/", category: "rum", relatedIds: [58, 60, 61] },
{ id: 60, name: "Bacardi Black", price: 14000, image: "img/Products/", category: "rum", relatedIds: [58, 59, 61] },
{ id: 61, name: "Old Monk", price: 11500, image: "img/Products/", category: "rum", relatedIds: [58, 59, 60] },

  // === Champagne ===
{ id: 54, name: "Moet & Chandon Nectar Imperial", price: 107000, image: "img/Products/", category: "champagne", relatedIds: [55, 56, 57] },
{ id: 55, name: "Moet & Chandon Nectar Rose", price: 120000, image: "img/Products/", category: "champagne", relatedIds: [54, 56, 57] },
{ id: 56, name: "Moet & Chandon Brut Imperial", price: 98000, image: "img/Products/", category: "champagne", relatedIds: [54, 55, 57] },
{ id: 57, name: "BELAIRE Rosé", price: 70000, image: "img/Products/", category: "champagne", relatedIds: [54, 55, 56] },
];

const productsPerPage = 12;
let currentPage = 1;

function displayProducts(page = 1) {
  const productList = document.getElementById("product-list");
  const pagination = document.getElementById("pagination");

  if (!productList || !pagination) return;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = allProducts.slice(startIndex, endIndex);

  productList.innerHTML = paginatedProducts.map(product => `
    <div class="pro" onclick="viewProduct(${product.id})">
      <img src="${product.image}" alt="${product.name}">
      <div class="des">
        <h5>${product.name}</h5>
        <h4>₦${product.price.toLocaleString()}</h4>
      </div>
    </div>
  `).join("");

  renderPagination(allProducts.length, page);
}

function renderPagination(totalProducts, currentPage) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      displayProducts(i);
    });

    pagination.appendChild(btn);
  }
}

displayProducts(); // will default to page 1

function viewProduct(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    window.location.href = "sproduct.html";
  }
}


// Hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");
  const close = document.getElementById("close");

  if (bar && nav) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }

  if (close && nav) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
});



