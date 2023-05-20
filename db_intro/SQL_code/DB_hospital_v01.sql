DROP TABLE IF EXISTS tb_medico CASCADE ;
CREATE TABLE tb_medico (
	crm INTEGER PRIMARY KEY,
	nome VARCHAR(200) NOT NULL
) ; 

DROP TABLE IF EXISTS tb_paciente CASCADE ;
CREATE TABLE tb_paciente (
	cpf INTEGER PRIMARY KEY,
	nome VARCHAR(200) NOT NULL,
	idade INTEGER NOT NULL
) ; 

DROP TABLE IF EXISTS tb_consulta CASCADE ;
CREATE TABLE tb_consulta (
	crm INTEGER NOT NULL,
	cpf INTEGER NOT NULL,
	data_hora TIMESTAMP NOT NULL,
	FOREIGN KEY (crm) REFERENCES tb_medico (crm) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (cpf) REFERENCES tb_paciente (cpf) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY (crm, cpf, data_hora)
) ; 


INSERT INTO tb_medico (crm, nome) VALUES (12345, 'José');
INSERT INTO tb_paciente (cpf, nome, idade) VALUES (998877, 'Maria', 22);
INSERT INTO tb_paciente (cpf, nome, idade) VALUES (11111111, 'Antônio', 30);
INSERT INTO tb_consulta (crm, cpf, data_hora) VALUES (12345, 998877,
'2021-10-12 13:53:00');
INSERT INTO tb_consulta (crm, cpf, data_hora) VALUES (12345, 998877,
'2021-10-13 18:00:00');
INSERT INTO tb_consulta (crm, cpf, data_hora) VALUES (12345, 11111111,
'2021-10-17 22:00:00');

SELECT * FROM tb_medico;
SELECT * FROM tb_paciente;
SELECT * FROM tb_consulta;

SELECT * FROM tb_medico m
INNER JOIN tb_consulta c 	
ON m.crm = c.crm ;

SELECT 
	m.crm, m.nome AS "nome_medico", c.data_hora, p.nome AS "nome_paciente"
FROM 
	tb_medico m 
INNER JOIN tb_consulta c
	ON m.crm = c.crm
INNER JOIN tb_paciente p
	ON c.cpf = p.cpf;


SELECT p.nome AS "nome_paciente", COUNT(*) AS "total_consultas"
FROM tb_consulta c
INNER JOIN tb_paciente p
	ON c.cpf = p.cpf
GROUP BY p.nome;