import BestChancePatternStrategy from '../app/BestChancePatternStrategy';

const possiblePatterns = [
  'HHH',
  'HHT',
  'HTH',
  'HTT',
  'THH',
  'THT',
  'TTH',
  'TTT',
];

describe('Best chance pattern strategy ', () => {
  const bestChancePatternStrategy = new BestChancePatternStrategy();
  it.each(possiblePatterns)('should give you > 50% chance of winning 10000 games when opponent picks %p', (pattern) => {
    const testedPattern = bestChancePatternStrategy.determine(pattern);
    const winningPercentage = getWinningPercentage(testedPattern, pattern, 10000);
    expect(winningPercentage).toBeGreaterThan(50);
  });
});

function getWinningPercentage(testedPattern: string, opposingPattern: string, numGames: number) {
  let testedPatternWins = 0;
  let opposingPatternWins = 0;
  for (let i = 0; i < numGames; i++) {
    getWiningPattern(testedPattern, opposingPattern, generateRandomSequence()) === testedPattern ? testedPatternWins++ : opposingPatternWins++;
  }

  return calculatePercentage(testedPatternWins, numGames);
}

function calculatePercentage(num: number, total: number) {
  return Math.round((num / total) * 100 * 100) / 100
}

function getWiningPattern(p1: string, p2: string, seq: string) {
  if (p1 === p2) {
    throw new TypeError('p1 must be different than p2');
  }

  const p1Idx = seq.indexOf(p1);
  if (p1Idx === -1) {
    throw new Error('Malformed seq!');
  }

  const p2Idx = seq.indexOf(p2);
  if (p2Idx === -1) {
    throw new Error('Malformed seq!');
  }

  return p1Idx < p2Idx ? p1 : p2;
}

function generateRandomSequence() {
  let sequence = '';
  let hasAllPossiblePatterns;
  do {
    sequence += new Array(50)
      .fill(null)
      .map(() => Math.random() < 0.5 ? 'H' : 'T')
      .join('');

    hasAllPossiblePatterns = possiblePatterns.every(p => sequence.indexOf(p) !== -1);
  } while (!hasAllPossiblePatterns);

  return sequence;
}
