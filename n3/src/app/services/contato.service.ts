import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  contato = {
    id: '',
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
  };

  private apiUrl = 'http://localhost:3000/contatos';

  constructor() {}

  async addContato(contato: any) {
    try {
      const response = await axios.post(this.apiUrl, contato);
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar usuario:', error);
      throw error;
    }
  }

  async getContato() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer a requisiçao do contato:', error);
      throw error;
    }
  }

  async getContatos(id: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer a requisição do contato:', error);
      throw error;
    }
  }

  async removeContato(id: number) {
    try {
      const response = await axios.delete(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro na service', error);
      throw error;
    }
  }

  async updateContato(id: string, contato: any) {
    try {
      const response = await axios.put(
        `${this.apiUrl}/${parseInt(id)}`,
        contato
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
      throw error;
    }
  }
}
