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
	pet: tom,
	start(){
		const $tomPic = $('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BvXA_TY0edchJonvgYNceml5sm9qjMgE-Tc6PHVFQAffH90Lxg"></img>').appendTo('body')
		const $tomStats = $(`<ul class="tom-stats"><li>${tom.name}</li><li>${tom.age}</li><li>${tom.hunger}</li><li>${tom.sleepiness}</li><li>${tom.boredom}</li></ul>`).appendTo('body')
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
