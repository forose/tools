import{s as he,h as V,j as G,_ as x,k as O,o as m,a as h,b as C,l as R,f as p,e as i,C as f,w as u,q as L,t as b,D as P,F as U,y as H,J as X,z as be,A as Le,H as Oe,n as ue}from"./app-7HI8a4lx.js";import{c as z,s as Te,e as J}from"./notify-BHQfjYk-.js";import{D as d}from"./DatabaseType-ZbmIKB2x.js";import{S,i as g,a as Se,b as Me}from"./columnHandler-DoZmQBu4.js";import{g as B,i as de,w as v,E as we}from"./wrapper-BRgqG3aR.js";import{i as Ae}from"./viewUtil-BGSxVGqE.js";import{c as q}from"./codemirror-Denn8pVo.js";import{E as Z,a as ee}from"./index-CHOIUUl7.js";import{E as _e}from"./index-uoaXWFBg.js";import{E as oe,a as se}from"./index-BPe1LNWi.js";import{E as te,a as ne}from"./index-5YmKyRxA.js";import{E as ae}from"./index-D010uDlT.js";import{v as K}from"./directive-DdoesKyK.js";import{E as re}from"./index-Cexr__N_.js";import{A as me}from"./arrayUtil-DlGlibQI.js";import{E as $e}from"./index-BZGOUGMZ.js";import"./focus-trap-0JUCTGWq.js";import"./validator-CUeJqo3c.js";import"./index-BRXl8bEV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BnH3xz_z.js";import"./index-4venPVpq.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseIteratee-BTzwo4Hl.js";import"./_initCloneObject-BPdR5qB5.js";import"./isArrayLikeObject-BFgP_34p.js";import"./index-Cf7tx5Fe.js";import"./index-Bo03iq4n.js";import"./castArray-Dlxvef-B.js";import"./_baseClone-B9zh-0Fl.js";class F{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,t){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,t){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,t){return null}showPartitions(e,t){return null}showActualPartitions(e,t){return null}showForeignKeys(e,t){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,t){return""}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}pingDataBase(e,t){return null}dropTriggerTemplate(e){return`DROP TRIGGER ${e}`}}class Ie extends F{showVersion(){return"select version() server_version"}createIndex(e){const t=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${t} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${t}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}processList(){return`
    SELECT query_id AS "Id", user AS "User", client_hostname AS "Host", port AS "Port", current_database AS "db", query AS "Command", os_user AS "State", addSeconds(now(), elapsed) AS "Time", elapsed AS "Info"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,t){const{name:a,type:r,comment:l,nullable:o,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${a} TYPE ${r};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${a} TO [newColumnName]`}updateColumnSql(e){const{columnName:t,columnType:a,newColumnName:r,comment:l,table:o,defaultValue:E,oldRow:c}=e;return console.log(a,c),new S("",`
`).if(a!=c.type,`ALTER TABLE ${o} ALTER COLUMN ${t} TYPE ${a};`).if(E&&E!=c.defaultValue,`ALTER TABLE ${o} MODIFY COLUMN ${t} DEFAULT ${B(E,a)};`).if(l&&l!=c.comment,`ALTER TABLE ${o} MODIFY COLUMN ${t} COMMENT '${l}';`).if(t!=r,`ALTER TABLE ${o} RENAME COLUMN ${t} TO ${r};`).toString()}showUsers(){return"SELECT * FROM system.users"}pingDataBase(e){return"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`ALTER TABLE ${t} MODIFY COMMENT '${l}';`),a&&t!=a&&(o+=`ALTER TABLE ${t} RENAME TO ${a};`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showViewSource(e,t){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showProcedureSource(e,t){return"select number from system.numbers where 1=0"}showFunctionSource(e,t){return"select number from system.numbers where 1=0"}showTriggerSource(e,t){return"select number from system.numbers where 1=0"}showColumns(e,t){return`select name,type, null as maxLength,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${t}' `}showTriggers(e){return"select number from system.numbers where 1=0"}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}triggerTemplate(){return"select number from system.numbers where 1=0"}dropTriggerTemplate(e){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class le{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:t}=this.param;return new S("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=t,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${t}";`).toString()}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} TYPE ${t};`}notNullPart(){const{oldRow:e,isNotNull:t}=this.param;return e.isNotNull==t?"":`${this.afterColumnPrefix} ${t?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:t,columnType:a}=this.param;return e.defaultValue==t?"":`${this.afterColumnPrefix} ${g(t)?"DROP DEFAULT":`SET DEFAULT ${B(t,a)}`};`}commentPart(){return""}}class j extends F{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return null}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const a=t?` AFTER "${t}"`:"";return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type] COMMENT ''${a};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var N;const{name:a,type:r,comment:l,nullable:o,defaultValue:E,extra:c,character_set_name:T,collation_name:A}=t;return new S(`ALTER TABLE ${e}`).append(`
	CHANGE ${a} ${a} ${r}`).if(T,`CHARACTER SET ${T}`).if(A,`COLLATE ${A}`).if(o!="YES","NOT NULL").if((N=c==null?void 0:c.toLowerCase())==null?void 0:N.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(E,`DEFAULT ${E=="CURRENT_TIMESTAMP"?E:`'${E}'`}`).toString()}updateColumnSql(e){return new le(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}pingDataBase(e){return e?null:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`COMMENT ON TABLE "${t}" IS '${l}';`),a&&t!=a&&(o+=`RENAME TABLE "${t}" TO "${a}";`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE ${e}.${t};`}showViewSource(e,t,a){return`SHOW CREATE VIEW database.${t};`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE database.${t};`}showFunctionSource(e,t,a){return`SHOW CREATE FUNCTION database.${t};`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER database.${t};`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE simpleType, DATA_TYPE type, IS_NULLABLE nullable 
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,t){const a=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${a} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}showTables(e,t=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,t=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}showDatabases(){return'SELECT SCHEMA_NAME "Database" FROM information_schema.schemata ORDER BY "Database";'}showSchemas(e){return'SELECT SCHEMA_NAME "schema" FROM information_schema.schemata ORDER BY "schema";'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}triggerTemplate(){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] [INSERT/UPDATE/DELETE]
ON [table]
FOR EACH ROW BEGIN

END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class Ne extends F{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:t,column:a}=e;return`CREATE INDEX ${`${t}_${a}`} ON ${t}(${a})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from ALL_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}'`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return`SELECT sess.process, sess.status, sess.username, sess.schemaname, sql.sql_text
        FROM v$session sess,
             v$sql     sql
       WHERE sql.sql_id(+) = sess.sql_id
         AND sess.type     = 'USER'`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,t){const{name:a,type:r,comment:l,nullable:o,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${a} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${a} TO [newColumnName];
COMMENT ON COLUMN ${e}.${a} IS '${l||""}'`}updateColumnSql(e){const{columnName:t,columnType:a,newColumnName:r,comment:l,defaultValue:o,table:E,isNotNull:c,oldRow:T}=e;return new S("","").if(a!=T.type,`ALTER TABLE "${E}" MODIFY "${t}" ${a};`).if(c!=T.isNotNull,`
ALTER TABLE "${E}" MODIFY "${t}"${c?"NOT NULL":"NULL"};`).if(o!=null&&o!=T.defaultValue,`
ALTER TABLE "${E}" MODIFY "${t}" DEFAULT ${o!=null&&o.match(/(:|nextval)/i)?o:`'${o==null?void 0:o.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=T.comment,`
COMMENT ON COLUMN "${E}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${E}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`COMMENT ON TABLE "${t}" IS '${l}';`),a&&t!=a&&(o+=`ALTER TABLE "${t}" RENAME TO "${a}"`),o}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showTableSource(e,t){return""}showViewSource(e,t,a){return a.isMaterial()?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${t}'`:`SELECT 'CREATE VIEW ' || view_name || ' AS
' || TEXT_VC  "Create View" FROM ALL_VIEWS WHERE OWNER='${e}' AND view_name='${t}'`}showProcedureSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "Create Function"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\``}showColumns(e,t){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "simpleType",
        a.DATA_PRECISION "precision",
        a.DATA_TYPE || '(' || COALESCE(a.DATA_PRECISION, a.data_length) || ')' "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maxLength",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${t}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_TYPE "simpleType",
a.DATA_PRECISION "precision",
a.DATA_TYPE || '(' ||  COALESCE(a.DATA_PRECISION, a.data_length) || ')' "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maxLength",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${t}'`}showChecks(e,t){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${t}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,t){let a=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${t}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(a=a.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),a}showTriggers(e,t){const a=t?` AND TABLE_NAME='${t}'`:"";return`SELECT * FROM all_triggers WHERE TABLE_OWNER='${e}' ${a} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT object_name "name" FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('PACKAGE') and owner='${e}' ORDER BY "name"`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${t}' ORDER BY "type","name"`}showMaterialViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${t}' ORDER BY "type","name"`}buildPageSql(e,t,a){return`SELECT * FROM ${t} WHERE ROWNUM <= ${a}`}showTables(e,t){return`select t.table_name "name",nvl(num_rows,-1)  "table_rows",c.COMMENTS "comment" from all_tables t
        join ALL_TAB_COMMENTS c on t.OWNER = c.OWNER and t.TABLE_NAME = c.TABLE_NAME
        join all_objects o on t.OWNER = o.OWNER and t.TABLE_NAME = o.object_name and o.object_type='TABLE'
        where t.owner='${t}' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}triggerTemplate(){return`CREATE TRIGGER trigger_name 
[BEFORE/AFTER] [INSERT/UPDATE/DELETE]
ON [table]
FOR EACH ROW BEGIN

END`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
BEGIN 
    $2
    RETURN x*2;
END;`}}class fe extends Ne{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:t,column:a="$2"}=e;return`CREATE INDEX ${`${t}_${a}`} ON ${t}(${a});`}dropIndex(e,t){return`DROP INDEX ${t};`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,t){const{name:a,type:r,comment:l,nullable:o,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${a} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${a} TO [newColumnName];
COMMENT ON COLUMN ${e}.${a} IS '${l||""}';`}updateColumnSql(e){const{columnName:t,columnType:a,newColumnName:r,comment:l,defaultValue:o,table:E,isNotNull:c,oldRow:T}=e;return new S("","").if(a!=T.type,`ALTER TABLE "${E}" MODIFY "${t}" ${a};`).if(c!=T.isNotNull,`
ALTER TABLE "${E}" MODIFY "${t}"${c?"NOT NULL":"NULL"};`).if(o!=null&&o!=T.defaultValue,`
ALTER TABLE "${E}" MODIFY "${t}" DEFAULT ${o!=null&&o.match(/(:|nextval)/i)?o:`'${o==null?void 0:o.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=T.comment,`
COMMENT ON COLUMN "${E}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${E}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`COMMENT ON TABLE "${t}" IS '${l}';`),a&&t!=a&&(o+=`ALTER TABLE "${t}" RENAME TO "${a}"`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showTableSource(e,t){return`CALL SP_TABLEDEF('${e}', '${t}');`}showViewSource(e,t){return`CALL SP_VIEWDEF('${e}', '${t}');`}showProcedureSource(e,t){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${t}','${e}') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "simpleType",
        CONCAT(a.DATA_TYPE,'(',a.data_length,')') "type",
        a.data_length "maxLength",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${t}';`}showTriggers(e,t){const a=t?` AND TABLE_NAME='${t}'`:"";return`SELECT * FROM all_triggers WHERE TABLE_OWNER='${e}' ${a} ORDER BY TRIGGER_NAME`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}showTables(e,t){return`SELECT a.object_name "name",b.COMMENTS "comment" from all_objects a
join ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
where a.object_type = 'TABLE' and a.owner='${t}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}triggerTemplate(){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] [INSERT/UPDATE/DELETE]
ON [table]
FOR EACH ROW BEGIN

END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class ie extends F{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const a=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${a};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,o;const{nullable:a,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:a!="YES",isAutoIncrement:(o=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:o.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,name:a,columnName:r=a,type:l,unsigned:o,zerofill:E,useCurrentTimestamp:c,isNotNull:T,isAutoIncrement:A,comment:N,defaultValue:_,character_set_name:M,collation_name:$}=e,D=!de(l)&&!l.match(/json/i);return new S(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${r}\` \`${a}\` ${l}`).if(o=="1","UNSIGNED").if(E=="1","ZEROFILL").if(c,"ON UPDATE CURRENT_TIMESTAMP").if(D&&M,`CHARACTER SET ${M}`).if(D&&$,`COLLATE ${$}`).if(T,"NOT NULL").if(A,"AUTO_INCREMENT").if(N,`COMMENT '${N}'`).if(g(_)&&!T,"DEFAULT NULL").if(!g(_),`DEFAULT ${_=="CURRENT_TIMESTAMP"?_:`${B(_,l)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l,collation:o,newCollation:E}=e;let c="";return l&&l!=r&&(c=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=o&&(c+=`ALTER TABLE \`${t}\` collate = '${E}';`),a&&t!=a&&(c+=`ALTER TABLE \`${t}\` RENAME TO \`${a}\`;`),c}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE columnType,
        DATA_TYPE simpleType,
        if(CHARACTER_MAXIMUM_LENGTH,CONCAT(DATA_TYPE,'(',CHARACTER_MAXIMUM_LENGTH,')'), DATA_TYPE) type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maxLength,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 

        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const a=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${a} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,a,r=!1){return`SELECT * FROM ${r?e+".":""}${t} LIMIT ${a};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}triggerTemplate(){return`CREATE TRIGGER $1
BEFORE INSERT ON table_name$2
FOR EACH ROW BEGIN
    $3
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class ge extends ie{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class De extends F{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,t,a){return`db('${e}').collection('${t}').find({}).limit(${a}).toArray()`}pingDataBase(e){return null}dropIndex(e,t){throw new Error("Method not implemented.")}updateColumnSql(e){throw new Error("Method not implemented.")}showIndex(e,t){return`db('${e}').collection('${t}').indexes();`}createIndex(e){const{database:t,table:a,column:r}=e;return`db('${t}').collection('${a}').createIndex({ ${r||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}showSchemas(){throw new Error("Method not implemented.")}updateTable(e){throw new Error("Method not implemented.")}updateColumn(e,t){throw new Error("Method not implemented.")}showTables(e){throw new Error("Method not implemented.")}addColumn(e,t){throw new Error("Method not implemented.")}showColumns(e,t){throw new Error("Method not implemented.")}showViews(e){throw new Error("Method not implemented.")}showSystemViews(e){throw new Error("Method not implemented.")}showUsers(){throw new Error("Method not implemented.")}createUser(){throw new Error("Method not implemented.")}showTriggers(e){throw new Error("Method not implemented.")}showProcedures(e){throw new Error("Method not implemented.")}showFunctions(e){throw new Error("Method not implemented.")}truncateDatabase(e){throw new Error("Method not implemented.")}showTableSource(e,t){throw new Error("Method not implemented.")}showViewSource(e,t){throw new Error("Method not implemented.")}showProcedureSource(e,t){throw new Error("Method not implemented.")}showFunctionSource(e,t){throw new Error("Method not implemented.")}showTriggerSource(e,t){throw new Error("Method not implemented.")}tableTemplate(){throw new Error("Method not implemented.")}viewTemplate(){throw new Error("Method not implemented.")}procedureTemplate(){throw new Error("Method not implemented.")}triggerTemplate(){throw new Error("Method not implemented.")}functionTemplate(){throw new Error("Method not implemented.")}processList(){throw new Error("Method not implemented.")}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}dropTriggerTemplate(e){throw new Error("Method not implemented.")}}class ye extends F{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${e}.${t}`}showIndex(e,t){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${t}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}processList(){return"sp_who"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return"CREATE LOGIN [name] WITH PASSWORD = 'password';"}updateColumn(e,t){const{name:a,type:r,comment:l,nullable:o,defaultValue:E}=t,c=o=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${a} ${r} ${c};
-- change column name
EXEC sp_rename '${e}.${a}', '${a}', 'COLUMN';`}updateColumnSql(e){const{columnName:t,columnType:a,newColumnName:r,comment:l,isNotNull:o,schema:E,table:c}=e,T=o?"NOT NULL":"NULL";return new S(`ALTER TABLE "${E}"."${c}" ALTER COLUMN ${t} ${a} ${T};`,`
`).if(t!=r,()=>`EXEC sp_rename '${E}.${c}.${t}' , '${r}', 'COLUMN';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{database:t,table:a,newTableName:r}=e;return`sp_rename '${a}', '${r}'`}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showTableSource(e,t){return""}showViewSource(e,t){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showProcedureSource(e,t){return`SELECT definition 'Create Procedure','${e}.${t}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showFunctionSource(e,t){return`SELECT definition 'Create Function','${e}.${t}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showTriggerSource(e,t){return`SELECT definition 'SQL Original Statement','${e}.${t}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showColumns(e,t){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "simpleType",
            concat(type_name(system_type_id) , '(' , max_length ,')') "type",
            is_nullable nullable,
            max_length "maxLength"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${t}') ;`:`SELECT c.COLUMN_NAME "name", DATA_TYPE "simpleType", 
        CASE
        WHEN CHARACTER_MAXIMUM_LENGTH IS NOT NULL
            THEN (DATA_TYPE + '(' + CONVERT(NVARCHAR, CHARACTER_MAXIMUM_LENGTH) + ')')
        ELSE
            DATA_TYPE
        END AS "type",
        IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maxLength", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
        COLUMNPROPERTY(object_id('${e}.${t}'), c.COLUMN_NAME, 'IsIdentity') is_identity
        FROM
        INFORMATION_SCHEMA.COLUMNS c
        left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
        on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
        left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
        on tc.constraint_name=ccu.constraint_name
        and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' ORDER BY ORDINAL_POSITION`}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,t){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${t}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e){return`SELECT t.name TRIGGER_NAME FROM SYS.OBJECTS t INNER JOIN sys.schemas s ON t.schema_id = s.schema_id WHERE TYPE = 'TR' and s.name='${e}'`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,t){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${t}' order by name`}buildPageSql(e,t,a){return`SELECT TOP ${a} * FROM ${t};`}showTables(e,t){return`SELECT TABLE_NAME 'name'
      FROM
        INFORMATION_SCHEMA.TABLES t
      WHERE
        TABLE_TYPE = 'BASE TABLE'
        AND TABLE_SCHEMA = '${t}' order by TABLE_NAME`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 varchar(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
GO`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}triggerTemplate(){return`CREATE TRIGGER dbo.trigger_name
ON [table]
[INSTEAD OF/AFTER] [INSERT/UPDATE/DELETE]
AS
BEGIN

END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}}class Ue extends F{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}updateColumn(e,t){throw new Error("Method not implemented.")}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,t){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,t){return`MATCH(n:\`${t}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,t){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${t}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}showTriggers(e){throw new Error("Method not implemented.")}showProcedures(e){throw new Error("Method not implemented.")}showFunctions(e){throw new Error("Method not implemented.")}buildPageSql(e,t,a){return`MATCH (n${t=="*"?"":`:${t}`}) RETURN n LIMIT ${a}`}createDatabase(e){return"CREATE DATABASE $1"}truncateDatabase(e){throw new Error("Method not implemented.")}updateTable(e){throw new Error("Method not implemented.")}showTableSource(e,t){throw new Error("Method not implemented.")}showViewSource(e,t){throw new Error("Method not implemented.")}showProcedureSource(e,t){throw new Error("Method not implemented.")}showFunctionSource(e,t){throw new Error("Method not implemented.")}showTriggerSource(e,t){throw new Error("Method not implemented.")}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,t){return`DROP INDEX \`${t}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}procedureTemplate(){throw new Error("Method not implemented.")}triggerTemplate(){throw new Error("Method not implemented.")}functionTemplate(){throw new Error("Method not implemented.")}processList(){throw new Error("Method not implemented.")}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}}class Re extends le{defaultPart(){var A,N;const{oldRow:e,isAutoIncrement:t,defaultValue:a,columnType:r}=this.param,l=(A=a==null?void 0:a.match)==null?void 0:A.call(a,/\bnextval\b/);if(t&&!e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!t&&e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!t&&e.isAutoIncrement&&l)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==a)return"";const T=(N=a==null?void 0:a.match)!=null&&N.call(a,/\bnextval\b/)?a:B(a,r);return`${this.afterColumnPrefix} ${g(a)?"DROP DEFAULT":`SET DEFAULT ${T}`};`}commentPart(){const{oldRow:e,table:t,columnName:a,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${a}" is '${r}';`}}class Ce extends F{showVersion(){return"SHOW server_version;"}createIndex(e){const t=e.name??`${e.column||"[column]"}`,a=e.indexType||"btree";return`CREATE INDEX ${t}_${new Date().getTime()}_index ON 
    ${e.table} USING ${a} ("${e.column||"[column]"}");`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:a,type:r,comment:l,nullable:o,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${a} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${a} TO ${a};
-- Change column comment
COMMENT ON COLUMN ${e}.${a} IS '${l||"comment"}';`}updateColumnSql(e){return new Re(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showForeignKeys(e,t){return`SELECT
      refc.constraint_name constraint_name,
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${t}'
  ORDER BY ord_position;`}pingDataBase(e){return e?`set search_path to '${e}';`:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`COMMENT ON TABLE "${t}" IS '${l}';`),a&&t!=a&&(o+=`ALTER TABLE "${t}" RENAME TO "${a}";`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return""}showViewSource(e,t,a){return a.isMaterial()?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showColumns(e,t){return`SELECT c.COLUMN_NAME "name", 
          DATA_TYPE "simpleType", 
          atttypid::regtype AS pg_reg_type,
          CASE 
            WHEN (CHARACTER_MAXIMUM_LENGTH is not null) then DATA_TYPE || '(' || CHARACTER_MAXIMUM_LENGTH || ')' 
            ELSE DATA_TYPE 
          END "type",
          IS_NULLABLE nullable, 
          CHARACTER_MAXIMUM_LENGTH "maxLength", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,t){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${t}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,t){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${t}';`}showTriggers(e,t){const a=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "TRIGGER_NAME" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${a} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME",pg_get_functiondef(p.oid) source,p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='PROCEDURE' ORDER BY r.ROUTINE_NAME ASC`}showFunctions(e){return`SELECT r.ROUTINE_NAME "ROUTINE_NAME",
    p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='FUNCTION' ORDER BY r.ROUTINE_NAME ASC `}showFunctionSource(e,t,a){return a?`select pg_get_functiondef('${a}') "Create Function",'${t}' "Function";`:`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showViews(e,t){return`select table_name "name" from information_schema.tables where table_schema='${t}' and table_type='VIEW' order by "name";`}showMaterialViews(e,t){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${t}' order by "name" ASC`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showDatabases(){return'SELECT datname "Database" FROM pg_database WHERE datistemplate = false order by datname ASC;'}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename name,last_value sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname name,typtype type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
$body$
BEGIN
    $2
    RETURN [value];
END;
$body$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER/INSTEAD OF] [INSERT/UPDATE/DELETE]
ON [table]
FOR EACH ROW
EXECUTE PROCEDURE [tri_fun]();`}dropTriggerTemplate(e){return`DROP TRIGGER ${e} on [table_name]`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class Be extends Ce{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:a,type:r}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${a} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${a} TO ${a};`}updateColumnSql(e){return new Re(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l}=e;let o="";return l&&l!=r&&(o=`COMMENT ON TABLE "${t}" IS '${l}';`),a&&t!=a&&(o+=`ALTER TABLE "${t}" RENAME TO "${a}";`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SHOW TABLE "${e}"."${t}"`}showViewSource(e,t,a){return`SHOW VIEW "${e}"."${t}"`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const a=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "TRIGGER_NAME" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${a} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class Fe extends F{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const a=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${a};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var _;const{name:a,type:r,comment:l,nullable:o,defaultValue:E,extra:c,character_set_name:T,collation_name:A}=t,N=o!="YES";return new S(`ALTER TABLE ${e}`).append(`
	CHANGE ${a} ${a} ${r}`).if(T,`CHARACTER SET ${T}`).if(A,`COLLATE ${A}`).if(N,"NOT NULL").if((_=c==null?void 0:c.toLowerCase())==null?void 0:_.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(g(E)&&!N,"DEFAULT NULL").if(!g(E),`DEFAULT ${E=="CURRENT_TIMESTAMP"?E:`'${Se(E)}'`}`).toString()}updateColumnSql(e){const{table:t,columnName:a,newColumnName:r,columnType:l,isNotNull:o,isAutoIncrement:E,comment:c,defaultValue:T,oldRow:A}=e,N=`ALTER TABLE "${t}"`,_=o?"SET NOT NULL":"DROP NOT NULL";return new S(`${N} ALTER COLUMN "${a}" TYPE ${l};`,`
`).if(c&&c!=A.comment,`${N} ALTER COLUMN "${a}" COMMENT '${c}';`).if(o!=A.isNotNull,`${N} ALTER COLUMN "${a}" ${_};`).if(a!=r,`${N} RENAME COLUMN "${a}" TO "${r}";`).toString()}showCollations(){return""}showChecks(e,t){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,t){return e?`use "${t}"."${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l,collation:o,newCollation:E}=e;let c="";return l&&l!=r&&(c=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=o&&(c+=`ALTER TABLE \`${t}\` collate = '${E}';`),a&&t!=a&&(c+=`ALTER TABLE \`${t}\` RENAME TO \`${a}\`;`),c}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`select get_ddl('table', '${e}.${t}') "Create Table";`}showViewSource(e,t){return`select get_ddl('view', '${e}.${t}') "Create View";`}showProcedureSource(e,t){return`select get_ddl('PROCEDURE', '${e}.${t}()') "Create Procedure";`}showFunctionSource(e,t){return`select get_ddl('FUNCTION', '${e}.${t}()') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "simpleType",
        CASE
            WHEN CHARACTER_MAXIMUM_LENGTH IS NULL THEN DATA_TYPE
            ELSE CONCAT( DATA_TYPE, '(', CHARACTER_MAXIMUM_LENGTH, ')' )
        END "type",
        CHARACTER_MAXIMUM_LENGTH "maxLength",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,t){const a=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${a} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}showTables(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}triggerTemplate(){return`CREATE TRIGGER tri_name$1
BEFORE INSERT ON table_name$2
FOR EACH ROW BEGIN
    $3
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class pe extends F{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,t){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:t,column:a="$2"}=e;return`CREATE INDEX ${`${t}_${a}`} ON ${t}(${a});`}showIndex(e,t){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${t}' `}dropIndex(e,t){return`DROP INDEX ${t};`}showSchemas(){throw new Error("Method not implemented.")}showTables(e,t){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,t){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${t}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${t}')
        ) t2  on t1.name=t2.'from';`}showViews(e,t){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showUsers(){throw new Error("Method not implemented.")}createUser(){throw new Error("Method not implemented.")}showTriggers(e){throw new Error("Method not implemented.")}showProcedures(e){throw new Error("Method not implemented.")}showFunctions(e){throw new Error("Method not implemented.")}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}createDatabase(e){throw new Error("Method not implemented.")}truncateDatabase(e){throw new Error("Method not implemented.")}updateTable(e){throw new Error("Method not implemented.")}showTableSource(e,t){return`SELECT sql "Create Table" FROM sqlite_master where name='${t}' and type='table';`}showViewSource(e,t){return`SELECT sql "Create View" FROM sqlite_master where name='${t}' and type='view';`}showProcedureSource(e,t){throw new Error("Method not implemented.")}showFunctionSource(e,t){throw new Error("Method not implemented.")}showTriggerSource(e,t){throw new Error("Method not implemented.")}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){throw new Error("Method not implemented.")}triggerTemplate(){throw new Error("Method not implemented.")}functionTemplate(){throw new Error("Method not implemented.")}processList(){throw new Error("Method not implemented.")}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}}class He extends pe{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,t){return`set schema '${e}';`}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,t){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${t}' order by table_name`}showViews(e,t){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${t}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${t}'
ORDER BY "view_group",name`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,t){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${t}') t1;`}updateColumn(e,t){const{name:a,type:r}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${a} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${a} TO ${a};`}updateColumnSql(e){return new le(e).genAlterSQL()}}class Pe extends j{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,t){return`show tables in ${e}`}showColumns(e,t){return`describe ${e}.${t};`}showViews(e,t){return`show views in ${e}`}}class ve extends j{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:"select 1"}showDatabases(){return"show catalogs"}}class ke extends j{showVersion(){return"SELECT cql_version as server_version FROM system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:"select 1"}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,t){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,t){return`select column_name as "name",type from system_schema.columns where keyspace_name='${e}' and table_name='${t}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class Ve extends le{otherPart(){const{oldRow:e,isAutoIncrement:t}=this.param;return!e.isAutoIncrement&&t?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!t?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:t,columnName:a,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${a}" is '${r}';`}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} SET DATA TYPE ${t};`}}class xe extends j{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:"select 1"}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,t){return null}showTables(e,t){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${t}' and TYPE='T' order by tabname`}showColumns(e,t){return`select COLUMN_NAME "name",
        DATA_TYPE "simpleType",
        CASE 
            WHEN (CHARACTER_MAXIMUM_LENGTH is not null) then DATA_TYPE || '(' || CHARACTER_MAXIMUM_LENGTH || ')' 
            ELSE DATA_TYPE 
        END "type",
        IS_NULLABLE "nullable",
        CHARACTER_MAXIMUM_LENGTH "maxLength",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        si.UNIQUERULE='U' "isUnique",
        sc.remarks "comment",
        sc.IDENTITY='Y' "isAutoIncrement",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        left join SYSCAT.INDEXES si
            on c.TABLE_SCHEMA=si.TABSCHEMA and c.TABLE_NAME=si.TABNAME  and c.COLUMN_NAME=REPLACE(si.COLNAMES,'+','')
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${t}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new Ve(e).genAlterSQL()}showForeignKeys(e,t){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${t}'`}showIndex(e,t){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}'`}showViews(e,t){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${t}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,t){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}';`}showTriggers(e,t){let a=`SELECT TRIGNAME "TRIGGER_NAME",TEXT "source" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return t&&(a+=`AND TABNAME = '${t}'`),a}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,t){return`DROP INDEX "${t}"`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int not NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}}class Ye extends ie{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE columnType,
        DATA_TYPE simpleType,
        DATA_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maxLength,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}}class We extends F{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const a=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${a};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,o;const{nullable:a,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:a!="YES",isAutoIncrement:(o=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:o.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,name:a,columnName:r=a,type:l,unsigned:o,zerofill:E,useCurrentTimestamp:c,isNotNull:T,isAutoIncrement:A,comment:N,defaultValue:_,character_set_name:M,collation_name:$}=e,D=!de(l)&&!l.match(/json/i);return new S(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${r}\` \`${a}\` ${l}`).if(o=="1","UNSIGNED").if(E=="1","ZEROFILL").if(c,"ON UPDATE CURRENT_TIMESTAMP").if(D&&M,`CHARACTER SET ${M}`).if(D&&$,`COLLATE ${$}`).if(T,"NOT NULL").if(A,"AUTO_INCREMENT").if(N,`COMMENT '${N}'`).if(g(_)&&!T,"DEFAULT NULL").if(!g(_),`DEFAULT ${_=="CURRENT_TIMESTAMP"?_:`${B(_,l)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:"select 1"}updateTable(e){const{table:t,newTableName:a,comment:r,newComment:l,collation:o,newCollation:E}=e;let c="";return l&&l!=r&&(c=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=o&&(c+=`ALTER TABLE \`${t}\` collate = '${E}';`),a&&t!=a&&(c+=`ALTER TABLE \`${t}\` RENAME TO \`${a}\`;`),c}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`desc ${t}`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const a=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${a} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,a){return`SELECT * FROM ${t} LIMIT ${a};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}triggerTemplate(){return`CREATE TRIGGER $1
BEFORE INSERT ON table_name$2
FOR EACH ROW BEGIN
    $3
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}function Ge(n){switch(n||(n=d.MYSQL),n){case null:case d.MYSQL:return new ie;case d.MARIA_DB:return new ge;case d.DORIS:return new Ye;case d.SQLServer:return new ye;case d.libSQL:case d.SQLITE:return new pe;case d.DUCK_DB:return new He;case d.REDSHIFT:return new Be;case d.SNOWFLAKE:return new Fe;case d.PG:return new Ce;case d.CLICKHOUSE:return new Ie;case d.DM:return new fe;case d.ORACLE:return new Ne;case d.CASSANDRA:return new ke;case d.PRESTO:case d.TRINO:return new ve;case d.HIVE:return new Pe;case d.DB2:return new xe;case d.MONGO_DB:return new De;case d.NEO4J:return new Ue;case d.TDengine:return new We}return new j}class k{constructor(e){this.meta=e,this.dialect=Ge(e.dbType),this.wrappedTable=v(this.meta.table,this.meta.dbType,we.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategys(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:t,type:a,isNotNull:r}=e,l=r?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${v(t,this.meta.dbType)} ${a}${l}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${v(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:t,foreignKeyName:a,refTable:r,refColumn:l,onUpdate:o,onDelete:E}=e,c=o=="NO ACTION"?"":` ON UPDATE ${o}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`;return new S(`ALTER TABLE "${this.meta.table}"`).if(a,()=>`ADD CONSTRAINT ${a}`).if(!a,"ADD").append(`FOREIGN KEY ("${t}") REFERENCES "${r}"("${l}")${c}${T};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,t='"'){return e.map(a=>t+a+t).join(",")}}class qe extends k{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"}]}newColumn(e){const{name:t,type:a,defaultValue:r,comment:l}=e;return new S(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${t}" ${a}`).if(!g(r),`DEFAULT ${B(r,a)}`).if(l,`COMMENT '${l}'`).toString()}newIndex(e){const{columns:t}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${t.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(t)}`}showForeignKeys(){return null}showChecks(){return null}}class Ee extends k{newColumn(e){const{name:t,type:a,defaultValue:r,isNotNull:l}=e;return new S(`ALTER TABLE "${this.meta.schema}".${v(this.meta.table,this.meta.dbType)} ADD ${v(t,this.meta.dbType)} ${a}`).if(l,"NOT NULL").if(!g(r),`DEFAULT ${B(r,a)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${v(e,this.meta.dbType)}`}newIndex(e){const{table:t=this.meta.table,columns:a,type:r}=e,l=`${t}_${a.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${this.meta.schema}"."${t}"(${this.splitColumn(a)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class Ke extends k{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"}]}newColumn(e){const{name:t,type:a,comment:r,defaultValue:l,isNotNull:o,unsigned:E,zerofill:c}=e;return console.log(e),new S(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${t}\` ${a}`).if(E&&E!=0,"UNSIGNED").if(c,"ZEROFILL").if(o,"NOT NULL").if(r,`COMMENT '${r}'`).if(!g(l),`DEFAULT ${B(l,a)}`).toString()}formatIndexType(e){const t=e.index_type.toUpperCase();return t=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":Ae(e.isUnique)?"UNIQUE":"KEY":t}newIndex(e){const{type:t="key",columns:a}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${t} (${this.splitColumn(a,"`")})`}newForeignKey(e){const{column:t,foreignKeyName:a,refTable:r,refColumn:l,onUpdate:o,onDelete:E}=e,c=o=="NO ACTION"?"":` ON UPDATE ${o}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`;return new S(`ALTER TABLE \`${this.meta.table}\``).if(a,()=>`ADD CONSTRAINT ${a}`).if(!a,"ADD").append(`FOREIGN KEY (\`${t}\`) REFERENCES \`${r}\`(\`${l}\`)${c}${T};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class je extends k{newIndex(e){const{table:t=this.meta.table,columns:a,type:r}=e,l=`${t}_${a.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${t}"(${this.splitColumn(a)})`}newColumn(e){const{name:t,type:a,isNotNull:r,defaultValue:l,comment:o}=e;return new S(`ALTER TABLE ${v(this.meta.table,this.meta.dbType)} ADD ${t} ${a}`).if(!g(l),`DEFAULT ${B(l,a)}`).if(r,"NOT NULL").if(o,`;
COMMENT ON COLUMN ${this.wrappedTable}."${t.toUpperCase()}" is '${o}';`).toString()}newForeignKey(e){const{column:t,foreignKeyName:a,refTable:r,refColumn:l,onUpdate:o,onDelete:E}=e,c=o=="NO ACTION"?"":` ON UPDATE ${o}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`,A=a||`${t}_${r}_${l}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${A} FOREIGN KEY ("${t}") REFERENCES ${r}(${l})${c}${T};`}showForeignKeys(){var t;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((t=this.meta.user)==null?void 0:t.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}}class Qe extends k{newColumn(e){const{name:t,type:a,comment:r,defaultValue:l,isNotNull:o}=e,E=this.wrappedTable;return new S(`ALTER TABLE ${E} ADD COLUMN "${t}" ${a}`).if(o,"NOT NULL").if(!g(l),`DEFAULT ${B(l,a)}`).append(";").if(r,`
COMMENT ON COLUMN ${E}."${t}" is '${r}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:t=this.meta.table,columns:a,type:r}=e,l=r=="HASH"?"hash":"btree";return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${a.join("_")}_${new Date().getTime()}_index ON "${t}" USING ${l} (${this.splitColumn(a)});`}}class Xe extends k{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class Je extends k{newIndex(e){const{table:t=this.meta.table,columns:a}=e;return`CREATE INDEX ${`${t}_${a.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(a)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class ze extends k{newColumn(e){const{type:t,defaultValue:a}=e;return new S(super.newColumn(e)).if(!g(a),`DEFAULT ${B(a,t)}`).toString()}newIndex(e){const{table:t=this.meta.table,columns:a}=e;return`CREATE INDEX ${`${t}_${a.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(a)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class Ze extends Ee{}class et extends Ee{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${v(e,this.meta.dbType)}`}}function Q(n){switch(n.dbType){case d.PG:case d.REDSHIFT:return new Qe(n);case d.DM:case d.ORACLE:return new je(n);case d.DB2:return new Ze(n);case d.CASSANDRA:return new et(n);case d.SQLServer:return new Ee(n);case d.SNOWFLAKE:return new Xe(n);case d.CLICKHOUSE:return new qe(n);case d.DUCK_DB:return new ze(n);case d.SQLITE:return new Je(n);case d.MYSQL:case d.MARIA_DB:default:return new Ke(n)}}const W=he("design",{state:()=>({dbType:d.MYSQL,schema:"",table:"",columns:[]}),getters:{canAlterTable(n){return![d.SQLITE].includes(n.dbType)},supportForeignKey(n){return![d.CLICKHOUSE].includes(n.dbType)},supportCheck(n){return![d.SQLITE,d.DUCK_DB,d.CLICKHOUSE,d.SNOWFLAKE].includes(n.dbType)},supportIndex(n){return![d.SNOWFLAKE].includes(n.dbType)}},actions:{updateDBType(n){this.dbType=n},updateFullInfo(n){for(const e in n)this[e]=n[e]}}}),tt={components:{codemirror:q},mixins:[V],props:["remainHeight","activePanel"],data(){return{indexes:[],indexTypes:[],dbType:null,columns:[],dialect:null,loading:!0,index:{visible:!1,loading:!1,column:null,type:null}}},computed:{...G(W,["canAlterTable"]),previewSQL(){var n;return((n=this.index.columns)==null?void 0:n.length)>0?this.dialect.newIndex({...this.index}):""}},mounted(){this.on("designMeta",n=>{const{columns:e,dbType:t}=n;this.columns=e,this.dbType=t,this.dialect=Q(n),this.indexTypes=this.dialect.indexTypes(),this.loadIndexes()}).on("columns",n=>{this.columns=n}).on("indexes",n=>{this.indexes=n,this.loading=!1}).on("success",n=>{n=="index"&&(this.index.loading=!1,this.index.visible=!1,this.loadIndexes())}).on("error",()=>{this.index.loading=!1})},methods:{loadIndexes(){this.emit("indexes"),this.loading=!0},openIndexDialog(){this.index={visible:!0,loading:!1,column:null,type:"INDEX"}},getIndexType(n){return this.dialect.formatIndexType(n)},formatUnique(n){return Ae(n)},doCreate(){this.index.loading=!0,this.emit("execute",{type:"index",sql:this.previewSQL})},deleteConfirm(n){z(this.$t("design.deleteIndexConfirm")).then(()=>{this.emit("execute",{type:"index",sql:this.dialect.dropIndex(n.index_name)})})}}},nt={class:"design-toolbar"},at={class:"text-center"},rt=C("br",null,null,-1),lt=C("br",null,null,-1);function ot(n,e,t,a,r,l){const o=O("vsc-button"),E=Z,c=_e,T=ee,A=O("RedMark"),N=oe,_=se,M=te,$=ne,D=O("codemirror"),y=ae,Y=K;return m(),h("div",null,[C("div",nt,[["ClickHouse"].includes(r.dbType)?p("",!0):(m(),R(o,{key:0,type:"icon",icon:"codicon-add text-base",title:n.$t("common.new"),onClick:l.openIndexDialog},null,8,["title","onClick"])),i(o,{type:"icon",icon:"codicon-refresh text-base",title:n.$t("common.refresh"),onClick:l.loadIndexes},null,8,["title","onClick"])]),t.activePanel=="index"?f((m(),R(T,{key:0,data:r.indexes,height:t.remainHeight,border:""},{default:u(()=>[i(E,{resizable:!0,align:"center",prop:"index_name",label:n.$t("design.indexName"),width:"200"},null,8,["label"]),i(E,{resizable:!0,align:"center",prop:"column_name",label:n.$t("design.column"),width:"200"},null,8,["label"]),i(E,{align:"center",prop:"isUnique",label:n.$t("design.unique"),width:"200"},{default:u(({row:s})=>[i(c,{disabled:"","model-value":l.formatUnique(s.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),i(E,{resizable:!0,align:"center",prop:"index_type",label:n.$t("common.type"),width:"200"},{default:u(({row:s})=>[L(b(l.getIndexType(s)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(r.dbType)?(m(),R(E,{key:0,resizable:!0,align:"center",prop:"index_method",label:n.$t("design.indexMethod"),width:"200"},null,8,["label"])):p("",!0),["ClickHouse"].includes(r.dbType)?p("",!0):(m(),R(E,{key:1,label:n.$t("design.operation"),width:"120"},{default:u(({row:s})=>[C("div",at,[i(o,{type:"icon",icon:"codicon-remove",title:"delete",onClick:w=>l.deleteConfirm(s)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[Y,r.loading]]):p("",!0),i(y,{modelValue:r.index.visible,"onUpdate:modelValue":e[3]||(e[3]=s=>r.index.visible=s),title:n.$t("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:u(()=>[i(o,{type:"secondary",onClick:e[2]||(e[2]=s=>r.index.visible=!1)},{default:u(()=>[L(b(n.$t("common.cancel")),1)]),_:1}),i(o,{type:"primary",loading:r.index.loading,onClick:l.doCreate},{default:u(()=>[L(b(n.$t("common.ok")),1)]),_:1},8,["loading","onClick"]),rt,L(),lt,f(i(D,{ref:"cmEditor",value:l.previewSQL},null,8,["value"]),[[P,l.previewSQL]])]),default:u(()=>[i($,{inline:!0,"label-width":"75px",size:"small"},{default:u(()=>[i(M,null,{label:u(()=>[i(A),L(b(n.$t("design.column")),1)]),default:u(()=>[i(_,{modelValue:r.index.columns,"onUpdate:modelValue":e[0]||(e[0]=s=>r.index.columns=s),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:u(()=>[(m(!0),h(U,null,H(r.columns,s=>(m(),R(N,{key:s.name,label:s.name,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(M,null,{label:u(()=>[i(A),L(b(n.$t("common.type")),1)]),default:u(()=>[i(_,{modelValue:r.index.type,"onUpdate:modelValue":e[1]||(e[1]=s=>r.index.type=s),size:"small",class:"!w-[110px]"},{default:u(()=>[(m(!0),h(U,null,H(r.indexTypes,(s,w)=>(m(),R(N,{key:w,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}const st=x(tt,[["render",ot]]),it={components:{codemirror:q},mixins:[V],props:["activePanel"],data(){return{loading:!1,ddl:"",dbType:"",user:null}},mounted(){this.on("designMeta",()=>{this.emit("ddl")}).on("ddl",({ddl:n,dbType:e})=>{this.dbType=e,this.loading=!1,this.ddl=n})},methods:{copyDDL(){navigator.clipboard.writeText(this.ddl),Te("Copy DDL success!")}}},Et={ref:"infoPanel",class:"design-toolbar"};function ct(n,e,t,a,r,l){const o=O("vsc-button"),E=O("codemirror"),c=K;return f((m(),h("div",null,[C("div",Et,[i(o,{type:"icon",icon:"el-icon-document-copy text-base",title:"Copy DDL",onClick:l.copyDDL},null,8,["onClick"]),i(o,{type:"icon",icon:"codicon-refresh text-base",title:n.$t("common.refresh"),onClick:e[0]||(e[0]=T=>n.emit("ddl"))},null,8,["title"])],512),t.activePanel=="ddl"?(m(),R(E,{key:0,dbType:r.dbType,value:r.ddl},null,8,["dbType","value"])):p("",!0)])),[[c,r.loading]])}const ut=x(it,[["render",ct]]),mt={components:{codemirror:q},mixins:[V],props:["remainHeight","activePanel"],data(){return{foreignKeys:[],dbType:null,tables:[],curTableColumns:[],columns:[],strategys:[],dialect:null,loading:!0,status:{visible:!1,loading:!1},editModel:{column:null,refTable:null,refColumn:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"}}},computed:{...G(W,["canAlterTable"]),previewSQL(){const{column:n,refTable:e,refColumn:t}=this.editModel;return n||e||t?this.dialect.newForeignKey(this.editModel):""}},mounted(){this.on("designMeta",n=>{const{columns:e,dbType:t}=n;this.columns=e,this.dbType=t,this.dialect=Q(n),this.strategys=this.dialect.strategys(),this.loadForeignKeys(),this.emit("tables")}).on("columns",n=>{this.columns=n}).on("foreignKeys",n=>{this.loading=!1,this.foreignKeys=n}).on("columnsById",n=>{this.editModel.refColumn="",this.curTableColumns=n}).on("success",n=>{n=="fk"&&(this.status.loading=!1,this.status.visible=!1,this.loadForeignKeys())}).on("error",()=>{this.status.loading=!1}).on("tables",n=>{this.tables=n})},methods:{getColumns(n){this.emit("columnsById",n)},loadForeignKeys(){const n=this.dialect.showForeignKeys();n&&(this.loading=!0,this.emit("foreignKeys",n))},openFkDialog(){this.status={visible:!0,loading:!1},this.editModel={column:null,refTable:null,refColumn:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"}},doCreate(){this.status.loading=!0,this.emit("execute",{type:"fk",sql:this.previewSQL})},deleteConfirm(n){z(this.$t("design.deleteFkConfirm")).then(()=>{this.emit("execute",{type:"fk",sql:this.dialect.dropForeignKey(n.constraint_name)})})}}},Tt={key:0,class:"design-toolbar"},dt={class:"text-center"},At=C("br",null,null,-1),_t=C("br",null,null,-1),Nt=C("br",null,null,-1);function Rt(n,e,t,a,r,l){const o=O("vsc-button"),E=Z,c=ee,T=O("RedMark"),A=oe,N=se,_=te,M=re,$=ne,D=O("codemirror"),y=ae,Y=K;return m(),h("div",null,[n.canAlterTable?(m(),h("div",Tt,[i(o,{type:"icon",icon:"codicon-add text-base",title:n.$t("common.new"),onClick:l.openFkDialog},null,8,["title","onClick"]),i(o,{type:"icon",icon:"codicon-refresh text-base",title:n.$t("common.refresh"),onClick:l.loadForeignKeys},null,8,["title","onClick"])])):p("",!0),t.activePanel=="foreignKey"?f((m(),R(c,{key:1,data:r.foreignKeys,style:{width:"100%"},height:t.remainHeight,border:""},{default:u(()=>[n.canAlterTable?(m(),R(E,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:n.$t("design.constraintName"),width:"150"},null,8,["label"])):p("",!0),i(E,{resizable:!0,align:"center",prop:"column_name",label:n.$t("design.column"),width:"150"},null,8,["label"]),i(E,{resizable:!0,align:"center",prop:"referenced_table",label:n.$t("design.referencedTable"),width:"150"},null,8,["label"]),i(E,{resizable:!0,align:"center",prop:"referenced_column",label:n.$t("design.referencedColumn"),width:"150"},null,8,["label"]),i(E,{align:"center",prop:"updateRule",label:n.$t("design.updateRule"),width:"150"},null,8,["label"]),i(E,{align:"center",prop:"deleteRule",label:n.$t("design.deleteRule"),width:"150"},null,8,["label"]),n.canAlterTable?(m(),R(E,{key:1,label:n.$t("design.operation"),width:"120"},{default:u(({row:s})=>[C("div",dt,[i(o,{type:"icon",icon:"codicon-remove",title:"delete",onClick:w=>l.deleteConfirm(s)},null,8,["onClick"])])]),_:1},8,["label"])):p("",!0)]),_:1},8,["data","height"])),[[Y,r.loading]]):p("",!0),i(y,{modelValue:r.status.visible,"onUpdate:modelValue":e[7]||(e[7]=s=>r.status.visible=s),title:n.$t("design.newForeignKey"),width:"780px",closeOnClickModal:!1,center:""},{footer:u(()=>[i(o,{type:"secondary",onClick:e[6]||(e[6]=s=>r.status.visible=!1)},{default:u(()=>[L(b(n.$t("common.cancel")),1)]),_:1}),i(o,{type:"primary",loading:r.status.loading,onClick:l.doCreate},{default:u(()=>[L(b(n.$t("common.ok")),1)]),_:1},8,["loading","onClick"]),_t,L(),Nt,f(i(D,{ref:"cmEditor",value:l.previewSQL},null,8,["value"]),[[P,l.previewSQL]])]),default:u(()=>[i($,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:u(()=>[i(_,null,{label:u(()=>[i(T),L(b(n.$t("design.column")),1)]),default:u(()=>[i(N,{modelValue:r.editModel.column,"onUpdate:modelValue":e[0]||(e[0]=s=>r.editModel.column=s),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(m(!0),h(U,null,H(r.columns,s=>(m(),R(A,{key:s.name,label:s.name,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),[].includes(r.dbType)?p("",!0):(m(),R(_,{key:0,label:n.$t("design.foreignKeyName")},{default:u(()=>[i(M,{modelValue:r.editModel.foreignKeyName,"onUpdate:modelValue":e[1]||(e[1]=s=>r.editModel.foreignKeyName=s),class:"!w-[170px]"},null,8,["modelValue"])]),_:1},8,["label"])),At,i(_,null,{label:u(()=>[i(T),L(b(n.$t("design.referencedTable")),1)]),default:u(()=>[i(N,{modelValue:r.editModel.refTable,"onUpdate:modelValue":e[2]||(e[2]=s=>r.editModel.refTable=s),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(m(!0),h(U,null,H(r.tables,s=>(m(),R(A,{key:s.name,label:s.name,value:s.name,onClick:w=>l.getColumns(s.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(_,null,{label:u(()=>[i(T),L(b(n.$t("design.referencedColumn")),1)]),default:u(()=>[i(N,{modelValue:r.editModel.refColumn,"onUpdate:modelValue":e[3]||(e[3]=s=>r.editModel.refColumn=s),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(m(!0),h(U,null,H(r.curTableColumns,s=>(m(),R(A,{key:s.name,label:s.name,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(_,{label:"On Update"},{default:u(()=>[i(N,{modelValue:r.editModel.onUpdate,"onUpdate:modelValue":e[4]||(e[4]=s=>r.editModel.onUpdate=s),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(m(!0),h(U,null,H(r.strategys,s=>(m(),R(A,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(_,{label:"On Delete"},{default:u(()=>[i(N,{modelValue:r.editModel.onDelete,"onUpdate:modelValue":e[5]||(e[5]=s=>r.editModel.onDelete=s),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(m(!0),h(U,null,H(r.strategys,s=>(m(),R(A,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}const Ct=x(mt,[["render",Rt]]),pt={components:{codemirror:q},mixins:[V],props:["remainHeight","activePanel"],data(){return{table:null,dbType:null,typeSelector:{visible:!1,inputing:!1},types:[],typeSelectorVisible:!1,columnLoading:!0,columns:[],copyedColumns:[],dialect:null,editColumn:{name:"",type:"",unsigned:null,zerofill:null,defaultValue:null,useCurrentTimestamp:null},column:{isNew:!0,editVisible:!1,editLoading:!1}}},computed:{...G(W,["canAlterTable"]),supportUnsigned(){var n,e;return this.isMySQL&&((e=(n=this.editColumn.type)==null?void 0:n.match)==null?void 0:e.call(n,/(int|decimal|float|double)/i))},mysqlTimestamp(){var n,e;return this.isMySQL&&((e=(n=this.editColumn.type)==null?void 0:n.match)==null?void 0:e.call(n,/timestamp/i))},isSmall(){return window.innerWidth<=1200},isMySQL(){return["MySQL","MariaDB"].includes(this.dbType)},tilte(){const n=this.column.isNew?"design.newColumn":"design.updateColumn";return this.$t(n)},filterTypes(){return this.typeSelector.inputing&&this.editColumn.type?this.types.filter(n=>(n.label||n).match(new RegExp(this.editColumn.type,"i"))):this.types},previewSQL(){if(this.column.isNew){const{name:n,type:e}=this.editColumn;return n&&e?this.dialect.newColumn(this.editColumn):""}return this.supportUnsigned||(this.editColumn.zerofill=!1,this.editColumn.unsigned=!1),this.mysqlTimestamp||(this.editColumn.useCurrentTimestamp=!1),this.dialect.updateColumn({table:this.table,newColumnName:this.editColumn.name,columnType:this.editColumn.type,nullable:!this.editColumn.isNotNull,...this.editColumn,type:Me(this.editColumn)})},supportChangeIncrement(){return[d.MYSQL,d.MARIA_DB,d.PG,d.DB2].includes(this.dbType)}},mounted(){this.on("designMeta",n=>{this.columns=n.columns,this.copyedColumns=me.clone(n.columns),this.dbType=n.dbType,this.columnLoading=!1,this.dialect=Q(n),this.types=this.dialect.columnTypes()}).on("columns",n=>{this.columns=n,this.copyedColumns=me.clone(n),this.columnLoading=!1}).on("success",n=>{n=="column"&&(this.column.editLoading=!1,this.column.editVisible=!1,this.loadColumns())}).on("error",()=>{this.column.editLoading=!1,this.loadColumns()})},methods:{not(...n){return!n.includes(this.dbType)},updateUseCurrentTimestamp(n){n&&(this.editColumn.defaultValue="CURRENT_TIMESTAMP")},selectType(){const n=this.filterTypes[0];n&&(this.editColumn.type=n.value||n,this.typeSelector.visible=!1)},loadColumns(){this.emit("columns"),this.columnLoading=!0},newColumn(){this.editColumn={name:"",type:""},this.column.isNew=!0,this.column.editVisible=!0},openEdit(n){this.editColumn={...n,columnName:n.name,oldRow:n},this.column.isNew=!1,this.column.editVisible=!0,this.column.editLoading=!1},changeColumn(n,e){this.column.isNew=!1,this.editColumn={...n,columnName:n.name,oldRow:this.copyedColumns[e]},this.updateColumn()},updateColumn(){if(!this.previewSQL)return J("No any change!");if(this.column.editLoading=!0,this.column.isNew)return this.doCreate();try{this.emit("execute",{type:"column",sql:this.previewSQL})}catch(n){J(n.message),this.column.editLoading=!1}},doCreate(){this.emit("execute",{type:"column",sql:this.previewSQL})},deleteConfirm(n){z(this.$t("design.deleteColumnConfirm")).then(()=>{this.emit("execute",{type:"column",sql:this.dialect.dropColumn(n.name)})})}}},ce=n=>(be("data-v-c51c15e1"),n=n(),Le(),n),ht={key:0,ref:"infoPanel",class:"design-toolbar"},bt=["title"],Lt={class:"text-center"},Ot=ce(()=>C("br",null,null,-1)),St={class:"max-h-[300px]"},Mt=["onClick"],wt=ce(()=>C("br",null,null,-1)),$t=ce(()=>C("br",null,null,-1));function It(n,e,t,a,r,l){const o=O("vsc-button"),E=Z,c=_e,T=ee,A=O("RedMark"),N=re,_=te,M=$e,$=ne,D=O("codemirror"),y=ae,Y=K;return m(),h("div",null,[n.canAlterTable?(m(),h("div",ht,[i(o,{type:"icon",icon:"codicon-add text-base",title:n.$t("common.new"),onClick:l.newColumn},null,8,["title","onClick"]),i(o,{type:"icon",icon:"codicon-refresh text-base",title:n.$t("common.refresh"),onClick:l.loadColumns},null,8,["title","onClick"])],512)):p("",!0),t.activePanel=="column"?f((m(),R(T,{key:1,data:r.columns,height:t.remainHeight,border:"",onRowDblclick:l.openEdit},{default:u(()=>[i(E,{resizable:!0,align:"center",prop:"name",label:n.$t("common.name"),width:"180"},null,8,["label"]),i(E,{resizable:!0,align:"center",prop:"type",label:n.$t("common.type"),width:l.isSmall?100:130},null,8,["label","width"]),["DuckDB"].includes(r.dbType)?p("",!0):(m(),R(E,{key:0,resizable:!0,align:"center",prop:"comment",label:n.$t("common.comment"),width:"100"},{default:u(({row:s})=>[C("span",{title:s==null?void 0:s.comment},b(s==null?void 0:s.comment),9,bt)]),_:1},8,["label"])),i(E,{resizable:!0,align:"center",prop:"maxLength",width:80,label:n.$t("design.length")},null,8,["label"]),i(E,{resizable:!0,align:"center",prop:"defaultValue",width:l.isSmall?75:110,label:n.$t("common.default")},null,8,["width","label"]),i(E,{align:"center",label:"Not Null",width:80},{default:u(({row:s,rowIndex:w})=>[i(c,{modelValue:s.isNotNull,"onUpdate:modelValue":I=>s.isNotNull=I,onChange:I=>l.changeColumn(s,w)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(E,{align:"center",label:n.$t("design.isPrimary"),width:l.isSmall?80:90},{default:u(({row:s})=>[i(c,{disabled:"","model-value":s.isPrimary},null,8,["model-value"])]),_:1},8,["label","width"]),i(E,{align:"center",label:n.$t("design.isUnique"),width:l.isSmall?60:80},{default:u(({row:s})=>[i(c,{disabled:"","model-value":s.isUnique},null,8,["model-value"])]),_:1},8,["label","width"]),l.isMySQL?(m(),h(U,{key:1},[i(E,{align:"center",label:"UNSIGNED",width:"80"},{default:u(({row:s,rowIndex:w})=>[i(c,{modelValue:s.unsigned,"onUpdate:modelValue":I=>s.unsigned=I,"true-value":"1","false-value":"0",onChange:I=>l.changeColumn(s,w)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(E,{align:"center",label:"Zerofill",width:l.isSmall?60:80},{default:u(({row:s,rowIndex:w})=>[i(c,{modelValue:s.zerofill,"onUpdate:modelValue":I=>s.zerofill=I,"true-value":"1","false-value":"0",onChange:I=>l.changeColumn(s,w)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["width"])],64)):p("",!0),["DuckDB"].includes(r.dbType)?p("",!0):(m(),R(E,{key:2,align:"center",label:n.$t("design.isAutoIncrement"),width:"110"},{default:u(({row:s,rowIndex:w})=>[i(c,{modelValue:s.isAutoIncrement,"onUpdate:modelValue":I=>s.isAutoIncrement=I,disabled:!s.isPrimary||!l.supportChangeIncrement,onChange:I=>l.changeColumn(s,w)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(r.dbType)?p("",!0):(m(),R(E,{key:3,label:n.$t("design.operation"),width:"100"},{default:u(({row:s,rowIndex:w})=>[C("div",Lt,[i(o,{type:"icon",icon:"codicon-edit",title:"edit",onClick:I=>l.openEdit(s,w)},null,8,["onClick"]),i(o,{type:"icon",icon:"codicon-remove",title:"delete",onClick:I=>l.deleteConfirm(s)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height","onRowDblclick"])),[[Y,r.columnLoading]]):p("",!0),i(y,{modelValue:r.column.editVisible,"onUpdate:modelValue":e[12]||(e[12]=s=>r.column.editVisible=s),title:l.tilte,width:"680px",closeOnClickModal:!1,center:""},{footer:u(()=>[i(o,{type:"secondary",onClick:e[11]||(e[11]=s=>r.column.editVisible=!1)},{default:u(()=>[L(b(n.$t("common.cancel")),1)]),_:1}),i(o,{type:"primary",loading:r.column.editLoading,onClick:l.updateColumn},{default:u(()=>[L(b(n.$t("common.ok")),1)]),_:1},8,["loading","onClick"]),wt,L(),$t,f(i(D,{ref:"cmEditor",value:l.previewSQL},null,8,["value"]),[[P,l.previewSQL]])]),default:u(()=>[i($,{inline:!0,"label-width":"90px",size:"small"},{default:u(()=>[i(_,null,{label:u(()=>[i(A),L(b(n.$t("common.name")),1)]),default:u(()=>[i(N,{modelValue:r.editColumn.name,"onUpdate:modelValue":e[0]||(e[0]=s=>r.editColumn.name=s),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),l.supportUnsigned?(m(),R(_,{key:0,label:"ZEROFILL"},{default:u(()=>[i(c,{modelValue:r.editColumn.zerofill,"onUpdate:modelValue":e[1]||(e[1]=s=>r.editColumn.zerofill=s),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):p("",!0),l.mysqlTimestamp?(m(),R(_,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:u(()=>[i(c,{modelValue:r.editColumn.useCurrentTimestamp,"onUpdate:modelValue":e[2]||(e[2]=s=>r.editColumn.useCurrentTimestamp=s),onChange:l.updateUseCurrentTimestamp},null,8,["modelValue","onChange"])]),_:1})):p("",!0),Ot,i(_,null,{label:u(()=>[i(A),L(b(n.$t("common.type")),1)]),default:u(()=>[i(M,{visible:r.typeSelector.visible,"onUpdate:visible":e[6]||(e[6]=s=>r.typeSelector.visible=s),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:u(()=>[i(N,{modelValue:r.editColumn.type,"onUpdate:modelValue":e[3]||(e[3]=s=>r.editColumn.type=s),size:"small",fixed:"",onKeyup:X(l.selectType,["enter"]),onInput:e[4]||(e[4]=s=>{r.typeSelector.inputing=!0,r.typeSelector.visible=!0}),onClick:e[5]||(e[5]=s=>r.typeSelector.inputing=!1)},null,8,["modelValue","onKeyup"])]),default:u(()=>[C("div",St,[(m(!0),h(U,null,H(l.filterTypes,(s,w)=>(m(),h(U,null,[s=="hr"?(m(),h("div",{key:w,class:"w-full type-hr bg-bg"})):(m(),h("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:I=>{r.editColumn.type=s.value||s,r.typeSelector.visible=!1}},b(s.label||s),9,Mt))],64))),256))])]),_:1},8,["visible"])]),_:1}),l.not("ClickHouse")?(m(),R(_,{key:2,label:n.$t("design.isNotNull")},{default:u(()=>[i(c,{modelValue:r.editColumn.isNotNull,"onUpdate:modelValue":e[7]||(e[7]=s=>r.editColumn.isNotNull=s)},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),l.supportUnsigned?(m(),R(_,{key:3,label:"UNSIGNED"},{default:u(()=>[i(c,{modelValue:r.editColumn.unsigned,"onUpdate:modelValue":e[8]||(e[8]=s=>r.editColumn.unsigned=s),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):p("",!0),!["SqlServer","Snowflake"].includes(r.dbType)||r.column.isNew?(m(),R(_,{key:4,label:n.$t("common.default")},{default:u(()=>[i(N,{modelValue:r.editColumn.defaultValue,"onUpdate:modelValue":e[9]||(e[9]=s=>r.editColumn.defaultValue=s),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),["SqlServer","DuckDB"].includes(r.dbType)?p("",!0):(m(),R(_,{key:5,label:n.$t("common.comment")},{default:u(()=>[i(N,{modelValue:r.editColumn.comment,"onUpdate:modelValue":e[10]||(e[10]=s=>r.editColumn.comment=s),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}const ft=x(pt,[["render",It],["__scopeId","data-v-c51c15e1"]]),gt={mixins:[V],data(){return{dialect:null,collations:[],table:{name:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null}}},mounted(){this.on("designMeta",n=>{this.table.name=n.table,this.table.newTableName=n.table,this.table.comment=n.comment,this.table.newComment=n.comment,this.table.collation=n.collation,this.table.newCollation=n.collation,this.dialect=Q(n)}).on("collations",n=>{this.collations=n})},methods:{updateTableMeta(){const n={...this.table,table:this.table.name};this.emit("updateTable",n);const e=this.dialect.updateTable(n);e?this.emit("execute",{type:"table",sql:e}):J("No any change!")}}},Dt={class:"ml-4"},yt={class:"flex flex-col gap-y-2"},Ut={class:"flex-wrap"},Bt={class:"inline-block mr-5"},Ft={class:"font-bold mr-5 inline-block"},Ht={class:"inline-block mr-5"},Pt={class:"font-bold mr-5 inline-block"},vt={class:"flex-wrap"},kt={key:0,class:"inline-block mr-5"},Vt={class:"font-bold mr-5 inline-block"},xt={class:"inline-block pt-1"};function Yt(n,e,t,a,r,l){const o=re,E=oe,c=se,T=O("vsc-button");return m(),h("div",Dt,[C("div",yt,[C("div",Ut,[C("div",Bt,[C("label",Ft,b(n.$t("design.table")),1),i(o,{modelValue:r.table.newTableName,"onUpdate:modelValue":e[0]||(e[0]=A=>r.table.newTableName=A),class:"!w-48",required:"",onKeyup:X(l.updateTableMeta,["enter"])},null,8,["modelValue","onKeyup"])]),C("div",Ht,[C("label",Pt,b(n.$t("common.comment")),1),i(o,{modelValue:r.table.newComment,"onUpdate:modelValue":e[1]||(e[1]=A=>r.table.newComment=A),class:"!w-48",onKeyup:X(l.updateTableMeta,["enter"])},null,8,["modelValue","onKeyup"])])]),C("div",vt,[r.table.collation!=null&&r.collations.length>0?(m(),h("div",kt,[C("label",Vt,b(n.$t("design.collate")),1),i(c,{modelValue:r.table.newCollation,"onUpdate:modelValue":e[2]||(e[2]=A=>r.table.newCollation=A),size:"small",filterable:""},{default:u(()=>[(m(!0),h(U,null,H(r.collations,A=>(m(),R(E,{key:A.name,label:A.name,value:A.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):p("",!0),C("div",xt,[i(T,{type:"success",onClick:l.updateTableMeta},{default:u(()=>[L(b(n.$t("common.update")),1)]),_:1},8,["onClick"])])])])])}const Wt=x(gt,[["render",Yt]]),Gt={components:{codemirror:q},mixins:[V],props:["remainHeight","activePanel"],data(){return{tableList:[],dbType:null,columns:[],dialect:null,loading:!0,status:{visible:!1,loading:!1},editModel:{clause:null}}},computed:{...G(W,["canAlterTable"]),previewSQL(){return this.editModel.clause?this.dialect.newCheck(this.editModel.clause):""}},mounted(){this.on("designMeta",n=>{const{columns:e,dbType:t}=n;this.columns=e,this.dbType=t,this.dialect=Q(n),this.loadData()}).on("checks",n=>{this.loading=!1,this.tableList=n}).on("success",n=>{n=="check"&&(this.loadData(),this.status.visible=!1,this.status.loading=!1)}).on("error",()=>{this.status.loading=!1})},methods:{loadData(){const n=this.dialect.showChecks();if(!n){console.log("This database type does not currently support check."),this.loading=!1;return}this.loading=!0,this.emit("checks",n)},openDialog(){this.status={visible:!0,loading:!1},this.editModel={clause:null}},doCreate(){this.status.loading=!0,this.emit("execute",{type:"check",sql:this.previewSQL})},deleteConfirm(n){z(this.$t("design.deleteCheckConfirm")).then(()=>{this.emit("execute",{type:"check",sql:this.dialect.dropCheck(n.name)})})}}},qt={key:0,class:"design-toolbar"},Kt={class:"text-center"},jt=C("br",null,null,-1),Qt=C("br",null,null,-1);function Xt(n,e,t,a,r,l){const o=O("vsc-button"),E=Z,c=ee,T=O("RedMark"),A=re,N=te,_=ne,M=O("codemirror"),$=ae,D=K;return m(),h("div",null,[n.canAlterTable?(m(),h("div",qt,[i(o,{type:"icon",icon:"codicon-add text-base",title:n.$t("common.new"),onClick:l.openDialog},null,8,["title","onClick"]),i(o,{type:"icon",icon:"codicon-refresh text-base",title:n.$t("common.refresh"),onClick:l.loadData},null,8,["title","onClick"])])):p("",!0),t.activePanel=="check"?f((m(),R(c,{key:1,data:r.tableList,height:t.remainHeight,border:""},{default:u(()=>[n.canAlterTable?(m(),R(E,{key:0,resizable:!0,align:"center",prop:"name",label:n.$t("design.constraintName"),width:"200"},null,8,["label"])):p("",!0),i(E,{resizable:!0,align:"center",prop:"clause",label:n.$t("design.clause"),width:"200"},null,8,["label"]),n.canAlterTable?(m(),R(E,{key:1,label:n.$t("design.operation"),width:"100"},{default:u(({row:y})=>[C("div",Kt,[i(o,{type:"icon",icon:"codicon-remove",title:"delete",onClick:Y=>l.deleteConfirm(y)},null,8,["onClick"])])]),_:1},8,["label"])):p("",!0)]),_:1},8,["data","height"])),[[D,r.loading]]):p("",!0),i($,{modelValue:r.status.visible,"onUpdate:modelValue":e[3]||(e[3]=y=>r.status.visible=y),title:n.$t("design.newCheck"),width:"430px",closeOnClickModal:!1,center:""},{footer:u(()=>[i(o,{type:"secondary",onClick:e[2]||(e[2]=y=>r.status.visible=!1)},{default:u(()=>[L(b(n.$t("common.cancel")),1)]),_:1}),i(o,{type:"primary",loading:r.status.loading,onClick:l.doCreate},{default:u(()=>[L(b(n.$t("common.ok")),1)]),_:1},8,["loading","onClick"]),jt,L(),Qt,f(i(M,{ref:"cmEditor",value:l.previewSQL},null,8,["value"]),[[P,l.previewSQL]])]),default:u(()=>[i(_,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:e[1]||(e[1]=Oe(()=>{},["prevent"])),onKeyup:X(l.doCreate,["enter"])},{default:u(()=>[i(N,null,{label:u(()=>[i(T),L(b(n.$t("design.clause")),1)]),default:u(()=>[i(A,{modelValue:r.editModel.clause,"onUpdate:modelValue":e[0]||(e[0]=y=>r.editModel.clause=y),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1},8,["onKeyup"])]),_:1},8,["modelValue","title"])])}const Jt=x(Gt,[["render",Xt]]),zt={components:{IndexPanel:st,ColumnPanel:ft,InfoPanel:Wt,ForeignKey:Ct,Check:Jt,DDL:ut},mixins:[V],data(){return{remainHeight:0,panels:[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:()=>!this.supportForeignKey},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:()=>!this.supportIndex},{id:"check",i18n:"design.check",icon:"codicon-tools orange",hidden:()=>!this.supportCheck}],activePanel:"column"}},computed:{...G(W,["canAlterTable","supportForeignKey","supportIndex","supportCheck"]),computedPanels(){return this.panels.filter(n=>{var e;return((e=n==null?void 0:n.hidden)==null?void 0:e.call(n))!=!0})}},mounted(){const n=W();this.on("dbType",a=>{n.updateDBType(a)}).on("designMeta",a=>{n.updateFullInfo(a)}).on("success",()=>{Te(this.$t("design.updateSuccess"))}).on("error",a=>{J(a)}).on("refresh_design",()=>{this.init()}),this.init(),window.addEventListener("focus",()=>{this.init()});const e=this.$refs.infoPanel,t=()=>{var r;const a=((r=document.getElementById("tableTab"))==null?void 0:r.clientHeight)||0;this.remainHeight=window.innerHeight-55-e.clientHeight-a};t(),new ResizeObserver(t).observe(e),addEventListener("resize",t)},methods:{init(){this.emit("init",{type:"design"})}}},Zt={class:"mt-2 design-container"},en={ref:"infoPanel"},tn={class:"tab"},nn=["onClick"],an={class:"design-data-container"};function rn(n,e,t,a,r,l){const o=O("InfoPanel"),E=O("ColumnPanel"),c=O("ForeignKey"),T=O("IndexPanel"),A=O("Check"),N=O("DDL");return m(),h("div",Zt,[C("div",en,[i(o),C("ul",tn,[(m(!0),h(U,null,H(l.computedPanels,(_,M)=>(m(),h("li",{key:M,class:ue(["tab__item",{"tab__item--active":r.activePanel==_.id}]),onClick:$=>r.activePanel=_.id},[_.icon?(m(),h("i",{key:0,type:"icon",class:ue(_.icon),style:{position:"relative",top:"3px"}},null,2)):p("",!0),L(" "+b(n.$t(_.i18n)),1)],10,nn))),128))])],512),C("div",an,[f(i(E,{remainHeight:r.remainHeight,activePanel:r.activePanel},null,8,["remainHeight","activePanel"]),[[P,r.activePanel=="column"]]),f(i(c,{remainHeight:r.remainHeight,activePanel:r.activePanel},null,8,["remainHeight","activePanel"]),[[P,r.activePanel=="foreignKey"]]),f(i(T,{remainHeight:r.remainHeight,activePanel:r.activePanel},null,8,["remainHeight","activePanel"]),[[P,r.activePanel=="index"]]),f(i(A,{remainHeight:r.remainHeight,activePanel:r.activePanel},null,8,["remainHeight","activePanel"]),[[P,r.activePanel=="check"]]),f(i(N,{activePanel:r.activePanel},null,8,["activePanel"]),[[P,r.activePanel=="ddl"]])])])}const Fn=x(zt,[["render",rn],["__scopeId","data-v-abf135ec"]]);export{Fn as default};
