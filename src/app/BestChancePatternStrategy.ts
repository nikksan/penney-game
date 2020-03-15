import PatternStrategy from './PatternStrategy';

class BestChancePatternStrategy implements PatternStrategy {
  determine(pattern: string) {
    if (pattern[0] === pattern[2] && pattern[0] !== pattern[1]) {
      return `${pattern[0]}${pattern[0]}${pattern[1]}`
    }
  
    if (pattern[0] === pattern[1]) {
      return `${pattern[0] === 'H' ? 'T' : 'H'}${pattern[0]}${pattern[0]}`
    }
  
    return `${pattern[1] === 'H' ? 'T' : 'H'}${pattern[0]}${pattern[2]}`;
  }
}

export default BestChancePatternStrategy;