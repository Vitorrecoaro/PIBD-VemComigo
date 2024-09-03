-- View para retornar os dados do veiculo exclusiva para motorista
CREATE VIEW VeiculoView AS
SELECT
    V.RENAVAM,                
    V.Modelo,                 
    V.Tipo,                    
    V.Cor,                     
    V.TamanhoPortaMalas,       
    V.Placa,                   
    V.Ano,                    
    V.Proprietario,            
    V.RelacaoComProprietario,  
    U.IDUsuario,               
    U.Nome AS NomeMotorista   
FROM
    Veiculo V
INNER JOIN
    CaronistaVeiculo CV ON V.RENAVAM = CV.RENAVAM -- Associa veículos aos motoristas através da tabela CaronistaVeiculo
INNER JOIN
    Usuario U ON CV.IDUsuario = U.IDUsuario       -- Associa o motorista ao usuário para pegar os detalhes do motorista
