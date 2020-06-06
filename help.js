class Gitid{
constructor()
{
  this.clientId='61c552aa8c37da7b0212';
  this.clientSecret='584675ad28f4fce358f40ff1e4baf808ee';
  this.reposCount=5;
  this.repos_sort='created:asc';
}

async getid (username){
 const response= await fetch(`https://api.github.com/users/${username}?client id=${this.clientId}&client secret=${this.clientSecret}`);


 const repo=await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.reposCount}&sort=${this.repos_sort}client id=${this.clientId}&client secret=${this.clientSecret}`);
 const profile=await response.json();
  const repoProfile=await repo.json();
 return{ 
   profile,
   repoProfile};

}


}