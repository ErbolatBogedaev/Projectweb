class Modal {
	constructor(content) {
		this.content = content
	}

	open() {
		document.getElementById('modalContent').innerText = this.content
		document.getElementById('modal').style.display = 'block'
	}

	close() {
		document.getElementById('modal').style.display = 'none'
	}
}

const modal = new Modal()

document.getElementById('modalButton1').addEventListener('click', function () {
	modal.open(
		'Join our ecological community, where you can exchange knowledge, ideas, and experiences about biomes. We create a space for nature enthusiasts, where each contribution matters for the preservation of our planet. Click Join to become part of our community.'
	)
})

document.getElementById('modalButton2').addEventListener('click', function () {
	modal.open(
		'Participate in our ecosystem studies and help expand our understanding of biomes. We invite you to be part of the team conducting research on the diversity of life in different ecosystems. Click Participate to learn more about ongoing projects.'
	)
})

document.getElementById('modalButton3').addEventListener('click', function () {
	modal.open(
		'Immerse yourself in the world of biomes by participating in our ecological expeditions. We organize trips to unique natural places where you can observe and study the diversity of biomes. Click Join the Expedition to start your adventure in exploring nature.'
	)
})
