class UI {
  constructor () {}

  startSessionUI () {
    // will toggle the buttons needed when a generation session start

    const accept_class_btns = Array.from(
      document.getElementsByClassName('acceptClass')
    )

    const discard_class_btns = Array.from(
      document.getElementsByClassName('discardClass')
    )
    
    const custom_class_btns = Array.from(
        document.getElementsByClassName('customClass')
      )
    
    const generate_btns = Array.from(
      document.getElementsByClassName('btnGenerateClass')
    )

    //show the accept and discard buttons when a new session is active
    accept_class_btns.forEach(
      element => (element.style.display = 'inline-block')
    )
    discard_class_btns.forEach(
      element => (element.style.display = 'inline-block')
    )
    custom_class_btns.forEach(
        element => (element.style.display = 'inline-block')
      )
    
    //make the generate button show "Generate More" when a session is active
    generate_btns.forEach(element => {
      element.textContent = 'Generate More'
    })

    html_manip.setGenerateButtonsColor('generate-more', 'generate') //generate button green
  }

  endSessionUI () {
    const accept_class_btns = Array.from(
      document.getElementsByClassName('acceptClass')
    )

    const discard_class_btns = Array.from(
      document.getElementsByClassName('discardClass')
    )
    const custom_class_btns = Array.from(
        document.getElementsByClassName('customClass')
      )

    const generate_btns = Array.from(
      document.getElementsByClassName('btnGenerateClass')
    )

    accept_class_btns.forEach(element => (element.style.display = 'none'))
    discard_class_btns.forEach(element => (element.style.display = 'none'))
    custom_class_btns.forEach(
        element => (element.style.display = 'none')
      )
    generate_btns.forEach(element => {
      element.textContent = `Generate ${g_sd_mode}`
    })
    html_manip.setGenerateButtonsColor('generate', 'generate-more')
  }
  
  setGenerateBtnText(textContent){
    const generate_btns = Array.from(
  document.getElementsByClassName('btnGenerateClass')
)
generate_btns.forEach(element => {
  element.textContent = textContent
})

  }

}

module.exports = {
  UI
}
