export function perPrimitive(schema , action ,key ){
	let output  ;
	if(typeof schema === 'object'){
		if(Array.isArray(schema)){
			// for array 
			output = [] ;
			let itemValue ;
			do {
				itemValue = null ;
				itemValue = perPrimitive(schema[0], action ,output.length-1 ) ;
				if(itemValue){
					output.push(itemValue) ;
				}
			} while(itemValue);
			if(output.length === 0){
				output = undefined ;
			}
		} else {
			// for object
			output = {} ;
			for(const [innerKey ,innerSchema] of Object.entries(schema)){
				const nestedValue = perPrimitive(innerSchema ,action,innerKey) ;
				if(nestedValue){
					output[innerKey] = nestedValue ;
				}
				 
			}
			if(Object.keys(output).length === 0){
				output = undefined ;
			}
		}
	} else {
		// for primitive
		output  = action(key,schema) ;
	}
	return output ;
	
	
}
