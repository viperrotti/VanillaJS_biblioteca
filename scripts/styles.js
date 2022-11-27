
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            font-family: Arial;
            font-size: 16px;
            margin: 0;
            padding: 0;
        }
        header {
            background: #a10c3d;
            font-size: 24px;
            color: #f8efed;
            font-weight: bolder;
            height: 12vh;
            display: flex;
            align-items: center;
        }
        nav{
            width: 80vw;
            display: flex;
            justify-content: space-evenly;
        }
        form {
            margin-top: 6vh;
            padding: 1.5vw;
            width: 50vw;
            background: #e4d7ed;
            border-radius: 5px;
            text-align: center;
            flex-direction: column;
            justify-content: center;
        }
        button {
            height: 5vh;
            width: 15vw;
            background: #a10c3d;
            font-size: 18px;
            color: #f8efed;
            border: none;
            border-radius: 5px;
        }
        .divBusca {
            padding: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .divBusca form {
            height: 22vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .divCadastro {
            padding: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .divEditar {
            padding: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .divEditar form {
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .containerCards {
            width: 50vw;
            padding: 20px;
            display: flex;
            // align-items: center;
            flex-direction: column;
            justify-content: center;
            
        }
        .cardLista {
            border-bottom: solid 1px #e4d7ed
        }
        .links {
            display: flex;
            justify-content: space-evenly;
            padding-top: 5px;
            color: #520931;
            font-weight: bolder;
        }
        h1, h2, h3 {
            color: #520931;
            font-weight: bolder;           
        }
        label {
            color: #520931;
            font-weight: bolder;
            font-size: 22px;
            margin-bottom: 5vh;
        }
        input {
            height: 3vh;
            width: 25vw;
            border-radius: 2px;
            padding: 6px;
        }

    `;
    document.body.appendChild(style);
})();
