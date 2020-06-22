import {lottoTemplate} from "../utils/templates.js";

function LottoList () {
  const $lottos = document.querySelector("#lottos");

  function generateLotto() {
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
      let number = Math.floor(Math.random() * 45) + 1;
      if (lottoNumbers.includes(number)) {
        i--;
        continue;
      }
      lottoNumbers.push(number);
    }
    return lottoNumbers.sort((a, b) => a - b);
  }

  function generateLottos(size) {
    const lottos = [];
    for (let i = 0; i < size; i++) {
      lottos.push(generateLotto());
    }
    return lottos;
  }

  this.setState = (winningData, size) => {
    this.lottos = generateLottos(size);
    this.render(winningData, this.lottos);
  }

  this.render = (winningData, lottos) => {
    const template = lottos.map(lotto => lottoTemplate(winningData, lotto));
    $lottos.innerHTML = template.join("");
  }
}

export default LottoList;