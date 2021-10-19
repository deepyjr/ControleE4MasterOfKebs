import React from 'react'

export default function CommandeValidée() {
    return (
        <div>
         <h2 className="titleValidee">C'est parti !</h2>  
         <p className="textPréparation">Notre maitre kébabier prépare votre commande.</p> <br/>
         <p className="textPréparation">Patience...</p>   
         <img className="imageWitch" src={process.env.PUBLIC_URL + '/witch.png'} alt="Logo kebab" />
        </div>
    )
}
