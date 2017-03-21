<?php
/**
 * Created by PhpStorm.
 * User: Dev-1
 * Date: 21.3.2017 г.
 * Time: 14:25 ч.
 */
const HOST = 'localhost';
const NAME = 'hr';
const USER = 'root';
const PASSWORD = '';

$salary = isset($_GET['salary']) ? $_GET['salary'] : 0;

try{
    $db = new PDO("mysql:host=". HOST .";dbname=" . NAME, USER, PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $resultSet = $db->query('SELECT first_name, last_name, salary FROM employees WHERE salary > ' . $salary);

    $table = [];

    while ($row = $resultSet->fetch(PDO::FETCH_NUM)){
        $table[] = $row;
    }

    echo json_encode($table);

} catch (PDOException $e){
    echo $e->getMessage();
} catch (Exception $e){
    echo $e->getMessage();
}
?>