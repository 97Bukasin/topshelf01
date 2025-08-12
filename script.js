 // === Category Data ===
  // === Cognac ===

const allProducts = [
  { id: 1, name: "Hennessy XO", price: 388000, image: "img/Products/hennessyxo1.JPG", thumbnails: ["img/Products/hennessyxo1.JPG", "img/Products/hennessyxo2.JPG", "img/Products/hennessyxo3.JPG"], category: "cognac", relatedIds: [2, 3, 4] },
  { id: 2, name: "Hennessy VSOP", price: 105000, image: "img/Products/hennessyvsop1.JPG",  thumbnails: ["img/Products/hennessyvsop1", "", ""], category: "cognac", relatedIds: [1, 3, 5] },
  { id: 3, name: "Hennessy VS", price: 62000, image: "img/Products/hennessyvs1.JPG",  thumbnails: ["img/Products/hennessyvs1.JPG", "img/Products/hennessyvs2.JPG", "img/Products/hennessyvs0.JPG"], category: "cognac", relatedIds: [1, 2, 6] },
  { id: 4, name: "D'USSE VSOP", price: 90500, image: "img/Products/dusse1.JPG",  thumbnails: ["img/Products/dusse1.JPG", "img/Products/dusse2.JPG", "img/Products/dusse3.JPG"], category: "cognac", relatedIds: [1, 5, 7] },
  { id: 5, name: "Martell VS", price: 58500, image: "img/Products/martellvs0.JPG",  thumbnails: ["img/Products/martellvs0.JPG", "img/Products/martell00.JPG", "img/Products/martell000.JPG"], category: "cognac", relatedIds: [2, 4, 6] },
  { id: 6, name: "Blue Swift", price: 95000, image: "img/Products/martelbs1.JPG",  thumbnails: ["img/Products/martelbs1.JPG", "img/Products/martelbs2.JPG", "img/Products/martelbs3.JPG"], category: "cognac", relatedIds: [3, 5, 7] },
  { id: 7, name: "Remy Martin", price: 87000, image: "img/Products/remymart1.JPG",  thumbnails: ["img/Products/remymart1.JPG", "img/Products/remymart2.JPG", "img/Products/remymart1.JPG"], category: "cognac", relatedIds: [4, 5, 6] },
  
  // === Whiskey ===
{ id: 8, name: "Glenfiddich 21", price: 360000, image: "img/Products/glenfiddich212.JPG",  thumbnails: ["img/Products/glenfiddich212.JPG", "img/Products/glenfiddich213.JPG", "img/Products/glenfiddich213.JPG"], category: "whiskey", relatedIds: [9, 10, 11] },
{ id: 9, name: "Glenfiddich 18", price: 141000, image: "img/Products/glenfiddich181.JPG",  thumbnails: ["img/Products/glenfiddich181.JPG", "img/Products/glenfiddich182.JPG", "img/Products/glenfiddich183.JPG"], category: "whiskey", relatedIds: [8, 10, 12] },
{ id: 10, name: "Glenfiddich 15", price: 90000, image: "img/Products/glenfiddich15-1.JPG",  thumbnails: ["img/Products/glenfiddich15-1.JPG", "img/Products/glenfiddich151", "img/Products/glenfiddich153"], category: "whiskey", relatedIds: [8, 9, 11] },
{ id: 11, name: "Glenfiddich 12", price: 60200, image: "img/Products/glenfiddich121.JPG",  thumbnails: ["img/Products/glenfiddich121.JPG", "img/Products/glenfiddich122.JPG", ""], category: "whiskey", relatedIds: [8, 10, 13] },
{ id: 12, name: "Jack Daniels Old No. 7", price: 29700, image: "img/Products/jaackdaniels1.JPG",  thumbnails: ["img/Products/jaackdaniels1.JPG", "img/Products/jackdaniels2.JPG", "img/Products/jack daniels3.JPG"], category: "whiskey", relatedIds: [9, 13, 14] },
{ id: 13, name: "Jameson Black Barrel", price: 45000, image: "img/Products/jamesonblackbarrel2.JPG",  thumbnails: ["img/Products/jamesonblackbarrel2.JPG", "img/Products/jamesonblackbarrel1.JPG", "img/Products/jamesonblackbarrel3.JPG"], category: "whiskey", relatedIds: [11, 12, 14] },
{ id: 14, name: "Jameson Irish Whiskey", price: 27000, image: "img/Products/jameson3pledis2.JPG",  thumbnails: ["img/Products/jameson3pledis2.JPG", "img/Products/jameson3ple.JPG", "img/Products/jameson3pledis.JPG"], category: "whiskey", relatedIds: [12, 13, 15] },
{ id: 15, name: "Macallan 15", price: 208000, image: "img/Products/macallan151.JPG",  thumbnails: ["img/Products/macallan151.JPG", "img/Products/macallan152.JPG", "img/Products/macallan153.JPG"], category: "whiskey", relatedIds: [8, 16, 17] },
{ id: 16, name: "Macallan 12", price: 98500, image: "img/Products/macallan121.JPG",  thumbnails: ["img/Products/macallan121.JPG", "img/Products/macallan122.JPG", ""], category: "whiskey", relatedIds: [10, 15, 17] },
{ id: 17, name: "The Observatory", price: 45700, image: "img/Products/",  thumbnails: ["", "", ""], category: "whiskey", relatedIds: [13, 15, 16] },

// === Tequila ===
{ id: 18, name: "Don Julio 1942", price: 475000, image: "img/Products/donjulio2.JPG",  thumbnails: ["img/Products/donjulio2.JPG", "img/Products/donjulio3.JPG", "img/Products/don julio1.JPG"], category: "tequila", relatedIds: [21, 22, 23] },
{ id: 19, name: "Olmeca Gold", price: 23700, image: "img/Products/olmecagold.JPG",  thumbnails: ["", "", ""], category: "tequila", relatedIds: [20, 24, 25] },
{ id: 20, name: "Salamanca", price: 62000, image: "img/Products/salamanca.jpg",  thumbnails: ["img/Products/salamanca.jpg", "img/Products/salamanca2.JPG", "img/Products/salamanca3.JPG"], category: "tequila", relatedIds: [19, 22, 24] },
{ id: 21, name: "Clase Azul Reposado", price: 430000, image: "img/Products/claseazul.JPG",  thumbnails: ["img/Products/claseazul.JPG", "img/Products/azul2.JPG", "img/Products/azul2.JPG"], category: "tequila", relatedIds: [18, 23, 25] },
{ id: 22, name: "Volcan Blanco", price: 75000, image: "img/Products/volcan.JPG",  thumbnails: ["img/Products/volcan.JPG", "img/Products/volcan2.JPG", "img/Products/volcan3.JPG"], category: "tequila", relatedIds: [18, 20, 23] },
{ id: 23, name: "Volcan Cristalino", price: 125000, image: "img/Products/volcancristalino1.JPG",  thumbnails: ["img/Products/volcancristalino1.JPG", "img/Products/volcancristalino2.JPG", "img/Products/volcancristalino1.JPG"], category: "tequila", relatedIds: [18, 21, 22] },
{ id: 24, name: "Patron Silver", price: 55850, image: "img/Products/silverpatron.JPG",  thumbnails: ["silverpatron.JPG", "", ""], category: "tequila", relatedIds: [19, 20, 25] },
{ id: 25, name: "Sierra Reposado", price: 19000, image: "img/Products/sierrareposado.JPG",  thumbnails: ["img/Products/sierrareposdao.JPG", "img/Products/sierra reposdao (2).JPG", ""], category: "tequila", relatedIds: [19, 24, 26] },
{ id: 26, name: "Sierra Blanco", price: 17500, image: "img/Products/sierrablanco1.JPG",  thumbnails: ["", "", ""], category: "tequila", relatedIds: [25, 24, 27] },
{ id: 27, name: "Camino Blanco", price: 22320, image: "img/Products/caminoblanco.JPG",  thumbnails: ["img/Products/caminoblanco.JPG", "img/Products/caminoblanco.JPG", "img/Products/caminoblanco.JPG"], category: "tequila", relatedIds: [25, 26, 28] },
{ id: 28, name: "Camino Gold", price: 23700, image: "img/Products/caminogold4.jpg",   thumbnails: ["img/Products/caminogold4.jpg", "img/Product/12.png", ""], category: "tequila", relatedIds: [26, 27, 19] },

// === Vodka ===
{ id: 29, name: "Absolut Blue", price: 22500, image: "img/Products/absolut1.JPG",  thumbnails: ["img/Products/absolut1.JPG", "img/Products/absolut2.JPG", "img/Products/absolut3.JPG"], category: "vodka", relatedIds: [30, 31, 34] },
{ id: 30, name: "Skyy Raspberry", price: 20500, image: "img/Products/skyyraspberry.JPG",  thumbnails: ["img/Products/skyyraspberry.JPG", "img/Products/skyyraspberry2.JPG", "img/Products/skyyraspberry3.JPG"], category: "vodka", relatedIds: [31, 32, 29] },
{ id: 31, name: "Skyy Passionfruit", price: 20500, image: "img/Products/skyyinfusions.JPG",  thumbnails: ["img/Products/skyyinfusions.JPG", "img/Products/skyypasionfruit.JPG", "img/Products/skyyinfusions.JPG"], category: "vodka", relatedIds: [30, 32, 33] },
{ id: 32, name: "Skyy Original", price: 20500, image: "img/Products/skyyvodka1.JPG",  thumbnails: ["img/Products/skyyvodka1.JPG", "/img/Products/skyyvodka2.JPG", "img/Products/skyyvodka3.JPG"], category: "vodka", relatedIds: [30, 31, 33] },
{ id: 33, name: "Skyy Citrus", price: 20500, image: "img/Products/skyycitrus2.JPG",  thumbnails: ["img/Products/skyycitrus2.JPG", "img/Products/skyycitrus.JPG", "img/Products/skyycitrus3.JPG"], category: "vodka", relatedIds: [31, 32, 30] },
{ id: 34, name: "Ciroc Blue", price: 46000, image: "img/Products/ciroc2.JPG",  thumbnails: ["img/Products/ciroc2.JPG", "img/Products/ciroc.JPG", "img/Products/ciroc3.JPG"], category: "vodka", relatedIds: [29, 30, 31] },

// === Syrup ===
{ id: 35, name: "Triple Sec Bardinet", price: 17000, image: "img/Products/triplesec.jpg",  thumbnails: ["img/Products/triplesec.jpg", "img/Products/triplesec.jpg", "img/Products/triplesec.jpg"], category: "syrup", relatedIds: [36, 37] },
{ id: 36, name: "Grenadine", price: 13500, image: "img/Products/grenadine.jpg",  thumbnails: ["img/Products/grenadine.jpg", "img/Products/grenadine.jpg", "img/Products/grenadine.jpg"], category: "syrup", relatedIds: [35, 37] },
{ id: 37, name: "Isobella della Cruze", price: 14000, image: "img/Products/isobella.jpg",  thumbnails: ["img/Products/isobella.jpg", "img/Products/isobella.jpg", "img/Products/isobella.jpg"], category: "wine", relatedIds: [35, 36] },

  // === Wines ===
{ id: 38, name: "Martini Brut", price: 15900, image: "img/Products/martinibrut (2).JPG",  thumbnails: ["img/Products/martinibrut (2).JPG", "img/Products/martinibrut.JPG", "img/Products/martinibrut3.JPG"], category: "wines", relatedIds: [39, 40, 41] },
{ id: 39, name: "Martini Rose", price: 15900, image: "img/Products/martinirose1.JPG",   thumbnails: ["img/Products/martinirose1.JPG", "img/Products/martinirose2.JPG", "img/Products/martinirose3.JPG"],category: "wines", relatedIds: [38, 40, 41] },
{ id: 40, name: "Martini Proseco", price: 15900, image: "img/Products/martiniproseco1.JPG",  thumbnails: ["img/Products/martiniproseco1.JPG", "img/Products/martiniproseco2.JPG", "img/Products/martiniproseco3.JPG"], category: "wines", relatedIds: [38, 39, 41] },
{ id: 41, name: "Nederburg Cabernet Sauvignon", price: 22000, image: "img/Products/nederbergcs.JPG",  thumbnails: ["img/Products/nerdebergcs.JPG", "img/Products/nederbergcs.JPG", "img/Products/nederbergcs3.JPG"], category: "wines", relatedIds: [42, 43, 44] },
{ id: 42, name: "Nederberg Sauvignon Blanc", price: 22000, image: "img/Products/nederburgsauvblanc.jpg",  thumbnails: ["", "", ""], category: "wines", relatedIds: [41, 43, 44] },
{ id: 43, name: "Nederberg Chapel Red", price: 22000, image: "img/Products/nederbergchapelred.JPG",  thumbnails: ["img/Products/nederburgchapelred.JPG", "img/Products/nederbergchapelred.JPG", "img/Products/nederbergchapelred.JPG"], category: "wines", relatedIds: [41, 42, 44] },
{ id: 44, name: "Four Cousins Sweet Red", price: 8500, image: "img/Products/4cousnsweetred.jpg",  thumbnails: ["img/Products/4cousnsweetred.jpg", "img/Products/4cousnsweetred.jpg", "img/Products/4cousnsweetred.jpg"], category: "wines", relatedIds: [45, 46, 43] },
{ id: 45, name: "Four Cousins White", price: 8500, image: "img/Products/4cousnsweetwhite.jpg",  thumbnails: ["img/Products/4cousnsweetwhite.jpg", "img/Products/4cousnsweetwhite.jpg", "img/Products/4cousnsweetwhite.jpg"], category: "wines", relatedIds: [44, 46, 47] },
{ id: 46, name: "Four Cousins Rose", price: 8500, image: "img/Products/4cousnatsweetrose.jpg",  thumbnails: ["img/Products/4cousnatsweetrose.jpg", "img/Products/4cousnatsweetrose.jpg", "img/Products/4cousnatsweetrose.jpg"], category: "wines", relatedIds: [44, 45, 47] },
{ id: 47, name: "Declan Red", price: 8900, image: "img/Products/declanred.jpg",  thumbnails: ["img/Products/declanred.jpg", "img/Products/declanred.jpg", "img/Products/declanred.jpg"], category: "wines", relatedIds: [46, 48, 49] },
{ id: 48, name: "Declan White", price: 8900, image: "img/Products/declan1.jpg",  thumbnails: ["img/Products/declan1.jpg", "img/Products/declan1.jpg", "img/Products/declan1.jpg"], category: "wines", relatedIds: [47, 49, 50] },
{ id: 49, name: "Asconi Agor", price: 9200, image: "img/Products/ascor.jpg",  thumbnails: ["img/Products/ascor.jpg", "img/Products/ascor.jpg", "img/Products/ascor.jpg"], category: "wines", relatedIds: [47, 48, 50] },
{ id: 50, name: "Escudo Rojo", price: 24500, image: "img/Products/escudorojo1.JPG",  thumbnails: ["img/Products/escudorojo1.JPG", "img/Products/escudorojo1.JPG", "img/Products/escudorojo3.JPG"], category: "wines", relatedIds: [48, 49, 41] },

  // === Gin ===
{ id: 51, name: "Gin Mare", price: 62500, image: "img/Products/ginmare1.JPG",  thumbnails: ["img/Products/ginmare1.JPG", "img/Products/ginmare2.JPG", "img/Products/ginmare3.JPG"], category: "gin", relatedIds: [52, 53] },
{ id: 52, name: "Bombay", price: 22500, image: "img/Products/bombay1.JPG",  thumbnails: ["img/Products/bombay1.JPG", "img/Products/bombay2.JPG", "img/Products/bombay3.JPG"], category: "gin", relatedIds: [51, 53] },
{ id: 53, name: "Gordons", price: 11250, image: "img/Products/gordons1.JPG",  thumbnails: ["img/Products/gordons1.JPG", "img/Products/gordons2.JPG", "img/Products/gordons3.JPG"], category: "gin", relatedIds: [51, 52] },

 // === rum ===

{ id: 59, name: "Bacardi Spiced", price: 15850, image: "img/Products/bacardispice1.JPG",  thumbnails: ["img/Products/bacardispice1.JPG", "img/Products/bacardispice2.JPG", "img/Products/bacardispice3.JPG"], category: "rum", relatedIds: [58, 60, 61] },
{ id: 60, name: "Bacardi Blanco", price: 17500, image: "img/Products/bacardiblanco3.JPG",  thumbnails: ["img/Products/bacardiblanco3.JPG", "img/Products/bacardiblanco2.JPG", "img/Products/bacardiblanco3.JPG"], category: "rum", relatedIds: [58, 59, 61] },
  // === Champagne ===sss
{ id: 54, name: "Moet & Chandon Nectar Imperial", price: 107000, image: "img/Products/moetnectimp1.jpg",  thumbnails: ["img/Products/moetnectimp1.JPG", "img/Products/moetnectarimp2.JPG", "img/Products/moetnectimp1.JPG"], category: "champagne", relatedIds: [55, 56, 57] },
{ id: 55, name: "Moet & Chandon Nectar Rose", price: 120000, image: "img/Products/moetrose1.JPG",  thumbnails: ["img/Products/moetrose1.JPG", "img/Products/moetrose2.JPG", "img/Products/moetrose3.JPG"], category: "champagne", relatedIds: [54, 56, 57] },
{ id: 56, name: "Moet & Chandon Brut Imperial", price: 98000, image: "img/Products/moetbrut.JPG",  thumbnails: ["img/Products/moetbrut.JPG", "img/Products/moetbrut2.JPG", "img/Products/moetbrut.JPG"], category: "champagne", relatedIds: [54, 55, 57] },
{ id: 57, name: "BELAIRE Rosé", price: 70000, image: "img/Products/belair1.JPG",  thumbnails: ["img/Products/belair1.JPG", "img/Products/belair2.JPG", "img/Products/belair3.JPG"], category: "champagne", relatedIds: [54, 55, 56] },

//===Cream ===
{ id: 58, name: "Baileys", price: 30000, image: "img/Products/baileys1.JPG",  thumbnails: ["img/Products/baileys1.JPG", "img/Products/baileys2.JPG", "img/Products/baileys5.JPG"], category: "cream", relatedIds: [54, 55, 56] },

//=== Bitters ===
{ id: 58, name: "Jagameister", price: 18500, image: "img/Products/jmas1.JPG",  thumbnails: ["img/Products/jmas1.JPG", "img/Products/jmas2.JPG", "img/Products/jmas3.JPG"], category: "bitters", relatedIds: [54, 55, 56] },
{ id: 59, name: "Veuve Clicquot Rich", price: 136000, image: "img/Products/rich1.JPG",  thumbnails: ["img/Products/rich1.JPG", "img/Products/rich2.JPG", "img/Products/rich3.JPG"], category: "champagne", relatedIds: [54, 55, 56] },

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






