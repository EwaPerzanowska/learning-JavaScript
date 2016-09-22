var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);


var a = 3,
	h = 5,
	triangleArea = a*h/2;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' +triangleArea);

var a = 1,
	b = 2,
	value = (a*a) + (2*a*b) - (b*b);

console.log('Wynik działania (a*a) + (2*a*b) - (b*b), gdy zmienna a jest równa ' + a + ', zaś zmienna b jest równa ' + b + ', wynosi ' +value)

if (value > 0) {

	console.log('Wynik dodatni');

}	else if (value < 0 ) {

	console.log('Wynik ujemny');

}	else {

	console.log('Wynik jest równy zero');
}



	

