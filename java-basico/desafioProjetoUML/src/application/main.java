package application;

public class main {

	public static void main(String[] args) {
		aparelhoTelefonico telefone = new aparelhoTelefonico();
		
		telefone.ligar();
		telefone.atender();
		telefone.iniciarCorreioVoz();
		
		navegadorInternet internet = new navegadorInternet();
		
		internet.exibirPagina();
		internet.adicionarNovaAba();
		internet.atualizarPagina();
		
		reprodutorMusical reprodutor = new reprodutorMusical();
			
		reprodutor.tocar();
		reprodutor.pausar();
		reprodutor.selecionarMusica();
			
	
	}

}
