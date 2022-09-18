function manageHtml(manager){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${manager.name}</li>
          <li class="list-group-item">id:  ${manager.id}</li>
          <li class="list-group-item">  <a href="mailto:${manager.email}">email: ${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.office} </li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=manageHtml