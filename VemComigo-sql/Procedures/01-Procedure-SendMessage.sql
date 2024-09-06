-- ARTEFATO: SendMessagesProcedure usado para enviar mensagem entre 2 usuarios

-- Criando usuarios para servirem de exemplo
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
VALUES ('001', '1990-01-01', 'Rafael', E'\\x4279746573', 'Male', 'rafel@mail', TRUE);
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
VALUES ('002', '2000-01-01', 'Gerson', E'\\x4279746573', 'Male', 'gerson@mail', TRUE);
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
VALUES ('003', '1995-01-01', 'Jake', E'\\x4279746573', 'Male', 'jake@mail', False);
INSERT INTO Usuario (IDUsuario, DataNascimento, Nome, Foto, Genero, Email, Nacionalidade)
VALUES ('004', '1985-01-01', 'Rose', E'\\x4279746573', 'Female', 'rose@mail', False);
SELECT * FROM usuario;

-- Procedure
CREATE OR REPLACE PROCEDURE SendMessageProcedure(
    p_id_remetente VARCHAR(50),
    p_id_destinatario VARCHAR(50),
    p_timestamp_envio VARCHAR(24),
    p_timestamp_ultima_edicao TIMESTAMP,
    p_texto_mensagem VARCHAR(255)
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO comunica (idremetente, iddestinatario, timestampenvio, timestampultimaedicao, textomensagem)
    VALUES (p_id_remetente, p_id_destinatario, p_timestamp_envio, p_timestamp_ultima_edicao, p_texto_mensagem);
    
    RAISE NOTICE 'Inserção bem-sucedida';
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Erro na inserção: %', SQLERRM;
END;
$$;

-- Enviando varias messagens de exemplo
CALL SendMessageProcedure(
    '001'::VARCHAR(50), 
    '002'::VARCHAR(50), 
    '2023-05-20 14:30:00'::VARCHAR(24), 
    CURRENT_TIMESTAMP::TIMESTAMP,
    'Olá, como vai?'::VARCHAR(255)
);
COMMIT;

CALL SendMessageProcedure(
    '002'::VARCHAR(50), 
    '001'::VARCHAR(50), 
    '2023-05-20 14:30:00'::VARCHAR(24), 
    CURRENT_TIMESTAMP::TIMESTAMP,
    'Vou bem! E voce??'::VARCHAR(255)
);
COMMIT;

CALL SendMessageProcedure(
    '001'::VARCHAR(50), 
    '003'::VARCHAR(50), 
    '2023-05-20 14:30:00'::VARCHAR(24), 
    CURRENT_TIMESTAMP::TIMESTAMP,
    'Bom dia, vc vem comigo amanha?'::VARCHAR(255)
);
COMMIT;

CALL SendMessageProcedure(
    '004'::VARCHAR(50), 
    '001'::VARCHAR(50), 
    '2023-05-20 14:30:00'::VARCHAR(24), 
    CURRENT_TIMESTAMP::TIMESTAMP,
    'Tudo certo na carona de sexta?'::VARCHAR(255)
);
COMMIT;

CALL SendMessageProcedure(
    '002'::VARCHAR(50), 
    '004'::VARCHAR(50), 
    '2023-05-20 14:30:00'::VARCHAR(24), 
    CURRENT_TIMESTAMP::TIMESTAMP,
    'Chegarei atrasado, espere 5 minutos pf!'::VARCHAR(255)
);
COMMIT;

-- Verificando as mensagens enviadas
SELECT * FROM comunica