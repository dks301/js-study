function LottoQuantity() {
  const $quantity = document.querySelector("#lotto-quantity");

  this.setState = size => {
    this.render(size);
  }

  this.render = size => {
    $quantity.innerText = size;
  }
}

export default LottoQuantity;