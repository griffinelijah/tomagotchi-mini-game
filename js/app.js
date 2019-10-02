class Tomagotchi {
	constructor(name){
		this.name = name,
		this.age = null,
		this.hunger = null,
		this.sleepiness = null,
		this.boredom = null
	}
	//methods for feeding, dying, sleeping etc
}

 //tom = new tomagotchi('tom')

//console.log(tom);

const game = {
	pet: null,
	time: 10,
	//tom = new tomagotchi('tom'),
	start(name){
		const $tomName = $('#input-box').val();
			//console.log($tomName);
		this.pet = new Tomagotchi($tomName)
		//console.log(this.pet);
		$('#tomName').html($('#input-box').val());
		const $backgroundPic = $(`<img class="background src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiUkImElP7kAhU5IjQIHS_fDuQQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpapercave.com%2Fmaplestory-wallpapers&psig=AOvVaw2wJh09L8D6J7gpfo-y5N2e&ust=1570125655006466">`).appendTo('body')
		const $tomPic = $('<img class="mush" src="https://media.giphy.com/media/10NL14SuUwmc48/giphy.gif"></img>').appendTo('.imgDiv')
	},//timer to increment age value as ttime goes on
	//will also be used later on to determine hunger, boredom and sleepiness levels
	setTimer(){
		const $age = $('#tomAge');
		const $hunger = $('#tomHunger');
		const $sleep = $('#tomSleepiness');
		const $bored = $('#tomBoredom');
		const interval = setInterval(() => {
			this.pet.age += .5
			this.pet.hunger += 2
			this.pet.sleepiness += 1
			this.pet.boredom += 3

		$age.text(`Age: ${Math.floor(this.pet.age)}`)
		$hunger.text(`Hunger: ${this.pet.hunger}`)
		$sleep.text(`Sleepiness: ${this.pet.sleepiness}`)
		$bored.text(`Boredom: ${this.pet.boredom}`);
		if(this.pet.hunger >= 10){
			$('.mush').attr("src", "https://media.giphy.com/media/wWkU8oPViyJ2w/200.gif")
		}	else if(this.pet.sleepiness >= 10){
			$('.mush').attr("src", "https://media.giphy.com/media/wWkU8oPViyJ2w/200.gif")
		} 	else if(this.pet.boredom >= 10){
			$('.mush').attr("src", "https://media.giphy.com/media/wWkU8oPViyJ2w/200.gif")
		}
		else if(this.pet.age >=1 && this.pet.age < 5){
			$('.mush').attr("src", "https://thumbs.gfycat.com/PersonalGraciousAmericantoad-max-1mb.gif")
		}	else if(this.pet.age >= 5 && this.pet.age < 10){
			$('.mush').attr("src", "https://darkrulersmugen.weebly.com/uploads/1/7/2/9/17298946/6219522_orig.gif")
		}	else if(this.pet.age >= 10){
			$('.mush').attr("src", "https://conserver.files.wordpress.com/2010/01/stand1.gif?w=604")
			
			
		}
			
		}, 10000)
	},
	//play function will let you interact with tamagotchi to lower boredom level, alerts you att 5,7 and 9 
	playWithGotchi(){

		let $bored = $('#tomBoredom');
		this.pet.boredom -= 1
		$bored.text(`boredom: ${this.pet.boredom}`)
		// if($bored = 4){
		// 	alert('tom is bored');
		// }
		//  else if($bored = 7){
		//  	alert('play with tom now');
		//  }
		//  else if($bored = 9){
		//  	alert('tom will die of boredom');
		//  }
	},
	//Feed method will allow you to lower gotchis hunger level so e doesn't die
	feedGotchi(){
		let $feed = $('#tomHunger');
		this.pet.hunger -= 1
		$feed.text(`hunger: ${this.pet.hunger}`)

	},
	//turnOffLights will make page go dark and decrement sleepiness level so he doesn't die
	 turnOffLights(){
	 	let $sleep = $('#tomSleepiness');
	 	if($('body').css({'background-color': '#262626', 'opacity': '0.9'}));{
	 	this.pet.sleepiness -= 4;
	 	$sleep.text(`sleepiness: ${this.pet.sleepiness}`)
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
		$('body').css('background-color', '#E8CDE1')
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
	//console.log('clicked');
	//console.log( $('#input-box').val());
	event.preventDefault();
	$('#tomName').html();
	game.start(name)
	game.setTimer();
	
});










