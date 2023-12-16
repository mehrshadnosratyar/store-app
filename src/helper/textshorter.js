function shortenText (text){
   const shortText = text.split(" ").slice(0,3)
   return shortText
}

export {shortenText};