window.Page.register = () => {
    
    window.main.innerHTML = '';

    const uid_aluno = "c271cbb9-fc13-486e-a2df-80fe72ea72ed";

    const inputs = {
        tiragem: Shared.input({
            type: 'number',
            name: 'tiragem',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        titulo: Shared.input({
            name: 'titulo',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        autor: Shared.input({
            name: 'autor',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        descricao: Shared.input({
            name: 'descricao',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        })
    }
    main.appendChild(
        Shared.div('divCadastro', [
            Shared.form([
                Shared.field({
                    label: 'Titulo',
                    input: inputs.titulo
                }),
                Shared.field({
                    label: 'Autor',
                    input: inputs.autor
                }),
                Shared.field({
                    label: 'Descricao',
                    input: inputs.descricao
                }),
                Shared.field({
                    label: 'Tiragem',
                    input: inputs.tiragem
                }),
                Shared.actions([
                    Shared.button({
                        text: 'Cadastrar',
                        type: 'primary',
                        onClick: () => {                           
                            fetch('http://livros.letscode.dev.netuno.org:25390/services/livro', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "aluno": {
                                        "uid": uid_aluno
                                    },
                                    "tiragem": parseInt(inputs.tiragem.value),
                                    "titulo": inputs.titulo.value,
                                    "autor": inputs.autor.value,
                                    "descricao": inputs.descricao.value,
                                })
                            }).then((response) => {
                                if (response.ok) {
                                    response.json().then((data) => {
                                        alert('Livro cadastrado com sucesso')
                                    });
                                } else {
                                    response.json().then((data) => {
                                        alert('erro')
                                    });
                                }
                            }).catch((error) => {
                                console.log('Erro geral:', error);
                            });
                        }
                    })
                ])
            ])
        ])
    );
};