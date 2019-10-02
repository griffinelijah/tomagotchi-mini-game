class tomagotchi {
	constructor(name){
		this.name = name,
		this.age = null,
		this.hunger = null,
		this.sleepiness = null,
		this.boredom = null
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
			tom.age += .1
			tom.hunger += 2
			tom.sleepiness += 1
			tom.boredom += 3

		$age.text(`age: ${Math.floor(tom.age)}`)
		$hunger.text(`hunger: ${tom.hunger}`)
		$sleep.text(`sleepiness: ${tom.sleepiness}`)
		$bored.text(`boredom: ${tom.boredom}`)
			
		}, 1000)
	},
	//play function will let you interact with tamagotchi to lower boredom level, alerts you att 5,7 and 9 
	play(){
		const $bored = $('#tomBoredom');
		if($bored > 4){
			alert('tom is bored');
		}
		// else if(tom.boredom > 4 && < 7){
		// 	console.log('play with tom now');
		// }
		// else{
		// 	console.log('tom will die of boredom');
		// }
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
	game.play();

	
})
