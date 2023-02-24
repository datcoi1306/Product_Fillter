import { useContext } from "react";

import { ListContext } from "../../Componets/ProductCotext/ProducteContext";
import ProcductItem from "../../Componets/ProductItem/ProductItem";
import Content from "../Content";

function Iphone() {
    const {fillerIphone}=useContext(ListContext)

    return ( 
        <Content>
        {fillerIphone.map((product) => (
              <ProcductItem key={product.id} data={product} />
            ))}
        </Content>
    );
}

export default Iphone;