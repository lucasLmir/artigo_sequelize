import ClienteRepository from '../models/clientesModel.js';

function findAll(req, res) {
    ClienteRepository.findAll().then((result) => res.json(result));
}

function findClient(req, res) {
    ClienteRepository.findByPk(req.params.id)
        .then((result) => res.json(result))
}

function addClient(req, res) {
    ClienteRepository.create({
        nome: req.body.nome,
        email: req.body.email
    }).then((result) => res.json(result))
};

async function updateClient(req, res) {
    await ClienteRepository.update({
        nome: req.body.nome,
        email: req.body.email
    },
        {
            where: {
                id: req.params.id
            }
        });

    ClienteRepository.findByPk(req.params.id)
        .then((result) => res.json(result))
};

async function deleteClient(req, res) {
    await ClienteRepository.destroy({
        where: {
            id: req.params.id
        }
    });

    ClienteRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addClient, findClient, updateClient, deleteClient }
