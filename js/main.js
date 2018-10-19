 //getjson
    var xhr = new XMLHttpRequest(),data;  
  xhr.open('get', 'https://spreadsheets.google.com/feeds/list/12P551IHyrbr7cpf7zlv_TcOhlFadnwspXGRcZMeE8dk/od6/public/values?alt=json', true);
  xhr.onload = function() {
   data = JSON.parse(xhr.responseText).feed.entry;
   rout(data)}
  xhr.onerror = function() {
   document.querySelector('body').innerHTML = '<h1 id="eror">bd error</h1>'}
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
  elements = document.querySelectorAll('.on > .' + subclass);
  arr = ['l', 'll', 'lll', 'lv', 'v', 'vl', 'vll', 'vlll', 'lx', 'x'];
  for (var x = 0; x < arr.length; x++) {
   sum = 0;
   for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == subclass + ' ' + arr[x]) {
      sum += parseInt(elements[i].innerText)
     }
   }
   aut = '';
   if (sum != 0) {aut += '<li class="' + subclass + ' ' + arr[x] + '"><i></i>' + sum + '</li>'}
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
  
function navactive() {
  if (location.hash!== ''){
    document.getElementById(location.hash.slice(1)).classList.add('active') 
   }else{
   document.querySelector(`.spoilers-menu`).style.display = 'none'
   document.querySelector(`.calc`).style.display = 'none'
   }
	}  
  
  navactive()
  
    var showingTooltip;
    document.onmouseover = function(e) {
      var target = e.target;
      var tooltip = target.getAttribute('data-tooltip');
      if (!tooltip) return;
      var tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltip;
      document.body.appendChild(tooltipElem);
      var coords = target.getBoundingClientRect();
      var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не вылезать за левую границу окна
      var top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
      showingTooltip = tooltipElem;
    };

    document.onmouseout = function(e) {
      if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
      }

    };
    
