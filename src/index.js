import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-service';

function clearSearch() {
  $('.serialNumber').val("");
  $('.showErrors').text("");
}

function getElements(response) {
  if (response.bikes) {
    response.bikes.forEach(bike => {
      $('.bikes-area').prepend(`<div class='bike-block'>
        <span>Title: ${bike.title}</span>
        <span>Year: ${bike.year}</span>
        ${bike.thumb ? `<img src='${bike.thumb}'/>`: `<img src='https://applehurst.com/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png'/>`}
      </div>`);
    });
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function getAllBikes() {
  const response = await BikeService.getAllBikes();
  getElements(response);
}

async function searchBike(serialNumber) {
  const response = await BikeService.getBikeSearch(serialNumber);
  getElements(response);
}

$(document).ready(function() {
  $('.allBikes').click(function() {
    getAllBikes();
  });

  $('.bikeSearch').click(function() {
    let serialNumber = parseInt($('.serialNumber').val());
    searchBike(serialNumber);
    clearSearch();
  });
});