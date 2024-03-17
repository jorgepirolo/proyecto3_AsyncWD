import './footer.css'

export const pintarfooter = () => {
  const footer = document.querySelector('footer')
  const divfoot = document.createElement('div')
  const p = document.createElement('p')
  p.innerText = '?'
  footer.appendChild(divfoot)
  divfoot.appendChild(p)
  divfoot.classList = 'footy'
  p.classList = 'inte'

  footer.appendChild(divfoot)
}
