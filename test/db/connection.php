<?php
class Connection{
    public static function Connect(){
        define('server','localhost');
        define('db_name','api');
        define('user','root');
        define('password','root');
        define('port', 8889);
    
    $options= array(PDO::MSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
    try{
        $connection= new PDO("mysql:host=".server.";dbname=".db_name.user,password, $options);
        return $connection;
    }
    catch(Exception $e){
        die("Connection Error:". $e->getMessage());
    }
  }
 } 

?>