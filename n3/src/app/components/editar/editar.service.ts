import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class salvosService {
  private apiUrl = 'http://localhost:3000/contatos';

  constructor() {}


  async getContato() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer a requisiçao do contato no caminhao: editar.service.ts:18', error);
      throw error;
    }
  }
}
