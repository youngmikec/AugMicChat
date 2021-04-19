import { Injectable } from '@angular/core'

@Injectable()
export class MessageService {
    
    message(){
        let messages = document.querySelector("#textArea").nodeValue
    }
}