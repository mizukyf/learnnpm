import {FooClass, FooModule} from '../src/learnnpm';

describe('FooClass', () => {
  describe('barMethod', () => {
    it('returns "123"', () => {
      var foo = new FooClass();
      expect(foo.barMethod()).toBe('123');
    });
  });

  describe('barField', () => {
    it('has value 123', () => {
      var foo = new FooClass();
      expect(foo.barField).toBe(123);
    });
  });
});
