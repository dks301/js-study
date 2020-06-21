export const winningLottoTemplate = data => {
  return "<div class='lotto'>" + data.winningNumbers
    .map(number => `<div class="lotto-number winning">${number}</div>`)
    .concat(`<div class="lotto-number winning bonus-number">${data.bonus}</div>`)
    .join("") + "</div>";
}

export const lottoTemplate = (winningLotto, lotto) => {
  return "<div class = 'lotto'>" + lotto.map(number => {
    return winningLotto.winningNumbers.includes(number) ? `<div class="lotto-number winning">${number}</div>`
      : winningLotto.bonus === number ? `<div class="lotto-number winning bonus-number">${number}</div>` : `<div class="lotto-number">${number}</div>`;
  }).join("") + "</div>";
}