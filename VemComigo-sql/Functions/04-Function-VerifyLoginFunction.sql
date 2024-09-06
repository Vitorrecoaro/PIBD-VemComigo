CREATE OR REPLACE FUNCTION VerifyLoginFunction(
    p_Email VARCHAR(255),
    p_Senha VARCHAR(255)
)
RETURNS BOOLEAN
AS
'SELECT EXISTS(
    SELECT 1
    FROM Usuario
    WHERE Email = p_Email AND Senha = p_Senha
)';

-- Usuários exemplos
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Senha, Nacionalidade)
VALUES
('1', '1990-01-01', 'Alice', '\x89504e470d0a1a0a0000000d49484452', 'Feminino', 'alice@example.com', 'password123', TRUE),
('2', '1985-05-20', 'Bob', '\x89504e470d0a1a0a0000000d49484452', 'Masculino', 'bob@example.com', 'mypassword', TRUE),
('3', '1995-07-15', 'Carol', '\x89504e470d0a1a0a0000000d49484452', 'Feminino', 'carol@example.com', 'carolpass', FALSE);


-- Testando credenciais corretas
SELECT VerifyLoginFunction('alice@example.com', 'password123');
SELECT VerifyLoginFunction('bob@example.com', 'mypassword');
SELECT VerifyLoginFunction('carol@example.com', 'carolpass');

-- Testando credenciais incorretas
SELECT VerifyLoginFunction('alice@example.com', 'wrongpassword');
SELECT VerifyLoginFunction('nonexistent@example.com', 'password123');