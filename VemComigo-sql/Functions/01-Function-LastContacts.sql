
-- ARTEFATO: lastContactsFunction usada para mostrar os usuarios em que um determinado usuario ja trocou mensagens
-- (Obs: Executar os exemplos do 01-Procedure-SendMessage antes para exemplificar o correto funcionamento do lastContactsFunction)

-- Function
CREATE OR REPLACE FUNCTION lastContactsFunction(usuario_id VARCHAR)
RETURNS TABLE(
    IDUsuario VARCHAR,
    NomeUsuario VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT DISTINCT 
        CASE 
            WHEN lv.IDRemetente = usuario_id THEN lv.IDDestinatario
            ELSE lv.IDRemetente
        END AS IDUsuario,
        CASE 
            WHEN lv.IDRemetente = usuario_id THEN lv.NomeDestinatario
            ELSE lv.NomeRemetente
        END AS NomeUsuario
    FROM 
        AllMessagesView lv
    WHERE 
        lv.IDRemetente = usuario_id OR lv.IDDestinatario = usuario_id;
END;
$$ LANGUAGE plpgsql;

-- Verificando os usuarios que o usuario selecionado ja trocou mensagens
SELECT * FROM lastContactsFunction('001'); -- Com o exemplo, esse retorna o Gerson, Jake e a Rose
SELECT * FROM lastContactsFunction('002'); -- Com o exemplo, esse retorna o Rafael e a Rose 