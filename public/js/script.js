var d = new Date;

var h = d.getHours();

if(h > 12){
	h = h - 12;
}

var state = {
	horas : h,
	minutos : d.getMinutes(),
	segundos : d.getSeconds(),
	display : 0
}

var changeState = function(){
	if(state.segundos < 60){
		state.segundos++;
		if(state.segundos >= 60){
			state.minutos++;
			state.segundos = 0;
			if(state.minutos >= 60){
				state.minutos = 0;
				state.horas++;
				if(state.horas >= 12){
					state.horas = 0;
				}
			}
		}
	}else{
		state.segundos == 0;
	}
}

var render = function(){
	html = '';

	state.display = document.getElementById("cmb").value;

	if(state.display == 0){
		//es análogo
		html += '<div class="analog-clock">';
		html += '<div class="analog">';
		html += '<div class="hours state-' + state.horas*5 + '">';
		html += '<div class="no-color-pointer-fill"></div>';
		html += '<div class="color-pointer"></div>';
		html += '<div class="no-color-pointer"></div>';
		html += '</div>';
		html += '<div class="minutes state-' + state.minutos + '">';
		html += '<div class="color-pointer"></div>';
		html += '<div class="no-color-pointer"></div>';
		html += '</div>';
		html += '<div class="seconds state-' + state.segundos + '">';
		html += '<div class="color-pointer"></div>';
		html += '<div class="no-color-pointer"></div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
	}else if(state.display == 1){
		html += '<div class="digital-clock">';
		html += '<h1>' + ("0" + state.horas).slice(-2) + ":" + ("0" + state.minutos).slice(-2) + ":" + ("0" + state.segundos).slice(-2) + '</h1>'
		html += '</div>';
	}
	changeState();
	document.getElementById("clock").innerHTML = html;
}

render();

setInterval(render, 1000);