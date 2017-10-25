import { PowerPipe } from './power.pipe';

describe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('test default exponent', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(2)).toBe(2);
    expect(pipe.transform(2, 3)).toBe(8);
   
  });
});
