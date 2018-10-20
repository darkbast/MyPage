CREATE TABLE m_division(
div_id   MEDIUMINT NOT NULL AUTO_INCREMENT,
div1 varchar(255),
div2 varchar(255),
div3 varchar(255),
upd_date           date,
upd_user          varchar(255),
reg_date            date,
reg_user            varchar(255),
PRIMARY KEY (div_id,div1,div2,div3)
);


insert into m_division
(div1,div2,div3,upd_date,upd_user,reg_date,reg_user)
 values('main','qa','',now(),'SYSTEM',now(),'SYSTEM')