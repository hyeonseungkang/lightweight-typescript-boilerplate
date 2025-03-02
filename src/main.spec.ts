import { MyClass } from './my-class';
import { main } from './main';

describe('AppController', () => {
  let myClass: MyClass;

  beforeEach(() => {
    myClass = {
      hello: 'world',
    };
  });

  describe('main', () => {
    it('should return "world"', () => {
      expect(main()).toBe(myClass.hello);
    });
  });
});
