const productos = [
	{
		id: '01',
		name: 'Cafe 1',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 7000,
		category: 'menu',
		img: 'https://i.postimg.cc/mr5dWVG3/cafe.webp'
	},
	{
		id: '02',
		name: 'Cafe 2',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 7000,
		category: 'menu',
		img: 'https://i.postimg.cc/mr5dWVG3/cafe.webp'
	},
	{
		id: '03',
		name: 'Cafe 3',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 7000,
		category: 'desayunos',
		img: 'https://i.postimg.cc/mr5dWVG3/cafe.webp'
	},
	{
		id: '04',
		name: 'Cafe 4',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, eos iure! Ad qui',
		stock: 20,
		price: 7000,
		category: 'desayunos',
		img: 'https://i.postimg.cc/mr5dWVG3/cafe.webp'
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