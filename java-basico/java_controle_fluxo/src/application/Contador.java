package application;

import java.util.Scanner;

public class Contador {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite o 1º parâmetro: ");
		int parametro_um = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Digite o 2º parâmetro: ");
		int parametro_dois = sc.nextInt();
		
		try {
				contar(parametro_um, parametro_dois);

		}catch(ParametrosInvalidosException e){
			System.out.println("O segundo parâmetro deve ser maior que o primeiro");
			
		}
		
		sc.close();
	}
	static void contar(int parametro_um, int parametro_dois) throws ParametrosInvalidosException {
		
		if (parametro_um > parametro_dois) {
			throw new ParametrosInvalidosException();
		}
		int contagem = parametro_dois - parametro_um;
		for (int i=1; i<=contagem; i++){
			System.out.print(i+"º Ocorrência ");
		}
	}
}