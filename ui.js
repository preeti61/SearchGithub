class Ui{
  showProfile=(user)=>{
    this.profile=document.getElementById('res');
    this.profile.className='container';
    this.repos=document.getElementById('repo');
    this.profile.innerHTML=`
    <div class="container">
        <div class="row">
            <div class="column-md-3">
                <img class="img-fluid mb-2"src=${user.avatar_url}>
                <a href=${user.html_url} class="btn btn -primary btn-block mb-4">View profile</a>
             </div>
             <div class="column-md-9">
                   <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                   <span class="badge badge-primary">Followers:${user.followers}</span>
                   <span class="badge badge-primary">following:${user.following}</span>
                   <span class="badge badge-primary">
                   created_at :${user.created_at}</span>
                   <ul class="list-group">
                   <li class="list-group-item">company:${user.company}</li>
                   <li class="list-group-item">Blog:${user.blog}</li>
                   <li class="list-group-item">Location:${user.location}</li>
                   </ul>
             </div>
        </div>
    </div>`
  }


  showAlert= ()=> {
    this.clearAlert();
    const par=document.querySelector('.search');
    const lab=document.querySelector('.form-check');
   let alert=document.createElement('div');
   alert.className="alert alert-danger";
   alert.textContent="Not Found";
    par.insertBefore(alert,lab);
    setTimeout(()=>{
      this.clearAlert();
      }
      ,3000);
  }
  clearAlert=()=>{
   const Calert= document.querySelector('.alert');
   if(Calert)
      Calert.remove();
  }
  clearProfile()
  {this.profile.innerHTML='';
this.repos.innerHTML='';}

  showRepos(user)
  {
   let output="";
   user.forEach(function(rep){
     output+=`<div class='card card mb-2'>
     <div class="row">
     <div class="col-md-6"><a href=${rep.html_url}>${rep.name}</a>
     </div>
     <div class="col-md-6">
     <span class="badge badge-primary>stars:${rep.stargazers_count}</span>
                   <span class="badge badge-primary">Watchers:${rep.watchers}</span>
                  
     </div>
     </div>
     </div>`
    this.repos.innerHTML=output;
   })
  }
}
