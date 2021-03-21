document.getElementById("perimeter").onclick = function () {
    location.href = "Perimeter/index.html";
};
document.getElementById("IA").onclick = function () {
    location.href = "IA/index.html";
};
document.getElementById("consequences").onclick = function () {
    location.href = "consequences/index.html";
};

alert("j'ai pour but de vous proposer des recommandations, etapes par etapes remplissez les cases !")
setTimeout(couleur, 4000);
function couleur()
{
    color=prompt("entrez la couleur que vous voulez en anglais pour le site ");
    document.body.style.backgroundColor =color;
}


    function second() {
        var entry = document.getElementById("entrer").value;
        var entry1 = document.getElementById("entrer1").value;
        var entry2 = document.getElementById("entrer2").value;
        var entry3 = document.getElementById("entrer3").value;
        setTimeout(attpetit,5000);
        function attpetit(){

            alert("je vais vous montrer des sites qui pourront vous interesser cher visiteur, attendez que je les construise")
        }
        setTimeout(attpetit2,7000);
        function attpetit2(){

            alert("voila le premier  ;)")
        }
        setTimeout(att,8000);
        function att(){


            com=".com";
            http="http://"
            www="www.";
            join=http+www+entry+com
            ddd=window.open(join, '_blank');
            

            
        }


        
     
      
       
    }
    





utilisateurinteract2()