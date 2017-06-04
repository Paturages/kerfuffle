import Character from 'modules/character';

export default (self, characterId, hasH) => {
  const character = self.state.status[characterId];
  const statsWithEffects = (() => {
    if (character.effects.find(x => x.id === 'saya')) return { atk: 2, def: 5, spd: 2, dex: 2, int: 6 };
    const { atk, def, spd, dex, int } = Character[characterId].getBaseStats();
    return { atk, def, spd, dex, int };
  })();
  character.effects.forEach((e) => {
    if (e.id === 'null') {
      if (e.value === 'magical') statsWithEffects.int = 13337;
      else statsWithEffects.def = 13337;
    }
    if (['atk', 'def', 'spd', 'dex', 'int'].indexOf(e.id) < 0) return;
    statsWithEffects[e.id] += e.value;
  });
  if (hasH && ['tomoyo', 'meiya', 'makina', 'automod'].indexOf(characterId) > -1) {
    statsWithEffects.def -= 4;
    statsWithEffects.int -= 4;
  }
  ['atk', 'def', 'spd', 'dex', 'int'].forEach((s) => {
    if (statsWithEffects[s] < 1) statsWithEffects[s] = 1;
    if (statsWithEffects[s] > 10 && statsWithEffects[s] < 9999) statsWithEffects[s] = 10;
  });
  return statsWithEffects;
};
