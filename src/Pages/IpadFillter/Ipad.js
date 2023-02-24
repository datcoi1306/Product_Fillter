import { useContext } from "react";

import { ListContext } from "../../Componets/ProductCotext/ProducteContext";
import ProcductItem from "../../Componets/ProductItem/ProductItem";
import Content from "../Content";


function Ipad() {
    const {fillerIpad}=useContext(ListContext)
    return (
      <Content >
        {fillerIpad.map((product) => (
          <ProcductItem key={product.id} data={product} />
        ))}
      </Content>
    );
}

export default Ipad;