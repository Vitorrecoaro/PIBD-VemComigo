CREATE OR REPLACE PROCEDURE RideUserProcedure(
    p_idusuario VARCHAR(50),
    p_idcarona VARCHAR(50),
    p_tipo_participacao VARCHAR(20) -- 'Caronista' ou 'Caroneiro'
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Verifica se a carona existe
    IF NOT EXISTS (
        SELECT 1 FROM Carona WHERE IDCarona = p_idcarona
    ) THEN
        RAISE EXCEPTION 'Carona com ID % não encontrada.', p_idcarona;
    END IF;

    -- Verifica se o usuário existe
    IF NOT EXISTS (
        SELECT 1 FROM Usuario WHERE IDUsuario = p_idusuario
    ) THEN
        RAISE EXCEPTION 'Usuário com ID % não encontrado.', p_idusuario;
    END IF;

    -- Verifica o tipo de participação e insere nas tabelas adequadas
    IF p_tipo_participacao = 'Caronista' THEN
        -- Verifica se o usuário já está registrado como Caronista
        IF NOT EXISTS (
            SELECT 1 FROM Caronista WHERE IDUsuario = p_idusuario
        ) THEN
            RAISE EXCEPTION 'Usuário com ID % não é um Caronista registrado.', p_idusuario;
        END IF;

        -- Verifica se o usuário está associado ao veículo na Carona
        IF NOT EXISTS (
            SELECT 1 FROM Carona WHERE IDCarona = p_idcarona AND IDUsuario = p_idusuario
        ) THEN
            RAISE EXCEPTION 'Caronista com ID % não está associado ao veículo para a Carona com ID %.', p_idusuario, p_idcarona;
        END IF;

        -- Atualiza a quantidade de viagens do Caronista
        UPDATE Caronista
        SET QtdViagens = QtdViagens + 1
        WHERE IDUsuario = p_idusuario;

        RAISE NOTICE 'Caronista com ID % registrado na Carona % com sucesso.', p_idusuario, p_idcarona;

    ELSIF p_tipo_participacao = 'Caroneiro' THEN
        -- Verifica se o usuário já está registrado como Caroneiro
        IF NOT EXISTS (
            SELECT 1 FROM Caroneiro WHERE IDUsuario = p_idusuario
        ) THEN
            RAISE EXCEPTION 'Usuário com ID % não é um Caroneiro registrado.', p_idusuario;
        END IF;

        -- Atualiza a quantidade de viagens do Caroneiro
        UPDATE Caroneiro
        SET QtdViagens = QtdViagens + 1
        WHERE IDUsuario = p_idusuario;

        RAISE NOTICE 'Caroneiro com ID % registrado na Carona % com sucesso.', p_idusuario, p_idcarona;

    ELSE
        RAISE EXCEPTION 'Tipo de participação inválido: %. Use "Caronista" ou "Caroneiro".', p_tipo_participacao;
    END IF;
END;
$$;
