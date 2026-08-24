function Animal() {

    
    let animais = ["Cachorro", "Gato", "Urso", "Raposa", "Pato"];

    
    let numero = Math.floor(Math.random() * animais.length);

    
    let animal = animais[numero];

    
    let nome = document.getElementById("nome-animal");
    let imagem = document.getElementById("imagem-animal");


   
    if (animal == "Cachorro") {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(dados => {
                nome.innerText = "Cachorro";
                imagem.src = dados.message;
            });
    }


    
    if (animal == "Gato") {

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(dados => {
                nome.innerText = "Gato";
                imagem.src = dados[0].url;
            });
    }


   
    if (animal == "Urso") {

        let numeroUrso = Math.floor(Math.random() * 300) + 200;

        imagem.src = `https://placebear.com/300/${numeroUrso}`;
        nome.innerText = "Urso";
    }


  
    if (animal == "Raposa") {

        fetch("https://randomfox.ca/floof/")
            .then(response => response.json())
            .then(dados => {
                nome.innerText = "Raposa";
                imagem.src = dados.image;
            });
    }


   
    if (animal == "Pato") {

       fetch("https://random-d.uk/api/v2/random")
        .then(response => response.json())
        .then(dados => {
            nome.innerText = "Pato";
            imagem.src = dados.url;
        });
            
           
    }
}