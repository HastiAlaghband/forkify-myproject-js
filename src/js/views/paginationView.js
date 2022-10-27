import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPgnClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');

      if (!button) return;

      const goToPage = +button.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // On page 1, and there are other pages (next button)
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(1);
    }

    // On last page (previous button)
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(-1);
    }

    // On other pages (next & previous button)
    if (curPage < numPages) {
      return `${
        this._generateMarkupButton(-1) + this._generateMarkupButton(1)
      }`;
    }

    // On page 1, and there are NO other pages (NO next/previous button)
    return '';
  }

  _generateMarkupButton(numeralDirection) {
    // numeralDirection: previous -1, next +1
    const currentPage = this._data.page;
    const icon = `
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-${
      numeralDirection < 0 ? 'left' : 'right'
    }">
      </use>
    </svg>`;

    const page = `
    <span>Page ${numeralDirection + currentPage}</span>
    `;

    return `
      <button data-goto="${
        numeralDirection + currentPage
      }" class="btn--inline pagination__btn--${
      numeralDirection < 0 ? 'prev' : 'next'
    }">
    ${numeralDirection < 0 ? icon + page : page + icon}
      </button>
  `;
  }
}

export default new PaginationView();
