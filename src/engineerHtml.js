function engineerHtml(engineer){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${engineer.name}</li>
          <li class="list-group-item">id:  ${engineer.id}</li>
          <li class="list-group-item">email: ${engineer.email}</li>
          <li class="list-group-item">Github: ${engineer.github}</li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=engineerHtml