function LottoInput({onAdd}) {
  const baseUrl = "http://localhost:8000/lotto/";
  const $lottoRound = document.querySelector("#input-lotto-round");
  const $lottoAmount = document.querySelector("#input-cash-amount");
  const $button = document.querySelector("#buy-btn");

  $button.addEventListener("click", event => this.retrieveLottoInfo(event));

  this.retrieveLottoInfo = event => {
    event.preventDefault();
    if (isNaN(parseInt($lottoRound.value)) || $lottoRound.value <= 0) {
      return alert("회차 입력 오류");
    }
    if (isNaN(parseInt($lottoAmount.value)) || $lottoAmount.value < 1000 || $lottoAmount.value % 1000 !== 0) {
      return alert("금액 입력 오류");
    }
    const url = baseUrl + $lottoRound.value;
    fetch(url)
      .then(response => response.json())
      .then(item => onAdd(item, $lottoAmount.value / 1000));
  };
}

export default LottoInput;