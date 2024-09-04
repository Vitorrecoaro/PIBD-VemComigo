-- Guilherme dos Santos Wisniewski
CREATE OR REPLACE FUNCTION calculate_age(birthdate DATE) RETURNS INT AS $$
BEGIN
    RETURN DATE_PART('year', AGE(birthdate));
END;
$$ LANGUAGE plpgsql;