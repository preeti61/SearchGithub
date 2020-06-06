let github=new Gitid;
uigit=new Ui;
document.getElementById('inp').addEventListener('keyup',gettext);



function gettext(e)
{
let usertext=e.target.value;
if(usertext){
github.getid(usertext)
.then(data=>
  {if(data.profile.message==='Not Found')
    uigit.showAlert();
    else
    {uigit.showProfile(data.profile);
    uigit.showRepos(data.repoProfile); }
  });

}
else
uigit.clearProfile();
}