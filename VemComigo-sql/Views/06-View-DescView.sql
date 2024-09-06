-- View para retornar os dados na página de perfil do usuário

CREATE VIEW UsuarioDetalhes AS -- Cria uma view chamada UsuarioDetalhes
SELECT
    U.IDUsuario,   
    U.Nome,        
    U.Email,      
    U.Foto,        
    T.DDI,        
    T.DDD,         
    T.Prefixo,    
    T.Numero      
FROM
    Usuario U      -- A tabela principal da qual os dados serão selecionados
LEFT JOIN
    Telefone T ON U.IDUsuario = T.IDUsuario; -- Faz um LEFT JOIN com a tabela Telefone para associar os números de telefone aos usuários
