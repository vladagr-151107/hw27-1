import React from "react";

function Home(){
    return(
        <div>
    <div class="container py-4">
    <h1 class="mb-4 text-center">ToDoList</h1>
    <form class="form js--form d-flex gap-2 mb-4">
        <input type="text" name="value" required class="form__input js--form__input form-control"/>
        <button class="form__btn btn btn-success">Add</button>
    </form>
    <ul class="js--todos-wrapper list-unstyled"></ul>
</div>

<div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="taskModalLabel">Ваше завдання</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрити"></button>
      </div>
      <div class="modal-body" id="modalTaskText"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Home;