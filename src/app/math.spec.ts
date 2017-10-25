import { TestBed } from "@angular/core/testing";


describe('Math test suite', () => {

    beforeEach(() =>{
        console.log("called before each test");
    })
    
    it('should be equal', () => {
        console.log("test 1");
      expect(1+2).toBe(3);
    });

    it('should be equal', () => {
        console.log("test 2");
        expect(1+3).toBe(4);
      });

    afterEach(() => {
        console.log("called after each test");
    })
  });
  