import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Book = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Найди свою любимую книгу</h2><br />
                <p className='header-text fs-18 fw-3'>Поиск по метаданным — это поиск по неким атрибутам документа, поддерживаемым системой — название документа, дата создания, размер, автор и т. д. Пример поиска по реквизитам — диалог поиска в файловой системе.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Book