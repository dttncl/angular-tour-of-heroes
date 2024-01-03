import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})

export class MessagesComponent {
  // provides access to messageService for the template
  constructor(public messageService: MessageService) {};
}
