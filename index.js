function theBeatlesPlay(musicians, instruments) {
  let sentences = [];
  for (let i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return sentences;
}

function johnLennonFacts(facts) {
  let excitement = [];
  let i = 0;
  while (i < facts.length) {
    excitement.push(facts[i]+"!!!");
    i++;
  }
  return excitement;
}