 //getjson
    var xhr = new XMLHttpRequest(),data;  
  xhr.open('get', 'https://spreadsheets.google.com/feeds/list/12P551IHyrbr7cpf7zlv_TcOhlFadnwspXGRcZMeE8dk/od6/public/values?alt=json', true);
  xhr.onload = function() {
   data = JSON.parse(xhr.responseText).feed.entry;
   rout(data)}
  xhr.onerror = function() {
<<<<<<< HEAD
   document.querySelector('body').innerHTML = '<h1 id="eror">bd error</h1>'}
=======
   document.querySelector('.spoilers').innerHTML = '<h1 id="eror">bd error</h1>'}
>>>>>>> 2d7686a223184df6da493ddcd0b100235241efad
  xhr.send();
  //rout
 
	function rout(data) {
for (topic in data) {
        document.querySelector('.spoilers').innerHTML += render('index', data[topic])}

        }
	   
	//render mini
	function render(name, data ) {
	if (data.gsx$id.$t == location.hash.trim().replace(/#/, '')){
		this.template = document.querySelector(`template#${name}`)
		this.html = new Function('return `' + template.innerHTML + '`')
		return this.html.call(data)}return'' 
	}	
	





	function calc() {
	 document.querySelector('.calc').innerHTML = '';  
	loc =['loc1','loc2','loc3','loc4','ism3','ism4','boss','hard','ismx']; 
  for (var i=0; i < loc.length; i++) {calcac(loc[i])}
}
	function calcac(subclass) {
  elements = document.querySelectorAll('.on > li> .' + subclass);
  arr = ['l', 'll', 'lll', 'lv', 'v', 'vl', 'vll', 'vlll', 'lx', 'x'];
  for (var x = 0; x < arr.length; x++) {
   sum = 0;
   for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == subclass + ' ' + arr[x]) {
      sum += parseInt(elements[i].innerText)
     }
   }
   aut = '';
   if (sum != 0) {aut += '<b class="' + subclass + ' ' + arr[x] + ' calcitem">' + sum + '</b>'}
   document.querySelector('.calc').innerHTML += aut 
  }
}

 function sp(num) {
   obj = document.getElementById("sp_"+num);
   if( obj.classList.contains('on') )
   { obj.classList.remove('on'); } else { obj.classList.add('on') }
   link= document.querySelector(".sp_"+num);
   if( link.classList.contains('spoiler-link--active') ) 
   { link.classList.remove('spoiler-link--active'); } else { link.classList.add('spoiler-link--active')}
    calc()
 }
  
  
  
  
  
  
  
  
  
  
  
