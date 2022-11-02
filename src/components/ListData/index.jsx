import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component';
import axios from "axios";
import {Export, Pesquisar} from "./styles";
import {
    FaPencilAlt,
    FaTrashAlt
}from "react-icons/fa";

const ListData = () =>{
    const [clientes, setClientes] = useState([]);
    const [search, setSearch] = useState('');
    const [filtroClientes, setFiltroClientes] = useState([]);



    const getClientes = async () =>{
        try {
            const response = await axios.get('http://localhost:8080/api/clientes')
            setClientes(response.data);
            setFiltroClientes(response.data);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getClientes();
    }, [])

    useEffect(() => {
        const result = clientes.filter(clientes => {
            return clientes.nome.toLowerCase().match(search.toLowerCase());
        });
        setFiltroClientes(result);
    }, [search])

    const columns = [
        {
            name: 'semana',
            selector: row => row.semana
        },
        {
            name: 'nome',
            selector: row => row.nome,
            sortable: true
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
            name: 'Editar',
            cell: (row) =>(
                <FaPencilAlt size={20} color={"#3e8df4"} onClick={() => alert(row.id)}>Editar</FaPencilAlt>
            )
        },
        {
            name: 'Deletar',
            cell: (row) =>(
                <FaTrashAlt size={20} color={"#f4796b"} onClick={() => alert(row.id)}>Deletar</FaTrashAlt>
            )
        },
    ]

    return (
        <DataTable
            title='Lista de clientes'
            columns={columns}
            data={filtroClientes}
            pagination={true}
            fixedHeader
            striped
            highlightOnHover
            pointerOnHover
            actions={<Export>Export</Export>}
            subHeader
            subHeaderComponent={
                <>
                <Pesquisar
                    type="text"
                    placeholder='Pesquisar'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/*<button>Teste</button>*/}
                </>
            }
        />
    );
}

export default ListData;
