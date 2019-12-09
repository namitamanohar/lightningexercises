
const eventHub=document.querySelector(".container")

export const addPurchaseEventListenters = () => {
  
  eventHub.addEventListener("click", clickEvent => {

    let theActualMessage = ""

    if(clickEvent.target.id==="purchase__itunes"){
      theActualMessage = "Purchasing song on iTunes..."
     
    }
      if(clickEvent.target.id==="purchase__googleplay"){
        theActualMessage = "Purchasing song on Google Play..."
    }

      if(clickEvent.target.id.startsWith("purchase__")){
        const message =new CustomEvent("purchaseButtonClicked", {
        detail:{
          songPurchaseMessage:theActualMessage
        }
      })
    
      eventHub.dispatchEvent(message)
       
      }
    })


    }
  // build a custom message with corresponding text 
  // call it purchaseButtonClicked 