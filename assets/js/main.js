//Se selecciona el logo del header
const logo = document.getElementById('logoBenjamin')

//Al hacer click nos lleva al comienzo de la web
logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0
  })
})

const form = document.getElementById('formcontact')

form.addEventListener('submit', e => {
    e.preventDefault()

    const data = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value
    }
    console.log(data)
    emailjs.send("service_gakblv9", "template_cfqskdr", data);
  }
)
