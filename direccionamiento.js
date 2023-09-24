document.addEventListener("DOMContentLoaded", function () {
    const areaSelect = document.getElementById('areaSelect');
    const paraInput = document.getElementById('para');
    const ccInput = document.getElementById('cc');
    const btnPara = document.getElementById('btnPara');
    const btnCc = document.getElementById('btnCc');

    const correos = {
        Incidentes: {
            para: "christian.verar@atm.gob.ec; jenny.palacios@atm.gob.ec; paola.galarza@atm.gob.ec; mabel.litardo@atm.gob.ec",
            cc: "gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; madalaine.cedeno@atm.gob.ec",
        },
        
        ASISTENCIAPOLICIAL: {
            para: "francisco.habze@atm.gob.ec; hardy.cherrez@atm.gob.ec; eduardo.serrano@atm.gob.ec; camilo.aleman0401@hotmail.com; paola.galarza@atm.gob.ec; mabel.litardo@atm.gob.ec",
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec",
        },
        
        CAMARAST2: {
            para: "jaime.sempertegui@atm.gob.ec; christian.dunn@atm.gob.ec; soporte@inesa.ec; erobles@inesa.ec; fpasmay@inesa.ec; jose.lindao@atm.gob.ec; supervisor.ccitt@atm.gob.ec; paola.galarza@atm.gob.ec",
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec",
        },

        CAMARAST1T3T4: {
            para: "soporte@DILEXSA-TECH.COM; alvaro.pinto@atm.gob.ec; soporte.tecnico@atm.gob.ec; malcivar@dilexsa.com; eraad@DILEXSA-TECH.COM; mlam@DILEXSA-TECH.COM; jose.lindao@atm.gob.ec; jaime.sempertegui@atm.gob.ec; christian.dunn@atm.gob.ec; supervisor.ccitt@atm.gob.ec; paola.galarza@atm.gob.ec",
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec",
        },
        
        COMPORTAMIENTOLIMPIEZA: { 
            para: "yuliana.huilca@atm.gob.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },

        CONTINGENCIAST3: { 
            para: "gabriel.sosa@atm.gob.ec; gerencia.operaciones@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com; secretariaoperaciones@consorciometrobastion.com; info@consorciometrobastion.com; gerenciamb@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com; paola.galarza@atm.gob.ec; christian.verar@atm.gob.ec; jenny.palacios@atm.gob.ec", 
            cc: " juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        
        CONTINGENCIAST1: { 
            para: "gabriel.sosa@atm.gob.ec; jmacias@cmetroquil.com.ec; jlmaciasmetroquil@gmail.com; saulonofre24metroquil@hotmail.com; sonofre@cmetroquil.com.ec; paola.galarza@atm.gob.ec; christian.verar@atm.gob.ec; jenny.palacios@atm.gob.ec", 
            cc: " juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        CONTINGENCIAST2: { 
            para: "gabriel.sosa@atm.gob.ec; joan.castillo@metroexpress.ec; marcelo.ramos@metroexpress.ec; operaciones.metroexpress@gmail.com; incidencias.metroexpress@gmail.com; paola.galarza@atm.gob.ec; christian.verar@atm.gob.ec; jenny.palacios@atm.gob.ec", 
            cc: " juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; madalaine.cedeno@atm.gob.ec", },
        INCIDENCIASBUSES: { 
            para: "Dependiendo de la novedad, escoger el PARA.", 
            cc: " paola.galarza@atm.gob.ec; christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; mabel.litardo@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        INFRAESTRUCTURA: { 
            para: "yuliana.huilca@atm.gob.ec; harry.anda@atm.gob.ec; helena.penaherrera@atm.gob.ec; arturo.villavicencio@atm.gob.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec; george.guerrero@atm.gob.ec", 
        },
        MVRTPANTALLAS: { 
            para: "mcontrol1@consorciostg.com.ec; mcontrol2@consorciostg.com.ec; mcontrol3@consorciostg.com.ec; sup-mcontrol@consorciostg.com.ec; jbustamante@consorciostg.com.ec; cguayas@consorciostg.com.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        PUBLICIDAD: { 
            para: "catalina.medina@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        PUERTASAUTOMATICAS: { 
            para: "consorcioa.alfa@gmail.com; yuliana.huilca@atm.gob.ec; harry.anda@atm.gob.ec; helena.penaherrera@atm.gob.ec; arturo.villavicencio@atm.gob.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec; george.guerrero@atm.gob.ec", 
        },
        TORNIQUETESCOMPUERTAS: { 
            para: "consorciotorniquetesmetrovia@gmail.com; yuliana.huilca@atm.gob.ec; helena.penaherrera@atm.gob.ec; arturo.villavicencio@atm.gob.ec; harry.anda@atm.gob.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " gabriel.sosa@atm.gob.ec; christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec; george.guerrero@atm.gob.ec", 
        },
        VALIDADOR: { 
            para: "mcontrol1@consorciostg.com.ec; mcontrol2@consorciostg.com.ec; mcontrol3@consorciostg.com.ec; sup-mcontrol@consorciostg.com.ec; jbustamante@consorciostg.com.ec; jbustamante@consorciostg.com.ec; cguayas@consorciostg.com.ec; yuliana.huilca@atm.gob.ec; helena.penaherrera@atm.gob.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec; george.guerrero@atm.gob.ec", 
        },
        VIT1: { 
            para: "jmacias@cmetroquil.com.ec; jlmaciasmetroquil@gmail.com; saulonofre24metroquil@hotmail.com; sonofre@cmetroquil.com.ec; rgonzalez@consorciostg.com.ec; aidrovo@consorciostg.com.ec; fcaceres@consorciostg.com.ec; mlopez@consorciostg.com.ec; jmadero@consorciostg.com.ec; lmera@consorciostg.com.ec; jpaz@consorciostg.com.ec; cpilay@consorciostg.com.ec; freyes@consorciostg.com.ec; drodriguez@consorciostg.com.ec; jsanchez@consorciostg.com.ec; dquinde@consorciostg.com.ec; vamador@consorciostg.com.ec; mleon@consorciostg.com.ec; gorrala@consorciostg.com.ec; lvargas@consorciostg.com.ec; vvelasquez@consorciostg.com.ec; smoran@consorciostg.com.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        VIT1MEC: { 
            para: "jmacias@cmetroquil.com.ec; jlmaciasmetroquil@gmail.com; saulonofre24metroquil@hotmail.com; sonofre@cmetroquil.com.ec; rafaelzambrano2@hotmail.com; rgonzalez@consorciostg.com.ec; aidrovo@consorciostg.com.ec; fcaceres@consorciostg.com.ec; mlopez@consorciostg.com.ec; jmadero@consorciostg.com.ec; lmera@consorciostg.com.ec; jpaz@consorciostg.com.ec; cpilay@consorciostg.com.ec; freyes@consorciostg.com.ec; drodriguez@consorciostg.com.ec; jsanchez@consorciostg.com.ec; dquinde@consorciostg.com.ec; vamador@consorciostg.com.ec; mleon@consorciostg.com.ec; gorrala@consorciostg.com.ec; lvargas@consorciostg.com.ec; vvelasquez@consorciostg.com.ec; smoran@consorciostg.com.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        VIT2: { 
            para: "joan.castillo@metroexpress.ec; marcelo.ramos@metroexpress.ec; operaciones.metroexpress@gmail.com; incidencias.metroexpress@gmail.com; rgonzalez@consorciostg.com.ec; aidrovo@consorciostg.com.ec; fcaceres@consorciostg.com.ec; mlopez@consorciostg.com.ec; jmadero@consorciostg.com.ec; lmera@consorciostg.com.ec; jpaz@consorciostg.com.ec; cpilay@consorciostg.com.ec; freyes@consorciostg.com.ec; drodriguez@consorciostg.com.ec; jsanchez@consorciostg.com.ec; dquinde@consorciostg.com.ec; vamador@consorciostg.com.ec; mleon@consorciostg.com.ec; gorrala@consorciostg.com.ec; lvargas@consorciostg.com.ec; vvelasquez@consorciostg.com.ec; smoran@consorciostg.com.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        VIT3: { 
            para: "gerenciamb@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com; gerencia.operaciones@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com; secretariaoperaciones@consorciometrobastion.com; info@consorciometrobastion.com; rgonzalez@consorciostg.com.ec; aidrovo@consorciostg.com.ec; fcaceres@consorciostg.com.ec; mlopez@consorciostg.com.ec; jmadero@consorciostg.com.ec; lmera@consorciostg.com.ec; jpaz@consorciostg.com.ec; cpilay@consorciostg.com.ec; freyes@consorciostg.com.ec; drodriguez@consorciostg.com.ec; jsanchez@consorciostg.com.ec; dquinde@consorciostg.com.ec; vamador@consorciostg.com.ec; mleon@consorciostg.com.ec; gorrala@consorciostg.com.ec; lvargas@consorciostg.com.ec; vvelasquez@consorciostg.com.ec; smoran@consorciostg.com.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        INCIDENCIASFORESTALES: { 
            para: "jlara@guayaquilsigloxxi.com; jorellana@guayaquilsigloxxi.com; gabcarsp@guayaquil.gov.ec", 
            cc: " christian.verar@atm.gob.ec; gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        MB: { 
            para: "gerencia.operaciones@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com; secretariaoperaciones@consorciometrobastion.com; info@consorciometrobastion.com; gerenciamb@consorciometrobastion.com; coordinador.operaciones@consorciometrobastion.com", cc: " ", 
        },
        ME: { 
            para: "joan.castillo@metroexpress.ec; marcelo.ramos@metroexpress.ec; operaciones.metroexpress@gmail.com; incidencias.metroexpress@gmail.com", 
            cc: " ", 
        },
        MQ: { 
            para: "jmacias@cmetroquil.com.ec; jlmaciasmetroquil@gmail.com; saulonofre24metroquil@hotmail.com; sonofre@cmetroquil.com.ec", 
            cc: " ", 
        },
        NOVEDADESISLAS: { 
            para: "mabel.litardo@atm.gob.ec; vanessa.rosero@atm.gob.ec; catalina.medina@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        PERMISOSINGRESO: { 
            para: "mabel.litardo@atm.gob.ec; catalina.medina@atm.gob.ec; vanessa.rosero@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " gabriel.sosa@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", },
        AU: { para: "mabel.litardo@atm.gob.ec; madalaine.cedeno@atm.gob.ec; paola.galarza@atm.gob.ec", cc: " gabriel.sosa@atm.gob.ec; christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec", 
            },
        SOPORTEATM: { 
            para: "jose.lindao@atm.gob.ec", 
            cc: " ", },
        ANALISTA2: { 
            para: "kelly.carguaytongo@atm.gob.ec", 
            cc: " ", },
        SINIESTROINFRAESTRUCTURA: { 
            para: "marcos.salazar@atm.gob.ec; yuliana.huilca@atm.gob.ec; harry.anda@atm.gob.ec; helena.penaherrera@atm.gob.ec; arturo.villavicencio@atm.gob.ec; dlleont@easytec.com.ec; marlon.figueroa@atm.gob.ec; paola.galarza@atm.gob.ec", 
            cc: " christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; bolivar.valarezo@atm.gob.ec; madalaine.cedeno@atm.gob.ec; george.guerrero@atm.gob.ec", 
        },
        CCITT: { 
            para: "christian.dunn@atm.gob.ec; supervisor.ccitt@atm.gob.ec", 
            cc: " ", 
        },
        SEGURIDADINTEGRAL: { 
            para: "hardy.cherrez@atm.gob.ec; eduardo.serrano@atm.gob.ec", 
            cc: " ", 
        },
        TARJETARETENIDA: { 
            para: "coord-sacs@consorciostg.com.ec; coordinacion-recaudo@consorciostg.com.ec", 
            cc: " gabriel.sosa@atm.gob.ec; carlos.zea@atm.gob.ec; christian.verar@atm.gob.ec; juan.cordova@atm.gob.ec; maria.fuentes@atm.gob.ec; jhon.guerra@atm.gob.ec; hector.matamoros@atm.gob.ec; edison.montoya@atm.gob.ec; pedro.mora@atm.gob.ec; andrea.morales@atm.gob.ec; andres.salas@atm.gob.ec; richard.moreno@atm.gob.ec; grimaneza.ruiz@atm.gob.ec; jenny.palacios@atm.gob.ec; madalaine.cedeno@atm.gob.ec", 
        },
        
        Infraestructura: {
            para: "infraestructura@example.com; infraestructura2@example.com",
            cc: 'admin@example.com; admin2@example.com',
        },
        
    };

    areaSelect.addEventListener('change', function () {
        const selectedArea = areaSelect.value;
        if (correos[selectedArea]) {
            paraInput.value = correos[selectedArea].para;
            ccInput.value = correos[selectedArea].cc;
            btnPara.disabled = false;
            btnCc.disabled = false;
        } else {
            paraInput.value = '';
            ccInput.value = '';
            btnPara.disabled = true;
            btnCc.disabled = true;
        }
    });

    btnPara.addEventListener('click', function () {
        paraInput.select();
        document.execCommand('copy');
    });

    btnCc.addEventListener('click', function () {
        ccInput.select();
        document.execCommand('copy');
    });
});
