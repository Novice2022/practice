var drop_zone = document.getElementById('drop-zone')

var drop_zone_buttons_container = document.getElementById('choose-file-or-clean-input')
var choose_file_button = document.getElementById('choose-file-button')
var clear_files = document.getElementById('clear-button')

var file_receiver = document.getElementById('file-receiver')
var log_div = document.getElementById('info')

var custom_files = []

var drop_zone_buttons_container_hover = false


// ================================== functions ==================================

clear_log_div = () => log_div.innerHTML = '<p>Pinned files:</p>'

draw_files = () => {
	clear_log_div()
	console.log('draw_files')

	log_div.appendChild(document.createElement('br'))
	
	for (let i = 0; i < file_receiver.files.length; i++) {
		let file = file_receiver.files[i]
		
		let p = document.createElement('p')
		p.textContent = file.name
		p.className = 'log-paragraph'
	
		log_div.appendChild(p)
	}

	console.log("file_receiver.files: ", file_receiver.files)
}

set_files_to_input = (custom_files) => {
	console.log('set_files_to_input')

	let new_file_list = {}

	for (let i = 0; i < custom_files.length; i++) {
		new_file_list[i] = custom_files[i]
		console.log('\t' + new_file_list[i].toString() + ': ' + typeof(custom_files[i]))
	}

	console.log(new_file_list)
}

update_file_receiver = () => {
	clear_log_div()

	new_file_receiver = document.createElement('input');

	new_file_receiver.type = 'file';
	new_file_receiver.multiple = true;
	new_file_receiver.name = 'files'
	new_file_receiver.id = 'new-file-receiver'
	new_file_receiver.style.display = 'none'

	file_receiver.replaceWith(new_file_receiver)

	file_receiver.remove()

	file_receiver = document.getElementById('new-file-receiver')
	file_receiver.addEventListener('change', () => draw_files())
	file_receiver.id = 'file-receiver'
}

drop_realisation = (e) => {
	drop_zone_buttons_container.style.display = "grid"
	
	update_file_receiver()
	e.preventDefault()
	
	let files = e.dataTransfer.files
	let custom_files = Array.from(files)

	let custom_file_list = Object.create(FileList.prototype)

	custom_files.forEach(function(file, index) {
		Object.defineProperty(custom_file_list, index, {
			value: file,
			writable: false
		})
	})

	Object.defineProperty(custom_file_list, 'length', {
		value: custom_files.length,
		writable: false
	})

	Object.defineProperty(file_receiver, 'files', {
		value: custom_file_list,
		writable: false
	})

	console.log('Files added to custom FileList:', custom_files)

	draw_files()
}


// ==================================== styles ====================================

drop_zone_mouseover = () => {
	if (!drop_zone_buttons_container_hover) {
		drop_zone.style.borderColor = "rgba(255, 255, 255, 0.6)"
		drop_zone_buttons_container.style.borderColor = "rgba(255, 255, 255, 0.6)"
		choose_file_button.style.color = "rgba(255, 255, 255, 0.8)"
		clear_files.style.color = "rgba(255, 255, 255, 0.8)"
	}
}

drop_zone_mouseleave = () => {
	drop_zone.style.borderColor = "rgba(255, 255, 255, 0.25)"
	drop_zone_buttons_container.style.borderColor = "rgba(255, 255, 255, 0.25)"
	choose_file_button.style.color = "rgba(255, 255, 255, 0.6)"
	clear_files.style.color = "rgba(255, 255, 255, 0.6)"
}

drop_zone_buttons_container_mouseover = () =>  {
	drop_zone.style.borderColor = "rgba(255, 255, 255, 0.25)"
	drop_zone_buttons_container.style.borderColor = "rgba(255, 255, 255, 0.25)"
	drop_zone_buttons_container_hover = true
}

drop_zone_buttons_container_mouseleave = () => {
	drop_zone.style.borderColor = "rgba(255, 255, 255, 0.6)"
	drop_zone_buttons_container.style.borderColor = "rgba(255, 255, 255, 0.6)"
	drop_zone_buttons_container_hover = false
}


// ================================== listeneres ==================================

choose_file_button.addEventListener(
	'click',
	() => {
		update_file_receiver()
		file_receiver.click()
	}
)

drop_zone.addEventListener(
	'dragover',
	(e) => {
		drop_zone_buttons_container.style.display = "none"
		drop_zone_mouseover()

		if (e.target === drop_zone)
			e.preventDefault()
	}
)

drop_zone.addEventListener(
	'dragleave',
	(e) => {
		drop_zone_buttons_container.style.display = "grid"
		drop_zone_mouseleave()
	}
)

drop_zone.addEventListener(
	'drop',
	(e) => drop_realisation(e)
)

drop_zone.addEventListener(
	'mouseover',
	() => drop_zone_mouseover()
)

drop_zone.addEventListener(
	'mouseleave',
	() => drop_zone_mouseleave()
)

drop_zone_buttons_container.addEventListener(
	'mouseover',
	() => drop_zone_buttons_container_mouseover()
)

drop_zone_buttons_container.addEventListener(
	'mouseleave',
	() => drop_zone_buttons_container_mouseleave()
)

file_receiver.addEventListener(
	'change',
	() => draw_files()
)

clear_files.addEventListener('click', update_file_receiver)
