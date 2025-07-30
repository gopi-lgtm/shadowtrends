let cart = [];
let discount = 0;
let appliedCoupon = null;

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';

  let totalBeforeDiscount = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.product} — ₹${item.price};
    cartItems.appendChild(li);
    totalBeforeDiscount += item.price;
  });

  let finalTotal = totalBeforeDiscount - discount;

  if (discount > 0) {
    totalEl.innerHTML = Total: <s>₹${totalBeforeDiscount}</s> <strong>₹${finalTotal}</strong> (₹${discount} OFF);
  } else {
    totalEl.textContent = Total: ₹${totalBeforeDiscount};
  }
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toLowerCase();
  const message = document.getElementById('coupon-message');
  const validCoupons = ['vts_cuts', 'gopi123', 'mahesh123', 'teja123'];
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (validCoupons.includes(code)) {
    if (cartTotal >= 900) {
      discount = 100;
      appliedCoupon = code;
      message.textContent = ✅ ₹100 OFF applied with code: ${code};
      message.style.color = "lightgreen";
    } else {
      discount = 0;
      appliedCoupon = null;
      message.textContent = "⚠️ ₹900 minimum required.";
      message.style.color = "orange";
    }
  } else {
    discount = 0;
    appliedCoupon = null;
    message.textContent = "❌ Invalid coupon code.";
    message.style.color = "red
