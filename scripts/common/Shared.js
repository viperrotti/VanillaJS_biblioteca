window.Shared = {
    form: (children) => {
        const form = document.createElement('form');
        for (const child of children) {
            form.appendChild(child);
        }
        return form;
    },
    div: (classe = '', children) => {
        const div = document.createElement('div');
        div.setAttribute('class', classe);
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },
    actions: (children) => {
        const actions = document.createElement('div');
        actions.classList.add('actions')
        for (const child of children) {
            actions.appendChild(child);
        }
        return actions;
    },
    field: ({ label, input }) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        const labelElement = document.createElement('label');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label + ':';
        field.appendChild(input);
        return field;
    },
    input: ({ type = 'text', name, text = '', onKeyPress = () => { } }) => {
        const input = document.createElement('input');
        input.type = type,
        input.value = text,
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        // input.setAttribute('value', text)
        input.addEventListener('keypress', onKeyPress);
        return input;
    },
    button: ({ text, type = 'default', onClick = () => { } }) => {
        const button = document.createElement('button');
        button.classList.add(type);
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },
    listarDiv: (children) => {
        const div = document.createElement('div');
        div.classList.add('containerCards')
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },
    link: ({ texto, onClick = () => { } }) => {
        const link = document.createElement('a');
        link.textContent = texto;
        link.addEventListener('click', onClick);
        return link;
    },
    listarElemento: ({ titulo, autor, descricao, tiragem, uid }) => {
        const divListar = document.createElement('div');
        divListar.classList.add('cardLista')

        const divTitle = document.createElement('div');
        divTitle.classList.add('links')

        const span = document.createElement('span');
        const hTitulo = document.createElement('h3');
        const pAutor = document.createElement('p');
        const pTiragem = document.createElement('p');
        const pDescricao = document.createElement('p');

        const linkDelete = Shared.link({
            texto: 'Apagar',
            onClick: () => { Shared.deleteLivro(uid) }
        })
        const linkEdit = Shared.link({
            texto: 'Editar',
            onClick: () => { Page.edit(titulo, autor, descricao, tiragem, uid) }
        })

        span.appendChild(hTitulo);
        span.appendChild(pAutor);
        span.appendChild(pTiragem);
        span.appendChild(pDescricao);

        hTitulo.textContent = "Título: " + titulo;
        pAutor.textContent = "Endereço: " + autor;
        pTiragem.textContent = "Tiragem: " + tiragem;
        pDescricao.textContent = "Descrição: " + descricao;

        divListar.appendChild(span);
        divTitle.appendChild(linkDelete);
        divTitle.appendChild(linkEdit);

        divListar.appendChild(divTitle);
        divListar.appendChild(span);
        return divListar;
    },
    deleteLivro: (uidLivro) => {
        const uid_aluno = "c271cbb9-fc13-486e-a2df-80fe72ea72ed";
        fetch('http://livros.letscode.dev.netuno.org:25390/services/livro', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                aluno: {
                    uid: uid_aluno,
                },
                uid: uidLivro
                }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    alert('Apagado com sucesso')
                    Page.list();
                });
            } else {
                response.json().then((data) => {
                    alert('Erro')
                });
            }
        }).catch((error) => {
            console.log('Erro geral:', error);
        })
    },
    criaCard: (data) => {
        const array = [];
        for (i in data) {
            const titulo = JSON.stringify(data[i], ['titulo']).replace(`{"titulo":"`, "").replace(`"}`, "");
            const autor = JSON.stringify(data[i], ['autor']).replace(`{"autor":"`, "").replace(`"}`, "")
            const tiragem = data[i].tiragem
            const descricao = JSON.stringify(data[i], ['descricao']).replace(`{"descricao":"`, "").replace(`"}`, "")
            const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

            const element = Shared.listarElemento({
                titulo: titulo,
                autor: autor,
                tiragem: tiragem,
                descricao: descricao,
                uid: uid
            })
            array.push(element)
        }
        return array
    },
}

window.Header = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const logo = document.createElement('img');

    const cadastrar = Shared.link({
        texto: 'Cadastrar',
        onClick: () => { Page.register(); }
    })
    const listar = Shared.link({
        texto: 'Listar',
        onClick: () => { Page.list(); }
    })
    nav.appendChild(logo);
    nav.appendChild(cadastrar)
    nav.appendChild(listar);
    header.appendChild(nav);
    document.body.appendChild(header);
}