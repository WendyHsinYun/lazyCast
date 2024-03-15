<template lang="pug">
div
  button(@click="fetchWeatherData") loading 天氣數據
  p {{ weatherData }}
</template>

<script setup lang="ts">
const weatherData = ref(null)
const dataStore = useDataStore();
const config = useRuntimeConfig()

function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true); 
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function fetchWeatherData() {
  const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${config.public.apiSecret}&elementName=PoP12h`;
  const method = 'GET';
  const xhr = createCORSRequest(method, url);

  if (!xhr) {
    throw new Error('CORS not supported');
  }

  xhr.onload = function() {
    const response = JSON.parse(xhr.response)
    dataStore.weatherList = response.records.locations[0].location[0].weatherElement[0].time
  
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };

  xhr.send();
}
</script>
