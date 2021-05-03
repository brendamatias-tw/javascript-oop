import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Ricardo", 11122233309, "456");
const diretor = new Diretor("Rodrigo", 10000, 123456789100);
const gerente = new Gerente("João", 5000, 1234567891001);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("1234567");

const clienteLogado = SistemaAutenticacao.login(cliente, "456");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "1234567");

console.log(clienteLogado, diretorLogado, gerenteLogado);
