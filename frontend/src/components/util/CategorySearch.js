 import React, { useRef, useState, useEffect, Fragment } from "react";
//import Header from "./Header";

function CategorySearch() {
  // const dispatch = useDispatch()
 // const user = useSelector(currentUser);

  return (
    <div className="">
      <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default CategorySearch;
