import ProcductItem from "../../Componets/ProductItem/ProductItem";
import PRODUCTS from "../../Procduct/Product";
import Content from '../Content';



function Home() {
    return (
        <Content>
          {PRODUCTS.map((product) => (
            <ProcductItem key={product.id} data={product} />
          ))}
      </Content>
    ); 
}

export default Home;