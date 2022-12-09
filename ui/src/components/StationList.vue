<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by ID"
          v-model="searchQuery"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Station List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(station, index) in stations"
          :key="index"
          @click="setActiveStation(station, index)"
        >
          {{ station.title }}
        </li>
      </ul>


    </div>
    <div class="col-md-6">
      <div v-if="currentStation.id">
        <h4>Station</h4>
        <div>
          <label><strong>ID:</strong></label> {{ currentStation.id }}
        </div>
        <div>
          <label><strong>Name:</strong></label>
          {{ currentStation.name }}
        </div>
        <div>
          <label><strong>Hosts:</strong></label>
          {{ currentStation.hosts.size() > 0 ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="'/stations/' + currentStation.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Station anklicken</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StationDataService from "@/services/StationDataService";
import ResponseData from "@/types/ResponseData";
import {Station} from "@/types/StationType";

export default defineComponent({
  name: "station-list",
  data() {
    return {
      stations: [] as Station[],
      currentStation: {} as Station,
      currentIndex: -1,
      searchQuery: "",
    };
  },
  methods: {
    retrieveStations() {
      StationDataService.getAll()
        .then((response: ResponseData) => {
          this.stations = response.data.receivers;
          console.log(response);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveStations();
      this.currentStation = {} as Station;
      this.currentIndex = -1;
    },

    setActiveStation(station: Station, index = -1) {
      this.currentStation = station;
      this.currentIndex = index;
    },


    searchTitle() {
      StationDataService.findByTitle(this.searchQuery)
        .then((response: ResponseData) => {
          this.stations = response.data;
          this.setActiveStation({} as Station);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveStations();
  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
