import { useSelector, useDispatch } from "react-redux";

import { addBook, removeBook } from "routes/backet/basketSlice";

import styled from "styled-components";

const SBook = styled.div`
  margin: 1rem;
  padding: 1rem;

  background: #ffffff30;
  border-radius: 10px;
  box-shadow: 3px 4px 2px 2px #0000004d;

  .book-info {
    overflow: hidden;

    h3 {
      text-align: center;
      color: white;
    }

    .book-img {
      height: 15rem;
      width: 15rem;
      border-radius: 10px;
      background: #ffffff1c;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .book-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    button {
      padding: 1rem;
      color: white;
      background: #4755c3;
      border-radius: 5px;
      border: none;
      box-shadow: 4px 3px 4px 0 black;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background: red;
      }
    }
  }
`;

export default function Book({ id, name, img, cost }) {
  const busketBooks = useSelector((state) => state.basket.books);
  const dispatch = useDispatch();

  const isOnBusket = busketBooks?.find((b) => b.id === id);

  return (
    <SBook>
      <div className="book-info">
        <h3>{name}</h3>

        <div className="book-img">
          <img src={img} alt={name} />
        </div>
      </div>

      <div className="book-actions">
        {isOnBusket ? (
          <button onClick={() => dispatch(removeBook({ id: id }))}>
            Remove from busket!
          </button>
        ) : (
          <button onClick={() => dispatch(addBook({ id, name, img, cost }))}>
            Add to busket!
          </button>
        )}
      </div>
    </SBook>
  );
}
