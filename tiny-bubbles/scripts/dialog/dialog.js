
const eventHub=document.querySelector(".container")
const dialog=document.querySelector(".messages")

export const displayMessagDialog = () => {
  eventHub.addEventListener("purchaseButtonClicked", event =>{
    const messageIWillDisplay=event.detail.songPurchaseMessage
    console.log("test....")
    document.querySelector(".messages__text").innerHTML=messageIWillDisplay
    dialog.show()
  })
}


export const handleCloseDialog = () =>{


          eventHub.addEventListener("click", e => {
              if(e.target.id==="button--closeMessage"){
                  e.target.parentNode.close()
              }
          })
}
