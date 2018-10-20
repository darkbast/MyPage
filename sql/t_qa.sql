
CREATE TABLE t_qa
(
qa_id     MEDIUMINT NOT NULL AUTO_INCREMENT,
qa_div   varchar(255),
qa_title  varchar(255),
qa_body          mediumtext,
upd_date           date,
upd_user          varchar(255),
reg_date            date,
reg_user            varchar(255),
PRIMARY KEY (qa_id,qa_div,qa_title)
);
