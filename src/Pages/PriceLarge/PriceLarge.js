import { useContext } from "react";

import { ListContext } from "../../Componets/ProductCotext/ProducteContext";
import ProcductItem from "../../Componets/ProductItem/ProductItem";
import Content from "../Content";

function PriceLarge() {
    const {fillerPriceLarge}=useContext(ListContext)
    return (
      <Content>
        {fillerPriceLarge.map((product) => (
          <ProcductItem key={product.id} data={product} />
        ))}
      </Content>
    );
}

export default PriceLarge;