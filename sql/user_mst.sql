CREATE DATABASE my_db;

USE my_db;

CREATE TABLE USER_MST
(
    user_id      varchar(255),
    user_name    varchar(255),
    user_pass    varchar(255),
    user_level   int,
    del_flag     char(1),
    upd_date     date,
    reg_date     date
);

INSERT INTO USER_MST (user_id,user_name,user_pass,user_level,del_flag,upd_date,reg_date) 
VALUES ('Tester1','Tester2','',10000);

SELECT * FROM USER_MST;

