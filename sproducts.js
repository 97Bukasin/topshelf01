document.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("selectedProduct");
  if (!data) {
    document.querySelector(".single-product").innerHTML = "<p>Product not found.</p>";
    return;
  }

  const product = JSON.parse(data);

  // ==== Populate Main Product Details ====
  const mainImg = document.getElementById("MainImg");
  mainImg.src = product.image;
  mainImg.alt = product.name;

  const titleEl = document.getElementById("product-title");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-desc");

  titleEl.textContent = product.name;
  priceEl.textContent = `₦${product.price.toLocaleString()} each`;
  descEl.textContent = product.description;

  // ==== Total Price Display ====
  const totalPriceEl = document.createElement("p");
  totalPriceEl.className = "total-price";
  totalPriceEl.style.marginTop = "10px";
  totalPriceEl.style.fontWeight = "bold";
  totalPriceEl.style.transition = "opacity 0.3s ease";
  priceEl.parentNode.insertBefore(totalPriceEl, descEl);

  // ==== Product Details Section ====
  const productDetails = document.querySelector(".product-details");
  const orderBtn = productDetails.querySelector(".order-btn");

  // ==== Quantity Selector ====
  const quantityContainer = document.createElement("div");
  quantityContainer.className = "quantity-control";

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "−";
  minusBtn.className = "qty-btn";

  const qtyDisplay = document.createElement("input");
  qtyDisplay.type = "text";
  qtyDisplay.value = 1;
  qtyDisplay.className = "qty-display";
  qtyDisplay.readOnly = true;

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  plusBtn.className = "qty-btn";

  quantityContainer.appendChild(minusBtn);
  quantityContainer.appendChild(qtyDisplay);
  quantityContainer.appendChild(plusBtn);
  productDetails.insertBefore(quantityContainer, orderBtn);

  let quantity = 1;

  function updateTotalPrice(qty) {
    const total = product.price * qty;
    totalPriceEl.style.opacity = "0";
    setTimeout(() => {
      totalPriceEl.textContent = `Total: ₦${total.toLocaleString()}`;
      totalPriceEl.style.opacity = "1";
    }, 150);
  }

  updateTotalPrice(quantity);

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtyDisplay.value = quantity;
    updateTotalPrice(quantity);
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.value = quantity;
      updateTotalPrice(quantity);
    }
  });

  // ==== Variant Selector ====
  if (product.variants && product.variants.length > 0) {
    const variantContainer = document.createElement("div");
    variantContainer.className = "variant-selector";

    const variantLabel = document.createElement("label");
    variantLabel.textContent = "Choose Variant:";
    variantLabel.setAttribute("for", "variantSelect");

    const variantSelect = document.createElement("select");
    variantSelect.id = "variantSelect";

    product.variants.forEach(variant => {
      const option = document.createElement("option");
      option.value = variant.value;
      option.textContent = `${variant.label} - ₦${variant.price.toLocaleString()}`;
      variantSelect.appendChild(option);
    });

    variantContainer.appendChild(variantLabel);
    variantContainer.appendChild(variantSelect);
    productDetails.insertBefore(variantContainer, quantityContainer);

    variantSelect.addEventListener("change", () => {
      const selected = product.variants.find(v => v.value === variantSelect.value);
      if (selected) {
        product.price = selected.price;
        priceEl.textContent = `₦${selected.price.toLocaleString()} each`;
        updateTotalPrice(quantity);
      }
    });
  }

  // ==== Thumbnails ====
  if (product.thumbnails && product.thumbnails.length > 0) {
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-row");

    product.thumbnails.forEach((thumb, index) => {
      const thumbImg = document.createElement("img");
      thumbImg.src = thumb;
      thumbImg.alt = product.name;
      thumbImg.classList.add("thumb");

      if (index === 0) thumbImg.classList.add("active");

      thumbImg.addEventListener("click", () => {
        mainImg.src = thumb;
        document.querySelectorAll(".thumbnail-row img").forEach(img => img.classList.remove("active"));
        thumbImg.classList.add("active");
      });

      thumbnailContainer.appendChild(thumbImg);
    });

    document.querySelector(".product-image").appendChild(thumbnailContainer);
  }

  // ==== Highlights List ====
  if (product.highlights && product.highlights.length > 0) {
    const highlightList = document.createElement("ul");
    highlightList.className = "highlight-list";

    product.highlights.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      highlightList.appendChild(li);
    });

    document.querySelector(".product-details").appendChild(highlightList);
  }

 function loadRelatedProducts(currentProductId) {
  const allProducts = JSON.parse(localStorage.getItem("allProducts") || "[]");
  const relatedContainer = document.querySelector(".carousel-container");

  // Filter and shuffle to avoid same order every time
  let related = [];

if (product.relatedIds && product.relatedIds.length > 0) {
  related = allProducts.filter(p => product.relatedIds.includes(p.id));
} else {
  // Fallback: random selection
  related = allProducts
    .filter(p => p.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
}


  related.forEach(product => {
    const card = document.createElement("div");
    card.className = "related-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₦${product.price.toLocaleString()}</p>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "sproduct.html";
    });

    relatedContainer.appendChild(card);
  });
}

loadRelatedProducts(product.id);
});
