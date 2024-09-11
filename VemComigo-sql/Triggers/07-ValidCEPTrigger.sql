CREATE OR REPLACE FUNCTION trg_validate_cep_func()
RETURNS TRIGGER AS $$
BEGIN
	-- Verificação do formato de CEP (8 dígitos)
	IF NOT NEW.cep ~ '^[0-9]{8}$' THEN
		RAISE EXCEPTION 'Formato de CEP inválido! Deve conter exatos 8 dígitos.';
	END IF;

	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validate_cep
BEFORE INSERT OR UPDATE ON enderecoUsuario
FOR EACH ROW EXECUTE FUNCTION trg_validate_cep_func();
