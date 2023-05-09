import { myFunction } from "./script"

describe('test my function' ,()=>{
  
  it('should be sum number' , ()=>{
    const t = myFunction(2,6);
    expect(t).toBe(8)
  })
  it('should be sum string' , ()=>{
    const l = myFunction('ali' , 'mirkhalili')
    expect(l).toBe('ali mirkhalili');
  })
  it('should be throw error' , ()=>{
    const output = ()=> myFunction(1 ,'') ;
    expect(output).toThrow(Error)
  })
})





