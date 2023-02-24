import { createContext } from "react";
import PRODUCTS from "../../Procduct/Product";

export const ListContext = createContext()



function ProductContext({children}) {
     
    const fillerIphone = PRODUCTS.filter((product)=>product.type==='iphone')


    const fillerIpad = PRODUCTS.filter((product)=>product.type==='ipad')

    const fillerPriceLarge = PRODUCTS.filter((product)=>product.price > 500)

    const fillerPriceBetween = fillerPriceLarge.filter((product)=> product.price < 1000)


   

  

    const ContextValue = {fillerIphone,fillerIpad,fillerPriceLarge,fillerPriceBetween}
    return (
        <ListContext.Provider value={ContextValue}>{children}</ListContext.Provider>
    )
}

export default ProductContext;