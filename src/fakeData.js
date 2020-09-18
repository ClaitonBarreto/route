export default {
    data: {
        origem: {
            dataCep: {
                cep: '25265080',
                logradouro: 'Rua Capanema',
                bairro: 'Parada Morabi',
                localidade: 'Duque de Caxias'
            }
        },
        destino: {
            dataCep: {
                cep: '25265080',
                logradouro: 'Rua Nossa Senhora da Guia',
                bairro: 'Parada Morabi',
                localidade: 'São Francisco dos Prazeres'
            }
        },
        route: {
            // data.response.route[0].summary.distance
            response: {
                route: [{
                    summary: {
                        distance: '9000',
                        baseTime: '25'
                    }
                }]
            }

        }
    },

    frete: '1,5'
}