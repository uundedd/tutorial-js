export function perPrimitive(object , action ){
	let output = {} ;
	for(const [key ,value] in Object.entries(object)){
		let userValue ;  
		if(typeof value === 'object'){
			if(Array.isArray(value)){
				do {
					let itemValue = input(value[0]) ;
				} while(userValue)
			} else {
				userValue = input(value) ;
			}
		} else {
			userValue  = action(key,value) ;
		}
		if(userValue){
			output[key] =  userValue ;
		}
	}
	if(Object.keys(output).length> 0){
		return output ;
	}
}
