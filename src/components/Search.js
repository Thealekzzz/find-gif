import React, { useEffect, useState } from 'react';

import "../pages/Search.css";

import { api } from '../utils/api';

import useFormAndValidation from '../hooks/useFormAndValidation';

import resetIcon from "../images/reset.svg";
import searchIcon from "../images/search.svg";
import Main from './Main';

const Search = () => {
  const { values, handleChange, handleBlur, isValid, errors, resetForm } = useFormAndValidation();

  const [gifs, setGifs] = useState([]);
  const [lastSearchString, setLastSearchString] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleInputChange = (evt) => {
    handleChange(evt);
  }

  const handleReset = () => {
    resetForm();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  }

  const handleSearch = () => {
    // Ограничение поиска по одинаковым запросам при сабмите формы
    if (isValid && values.search && lastSearchString !== values.search) {
      setLastSearchString(values.search);

      api.searchGifs(values.search)
        .then(data => {
          // setGifs(data);
          setGifs(data.data.map((item) => ({
            id: item.id,
            alt: item.title,
            src: item.images.original.url,
          })));
          console.log(data); // Вовод на экран число для теста
        });
    }
  }

  useEffect(() => {
    // Создание задержки поиска при вводе поискового запроса
    // Чтобы не генерировать много лишних запросов в момент ввода
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(setTimeout(() => {
      handleSearch();
      setSearchTimeout(null);
    }, 1000));
  // eslint-disable-next-line
  }, [values]);

  return (
    <div className='search'>
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <div className="search__input-wrapper">
          <input
            type="text"
            name='search'
            required
            minLength={2}
            maxLength={40}
            className={`search__input ${errors.search ? "search__input_invalid" : ""}`}
            placeholder='Найди свою идеальную гифку'
            value={values.search || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <p className={`search__input-error ${errors.search ? "" : "search__input-error_hidden"}`}>{errors.search}</p>
        </div>

        <button type="reset" className='search__button' onClick={handleReset}>
          <img src={resetIcon} alt="Очистить поле запроса, кнопка" />
        </button>

        <button type="submit" className='search__button' disabled={!isValid}>
          <img src={searchIcon} alt="Выполнить поиск, кнопка" />
        </button>
      </form>

      <Main gifs={gifs}/>
    </div>
  );
};

export default Search;