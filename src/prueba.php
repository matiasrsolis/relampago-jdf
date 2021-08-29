<div class="m1">

    
    <div class="b1">
        <div class="d1">

			<?
            /*horario*/
            putenv('TZ=America/Argentina/Buenos_Aires'); 
            $fecha = date("H:i"); 
            
            if ($fecha<='20:59' AND $fecha>='11:00'){
            
                echo 'Abierto, hoy de 11:00 - 21:00 hs';	
            
            } else {
                
                echo 'Cerrado ahora';	
            }
            
            ?>
        
        </div>
        <a href="contactenos.html">Ver nuestros horarios</a>
    </div>