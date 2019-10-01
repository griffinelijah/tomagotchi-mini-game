class tomagotchi {
	constructor(name){
		this.name = name,
		this.age = 2,
		this.hunger = 10,
		this.sleepiness = 10,
		this.boredom = 10
	}
	//methods for feeding, dying, sleeping etc
}

const tom = new tomagotchi('tom')
console.log(tom);
const game = {
	start(){
		const $tomPic = $('<div class="tom">T</div>').appendTo('body')
	}
	//game stuff
	//method to start timer - setInterval



	//printValues()
		//new valuse of the tomagotchi

}



//inster listeners here. $().on('click')
$('button').on('click', () => {
	game.start();

	
})
