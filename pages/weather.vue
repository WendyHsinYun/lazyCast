<template lang="pug">
p {{ weather }}
</template>

<script setup lang="ts">
const dataStore = useDataStore();

interface Weather {
  startTime: string;
  endTime: string,
  elementValue: Array<string>
}

const weather = ref<Weather[]>([])

onMounted(()=>{
  weather.value = dataStore.weatherList
})
</script>