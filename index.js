const tablaStock = document.querySelectorAll('tr')


const crearElementos = () => {
	
		for (let i = 0; tablaStock.length > i; i++) {
		const botonSumarUnidad = document.createElement('input')
		botonSumarUnidad.setAttribute('type','button')
		botonSumarUnidad.className = 'btn btn-primary btn-sm'
		botonSumarUnidad.value = '1'

		const botonSumarCuarto = document.createElement('input')
		botonSumarCuarto.setAttribute('type','button')
		botonSumarCuarto.className = 'btn btn-primary btn-sm'
		botonSumarCuarto.value = '1/4'

		const botonRestarUnidad = document.createElement('input')
		botonRestarUnidad.setAttribute('type','button')
		botonRestarUnidad.className = 'btn btn-primary btn-sm'
		botonRestarUnidad.value = '1' 

		const botonRestarCuarto = document.createElement('input')
		botonRestarCuarto.setAttribute('type','button')
		botonRestarCuarto.className = 'btn btn-primary btn-sm'
		botonRestarCuarto.value = '1/4'

		const cantidadStock = document.createElement('h5')
		cantidadStock.setAttribute('style','width : 4ch; display: inline-block;')
		cantidadStock.className = 'text-center text-wrap'
		cantidadStock.innerText = 0

		botonSumarCuarto.onclick = (e) => {
			operarCuarto(e.target.parentElement.childNodes[2],'sumar')
		}
		botonRestarCuarto.onclick = (e) => {
			operarCuarto(e.target.parentElement.childNodes[2],'restar')
		}
		botonRestarUnidad.onclick = (e) => {
			operarUnidad(e.target.parentElement.childNodes[2],'restar')
		}
		botonSumarUnidad.onclick = (e) => {
			operarUnidad(e.target.parentElement.childNodes[2],'sumar')
		}

		i > 0 ? tablaStock[i].childNodes[7].append(botonRestarUnidad,botonRestarCuarto,cantidadStock,botonSumarCuarto,botonSumarUnidad) : false

		tablaStock[i].childNodes[7].className = 'd-flex'
		tablaStock[i].childNodes[1].remove()
	}
}

crearElementos()


const operarCuarto = (elemento,operacion) => {
	operacion === 'sumar' ? elemento.innerText = Number(elemento.innerText) + 0.25 : false
	operacion === 'restar' ? elemento.innerText -= 0.25 : false
}
const operarUnidad = (elemento,operacion) => {
	operacion === 'sumar' ? elemento.innerText = Number(elemento.innerText) + 1 : false
	operacion === 'restar' ? elemento.innerText -= 1 : false
}

function ExportToExcel(type, fn, dl) {
       var elt = document.getElementById('tbl_exporttable_to_xls');
       var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
       return dl ?
         XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
         XLSX.writeFile(wb, fn || ('Stock.' + (type || 'xlsx')));
    }
