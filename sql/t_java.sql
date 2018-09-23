
CREATE TABLE t_java
(
java_id     MEDIUMINT NOT NULL AUTO_INCREMENT,
java_body          varchar(255),
java_a_reply       varchar(255),
java_a_reply_lvl   int,
java_reply          varchar(255),
java_reply_lvl      int,
upd_date           date,
upd_user          varchar(255),
reg_date            date,
reg_user            varchar(255),
PRIMARY KEY (java_id)
);
