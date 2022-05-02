import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={item.image}
            alt=""
          />
        </div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </Flex>
    </>
  );
};
