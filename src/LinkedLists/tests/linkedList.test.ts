import { LinkedList } from '../linkedList';

describe('LinkedList', () => {
  describe('append', () => {
    it('should append a value to an empty list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      expect(list.size()).toBe(1);
      expect(list.getHead()?.value).toBe(1);
      expect(list.getTail()?.value).toBe(1);
    });

    it('should append a value to a non-empty list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.size()).toBe(2);
      expect(list.getTail()?.value).toBe(2);
    });
  });

  describe('prepend', () => {
    it('should prepend a value to an empty list', () => {
      const list = new LinkedList<number>();

      list.prepend(1);
      expect(list.size()).toBe(1);
      expect(list.getHead()?.value).toBe(1);
    });

    it('should prepend a value to a non-empty list', () => {
      const list = new LinkedList<number>();

      list.prepend(1);
      list.prepend(2);
      expect(list.size()).toBe(2);
      expect(list.getHead()?.value).toBe(2);
    });
  });

  describe('size', () => {
    it('should return the correct size of the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.size()).toBe(2);
    });
  });

  describe('at', () => {
    it('should return the node at a given index', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.at(1)?.value).toBe(2);
    });

    it('should return null for an invalid index', () => {
      const list = new LinkedList<number>();

      list.append(1);
      expect(list.at(2)).toBeNull();
    });
  });

  describe('pop', () => {
    it('should remove the last element from the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      list.pop();
      expect(list.size()).toBe(1);
      expect(list.getTail()?.value).toBe(1);
    });

    it('should handle popping an empty list', () => {
      const list = new LinkedList<number>();

      list.pop();
      expect(list.size()).toBe(0);
    });
  });

  describe('contains', () => {
    it('should return true if the value is in the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.contains(2)).toBeTruthy();
    });

    it('should return false if the value is not in the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      expect(list.contains(3)).toBeFalsy();
    });
  });

  describe('find', () => {
    it('should return the index of the value if it is in the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.find(2)).toBe(1);
    });

    it('should return null if the value is not in the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      expect(list.find(3)).toBeNull();
    });
  });

  describe('toString', () => {
    it('should return a string representation of the list', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> null');
    });

    it('should return "null" for an empty list', () => {
      const list = new LinkedList<number>();

      expect(list.toString()).toBe('null');
    });
  });

  describe('insertAt', () => {
    it('should insert a value at a given index', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(3);
      list.insertAt(2, 1);
      expect(list.at(1)?.value).toBe(2);
    });

    it('should throw an error for an invalid index', () => {
      const list = new LinkedList<number>();

      expect(() => list.insertAt(2, 3)).toThrow('Index out of bounds');
    });
  });

  describe('removeAt', () => {
    it('should remove the element at a given index', () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      list.removeAt(0);
      expect(list.size()).toBe(1);
      expect(list.getHead()?.value).toBe(2);
    });

    it('should throw an error for an invalid index', () => {
      const list = new LinkedList<number>();

      expect(() => list.removeAt(1)).toThrow('Index out of bounds');
    });
  });
});
