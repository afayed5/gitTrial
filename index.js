var list = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
var finalResult = [];

for(var i = 0; i < cities.length ; i++) {
 var input = cities[i];
 var lower = input.toLowerCase();
 var firstLetter = lower.slice(0,1);
 var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
 var result = capitalized;
 finalResult[i] = result;
 var listItem = document.createElement('li');
}


