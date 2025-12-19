export const productos = [
	{
		name: 'PC GAMER COMPLETA RYZEN 7 5700G 16 GB SSD 480 + MONITOR 22” PHILIPS',
		description: 'PC gamer completa y lista para usar con Ryzen 7 5700G, 16 GB RAM, SSD 480 GB, WiFi, monitor 22”, teclado y mouse retroiluminados, fuente 600W 80+ y gabinete RGB, ideal para gaming y uso diario exigente.',
		stock: 14,
		price: 879000,
		category: 'combos',
		img: 'https://i.postimg.cc/HkD4jGz4/Combo4.png '
	},
	{
		name: 'PC Gamer Completa AMD Athlon 3000g',
		description: 'PC armada y lista para usar con AMD Athlon 3000G, 8 GB RAM, SSD 240 GB, gráficos Radeon Vega 3, monitor LED 19”, Windows 11, gabinete gamer con RGB, WiFi y combo gaming, ideal para oficina y juegos livianos.',
		stock: 12,
		price: 630700,
		category: 'combos',
		img: 'https://i.postimg.cc/tCLDPnq9/Combo1.jpg'
	},
	{
		name: 'PC Racing Pack Gaming AMD Ryzen 3',
		description: 'Pack PC gaming económico y completo con Ryzen 3 4300G, 16 GB RAM, SSD 256 GB + HDD 1 TB, monitor 22” Full HD, periféricos y Windows 11, ideal para estudiar, trabajar y empezar a jugar desde el primer día.',
		stock: 6,
		price: 980000,
		category: 'combos',
		img: 'https://i.postimg.cc/Hs79pWQS/Combo3.png'
	},
	{
		name: 'PC Gamer Draco Black Blue Intel Core i9 Ultra',
		description: 'PC ultra gamer y profesional equipada con Intel Core i9 Ultra 285K, 64 GB DDR5, SSD NVMe 1 TB, RTX 5080 16 GB, mother Z890, monitor curvo 27” 280 Hz, fuente 1000W 80+ Gold, refrigeración líquida 360 mm y kit teclado mecánico + mouse Antryx, ideal para gaming extremo y tareas de alto rendimiento.',
		stock: 3,
		price: 7755000,
		category: 'combos',
		img: 'https://i.postimg.cc/QCvgpvrS/Combo2.jpg'
	},
	{
		name: 'Monitor Gamer 24" LG',
		description: 'ofrece colores precisos y gran ángulo de visión. Incorpora AMD FreeSync, tasa de refresco de 180 Hz y 1 ms GtG para un rendimiento fluido en gaming. Cuenta con HDMI y DisplayPort, salida de auriculares, compatibilidad VESA 100*100 y ajuste de inclinación. Ideal para juegos y uso diario exigente.',
		stock: 9,
		price: 236000,
		category: 'monitores',
		img: 'https://i.postimg.cc/43X6bzrC/Monitor1.jpg'
	},
	{
		name: 'Dellorean Monitor Gamer Curvo 27',
		description: 'Gaming competitivo y experiencia inmersiva, Full HD 1920*1080 y frecuencia de 165Hz',
		stock: 2,
		price: 410000,
		category: 'monitores',
		img: 'https://i.postimg.cc/N0b1NKcx/Monitor2.png'
	},
	{
		name: 'Monitor Gamer 27" Level Up Curvo',
		description: 'Ofrece una frecuencia de actualización de 200 Hz para una experiencia fluida, brillo máximo de 280 cd/m² y compatibilidad VESA 100*100. Cuenta con HDMI, DisplayPort y USB, e incluye cables HDMI y DisplayPort. Ideal para gaming y uso multimedia.',
		stock: 4,
		price: 263500,
		category: 'monitores',
		img: 'https://i.postimg.cc/nzzqNnFW/Monitor3.jpg'
	},
	{
		name: 'MISURA Monitor Gaming 24"',
		description: 'Panel VA R1650, resolución FullHD 1920 * 1080, formato HDR, relación de aspecto 16:9, frecuencia de actualización 200 Hz, contraste 4000:1, tiempo de respuesta 1 ms, brillo 300 cd/m², sincronización de frecuencia de actualización Freesync & G-Sync.',
		stock: 12,
		price: 244000,
		category: 'monitores',
		img: 'https://i.postimg.cc/9Mnyhsz2/Monitor4.jpg'
	},
	{
		name: 'Joystick Gamer Scorpio',
		description: 'El Scorpio cuenta con dos posibilidades de conexión: inalámbrica Bluetooth y cableada USB, lo que te permite disfrutar al máximo la libertad de movimiento del wireless y, si te olvidaste de cargar la batería, recurrir a la opción del cable sin necesidad de interrumpir los duelos.',
		stock: 10,
		price: 88000,
		category: 'jostycks',
		img: 'https://i.postimg.cc/RCWDHB7R/Jostick1.png'
	},
	{
		name: 'Joystick Gamer GTC',
		description: 'Control preciso. Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento.',
		stock: 7,
		price: 62000,
		category: 'jostycks',
		img: 'https://i.postimg.cc/wM9MnVQt/Jostick2.jpg'
	},
	{
		name: 'VOLANTE Y PEDALES DE CARRERAS LOGITECH G923',
		description: 'Volante de Carreras Con Force Feedback, Pedales y Palancas de Cambio, 270/900° de Cuero',
		stock: 3,
		price: 680000,
		category: 'volantes',
		img: 'https://i.postimg.cc/J4JYp5dy/Volante1.jpg'
	},
	{
		name: 'PXN V10 VOLANTE DE CARRERAS',
		description: 'VOLANTE Y PEDALES DE SIMULACIÓN DE CARRERAS LOGITECH G923',
		stock: 5,
		price: 1500000,
		category: 'volantes',
		img: 'https://i.postimg.cc/cLB9S4Sj/Volante2.png'
	}
	

	
]


let error = false
export const getProducts = ()=> {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			if(error){
				reject('Hubo un error intente mas tarde')
			}else{	
				resolve(productos)
			}
		}, 2000);
	})
}

export const getOneProducts = (id) =>{
	return new Promise ((resolve) =>{
		setTimeout(()=> {
			let product= productos.find((item)=>item.id === id)
			resolve(product)
		}, 2000)
	}
)
}