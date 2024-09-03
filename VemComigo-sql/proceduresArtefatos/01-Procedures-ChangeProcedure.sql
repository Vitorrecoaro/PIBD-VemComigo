-- Inserindo usuários na tabela Usuario como exemplo
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
VALUES 
('user1', '1990-01-01', 'João Silva', 'foto1', 'Masculino', 'joao.silva@example.com', true),
('user2', '1985-05-15', 'Maria Souza', 'foto2', 'Feminino', 'maria.souza@example.com', true),
('user3', '1992-07-22', 'Carlos Pereira', 'foto3', 'Masculino', 'carlos.pereira@example.com', true),
('user4', '1998-12-30', 'Ana Oliveira', 'foto4', 'Feminino', 'ana.oliveira@example.com', true),
('user5', '2000-09-09', 'Pedro Costa', 'foto5', 'Masculino', 'pedro.costa@example.com', false);

-- Inserindo usuários na tabela Caronista
INSERT INTO Caronista (IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista)
VALUES 
('user1', '12345678900', '2030-01-01', 10, 5),
('user3', '23456789012', '2025-06-15', 20, 4);

-- Inserindo usuários na tabela Caroneiro
INSERT INTO Caroneiro (IDUsuario, QtdViagens, MediaNotaCaroneiro)
VALUES 
('user2', 15, 4),
('user4', 5, 3),
('user5', 8, 4);


-- Criação da procedure para trocar o usuario entre caronista e caroneiro
CREATE OR REPLACE PROCEDURE ChangeRole(
    IN IDUsuarioInput VARCHAR(50),
    IN NovoPapel VARCHAR(10) -- 'Caronista' ou 'Caroneiro'
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Verifica se o novo papel é 'Caronista'
    IF NovoPapel = 'Caronista' THEN
        -- Verifica se o usuário já é um caronista
        IF EXISTS (SELECT 1 FROM Caronista WHERE IDUsuario = IDUsuarioInput) THEN
            RAISE NOTICE 'Usuário já é Caronista';
        ELSE
            -- Remove o usuário da tabela Caroneiro, se existir
            DELETE FROM Caroneiro WHERE IDUsuario = IDUsuarioInput;
            
            -- Insere o usuário na tabela Caronista
            INSERT INTO Caronista (IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista)
            VALUES (IDUsuarioInput, '00000000000', '2099-12-31', 0, NULL); -- Exemplo de CNH e validade, ajuste conforme necessário
            
            RAISE NOTICE 'Usuário alterado para Caronista';
        END IF;

    -- Verifica se o novo papel é 'Caroneiro'
    ELSIF NovoPapel = 'Caroneiro' THEN
        -- Verifica se o usuário já é um caroneiro
        IF EXISTS (SELECT 1 FROM Caroneiro WHERE IDUsuario = IDUsuarioInput) THEN
            RAISE NOTICE 'Usuário já é Caroneiro';
        ELSE
            -- Remove o usuário da tabela Caronista, se existir
            DELETE FROM Caronista WHERE IDUsuario = IDUsuarioInput;
            
            -- Insere o usuário na tabela Caroneiro
            INSERT INTO Caroneiro (IDUsuario, QtdViagens, MediaNotaCaroneiro)
            VALUES (IDUsuarioInput, 0, NULL);
            
            RAISE NOTICE 'Usuário alterado para Caroneiro';
        END IF;

    ELSE
        -- Se o novo papel não for nem 'Caronista' nem 'Caroneiro', lança um erro
        RAISE EXCEPTION 'Papel inválido. Use "Caronista" ou "Caroneiro".';
    END IF;
END;
$$;

-- Chamando a procedure

-- Mudando João Silva de Caronista para Caroneiro
CALL ChangeRole('user1', 'Caroneiro');

-- Mudando Maria Souza de Caroneiro para Caronista
CALL ChangeRole('user2', 'Caronista');

-- Mudando Carlos Pereira de Caronista para Caroneiro
CALL ChangeRole('user3', 'Caroneiro');

-- Mudando Ana Oliveira de Caroneiro para Caronista
CALL ChangeRole('user4', 'Caronista');

-- Mudando Pedro Costa de Caroneiro para Caronista
CALL ChangeRole('user5', 'Caronista');

