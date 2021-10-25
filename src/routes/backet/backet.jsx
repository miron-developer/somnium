import { useSelector } from "react-redux";

import { RandomKey } from "utils/content";
import Book from "components/book/book";
import styled from "styled-components";

const SBasket = styled.section`
  padding: 2rem;

  h2 {
    color: white;
    font-size: 2rem;
    text-align: center;
  }

  .books {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
  }

  .no-books {
    color: white;
  }

  .total {
    color: white;
    text-align: center;
    font-size: 1.5rem;

    & span {
      color: red;
    }
  }
`;

export default function BusketPage() {
  const books = useSelector((state) => state.basket.books);

  return (
    <SBasket>
      <h2>Basket</h2>

      {books.length > 0 ? (
        <div className="books">
          {books.map((b) => (
            <Book key={RandomKey()} {...b} />
          ))}
        </div>
      ) : (
        <span className="no-books">Not exist books in basket</span>
      )}

      {books.length > 0 && (
        <div className="total">
          Total: <span> {books.reduce((acc, v) => (acc += v.cost), 0)}</span>
        </div>
      )}
    </SBasket>
  );
}
