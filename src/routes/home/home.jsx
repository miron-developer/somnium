import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Fetching } from "utils/api";
import { RandomKey } from "utils/content";
import { Notify } from "components/app-notification/notification";
import Book from "components/book/book";

import { setBooksHome } from "./homeSlice";
import { HomeExample } from "./ex";
import styled from "styled-components";

const SHome = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

export default function HomePage() {
  const books = useSelector((state) => state.home.books);
  const dispatch = useDispatch();

  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (books.length === 0 && !isLoaded) {
      setLoaded(true);
      return Fetching("/api/books", { type: "home" }, "GET").then((resp) => {
        if (resp.code !== 200) {
          dispatch(setBooksHome({ books: HomeExample }));
          return Notify("fail", "Not load books");
        }

        dispatch(setBooksHome({ books: resp.data }));
      });
    }
  }, [books, isLoaded, dispatch]);

  if (books.length === 0) return <div>No books</div>;
  return (
    <SHome>
      {books.map((b) => (
        <Book key={RandomKey()} {...b} />
      ))}
    </SHome>
  );
}
