 
        var pontos1 = 0;// do jogador 1 
        var pontos2 = 0;// do jogador 2 
        var matchs = 1;// matchs

        var papel = document.getElementById('papel');
        var pedra = document.getElementById('pedra');
        var tesoura = document.getElementById('tesoura');

        var result1 = document.getElementById('result1');
        var result2 = document.getElementById('result2');

        let escolha1;

        papel.onclick = function() {
            result1.innerHTML = "<img src='pedra-papel-tesoura/papel.png' class='img' width='90' height='100'>";
            escolha1 = "Papel";

            if (matchs == 10) {
                anuncia_vencedor();
            } else {
                inicia_match();
            }


        };
        pedra.onclick = function() {
            result1.innerHTML = "<img src='pedra-papel-tesoura/pedra.png' class='img' width='90' height='100'>";
            escolha1 = "Pedra";
            if (matchs == 10) {
                anuncia_vencedor();
            } else {
                inicia_match();
            }
        };
        tesoura.onclick = function() {
            result1.innerHTML = "<img src='pedra-papel-tesoura/tesoura.png' class='img' width='90' height='100'>";
            escolha1 = "Tesoura";
            if (matchs == 10) {
                anuncia_vencedor();
            } else {
                inicia_match();
            }
        };





        function inicia_match() {

            // adversario escolha2 
            var rand = Math.floor(Math.random() * 3);


            if (rand == 0) {

                result2.innerHTML = "<img src='pedra-papel-tesoura/pedra.png' class='img' width='90' height='100'>";
                escolha2 = "Pedra";
            }

            if (rand == 1) {

                result2.innerHTML = "<img src='pedra-papel-tesoura/papel.png' class='img' width='90' height='100'>";
                escolha2 = "Papel";
            }


            if (rand == 2) {

                result2.innerHTML = "<img src='pedra-papel-tesoura/tesoura.png' class='img' width='90' height='100'>";
                escolha2 = "Tesoura";
            }




            // VERIFICAÇÃO DE QUEM GANHOU 
            if (escolha1 == "Pedra" && escolha2 == "Tesoura") {
                document.getElementById("status").innerHTML = "<b style='color:green;'>Venceu!</b>";
                pontos1++;
                if (pontos2 > 0) {
                    pontos2--;
                }

            }
            if (escolha1 == "Tesoura" && escolha2 == "Papel") {
                document.getElementById("status").innerHTML = "<b style='color:green;'>Venceu!</b>";
                pontos1++;
                if (pontos2 > 0) {
                    pontos2--;
                }
            }
            if (escolha1 == "Papel" && escolha2 == "Pedra") {
                document.getElementById("status").innerHTML = "<b style='color:green;'>Venceu!</b>";
                pontos1++;
                if (pontos2 > 0) {
                    pontos2--;
                }
            }
            // VERIFICAÇÃO DE QUEM GANHOU 
            if (escolha2 == "Pedra" && escolha1 == "Tesoura") {
                document.getElementById("status").innerHTML = "<b style='color:red;'>Perdeu!</b>";
                if (pontos1 > 0) {
                    pontos1--;
                }
                pontos2++;
                matchs++;
            }
            if (escolha2 == "Tesoura" && escolha1 == "Papel") {
                document.getElementById("status").innerHTML = "<b style='color:red;'>Perdeu!</b>";
                if (pontos1 > 0) {
                    pontos1--;
                }
                pontos2++;
                matchs++;
            }
            if (escolha2 == "Papel" && escolha1 == "Pedra") {
                document.getElementById("status").innerHTML = "<b style='color:red;'>Perdeu!</b>";
                if (pontos1 > 0) {
                    pontos1--;
                }
                pontos2++;
                matchs++;
            }




            // EMPATES
            if (escolha1 == "Pedra" && escolha2 == "Pedra") {
                document.getElementById("status").innerHTML = "<b style='color:orange;'>Empate!</b>";
                matchs++;
            }
            if (escolha1 == "Papel" && escolha2 == "Papel") {
                document.getElementById("status").innerHTML = "<b style='color:orange;'>Empate!</b>";
                matchs++;
            }
            if (escolha1 == "Tesoura" && escolha2 == "Tesoura") {
                document.getElementById("status").innerHTML = "<b style='color:orange;'>Empate!</b>";
                matchs++;
            }

        }






        //ANUNCIA O VENCEDOR E RESETA O JOGO   
        function anuncia_vencedor() {
            if (matchs == 10) {
                if (pontos1 > pontos2) {
                    window.confirm('Jogador 1 Venceu');
                    matchs = 1;
                    pontos1 = 0;
                    pontos2 = 0;
                }
                if (pontos1 < pontos2) {
                    window.confirm('Jogador 2 Venceu');
                    matchs = 1;
                    pontos1 = 0;
                    pontos2 = 0;
                }
                /*if (pontos1 == pontos2) {
                    window.confirm('EMPATE!');
                    matchs = 1;
                    pontos1 = 0;
                    pontos2 = 0;
                }*/


            }
        }



        // ATUALIZA EM TEMPO REAL  
        setInterval(function() {
            document.getElementById("pontos1").innerHTML = pontos1;
            document.getElementById("pontos2").innerHTML = pontos2;
            document.getElementById("matchs").innerHTML = matchs;
        }, 100);
 
