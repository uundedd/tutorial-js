export function perPrimitive(schema , action ){
	let output = {} ;
	for(const [key ,value] of Object.entries(schema)){
		let userValue ;  
		if(typeof value === 'object'){
			if(Array.isArray(value)){
				do {
					let itemValue = perPrimitive(value[0], action) ;
				} while(userValue)
			} else {
				userValue = perPrimitive(value ,action) ;
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
