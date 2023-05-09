import { perPrimitive } from "./input"

describe('test input function' ,()=>{

	it('should be true' , ()=>{
		expect(true).toBe(true);
	})

	let inputs = {
		family : 'mirkhalili' ,
		name : '' , 
		age : 0 , 
		doYouLikeDevelopers : false  , 
		father : {
			name : '' , 
			age  :1 
		}, 
		tag : [
			{
				title  : '' , 
				category : ''
			}
		]
	}
  
})