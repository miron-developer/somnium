import { useDispatch } from "react-redux";

import { useInput } from "utils/form";
import { Debounce } from "utils/effects";
import { Fetching } from "utils/api";
import { Notify } from "components/app-notification/notification";
import { addBooksToHome, clearBooksHome } from "routes/home/homeSlice";
import Input from "components/form-input/input";

import { SearchResultExample } from "./ex";
import styled from "styled-components";

const SSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  color: white;

  .search-btn {
    padding: 1rem;
    margin: 0 1rem;
    background: #444dc3;
    border-radius: 10px;
    box-shadow: 2px 4px 11px 1px #000000a1;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background: #970000;
    }
  }
`;

const search = Debounce((q, setResult = () => {}) => {
  Fetching("/api/search", { q: q }, "GET").then((resp) => {
    if (resp.code !== 200) {
      Notify("fail", "Not found books for the query: " + q);

      // set mock data
      return setResult(SearchResultExample);
    }

    setResult(resp.data);
  });
}, 300);

export default function Search() {
  const dispatch = useDispatch();

  const searchQ = useInput("");

  const setResult = (books = []) => {
    dispatch(clearBooksHome());
    dispatch(addBooksToHome({ books: books }));
  };

  // searchQ.base.onChange = (e) => {
  //   searchQ.base.onChange(e);
  //   search(e.target.value, setResult);
  // };

  return (
    <SSearch>
      <span>Search:</span>
      <Input base={searchQ.base} name="q" required={false} />
      <span
        className="search-btn"
        onClick={() => search(searchQ.base.value, setResult)}
      >
        <i className="fas fa-search"></i>
      </span>
    </SSearch>
  );
}
