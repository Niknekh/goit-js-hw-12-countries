import fetchCountries from './js/fetchCountries.js';
import './styles.css'
import debounce from 'lodash.debounce';
import countryList from './templates/list-countries.hbs'
import { alert, notice, info, success, error } from '@pnotify/core';
import countryInfo from './templates/country-info.hbs'






const refs = {
  input: document.querySelector('.country-search'),
  container: document.querySelector('.container'),
  countryUl: document.querySelector('.country-list'),
  countryInformContainer: document.querySelector('.results-container'),
  regExp: /[a-zA-Z]/g
}
refs.input.addEventListener('input', debounce((e) => {
 
  if (e.target.value === '') {
    refs.countryUl.innerHTML = '';
    return;
  }
            
if(refs.regExp.test(e.target.value)){
  fetchCountries(e.target.value.trim())
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        alert({
          text: 'Слишком много совпадений! Пожалуйта, сделайте запрос специфичнее.',
          type: 'info',
          addClass: 'pnotify',
          animation: 'fade',
          delay: 3000
        });
        refs.countryUl.innerHTML = '';
                refs.countryInformContainer.innerHTML = '';


      } else if (data.length >= 2 && data.length <= 10) {
        refs.countryUl.innerHTML = countryList(data);
                refs.countryInformContainer.innerHTML = '';


      } else if (data.length === 1) {
        refs.countryInformContainer.innerHTML = countryInfo(data);
                            refs.countryUl.innerHTML = '';

      } else {
        alert({
          addClass: 'pnotify',
          text: 'Неверное имя!'
        })
                    refs.countryUl.innerHTML = '';
        refs.countryInformContainer.innerHTML = '';
      }
    })
} else {
  return;

}
}, 500)
)
