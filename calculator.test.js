//prepare fixtures (test fixtures)

const MathOperations=require('./calculator');

describe("calculation tests",()=>{
beforeAll(()=>{
    
  console.log("before all called......");  
    
});
beforeEach(()=>{
    
    console.log("before EACH called......");  
      
  });

    test('add 4+5 must return 9',()=>{
    expect(MathOperations.sum(4,5)).not.toBe(6);
    
});
test('diff 4+5 must return -1',()=>{
    expect(MathOperations.diff(4,5)).toBe(-1);
    
});
/*test('product 4+5 must return 20',()=>{
    expect(MathOperations.product(4,5)).toBe(20);
    
});*/

test('thruthiness operation',()=>{
    var city=-10;
    expect(city).toBeTruthy();
    
});

test('numberic matchers',()=>{
    var salary=1000;
    expect(salary).toBeGreaterThan(0);
    
});

//which method ,expected output ,
//if input is required ,check if value is mandatory,check if return is required


}
);
