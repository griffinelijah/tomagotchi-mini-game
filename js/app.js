class tomagotchi {
	constructor(name){
		this.name = name,
		this.age = 2,
		this.hunger = 1,
		this.sleepiness = 1,
		this.boredom = 1
	}
	//methods for feeding, dying, sleeping etc
}

const tom = new tomagotchi('tom')

console.log(tom);

const game = {
	pet: tom,
	time: 10,
	start(){
		const $tomPic = $('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquAoMnxzaw9H0H_U95d6DnxRdEdqWjzGW94gsUeK9Z3ljHAD9"></img>').appendTo('body')
		// const $tomStats = $(`<ul class="tom-stats"><li>${tom.name}</li><li>${tom.age}</li><li>${tom.hunger}</li><li>${tom.sleepiness}</li><li>${tom.boredom}</li></ul>`).appendTo('body')
	},//timer to increment age value as ttime goes on
	//will also be used later on to determine hunger, boredom and sleepiness levels
	setTimer(){
		const $age = $('#tomAge');
		const $hunger = $('#tomHunger');
		const $sleep = $('#tomSleepiness');
		const $bored = $('#tomBoredom');
		const interval = setInterval(() => {
			tom.age++
			tom.hunger++
			tom.sleepiness++
			tom.boredom++

		$age.text(`age: ${tom.age}`)
		$hunger.text(`hunger: ${tom.hunger}`)
		$sleep.text(`sleepiness: ${tom.sleepiness}`)
		$bored.text(`boredom: ${tom.boredom}`)
			
		}, 1000)
	}
	//game stuff
	//method to start timer - setInterval
//random stuuff to test if github working


	//printValues()
		//new valuse of the tomagotchi

}



//inster listeners here. $().on('click')
$('.start').on('click', () => {
	game.start();
	game.setTimer();

	
})
