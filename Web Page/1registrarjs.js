let bancoDeCadastro =[]
function concluido(usuario, email, senha,){
    let novoUsuario = {
        usuario: usuario,
        email:  email,
        senha: senha,
        
        
    }

    if (bancoDeCadastro.length ==0 ){
    bancoDeCadastro.push(novoUsuario)
    } else{
        for (let i in bancoDeCadastro){
            if(bancoDeCadastro[i].usuario != usuario && bancoDeCadastro[i].email != email){

        
                bancoDeCadastro.push({
                    usuario: usuario,
                    email:  email,
                    senha: senha,
                   
                })
                console.log(bancoDeCadastro)
                
            }else{
                return alert("Usuario ou email já existem")
            }
            
        }
    }


   


}

function cadastrar (){
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha =document.getElementById("senha").value
    
    
    
    

    concluido(usuario, email, senha)


    
}

function logar (){
    let usuariologin=document.getElementById('usuariologin').value
    let senhalogin=document.getElementById('senhalogin').value
    if(usuariologin=='admin' && senhalogin=='admin'){
        alert('Login Realizado'); location.href="1index.html"
    }else{
        alert('Usuario ou Senha Invalido')
    }
}

console.log(bancoDeCadastro)