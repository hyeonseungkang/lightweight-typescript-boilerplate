import { MyClass } from './my-class';
import { main } from './main';

describe('main.ts', () => {
  let myClass: MyClass;

  beforeEach(() => {
    myClass = {
      hello: 'world',
    };
  });

  describe('main', () => {
    it('should return "world"', () => {
      expect(main().hello).toBe(myClass.hello);
    });
  });
});
