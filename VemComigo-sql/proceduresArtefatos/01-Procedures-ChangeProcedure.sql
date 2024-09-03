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
  p_user_id VARCHAR(50),
  p_new_role VARCHAR(10)
)
LANGUAGE plpgsql
AS $$
BEGIN
  IF p_new_role = 'Caronista' THEN
    -- Remover o usuário da tabela Caroneiro, se existir
    DELETE FROM Caroneiro WHERE IDUsuario = p_user_id;

    -- Inserir o usuário na tabela Caronista
    INSERT INTO Caronista (IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista)
    SELECT IDUsuario, CNH, ValidadeCNH, QtdViagens, MediaNotaCaronista
    FROM Caronista WHERE IDUsuario = p_user_id
    ON CONFLICT (IDUsuario) DO NOTHING;

  ELSIF p_new_role = 'Caroneiro' THEN
    -- Remover o usuário da tabela Caronista, se existir
    DELETE FROM Caronista WHERE IDUsuario = p_user_id;

    -- Inserir o usuário na tabela Caroneiro
    INSERT INTO Caroneiro (IDUsuario, QtdViagens, MediaNotaCaroneiro)
    SELECT IDUsuario, QtdViagens, MediaNotaCaroneiro
    FROM Caroneiro WHERE IDUsuario = p_user_id
    ON CONFLICT (IDUsuario) DO NOTHING;

  ELSE
    -- Levantar exceção se o papel for inválido
    RAISE EXCEPTION 'Papel invalido. Papel deve ser ''Caronista'' ou ''Caroneiro''.';
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

