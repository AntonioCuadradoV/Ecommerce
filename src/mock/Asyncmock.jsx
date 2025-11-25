const productos = [
	{
		id: '01',
		name: 'Cafe',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 3000,
		category: 'cafe',
		img: 'https://i.postimg.cc/mr5dWVG3/cafe.webp'
	},
	{
		id: '02',
		name: 'Tostado',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 5000,
		category: 'menu',
		img: 'https://i.postimg.cc/dQWqwf9y/tostado-x1x-1-crop1650396779193-1.jpg'
	},
	{
		id: '03',
		name: 'Desayuno simple',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 7000,
		category: 'desayunos',
		img: 'https://i.postimg.cc/yYYkT9LZ/d9fdc25846afab2bbc8b603d8c9b7798-1.jpg'
	},
	{
		id: '04',
		name: 'Desayuno Completo',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 10000,
		category: 'desayunos',
		img: 'https://i.postimg.cc/ZKMKFQBK/paginaoia2-1.jpg'
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