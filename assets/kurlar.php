<?php
require_once("Doviz.php");
$doviz = new Doviz();
echo " USD Alış:" . $doviz->kurAlis("USD");
echo " USD Satış:" . $doviz->kurSatis("USD");
echo " EURO Efektif Alış:" . $doviz->kurAlis("EUR", Doviz::TYPE_EFEKTIFALIS);
echo " EURO Efektif Satış:" . $doviz->kurSatis("EUR", Doviz::TYPE_EFEKTIFSATIS);