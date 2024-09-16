CREATE OR REPLACE PROCEDURE insert_usuario_brasileiro(
    p_idusuario VARCHAR(50),
    p_datanascimento DATE,
    p_nome VARCHAR(50),
    p_foto BYTEA,
    p_genero VARCHAR(30),
    p_email VARCHAR(255),
    p_telefone_ddi VARCHAR(5),
    p_telefone_ddd VARCHAR(5),
    p_telefone_prefixo VARCHAR(5),
    p_telefone_numero VARCHAR(10),
	p_senha VARCHAR(255),
    p_logradouro VARCHAR(255),
    p_numero VARCHAR(10),
    p_bairro VARCHAR(100),
    p_cep VARCHAR(20),
    p_complemento VARCHAR(255),
    p_cpf VARCHAR(14)
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserir dados na tabela Usuario
    INSERT INTO Usuario (idusuario, DataNascimento, Nome, Foto, Genero, Email,Senha, Nacionalidade)
    VALUES (p_idusuario, p_datanascimento, p_nome, p_foto, p_genero, p_email, p_senha, TRUE);

    -- Inserir dados na tabela Telefone
    INSERT INTO Telefone (IDUsuario, DDI, DDD, Prefixo, Numero)
    VALUES (p_idusuario, p_telefone_ddi, p_telefone_ddd, p_telefone_prefixo, p_telefone_numero);

    -- Inserir dados na tabela EnderecoUsuario
    INSERT INTO EnderecoUsuario (IDUsuario, Logradouro, Numero, Bairro, CEP, Complemento)
    VALUES (p_idusuario, p_logradouro, p_numero, p_bairro, p_cep, p_complemento);

    -- Inserir dados na tabela Brasileiro
    INSERT INTO Brasileiro (CPF, IDUsuario)
    VALUES (p_cpf, p_idusuario);

END;
$$;