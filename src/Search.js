import React from "react";

export default function Search() {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Write the city"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <button type="button" class="btn btn-outline-danger">
        Search
      </button>
      <button type="button" class="btn btn-outline-danger">
        Current City
      </button>
    </div>
  );
}
