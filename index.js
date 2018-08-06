function theBeatlesPlay(musicians, instruments) {
  let sentences = [];
  for (let i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return sentences;
}