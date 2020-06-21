import LottoInput from "./components/LottoInput.js"
import LottoList from "./components/LottoList.js"
import WinningLotto from "./components/WinningLotto.js"
import LottoQuantity from "./components/LottoQuantity.js";

function LottoApp() {
  // this.winning = null;
  // this.lottos = [];

  this.setState = (winningData, size) => {
    this.winningLotto.setState(winningData);
    this.lottoList.setState(winningData, size);
    this.lottoQuantity.setState(size);
  };

  this.lottoInput = new LottoInput({
    onAdd: (contents, size) => {
      this.setState(contents, size);
    }
  });
  this.winningLotto = new WinningLotto();
  this.lottoList = new LottoList();
  this.lottoQuantity = new LottoQuantity();
}

const lottoApp = new LottoApp();