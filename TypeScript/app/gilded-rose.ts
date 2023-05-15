export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ITEMS = {
  AGED_BRIE: "Aged Brie",
  BACKSTAGE: "Backstage passes to a TAFKAL80ETC concert",
  SULFURUS: "Sulfuras, Hand of Ragnaros",
  CONJURED: "Conjured Mana Cake",
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (
        item.name != ITEMS.AGED_BRIE &&
        item.name != ITEMS.BACKSTAGE &&
        item.quality > 0 &&
        item.name != ITEMS.SULFURUS
      ) {
        if (item.name === ITEMS.CONJURED) {
          item.quality = item.quality - 2;
        } else {
          item.quality = item.quality - 1;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == ITEMS.BACKSTAGE && item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
            if (item.sellIn < 6 && item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
      if (item.name != ITEMS.SULFURUS) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != ITEMS.AGED_BRIE) {
          if (
            item.name != ITEMS.BACKSTAGE &&
            item.quality > 0 &&
            item.name != ITEMS.SULFURUS
          ) {
            if (item.name === ITEMS.CONJURED) {
              item.quality = item.quality - 4;
            } else {
              item.quality = item.quality - 1;
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    });

    return this.items;
  }
}
