import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe("Normal item", () => {
  it("should decrease quality by 1 after one day", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
    const expectedResult = [new Item("+5 Dexterity Vest", 9, 19)];
    const items = gildedRose.updateQuality();
    expect(items).toStrictEqual(expectedResult);
  });

  it("should not decrease quality after one day if 0", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 0)]);
    const expectedResult = [new Item("+5 Dexterity Vest", -1, 0)];
    const items = gildedRose.updateQuality();
    expect(items).toStrictEqual(expectedResult);
  });
});

describe("Aged Brie", () => {
  it("should not decrease quality after one day if 0", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const expectedResult = [new Item("Aged Brie", 1, 1)];
    const items = gildedRose.updateQuality();
    expect(items).toStrictEqual(expectedResult);
  });
});

describe("Conjured", () => {
  it("should decrease quality after a day", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    const expectedResult = [new Item("Conjured Mana Cake", 2, 4)];
    const items = gildedRose.updateQuality();
    expect(items).toStrictEqual(expectedResult);
  });

  it("should decrease quality twice after negative SellIn", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 6)]);
    const expectedResult = [new Item("Conjured Mana Cake", -1, 2)];
    const items = gildedRose.updateQuality();
    expect(items).toStrictEqual(expectedResult);
  });
});
