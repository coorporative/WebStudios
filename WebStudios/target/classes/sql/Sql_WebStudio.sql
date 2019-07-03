-- @C:\Users\Pedro\Documents\Pedro\20171212\WebStudio\Sql\Sql_WebStudio.sql;
-- create tablespace
--CREATE TABLESPACE ts_webstudio DATAFILE
--    'C:\oraclexe\app\oracle\midata\webstudio01.dbf' SIZE 100M;

--SELECT TABLESPACE_NAME, STATUS, CONTENTS FROM USER_TABLESPACES;
--SELECT TABLESPACE_NAME, STATUS, CONTENTS FROM DBA_TABLESPACES;
-- create  user  and account unlock
--CREATE USER WEBSTUDIO IDENTIFIED BY 123456 ACCOUNT UNLOCK;

-- Grant SESSION privilege
--GRANT CREATE SESSION TO WEBSTUDIO;


-- How To Assing a Tablespace to a Users
--ALTER USER WEBSTUDIO DEFAULT TABLESPACE  ts_webstudio;

--Create a user with all privileges in Oracle
-- grant all privileges to WEBSTUDIO;

--- Create table   preguntas
--CREATE TABLE PREGUNTAS
--(
--   PreguntaId number ,
--   pregunta varchar(250),
--   tema varchar(50),
--   CONSTRAINT PK_Pregunta PRIMARY KEY (PreguntaId)
--);

CREATE TABLE respuestas (
   RespuestaId number,
   respuesta varchar(250),
   correcta number(1),
   PreguntaId number ,
   CONSTRAINT FK_PreguntaRespuesta FOREIGN KEY (PreguntaId) REFERENCES Preguntas (PreguntaId) 
);

CREATE TABLE 	users		 (
   username VARCHAR2(4),
   password VARCHAR2(3)
);

INSERT INTO users values ('pepe','123');

drop table users;




GRANT
  SELECT,
  INSERT,
  UPDATE,
  DELETE
ON
  WEBSTUDIO.users
TO
  WEBSTUDIO;




