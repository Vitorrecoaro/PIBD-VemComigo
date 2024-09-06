CREATE OR REPLACE FUNCTION verify_fill_carona()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificar se todos os campos obrigatórios estão preenchidos
    IF NEW.DataCarona IS NULL OR
       NEW.HoraInicio IS NULL OR
       NEW.HoraFim IS NULL OR
       NEW.PontoInicialLatitude IS NULL OR
       NEW.PontoInicialLongitude IS NULL OR
       NEW.PontoFinalLatitude IS NULL OR
       NEW.PontoFinalLongitude IS NULL OR
       NEW.DuracaoEstimada IS NULL OR
       NEW.VagasTotais IS NULL OR
       NEW.PrecoTotal IS NULL OR
       NEW.Pets IS NULL OR
       NEW.Fumantes IS NULL OR
       NEW.ArCondicionado IS NULL OR
       NEW.IDUsuario IS NULL OR
       NEW.RENAVAM IS NULL THEN
        RAISE EXCEPTION 'Todos os campos obrigatórios da carona devem ser preenchidos';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar o trigger que chama a função verify_fill_carona antes de inserir ou atualizar na tabela Carona
CREATE TRIGGER verify_fill_trigger
BEFORE INSERT OR UPDATE ON Carona
FOR EACH ROW
EXECUTE FUNCTION verify_fill_carona();
