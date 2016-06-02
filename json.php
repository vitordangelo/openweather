<?php 

	$json = file_get_contents('http://api.openweathermap.org/data/2.5/forecast?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8');
	$obj = json_decode($json);

	$weather = array
	  (
	  array('tmp'=> $obj->list[0]->main->temp,'dt'=> $obj->list[0]->dt, 'humidity'=> $obj->list[0]->main->humidity),
	  array('tmp'=> $obj->list[1]->main->temp,'dt'=> $obj->list[1]->dt, 'humidity'=> $obj->list[1]->main->humidity),
	  array('tmp'=> $obj->list[2]->main->temp,'dt'=> $obj->list[2]->dt, 'humidity'=> $obj->list[2]->main->humidity),
	  array('tmp'=> $obj->list[3]->main->temp,'dt'=> $obj->list[3]->dt, 'humidity'=> $obj->list[3]->main->humidity),
	  array('tmp'=> $obj->list[4]->main->temp,'dt'=> $obj->list[4]->dt, 'humidity'=> $obj->list[4]->main->humidity),
	  array('tmp'=> $obj->list[5]->main->temp,'dt'=> $obj->list[5]->dt, 'humidity'=> $obj->list[5]->main->humidity),
	  array('tmp'=> $obj->list[6]->main->temp,'dt'=> $obj->list[6]->dt, 'humidity'=> $obj->list[6]->main->humidity),
	  array('tmp'=> $obj->list[7]->main->temp,'dt'=> $obj->list[7]->dt, 'humidity'=> $obj->list[7]->main->humidity),
	  array('tmp'=> $obj->list[8]->main->temp,'dt'=> $obj->list[8]->dt, 'humidity'=> $obj->list[8]->main->humidity),
	  array('tmp'=> $obj->list[9]->main->temp,'dt'=> $obj->list[9]->dt, 'humidity'=> $obj->list[9]->main->humidity),
	  array('tmp'=> $obj->list[10]->main->temp,'dt'=> $obj->list[10]->dt, 'humidity'=> $obj->list[10]->main->humidity),
	  array('tmp'=> $obj->list[11]->main->temp,'dt'=> $obj->list[11]->dt, 'humidity'=> $obj->list[11]->main->humidity),
	  array('tmp'=> $obj->list[12]->main->temp,'dt'=> $obj->list[12]->dt, 'humidity'=> $obj->list[12]->main->humidity),
	  array('tmp'=> $obj->list[13]->main->temp,'dt'=> $obj->list[13]->dt, 'humidity'=> $obj->list[13]->main->humidity),
	  array('tmp'=> $obj->list[14]->main->temp,'dt'=> $obj->list[14]->dt, 'humidity'=> $obj->list[14]->main->humidity),
	  array('tmp'=> $obj->list[15]->main->temp,'dt'=> $obj->list[15]->dt, 'humidity'=> $obj->list[15]->main->humidity),
	  array('tmp'=> $obj->list[16]->main->temp,'dt'=> $obj->list[16]->dt, 'humidity'=> $obj->list[16]->main->humidity),
	  array('tmp'=> $obj->list[17]->main->temp,'dt'=> $obj->list[17]->dt, 'humidity'=> $obj->list[17]->main->humidity),
	  array('tmp'=> $obj->list[18]->main->temp,'dt'=> $obj->list[18]->dt, 'humidity'=> $obj->list[18]->main->humidity),
	  array('tmp'=> $obj->list[19]->main->temp,'dt'=> $obj->list[19]->dt, 'humidity'=> $obj->list[19]->main->humidity),
	  array('tmp'=> $obj->list[20]->main->temp,'dt'=> $obj->list[20]->dt, 'humidity'=> $obj->list[20]->main->humidity),
	  array('tmp'=> $obj->list[21]->main->temp,'dt'=> $obj->list[21]->dt, 'humidity'=> $obj->list[21]->main->humidity),
	  array('tmp'=> $obj->list[22]->main->temp,'dt'=> $obj->list[22]->dt, 'humidity'=> $obj->list[22]->main->humidity),
	  array('tmp'=> $obj->list[23]->main->temp,'dt'=> $obj->list[23]->dt, 'humidity'=> $obj->list[23]->main->humidity),
	  array('tmp'=> $obj->list[24]->main->temp,'dt'=> $obj->list[24]->dt, 'humidity'=> $obj->list[24]->main->humidity),
	  array('tmp'=> $obj->list[25]->main->temp,'dt'=> $obj->list[25]->dt, 'humidity'=> $obj->list[25]->main->humidity),
	  array('tmp'=> $obj->list[26]->main->temp,'dt'=> $obj->list[26]->dt, 'humidity'=> $obj->list[26]->main->humidity),
	  array('tmp'=> $obj->list[27]->main->temp,'dt'=> $obj->list[27]->dt, 'humidity'=> $obj->list[27]->main->humidity),
	  array('tmp'=> $obj->list[28]->main->temp,'dt'=> $obj->list[28]->dt, 'humidity'=> $obj->list[28]->main->humidity),
	  array('tmp'=> $obj->list[29]->main->temp,'dt'=> $obj->list[29]->dt, 'humidity'=> $obj->list[29]->main->humidity),
	  array('tmp'=> $obj->list[30]->main->temp,'dt'=> $obj->list[30]->dt, 'humidity'=> $obj->list[30]->main->humidity),
	  array('tmp'=> $obj->list[31]->main->temp,'dt'=> $obj->list[31]->dt, 'humidity'=> $obj->list[31]->main->humidity),
	  array('tmp'=> $obj->list[32]->main->temp,'dt'=> $obj->list[32]->dt, 'humidity'=> $obj->list[32]->main->humidity),
	  array('tmp'=> $obj->list[33]->main->temp,'dt'=> $obj->list[33]->dt, 'humidity'=> $obj->list[33]->main->humidity),
	  array('tmp'=> $obj->list[34]->main->temp,'dt'=> $obj->list[34]->dt, 'humidity'=> $obj->list[34]->main->humidity),
	  array('tmp'=> $obj->list[35]->main->temp,'dt'=> $obj->list[35]->dt, 'humidity'=> $obj->list[35]->main->humidity),
	  array('tmp'=> $obj->list[36]->main->temp,'dt'=> $obj->list[36]->dt, 'humidity'=> $obj->list[36]->main->humidity),
	  array('tmp'=> $obj->list[37]->main->temp,'dt'=> $obj->list[37]->dt, 'humidity'=> $obj->list[37]->main->humidity),
	  array('tmp'=> $obj->list[38]->main->temp,'dt'=> $obj->list[38]->dt, 'humidity'=> $obj->list[38]->main->humidity),
	  array('tmp'=> $obj->list[39]->main->temp,'dt'=> $obj->list[39]->dt, 'humidity'=> $obj->list[39]->main->humidity)
	  );

	  echo json_encode($weather);
?>
