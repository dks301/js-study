import {EVENT_TYPE, ERROR, URL} from "../utils/constants.js";

function LottoInput({onAdd}) {
  const baseUrl = URL.BASE;
  const $lottoRound = document.querySelector("#input-lotto-round");
  const $lottoAmount = document.querySelector("#input-cash-amount");
  const $button = document.querySelector("#buy-btn");

  $button.addEventListener(EVENT_TYPE.CLICK, event => this.retrieveLottoInfo(event));

  this.retrieveLottoInfo = event => {
    event.preventDefault();
    if (isNaN(parseInt($lottoRound.value)) || $lottoRound.value <= 0) {
      return alert(ERROR.ROUND);
    }
    if (isNaN(parseInt($lottoAmount.value)) || $lottoAmount.value < 1000 || $lottoAmount.value % 1000 !== 0) {
      return alert(ERROR.MONEY);
    }
    const url = baseUrl + $lottoRound.value;
    fetch(url)
      .then(response => response.json())
      .then(item => onAdd(item, $lottoAmount.value / 1000));
  };
}

export default LottoInput;