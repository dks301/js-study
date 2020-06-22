export const winningLottoTemplate = data => {
  return `
    <div class='lotto'>
        ${makeWinningLotto(data.winningNumbers)} 
        <div class="lotto-number winning bonus-number">${data.bonus}</div>
    </div>
    `;
}

function makeWinningLotto(winningNumbers) {
  return winningNumbers.map(number => `<div class="lotto-number winning">${number}</div>`).join("");
}

export const lottoTemplate = (winningLotto, lotto) => {
  return `
    <div class = 'lotto'>
        ${lotto.map(number => matchLotto(winningLotto, number)).join("")}
    </div>
    `;
}

function matchLotto(winningLotto, number) {
  if (winningLotto.winningNumbers.includes(number)) {
    return `<div class="lotto-number winning">${number}</div>`;
  }
  if (winningLotto.bonus === number) {
    return `<div class="lotto-number winning bonus-number">${number}</div>`
  }
  return `<div class="lotto-number">${number}</div>`;
}