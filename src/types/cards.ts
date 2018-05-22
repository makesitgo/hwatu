enum CardType {
  BRIGHT,
  ANIMAL,
  RIBBON,
  JUNK
}

enum CardSuit {
  PINE,
  PLUM_BLOSSOM,
  CHERRY_BLOSSOM,
  WISTERIA,
  IRIS,
  PEONY,
  BUSH_CLOVER,
  MOON,
  CHRYSANTHEUM,
  MAPLE,
  PAULOWNIA,
  RAIN
}

interface Card {
  suit: CardSuit;
  type: CardType;
}

interface JunkCard extends Card {
  type: CardType.JUNK;
  isDouble: boolean;
}

const newCard = (suit: CardSuit, type: CardType) => ({ suit, type });
const newJunkCard = (suit: CardSuit, isDouble: boolean = false) => ({ suit, type: CardType.JUNK, isDouble });

const newDeck = () => [
  newCard(CardSuit.PINE, CardType.BRIGHT),
  newCard(CardSuit.PINE, CardType.RIBBON),
  newJunkCard(CardSuit.PINE),
  newJunkCard(CardSuit.PINE),

  newCard(CardSuit.PLUM_BLOSSOM, CardType.ANIMAL),
  newCard(CardSuit.PLUM_BLOSSOM, CardType.RIBBON),
  newJunkCard(CardSuit.PLUM_BLOSSOM),
  newJunkCard(CardSuit.PLUM_BLOSSOM),

  newCard(CardSuit.CHERRY_BLOSSOM, CardType.BRIGHT),
  newCard(CardSuit.CHERRY_BLOSSOM, CardType.RIBBON),
  newJunkCard(CardSuit.CHERRY_BLOSSOM),
  newJunkCard(CardSuit.CHERRY_BLOSSOM),

  newCard(CardSuit.WISTERIA, CardType.ANIMAL),
  newCard(CardSuit.WISTERIA, CardType.RIBBON),
  newJunkCard(CardSuit.WISTERIA),
  newJunkCard(CardSuit.WISTERIA),

  newCard(CardSuit.IRIS, CardType.ANIMAL),
  newCard(CardSuit.IRIS, CardType.RIBBON),
  newJunkCard(CardSuit.IRIS),
  newJunkCard(CardSuit.IRIS),

  newCard(CardSuit.PEONY, CardType.ANIMAL),
  newCard(CardSuit.PEONY, CardType.RIBBON),
  newJunkCard(CardSuit.PEONY),
  newJunkCard(CardSuit.PEONY),

  newCard(CardSuit.BUSH_CLOVER, CardType.ANIMAL),
  newCard(CardSuit.BUSH_CLOVER, CardType.RIBBON),
  newJunkCard(CardSuit.BUSH_CLOVER),
  newJunkCard(CardSuit.BUSH_CLOVER),

  newCard(CardSuit.MOON, CardType.BRIGHT),
  newCard(CardSuit.MOON, CardType.ANIMAL),
  newJunkCard(CardSuit.MOON),
  newJunkCard(CardSuit.MOON),

  newCard(CardSuit.CHRYSANTHEUM, CardType.ANIMAL),
  newCard(CardSuit.CHRYSANTHEUM, CardType.RIBBON),
  newJunkCard(CardSuit.CHRYSANTHEUM),
  newJunkCard(CardSuit.CHRYSANTHEUM),

  newCard(CardSuit.MAPLE, CardType.ANIMAL),
  newCard(CardSuit.MAPLE, CardType.RIBBON),
  newJunkCard(CardSuit.MAPLE),
  newJunkCard(CardSuit.MAPLE),

  newCard(CardSuit.PAULOWNIA, CardType.BRIGHT),
  newJunkCard(CardSuit.PAULOWNIA, true),
  newJunkCard(CardSuit.PAULOWNIA),
  newJunkCard(CardSuit.PAULOWNIA),

  newCard(CardSuit.RAIN, CardType.BRIGHT),
  newCard(CardSuit.RAIN, CardType.ANIMAL),
  newCard(CardSuit.RAIN, CardType.RIBBON),
  newJunkCard(CardSuit.RAIN, true)
];
