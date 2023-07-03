import React, { useEffect, useState } from "react";

import "../pages/Search.css";

import { api } from "../utils/api";

import useFormAndValidation from "../hooks/useFormAndValidation";

import resetIcon from "../images/reset.svg";
import searchIcon from "../images/search.svg";
import Main from "./Main";

const Search = ({ limit }) => {
  const {
    values,
    handleChange,
    handleBlur,
    isValid,
    errors,
    resetForm,
    setValues,
  } = useFormAndValidation();
  
  const textsList = [
    "Надо больше гифок!",
    "А можно еще чуть-чуть? 🥺",
    "Гифок много не бывает! 😈",
    "Следующие!",
  ];

  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalGifs, setTotalGifs] = useState(0);

  const [lastSearchString, setLastSearchString] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const [buttonText, setButtonText] = useState(textsList[0]);
  

  const handleInputChange = (evt) => {
    handleChange(evt);
  };

  const handleReset = () => {
    resetForm();
    setOffset(0);
    setGifs([]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  function handleNextButtonClick() {
    setOffset((prev) => prev + limit);
  }

  const handleSearch = (extend = true, searchValue = null) => {
    setIsLoading(true);

    if (!extend) {
      setGifs([]);
    }

    api
      .searchGifs(searchValue || values.search, limit, offset)
      .then((recievedGifs) => {
        const newGifs = [
          ...(extend ? gifs : []),
          ...recievedGifs.data.map((item) => ({
            id: item.id,
            alt: item.title,
            src: item.images.original.url,
          })),
        ];

        setTotalGifs(recievedGifs.pagination.total_count);
        setGifs(newGifs);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Поиск гифок при вводе запроса
  useEffect(() => {
    // Задание состояния загрузки
    if (isValid) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    // Отмена таймаута выполнения поиска при очередном нажатии кнопки
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Ограничение поиска по одинаковым запросам при сабмите формы
    if (isValid && lastSearchString !== values.search) {
      setLastSearchString(values.search);

      // Создание задержки поиска при вводе поискового запроса
      // Чтобы не генерировать много лишних запросов в момент ввода
      setSearchTimeout(
        setTimeout(() => {
          handleSearch(false);
          setSearchTimeout(null);
        }, 1000)
      );
    }
    // eslint-disable-next-line
  }, [values]);

  // Добавление гифок при нажатии кнопки
  useEffect(() => {
    if (offset !== 0) {
      handleSearch(true);
    }

    // Изменение текста кнопки в зависимости от страницы
    const currentPage = offset / limit;
    setButtonText(textsList[Math.min(currentPage, textsList.length - 1)]);

    // eslint-disable-next-line
  }, [offset]);

  useEffect(() => {
    const requestStrings = [
      "good vibes",
      "summer",
      "vacation",
      "developer",
      "frontend",
      "music",
    ];
    const requestString =
      requestStrings[Math.floor(Math.random() * requestStrings.length)];

    setValues({ search: requestString });
    handleSearch(false, requestString);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="search">
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <div className="search__input-wrapper">
          <input
            type="text"
            name="search"
            required
            minLength={2}
            maxLength={40}
            className={`search__input ${
              errors.search ? "search__input_invalid" : ""
            }`}
            placeholder="Найди свою идеальную гифку"
            value={values.search || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <p
            className={`search__input-error ${
              errors.search ? "" : "search__input-error_hidden"
            }`}
          >
            {errors.search}
          </p>
        </div>

        <button type="reset" className="search__button" onClick={handleReset}>
          <img src={resetIcon} alt="Очистить поле запроса, кнопка" />
        </button>

        <button type="submit" className="search__button" disabled={!isValid}>
          <img src={searchIcon} alt="Выполнить поиск, кнопка" />
        </button>
      </form>

      {gifs.length ? (
        <Main
          gifs={gifs}
          onNextButtonClick={handleNextButtonClick}
          buttonText={buttonText}
          isLoading={isLoading}
          isMoreGifs={offset + limit < totalGifs}
        />
      ) : (
        <>
          {isLoading ? (
            <div className="loading">
              <span className="spinner spinner_black spinner_size_L"></span>;
            </div>
          ) : (
            <span className="infotip">
              {isValid
                ? "По этому запросу нет гифок 🥲"
                : "Нет запроса - нет гифок 😉"}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
