CREATE OR REPLACE PROCEDURE NewRideProcedure(
    p_idusuario VARCHAR(50),
    p_datanascimento DATE,
    p_nome VARCHAR(50),
    p_foto BYTEA,
    p_genero VARCHAR(30),
    p_email VARCHAR(255),
    p_nacionalidade BOOLEAN,CREATE OR REPLACE PROCEDURE cadastrar_carona(
    p_idcarona VARCHAR(50),
    p_datacarona DATE,
    p_horainicio TIME,
    p_horafim TIME,
    p_pontoinicial_latitude NUMERIC(9, 6),
    p_pontoinicial_longitude NUMERIC(9, 6),
    p_pontofinal_latitude NUMERIC(9, 6),
    p_pontofinal_longitude NUMERIC(9, 6),
    p_duracaoestimada TIME,
    p_vagastotais INTEGER,
    p_precototal INTEGER,
    p_pets BOOLEAN,
    p_fumantes BOOLEAN,
    p_arcondicionado BOOLEAN,
    p_idusuario VARCHAR(50),
    p_renavam VARCHAR(50)
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserir dados na tabela Carona
    INSERT INTO Carona (IDCarona, DataCarona, HoraInicio, HoraFim, PontoInicialLatitude, PontoInicialLongitude, PontoFinalLatitude, PontoFinalLongitude, DuracaoEstimada, VagasTotais, PrecoTotal, Pets, Fumantes, ArCondicionado, IDUsuario, RENAVAM)
    VALUES (p_idcarona, p_datacarona, p_horainicio, p_horafim, p_pontoinicial_latitude, p_pontoinicial_longitude, p_pontofinal_latitude, p_pontofinal_longitude, p_duracaoestimada, p_vagastotais, p_precototal, p_pets, p_fumantes, p_arcondicionado, p_idusuario, p_renavam);
    
    -- Mensagem de sucesso
    RAISE NOTICE 'Carona cadastrada com sucesso: IDCarona = %', p_idcarona;
END;
$$;