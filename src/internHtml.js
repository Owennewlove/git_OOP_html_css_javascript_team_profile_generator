function internHtml(intern){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${intern.name}</li>
          <li class="list-group-item">id:  ${intern.id}</li>
          <li class="list-group-item"><a href="mailto:${intern.email}">email: ${intern.email}</a></li>
          <li class="list-group-item">School:${intern.school}</li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=internHtml