import { Game } from './game'

describe('Bowling Game', () => {
  test('Should score 0 for Gutter Game', () => {
    const g: Game = new Game()
    for(let i = 0; i < 20; i++) {
      g.roll(i)
    }
    expect(g.score()).toBe(0)
  })
});
