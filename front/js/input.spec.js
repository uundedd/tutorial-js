import { perPrimitive } from "./input"

describe('test input function' ,()=>{
	let inputs = {
		family : 'mirkhalili' ,
		name : '' , 
		age : 12 , 
		doYouLikeDevelopers : false  , 
		father : {
			name : '' , 
			age  :11
		}, 
		tag : [
			{
				title  : '' , 
				category : '', 
				order : 2 
			}
		]
	}

	it('should be call per key' , ()=>{
		let sum  = 0  ; 
		perPrimitive(inputs , (key , value)=>{
			if(key === 'age'){
				sum+= value ;
			}
		});
		expect(sum).toBe(23);
		let count = 0 ;
		perPrimitive(inputs , (key , value)=>{
			count++ ;
		});
		expect(count).toBe(9)
	})


  
})