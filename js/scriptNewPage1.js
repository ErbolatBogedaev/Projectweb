document.addEventListener('DOMContentLoaded', function () {
	const registrationForm = document.getElementById('registrationForm')

	if (registrationForm) {
		registrationForm.addEventListener('submit', function (event) {
			event.preventDefault()
			handleRegistration(registrationForm)
		})
	}
})

function handleRegistration(form) {
	const firstName = form.querySelector('#firstName').value.trim()
	const lastName = form.querySelector('#lastName').value.trim()

	if (firstName === '' || lastName === '') {
		alert('Please fill in all fields.')
		return
	}

	alert('Registration successful!')
}
