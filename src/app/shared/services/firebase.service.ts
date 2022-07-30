import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { IContactMeMessage } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore) { }

  saveMessage(data: IContactMeMessage) {
    return this.store.collection('contact-messages').add(data);
  }
}
