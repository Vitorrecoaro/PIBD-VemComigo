CREATE OR REPLACE FUNCTION LoginFunction(
    p_Email VARCHAR(255),
    p_Senha VARCHAR(255)
)
RETURNS TABLE (
    IDUsuario VARCHAR(50),
    DataNascimento DATE,
    Nome VARCHAR(50),
    Foto BYTEA,
    Genero VARCHAR(30),
    Nacionalidade BOOLEAN
) 
LANGUAGE plpgsql
AS $$
BEGIN
    -- Verifica se o email e senha são válidos e retorna os dados do usuário, exceto a senha e o email
    RETURN QUERY
    SELECT 
        u.IDUsuario,
        u.DataNascimento,
        u.Nome,
        u.Foto,
        u.Genero,
        u.Nacionalidade
    FROM 
        Usuario u
    WHERE 
        u.Email = p_Email 
        AND u.Senha = p_Senha;

    -- Caso nenhum usuário seja encontrado, gera uma exceção
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Email ou senha incorretos.';
    END IF;
END;
$$;

-- Usuários exemplos
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Senha, Nacionalidade)
VALUES
('1', '1990-01-01', 'Alice', '\x89504e470d0a1a0a0000000d49484452', 'Feminino', 'alice@example.com', 'password123', TRUE),
('2', '1985-05-20', 'Bob', '\x89504e470d0a1a0a0000000d49484452', 'Masculino', 'bob@example.com', 'mypassword', TRUE),
('3', '1995-07-15', 'Carol', '\x89504e470d0a1a0a0000000d49484452', 'Feminino', 'carol@example.com', 'carolpass', FALSE);


-- Testando credenciais corretas
SELECT * FROM LoginFunction('alice@example.com', 'password123');

-- Testando credenciais incorretas
SELECT * FROM LoginFunction('alice@example.com', 'wrongpassword');