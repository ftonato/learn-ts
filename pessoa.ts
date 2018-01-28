import Carro from "./carro";

export default class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro: any;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  public dizerCarroAtual(): Carro {
    return this.carro;
  }
}
