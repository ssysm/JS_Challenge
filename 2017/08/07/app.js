var number, output=[];
for (var i = 1; i <= 12; i++) {
	var number, output=[];
	for (var h = 1 ; h <= 12; h++){
		output.push(i*h)
	}
	console.log.apply(console,output)
}