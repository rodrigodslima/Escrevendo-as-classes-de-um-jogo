
class Heroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    
    atacar() {
        
        switch (this.tipo) {
            case 'Mago':
                return 'magia';
                break;
            case 'Guerreiro':
                return 'espada';
                break;
            case 'Monge':
                return 'artes marciais';
                break;
            case 'Ninja':
                return 'shuriken';
                break;
            default:
                return  'poder estranho e desconhecido';
                break;
        }
    }
}

const Mago = new Heroi("josef", "27", "Mago");
const Ninja = new Heroi("TinTim", "36", "Ninja");
const Monge = new Heroi("lancelot", "24", "Monge");
const Guerreiro = new Heroi("Rodrigo", "40", "Guerreiro");

console.log(`O ${Guerreiro.tipo} ${Guerreiro.nome} atacou usando ${Guerreiro.atacar()}`);