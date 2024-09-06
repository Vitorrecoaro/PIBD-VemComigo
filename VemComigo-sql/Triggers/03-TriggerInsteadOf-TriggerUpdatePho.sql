CREATE OR REPLACE FUNCTION update_foto_usuario()
RETURNS TRIGGER
AS $$
BEGIN
    -- Atualizar a coluna Foto da tabela Usuario
    UPDATE Usuario
    SET Foto = NEW.Foto
    WHERE IDUsuario = NEW.IDUsuario;

    -- Retorna null porque essa é uma INSTEAD OF TRIGGER
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TriggerUpdatePho
INSTEAD OF UPDATE ON UsuarioView
FOR EACH ROW
EXECUTE FUNCTION update_foto_usuario();