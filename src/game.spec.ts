import { Game } from './game'

let g: Game = new Game()

beforeEach(() => {
  g = new Game()
})

describe('Bowling Game', () => {
  test('Should score 0 for Gutter Game', () => {
    rollMany(20, 0)
    expect(g.score()).toBe(0)
  })

  test('Should score 20 for all ones game', () => {
    rollMany(20, 1)
    expect(g.score()).toBe(20)
  })

  // test('should score 16 with a spare followed by a 3 ball', () => {
  //   g.roll(5)
  //   g.roll(5)
  //   g.roll(3)
  //   expect(g.score()).toBe(16)
  // })

  function rollMany (n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      g.roll(pins)
    }
  }
})
