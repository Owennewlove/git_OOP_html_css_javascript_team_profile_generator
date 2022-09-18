function engineerHtml(engineer){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${engineer.name}</li>
          <li class="list-group-item">id:  ${engineer.id}</li>
          <li class="list-group-item"><a href="mailto:${engineer.email}">email: ${engineer.email}</a></li>
          <li class="list-group-item"><a href="https://github.com/${engineer.github}">Github: ${engineer.github}</a> </li> 
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=engineerHtml