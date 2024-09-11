CREATE OR REPLACE FUNCTION assert_has_multa_or_sinistro(renavam VARCHAR(50)) 
RETURNS BOOLEAN AS $$
DECLARE
    result BOOLEAN;
BEGIN
    result := (RANDOM() >= 0.5);
    
    RETURN result;
END;
$$ LANGUAGE plpgsql;


