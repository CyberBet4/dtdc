<?php
// OPEN CONNECTION
// $conn = new mysqli('localhost', 'dtdcltdc_user', '-qAg604#6teMVD', 'dtdcltdc_db');
$conn = new mysqli('localhost', 'root', '', 'dtdc_db');
// CHECK CONNECTION
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

// QUERY DATABASE
$sql = "SELECT * FROM trackingnum";

$result = $conn->query($sql);
$newdate = date('Y-m-d H:i:s');
$date = $newdate;

// CHECK IF CODE ALREADY EXISTS
if($result->num_rows > 0) {
    // get date from db where code is found
    while($row = $result->fetch_assoc()) {
        // $date = $row['created_at'];
        $trackid = $row['trackid'];
        $counts = $row['counts'];
        $dateone = $row['dateone'];
        $datetwo = $row['datetwo'];
        $datethree = $row['datethree'];
        $datefour = $row['datefour'];


        // update 

        if($counts == 1){
            $updatesql = "UPDATE trackingnum SET counts = $counts+1, dateone = '".$dateone."'  WHERE trackid = $trackid";
            if (!$conn->query($updatesql)) {
                die('Invalid query: ' . $conn->error);
            }
        }else if($counts == 2){
            $updatesql = "UPDATE trackingnum SET counts = $counts+1, datetwo = '".$date."'  WHERE trackid = $trackid";
            if (!$conn->query($updatesql)) {
                die('Invalid query: ' . $conn->error);
            }
        }else if($counts == 3){
            $updatesql = "UPDATE trackingnum SET counts = $counts+1, datethree = '".$date."'  WHERE trackid = $trackid";    
            if (!$conn->query($updatesql)) {
                die('Invalid query: ' . $conn->error);
            }
        }else if($counts == 4){
            $updatesql = "UPDATE trackingnum SET counts = $counts+1, datefour = '".$date."'  WHERE trackid = $trackid";
            if (!$conn->query($updatesql)) {
                die('Invalid query: ' . $conn->error);
            }
        }

        // $updatesql = "UPDATE trackingnum SET counts = $counts+1, tme = '".$date."'  WHERE trackid = $trackid";
        

        echo 'All good';
        echo 'Track Id:'. $trackid . ', ' . 'Counts: ' . $counts . ', ' . 'Timestamp: ' . $date;
    }
}
echo 'Date: ' . $date ;
echo 'hello';

$conn->close();

