CREATE TABLE MENU_MST
(
    menu_id      varchar(255),
    menu_name    varchar(255),
    menu_lvl     int,
    del_flag     char(1),
    upd_date     date,
    reg_date     date
);

CREATE TABLE MENU_SUB_MST
(
    menu_id          varchar(255),
    menu_sub_id      int,
    menu_sub_name    varchar(255),
    menu_sub_lvl     int,
    del_flag         char(1),
    upd_date         date,
    reg_date         date
);

INSERT INTO MENU_MST (menu_id,menu_name,menu_lvl,del_flag,upd_date,reg_date) 
VALUES ('010001','언어',10000,'0',now(),now());

INSERT 
INTO check.MENU_SUB_MST( 
  menu_id
  , menu_sub_id
  , menu_sub_name
  , menu_sub_lvl
  , del_flag
  , upd_date
  , reg_date
) 
VALUES ('010001', 1, '자바', 10000, '0', now(), now()); 

