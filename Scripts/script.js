var drop_zone = document.getElementById('drop-zone')
var choose_file_button = document.getElementById('choose-file-button')
var file_receiver = document.getElementById('file-receiver')
var log_div = document.getElementById('info')

var custom_files = []


// ================================== functions ==================================

function draw_files() {
	console.log('draw_files')

	log_div.innerHTML = ''
	
	for (let i = 0; i < file_receiver.files.length; i++) {
		let file = file_receiver.files[i]
		
		let p = document.createElement('p')
		p.textContent = file.name
		p.className = 'log-paragraph'
	
		log_div.appendChild(p)
	}

	console.log("file_receiver.files: ", file_receiver.files)
}

function set_files_to_input(custom_files) {
	console.log('set_files_to_input')

	let new_file_list = {}

	for (let i = 0; i < custom_files.length; i++) {
		new_file_list[i] = custom_files[i]
		console.log('\t' + new_file_list[i].toString() + ': ' + typeof(custom_files[i]))
	}

	console.log(new_file_list)
}

function update_file_receiver() {
	new_file_receiver = document.createElement('input');

	new_file_receiver.type = 'file';
	new_file_receiver.multiple = true;
	new_file_receiver.name = 'files'
	new_file_receiver.id = 'new-file-receiver'
	new_file_receiver.style.display = 'none'

	file_receiver.replaceWith(new_file_receiver)

	file_receiver.remove()

	file_receiver = document.getElementById('new-file-receiver')
	file_receiver.id = 'file-receiver'

	draw_files()
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
		if (e.target === drop_zone)
			e.preventDefault()
	}
);

// drop_zone.addEventListener(
//     'drop',
//     (e) => {
//         e.preventDefault()
//         set_files_to_input(e.dataTransfer.files)
//         draw_files()
//     }
// );

drop_zone.addEventListener(
	'drop',
	(e) => {
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
);

file_receiver.addEventListener('change', () => {draw_files()})
