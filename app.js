class Amigo {

    constructor() {
        this.id = 1;
        this.arrayNome = [];
    }

    lerAmigos() {
        let amigo = {}

        amigo.id = this.id;
        amigo.nomeAmigo = document.getElementById("amigo").value;

        return amigo;

    }

    adicionarAmigo() {
        let amigo = this.lerAmigos();
        if(amigo.nomeAmigo == '') {
            alert("Por favor inserir um nome.")
        } else {
            this.arrayNome.push(amigo);
            this.id++;
            this.listarAmigos();
        }
    }

    listarAmigos() {
        let tbody = document.getElementById("tbody");
        let tnome = document.getElementById("amigo").value='';
        tbody.innerText = '';

        for(let i = 0; i < this.arrayNome.length; i++) {
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayNome[i].id;
            td_nome.innerText = this.arrayNome[i].nomeAmigo;

            let imgDel = document.createElement('img');
            imgDel.src = 'assets/delete.svg';
            imgDel.setAttribute("onclick", "amigo.deletarAmigo("+ this.arrayNome[i].id +")");

            td_del.appendChild(imgDel);
        }
    }

    sortearAmigo() {
        let indiceSorteado = Math.floor(Math.random() * this.arrayNome.length);
        let nomeSorteado = this.arrayNome[indiceSorteado].nomeAmigo;

        let resultadoUl = document.getElementById("resultado");
    
        resultadoUl.innerHTML = '';

        let li = document.createElement('li');
        li.innerText = `O amigo sorteado foi: ${nomeSorteado}`;
        resultadoUl.appendChild(li);

        document.getElementById("table").style.display = 'none';
    }

    deletarAmigo(id) {
        let tbody = document.getElementById("tbody");

        for(let i = 0; i < this.arrayNome.length; i++) {
            if(this.arrayNome[i].id == id) {
                this.arrayNome.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }
}

var amigo = new Amigo();