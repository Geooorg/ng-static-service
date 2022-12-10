<template>
  <div v-if="currentStation.id" class="edit-form">
    <h4>Station</h4>
    <form>
      <div class="form-group">
        <label for="title">ID</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentStation.id"
        />
      </div>
      <div class="form-group">
        <label for="description">Name</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentStation.name"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentStation.published ? "Published" : "Pending" }}
      </div>
    </form>

<!--    <button-->
<!--      class="badge badge-primary mr-2"-->
<!--      v-if="currentStation.published"-->
<!--      @click="updatePublished(false)"-->
<!--    >-->
<!--      UnPublish-->
<!--    </button>-->
<!--    <button-->
<!--      v-else-->
<!--      class="badge badge-primary mr-2"-->
<!--      @click="updatePublished(true)"-->
<!--    >-->
<!--      Publish-->
<!--    </button>-->

<!--    <button class="badge badge-danger mr-2" @click="deleteTutorial">-->
<!--      Delete-->
<!--    </button>-->

<!--    <button type="submit" class="badge badge-success" @click="updateTutorial">-->
<!--      Update-->
<!--    </button>-->
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Station...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StationDataService from "@/services/StationDataService";
import ResponseData from "@/types/ResponseData";
import {Station} from "@/types/StationType";

export default defineComponent({
  name: "tutorial",
  data() {
    return {
      currentStation: {} as Station,
      message: "",
    };
  },
  methods: {
    getStation(id: any) {
      StationDataService.get(id)
        .then((response: ResponseData) => {
          this.currentStation = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },


  },
  mounted() {
    this.message = "";
    this.getStation(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
