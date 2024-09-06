
-- ARTEFATO: lastMessagesFunction usada para mostrar as mensagens trocadas entre 2 usuarios
-- (Obs: Executar os exemplos do 01-Procedure-SendMessage antes para exemplificar o correto funcionamento do lastMessagesFunction)

-- Function
CREATE OR REPLACE FUNCTION lastMessagesFunction(
    usuario_id1 VARCHAR,
    usuario_id2 VARCHAR
)
RETURNS TABLE(
    IDRemetente VARCHAR,
    NomeRemetente VARCHAR,
    IDDestinatario VARCHAR,
    NomeDestinatario VARCHAR,
    TimeStampEnvio VARCHAR,
    TimeStampUltimaEdicao TIMESTAMP,
    TextoMensagem VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        lv.IDRemetente,
        lv.NomeRemetente,
        lv.IDDestinatario,
        lv.NomeDestinatario,
        lv.TimeStampEnvio,
        lv.TimeStampUltimaEdicao,
        lv.TextoMensagem
    FROM 
        AllMessagesView lv
    WHERE 
        (lv.IDRemetente = usuario_id1 AND lv.IDDestinatario = usuario_id2) 
        OR 
        (lv.IDRemetente = usuario_id2 AND lv.IDDestinatario = usuario_id1)
    ORDER BY 
        lv.TimeStampEnvio DESC;
END;
$$ LANGUAGE plpgsql;

-- Verificando os usuarios que o usuario selecionado ja trocou mensagens
SELECT * FROM lastMessagesFunction('001', '002');
-- Com o exemplo, esse retorna "Ola, como vai?" do Rafael para o Gerson e "vou bem, e voce??" do Gerson para o Rafael