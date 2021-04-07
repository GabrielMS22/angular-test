import { WeightPipe } from './weight.pipe';

describe('WeightPipe', () => {
  it('create an instance', () => {
    const pipe = new WeightPipe();
    expect(pipe).toBeTruthy();
  });

  it('Display correct data', () => {
    const pipe = new WeightPipe();
    const pokemonList = [ { weight: 50 }, { weight: 40 }];
    expect(pipe.transform(pokemonList,  30)).toBeDefined();
  });

});
