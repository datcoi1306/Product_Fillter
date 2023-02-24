import { useContext } from "react";

import { ListContext } from "../../Componets/ProductCotext/ProducteContext";
import ProcductItem from "../../Componets/ProductItem/ProductItem";
import Content from "../Content";

function PriceBetween() {
    const {fillerPriceBetween}=useContext(ListContext)
    return (
      <Content>
        {fillerPriceBetween.map((product) => (
          <ProcductItem key={product.id} data={product} />
        ))}
      </Content>
    );
}

export default PriceBetween;