window.Page.list = () => {

    window.main.innerHTML = '';

    const uid_aluno = "c271cbb9-fc13-486e-a2df-80fe72ea72ed";

    const inputs = {
        busca: Shared.input({
            name: 'busca',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
    }

    main.appendChild(
        Shared.div('divBusca', [
            Shared.form([
                Shared.field({
                    label: 'Busca',
                    input: inputs.busca
                }),
                Shared.actions([
                    Shared.button({
                        text: 'Buscar',
                        type: 'primary',
                        onClick: () => { 
                            fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "aluno": {
                                        "uid": uid_aluno
                                    },
                                    "text": inputs.busca.value,
                                })
                            }).then((response) => {
                                if (response.ok) {
                                    response.json().then((data) => {
                                        const remover = document.getElementsByClassName('containerCards')[0]
                                        if (remover !== undefined) {
                                            remover.remove()
                                        }
                                        const results = document.getElementsByClassName('divBusca')[0];
                                        results.appendChild(Shared.listarDiv(
                                            Shared.criaCard(data)
                                        ));
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
        ]),
        
    );

};

