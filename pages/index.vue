<template>
  <div>
    <h1>Home</h1>
    <v-divider></v-divider>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="track in tracks" :key="track.id">
            <td>{{ track.id }}</td>
            <td>{{ track.title }}</td>
            <td>{{ track.description }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    tracks: gql`
      query {
        tracks {
          title
          id
          description
        }
      }
    `
  }
};
</script>

<style>
</style>