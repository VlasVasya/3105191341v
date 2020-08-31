<?php
/**
 * Created by PhpStorm.
 * User: VlasVasya
 * Date: 30.08.2020
 * Time: 21:47
 */
require ('config_db.php');
class Validate
{
    private $conn;
    public function __construct()
    {
        $this->conn = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASS);

    }
    public function sawe_to_db($p_arr){

        try {
            $sql = "INSERT INTO  order_address( name, city, area, street, house, form_desc) VALUES (?,?,?,?,?,?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$p_arr['p_name'], $p_arr['p_city'],$p_arr['p_area'] , $p_arr['p_street'],$p_arr['p_house'] , $p_arr['form_desc']]);
            //$this->conn->commit();

        }
        catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    public  function get_address(){
        $sql = 'SELECT * FROM order_address ORDER BY name asc ';
        $sth =$this->conn->prepare($sql);
        $sth->execute();
        $result = $sth->fetchAll();
       return $result;
    }
    function __destruct() {
        $this->conn=null;
    }

}
