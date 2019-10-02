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

 tom = new tomagotchi('tom')

console.log(tom);

const game = {
	pet: tom,
	time: 10,
	//tom = new tomagotchi('tom'),
	start(name){
		const $tomName = $('#tomName')
		$tomName.text(`Name: `+ $('#input-box').val() )


		const $tomPic = $('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquAoMnxzaw9H0H_U95d6DnxRdEdqWjzGW94gsUeK9Z3ljHAD9"></img>').appendTo('body')
	},//timer to increment age value as ttime goes on
	//will also be used later on to determine hunger, boredom and sleepiness levels
	setTimer(){
		const $age = $('#tomAge');
		const $hunger = $('#tomHunger');
		const $sleep = $('#tomSleepiness');
		const $bored = $('#tomBoredom');
		const interval = setInterval(() => {
			tom.age += .5
			tom.hunger += 2
			tom.sleepiness += 1
			tom.boredom += 3

		$age.text(`age: ${Math.floor(tom.age)}`)
		$hunger.text(`hunger: ${tom.hunger}`)
		$sleep.text(`sleepiness: ${tom.sleepiness}`)
		$bored.text(`boredom: ${tom.boredom}`)
			
		}, 3000)
	},
	//play function will let you interact with tamagotchi to lower boredom level, alerts you att 5,7 and 9 
	playWithGotchi(){

		let $bored = $('#tomBoredom');
		tom.boredom -= 1
		$bored.text(`boredom: ${tom.boredom}`)
	// 	if($bored = 4){
	// 		alert('tom is bored');
	// 	}
	// 	 else if($bored = 7){
	// 	 	alert('play with tom now');
	// 	 }
	// 	 else if($bored = 9){
	// 	 	alert('tom will die of boredom');
	// 	 }
	},
	//Feed method will allow you to lower gotchis hunger level so e doesn't die
	feedGotchi(){
		let $feed = $('#tomHunger');
		tom.hunger -= 1
		$feed.text(`hunger: ${tom.hunger}`)

	},
	//turnOffLights will make page go dark and decrement sleepiness level so he doesn't die
	 turnOffLights(){
	 	let $sleep = $('#tomSleepiness');
	 	if($('body').css({'background-color': '#262626', 'opacity': '0.9'}));{
	 	tom.sleepiness -= 4;
	 	$sleep.text(`sleepiness: ${tom.sleepiness}`)
	 }
	 	//while lights are off decrement sleepinless level?	
		// if($('body').css({'background-color': '#262626', 'opacity': '0.9'})){
		// 	tom.sleepiness -= 1
		// 	$sleep.text(`sleepiness: ${tom.sleepiness}`);
		// 	else if($('body').css('background-color') === 'yellow') {
		// 		//break to cancel loop? not working yet
		// 		break;
			//}
			
	 	//}
	 },//method to turn off lights begin increasing sleepiness levels again
	 turnOnLights(){
		$('body').css('background-color', '#FFF64D')
	 	//let $sleep = $('#tomSleepiness');

}
}



//inster listeners here. $().on('click')
$('.start').on('click', () => {
	// game.start();
	// game.setTimer();
}),

$('#play').on('click', () => {
	game.playWithGotchi();
}),

$('#feed').on('click', () => {
	game.feedGotchi();
})

$('#lightsOff').on('click', () => {
	game.turnOffLights();
})

$('#lightsOn').on('click', () => {
	game.turnOnLights();
})

$('form').on('submit', () => {
	console.log('clicked');
	console.log( $('#input-box').val());
	event.preventDefault();
	game.start(name)
	game.setTimer();
	
});











