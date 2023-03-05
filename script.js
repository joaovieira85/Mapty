'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      let { latitude } = pos.coords;
      let { longitude } = pos.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      console.log(latitude, longitude);
    },
    function () {
      console.log(alert('Don´t have acess to your localization'));
    }
  );
}
