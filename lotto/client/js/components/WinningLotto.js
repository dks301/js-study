import {winningLottoTemplate} from "../utils/templates.js";

function WinningLotto() {
  const $winningLotto = document.querySelector("#lotto-result");

  this.setState = updatedWinningLotto => {
    this.render(updatedWinningLotto);
  }

  this.render = winningLotto => {
    $winningLotto.innerHTML = winningLottoTemplate(winningLotto);
  }
}

export default WinningLotto;