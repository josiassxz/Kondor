import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component';
import axios from "axios";

const ListData = () =>{
    const [clientes, setClientes] = useState([]);

    const getClientes = async () =>{
        try {
            const response = await axios.get('http://localhost:8080/api/clientes')
            setClientes(response.data);
        } catch (error){
            console.log(error);
        }
    }

    const columns = [
        {
            name: 'semana',
            selector: row => row.semana
        },
        {
            name: 'nome',
            selector: row => row.nome
        },
        {
            name: 'captania',
            selector: row => row.captania
        },
        {
            name: 'cidade',
            selector: row => row.cidade
        },
        {
            name: 'tipoProcesso',
            selector: row => row.tipoProcesso
        },
        {
            name: 'numEmbarc',
            selector: row => row.numEmbarc
        },
        {
            name: 'origem',
            selector: row => row.origem
        },
        {
            name: 'formPgto',
            selector: row => row.formPgto
        },
        {
            name: 'banco',
            selector: row => row.banco
        },
        {
            name: 'dataReceb',
            selector: row => row.dataReceb
        },
        {
            name: 'caixaRecebido',
            selector: row => row.caixaRecebido
        },
        {
            name: 'valorServico',
            selector: row => row.valorServico
        },
        {
            name: 'recebibo',
            selector: row => row.recebibo
        },
        {
            name: 'areceber',
            selector: row => row.areceber
        },
        {
            name: 'situacaoPagamento',
            selector: row => row.situacaoPagamento
        },
        {
            name: 'gru',
            selector: row => row.gru
        },
        {
            name: 'valorLiquido',
            selector: row => row.valorLiquido
        },
        {
            name: 'dataCadastro',
            selector: row => row.dataCadastro
        },
    ]

    useEffect(() => {
        getClientes();
    }, [])

    return (
        <DataTable title='Lista de clientes' columns={columns} data={clientes} pagination/>
    );
}

export default ListData;
