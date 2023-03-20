class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('#form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const validField = this.isValidFild();
    }

    isValidFild() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error')){
            errorText.remove();
        }

        for (let field of this.formulario.querySelectorAll('.validate')){
            const label = field.previousElementSibling.innerText;
            if(!field.value){
                this.throwError(field, `O campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            /* if(campo.classList.contains('cpf')){
                if(!this.validaCPF(field)) valid = false;
            } */
        }
    }

    /* validaCPF(field){
        const cpf = new this.validaCPF(cpf.value);

        if(!cpf.valid()){
            this.throwError(field, 'CPF inválido.');
            return false;
        }
    } */

    throwError(field, message) {
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = message;
        field.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();