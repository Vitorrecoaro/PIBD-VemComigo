CREATE OR REPLACE PROCEDURE EstProcedure(
    p_idusuario VARCHAR(50),
    p_datanascimento DATE,
    p_nome VARCHAR(50),
    p_foto BYTEA,
    p_genero VARCHAR(30),
    p_email VARCHAR(255),
    p_nacionalidade BOOLEAN,
    p_idestrangeiro VARCHAR(50),
    p_codigo VARCHAR(50),
    p_validade DATE
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserir dados na tabela Usuario
    INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
    VALUES (p_idusuario, p_datanascimento, p_nome, p_foto, p_genero, p_email, p_nacionalidade);

    -- Inserir dados na tabela Estrangeiro
    INSERT INTO Estrangeiro (IDEstrangeiro, IDUsuario, Codigo, Validade)
    VALUES (p_idestrangeiro, p_idusuario, p_codigo, p_validade);
    
    -- Mensagem de sucesso
    RAISE NOTICE 'Usuário estrangeiro cadastrado com sucesso: %', p_nome;
END;
$$;
