const form = document.totals
form.addEventListener('submit', function(){
   event.preventDefault()
   const goombaNum = form.goomba.value
   const bobNum = form.Bombs.value
   const cheepNum = form.Cheeps.value
   document.getElementById('sum')
   .textContent = (Number(goombaNum) * 5) + (Number(bobNum) * 7) + (Number(cheepNum) * 11 )  + ' Coins'
})

