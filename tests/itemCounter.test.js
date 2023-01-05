/*
 * @jest-environment jsdom
 */

import CardsCounter from '../src/modules/CardsCounter.js';

describe('cards counter', () => {
  test('count 0 items', () => {
    const cardsCounter = new CardsCounter();
    const card1 = document.createElement('ul');
    card1.innerHTML = '<li class="other-class">item 1</li>';

    expect(cardsCounter.getCount(card1)).toEqual(0);
  });

  test('count 1 item', () => {
    const cardsCounter = new CardsCounter();
    const card1 = document.createElement('ul');
    card1.innerHTML = '<li class="card">item 1</li>';

    expect(cardsCounter.getCount(card1)).toEqual(1);
  });

  test('count 5 items', () => {
    const cardsCounter = new CardsCounter();
    const card1 = document.createElement('ul');
    card1.innerHTML = '<li class="card">item 1</li><li class="card">item 2</li><li class="card">item 3</li><li class="card">item 4</li><li class="card">item 5</li>';
    expect(cardsCounter.getCount(card1)).toEqual(5);
  });

  test('empty parameter', () => {
    const cardsCounter = new CardsCounter();
    expect(cardsCounter.getCount()).toEqual(0);
  });

  test('different parameter type - number', () => {
    const cardsCounter = new CardsCounter();
    expect(cardsCounter.getCount(10)).toEqual(0);
  });

  test('different parameter type - string', () => {
    const cardsCounter = new CardsCounter();
    expect(cardsCounter.getCount('text')).toEqual(0);
  });
});
