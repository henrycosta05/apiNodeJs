import Aluno from '../../models/aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'luiz',
      sobrenome: 'Otavio',
      email: 'luiz.otavio@example.com',
      idade: 112,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
